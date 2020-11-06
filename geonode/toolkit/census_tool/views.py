# -*- encoding: utf-8 -*-
import os
import json
import psycopg2
import uuid
import numpy as np

from decimal import Decimal
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.conf import settings
from django.utils.html import escape
from django.utils.text import slugify
from django.shortcuts import render, render_to_response, get_object_or_404
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
import unicodedata

from geonode.geoserver.signals import geoserver_pre_save
from geonode.geoserver.ows import wfs_links
from geonode.layers.models import Layer
from geonode.geoserver.helpers import ogc_server_settings
from geonode.contrib.datatables.utils import process_custom_csv_file, get_valid_name

from geonode.toolkit.census_tool.models import CencusConf, CensusLayer

_user = settings.OGC_SERVER['default']['USER']
_password = settings.OGC_SERVER['default']['PASSWORD']

# Method for searching the configuration of application Control Area
def getCoverageCensus(request):
    if request.is_ajax():
        try:
            config_dir = {}
            config = CencusConf.objects.filter(alias="coverage")
            for con in config:
                config_dir = {'all_states':con.name_layer, 'states':con.coverage}
        except ObjectDoesNotExist as e:
            print("No existe el objeto")
            print('Error %s' % e)
        return HttpResponse(json.dumps(config_dir), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")

def getCategorysCensus(request):
    if request.is_ajax():
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
            data_list = []
            json_data = request.POST.get('id_subject', "None")
            query = "select distinct(category) from variables where status = 1 and category != '' order by category;"
            cur.execute(query)
            data_list = cur.fetchall()
            conn.commit()
            print("Records created successfully")
            conn.close()
            # print(data_list)
        except psycopg2.DatabaseError as e:
            conn.close()
            print("I am unable to connect to the database")
            print('Error %s' % e)
        return HttpResponse(json.dumps(data_list), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")

# Method for searching the configuration of application Control Area
def getConfigurationCensus(request):
    if request.is_ajax():
        try:
            # print("config")
            config_dir = {}
            config = CencusConf.objects.filter(alias="mun")
            for con in config:
                config_dir = {'all_states':con.all_states, 'states':con.coverage}
        except ObjectDoesNotExist as e:
            print("No existe el objeto")
            print('Error %s' % e)
        return HttpResponse( json.dumps(config_dir), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def getSubjectsCenus(request):
    if request.is_ajax():
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
            data_list = []
            query_data = json.loads(request.POST['query_data'])
            subject=query_data['id_subject']
            str_subj = subject.replace('"','')
            query = "select distinct(des_tbl) from variables where category like '%"+str_subj+"%' order by des_tbl;"
            cur.execute(query)
            data_list = cur.fetchall()
            conn.commit()
            print("Records created successfully")
            conn.close()
        except psycopg2.DatabaseError as e:
            conn.close()
            print("I am unable to connect to the database")
            print('Error %s' % e)
        return HttpResponse(json.dumps(data_list), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")

def getTheme_numberCensus(request):
    if request.is_ajax():
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
            data_list = []
            table_name = []
            table_selected = ""
            data_global = {}
            query_data = json.loads(request.POST['query_data'])
            subtopic = query_data['subtopic']
            queryCoveraged = ""
            str_val = subtopic.replace('"','')
            query = "select distinct(tabla) from variables where des_tbl like '"+str_val+"';"
            cur.execute(query)
            table_name = cur.fetchone()
            for table in table_name:
                query_variable = "select campo, des_cam from variables where tabla = '%s' and campo not like 'id_ac';" % table
                cur.execute(query_variable)
                data_list.append(cur.fetchall())
                table_selected = table
            data_global['data'] = data_list
            data_global['table'] = table_selected
            conn.commit()
            print("Records created successfully")
            conn.close()
        except psycopg2.DatabaseError as e:
            conn.close()
            print("I am unable to connect to the database")
            print('Error %s' % e)
        return HttpResponse(json.dumps(data_global), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")

def getThemeCensus(request):
    if request.is_ajax():
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
            data_list = []
            table_name = []
            table_selected = ""
            data_global = {}
            query_data = json.loads(request.POST['query_data'])
            subtopic = query_data['subtopic']
            queryCoveraged = ""
            str_val = subtopic.replace('"','')
            query = "select distinct(tabla) from variables where des_tbl like '"+str_val+"';"
            cur.execute(query)
            table_name = cur.fetchone()
            for table in table_name:
                query_variable = "select campo, des_cam from variables where tabla = '%s' and campo not like 'id_ac' and campo not like (select distinct(filter) from variables where tabla = '%s');" % (table, table)
                cur.execute(query_variable)
                data_list.append(cur.fetchall())
                table_selected = table
            data_global['data'] = data_list
            data_global['table'] = table_selected
            conn.commit()
            print("Records created successfully")
            conn.close()
        except psycopg2.DatabaseError as e:
            conn.close()
            print("I am unable to connect to the database")
            print('Error %s' % e)
        return HttpResponse(json.dumps(data_global), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")

def getSubtopicsCensus(request):
    if request.is_ajax():
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
            data_list = []
            table_name = []
            table_selected = ""
            data_global = {};
            query_data = json.loads(request.POST['query_data'])
            subtopic = query_data['subtopic']
            coverage = query_data['coverage']
            id_edo = query_data['id_edo']
            id_mun = query_data['id_mun']
            table_selected = query_data['table_selected']
            queryCoveraged = ""
            str_val = subtopic.replace('"','')
            table = table_selected
            query_variable = "select distinct(filter) from variables where tabla = \'%s\' and filter not like '';" % table_selected
            cur.execute(query_variable)
            variable = cur.fetchone()[0]
            id_mun = getIdPutZero(id_mun)
            id_edo = getIdPutZeroEdo(id_edo)

            if len(str(variable))>0:
                if coverage in "national":
                    queryCoveraged = "select distinct(%s) from %s as t;" % (variable, table)
                elif coverage in "statal":
                    queryCoveraged = "select distinct(%s) from %s as t where t.clvedo =\'%s\';" % (variable, table, id_edo)
                else:
                    queryCoveraged = "select distinct(%s) from %s as t where t.clvedo = \'%s\' and clvmun = \'%s\';" % (variable, table, id_edo, id_mun)
            else:
                if coverage in "national":
                    queryCoveraged = "select distinct(%s) from %s as t;" % (variable, table)
                elif coverage in "statal":
                    queryCoveraged = "select distinct(%s) from %s as t where t.clvedo =\'%s\';" % (variable, table, id_edo)
                else:
                    queryCoveraged = "select distinct(%s) from %s as t where t.clvedo =\'%s\' and clvmun = \'%s\';" % (variable, table, id_edo, id_mun)
            cur.execute(queryCoveraged)
            data_list = cur.fetchall()
            data_global['data'] = data_list
            data_global['table'] = table_selected
            data_global['variable'] = variable
            conn.commit()
            print("Records created successfully")
            conn.close()
        except psycopg2.DatabaseError as e:
            conn.close()
            print("I am unable to connect to the database")
            print('Error %s' % e)
        return HttpResponse(json.dumps(data_global), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")

def getIdPutZero(num):
    if len(str(num))==1:
        num = "00"+num
    if len(str(num))==2:
        num = "0"+num
    return num

def getIdPutZeroEdo(num):
    if len(str(num))==1:
        num = "0"+num
    return num

def getTematizer_nationalCensus(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        if query_data:
            theme_field = query_data['theme_field']
            table_name = query_data['table_subject']
            category = query_data['category']
            nivel = query_data['nivel']
            filter_name = query_data['filter_name']
            field_name = query_data['field_name']

            fields = theme_field.replace(" ","_")
            name = table_name + '_' + fields.lower()
            campo = getDescription_fieldCensus(filter_name)
            tit = getTitleCensus(filter_name)
            name_Layer = getNameLayerCensu(nivel)
            if name_Layer == "":
                query_shape = getError()
                return HttpResponse(json.dumps(query_shape), content_type="application/json")
            if nivel in "state":
                try:
                    mun_layer = get_object_or_404(Layer, name=name_Layer)
                except e:
                    print("error %s" %e)
                preview_name = "pre_lyrnatst_%s" % name
                double_view_name = "lyrnatst_%s" % name
                view_name = "acnatst_%s" % name
                layer_title = "%s %s" %(tit, theme_field) # "acnatst_l_%s" %name
                layer_attr = 'CLV_EDO'
                table_attribute = 'clvedo'#p0080102, ups_cult, p008n06,  p008n10,  p008n14,  p008n31  sum(ups_cult) as total_unidades_de_produccion_por_cultivo, , sum(p008n14) as total_volumen_cosechado_del_cultivo ,sum(p008n31) as total_superficie_del_cultivo_organico
                pre_view_sql = 'create materialized view %s as select tb.%s, sum(tb.%s) as %s, tb."clvedo" from %s as tb where tb.%s = \'%s\' group by tb.%s, tb."clvedo" order by tb.clvedo;' % \
                            (preview_name,field_name, filter_name, campo, table_name, field_name, theme_field, field_name)
                view_sql = 'create materialized view %s as select ed.the_geom, ed."CLV_EDO", tb.%s, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s" where tb.%s like  \'%s\' group by tb.%s, ed."CLV_EDO", tb.clvedo, ed.the_geom order by tb.clvedo;' % \
                            (view_name,field_name, campo, campo, mun_layer.name, preview_name, layer_attr, table_attribute, field_name, theme_field, field_name)
            else:
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                preview_name = "pre_lyrnatmun_%s" % name
                double_view_name = "lyrnatmun_%s" % name
                view_name = "acnatmu_%s" % name
                layer_title = "%s %s" %(tit, theme_field) # layer_title = "acnatmu_l_%s" %name
                layer_attr = 'CVE_MUN'
                table_attribute = 'clvmun'
                pre_view_sql = 'create materialized view %s as select tb.%s, sum(tb.%s) as %s, tb."clvmun" from %s as tb where tb.%s = \'%s\' group by tb.%s, tb."clvmun" order by tb.clvmun;' % \
                            (preview_name, field_name,filter_name, campo, table_name,field_name, theme_field, field_name)
                view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_EDO", tb."clvmun", tb.%s, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s"  group by tb.%s, ed."CVE_EDO", tb.clvmun, ed.the_geom order by tb.clvmun;' % \
                            (view_name, field_name, campo, campo, mun_layer.name, preview_name, layer_attr, table_attribute, field_name)
            double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            try:
                aclayer = CensusLayer.objects.get(name=view_name)
                if aclayer:
                    layer_dict = {
                        'id': aclayer.id, 'title': aclayer.title, 'typename': aclayer.typename,
                        "storeType": aclayer.storeType,
                        'x0': str(aclayer.bbox_x0), 'y0': str(aclayer.bbox_y0), 'x1': str(aclayer.bbox_x1),
                        'y1': str(aclayer.bbox_y1),
                    }

                    query_shape = {
                        'layer': layer_dict,
                        'href': ows_url
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
            except:
                pass
            # Create the View (and double view)
            Census(double_view_name, view_name, view_sql, double_view_sql,preview_name, pre_view_sql)
            # return data per analisys
            arr_data_per_analisys = getDataPerAnalisysCensus(double_view_name, campo)
            # Create the Layer in GeoServer from the view
            try:
                print("Create the Layer in GeoServer from the view")
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)#CONNECTION TO GEOSERVER
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)#BRING TO workspace
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
            min_max = []
            # Create SLD and colour
            print("colorssssss")
            attr_type = "float"#To do, hacer un selecect para saber el tipo de dato del campo a tematizar
            if attr_type == 'int' or attr_type == 'float':
                try:
                    min_max = create_and_save_SLD_census(table_name, campo, double_view_name, cat)#theme_field->fields
                except:
                    pass
            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            if gs_layer is not None:
                try:
                    signals.pre_save.disconnect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                    layer, created = CensusLayer.objects.get_or_create(name=view_name, custom_table=table_name, defaults={
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
                    signals.pre_save.connect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
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
                'href': ows_url,
                'data_ac': min_max
            }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")

def getDescription_fieldCensus(filter_name):
    desc = "valor"
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
        # print("querys")
        query = "select des_cam from variables where campo like '%s';" % filter_name
        cur.execute(query)
        desc_str = cur.fetchone()[0]
        desc_rempl = desc_str.replace(" ","_").replace("-","_").replace(";","").replace("(","_").replace(")","_")
        desc_te = desc_rempl.lower()
        des_wihtout_spaces = desc_te.strip()
        desc_untilde = elimina_tildes(des_wihtout_spaces)
        if len(desc_untilde)>70:
            dif = len(desc_untilde)-70

            desc = desc_untilde[dif:len(desc_untilde)-10]
        else:
            desc = desc_untilde
        conn.commit()
        conn.close()
        print("Create views ok")

    except Exception as e:
            print("Error creating view in postgis: %s" % e)
            conn.close()
            return None
    return desc

# Method for searching the configuration name of layer from application Control Area
def getNameLayerCensu(alk):
    name_layer = ""
    try:
        # print("config")
        config = CencusConf.objects.filter(alias=alk)
        for con in config:
            name_layer = con.name_layer
            # print(name_layer)
    except ObjectDoesNotExist as e:
        print("No existe el objeto")
        print('Error %s' % e)
    return name_layer

def getError():
    query_shape = {}
    print("El nombre de la capa en la configuración no corresponde al que esta en la base de datos")
    layer_dict = {
        'id': 0, 'title': "layer.title", 'typename': "layer.typename", "storeType": "layer.storeType",
        'x0': 0, 'y0': 0, 'x1': 0, 'y1': 0,
    }

    query_shape = {
        'layer':"False",
        'href': "ows_url"
    }
    return query_shape

def getTitleCensus(filter_name):
    desc = "valor"
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
        query = "select des_cam from variables where campo like '%s';" % filter_name
        cur.execute(query)
        desc = cur.fetchone()[0]
        conn.commit()
        conn.close()
    except Exception as e:
            print("Error creating view in postgis: %s" % e)
            conn.close()
            return None
    return desc

def getDataPerAnalisysCensus(double_view_name, field):
    arr_data = []
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
        query = "select %s from %s;" % (field, double_view_name);
        # print(query)
        cur.execute(query)
        # print(cur.fetchall())
        arr_data.append(cur.fetchall())
        conn.commit()
        conn.close()
    except Exception as e:
            print("Error of consulting in postgis: %s" % e)
            conn.close()
            return None
    return arr_data

def Census(double_view_name, view_name, view_sql, double_view_sql, preview_name, pre_view_sql):
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
        cur.execute('drop materialized view if exists %s;' % preview_name)
        # print( ('drop materialized view if exists %s;' % preview_name))
        cur.execute('drop view if exists %s;' % double_view_name)
        # print( ('drop view if exists %s;' % double_view_name))
        cur.execute('drop materialized view if exists %s;' % view_name)
        # print(('drop materialized view if exists %s;' % view_name))
        cur.execute(pre_view_sql)
        cur.execute(view_sql)
        cur.execute(double_view_sql)
        conn.commit()
        conn.close()
        print("Create views ok")
    except Exception as e:
            print("Error creating view in postgis: %s" % e)
            conn.close()
            return None

def getTem_NNCensus(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        name = ""
        if query_data:
            table_name = query_data['table_subject']
            category = query_data['category']
            nivel = query_data['nivel']
            filter_name = query_data['field_name']
            theme_field = query_data['subject']

            # print("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
            # print(theme_field)
            # print(filter_name)
            # print(table_name)
            # print(category)

            campo = getDescription_fieldCensus(filter_name)
            tit = getTitleCensus(filter_name)

            fields = campo
            if len(table_name)>21:
                name_str_tbl = table_name[21:len(table_name)]
                if len(fields)>15:
                    name = name_str_tbl + '_' + fields[10:len(fields)]
                else:
                    name = name_str_tbl + '_' + fields
            else:
                name = table_name + '_' + fields
            if len(name)>30:
                name_str = name[0:30]
                name = name_str
            name_Layer = getNameLayerCensu(nivel)
            if name_Layer == "":
                query_shape = getError()
                return HttpResponse(json.dumps(query_shape), content_type="application/json")
            if nivel in "state":
                # print("state")
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                preview_name = "pre_lyrnatst_%s" % name
                double_view_name = "lyrnatst_%s" % name
                view_name = "acnatst_%s" % name
                layer_title = "%s %s" %(theme_field, tit)
                layer_attr = 'CLV_EDO'
                table_attribute = 'clvedo'#p0080102, ups_cult, p008n06,  p008n10,  p008n14,  p008n31  sum(ups_cult) as total_unidades_de_produccion_por_cultivo, , sum(p008n14) as total_volumen_cosechado_del_cultivo ,sum(p008n31) as total_superficie_del_cultivo_organico
                pre_view_sql = 'create materialized view %s as select sum(tb.%s) as %s, tb."clvedo" from %s as tb group by tb.%s, tb."clvedo" order by tb.clvedo;' % \
                            (preview_name,filter_name, campo, table_name, filter_name)
                view_sql = 'create materialized view %s as select ed.the_geom, ed."CLV_EDO", sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s"  group by ed."CLV_EDO", tb.clvedo, ed.the_geom order by tb.clvedo;' % \
                            (view_name,campo, campo, mun_layer.name, preview_name, layer_attr, table_attribute)
                # print(pre_view_sql)
                # print(view_sql)
                # print("------------")
            else:
                # print("municipios")
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                preview_name = "pre_lyrnatmun_%s" % name
                double_view_name = "lyrnatmun_%s" % name
                view_name = "acnatmu_%s" % name
                layer_title = "%s %s" %(theme_field, tit)
                layer_attr = 'CVE_MUN'
                table_attribute = 'clvmun'
                pre_view_sql = 'create materialized view %s as select  sum(tb.%s) as %s, tb."clvmun" from %s as tb  group by  tb."clvmun" order by tb.clvmun;' % \
                            (preview_name,filter_name, campo, table_name)
                # print(pre_view_sql)
                view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_EDO", tb.clvmun,sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s"  group by ed."CVE_EDO", tb.clvmun, ed.the_geom order by tb.clvmun;' % \
                            (view_name, campo, campo, mun_layer.name, preview_name, layer_attr, table_attribute)
                # print(view_sql)


            # print("hay? capa")
            # print(double_view_name)
            # print(view_name)
            # print(mun_layer)
            # print(view_sql)
            # double_view_name = "lyr_%s" % name
            double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)

            # print(double_view_sql)
            # print("create the view")

            # If the query layer exists return layer data
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            try:
                # print(view_name)
                aclayer = CensusLayer.objects.get(name=view_name)
                if aclayer:
                    layer_dict = {
                        'id': aclayer.id, 'title': aclayer.title, 'typename': aclayer.typename,
                        "storeType": aclayer.storeType,
                        'x0': str(aclayer.bbox_x0), 'y0': str(aclayer.bbox_y0), 'x1': str(aclayer.bbox_x1),
                        'y1': str(aclayer.bbox_y1),
                    }

                    query_shape = {
                        'layer': layer_dict,
                        'href': ows_url
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
            except:
                pass


            # Create the View (and double view)
            Census(double_view_name, view_name, view_sql, double_view_sql,preview_name, pre_view_sql)

            # return data per analisys
            # arr_data_per_analisys = getDataPerAnalisysCensus(double_view_name, campo)
            # print(arr_data_per_analisys)
            # print("arr_data_per_analisys")

            # Create the Layer in GeoServer from the view
            try:
                print("Create the Layer in GeoServer from the view")
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)#CONNECTION TO GEOSERVER
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)#BRING TO workspace
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

            # print("________________________________")
            # field = "total_sembrado"
            min_max = []
            # Create SLD and colour
            attr_type = "float"#To do, hacer un selecect para saber el tipo de dato del campo a tematizar
            if attr_type == 'int' or attr_type == 'float':
                try:
                    min_max = create_and_save_SLD_census(table_name, campo, double_view_name, cat)#theme_field->fields
                except:
                    pass

            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            # print(gs_layer)
            # print("gs_layer")
            if gs_layer is not None:
                try:
                    signals.pre_save.disconnect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                    layer, created = CensusLayer.objects.get_or_create(name=view_name, custom_table=table_name, defaults={
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
                    signals.pre_save.connect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
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
                'href': ows_url,
                'data_ac': min_max
            }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")

def elimina_tildes(s):
   return ''.join((c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn'))

def create_and_save_SLD_census(table_name, theme_field, double_view_name, cat):
    # print("startsld*************")
    # Calculate percentiles for SLD
    qvalues = []
    min_max = []
    # theme_field = "totalsembrado"
    # query_sql = 'SELECT DISTINCT "%s" FROM %s WHERE "%s" IS NOT NULL ORDER BY "%s" ASC' % (
    #     theme_field, table_name, theme_field, theme_field)
    # print(query_sql)
    try:
        # conn = psycopg2.connect("dbname='geonode-imports' user='adesur' host='localhost' password='adesur'")
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

        query_min = 'SELECT MIN(%s) FROM %s;' % (theme_field,double_view_name)
        # print(query_min)
        # print("miiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin")
        cur.execute(query_min)
        # print(cur.fetchone()[0])
        bbx_tex = cur.fetchone()[0]
        # print(bbx_tex)

        query_max = 'SELECT MAX(%s) FROM %s;' % (theme_field,double_view_name)
        # print(query_max)
        # print("maxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        cur.execute(query_max)
        # print(cur.fetchone()[0])
        bbx_tex2 = cur.fetchone()[0]
        # print(bbx_tex2)
        # print("bbx_tex2")

        min_max.append(bbx_tex)
        min_max.append(bbx_tex2)
        # print(min_max)
        if bbx_tex is None:
            print("No hay bbx")
            return []
        query_values = 'SELECT %s FROM %s where %s IS NOT NULL;' % (theme_field,double_view_name, theme_field)
        # print(query_values)
        # print("some happen")
        cur.execute(query_values)
        # qvalues.append(cur.fetchall())
        for r in cur.fetchall():
            qvalues.append(r[0])
        # print(qvalues)
        conn.commit()
        conn.close()
        print("Records created successfully")
    except Exception as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    try:
        # print("finito")
        # print(qvalues)
        a = np.array(qvalues)#VALUES
        # print(a)
        # print("-a-")
        # print(min_max[0])
        # print("min_max[0]")
        # print(np)
        # print("np")
        # print(np.percentile(a, 20))
        # print("np.percentile(a, 20)")
        v = [min_max[0], np.percentile(a, 20), np.percentile(a, 40), np.percentile(a, 60),
             np.percentile(a, 80), min_max[1]]

        # print(v)
        # print("-v-")
        #fill_color = ['#b0133f', '#d95f0e', '#fe9929', '#fed98e', '#fffad4']
        fill_color = ['#ffffcc', '#fed976', '#fd8d3c', '#fc4e2a', '#bd0026']
        stroke_color = ['#a7a7a7', '#d5d5d5', '#a7a7a7', '#a7a7a7', '#909090']

        # Generate SLD schema (copy from python SLD)
        localschema = NamedTemporaryFile(delete=False)
        dir = os.path.join(settings.PROJECT_ROOT, "uploaded")
        localschema_backup_path = '%s/SLD-backup.xsd' % dir  # This line is reason for copy, we need another ubication
        print("-successfully-")
    except Exception as e:
        print('Error %s' % e)

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
            #mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Fill.CssParameters[1].Value = '0.7'
            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[0].Value = \
                stroke_color[i]
            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[1].Value = '0.06'
        else:
            fts.create_rule('0', PolygonSymbolizer)
            fts.Rules[i].create_filter(theme_field, '==', '0')

            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Fill.CssParameters[0].Value = '#D8D8D8'
            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[0].Value = '#A4A4A4'
            mysld.NamedLayer.UserStyle.FeatureTypeStyle.Rules[i].PolygonSymbolizer.Stroke.CssParameters[1].Value = '0.06'
    # print("mysld")
    # print(mysld.as_sld())
    # print("ooooooooooooooooooooooooooooooooooooooooooooooooooooo")
    # Create and assign SLD in GS
    try:
        style_name = double_view_name.encode('utf-8')
        # print(style_name)
        cat.create_style(style_name, mysld.as_sld(), overwrite=True)

        gslayer = cat.get_layer(style_name)
        # print(gslayer.title)
        # print(double_view_name)
        gslayer.default_style = double_view_name
        cat.save(gslayer)
        # print("exito sld")
    except Exception as e:
        print("Error creating SLD: %s" % e)
    return min_max

def getTematizerStatal_Census(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        bbx = []
        if query_data:
            try:
                theme_field = query_data['theme_field']
                table_name = query_data['table_subject']
                category = query_data['category']
                nivel = query_data['nivel']
                id_edo = query_data['id_edo']
                filter_name = query_data['filter_name']
                field_name = query_data['field_name']

                # print("yeiiiiiiiiiiiiiiiiiiiiiii")
                # print(nivel)
                # print(theme_field)
                # print(category)
                # print(theme_field)
                name_LayerByBBx = getNameLayerCensu("state")
                if name_LayerByBBx == "":
                    query_shape = getError()
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")

                fields = theme_field.replace(" ","_")
                name = table_name + '_' + fields.lower()
                bbx = get_bboxMunCensus(name_LayerByBBx, "CLV_EDO",id_edo, True, 0, "")
                campo = getDescription_fieldCensus(filter_name)
                tit = getTitleCensus(filter_name)
                name_Layer = getNameLayerCensu(nivel)
                if name_Layer == "":
                    query_shape = getError()
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
                if nivel in "ageb":
                    # print(nivel)
                    # print(name_Layer)
                    id_edo = getIdPutZeroEdo(id_edo)
                    preview_name = "pre_lyrstageb_%s_%s" % (name, id_edo)
                    mun_layer = get_object_or_404(Layer, name=name_Layer)
                    # print(mun_layer)
                    double_view_name = "lyrstageb_%s_%s" % (name, id_edo)
                    view_name = "acstageb_%s_%s" % (name, id_edo)
                    layer_title = "%s %s" %(tit, theme_field)# "acstageb_l_%s" %name
                    layer_attr = 'CVE_MUN'
                    table_attribute = 'clvmun'
                    pre_view_sql = 'create materialized view %s as select tb.%s, sum(tb.%s) as %s, tb."clvedo", tb."clvmun", tb.id_ageb from %s as tb where tb.%s = \'%s\' and clvedo = \'%s\' group by tb.%s, tb."clvedo", tb."clvmun", tb.id_ageb order by tb."clvmun";' % \
                                (preview_name, field_name, filter_name, campo, table_name, field_name, theme_field, id_edo, field_name)
                    # print(pre_view_sql)
                    # print("pre")

                    view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_ENT", tb.%s, sum(tb.%s) as %s, tb.id_ageb from %s as ed left join %s as tb on ed."%s" = tb."%s" where ed."CVE_ENT" = \'%s\' group by tb.%s, ed."CVE_ENT", tb.clvedo, ed.the_geom, tb.id_ageb order by tb.clvedo;' % \
                                (view_name, field_name, campo, campo,  mun_layer.name, preview_name, layer_attr, table_attribute, id_edo, field_name)
                    # print(view_sql#To do chechk query)
                elif nivel in "mun":
                    # print("mun")
                    mun_layer = get_object_or_404(Layer, name=name_Layer)
                    double_view_name = "lyrstmun_%s_%s" % (name, id_edo)
                    view_name = "acstmun_%s_%s" % (name, id_edo)
                    layer_title = "%s %s" %(tit, theme_field)
                    # layer_title = "acstmun_l_%s_%s" %(name, id_edo)
                    layer_attr = 'CVE_MUN'
                    table_attribute = 'clvmun'
                    id_edo = getIdPutZeroEdo(id_edo)
                    view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_EDO", tb.clvmun, tb.%s, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s" where %s = \'%s\' and ed."CVE_EDO" = \'%s\' group by tb.%s, ed."CVE_EDO", tb.clvmun, ed.the_geom order by tb.clvmun;' % \
                                (view_name, field_name, filter_name, campo, mun_layer.name, table_name, layer_attr, table_attribute, field_name, theme_field, id_edo, field_name)
                    # print(view_sql)
                else:
                    # print("areas de controol")
                    id_edo = getIdPutZeroEdo(id_edo)
                    preview_name = "pre_lyrac_%s_%s" % (name, id_edo)
                    name_layer_edo = name_Layer + '_' + id_edo
                    mun_layer = get_object_or_404(Layer, name=name_layer_edo)
                    double_view_name = "lyrac_%s_%s" % (name, id_edo)
                    view_name = "acac_%s_%s" % (name, id_edo)
                    layer_title = "%s %s" %(tit, theme_field)
                    # print(layer_title)
                    # layer_title = "acac_l_%s" %name
                    layer_attr = 'CVE_MUN'
                    table_attribute = 'clvmun'
                    pre_view_sql = 'create materialized view %s as select tb.%s, sum(tb.%s) as %s, tb."clvedo", tb."clvmun", tb.areactrl from %s as tb where tb.%s = \'%s\' and clvedo = \'%s\' group by tb.%s, tb."clvedo", tb."clvmun", tb.areactrl order by tb."clvmun";' % \
                                (preview_name, field_name, filter_name, campo, table_name, field_name, theme_field, id_edo, field_name)
                    # print(pre_view_sql)
                    # print("pre")

                    view_sql = 'create materialized view %s as select ed.the_geom, tb.clvedo, tb.%s, sum(tb.%s) as %s, tb.areactrl from %s as ed, %s as tb where tb.clvedo = \'%s\' and tb.areactrl = ed."AC_Tot" group by tb.%s, tb.clvedo, ed.the_geom, tb.areactrl order by tb.clvedo;' % \
                                (view_name, field_name, campo, campo,  mun_layer.name, preview_name, id_edo, field_name)
                    # print(view_sql)
                # print("hay? capa")
                # print(double_view_name)
                # print(view_name)
                # print(mun_layer)
                # print(view_sql)
                # double_view_name = "lyr_%s" % name
                double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)

                # print(double_view_sql)
                # print("create the view")

                ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
                try:
                    # print(view_name)
                    aclayer = CensusLayer.objects.get(name=view_name)
                    if aclayer:
                        layer_dict = {
                            'id': aclayer.id, 'title': aclayer.title, 'typename': aclayer.typename,
                            "storeType": aclayer.storeType,
                            'x0': str(aclayer.bbox_x0), 'y0': str(aclayer.bbox_y0), 'x1': str(aclayer.bbox_x1),
                            'y1': str(aclayer.bbox_y1),
                        }

                        query_shape = {
                            'layer': layer_dict,
                            'href': ows_url
                        }
                        return HttpResponse(json.dumps(query_shape), content_type="application/json")
                except:
                    pass
            except Exception as e:
                    print("Error creating data form: %s " % e)
                    return None

            if nivel in "mun":
                # Create the View (and double view) solo para municipio
                getQueryCreateViewCen(double_view_name, view_name, view_sql, double_view_sql)
            else:
                # print("agebs" y areas de control)
                Census(double_view_name, view_name, view_sql, double_view_sql,preview_name, pre_view_sql)

            # Create the Layer in GeoServer from the view
            try:
                print("Create the Layer in GeoServer from the view")
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)#CONNECTION TO GEOSERVER
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)#BRING TO workspace
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
            # field = "total_sembrado"
            attr_type = "float"#To do, hacer un selecect para saber el tipo de dato del campo a tematizar
            if attr_type == 'int' or attr_type == 'float':
                try:
                    create_and_save_SLD_census(table_name, campo, double_view_name, cat)#theme_field->fields
                except:
                    pass

            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            # print("gs_layer")
            # print(gs_layer)
            if gs_layer is not None:
                try:
                    signals.pre_save.disconnect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                    layer, created = CensusLayer.objects.get_or_create(name=view_name, custom_table=table_name, defaults={
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
                    signals.pre_save.connect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                    layer.set_anonymous_permissions()
                except Exception as e:
                    print("Error creating layer in geonode: %s" % e)
                    return None

            layer_dict = {
                'id': layer.id, 'title': layer.title, 'typename': layer.typename, "storeType": layer.storeType,
                'x0': str(bbx[1][1]), 'y0': str(bbx[1][0]), 'x1': str(bbx[0][1]), 'y1': str(bbx[0][0]),
            }

            query_shape = {
                'layer':layer_dict,
                'href': ows_url
            }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")

"""
Este metodo es para obtener el bounding box de una capa de estados y municipios
"""
def get_bboxMunCensus(layer, CLV_EDO ,id_edo, statal, id_mun, CVE_MUN):
    lay_box = []
    try:
        # conn = psycopg2.connect("dbname='geonode-imports' user='adesur' host='localhost' password='adesur'")
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
        id_edo = getIdPutZeroEdo(id_edo)
        # print("bbx")
        if statal:
            query = 'SELECT ST_Extent(the_geom) as bextent FROM %s ed where ed."%s" = \'%s\';' % (layer,CLV_EDO, id_edo)
            # print(query)
        else:# Municipal
            # print("mu")
            id_mun = getIdPutZero(id_mun)
            query = 'SELECT ST_Extent(the_geom) as bextent FROM %s ed where ed."%s" = \'%s\' and ed."%s" = \'%s\';' % (layer,CLV_EDO, id_edo, CVE_MUN, id_mun)
            # print(query)
        cur.execute(query)
        # if statal:
            # print(cur.fetchone()[0])
        bbx_tex = cur.fetchone()[0]
        # print(bbx_tex)
        bbx_tex = bbx_tex.replace("BOX(","").replace(")","")
        bbox_coordinates_str = bbx_tex.split(",")
        # print(bbox_coordinates_str)
        coordinates1 = bbox_coordinates_str[0].split(" ")
        coordinates2 = bbox_coordinates_str[1].split(" ")
        lay_box.append(coordinates1)
        lay_box.append(coordinates2)
        # print(lay_box)
        conn.commit()
        conn.close()
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        conn.close()
        print("I am unable to connect to the database")
        print('Error %s' % e)
    return lay_box

def getTSN_Census(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        bbx = []
        if query_data:
            try:
                table_name = query_data['table_subject']
                category = query_data['category']
                nivel = query_data['nivel']
                id_edo = query_data['id_edo']
                subject = query_data['subject']
                filter_name = query_data['field_name']
                # theme_field = ""+theme_field+"_a c"
                # print(" _______________statal number________")
                # print(theme_field)
                # print(filter_name)
                # print(table_name)
                # print(nivel)
                name_LayerBBx = getNameLayerCensu("state")
                if name_LayerBBx == "":
                    query_shape = getError()
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
                bbx = get_bboxMunCensus(name_LayerBBx, "CLV_EDO",id_edo, True, 0, "")
                # print("aquiviene")
                campo = getDescription_fieldCensus(filter_name)
                tit = getTitleCensus(filter_name)

                fields = campo
                # print(fields)
                if len(table_name)>21:
                    name_str_tbl = table_name[21:len(table_name)]
                    if len(fields)>15:
                        name = name_str_tbl + '_' + fields[10:len(fields)]
                    else:
                        name = name_str_tbl + '_' + fields
                else:
                    name = table_name + '_' + fields
                # print(name)
                if len(name)>27:
                    name_str = name[0:27]
                    # print(name_str)
                    name = name_str
                name_Layer = getNameLayerCensu(nivel)
                if name_Layer == "":
                    query_shape = getError()
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
                if nivel in "ageb":
                    # print("agbs mierda")
                    id_edo = getIdPutZeroEdo(id_edo)
                    preview_name = "pre_lyrstageb%s%s" % (name, id_edo)
                    mun_layer = get_object_or_404(Layer, name=name_Layer)
                    double_view_name = "lyrstageb%s%s" % (name, id_edo)
                    view_name = "acstageb%s%s" % (name, id_edo)
                    layer_title = "acstageb_l%s%s" % (name, id_edo)
                    layer_attr = 'CVE_MUN'
                    table_attribute = 'clvmun'
                    pre_view_sql = 'create materialized view %s as select sum(tb.%s) as %s, tb."clvedo", tb."clvmun", tb.id_ageb from %s as tb where tb.clvedo = \'%s\' group by tb."clvedo", tb."clvmun", tb.id_ageb order by tb."clvmun";' % \
                                (preview_name, filter_name, campo, table_name, id_edo)
                    # print(pre_view_sql)
                    # print("pre")

                    view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_ENT", sum(tb.%s) as %s, tb.id_ageb from %s as ed left join %s as tb on ed."%s" = tb."%s" where ed."CVE_ENT" = \'%s\' group by ed."CVE_ENT", tb.clvedo, ed.the_geom, tb.id_ageb order by tb.clvedo;' % \
                                (view_name, campo, campo, mun_layer.name, preview_name, layer_attr, table_attribute, id_edo)
                    # print(view_sql)
                    # print("daaaaaaaaaaaaaaaaaaaaaaaaa")
                elif nivel in "mun":
                    # print("mun")
                    mun_layer = get_object_or_404(Layer, name=name_Layer)
                    double_view_name = "lyrstmun_%s_%s" % (name, id_edo)
                    view_name = "acstmun_%s_%s" % (name, id_edo)
                    layer_title = "%s" %(tit)
                    layer_attr = 'CVE_MUN'
                    table_attribute = 'clvmun'
                    id_edo = getIdPutZeroEdo(id_edo)
                    # print(campo)
                    # print("pre")

                    view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_EDO", tb.clvmun,  sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s" and ed."CVE_EDO" = \'%s\' group by tb."%s", ed."CVE_EDO", tb.clvmun, ed.the_geom order by tb.clvmun;' % \
                                (view_name, filter_name, campo, mun_layer.name, table_name, layer_attr, table_attribute, id_edo, filter_name)
                else:
                    # print("areas de control mierda")
                    id_edo = getIdPutZeroEdo(id_edo)
                    name_layer_edo = name_Layer + '_' + id_edo
                    preview_name = "pre_lyrac_%s%s" % (name, id_edo)
                    mun_layer = get_object_or_404(Layer, name=name_layer_edo)
                    double_view_name = "lyrac_%s%s" % (name, id_edo)
                    view_name = "acac_%s%s" % (name, id_edo)
                    layer_title = "acac_l_%s%s" % (name, id_edo)
                    layer_attr = 'CVE_MUN'
                    table_attribute = 'clvmun'
                    pre_view_sql = 'create materialized view %s as select sum(tb.%s) as %s, tb."clvedo", tb."clvmun", tb.areactrl from %s as tb where tb.clvedo = \'%s\'  group by tb."clvedo", tb."clvmun", tb.areactrl order by tb."clvmun";' % \
                                (preview_name, filter_name, campo, table_name, id_edo)
                    # print(pre_view_sql)
                    # print("pre")

                    view_sql = 'create materialized view %s as select ed.the_geom, tb.clvedo, sum(tb.%s) as %s, tb.areactrl from %s as ed, %s as tb where tb.clvedo = \'%s\' and tb.areactrl = ed."AC_Tot" group by tb.clvedo, ed.the_geom, tb.areactrl order by tb.clvedo;' % \
                                (view_name, campo, campo,  mun_layer.name, preview_name, id_edo)
                                # (view_name, campo, campo, mun_layer.name, preview_name, layer_attr, table_attribute, id_edo)
                    # print(view_sql)

                # print("hay? capa")
                # print(double_view_name)
                # print(view_name)
                # print(mun_layer)
                # print(view_sql)
                double_view_name = "lyr_%s" % name
                double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)

                # print(double_view_sql)
                # print("create the view")

                # If the query layer exists return layer data
                ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
                try:
                    # print(view_name)
                    aclayer = CensusLayer.objects.get(name=view_name)
                    # print(aclayer)
                    if aclayer:
                        layer_dict = {
                            'id': aclayer.id, 'title': aclayer.title, 'typename': aclayer.typename,
                            "storeType": aclayer.storeType,
                            'x0': str(aclayer.bbox_x0), 'y0': str(aclayer.bbox_y0), 'x1': str(aclayer.bbox_x1),
                            'y1': str(aclayer.bbox_y1),
                        }

                        query_shape = {
                            'layer': layer_dict,
                            'href': ows_url
                        }
                        return HttpResponse(json.dumps(query_shape), content_type="application/json")
                except:
                    pass

            except Exception as e:
                    print("Error creating data form: %s " % e)
                    return None

            if nivel in "mun":
                # Create the View (and double view) mun
                getQueryCreateViewCen(double_view_name, view_name, view_sql, double_view_sql)
            else:
                # print("agebs y areas de control")
                Census(double_view_name, view_name, view_sql, double_view_sql,preview_name, pre_view_sql)

            # Create the Layer in GeoServer from the view
            try:
                print("Create the Layer in GeoServer from the view")
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)#CONNECTION TO GEOSERVER
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)#BRING TO workspace
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
            # field = "total_sembrado"
            attr_type = "float"#To do, hacer un selecect para saber el tipo de dato del campo a tematizar
            if attr_type == 'int' or attr_type == 'float':
                try:
                    is_valid_sld = []
                    is_valid_sld = create_and_save_SLD_census(table_name, campo, double_view_name, cat)#theme_field->fields
                except:
                    pass

            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            # print("gs_layer")
            # print(gs_layer)
            if is_valid_sld:
                if gs_layer is not None:
                    try:
                        signals.pre_save.disconnect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                        layer, created = CensusLayer.objects.get_or_create(name=view_name, custom_table=table_name, defaults={
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
                        signals.pre_save.connect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                        layer.set_anonymous_permissions()
                    except Exception as e:
                        print("Error creating layer in geonode: %s" % e)
                        return None

                layer_dict = {
                    'id': layer.id, 'title': layer.title, 'typename': layer.typename, "storeType": layer.storeType,
                    'x0': str(bbx[1][1]), 'y0': str(bbx[1][0]), 'x1': str(bbx[0][1]), 'y1': str(bbx[0][0]),
                }

                query_shape = {
                    'layer':layer_dict,
                    'href': ows_url
                }
            else:
                layer_dict = {
                    'id': 0, 'title': "No hay datos", 'typename': "No hay datos", "storeType": "No hay datos",
                    'x0': str(bbx[1][1]), 'y0': str(bbx[1][0]), 'x1': str(bbx[0][1]), 'y1': str(bbx[0][0]),
                }

                query_shape = {
                    'layer':layer_dict,
                    'href': ows_url,
                    'empty':True
                }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def getQueryCreateViewCen(double_view_name, view_name, view_sql, double_view_sql):
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
        # print(('drop view if exists %s;' % double_view_name))
        cur.execute('drop materialized view if exists %s;' % view_name)
        # print(('drop materialized view if exists %s;' % view_name))
        cur.execute(view_sql)
        cur.execute(double_view_sql)
        conn.commit()
        conn.close()
        print("Create views ok")

    except Exception as e:
            print("Error creating view in postgis: %s" % e)
            conn.close()
            return None

def getTematizer_Census(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        if query_data:
            theme_field = query_data['theme_field']
            table_name = query_data['table_subject']
            category = query_data['category']
            nivel = query_data['nivel']
            id_edo = query_data['id_edo']
            id_mun = query_data['id_mun']
            filter_name = query_data['filter_name']
            field_name = query_data['field_name']

            # theme_field = ""+theme_field+"_a c"
            # print("municipal_____________________________")
            # print(theme_field)
            # print(table_name)
            # print(table_name)
            # print(category)
            fields = theme_field.replace(" ","_")
            # print(fields)
            name = table_name + '_' + fields.lower()
            # print(nivel)
            # print(id_edo)
            name_Layer_bybb = getNameLayerCensu("state")
            if name_Layer_bybb == "":
                query_shape = getError()
                return HttpResponse(json.dumps(query_shape), content_type="application/json")
            bbx = get_bboxMun(name_Layer_bybb, "CLV_EDO",id_edo, True, 0, "")
            # print("finish get boz")
            campo = getDescription_fieldCensus(filter_name)
            tit = getTitleCensus(filter_name)
            # print(campo)
            name_Layer = getNameLayerCensu(nivel)
            if name_Layer == "":
                query_shape = getError()
                return HttpResponse(json.dumps(query_shape), content_type="application/json")
            if nivel in "ac":
                # print("ac")
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                double_view_name = "lyrmunac_%s" % name
                view_name = "acmunac_%s" % name
                layer_title = "acmunac_l_%s" %name
                layer_attr = 'AC_Tot'
                table_attribute = 'areactrl'
                id_edo = getIdPutZeroEdo(id_edo)
                id_mun = getIdPutZero(id_mun)

                view_sql_empty = 'select ed.the_geom, tb.areactrl, tb.clvedo, tb.clvmun, tb.%s, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s" where %s = \'%s\' and tb.clvmun = \'%s\' and tb.clvedo = \'%s\' group by tb.%s,tb.clvedo, tb.areactrl,ed.the_geom, tb.clvmun order by tb.clvedo;' % \
                            (field_name, filter_name, campo, mun_layer.name, table_name, layer_attr, table_attribute, field_name, theme_field, id_mun, id_edo, field_name)
                # print(view_sql_empty)
                if validate_query_empty(view_sql_empty) is None:
                    query_shape = {
                        'layer':"None",
                        'href': "None"
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")

                view_sql = 'create materialized view %s as %s' % \
                            (view_name, view_sql_empty)
            else:
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                double_view_name = "lyrmunagb_%s_%s_%s" % (name, id_edo, id_mun)
                view_name = "acmunagb_%s_%s_%s" % (name, id_edo, id_mun)
                layer_title = "acmunagb_l_%s_%s_%s" %(name, id_edo, id_mun)
                layer_attr = 'CVE_MUN'
                table_attribute = 'clvmun'
                id_edo = getIdPutZeroEdo(id_edo)
                id_mun = getIdPutZero(id_mun)

                view_sql_empty = 'select ed.the_geom, ed."CVE_EDO", tb.clvmun, tb.id_ageb, tb.%s, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s"  where %s = \'%s\' and tb."%s"  = \'%s\' and ed."CVE_EDO" = \'%s\' group by tb.%s, ed."CVE_EDO", tb.clvmun, tb.id_ageb, tb.clvmun, ed.the_geom order by tb.clvmun;' % \
                            (field_name, filter_name, campo, mun_layer.name, table_name, layer_attr, table_attribute, field_name, theme_field, table_attribute, id_mun, id_edo, field_name)

                if validate_query_empty(view_sql_empty) is None:
                    query_shape = {
                        'layer':"None",
                        'href': "None"
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
                # print(id_mun)
                view_sql = 'create materialized view %s as %s' % \
                            (view_name, view_sql_empty)

            # print("hay? capa")
            # print(double_view_name)
            # print(view_name)
            # print(mun_layer)
            # print(view_sql)
            # double_view_name = "lyr_%s" % name
            double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)

            # print(double_view_sql)
            # print("create the view")

            # If the query layer exists return layer data
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            try:
                # print(view_name)
                aclayer = ACLayer.objects.get(name=view_name)
                # print(aclayer)
                if aclayer:
                    # print(aclayer.typename)
                    layer_dict = {
                        'id': aclayer.id, 'title': aclayer.title, 'typename': aclayer.typename,
                        "storeType": aclayer.storeType,
                        'x0': str(aclayer.bbox_x0), 'y0': str(aclayer.bbox_y0), 'x1': str(aclayer.bbox_x1),
                        'y1': str(aclayer.bbox_y1),
                    }

                    query_shape = {
                        'layer': layer_dict,
                        'href': ows_url
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
            except:
                pass


            # Create the View (and double view)
            getQueryCreateViewCen(double_view_name, view_name, view_sql, double_view_sql)

            # Create the Layer in GeoServer from the view
            try:
                print("Create the Layer in GeoServer from the view")
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)#CONNECTION TO GEOSERVER
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)#BRING TO workspace
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
            attr_type = "float"#To do, hacer un selecect para saber el tipo de dato del campo a tematizar
            if attr_type == 'int' or attr_type == 'float':
                try:
                    create_and_save_SLD_census(table_name, campo, double_view_name, cat)#theme_field->fields
                except:
                    pass

            # Create the Layer in GeoNode from the GeoServer Layer
            gs_layer = cat.get_layer(double_view_name)
            # print("gs_layer")
            # print(gs_layer)
            if gs_layer is not None:
                try:
                    signals.pre_save.disconnect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                    layer, created = CensusLayer.objects.get_or_create(name=view_name, custom_table=table_name, defaults={
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
                    signals.pre_save.connect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                    layer.set_anonymous_permissions()
                except Exception as e:
                    print("Error creating layer in geonode: %s" % e)
                    return None

            layer_dict = {
                'id': layer.id, 'title': layer.title, 'typename': layer.typename, "storeType": layer.storeType,
                'x0': str(bbx[1][1]), 'y0': str(bbx[1][0]), 'x1': str(bbx[0][1]), 'y1': str(bbx[0][0]),
            }

            query_shape = {
                'layer':layer_dict,
                'href': ows_url
            }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")



def getTematizerNumber_Census(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        if query_data:
            table_name = query_data['table_subject']
            category = query_data['category']
            nivel = query_data['nivel']
            id_edo = query_data['id_edo']
            id_mun = query_data['id_mun']
            filter_name = query_data['filter_name']

            name_LayerBBx = getNameLayerCensu("state")
            if name_LayerBBx == "":
                query_shape = getError()
                return HttpResponse(json.dumps(query_shape), content_type="application/json")
            bbx = get_bboxMunCensus(name_LayerBBx, "CLV_EDO",id_edo, True, 0, "")
            campo = getDescription_fieldCensus(filter_name)
            tit = getTitleCensus(filter_name)

            fields = campo
            if len(table_name)>21:
                name_str_tbl = table_name[21:len(table_name)]
                if len(fields)>15:
                    name = name_str_tbl + '_' + fields[10:len(fields)]
                else:
                    name = name_str_tbl + '_' + fields
            else:
                name = table_name + '_' + fields
            if len(name)>30:
                name_str = name[0:30]
                name = name_str
            name_Layer = getNameLayerCensu(nivel)
            if name_Layer == "":
                query_shape = getError()
                return HttpResponse(json.dumps(query_shape), content_type="application/json")
            if nivel in "ac":
                # print("ac"CensusLayer)
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                double_view_name = "lyrmunac_%s" % name
                view_name = "acmunac_%s" % name
                layer_title = "acmunac_l_%s" %name
                layer_attr = 'AC_Tot'
                table_attribute = 'areactrl'
                id_mun = getIdPutZero(id_mun)
                id_edo = getIdPutZeroEdo(id_edo)

                view_sql = 'create materialized view %s as select ed.the_geom, tb.areactrl, tb.clvedo, tb.clvmun, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s"  where tb.clvmun = \'%s\' and tb.clvedo = \'%s\' group by tb.clvedo, tb.areactrl,ed.the_geom, tb.clvmun order by tb.clvedo;' % \
                            (view_name, filter_name, campo, mun_layer.name, table_name, layer_attr, table_attribute, id_mun, id_edo)
            else:
                # print("agebs")
                mun_layer = get_object_or_404(Layer, name=name_Layer)
                double_view_name = "lyrmunagb_%s_%s_%s" % (name, id_edo, id_mun)
                view_name = "acmunagb_%s_%s_%s" % (name, id_edo, id_mun)
                layer_title = "acmunagb_l_%s_%s_%s" %(name, id_edo, id_mun)
                layer_attr = 'CVE_MUN'
                table_attribute = 'clvmun'
                id_mun = getIdPutZero(id_mun)
                id_edo = getIdPutZeroEdo(id_edo)
                view_sql = 'create materialized view %s as select ed.the_geom, ed."CVE_EDO", tb.clvmun, tb.id_ageb, sum(tb.%s) as %s from %s as ed left join %s as tb on ed."%s" = tb."%s"  where  tb."%s"  = \'%s\' and ed."CVE_EDO" = \'%s\' group by ed."CVE_EDO", tb.clvmun, tb.id_ageb, tb.clvmun, ed.the_geom order by tb.clvmun;' % \
                            (view_name, filter_name, campo, mun_layer.name, table_name, layer_attr, table_attribute, table_attribute, id_mun, id_edo)

            # print("hay? capa")
            # print(double_view_name)
            # print(view_name)
            # print(mun_layer)
            # print(view_sql)
            # double_view_name = "lyr_%s" % name
            double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)

            # print(double_view_sql)
            # print("create the view")

            # If the query layer exists return layer data
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            try:
                # print(view_name)
                aclayer = CensusLayer.objects.get(name=view_name)
                # print(aclayer)
                if aclayer:
                    # print(aclayer.typename)
                    layer_dict = {
                        'id': aclayer.id, 'title': aclayer.title, 'typename': aclayer.typename,
                        "storeType": aclayer.storeType,
                        'x0': str(aclayer.bbox_x0), 'y0': str(aclayer.bbox_y0), 'x1': str(aclayer.bbox_x1),
                        'y1': str(aclayer.bbox_y1),
                    }

                    query_shape = {
                        'layer': layer_dict,
                        'href': ows_url
                    }
                    return HttpResponse(json.dumps(query_shape), content_type="application/json")
            except:
                pass


            # Create the View (and double view)
            getQueryCreateViewCen(double_view_name, view_name, view_sql, double_view_sql)

            # Create the Layer in GeoServer from the view
            try:
                print("Create the Layer in GeoServer from the view")
                cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                              _user, _password)#CONNECTION TO GEOSERVER
                workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)#BRING TO workspace
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
            attr_type = "float"#To do, hacer un selecect para saber el tipo de dato del campo a tematizar
            if attr_type == 'int' or attr_type == 'float':
                try:
                    validate_sld = []
                    validate_sld = create_and_save_SLD_census(table_name, campo, double_view_name, cat)#theme_field->fields
                except:
                    pass

            # if not validate_sld:
            #     print("esto esta vacio pedaso ")
            if validate_sld:
                # Create the Layer in GeoNode from the GeoServer Layer
                gs_layer = cat.get_layer(double_view_name)
                # print("gs_layer")
                # print(gs_layer)
                if gs_layer is not None:
                    try:
                        signals.pre_save.disconnect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                        layer, created = CensusLayer.objects.get_or_create(name=view_name, custom_table=table_name, defaults={
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
                        signals.pre_save.connect(geoserver_pre_save, sender=CensusLayer)#cAMBIAR POR ACLAYER
                        layer.set_anonymous_permissions()
                    except Exception as e:
                        print("Error creating layer in geonode: %s" % e)
                        return None
                    layer_dict = {
                        'id': layer.id, 'title': layer.title, 'typename': layer.typename, "storeType": layer.storeType,
                        'x0': str(bbx[1][1]), 'y0': str(bbx[1][0]), 'x1': str(bbx[0][1]), 'y1': str(bbx[0][0]),
                    }

                    query_shape = {
                        'layer':layer_dict,
                        'href': ows_url,
                        'empty':False
                    }
            else:
                layer_dict = {
                    'id': 0, 'title': "No hay datos", 'typename': "No hay datos", "storeType": "No hay datos",
                    'x0': str(bbx[1][1]), 'y0': str(bbx[1][0]), 'x1': str(bbx[0][1]), 'y1': str(bbx[0][0]),
                }

                query_shape = {
                    'layer':layer_dict,
                    'href': ows_url,
                    'empty':True
                }


        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")
