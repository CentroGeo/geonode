# -*- encoding: utf-8 -*-
import json
import psycopg2

from django.http import HttpResponse
from django.http import HttpResponseServerError
from django.shortcuts import get_object_or_404
from geonode.geoserver.helpers import ogc_server_settings

from geonode.mviewer.models import LayerIds

def hotspot_tool(request):
    if request.is_ajax():
        try:
            shapes = []
            layers_shapes = []
            query_data = json.loads(request.POST['query_data'])
            ids_lays = query_data['id_layerids']
            if ids_lays not in "None":
                layerids = get_object_or_404(LayerIds, id=ids_lays)
                if layerids:
                    nam_tab = layerids.layer.name.replace('"', '')
                    desc_tab = layerids.layer.title
                    if get_geomtry_type_tool_point(nam_tab):
                        shapes = getGeojsonGeometryHot(nam_tab)
                        layers_shapes.append(layerids.id)
                        layers_shapes.append(desc_tab)
                        layers_shapes.append(shapes)
        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse(json.dumps(list(layers_shapes)), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

"""
Este metodo es para obtener la geometria de una capa solo con el nombre de la capa
"""
def getGeojsonGeometryHot(layer):

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
        query = "SELECT ST_AsGeoJSON(the_geom)::json FROM %s;" % layer
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

"""
Este metodo es para saber que tipo de geometria tiene una tabla, tiene dos parametros, el nombre de la tabla y un arreglo
Retorna el mismo arreglo con el tipo de geometria, en este caso solo nos interesa los puntos
"""
def get_geomtry_type_tool_point(layer_name):
    try:
        isPoint = False
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
        if "ST_Point" in empty_geo[0]:
            isPoint = True
        conn.commit()
        conn.close()
        print("Records created successfully")
    except psycopg2.DatabaseError as e:
        print("I am unable to connect to the database")
        print('Error %s' % e)
        conn.close()
    return isPoint
