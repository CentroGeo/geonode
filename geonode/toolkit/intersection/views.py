# -*- encoding: utf-8 -*-
import json
import psycopg2

from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

from geonode.maps.models import Map
from geonode.geoserver.helpers import ogc_server_settings

la_y = []

def get_bbox_tool(request):

    if request.is_ajax():
        try:
            number_layers = 0
            shapes = []
            shape_base = []
            result_inner = []
            bbox = request.POST.get('bbox', "None")
            layers = request.POST.get('layers', "None")
            layer_base = request.POST.get('layer_base', "None")
            bbox_coordinates =bbox.replace("[","").replace("]","")
            layer_without_c = layers.replace("[","").replace("]","")
            layer_base_without_c = layer_base.replace("[","").replace("]","")
            layers_name = layer_without_c.split(",")
            #si no hay layer base significa que solo v a contar
            if "None" in layer_base:
                for name_t in layers_name:
                    shapes.append(get_intersection_bbox_tool(bbox_coordinates, name_t, "count"))
            else:
                #Si hay layer base vamos hacer analisis
                for name_t in layers_name:
                    shapes = get_intersection_base_bbox_layer_tool(layer_base_without_c, name_t, result_inner, bbox_coordinates)
        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse( json.dumps( list(shapes)), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

"""
Este metodo es para obtener la interseccion de el bounding box con algunas capas
"""
def get_intersection_bbox_tool(bbox_coordinates, name_table, count):

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
        # conn = psycopg2.connect("dbname='idegeo_imports' user='idegeo' host='localhost' password='idegeo'")
        cur = conn.cursor()
        nam_tab = name_table.replace('"','')
        if count  == "count":
            query = 'SELECT ST_GeometryType(the_geom) FROM "'+nam_tab+'" WHERE "'+nam_tab+'".the_geom && ST_MakeEnvelope('+bbox_coordinates+');'
        else:
            query = 'SELECT ST_AsText(the_geom) FROM "'+nam_tab+'" WHERE "'+nam_tab+'".the_geom && ST_MakeEnvelope('+bbox_coordinates+');'

        cur.execute(query)
        # print cur.fetchall()
        la_y=[nam_tab]
        la_y.append(cur.fetchall())
        conn.commit()
        conn.close()
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return la_y


"""
Este metodo es el ajax para mandar a llamar a get_geomtry_type_tool(layer_name_table, array[])
"""
def search_base_polygons_tool(request):
    if request.is_ajax():
        try:
            shape_base = []
            shape_a = []
            shape_c = []
            # shape_title = []
            # shape_title_base = []
            # shape_title_markers = []
            shape = []
            layer_base = request.POST.get('layers_base', "None")
            # print layer_base
            # print "layer_base"
            layer_base_without_c = layer_base.replace("[","").replace("]","")
            layers_name = layer_base_without_c.split(",")
            if "None" not in layer_base:
                for name_t in layers_name:
                    shape.append(get_geomtry_type_tool(name_t, shape, shape_a, shape_c))# , shape_title, shape_title_base, shape_title_markers
            shape_base.append(shape_a)
            shape_base.append(shape_c)
            shape_base.append(shape)
            # shape_base.append(shape_title)
            # shape_base.append(shape_title_base)
            # shape_base.append(shape_title_markers)
            # print shape_base
        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse( json.dumps( list(shape_base), shape), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")
"""
Este metodo es para saber que tipo de geometria tiene una tabla, tiene dos parametros, el nombre de la tabla y un arreglo
Retorna el mismo arreglo con el tipo de geometria, en este caso solo nos interesa los multipoligonos
"""
def get_geomtry_type_tool(layer_name, shape, shape_a, shape_c):# , shape_title, shape_title_base, shape_title_markers
    try:
        # conn = psycopg2.connect("dbname='idegeo_imports' user='idegeo' host='localhost' password='idegeo'")
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
        query = 'SELECT ST_GeometryType(the_geom) FROM '+layer_name+' limit 1;'
        cur.execute(query)
        empty_geo = cur.fetchone()

        # name_l = layer_name.replace('"','')
        # print layer_name
        # lay = Layer.objects.filter(name = name_l)
        # print lay
        # if lay[0].id:
        #     title_layer = lay[0].title
        #     print "set"
        #     print title_layer

        if "ST_MultiPolygon" in empty_geo[0]:
            shape_a.append(layer_name)
            # shape_title_base.append(title_layer)

        else:
            shape_c.append(layer_name)
        #     shape_title_markers.append(title_layer)
        # shape_title.append(title_layer)

        conn.commit()
        conn.close()
        print("Records created successfully");
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return query

"""
Este metodo es para obtener la interseccion de una capa base con varias capas y su bonundingbox
"""
def get_intersection_base_bbox_layer_tool(base_layer, layer_name_table, la_y, bbox):
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
        q_SRID_base = 'SELECT ST_SRID(base.the_geom)FROM '+base_layer+' as base limit 1;'
        cur.execute(q_SRID_base)
        srid_b = cur.fetchone()
        # print srid_b[0]
        if srid_b[0] == 0:
            base_change_srid = base_layer.replace('"','')
            up_SRID = "select UpdateGeometrySRID('"+base_change_srid+"', 'the_geom', 4326);"
            cur.execute(up_SRID)
            # print "srid babse update 4326"

        q_SRID_layer = 'SELECT ST_SRID(base.the_geom)FROM '+layer_name_table+' as base limit 1;'
        # print q_SRID_layer
        cur.execute(q_SRID_layer)
        srid_l = cur.fetchone()
        if srid_l[0] == 0:
            layer_change_srid = layer_name_table.replace('"','')
            up_SRID = "select UpdateGeometrySRID('"+layer_change_srid+"', 'the_geom', 4326);"
            # print up_SRID
            cur.execute(up_SRID)
            # print "srid layer update 4326"

        query = 'SELECT DISTINCT ST_AsText(layer.the_geom) FROM '+base_layer+' as base, '+layer_name_table+' as layer WHERE ST_Intersects(base.the_geom,layer.the_geom) and layer.the_geom && ST_MakeEnvelope('+bbox+');'
        # print query
        # print "ba c"
        cur.execute(query)
        other = cur.fetchall()
        other_name = layer_name_table.replace('"','')
        for number_layers in other:
            la_y.append(other_name)
        conn.commit()
        conn.close()
        print("Records created successfully");
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return la_y

"""
Este metodo es el ajax para traer el geoJson de una capa
"""
def get_geoJson_by_name_layer_tool(request):
    if request.is_ajax():
        try:
            number_layers = 0
            shapes = []
            shape_base = []
            result_inner = []
            bbox = request.POST.get('bbox', "None")
            layers = request.POST.get('layers', "None")
            layer_base = request.POST.get('layer_base', "None")
            bbox_coordinates =bbox.replace("[","").replace("]","")
            layer_without_c = layers.replace("[","").replace("]","")
            layer_base_without_c = layer_base.replace("[","").replace("]","")
            layers_name = layer_without_c.split(",")
            #si no hay layer base significa que solo v a contar
            if "None" in layer_base:
                for name_t in layers_name:
                    shapes = get_geoJson_intersection_bbox_by_layer_tool(bbox_coordinates, name_t, "count")
            else:
                #Si hay layer base vamos hacer analisis
                for name_t in layers_name:
                    shapes = get_Geojson_intersection_base_bbox_layer_tool(layer_base_without_c, name_t, result_inner, bbox_coordinates, False)

        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse( json.dumps(shapes), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

"""
Este metodo es para obtener la interseccion de el bounding box con algunas capas
"""
def get_geoJson_intersection_bbox_by_layer_tool(bbox_coordinates, name_table, count):
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
        nam_tab = name_table.replace('"','')
        if count  == "count":
            query = 'SELECT ST_AsGeoJSON("'+nam_tab+'".the_geom)::json As geometry FROM "'+nam_tab+'" WHERE "'+nam_tab+'".the_geom && ST_MakeEnvelope('+bbox_coordinates+');'
            # print query
        else:
            query = 'SELECT ST_AsText(the_geom) FROM "'+nam_tab+'" WHERE "'+nam_tab+'".the_geom && ST_MakeEnvelope('+bbox_coordinates+');'
        cur.execute(query)
        la_y = cur.fetchall()
        # print la_y
        conn.commit()
        conn.close()
        print("Records created successfully");
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return la_y

"""
Este metodo es para obtener la interseccion geoJson de una capa base con varias capas y su bonundingbox
"""
def get_Geojson_intersection_base_bbox_layer_tool(base_layer, layer_name_table, la_y, bbox, get_only_name):
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
        if get_only_name:
            query = 'SELECT DISTINCT ST_AsText(layer.the_geom) FROM '+base_layer+' as base, '+layer_name_table+' as layer WHERE ST_Intersects(base.the_geom,layer.the_geom) and layer.the_geom && ST_MakeEnvelope('+bbox+');'
        else:
            name_tab = layer_name_table.replace('"','')
            query = 'SELECT ST_AsGeoJSON(layer.the_geom)::json FROM '+base_layer+' as base, '+layer_name_table+' as layer WHERE ST_Intersects(base.the_geom,layer.the_geom) and layer.the_geom && ST_MakeEnvelope('+bbox+');'
        # print query
        # print "#geo"
        cur.execute(query)
        if get_only_name:
            other = cur.fetchall()
            other_name = layer_name_table.replace('"','')
            for number_layers in other:
                la_y.append(other_name)
        else:
            la_y = cur.fetchall()

        conn.commit()
        conn.close()
        print("Records created successfully");
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return la_y
"""
Método para obtener la constante de las graficas que tiene un mapa
"""
def get_constants_tools_map_tool(request):
    if request.is_ajax():
        try:
            list_map = []
            id_map = request.POST.get('mapid', "None")
            if id_map not in "None":
                map_c = get_object_or_404(Map, pk=id_map)
                for char in map_c.charting_tools.all():
                    list_map.append(str(char.constant))

        except ObjectDoesNotExist:
            HttpResponseServerError("ObjectDoesNotExist Map!")
        return HttpResponse(json.dumps(list_map), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")
