# -*- encoding: utf-8 -*-
import json
import psycopg2

from django.http import HttpResponse, HttpResponseRedirect
from django.http import HttpResponseServerError
from django.shortcuts import render, render_to_response, get_object_or_404
from django.contrib.auth.decorators import login_required
from geonode.geoserver.helpers import ogc_server_settings
from django.core.exceptions import ObjectDoesNotExist
from django.template import RequestContext
from django.urls import reverse

from geonode.toolkit.control_area.models import ControlArea
from geonode.toolkit.models import ConfigureObjectSOA, SpatialObject
from geonode.toolkit.control_area.forms import ControlAreaAllForm
from geonode.toolkit.control_area.forms import ControlAreaForm
from geonode.mviewer.models import LayerIds, MViewer
from geonode.layers.models import Attribute

la_y = []

def getAnalisysPerClvedo(request):
    if request.is_ajax():
        try:
            data_list_array = []
            data_delimiter = []
            bear_results = 0
            upc = 0
            data_list = []
            dir_temp = {}
            dir_delimiter = {}
            data_fields = []
            query_data = json.loads(request.POST['query_data'])
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
            coverage = query_data['coverage']
            nivel = query_data['nivel']
            id_mun = query_data['id_mun']
            clv_edo = query_data['CLV_EDO']
            cve_ent = query_data['CVE_ENT']
            id_ageb = query_data['id_ageb']
            id_ac = query_data['areactrl']
            field = query_data['field']
            # print nivel
            # print id_mun
            # print clv_edo
            # print cve_ent
            # print id_ageb
            # print coverage
            # print id_ac
            # print field
            # if field:
            #     print "lleno"
            # else:
            #     # print "vacio"
            #     field = False
            tabla_fields = "trd_agricultura_pv"
            query_fields = "select campo, des_cam from variables where tabla like '"+tabla_fields+"';"
            # print query_fields
            cur.execute(query_fields)
            data_fields = cur.fetchall()
            # print data_fields
            # print "hereeeeeeeeeee"
            if coverage in "national":
                # print "es nacional"
                if nivel in "statal":
                    # print "statal"
                    query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
                    delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
                    bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\';" % clv_edo
                    upc_query = "select SUM(CAST(ups_cult AS float)) as upc from trd_agricultura_pv t where clvedo = \'%s\' and p008n02 = \'%s\';" % (clv_edo, field)
                else:
                    # print "municipiooooooooooooooooooooooooooooooooo"
                    query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % cve_ent
                    delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and clvmun = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (cve_ent, id_mun)
                    bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\';" % cve_ent
                    upc_query = "select SUM(CAST(ups_cult AS float)) as upc from trd_agricultura_pv t where clvedo = \'%s\' and p008n02 = \'%s\';" % (cve_ent, field)
                    # print delimited_query
                    # print "delimited_query"
            else:
                # print "es statal"
                if nivel in "ageb":# nivel municipal por ageb
                    query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % cve_ent
                    delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and id_ageb = \'%s\'group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (cve_ent, id_ageb)
                    bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\' and id_ageb = \'%s\';" % (cve_ent, id_ageb)
                    upc_query = "select SUM(CAST(ups_cult AS float)) as upc from trd_agricultura_pv t where clvedo = \'%s\' and id_ageb = \'%s\' and p008n02 = \'%s\';" % (cve_ent, id_ageb, field)
                    # print query
                elif nivel in "ac":
                    query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % cve_ent
                    delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and areactrl = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (cve_ent, id_ac)
                    bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\' and areactrl = \'%s\';" % (cve_ent, id_ac)
                    upc_query = "select SUM(CAST(ups_cult AS float)) as upc from trd_agricultura_pv t where clvedo = \'%s\' and areactrl = \'%s\' and p008n02 = \'%s\';" % (cve_ent, id_ac, field)
                    # print query
                else:
                    # print "mun"
                    query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % cve_ent
                    delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and clvmun = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (cve_ent, id_mun)
                    bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\' and clvmun = \'%s\';" % (cve_ent, id_mun)
                    upc_query = "select SUM(CAST(ups_cult AS float)) as upc from trd_agricultura_pv t where clvedo = \'%s\' and clvmun = \'%s\' and p008n02 = \'%s\';" % (cve_ent, id_mun, field)
                    # print query
            cur.execute(query)
            data_list_array = cur.fetchall()
            cur.execute(bear_query)
            bear_results = cur.fetchone()
            cur.execute(delimited_query)
            data_delimiter = cur.fetchall()

            if field:
                # print "hay field"
                cur.execute(upc_query)
                upc = cur.fetchone()
            # else:
            #     print "false"
                # upc[0] = False
            # print bear_results
            # print "bear_results "
            # print data_list_array
            if len(data_list_array) > 0:
                for totales in data_list_array:
                    if dir_temp.has_key(totales[0]) != True:
                        dir_temp[totales[0]] = totales
                    else:
                        t_temp = totales[0]
                        arr2 = dir_temp[totales[0]]
                        total_sembrado = arr2[1] + totales[1]
                        total_cosechado = arr2[2] + totales[2]
                        total_organico = arr2[3] + totales[3]
                        arr_new = []
                        arr_new.append(t_temp)
                        arr_new.append(total_sembrado)
                        arr_new.append(total_cosechado)
                        arr_new.append(total_organico)
                        dir_temp[totales[0]] = arr_new
            if len(data_delimiter) > 0:
                # print "*************************"
                for delimit in data_delimiter:
                    if dir_delimiter.has_key(delimit[0]) != True:
                        dir_delimiter[delimit[0]] = delimit
                        # print delimit
                        # print "some"
                    else:
                        t_temp = delimit[0]
                        arr2 = dir_delimiter[delimit[0]]
                        total_sembrado = arr2[1] + delimit[1]
                        total_cosechado = arr2[2] + delimit[2]
                        total_organico = arr2[3] + delimit[3]
                        arr_new = []
                        arr_new.append(t_temp)
                        arr_new.append(total_sembrado)
                        arr_new.append(total_cosechado)
                        arr_new.append(total_organico)
                        dir_delimiter[delimit[0]] = arr_new
                        # print arr_new
                        # print "arr_new"

            conn.commit()
            conn.close()
            # print "commit"
            data_list.append(dir_temp)
            data_list.append(data_fields)
            data_list.append(bear_results[0])
            # print bear_results[0]
            # print upc[0]
            if field:
                data_list.append(upc[0])
            else:
                data_list.append(False)
            if len(data_delimiter) > 0:
                data_list.append(dir_delimiter)
                # print dir_delimiter
            else:
                data_list.append(False)
            # print data_list
            print("Records created successfully")
        except psycopg2.DatabaseError as e:
            print("I am unable to connect to the database")
            print('Error %s' % e)
            conn.close()
        return HttpResponse(json.dumps(data_list), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")


"""
Método para obtener el analisis del censu para  un mapa determinado
"""
def getAnalysisCensus(request):
    if request.is_ajax():
        try:
            list_map = []
            query_data = json.loads(request.POST['query_data'])
            # print query_data
            if query_data:
                clv_edo = query_data['clv_edo']
                id_mun = query_data['id_mun']
                id_ageb = query_data['id_ageb']
                id_ac = query_data['id_ac']
                # id_layerids = query_data['id_layerids']
                nivel = query_data['nivel']
                if nivel not in "None":
                    list_map = getSelectsCensus(nivel, clv_edo, id_mun, id_ageb, id_ac)
        except ObjectDoesNotExist:
            HttpResponseServerError("ObjectDoesNotExist Map!")
        return HttpResponse(json.dumps(list_map), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")

def getSelectsCensus(nivel, clv_edo, id_mun, id_ageb, id_ac):
    try:
        # print "*************************************"
        data_list_array = []
        data_delimiter = []
        bear_results = 0
        data_list = []
        dir_temp = {}
        dir_delimiter = {}
        data_fields = []
        # query_data = json.loads(request.POST['query_data'])
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
        tabla_fields = "trd_agricultura_pv"
        query_fields = "select campo, des_cam from variables where tabla like '"+tabla_fields+"';"
        # print query_fields
        cur.execute(query_fields)
        data_fields = cur.fetchall()
        # print data_fields
        if nivel in "statal":
            # print "statal"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\';" % clv_edo
        elif nivel in "ageb":
            # print "ag"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and id_ageb = \'%s\'group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (clv_edo, id_ageb)
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\' and id_ageb = \'%s\';" % (clv_edo, id_ageb)
            # print delimited_query
        elif nivel in "ac":
            print("ac")
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and areactrl = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (clv_edo, id_ac)
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\' and areactrl = \'%s\';" % (clv_edo, id_ac)
            # print query
        else:
            # print "municipiooooooooooooooooooooooooooooooooo"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % clv_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = \'%s\' and clvmun = \'%s\' group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % (clv_edo, id_mun)
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = \'%s\';" % clv_edo
            # print delimited_query
        # print query
        # print delimited_query
        # print bear_query
        cur.execute(query)
        data_list_array = cur.fetchall()
        cur.execute(bear_query)
        bear_results = cur.fetchone()
        cur.execute(delimited_query)
        data_delimiter = cur.fetchall()

        # print bear_results
        # print "bear_results "
        # print data_list_array
        if len(data_list_array) > 0:
            for totales in data_list_array:
                if dir_temp.has_key(totales[0]) != True:
                    dir_temp[totales[0]] = totales
                else:
                    t_temp = totales[0]
                    arr2 = dir_temp[totales[0]]
                    total_sembrado = arr2[1] + totales[1]
                    total_cosechado = arr2[2] + totales[2]
                    total_organico = arr2[3] + totales[3]
                    arr_new = []
                    arr_new.append(t_temp)
                    arr_new.append(total_sembrado)
                    arr_new.append(total_cosechado)
                    arr_new.append(total_organico)
                    dir_temp[totales[0]] = arr_new
        if len(data_delimiter) > 0:
            # print "*************************"
            for delimit in data_delimiter:
                if dir_delimiter.has_key(delimit[0]) != True:
                    dir_delimiter[delimit[0]] = delimit
                    # print delimit
                    # print "some"
                else:
                    t_temp = delimit[0]
                    arr2 = dir_delimiter[delimit[0]]
                    total_sembrado = arr2[1] + delimit[1]
                    total_cosechado = arr2[2] + delimit[2]
                    total_organico = arr2[3] + delimit[3]
                    arr_new = []
                    arr_new.append(t_temp)
                    arr_new.append(total_sembrado)
                    arr_new.append(total_cosechado)
                    arr_new.append(total_organico)
                    dir_delimiter[delimit[0]] = arr_new
                    # print arr_new
                    # print "arr_new"
        conn.commit()
        conn.close()
        data_list.append(dir_temp)
        data_list.append(data_fields)
        data_list.append(bear_results[0])
        # print bear_results[0]
        data_list.append(False)
        if len(data_delimiter) > 0:
            data_list.append(dir_delimiter)
            # print dir_delimiter
        else:
            data_list.append(False)
        data_list.append(nivel)
        # print data_list
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return data_list

def getNivelSpatialObject(request):
    if request.is_ajax():
        data_list = []
        try:
            ids_lays = request.GET['layer_id']
            mw_id = request.GET['mviewer']
            if ids_lays not in "None":
                layerids = get_object_or_404(LayerIds, id=ids_lays)
                if layerids:
                    mvi = get_object_or_404(MViewer, id=mw_id)
                    if mvi:
                        tool_crop = get_object_or_404(SpatialObject, constant='CROPS_ANALISYS_SPRING')
                        if tool_crop:
                            configure_map = ConfigureObjectSOA.objects.filter(layer_mv=layerids).filter(tool=tool_crop).filter(mviewer=mvi)
                            if configure_map:
                                confi = ControlArea.objects.get(conf=configure_map)
                                if confi:
                                    data_list.append(confi.coverages)
                                    return HttpResponse( json.dumps(data_list), content_type='application/json')
        except ObjectDoesNotExist:
            print("No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")

@login_required
def configure_tool(request, mw_id, conf_id):
    try:
        arr_attribute = []
        # cov = ControlArea.objects.filter(conf=conf_id)
        cov = get_object_or_404(ConfigureObjectSOA, id=conf_id)
        if cov:
            layerid = get_object_or_404(LayerIds, id=cov.layer_mv.id)
            layer = Attribute.objects.filter(resource=layerid.layer.id)
            for lay in layer:
                arr_attribute.append(lay.attribute)
        update = False
        json_list = json.dumps(arr_attribute)
        if request.method == 'POST':
            state = request.POST.get('state', False)
            mun = request.POST.get('mun', False)
            ageb = request.POST.get('ageb', False)
            ac = request.POST.get('ac', False)
            coverages = request.POST.get('coverages', False)
            creation_date = request.POST.get('timestamp', False)
            if request.user.is_authenticated:
                user = request.user.id
                if cov:
                    obj = ControlArea.objects.filter(conf=cov.id)
                    if obj:
                        for oj in obj:
                            tool_form = ControlAreaAllForm({'coverages':coverages,'conf':conf_id, 'state':state, 'ageb':ageb,'mun':mun,'ac':ac,'user_sos':user, 'status':1, 'creation_date':creation_date},instance=oj)
                            if tool_form.is_valid():
                                tool_form.save()
                                # print "actualizo"
                                return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
                    else:
                        # print "nuevo"
                        tool_form = ControlAreaAllForm({'coverages':coverages,'conf':conf_id, 'state':state, 'ageb':ageb,'mun':mun,'ac':ac,'user_sos':user, 'status':1, 'creation_date':creation_date})
                        if tool_form.is_valid():
                            tool_form.save()
                            # print "guardo nuevo"
                            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
            else:
                return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
        else:
            tool_form = ControlAreaForm()
            if cov:
                obj = ControlArea.objects.filter(conf=cov.id)
                for o in obj:
                    # print o.coverages
                    tool_form = ControlAreaForm(request.POST or None, instance=o)
                    update = True
                    break

    except ObjectDoesNotExist:
            HttpResponseServerError("ObjectDoesNotExist ConfigureObjectSOA!")
    return render_to_response('ControlAreaForm.html', {'form': tool_form, 'update':update, 'arr_attribute':json_list},
                              context_instance=RequestContext(request))

def getMultiKeyAC(request):
    if request.is_ajax():
        data_list = []
        keys = []
        try:
            query_data = json.loads(request.POST['query_data'])
            geometry = query_data['geometry']
            ids_lays = query_data['id_layerids']
            if ids_lays not in "None":
                layerids = get_object_or_404(LayerIds, id=ids_lays)
                if layerids:
                    data_crops = []
                    configure_map = ConfigureObjectSOA.objects.get(layer_mv=layerids.id)
                    confi = ControlArea.objects.get(conf=configure_map.id)
                    keys = get_key_area(geometry, layerids.layer.name,confi)
                    data_crops = getInformationAC(layerids.layer.name, confi, keys)
                    geoJsonFeature = get_geoJson_by_layer_ac(geometry,layerids.layer.name)
                    data_list.append(data_crops)
                    data_list.append(geoJsonFeature)
                    return HttpResponse(json.dumps(data_list), content_type='application/json')
        except ObjectDoesNotExist:
            print("No existe el objeto")
            return HttpResponse(json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")

"""
Este metodo es para obtener las claves de los estados, municipios, agebs o areas de control de una determinadad area
"""
def get_key_area(coordinates, name_table,confi):

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
        if confi.coverages in "statal":
            query = "SELECT t.\"%s\" FROM %s AS t WHERE ST_Intersects(ST_GeomFromText('POLYGON((%s))', 4326) , t.the_geom);" % (confi.state, name_table,coordinates)
        elif confi.coverages in "mun":
            query = "SELECT t.\"%s\", t.\"%s\" FROM %s AS t WHERE ST_Intersects(ST_GeomFromText('POLYGON((%s))', 4326) , t.the_geom);" % (confi.state,confi.mun, name_table,coordinates)
        elif confi.coverages in "ageb":
            query = "SELECT t.\"%s\", t.\"%s\", t.\"%s\" FROM %s AS t WHERE ST_Intersects(ST_GeomFromText('POLYGON((%s))', 4326) , t.the_geom);" % (confi.state,confi.mun,confi.ageb, name_table,coordinates)
        elif confi.coverages in "ac":
            query = "SELECT t.\"%s\",t.\"%s\", t.\"%s\", t.\"%s\" FROM %s AS t WHERE ST_Intersects(ST_GeomFromText('POLYGON((%s))', 4326) , t.the_geom);" % (confi.state,confi.mun,confi.ageb,confi.ac, name_table,coordinates)
        # print query
        cur.execute(query)
        la_y = cur.fetchall()
        conn.commit()
        conn.close()
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return la_y


def getInformationAC(name_table, confi, data):
    try:
        # print "************************************"
        data_list_array = []
        data_delimiter = []
        bear_results = 0
        data_list = []
        dir_temp = {}
        dir_delimiter = {}
        data_fields = []
        keys = ""
        keys_per_edo = ""
        header = False
        edo = ""
        mun = ""
        ageb = ""
        ac = ""
        # query_data = json.loads(request.POST['query_data'])
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
        nivel = confi.coverages
        # print nivel
        # print data
        indice = 0
        if nivel in "statal":
            for d in data:
                indice +=1
                if indice == 1:
                    keys = "'"+d[0]+"'"
                    header = True
                    edo = d[0]
                else:
                    keys = keys +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "mun":
            for d in data:
                indice +=1
                # print indice
                if indice == 1:
                    keys = "'"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = " '"+d[0]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                else:
                    keys = keys +" or clvmun = '"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
            # print keys
        elif nivel in "ageb":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                else:
                    keys = keys +" or id_ageb = '"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "ac":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                    ac = d[3]
                else:
                    keys = keys +" or areactrl = '"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        tabla_fields = "trd_agricultura_pv"
        query_fields = "select campo, des_cam from variables where tabla like '"+tabla_fields+"';"
        cur.execute(query_fields)
        data_fields = cur.fetchall()
        if nivel in "statal":
            # print "statal"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = %s;" % keys
        elif nivel in "mun":
            # print "municipiooooooooooooooooooooooooooooooooo"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvmun = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvmun = %s;" % keys
        elif nivel in "ageb":
            # print "ag"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where id_ageb = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where id_ageb = %s;" % keys
        elif nivel in "ac":
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where areactrl = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where areactrl = %s;" % keys
            # print query
            # print delimited_query
            # print bear_query
        cur.execute(query)
        data_list_array = cur.fetchall()
        cur.execute(bear_query)
        bear_results = cur.fetchone()
        cur.execute(delimited_query)
        data_delimiter = cur.fetchall()
        # print "query"
        # print query
        # print delimited_query
        # print bear_query
        if len(data_list_array) > 0:
            for totales in data_list_array:
                if dir_temp.has_key(totales[0])is not True:
                    dir_temp[totales[0]] = totales
                else:
                    t_temp = totales[0]
                    arr2 = dir_temp[totales[0]]
                    total_sembrado = arr2[1] + totales[1]
                    total_cosechado = arr2[2] + totales[2]
                    total_organico = arr2[3] + totales[3]
                    arr_new = []
                    arr_new.append(t_temp)
                    arr_new.append(total_sembrado)
                    arr_new.append(total_cosechado)
                    arr_new.append(total_organico)
                    dir_temp[totales[0]] = arr_new
        if len(data_delimiter) > 0:
            # print "*************************"
            for delimit in data_delimiter:
                if dir_delimiter.has_key(delimit[0]) is not True:
                    dir_delimiter[delimit[0]] = delimit
                    # print delimit
                    # print "some"
                else:
                    t_temp = delimit[0]
                    arr2 = dir_delimiter[delimit[0]]
                    total_sembrado = arr2[1] + delimit[1]
                    total_cosechado = arr2[2] + delimit[2]
                    total_organico = arr2[3] + delimit[3]
                    arr_new = []
                    arr_new.append(t_temp)
                    arr_new.append(total_sembrado)
                    arr_new.append(total_cosechado)
                    arr_new.append(total_organico)
                    dir_delimiter[delimit[0]] = arr_new
                    # print arr_new
                    # print "arr_new"

        conn.commit()
        conn.close()
        data_list.append(dir_temp)
        data_list.append(data_fields)
        data_list.append(bear_results[0])
        # print bear_results[0]
        data_list.append(False)
        if len(data_delimiter) > 0:
            data_list.append(dir_delimiter)
            # print dir_delimiter
        else:
            data_list.append(False)
        data_list.append(nivel)
        data_list.append(header)
        data_list.append(edo)
        data_list.append(mun)
        data_list.append(ageb)
        data_list.append(ac)
        # print data_list
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return data_list


"""
Este metodo es para obtener la interseccion
de el bounding box con algunas capas
"""
def get_geoJson_by_layer_ac(bbox_coordinates, name_table):

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
        nam_tab = name_table.replace('"', '')
        coordinate = bbox_coordinates.replace('[', '').replace(']', '')
        query = "SELECT ST_AsGeoJSON(the_geom)::json FROM %s t WHERE ST_Intersects(ST_GeomFromText('POLYGON((%s))', 4326) , t.the_geom);" % (nam_tab,coordinate)
        # print query
        cur.execute(query)
        la_y = cur.fetchall()
        conn.commit()
        conn.close()
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return la_y

@login_required
def configure_tool_upload(request, mw_id, conf_id):
    try:
        arr_attribute = []
        # cov = ControlArea.objects.filter(conf=conf_id)
        cov = get_object_or_404(ConfigureObjectSOA, id=conf_id)
        if cov:
            layerid = get_object_or_404(LayerIds, id=cov.layer_mv.id)
            layer = Attribute.objects.filter(resource=layerid.layer.id)
            for lay in layer:
                arr_attribute.append(lay.attribute)
        update = False
        json_list = json.dumps(arr_attribute)
        if request.method == 'POST':
            state = request.POST.get('state', False)
            mun = request.POST.get('mun', False)
            ageb = request.POST.get('ageb', False)
            ac = request.POST.get('ac', False)
            coverages = request.POST.get('coverages', False)
            creation_date = request.POST.get('timestamp', False)
            if request.user.is_authenticated:
                user = request.user.id
                if cov:
                    obj = ControlArea.objects.filter(conf=cov.id)
                    if obj:
                        for oj in obj:
                            tool_form = ControlAreaAllForm({'coverages':coverages,'conf':conf_id, 'state':state, 'ageb':ageb,'mun':mun,'ac':ac,'user_sos':user, 'status':1, 'creation_date':creation_date},instance=oj)
                            if tool_form.is_valid():
                                tool_form.save()
                                # print "actualizo"
                                return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
                    else:
                        # print "nuevo"
                        tool_form = ControlAreaAllForm({'coverages':coverages,'conf':conf_id, 'state':state, 'ageb':ageb,'mun':mun,'ac':ac,'user_sos':user, 'status':1, 'creation_date':creation_date})
                        if tool_form.is_valid():
                            tool_form.save()
                            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
            else:
                return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
        else:
            tool_form = ControlAreaForm()
            if cov:
                obj = ControlArea.objects.filter(conf=cov.id)
                for o in obj:
                    # print o.coverages
                    tool_form = ControlAreaForm(request.POST or None, instance=o)
                    update = True
                    break

    except ObjectDoesNotExist:
            HttpResponseServerError("ObjectDoesNotExist ConfigureObjectSOA!")
    return render_to_response('ControlAreaFormUpload.html', {'form': tool_form, 'update':update, 'arr_attribute':json_list},
                              context_instance=RequestContext(request))

def getMultiKeyACFarm(request):
    if request.is_ajax():
        data_list = []
        keys = []
        try:
            query_data = json.loads(request.POST['query_data'])
            geometry = query_data['geometry']
            ids_lays = query_data['id_layerids']
            if ids_lays not in "None":
                layerids = get_object_or_404(LayerIds, id=ids_lays)
                if layerids:
                    data_crops = []
                    dir_surfaces = {}
                    configure_map = ConfigureObjectSOA.objects.get(layer_mv=layerids.id)
                    confi = ControlArea.objects.get(conf=configure_map.id)
                    keys = get_key_area(geometry, layerids.layer.name,confi)
                    data_crops = getInfoFarmAC(layerids.layer.name, confi, keys)
                    geoJsonFeature = get_geoJson_by_layer_ac(geometry,layerids.layer.name)
                    dir_surfaces = surface_social_generic(confi, keys)
                    data_list.append(data_crops)
                    data_list.append(geoJsonFeature)
                    data_list.append(dir_surfaces)
                    return HttpResponse(json.dumps(data_list), content_type='application/json')
        except ObjectDoesNotExist:
            print("No existe el objeto")
            return HttpResponse(json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")

def getMultiKeyACForest(request):
    if request.is_ajax():
        data_list = []
        keys = []
        try:
            query_data = json.loads(request.POST['query_data'])
            geometry = query_data['geometry']
            ids_lays = query_data['id_layerids']
            if ids_lays not in "None":
                layerids = get_object_or_404(LayerIds, id=ids_lays)
                if layerids:
                    data_crops = []
                    dir_surfaces = {}
                    configure_map = ConfigureObjectSOA.objects.get(layer_mv=layerids.id)
                    confi = ControlArea.objects.get(conf=configure_map.id)
                    keys = get_key_area(geometry, layerids.layer.name,confi)
                    data_crops = getInfoForestAC(layerids.layer.name, confi, keys)
                    geoJsonFeature = get_geoJson_by_layer_ac(geometry,layerids.layer.name)
                    dir_surfaces = surface_social_generic(confi, keys)
                    data_list.append(data_crops)
                    data_list.append(geoJsonFeature)
                    data_list.append(dir_surfaces)
                    return HttpResponse(json.dumps(data_list), content_type='application/json')
        except ObjectDoesNotExist:
            print("No existe el objeto")
            return HttpResponse(json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")

def surface_social_generic(confi, data):
    try:
        data_surface = []
        dir_temp_surface = {}
        data_scholarship = []
        dir_scholarship = {}
        data_economy = []
        dir_economy = {}
        data_economy_dependens = []
        data_services = []
        dir_services = {}
        data_list = []
        keys = ""
        keys_per_edo = ""
        header = False
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
        nivel = confi.coverages
        indice = 0
        if nivel in "statal":
            for d in data:
                indice += 1
                if indice == 1:
                    keys = "'"+d[0]+"'"
                    header = True
                else:
                    keys = keys + " and clvedo = '" +d[0]+ "'"
                    header = False
        elif nivel in "mun":
            for d in data:
                indice += 1
                # print indice
                if indice == 1:
                    keys = "'"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = " '"+d[0]+"'"
                    header = Truedata_forest_not_wood
                else:
                    keys = keys +" or clvmun = '"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
            # print keys
        elif nivel in "ageb":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                else:
                    keys = keys +" or id_ageb = '"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "ac":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[3]+"' and o.clvedo = '"+d[0]+"' and o.clvmun = '"+d[1]+"'"
                    header = True
                else:
                    keys = keys +" or o.areactrl = '"+d[3]+"' and o.clvedo = '"+d[0]+"' and o.clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and o.clvedo = '"+d[0]+"'"
                    header = False
        if nivel in "statal":
            # print "statal"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = %s;" % keys
        elif nivel in "mun":
            # print "municipiooooooooooooooooooooooooooooooooo"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvmun = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvmun = %s;" % keys
        elif nivel in "ageb":
            # print "ag"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where id_ageb = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where id_ageb = %s;" % keys
        elif nivel in "ac":
            query_surface = "select SUM(CAST(o.p0400005 AS float)) as pasto, "\
                + " SUM(CAST(o.p0410105 AS float)) as arenales, " \
                + " SUM(CAST(o.p0410205 AS float)) as ensalitrada, "\
                + " SUM(CAST(o.p0410405 AS float)) as erosionada, "\
                + " SUM(CAST(o.p0410605 AS float)) as cubierta, "\
                + " SUM(CAST(o.p0410705 AS float)) as contamiada, "\
                + " SUM(CAST(o.p0410806 AS float)) as otra, "\
                + " SUM(CAST(s.p0420105 AS float)) as selva, "\
                + " SUM(CAST(s.p0430105 AS float)) as bosque "\
                + " from trd_otras_superficies o "\
                + " inner join trd_superficie_bosque_selva s "\
                + " on o.areactrl = s.areactrl where o.areactrl = %s; " % keys
            query_scholarship = "select SUM(CAST(p1520101 AS float)) as scol,"\
                + " SUM(CAST(p1520201 AS float)) AS primaria, " \
                + " SUM(CAST(p1520301 AS float)) as secu, "\
                + " SUM(CAST(P1520501 AS float)) AS otro "\
                + " from trd_caracteristicas_sociodemograficas o "\
                + " where o.areactrl = %s; " % keys
            query_economy = "select SUM(CAST(p1430101 AS float)) as forestal,"\
                + " SUM(CAST(p1430201 AS float)) AS dinero, " \
                + " SUM(CAST(p1430301 AS float)) as apoyos, "\
                + " SUM(CAST(p1430402 AS float)) AS otro "\
                + " from trd_caracteristicas_sociodemograficas o "\
                + " where o.areactrl = %s; " % keys
            query_economy_dependens = "select SUM(CAST(p1530201 AS float)) "\
                + " as hyoung, SUM(CAST(p1530202 AS float)) AS myoung, " \
                + " SUM(CAST(p1530301 AS float)) as hold, "\
                + " SUM(CAST(p1530302 AS float)) AS mold "\
                + " from trd_caracteristicas_sociodemograficas o "\
                + " where o.areactrl = %s; " % keys
            query_services = "select SUM(CAST(p1540101 AS float)) as serv, "\
                + " SUM(CAST(p1540201 AS float)) AS drenaje, " \
                + " SUM(CAST(p1540301 AS float)) as fosa, "\
                + " SUM(CAST(p1540401 AS float)) as energia, "\
                + " SUM(CAST(p1540501 AS float)) as gas, "\
                + " SUM(CAST(p1540601 AS float)) as sanitario, "\
                + " SUM(CAST(P1540701 AS float)) as piso, "\
                + " SUM(CAST(p1540801 AS float)) AS otros "\
                + " from trd_caracteristicas_sociodemograficas o "\
                + " where o.areactrl = %s; " % keys
            # print query_economy_dependens

        cur.execute(query_surface)
        data_surface = cur.fetchone()

        cur.execute(query_scholarship)
        data_scholarship = cur.fetchone()

        cur.execute(query_economy)
        data_economy = cur.fetchone()

        cur.execute(query_economy_dependens)
        data_economy_dependens = cur.fetchone()

        cur.execute(query_services)
        data_services = cur.fetchone()

        conn.commit()
        conn.close()
        i = 0
        if len(data_scholarship) > 0:
            for corelation in data_scholarship:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_scholarship["Sin escolaridad"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_scholarship["Primaria"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_scholarship["Secundaria"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_scholarship["Bachillerato"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_scholarship["Otro"] = corelation

        i = 0
        if len(data_surface) > 0:
            for corelation in data_surface:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_surface["Pastos no cultivados, angostadero o enmontada"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_surface["Arenales o pedregales"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_surface["Ensalitrada"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_surface["Erosionada"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_surface["Cubierta por agua"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_surface["Contaminada"] = corelation
                elif(i == 7):
                    if(corelation != 0):
                        dir_temp_surface["Otra"] = corelation
                elif(i == 8):
                    if(corelation != 0):
                        dir_temp_surface["Selva"] = corelation
                elif(i == 9):
                    if(corelation != 0):
                        dir_temp_surface["Bosque"] = corelation

        i = 0
        if len(data_economy) > 0:
            for corelation in data_economy:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_economy["Agropecuaria o forestal"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_economy["Envío de dinero desde otro país"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_economy["Apoyos gubernamentales"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_economy["Otra actividad"] = corelation

        i = 0
        if len(data_services) > 0:
            for corelation in data_services:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_services["Agua entubada"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_services["Drenaje"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_services["Fosa séptica"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_services["Energía eléctrica"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_services["Gas de cocina"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_services["Sanitario u otro"] = corelation
                elif(i == 7):
                    if(corelation != 0):
                        dir_services["Piso firme"] = corelation
                elif(i == 8):
                    if(corelation != 0):
                        dir_services["Paredes de mampostería; tabique u otros"] = corelation

        data_list.append(dir_temp_surface)
        data_list.append(dir_scholarship)
        data_list.append(dir_economy)
        data_list.append(data_economy_dependens)
        data_list.append(dir_services)
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return data_list

def getInfoForestAC(name_table, confi, data):
    try:
        # print "************************************"
        data_list_array = []
        data_delimiter = []
        bear_results = 0
        data_list = []
        dir_temp = {}
        dir_delimiter = {}
        data_fields = []
        dir_temp_wood = {}
        data_wood = []
        data_wood_none = []
        dir_temp_wood_none = {}
        data_forest_technology = []
        dir_temp_forest_technology = {}
        data_forest_installation = []
        dir_temp_forest_installation = {}
        data_forest_destination = []
        dir_temp_forest_destination = {}
        data_forest_not_wood = []
        dir_temp_forest_not_wood = {}
        keys = ""
        keys_per_edo = ""
        header = False
        edo = ""
        mun = ""
        ageb = ""
        ac = ""
        # query_data = json.loads(request.POST['query_data'])
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
        nivel = confi.coverages
        # print nivel
        # print data
        indice = 0
        edo_max = ""
        if nivel in "statal":
            for d in data:
                indice +=1
                if indice == 1:
                    keys = "'"+d[0]+"'"
                    header = True
                    edo = d[0]
                else:
                    keys = keys +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "mun":
            for d in data:
                indice +=1
                # print indice
                if indice == 1:
                    keys = "'"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = " '"+d[0]+"'"
                    header = Truedata_forest_not_wood
                    edo = d[0]
                    mun = d[1]
                else:
                    keys = keys +" or clvmun = '"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
            # print keys
        elif nivel in "ageb":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                else:
                    keys = keys +" or id_ageb = '"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "ac":
            for d in data:
                indice +=1
                if indice == 1:
                    edo_max = d[0]
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                    ac = d[3]
                else:
                    keys = keys +" or areactrl = '"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        tabla_fields = "trd_cria_explotacion_tecnologia_bovinos"
        query_fields = "select campo, des_cam from variables where tabla like '"+tabla_fields+"';"
        cur.execute(query_fields)
        data_fields = cur.fetchall()

        if nivel in "statal":
            # print "statal"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = %s;" % keys
        elif nivel in "mun":
            # print "municipiooooooooooooooooooooooooooooooooo"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvmun = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvmun = %s;" % keys
        elif nivel in "ageb":
            # print "ag"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where id_ageb = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where id_ageb = %s;" % keys
        elif nivel in "ac":
            query_wood = "select SUM(CAST(o.p0560104 AS float)) as rollo, "\
            +" SUM(CAST(o.p0560204 AS float)) as aserrio, SUM(CAST(o.p0560304 AS float)) as posteria, SUM(CAST(o.p0560404 AS float)) as lena "\
            +" , SUM(CAST(o.p0560504 AS float)) as celulosa, SUM(CAST(o.p0560604 AS float)) as carbon "\
            +" from trd_produccion_maderable o where areactrl = %s; " % keys
            query_wood_non = 'select SUM(CAST(p0620106 AS float))/CASE ' \
                + ' (select SUM(CAST(t.p0620106 AS float)) ' \
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620106 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as lena, '\
                + ' SUM(CAST(p0620206 AS float))/CASE '\
                + ' (select SUM(CAST(t.p0620206 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620206 AS float))  '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as hongos, '\
                + ' SUM(CAST(p0620306 AS float))'\
                + '/CASE (select SUM(CAST(t.p0620306 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620306 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + 'where t.areactrl = a."AC_Tot") END as candelila,  '\
                + ' SUM(CAST(p0620406 AS float))/'\
                + 'CASE (select SUM(CAST(t.p0620406 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620406 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as lechuga, '\
                + '  SUM(CAST(p0620506 AS float))/'\
                + 'CASE (select SUM(CAST(t.p0620506 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0  '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620506 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as barbasco, '\
                + ' SUM(CAST(p0620606 AS float))/'\
                + 'CASE (select SUM(CAST(t.p0620606 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620606 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as resina, '\
                + ' SUM(CAST(P0620706 AS float))/'\
                + 'CASE (select SUM(CAST(t.P0620706 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.P0620706 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as tierra,   '\
                + ' SUM(CAST(P0620806 AS float))/'\
                + 'CASE (select SUM(CAST(t.P0620806 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.P0620806 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") END as hojas, '\
                + ' SUM(CAST(p0620906 AS float))/'\
                + 'CASE (select SUM(CAST(t.p0620906 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot") WHEN 0 '\
                + ' THEN 1 ELSE (select SUM(CAST(t.p0620906 AS float)) '\
                + ' from trd_recoleccion t, %s a ' % name_table \
                + ' where t.areactrl = a."AC_Tot")  END as semillas   '\
                + " from trd_recoleccion r where areactrl = %s; " % keys
            query_forest_technology = "select SUM(CAST(p0520105 AS FLOAT)) AS arboles, SUM(CAST(p0520205 AS FLOAT)) AS aclareo, "\
            +" (SUM(CAST(P0520305 AS FLOAT))+SUM(CAST(p0520405 AS FLOAT))) as herbi_quim_org, "\
            +" (SUM(CAST(P0520505 AS FLOAT))+SUM(CAST(p0520705 AS FLOAT))) as insect_quim_org, "\
            +" SUM(CAST(p0521306 AS FLOAT)) AS aclareo, SUM(CAST(p0520901 AS FLOAT)) AS insendios, "\
            +" SUM(CAST(p0521001 AS FLOAT)) AS plagas, SUM(CAST(p0521101 AS FLOAT)) AS quemna_ar, "\
            +" SUM(CAST(P0521201 AS FLOAT)) AS asistencia "\
            +" from trd_tecnologia_forestal r where areactrl = %s; " % keys
            query_forest_installation = "select SUM(CAST(p0530101 AS FLOAT)) AS aserradero, SUM(CAST(P0530201 AS FLOAT)) AS vivero, "\
            +" SUM(CAST(p0530301 AS FLOAT)) AS secadora, SUM(CAST(p0530400 AS FLOAT)) AS otra "\
            +" from trd_tecnologia_forestal r where areactrl = %s; " % keys
            query_forest_destination = "select SUM(CAST(p0580401 AS FLOAT)) AS coyote, SUM(CAST(p0580501 AS FLOAT)) AS vendido, "\
            +" SUM(CAST(p0580601 AS FLOAT)) AS otra, SUM(CAST(p0580702 AS FLOAT)) AS comprador, "\
            +" (SUM(CAST(p0580401 AS FLOAT))+SUM(CAST(p0580501 AS FLOAT))+SUM(CAST(p0580601 AS FLOAT))+SUM(CAST(p0580702 AS FLOAT))) as nacional "\
            +" , SUM(CAST(p0590001 AS FLOAT)) AS extra "\
            +" from trd_venta_forestal r where areactrl = %s; " % keys
            query_forest_not_wood = "select SUM(CAST(p0630101 AS FLOAT)) AS inter, SUM(CAST(p0630201 AS FLOAT)) AS comer, "\
            +" SUM(CAST(p0630301 AS FLOAT)) AS consu, SUM(CAST(p0630402 AS FLOAT)) AS compra, "\
            +" (SUM(CAST(p0630101 AS FLOAT))+SUM(CAST(p0630201 AS FLOAT))+SUM(CAST(p0630301 AS FLOAT))+SUM(CAST(p0630402 AS FLOAT))) as nacional "\
            +" , SUM(CAST(p0640001 AS FLOAT)) AS extra "\
            +" from trd_forestal_no_maderable r where areactrl = %s; " % keys

        cur.execute(query_wood)
        data_wood = cur.fetchone()

        cur.execute(query_wood_non)
        data_wood_none = cur.fetchone()

        cur.execute(query_forest_technology)
        data_forest_technology = cur.fetchone()

        cur.execute(query_forest_installation)
        data_forest_installation = cur.fetchone()

        cur.execute(query_forest_destination)
        data_forest_destination = cur.fetchone()

        cur.execute(query_forest_not_wood)
        data_forest_not_wood = cur.fetchone()

        conn.commit()
        conn.close()

        i = 0
        if len(data_wood) > 0:
            for corelation in data_wood:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_wood["A"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_wood["B"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_wood["C"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_wood["D"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_wood["E"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_wood["F"] = corelation

        i = 0
        if len(data_wood_none) > 0:
            for corelation in data_wood_none:
                i = i + 1
                if(i == 1):
                    if(corelation > 0.001):
                        dir_temp_wood_none["A"] = corelation
                elif(i == 2):
                    if(corelation > 0.001):
                        dir_temp_wood_none["B"] = corelation
                elif(i == 3):
                    if(corelation > 0.001):
                        dir_temp_wood_none["C"] = corelation
                elif(i == 4):
                    if(corelation > 0.001):
                        dir_temp_wood_none["D"] = corelation
                elif(i == 5):
                    if(corelation > 0.001):
                        dir_temp_wood_none["E"] = corelation
                elif(i == 6):
                    if(corelation > 0.001):
                        dir_temp_wood_none["F"] = corelation
                elif(i == 7):
                    if(corelation > 0.001):
                        dir_temp_wood_none["G"] = corelation
                elif(i == 8):
                    if(corelation > 0.001):
                        dir_temp_wood_none["H"] = corelation
                elif(i == 9):
                    if(corelation > 0.001):
                        dir_temp_wood_none["I"] = corelation

        i = 0
        if len(data_forest_technology) > 0:
            for corelation in data_forest_technology:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_forest_technology["Árboles para corte (HA)"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_forest_technology["Aclareo (HA)"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_forest_technology["Herbicidas orgánicos o químicos (HA)"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_forest_technology["Insecticidas orgánicos o químicos (HA)"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_forest_technology["Otra (HA)"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_forest_technology["Prevención o control de incendios (UP)"] = corelation
                elif(i == 7):
                    if(corelation != 0):
                        dir_temp_forest_technology["Control biológico de plagas"] = corelation
                elif(i == 8):
                    if(corelation != 0):
                        dir_temp_forest_technology["Quema controlada (UP)"] = corelation
                elif(i == 9):
                    if(corelation != 0):
                        dir_temp_forest_technology["Asistencia técnica (UP)"] = corelation

        i = 0
        if len(data_forest_installation) > 0:
            for corelation in data_forest_installation:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_forest_installation["Aserradero"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_forest_installation["Vivero forestal"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_forest_installation["Secadora de madera"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_forest_installation["Instalación forestal"] = corelation

        i = 0
        if len(data_forest_destination) > 0:
            for corelation in data_forest_destination:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_forest_destination["Intermediario"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_forest_destination["Aserradero"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_forest_destination["Otra industria"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_forest_destination["Otro comprador"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_forest_destination["Total Nacional"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_forest_destination["Extranjero"] = corelation

        i = 0
        if len(data_forest_not_wood) > 0:
            for corelation in data_forest_not_wood:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_forest_not_wood["Intermediario"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_forest_not_wood["Comercializadora"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_forest_not_wood["Consumidor directo"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_forest_not_wood["Otros compradores"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_forest_not_wood["Total Nacional"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_forest_not_wood["Extranjero"] = corelation

        data_list.append(data_list_array)
        data_list.append(data_fields)
        data_list.append(nivel)
        data_list.append(header)
        data_list.append(edo)
        data_list.append(mun)
        data_list.append(ageb)
        data_list.append(ac)
        data_list.append(dir_temp_wood)
        data_list.append(dir_temp_wood_none)
        data_list.append(dir_temp_forest_technology)
        data_list.append(dir_temp_forest_installation)
        data_list.append(dir_temp_forest_destination)
        data_list.append(dir_temp_forest_not_wood)
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return data_list

def getInfoFarmAC(name_table, confi, data):
    try:
        # print "************************************"
        data_list_array = []
        data_delimiter = []
        bear_results = 0
        data_list = []
        dir_temp = {}
        dir_delimiter = {}
        data_fields = []
        dir_temp_beef = {}
        dir_temp_pig = {}
        dir_temp_bird = {}
        dir_temp_distributions_other = {}
        data_beef = []
        data_pig = []
        data_bird = []
        data_distributions_other = []
        keys = ""
        keys_per_edo = ""
        header = False
        edo = ""
        mun = ""
        ageb = ""
        ac = ""
        # query_data = json.loads(request.POST['query_data'])
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
        nivel = confi.coverages
        # print nivel
        # print data
        indice = 0
        if nivel in "statal":
            for d in data:
                indice +=1
                if indice == 1:
                    keys = "'"+d[0]+"'"
                    header = True
                    edo = d[0]
                else:
                    keys = keys +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "mun":
            for d in data:
                indice +=1
                # print indice
                if indice == 1:
                    keys = "'"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = " '"+d[0]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                else:
                    keys = keys +" or clvmun = '"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
            # print keys
        elif nivel in "ageb":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                else:
                    keys = keys +" or id_ageb = '"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "ac":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                    ac = d[3]
                else:
                    keys = keys +" or areactrl = '"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        tabla_fields = "trd_cria_explotacion_tecnologia_bovinos"
        query_fields = "select campo, des_cam from variables where tabla like '"+tabla_fields+"';"
        cur.execute(query_fields)
        data_fields = cur.fetchall()
        if nivel in "statal":
            # print "statal"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = %s;" % keys
        elif nivel in "mun":
            # print "municipiooooooooooooooooooooooooooooooooo"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvmun = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvmun = %s;" % keys
        elif nivel in "ageb":
            # print "ag"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where id_ageb = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where id_ageb = %s;" % keys
        elif nivel in "ac":
            # query_edo = "select SUM(CAST(p0680501 AS float)) as cow_milk, SUM(CAST(p0680401 AS float)) as cow_eat , SUM(CAST(p0680601 AS float)) as cow_double, SUM(CAST(p0680501 AS float))+SUM(CAST(p0680401 AS float))+SUM(CAST(p0680601 AS float)) as total from trd_cria_explotacion_tecnologia_bovinos t where clvedo = %s;" % keys_per_edo
            # query_ac = "select SUM(CAST(p0680501 AS float)) as cow_milk, SUM(CAST(p0680401 AS float)) as cow_eat , SUM(CAST(p0680601 AS float)) as cow_double, SUM(CAST(p0680501 AS float))+SUM(CAST(p0680401 AS float))+SUM(CAST(p0680601 AS float)) as total from trd_cria_explotacion_tecnologia_bovinos t where areactrl = %s;" % keys
            # distreibutions
            query_beef = "select SUM(CAST(b.p0670101 AS float)) as reces_vacas, SUM(CAST(b.p0690101 AS float)) as litros "\
            +" from trd_cria_explotacion_tecnologia_bovinos b where areactrl = %s; " % keys
            query_pig = "select SUM(CAST(p.p0760101 AS float)) as cerdos "\
            +" from trd_cria_explotacion_tecnologia_porcinos p where areactrl = %s; " % keys
            query_bird = "select SUM(CAST(a.p0840101 AS float)) as aves, SUM(CAST(a.p0841204 AS float)) as huevos "\
            +" from trd_cria_explotacion_tecnologia_aves a where areactrl = %s; " % keys
            query_distributions_other = "select SUM(CAST(o.p0910101 AS float)) as borregos, "\
            +" SUM(CAST(o.p0950101 AS float)) as chivos, SUM(CAST(o.p0980201 AS float)) as colmenas, SUM(CAST(o.p0950501 AS float)) as litos_chivos "\
            +" from trd_cria_explotacion_otras o where areactrl = %s; " % keys
            # print query_bird
        # cur.execute(query_edo)
        # data_list_array = cur.fetchall()
        #
        # cur.execute(query_ac)
        # data_delimiter = cur.fetchall()

        cur.execute(query_beef)
        data_beef = cur.fetchone()

        cur.execute(query_pig)
        data_pig = cur.fetchone()

        cur.execute(query_bird)
        data_bird = cur.fetchone()

        cur.execute(query_distributions_other)
        data_distributions_other = cur.fetchone()

        conn.commit()
        conn.close()

        i = 0
        if len(data_beef) > 0:
            for corelation in data_beef:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_beef["Reses y vacas"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_beef["Litros diarios"] = corelation

        i = 0
        if len(data_pig) > 0:
            for corelation in data_pig:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_pig["Cerdos"] = corelation

        i = 0
        if len(data_bird) > 0:
            for corelation in data_bird:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_bird["Aves"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_bird["Huevo por día"] = corelation

        i = 0
        if len(data_distributions_other) > 0:
            for corelation in data_distributions_other:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_distributions_other["Borregos"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_distributions_other["Chivos"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_distributions_other["Colmenas"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_distributions_other["Litros diarios"] = corelation

        data_list.append(data_list_array)
        data_list.append(data_fields)
        data_list.append(nivel)
        data_list.append(header)
        data_list.append(edo)
        data_list.append(mun)
        data_list.append(ageb)
        data_list.append(ac)
        data_list.append(data_delimiter)
        data_list.append(data_beef)
        data_list.append(data_pig)
        data_list.append(data_bird)
        data_list.append(data_distributions_other)
        # print data_list
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return data_list

def getMultiKeyACCrops(request):
    if request.is_ajax():
        data_list = []
        keys = []
        try:
            query_data = json.loads(request.POST['query_data'])
            geometry = query_data['geometry']
            ids_lays = query_data['id_layerids']
            if ids_lays not in "None":
                layerids = get_object_or_404(LayerIds, id=ids_lays)
                if layerids:
                    data_crops = []
                    dir_surfaces = {}
                    configure_map = ConfigureObjectSOA.objects.get(layer_mv=layerids.id)
                    confi = ControlArea.objects.get(conf=configure_map.id)
                    keys = get_key_area(geometry, layerids.layer.name,confi)
                    data_crops = getInfoCropsAC(layerids.layer.name, confi, keys)
                    geoJsonFeature = get_geoJson_by_layer_ac(geometry,layerids.layer.name)
                    dir_surfaces = surface_social_generic(confi, keys)
                    data_list.append(data_crops)
                    data_list.append(geoJsonFeature)
                    data_list.append(dir_surfaces)
                    return HttpResponse(json.dumps(data_list), content_type='application/json')
        except ObjectDoesNotExist:
            print("No existe el objeto")
            return HttpResponse(json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")


def getInfoCropsAC(name_table, confi, data):
    try:
        # print "************************************"
        data_list_array = []
        data_percent = []
        data_list_array_oi = []
        data_percent_oi = []
        data_list_array_oi_cosecha = []
        data_percent_oi_cosecha = []
        data_list_array_perennes = []
        data_percent_perennes = []
        data_list_array_cosecha = []
        data_percent_cosecha = []
        data_list_array_perennes_cosecha = []
        data_percent_perennes_cosecha = []
        data_installations = []
        data_technology = []
        data_problematic = []
        data_destination = []
        bear_results = 0
        data_list = []
        dir_temp = {}
        dir_temp_correlation = {}
        dir_technology = {}
        dir_temp_instalations = {}
        dir_temp_problematic = {}
        dir_temp_destination = {}

        # dir_temp_instalations = {}
        dir_temp_oi = {}
        dir_temp_pn = {}
        dir_temp_cosecha = {}
        dir_temp_oi_cosecha = {}
        dir_temp_pn_cos = {}
        dir_delimiter = {}
        data_fields = []
        keys = ""
        keys_per_edo = ""
        header = False
        edo = ""
        mun = ""
        ageb = ""
        ac = ""
        # query_data = json.loads(request.POST['query_data'])
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
        nivel = confi.coverages
        # print nivel
        # print data
        indice = 0
        if nivel in "statal":
            for d in data:
                indice +=1
                if indice == 1:
                    keys = "'"+d[0]+"'"
                    header = True
                    edo = d[0]
                else:
                    keys = keys +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "mun":
            for d in data:
                indice +=1
                # print indice
                if indice == 1:
                    keys = "'"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = " '"+d[0]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                else:
                    keys = keys +" or clvmun = '"+d[1]+"' and clvedo = '"+d[0]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
            # print keys
        elif nivel in "ageb":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                else:
                    keys = keys +" or id_ageb = '"+d[2]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        elif nivel in "ac":
            for d in data:
                indice +=1
                if indice == 1:
                    keys_per_edo = " '"+d[0]+"'"
                    keys = "'"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    header = True
                    edo = d[0]
                    mun = d[1]
                    ageb = d[2]
                    ac = d[3]
                else:
                    keys = keys +" or areactrl = '"+d[3]+"' and clvedo = '"+d[0]+"' and clvmun = '"+d[1]+"'"
                    keys_per_edo = keys_per_edo +" and clvedo = '"+d[0]+"'"
                    header = False
        tabla_fields = "trd_cria_explotacion_tecnologia_bovinos"
        query_fields = "select campo, des_cam from variables where tabla like '"+tabla_fields+"';"
        cur.execute(query_fields)
        data_fields = cur.fetchall()
        if nivel in "statal":
            # print "statal"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvedo = %s;" % keys
        elif nivel in "mun":
            # print "municipiooooooooooooooooooooooooooooooooo"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvmun = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where clvmun = %s;" % keys
        elif nivel in "ageb":
            # print "ag"
            query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where clvedo = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys_per_edo
            delimited_query = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as cosechado, SUM(CAST(p008n10 AS float)) as sembrado from trd_agricultura_pv t where id_ageb = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p008n06 AS float))*100) as rendimiento from trd_agricultura_pv t where id_ageb = %s;" % keys
        elif nivel in "ac":
            percentage_query_sembrado = "select SUM(CAST(p008n06 AS float))*80/100 as porcentaje from trd_agricultura_pv t where areactrl = %s;" % keys
            query_sembrado = "select p008n02 as cultivo, SUM(CAST(p008n06 AS float)) as sembrado, SUM(CAST(p008n06 AS float))*80/(select SUM(CAST(p008n06 AS float))*80/100 as porcentaje "\
            +" from trd_agricultura_pv t where areactrl = %s) as porcentaje " % keys \
            +" , SUM(CAST(p008n10 AS float)) as cosechado, SUM(CAST(ups_cult AS float)) as unidades, SUM(CAST(p008n14 AS float)) as volumen "\
            +" from trd_agricultura_pv t where areactrl = %s group by p008n02 order by SUM(CAST(p008n06 AS float)) desc;" % keys
            percentage_query_cosecha = "select SUM(CAST(p008n14 AS float))*80/100 as porcentaje from trd_agricultura_pv t where areactrl = %s;" % keys
            query_cosecha = "select p008n02 as cultivo, SUM(CAST(p008n14 AS float)) as cosechado, SUM(CAST(p008n14 AS float))*80/(select SUM(CAST(p008n14 AS float))*80/100 as porcentaje "\
            +" from trd_agricultura_pv t where areactrl = %s) as porcentaje from trd_agricultura_pv t where areactrl = %s group by p008n02 order by SUM(CAST(p008n14 AS float)) desc;" % (keys, keys)
            percentage_query_oi = "select SUM(CAST(p010n06 AS float))*80/100 as porcentaje from trd_agricultura_oi t where areactrl = %s;" % keys
            query_oi = "select p0100102 as cultivo, SUM(CAST(p010n06 AS float)) as sembrado "\
            +" from trd_agricultura_oi t where areactrl = %s group by p0100102 order by SUM(CAST(p010n06 AS float)) desc;" % keys
            percentage_query_oi_cosecha = "select SUM(CAST(p010n10 AS float))*80/100 as porcentaje from trd_agricultura_oi t where areactrl = %s;" % keys
            query_oi_cosecha = "select p0100102 as cultivo, SUM(CAST(p010n10 AS float)) as cosechado "\
            +" from trd_agricultura_oi t where areactrl = %s group by p0100102 order by SUM(CAST(p010n10 AS float)) desc;" % keys
            percentage_query_pernnes = "select SUM(CAST(p012n06 AS float))*80/100 as porcentaje "\
            +" from trd_agricultura_perennes t where areactrl = %s;" % keys
            query_pernnes = "select nom_cult as cultivo, SUM(CAST(p012n06 AS float)) as sembrado "\
            +" from trd_agricultura_perennes t where areactrl = %s group by nom_cult order by SUM(CAST(p012n06 AS float)) desc;" % keys
            percentage_query_pernnes_cos = "select SUM(CAST(p012n10 AS float))*80/100 as porcentaje "\
            +" from trd_agricultura_perennes t where areactrl = %s;" % keys
            query_pernnes_cos = "select nom_cult as cultivo, SUM(CAST(p012n10 AS float)) as cosechado "\
            +" from trd_agricultura_perennes t where areactrl = %s group by nom_cult order by SUM(CAST(p012n10 AS float)) desc;" % keys
            query_installations = "select sum(p0240101) as cafe_cacao, sum(p0240201) as desfibradora, sum(p0240301) as deshidratadora, sum(p0240401) as frutas_verduras "\
            +" , sum(p0240501) as seleccionadora, sum(p0240602) as instalacion, sum(p0250101) as vivero, sum(P0280101) as invernadero"\
            +" from trd_construcciones_instalaciones t "\
            +" where areactrl = %s and (p0240101 != 0 or p0240201 != 0 or p0240301 != 0 or p0240401 != 0 or p0240501 != 0 or p0240602 != 0 or p0250101 != 0 or P0280101 != 0); " % keys
            query_technology = "select SUM(CAST(p0230105 AS float)) as fertilizante, SUM(CAST(p0230205 AS float)) as modificada "\
            +" , SUM(CAST(p0230301 AS float)) as transgenica, SUM(CAST(p0230405 AS float)) as abonos"\
            +" , (SUM(CAST(p0230505 AS float))+SUM(CAST(p0230605 AS float))) as quimicos_organicos, (SUM(CAST(p0230705 AS float))+SUM(CAST(p0230805 AS float))) as qui_or "\
            +" , SUM(CAST(p0231305 AS float)) as quemas "\
            +" from trd_tecnologia_agricola t where areactrl = %s; " % keys
            query_problematic = "select SUM(CAST(p1390101 AS float)) as acc_credit, SUM(CAST(p1390201 AS float)) as perdidap "\
            +" , SUM(CAST(p1390301 AS float)) as siniestros, SUM(CAST(p1390401 AS float)) as dificultad "\
            +" , SUM(CAST(p1390501 AS float)) as org, SUM(CAST(p1390601 AS float)) as infra "\
            +" , SUM(CAST(p1390701 AS float)) as costos, SUM(CAST(p1390801 AS float)) as capacitac "\
            +" , SUM(CAST(p1390901 AS float)) as tierra, SUM(CAST(p1391001 AS float)) as doct "\
            +" , SUM(CAST(p1391102 AS float)) as otros  "\
            +" from trd_actividad_problematica_principal t where areactrl = %s; " % keys
            query_destination = "select SUM(CAST(p0350201 AS float)) as mayorista, SUM(CAST(p0350301 AS float)) as cadena "\
            +" , SUM(CAST(p0350401 AS float)) as empacadora ,SUM(CAST(p0350502 AS float)) as otros "\
            +" ,SUM(CAST(p0350101 AS float)) as intermediario, SUM(CAST(p0360001 AS float)) as extranjeto "\
            +" , (SUM(CAST(p0350401 AS float))+SUM(CAST(p0350201 AS float))+SUM(CAST(p0350301 AS float))+SUM(CAST(p0350502 AS float))+SUM(CAST(p0350101 AS float))) as suma_nacional "\
            +" from trd_destino_prod_agricola t where areactrl = %s; " % keys

            # query_beef = "select SUM(CAST(b.p0670101 AS float)) as reces_vacas, SUM(CAST(b.p0690101 AS float)) as litros "\
            # +" from trd_cria_explotacion_tecnologia_bovinos b where areactrl = %s; " % keys

            # bear_query = "select (SUM(CAST(p008n10 AS float))/SUM(CAST(p012n10 AS float))*100) as rendimiento from trd_agricultu/ra_pv t where areactrl = %s;" % keys
            # print query_destination
        cur.execute(query_sembrado)
        data_list_array = cur.fetchall()
        cur.execute(percentage_query_sembrado)
        data_percent = cur.fetchone()
        cur.execute(query_oi)
        data_list_array_oi = cur.fetchall()
        cur.execute(percentage_query_oi)
        data_percent_oi = cur.fetchone()
        cur.execute(query_pernnes)
        data_list_array_perennes = cur.fetchall()
        cur.execute(percentage_query_pernnes)
        data_percent_perennes = cur.fetchone()

        cur.execute(query_cosecha)
        data_list_array_cosecha = cur.fetchall()
        cur.execute(percentage_query_cosecha)
        data_percent_cosecha = cur.fetchone()

        cur.execute(query_oi_cosecha)
        data_list_array_oi_cosecha = cur.fetchall()
        cur.execute(percentage_query_oi_cosecha)
        data_percent_oi_cosecha = cur.fetchone()

        cur.execute(query_pernnes_cos)
        data_list_array_perennes_cosecha = cur.fetchall()
        cur.execute(percentage_query_pernnes_cos)
        data_percent_perennes_cosecha = cur.fetchone()

        cur.execute(query_installations)
        data_installations = cur.fetchone()

        cur.execute(query_technology)
        data_technology = cur.fetchone()

        cur.execute(query_problematic)
        data_problematic = cur.fetchone()

        cur.execute(query_destination)
        data_destination = cur.fetchone()

        num_corre = 0
        others_crops_corre = 0

        i = 0
        if len(data_technology) > 0:
            for corelation in data_technology:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_instalations["Beneficiadora de café/cacao"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_instalations["Desfibradora"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_instalations["Deshidratadora"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_instalations["Empacadora frutas/verduras"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_instalations["Seleccionadora"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_instalations["Otra"] = corelation
                elif(i == 7):
                    if(corelation != 0):
                        dir_temp_instalations["Vivero"] = corelation
                elif(i == 8):
                    if(corelation != 0):
                        dir_temp_instalations["Invernadero"] = corelation

        i = 0
        if len(data_problematic) > 0:
            for corelation in data_problematic:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_problematic["Sin acceso a crédito"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_problematic["Pérdida de fertilidad del suelo"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_problematic["Siniestros"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_problematic["Dificultad para la comercialización"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_problematic["Organización poco apropiada"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_problematic["Infraestructura insuficiente"] = corelation
                elif(i == 7):
                    if(corelation != 0):
                        dir_temp_problematic["Altos costos de insumos y servicio"] = corelation
                elif(i == 8):
                    if(corelation != 0):
                        dir_temp_problematic["Falta de capacitación y asistencia técnica"] = corelation
                elif(i == 9):
                    if(corelation != 0):
                        dir_temp_problematic["Litigio por la tierra"] = corelation
                elif(i == 10):
                    if(corelation != 0):
                        dir_temp_problematic["Falta de documentación que acredite la posesión de la tierra"] = corelation
                elif(i == 11):
                    if(corelation != 0):
                        dir_temp_problematic["Otros"] = corelation

        i = 0
        if len(data_destination) > 0:
            for corelation in data_destination:
                i = i + 1
                if(i == 1):
                    if(corelation != 0):
                        dir_temp_destination["Mayorista"] = corelation
                elif(i == 2):
                    if(corelation != 0):
                        dir_temp_destination["Cadena comercial"] = corelation
                elif(i == 3):
                    if(corelation != 0):
                        dir_temp_destination["Empacadora/Agroindustria"] = corelation
                elif(i == 4):
                    if(corelation != 0):
                        dir_temp_destination["Otros compradores"] = corelation
                elif(i == 5):
                    if(corelation != 0):
                        dir_temp_destination["Intermediario"] = corelation
                elif(i == 6):
                    if(corelation != 0):
                        dir_temp_destination["Extranjero"] = corelation
                elif(i == 7):
                    if(corelation != 0):
                        dir_temp_destination["Total Nacional"] = corelation


        if len(data_list_array) > 0:
            for corelation in data_list_array:
                if dir_temp_correlation.has_key(corelation[0])is not True:
                    percent = data_percent[0]
                    num_corre = num_corre + 1
                    if(corelation[2] > 10):
                        dir_temp_correlation[corelation[0]] = corelation
                    else:
                        if(len(dir_temp_correlation) > 0):
                            others_crops_corre = others_crops_corre + corelation[1]
                        else:
                            dir_temp_correlation[corelation[0]] = corelation

        crop_temp_corre = []
        crop_temp_corre.append("OTROS CULTIVOS")
        crop_temp_corre.append(others_crops_corre)
        dir_temp_correlation["OTROS CULTIVOS"] = crop_temp_corre

        num = 0
        others_crops = 0

        if len(data_list_array) > 0:
            for totales in data_list_array:
                if dir_temp.has_key(totales[0])is not True:
                    percent = data_percent[0]
                    num = num + 1
                    if(totales[2] > 10):
                        dir_temp[totales[0]] = totales
                    else:
                        if(len(dir_temp) > 0):
                            others_crops = others_crops + totales[1]
                        else:
                            dir_temp[totales[0]] = totales

        crop_temp = []
        crop_temp.append("OTROS CULTIVOS")
        crop_temp.append(others_crops)
        dir_temp["OTROS CULTIVOS"] = crop_temp

        num_oi = 0
        others_crops_oi = 0

        if len(data_list_array_oi) > 0:
            for totales in data_list_array_oi:
                if dir_temp_oi.has_key(totales[0])is not True:
                    percent = data_percent_oi[0]
                    num_oi = num_oi + totales[1]
                    if(num_oi <= 3):
                        sha = []
                        sha.append(totales[0])
                        sha.append(totales[1])
                        dir_temp_oi[totales[0]] = sha
                    else:
                        if(len(dir_temp_oi) > 0):
                            others_crops_oi = others_crops_oi + totales[1]
                        else:
                            sha = []
                            sha.append(totales[0])
                            sha.append(totales[1])
                            dir_temp_oi[totales[0]] = sha

        crop_temp_oi = []
        # if others_crops_oi != 0:
        crop_temp_oi.append("OTROS CULTIVOS")
        crop_temp_oi.append(others_crops_oi)
        dir_temp_oi["OTROS CULTIVOS"] = crop_temp_oi
        # print others_crops_oi
        # print "others_crops_oi"

        num_oi_cos = 0
        others_crops_oi_cos = 0

        if len(data_list_array_oi_cosecha) > 0:
            for totales in data_list_array_oi_cosecha:
                if dir_temp_oi_cosecha.has_key(totales[0])is not True:
                    percent = data_percent_oi_cosecha[0]
                    num_oi_cos = num_oi_cos + totales[1]
                    if(num_oi_cos <= 3):
                        sha = []
                        sha.append(totales[0])
                        sha.append(totales[1])
                        dir_temp_oi_cosecha[totales[0]] = sha
                    else:
                        if(len(dir_temp_oi_cosecha) > 0):
                            others_crops_oi_cos = others_crops_oi_cos + totales[1]
                        else:
                            sha = []
                            sha.append(totales[0])
                            sha.append(totales[1])
                            dir_temp_oi_cosecha[totales[0]] = sha


        crop_temp_oi_cos = []
        crop_temp_oi_cos.append("OTROS CULTIVOS")
        crop_temp_oi_cos.append(others_crops_oi_cos)
        dir_temp_oi_cosecha["OTROS CULTIVOS"] = crop_temp_oi_cos

        num_pn = 0
        others_crops_pn = 0

        if len(data_list_array_perennes) > 0:
            for totales in data_list_array_perennes:
                if dir_temp_pn.has_key(totales[0])is not True:
                    percent = data_percent_perennes[0]
                    num_pn = num_pn + totales[1]
                    if(num_pn <= percent):
                        sha = []
                        sha.append(totales[0])
                        sha.append(totales[1])
                        dir_temp_pn[totales[0]] = sha
                    else:
                        if(len(dir_temp_pn) > 0):
                            others_crops_pn = others_crops_pn + totales[1]
                        else:
                            sha = []
                            sha.append(totales[0])
                            sha.append(totales[1])
                            dir_temp_pn[totales[0]] = sha

        crop_temp_pn = []
        crop_temp_pn.append("OTROS CULTIVOS")
        crop_temp_pn.append(others_crops_pn)
        dir_temp_pn["OTROS CULTIVOS"] = crop_temp_pn

        num_pn_cos = 0
        others_crops_pn_cos = 0

        if len(data_list_array_perennes_cosecha) > 0:
            for totales in data_list_array_perennes_cosecha:
                if dir_temp_pn_cos.has_key(totales[0])is not True:
                    percent = data_percent_perennes_cosecha[0]
                    num_pn_cos = num_pn_cos + totales[1]
                    if(num_pn_cos <= percent):
                        sha = []
                        sha.append(totales[0])
                        sha.append(totales[1])
                        dir_temp_pn_cos[totales[0]] = sha
                    else:
                        if(len(dir_temp_pn_cos) > 0):
                            others_crops_pn_cos = others_crops_pn_cos + totales[1]
                        else:
                            sha = []
                            sha.append(totales[0])
                            sha.append(totales[1])
                            dir_temp_pn_cos[totales[0]] = sha

        crop_temp_pn_cos = []
        crop_temp_pn_cos.append("OTROS CULTIVOS")
        crop_temp_pn_cos.append(others_crops_pn_cos)
        dir_temp_pn_cos["OTROS CULTIVOS"] = crop_temp_pn_cos

        num_cos = 0
        others_crops_cos = 0

        if len(data_list_array_cosecha) > 0:
            for totales in data_list_array_cosecha:
                if dir_temp_cosecha.has_key(totales[0])is not True:
                    percent = data_percent_cosecha[0]
                    num_cos = num_cos + totales[1]
                    if(num_cos <= percent):
                        sha = []
                        sha.append(totales[0])
                        sha.append(totales[1])
                        dir_temp_cosecha[totales[0]] = sha
                    else:
                        if(len(dir_temp_cosecha) > 0):
                            others_crops_cos = others_crops_cos + totales[1]
                        else:
                            sha = []
                            sha.append(totales[0])
                            sha.append(totales[1])
                            dir_temp_cosecha[totales[0]] = sha

        crop_temp_cos = []
        crop_temp_cos.append("OTROS CULTIVOS-PV")
        crop_temp_cos.append(others_crops_cos)
        dir_temp_cosecha["OTROS CULTIVOS-PV"] = crop_temp_cos

        # print "data_destination"
        # print data_destination

        conn.commit()
        conn.close()
        data_list.append(dir_temp)
        data_list.append(data_fields)
        data_list.append(data_percent)
        data_list.append(nivel)
        data_list.append(header)
        data_list.append(edo)
        data_list.append(mun)
        data_list.append(ageb)
        data_list.append(ac)
        data_list.append(dir_temp_oi)
        data_list.append(dir_temp_pn)
        data_list.append(dir_temp_cosecha)
        data_list.append(dir_temp_oi_cosecha)
        data_list.append(dir_temp_pn_cos)
        data_list.append(data_installations)
        # dir_temp_instalations
        data_list.append(dir_temp_correlation)
        data_list.append(dir_temp_instalations)
        # data_technology
        data_list.append(dir_temp_problematic)
        # data_problematic
        data_list.append(dir_temp_destination)
        # data_destination

        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return data_list
