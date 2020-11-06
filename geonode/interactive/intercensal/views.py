import os
import json
import psycopg2
import uuid
import numpy as np

from decimal import Decimal
from django.db.models import Q
from django.conf import settings
from django.utils.html import escape
from django.utils.text import slugify
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.core.exceptions import PermissionDenied
from django.utils.translation import ugettext as _
from django.db.models import signals
from django.forms.models import inlineformset_factory
from geoserver.catalog import Catalog
from geoserver.store import datastore_from_index
from sld import StyledLayerDescriptor, PolygonSymbolizer, Filter

from lxml.etree import parse
from urllib.request import urlopen
from tempfile import NamedTemporaryFile

from .forms import UploadCustomTableForm, TableCFilterForm, MetadataCustomTableForm, AttributeTableForm
from .models import CustomTable, TableAttribute, PollLayer
from geonode.geoserver.signals import geoserver_pre_save
from geonode.geoserver.ows import wfs_links
from geonode.layers.models import Layer
from geonode.geoserver.helpers import ogc_server_settings
from geonode.contrib.datatables.utils import process_custom_csv_file, get_valid_name

_user = settings.OGC_SERVER['default']['USER']
_password = settings.OGC_SERVER['default']['PASSWORD']

# Vistas de encuesta iontercensal
def polls_list(request):
    if request.is_ajax():
        theme = json.loads(request.POST['theme'])
        polls_dict = {}
        if theme:
            poll_tables = CustomTable.objects.filter(theme=theme).order_by('title')
            if poll_tables:
                for table in poll_tables:
                    polls_dict[table.table_name] = {'title': table.title, 'table_name': table.table_name, 'id':table.id}

        return HttpResponse(json.dumps(polls_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def create_and_save_SLD(table_name, theme_field, double_view_name, cat, table_type):
    # Calculate percentiles for SLD
    qvalues = []
    min_max = []
    query_sql = 'SELECT DISTINCT "%s" FROM %s WHERE "%s" IS NOT NULL ORDER BY "%s" ASC' % (
        theme_field, table_name, theme_field, theme_field)
    min_sql = 'SELECT MIN(NULLIF("%s", 0)) FROM %s' % (theme_field, table_name)
    max_sql = 'SELECT MAX("%s") FROM %s' % (theme_field, table_name)

    try:
        db = ogc_server_settings.datastore_db
        conn = psycopg2.connect(
            "dbname='" +
            db['NAME'] +
            "' user='" +
            db['USER'] +
            "'  password='" +
            db['PASSWORD'] +
            "' port=" +
            db['PORT'] +
            " host='" +
            db['HOST'] +
            "'")

        cur = conn.cursor()
        cur.execute(query_sql)
        for r in cur.fetchall():
            qvalues.append(r[0])
        cur.execute(min_sql)
        min_max.append(cur.fetchone()[0])
        cur.execute(max_sql)
        min_max.append(cur.fetchone()[0])
        conn.commit()
        conn.close()

    except Exception as e:
        print("Error querying table data: %s" % e)
        conn.close()

    a = np.array(qvalues)
    v = [min_max[0], np.percentile(a, 20), np.percentile(a, 40), np.percentile(a, 60),
         np.percentile(a, 80), min_max[1]]

    # fill_color = ['#b0133f', '#d95f0e', '#fe9929', '#fed98e', '#fffad4']
    fill_color = ['#ffffcc', '#fed976', '#fd8d3c', '#fc4e2a', '#bd0026']
    stroke_color = ['#a7a7a7', '#d5d5d5', '#a7a7a7', '#a7a7a7', '#909090']

    # Generate SLD schema (copy from python SLD)
    localschema = NamedTemporaryFile(delete=False)
    dir = os.path.join(settings.PROJECT_ROOT, "uploaded")
    localschema_backup_path = '%s/SLD-backup.xsd' % dir  # This line is reason for copy, we need another ubication
    try:
        localschema_backup = open(localschema_backup_path, 'rb')
    except IOError:
        localschema_backup = open(localschema_backup_path, 'wb')

        schema_url = 'http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd'
        resp = urlopen(schema_url)
        localschema_backup.write(resp.read())
        resp.close()
        localschema_backup.close()
        localschema_backup = open(localschema_backup_path, 'rb')

    localschema.write(localschema_backup.read())
    localschema.close()
    localschema_backup.close()

    localschema = open(localschema.name, 'rt')
    StyledLayerDescriptor._schemadoc = parse(localschema)
    localschema.close()

    StyledLayerDescriptor._cached_schema = localschema.name

    # Create the SLD structure
    mysld = StyledLayerDescriptor()
    nl = mysld.create_namedlayer(double_view_name)
    ustyle = nl.create_userstyle()
    fts = ustyle.create_featuretypestyle()

    # Auxiliar SLD
    sldb = StyledLayerDescriptor()
    nlb = sldb.create_namedlayer('Dummy-lyr')
    ustyleb = nlb.create_userstyle()
    ftsb = ustyleb.create_featuretypestyle()

    for i, e in enumerate(v):
        if i < len(v) - 1:
            fts.create_rule(str(int(round(e))) + '-' + str(int(round(v[i + 1]))), PolygonSymbolizer)
            fts.Rules[i].create_filter(theme_field, '>=', str(e))

            ftsb.create_rule('Dummy rule' + str(i + 1), PolygonSymbolizer)
            ftsb.Rules[i].create_filter(theme_field, '<',
                                        str(v[i + 1]) if i != len(v) - 2 else str(v[i + 1] + 0.1))

            fts.Rules[i].Filter = Filter(fts.Rules[i]) + Filter(ftsb.Rules[i])

            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Fill.CssParameters[0].Value = \
                fill_color[i]
            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[0].Value = \
                stroke_color[i]
            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[1].Value = '0.06'
        else:
            if table_type=='alf':
                fts.create_rule('0', PolygonSymbolizer)
                fts.Rules[i].create_filter(theme_field, '==', '0')

                mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Fill.CssParameters[0].Value = '#D8D8D8'
                mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[0].Value = '#A4A4A4'
                mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[1].Value = '0.06'

    # Create and assign SLD in GS
    try:
        style_name = double_view_name.encode('utf-8')
        cat.create_style(style_name, mysld.as_sld(), overwrite=True)

        if table_type!='c10':
            gslayer = cat.get_layer(style_name)
            # mysld = StyledLayerDescriptor(gslayer.default_style.body_href)
            gslayer.default_style = double_view_name
            cat.save(gslayer)
    except Exception as e:
        print("Error creating SLD: %s" % e)


def poll_data(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        if query_data:
            theme_field = query_data['theme_field']
            table_name = query_data['table_name']
            table_id = query_data['table_id']
            column_value = query_data['column_value']

            custom_table = get_object_or_404(CustomTable, id=table_id)
            attribute = TableAttribute.objects.get(custom_table=custom_table.id, attribute=theme_field)

            if column_value:
                cvalue_nosp = column_value.lower().replace(" ", "_").replace("-", "_")
                name = table_name + '_' + cvalue_nosp + '_' + theme_field
                layer_title = (attribute.description if attribute.description else theme_field) + '-' + cvalue_nosp
            else:
                name = table_name + '_' + theme_field
                layer_title = attribute.description if attribute.description else theme_field

            view_name = "intrcnsl_%s" % name

            # If the query layer exists return layer data
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            try:
                polllayer = PollLayer.objects.get(name=view_name)

                if polllayer:
                    layer_dict = {
                        'id': polllayer.id, 'title': polllayer.title, 'typename': polllayer.typename,
                        "storeType": polllayer.storeType,
                        'x0': str(polllayer.bbox_x0), 'y0': str(polllayer.bbox_y0), 'x1': str(polllayer.bbox_x1),
                        'y1': str(polllayer.bbox_y1),
                    }

                    query_shape = {
                        'layer': layer_dict,
                        'href': ows_url
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
            except:
                pass

            mun_layer = get_object_or_404(Layer, name='munjun2016gw')

            layer_attr = 'cve_EntMun'
            table_attribute = 'cve_entmun'

            if custom_table.filter:
                column_name = custom_table.filter_column.attribute
                sql = 'SELECT * FROM public."'+table_name+'" WHERE "'+column_name+'" = '+"'"+column_value+"'"

                view_sql = 'create materialized view %s as select la.the_geom, tb.* from %s as la left join (%s) as tb on la."%s" = tb."%s";' % \
                               (view_name, mun_layer.name, sql, layer_attr, table_attribute)
            else:
                view_sql = 'create materialized view %s as select la.the_geom, tb.* from %s as la left join %s as tb on la."%s" = tb."%s";' % \
                           (view_name, mun_layer.name, table_name, layer_attr, table_attribute)

            double_view_name = "lyr_%s" % name
            double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)

            # Create the View (and double view)
            try:
                db = ogc_server_settings.datastore_db
                conn = psycopg2.connect(
                    "dbname='" +
                    db['NAME'] +
                    "' user='" +
                    db['USER'] +
                    "'  password='" +
                    db['PASSWORD'] +
                    "' port=" +
                    db['PORT'] +
                    " host='" +
                    db['HOST'] +
                    "'")

                cur = conn.cursor()
                cur.execute('drop view if exists %s;' % double_view_name)
                cur.execute('drop materialized view if exists %s;' % view_name)
                cur.execute(view_sql)
                cur.execute(double_view_sql)
                conn.commit()
                conn.close()

            except Exception as e:
                    print("Error creating view in postgis: %s" % e)
                    conn.close()
                    return None

            # Create the Layer in GeoServer from the view
            try:
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)
                ds_list = cat.get_xml(workspace.datastore_url)
                datastores = [datastore_from_index(cat, workspace, n) for n in ds_list.findall("dataStore")]
                ds = None
                for datastore in datastores:
                    if datastore.name == "datastore":
                        ds = datastore
                ft = cat.publish_featuretype(double_view_name, ds, mun_layer.srid, srs=mun_layer.srid)
                ft.title = layer_title
                cat.save(ft)
            except Exception as e:
                    print("Error creating geoserver layer: %s " % e)
                    return None

            # Create SLD and colour
            attr_type = attribute.attribute_type
            if attr_type == 'int' or attr_type == 'float':
                try:
                    create_and_save_SLD(table_name, theme_field, double_view_name, cat, 'intrcnsl')
                except:
                    pass

            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            if gs_layer is not None:
                try:
                    signals.pre_save.disconnect(geoserver_pre_save, sender=PollLayer)
                    layer, created = PollLayer.objects.get_or_create(name=view_name, custom_table=custom_table, defaults={
                        "workspace": workspace.name,
                        "store": ds.name,
                        "storeType": ds.resource_type,
                        "typename": "%s:%s" % (workspace.name.encode('utf-8'), ft.name.encode('utf-8')),
                        "title": ft.title or 'No title provided',
                        "uuid": str(uuid.uuid4()),
                        "bbox_x0": Decimal(ft.latlon_bbox[0]),
                        "bbox_x1": Decimal(ft.latlon_bbox[1]),
                        "bbox_y0": Decimal(ft.latlon_bbox[2]),
                        "bbox_y1": Decimal(ft.latlon_bbox[3])
                    })
                    signals.pre_save.connect(geoserver_pre_save, sender=PollLayer)
                    layer.set_anonymous_permissions()
                except Exception as e:
                    print("Error creating layer in geonode: %s" % e)
                    return None

            layer_dict = {
                'id': layer.id, 'title': layer.title, 'typename': layer.typename, "storeType": layer.storeType,
                'x0': str(layer.bbox_x0), 'y0': str(layer.bbox_y0), 'x1': str(layer.bbox_x1), 'y1': str(layer.bbox_y1),
            }

            query_shape = {
                'layer':layer_dict,
                'href': ows_url
            }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def poll_attr(request):
    if request.is_ajax():
        table_id = json.loads(request.POST['poll_id'])
        attr_dict = {}
        if table_id:
            custom_table = get_object_or_404(CustomTable, id=table_id)
            filter = custom_table.filter_column
            if filter:
                attr_list = TableAttribute.objects.filter(custom_table=table_id, id__gt=filter.id)
            else:
                attr_list = TableAttribute.objects.filter(Q(custom_table=table_id), Q(attribute_type='int')|Q(attribute_type='float'))
            if attr_list:
                for attr in attr_list:
                    if attr.description:
                        attr_dict[attr.attribute] = attr.description
                    else:
                        attr_dict[attr.attribute] = attr.attribute
        return HttpResponse(json.dumps(attr_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def poll_attr_value(request):
    if request.is_ajax():
        data = json.loads(request.POST['data'])
        if data:
            values = []
            table_name = data['table_name']
            table_id = data['table_id']
            custom_table = get_object_or_404(CustomTable, id=table_id)
            if custom_table.filter:
                attr = custom_table.filter_column.attribute
                sql = 'SELECT DISTINCT %s FROM %s ORDER BY %s' %(attr, table_name, attr)

                try:
                    db = ogc_server_settings.datastore_db
                    conn = psycopg2.connect(
                        "dbname='" +
                        db['NAME'] +
                        "' user='" +
                        db['USER'] +
                        "'  password='" +
                        db['PASSWORD'] +
                        "' port=" +
                        db['PORT'] +
                        " host='" +
                        db['HOST'] +
                        "'")

                    cur = conn.cursor()
                    cur.execute(sql)
                    for r in cur.fetchall():
                        values.append(r[0])
                    conn.commit()
                    conn.close()
                except Exception as e:
                    print(e)
                    conn.close()

            return HttpResponse(json.dumps(values), content_type="application/json")

        return HttpResponse("Not enough data")
    else:
        return HttpResponse("Not ajax request")


# CustomTablesViews
def custom_tables_list(request, template='custom_tables_list.html'):
    custom_tables = CustomTable.objects.all()
    return render_to_response(template, {'custom_tables': custom_tables,},
                              context_instance=RequestContext(request))


def datatables_upload_custom(request, template='customtables_upload.html'):
    if request.method == 'GET':
        form = UploadCustomTableForm()
        ctx = {'form': form}
        return render_to_response(template, RequestContext(request, ctx))

    elif request.method == 'POST':
        form = UploadCustomTableForm(request.POST, request.FILES)
        errormsgs = []
        out = {'success': False}
        if form.is_valid():
            data = form.cleaned_data
            datatable_name = 'dtc_'+ slugify(unicode(os.path.splitext(os.path.basename(request.FILES['uploaded_file'].name))[0])).replace('-','_')
            table_name = get_valid_name(datatable_name, 'custom')
            title = data['title']
            theme = data['theme']
            filter = data['filter']
            instance = CustomTable(uploaded_file=request.FILES['uploaded_file'], table_name=table_name, title=title,
                                   theme=theme, filter=filter)
            # delimiter = 'COMMA'
            # charset = data['charset']
            # instance.owner = request.user
            instance.save()

            dt, msg = process_custom_csv_file(instance, 'intercensal')

            if dt:
                print("Archivo procesado con exito")
                if instance.filter:
                    return HttpResponseRedirect(
                        reverse(
                            'select_cfilter',
                            args=(dt.pk,)))
                else:
                    return HttpResponseRedirect(reverse("custom_tables_list"))
            else:
                return HttpResponse(
                    loader.render_to_string(
                        '401.html', RequestContext(
                            request, {'error_message': msg,
                                      'error_title': 'No se ha podido procesar el archivo',
                                      'encode_error': True
                                      })), status=402)
        else:
            for e in form.errors.values():
                errormsgs.extend([escape(v) for v in e])

            out['errors'] = form.errors
            out['errormsgs'] = errormsgs

        if out['success']:
            status_code = 200
        else:
            status_code = 400
        return render_to_response(template, RequestContext(request, {'form': form}))


def select_cfilter(request, ct_id, template='select_cfilter.html'):
    datatable = get_object_or_404(CustomTable, id=ct_id)
    if request.method == 'POST':
        cfilter_form = TableCFilterForm(
            request.POST,
            instance=datatable,
            prefix="select_cfilter"
        )

        if cfilter_form.is_valid():
            cfilter_form.save()
            return HttpResponseRedirect(reverse("custom_tables_list"))
    else:
        cfilter_form = TableCFilterForm(
            instance=datatable,
            prefix="select_cfilter",
        )

    return render_to_response(template, RequestContext(request, {
        'resource': datatable,
        'form': cfilter_form,
    }))


def customtables_metadata(request, ct_id):
    obj = get_object_or_404(CustomTable, id=ct_id)
    table_attribute_set = inlineformset_factory(
        CustomTable,
        TableAttribute,
        extra=0,
        form=AttributeTableForm,
    )

    if request.method == "POST":
        ctables_form = MetadataCustomTableForm(request.POST, instance=obj)
        attribute_form = table_attribute_set(
            request.POST,
            instance=obj,
            prefix="table_attribute_set",
            queryset=TableAttribute.objects.order_by('display_order'))
    else:
        ctables_form = MetadataCustomTableForm(instance=obj)
        attribute_form = table_attribute_set(
            instance=obj,
            prefix="table_attribute_set",
            queryset=TableAttribute.objects.order_by('display_order'))

    if request.method == 'POST' and ctables_form.is_valid(
    ) and attribute_form.is_valid():
        ctables_form.save()

        for form in attribute_form.cleaned_data:
            la = TableAttribute.objects.get(id=int(form['id'].id))
            la.description = form["description"]
            la.attribute_type = form["attribute_type"]
            la.visible = form["visible"]
            la.display_order = form["display_order"]
            la.save()
        return HttpResponseRedirect(reverse('custom_tables_list'))

    return render_to_response('customtables_metadata.html', RequestContext(request, {
        'form': ctables_form,
        "attribute_form": attribute_form,
        'table': obj
    }))

def customtables_remove(request, ct_id):
    try:
        ctable = get_object_or_404(CustomTable, id=ct_id)
        if request.method == 'POST':
            ctable.delete()
            return HttpResponseRedirect(reverse("custom_tables_list"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this list_slopes',
            content_type="text/plain",
            status=401
        )

# Vista para descargar las capas generadas en la encuesta
def dwn_links(request):
    if request.is_ajax():
        layer_name = request.POST['layername']
        dwn_url=None
        links = wfs_links(
            ogc_server_settings.public_url +
            'wfs?', layer_name.encode('utf-8'))
        for ext, name, mime, wfs_url in links:
            if mime == 'SHAPE-ZIP':
                dwn_url = wfs_url
                name = 'Zipped Shapefile'
        print(dwn_url)
        return HttpResponse(dwn_url)
    else:
        return HttpResponse("Not ajax request")
