import os
import json
import psycopg2
import uuid

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


from .forms import UploadAlfTableForm, AlfTableFilterForm, MetadataAlfTableForm, AttributeAlfTableForm
from .models import AlfTable, AlfTableAttribute, AlfLayer
from geonode.geoserver.signals import geoserver_pre_save
from geonode.geoserver.ows import wfs_links
from geonode.layers.models import Layer
from geonode.interactive.intercensal.views import create_and_save_SLD
from geonode.geoserver.helpers import ogc_server_settings
from geonode.contrib.datatables.utils import process_custom_csv_file, get_valid_name

_user = settings.OGC_SERVER['default']['USER']
_password = settings.OGC_SERVER['default']['PASSWORD']

# Vistas del Censo Agricola, Ganadero y Forestal 2007
def alf_layers_list(request):
    if request.is_ajax():
        theme = json.loads(request.POST['theme'])
        alf_layers_dict = {}
        if theme:
            alf_tables = AlfTable.objects.filter(theme=theme).order_by('title')
            if alf_tables:
                for table in alf_tables:
                    alf_layers_dict[table.table_name] = {'title': table.title, 'table_name': table.table_name, 'id':table.id}

        return HttpResponse(json.dumps(alf_layers_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def census_data(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        if query_data:
            theme_field = query_data['theme_field']
            table_name = query_data['table_name']
            table_id = query_data['table_id']
            column_value = query_data['column_value']

            alf_table = get_object_or_404(AlfTable, id=table_id)
            attribute = AlfTableAttribute.objects.get(alf_table=alf_table.id, attribute=theme_field)

            if column_value:
                cvalue_nosp = column_value.lower().replace(" ", "_").replace("-", "_")
                name = table_name + '_' + cvalue_nosp + '_' + theme_field
                layer_title = (attribute.description if attribute.description else theme_field) + '-' + cvalue_nosp
            else:
                name = table_name + '_' + theme_field
                layer_title = attribute.description if attribute.description else theme_field

            view_name = "alfcens_%s" % name

            # If the query layer exists return the layer data
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            try:
                alflayer = AlfLayer.objects.get(name=view_name)

                if alflayer:
                    layer_dict = {
                        'id': alflayer.id, 'title': alflayer.title, 'typename': alflayer.typename,
                        "storeType": alflayer.storeType,
                        'x0': str(alflayer.bbox_x0), 'y0': str(alflayer.bbox_y0), 'x1': str(alflayer.bbox_x1),
                        'y1': str(alflayer.bbox_y1),
                    }
                    query_shape = {
                        'layer': layer_dict,
                        'href': ows_url
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
            except:
                pass

            mun_layer = get_object_or_404(Layer, name='municipios_2005_gw84')

            layer_attr = 'CVE_CONCA'
            table_attribute = 'cve_entmun'

            if alf_table.filter:
                column_name = alf_table.filter_column.attribute
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

            # Create SLD and assign
            attr_type = attribute.attribute_type
            if attr_type == 'int' or attr_type == 'float':
                try:
                    create_and_save_SLD(table_name, theme_field, double_view_name, cat, 'alf')
                except:
                    pass

            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            if gs_layer is not None:
                try:
                    signals.pre_save.disconnect(geoserver_pre_save, sender=AlfLayer)
                    layer, created = AlfLayer.objects.get_or_create(name=view_name, alf_table=alf_table, defaults={
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
                    signals.pre_save.connect(geoserver_pre_save, sender=AlfLayer)
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


def census_attr(request):
    if request.is_ajax():
        table_id = json.loads(request.POST['alf_id'])
        attr_dict = {}
        if table_id:
            alf_table = get_object_or_404(AlfTable, id=table_id)
            filter = alf_table.filter_column
            if filter:
                attr_list = AlfTableAttribute.objects.filter(alf_table=table_id, id__gt=filter.id)
            else:
                attr_list = AlfTableAttribute.objects.filter(Q(alf_table=table_id), Q(attribute_type='int')|Q(attribute_type='float'))
            if attr_list:
                for attr in attr_list:
                    if attr.description:
                        attr_dict[attr.attribute] = attr.description
                    else:
                        attr_dict[attr.attribute] = attr.attribute
        return HttpResponse(json.dumps(attr_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def census_attr_value(request):
    if request.is_ajax():
        data = json.loads(request.POST['data'])
        if data:
            values = []
            table_name = data['table_name']
            table_id = data['table_id']
            alf_table = get_object_or_404(AlfTable, id=table_id)
            if alf_table.filter:
                attr = alf_table.filter_column.attribute
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


# ALF Census Tables Views
def alf_tables_list(request, template='alf_tables_list.html'):
    alf_tables = AlfTable.objects.all()
    return render_to_response(template, {'alf_tables': alf_tables,},
                              context_instance=RequestContext(request))


def alf_tables_upload(request, template='alf_tables_upload.html'):
    if request.method == 'GET':
        form = UploadAlfTableForm()
        ctx = {'form': form}
        return render_to_response(template, RequestContext(request, ctx))

    elif request.method == 'POST':
        form = UploadAlfTableForm(request.POST, request.FILES)
        errormsgs = []
        out = {'success': False}
        if form.is_valid():
            data = form.cleaned_data
            datatable_name = 'alf_'+ slugify(unicode(os.path.splitext(os.path.basename(request.FILES['uploaded_file'].name))[0])).replace('-','_')
            table_name = get_valid_name(datatable_name, 'alf_census')
            title = data['title']
            theme = data['theme']
            filter = data['filter']
            instance = AlfTable(uploaded_file=request.FILES['uploaded_file'], table_name=table_name, title=title,
                                   theme=theme, filter=filter)
            # delimiter = 'COMMA'
            # charset = data['charset']
            # instance.owner = request.user
            instance.save()

            dt, msg = process_custom_csv_file(instance, 'alf_census')

            if dt:
                print("Archivo procesado con exito")
                if instance.filter:
                    return HttpResponseRedirect(
                        reverse(
                            'alf_cfilter',
                            args=(dt.pk,)))
                else:
                    return HttpResponseRedirect(reverse("alf_tables_list"))
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


def alf_cfilter(request, ct_id, template='alf_cfilter.html'):
    datatable = get_object_or_404(AlfTable, id=ct_id)
    if request.method == 'POST':
        cfilter_form = AlfTableFilterForm(
            request.POST,
            instance=datatable,
            prefix="alf_cfilter"
        )

        if cfilter_form.is_valid():
            cfilter_form.save()
            return HttpResponseRedirect(reverse("alf_tables_list"))
    else:
        cfilter_form = AlfTableFilterForm(
            instance=datatable,
            prefix="alf_cfilter",
        )

    return render_to_response(template, RequestContext(request, {
        'resource': datatable,
        'form': cfilter_form,
    }))


def alf_tables_metadata(request, ct_id):
    obj = get_object_or_404(AlfTable, id=ct_id)
    table_attribute_set = inlineformset_factory(
        AlfTable,
        AlfTableAttribute,
        extra=0,
        form=AttributeAlfTableForm,
    )

    if request.method == "POST":
        ctables_form = MetadataAlfTableForm(request.POST, instance=obj)
        attribute_form = table_attribute_set(
            request.POST,
            instance=obj,
            prefix="table_attribute_set",
            queryset=AlfTableAttribute.objects.order_by('display_order'))
    else:
        ctables_form = MetadataAlfTableForm(instance=obj)
        attribute_form = table_attribute_set(
            instance=obj,
            prefix="table_attribute_set",
            queryset=AlfTableAttribute.objects.order_by('display_order'))

    if request.method == 'POST' and ctables_form.is_valid(
    ) and attribute_form.is_valid():
        ctables_form.save()

        for form in attribute_form.cleaned_data:
            la = AlfTableAttribute.objects.get(id=int(form['id'].id))
            la.description = form["description"]
            la.attribute_type = form["attribute_type"]
            la.visible = form["visible"]
            la.display_order = form["display_order"]
            la.save()
        return HttpResponseRedirect(reverse('alf_tables_list'))

    return render_to_response('alf_tables_metadata.html', RequestContext(request, {
        'form': ctables_form,
        "attribute_form": attribute_form,
        'table': obj
    }))


def alf_tables_remove(request, ct_id):
    try:
        ctable = get_object_or_404(AlfTable, id=ct_id)
        if request.method == 'POST':
            ctable.delete()
            return HttpResponseRedirect(reverse("alf_tables_list"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this list_slopes',
            content_type="text/plain",
            status=401
        )
