# -*- coding: utf-8 -*-
"""
Created on Wed Jan 10 15:22:22 2018

@author: kry
"""
import pandas as pd
import geopandas as gpd
import psycopg2
import json
import utm
import os
from subprocess import call
from django.http import HttpResponse
from geoalchemy2 import Geometry, WKTElement
from sqlalchemy import create_engine
from django.conf import settings
from geonode.geoserver.helpers import ogc_server_settings

coords = [(497450, 1818108), (641043, 1825712)]
db = ogc_server_settings.datastore_db


# Falta asignar los nodos a la red y cfrom psycopg2 import sqlrear la topología desde aquí =(

def sql_costo(tabla_origen, tabla_destino, columna_costo, id_user=''):

    if id_user == '' or id_user is None:
        user = 'id_user is null'
    else:
        user = 'id_user is null or id_user = ' + str(id_user)

    params = {'origen': tabla_origen, 'destino': tabla_destino,
              'costo': columna_costo, 'user':user}
    sql = """SELECT DISTINCT ON (start_vid) 
         start_vid, end_vid, agg_cost
  FROM   (SELECT * FROM pgr_dijkstraCost(
      'select id, source, target, %(costo)s as cost from red',
      array(select distinct(nodos_%(origen)s) from %(origen)s where %(user)s),
      array(select distinct(nodos_%(destino)s) from %(destino)s where %(user)s),
  	 directed:=false)
  ) as sub
  ORDER  BY start_vid, agg_cost asc""" % params
    return sql


def agrega_nodos(coords, tipo, engine, con, current_user):
    """Toma un punto (de algún tipo) from psycopg2 import sqly lo enchufa en la tabla que
        le toque, asignando el nodo de la red mas cercano.
    """
    coords = utm.from_latlon(coords[0],coords[1])
    coords = [coords]
    id_user = current_user.id
    tipos = ('cultivo', 'acopios', 'beneficio', 'tostadora', 'exportadora')
    if tipo not in tipos:
        return 'Error tu tipo no existe'

    for i, coordenada in enumerate(coords):
        # cambiar las coordenaDAS de acuerdo al elemento de la lista
        params = {'tipo': tipo, 'coordx': coordenada[0], 'coordy': coordenada[1]}
        sql = """SELECT  id as nodos_%(tipo)s
           FROM red_vertices_pgr
           ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint(%(coordx)d, %(coordy)d),
           32615)
           LIMIT 1
              """ % params

        wkt_str = 'MULTIPOINT(' + str(coordenada[0]) + ' ' + str(coordenada[1]) + ')'
        wkt_element = WKTElement(wkt_str, srid=32615)
        resultado = pd.read_sql_query(sql, con)
        resultado['geom'] = wkt_element
        resultado['id_user'] = id_user
        resultado = gpd.GeoDataFrame(resultado)
        resultado.to_sql(tipo, engine, if_exists='append', index=False, dtype={'geom': Geometry('MULTIPOINT', srid=32615)})

def rall_nodos(con, current_user):

    id_user = current_user.id
    tipos = ['cultivo', 'acopios', 'beneficio', 'tostadora', 'exportadora']
    for tipo in tipos:
        params = {'tipo': tipo, 'id_user': id_user}
        sql = """DELETE FROM %(tipo)s WHERE id_user = %(id_user)s""" % params
        #sql2 = """SELECT geom FROM %(tipo)s WHERE id_user = %(id_user)s""" % params
        cur = con.cursor()
        cur.execute(sql)
        con.commit()
        cur.close()
        #cur.execute(sql2)
        #records = cur.fetchall()
        #pprint.pprint(records)


def calculaorg(con, engine):

    dbase='cafe'
    host=db['HOST']
    usr=db['USER']
    pwd=db['PASSWORD']
    cultivo='cultivo'
    acopios='acopios'
    beneficio='beneficio'
    tostadora='tostadora'
    exportadora='exportadora'
    costo='costo'
    # Conexion a postgres
    dist_cultivo_almacen = pd.read_sql_query(sql_costo(cultivo,
                                                       acopios,
                                                       costo), con)

    dist_acopios_beneficio = pd.read_sql_query(sql_costo(acopios,
                                                         beneficio,
                                                         costo), con)
    dist_beneficio_tostadora = pd.read_sql_query(sql_costo(beneficio,
                                                           tostadora,
                                                           costo), con)
    dist_tostadora_exportadora = pd.read_sql_query(sql_costo(
        tostadora,
        exportadora,
        costo), con)

    p1 = dist_cultivo_almacen.merge(dist_acopios_beneficio, left_on='end_vid',
                                    right_on='start_vid')
    p1.columns = ['id_cultivo', 'id_acopios', 'costo_c_a', 'id_acopios_y',
                  'id_beneficio', 'costo_a_b']
    p2 = p1.merge(dist_beneficio_tostadora, left_on='id_beneficio',
                  right_on='start_vid')
    # cambia los nombres a las columnafrom psycopg2 import sqls
    l = list(p2.columns)
    l[-3:] = ['id_beneficio', 'id_tostadora', 'costo_b_t']
    p2.columns = l

    resultado = p2.merge(dist_tostadora_exportadora, left_on='id_tostadora',
                         right_on='start_vid')
    rel_cultivo_acopio = resultado[['id_cultivo', 'id_acopios']]

    l = list(resultado.columns)
    l[-3:] = ['id_tostadora', 'id_exportadora', 'costo_t_e']
    resultado.columns = l

    resultado = resultado.set_index('id_cultivo')

    # asi selecciono los nulos:
    # nulos = p1[p1['start_vid_y'].isnull()]

    # costos = []
    # for c in list(resultado.columns):
    #  if c.startswith('agg_cost'):
    #    costos.append(c)

    # Calcular la suma de los costos
    columnas_costo = [c for c in list(resultado.columns)
                      if c.startswith('costo')]
    costos = resultado[columnas_costo].sum(axis=1)

    # Traer de la BD la tabla de cultivos
    query_cultivos = "select * from cultivo"
    cultivo = gpd.GeoDataFrame.from_postgis(query_cultivos, con,
                                            crs={'init': 'epsg:32615'})
    # Unir los nodos cultivos a los ids de cultivo originales:

    merge_cultivo = rel_cultivo_acopio.merge(cultivo, left_on='id_cultivo',
                                             right_on='nodos_cultivo')

    merge_cultivo = merge_cultivo[['id_cultivo', 'id_acopios', 'id', 'geom']]

    merge_cultivo.columns = ['nodo_cultivo', 'nodo_acopio', 'id_cultivo', 'geom']

    # Unir los costos a la tabla de cultivos
    costos = pd.DataFrame(costos)
    costos.columns = ['costo_total']
    cultivo_costo = cultivo.merge(costos, right_index=True, left_on='nodos_cultivo')
    world = cultivo_costo.to_crs({'init': 'epsg:4326'})
    jsontxt = world.to_json()


    # Guardar como shape para gdal
    #tmp_dir_shp = os.path.join(settings.PROJECT_ROOT, "uploaded/coffee_dis_cost/costo.shp")
    #cultivo_costo.to_file(driver = 'ESRI Shapefile', filename = tmp_dir_shp)

    # Guardar el resultado en la base datos
    #engine = create_engine('postgresql://postgres:postgres@localhost:5432/cafe')
    #cultivo_costo['geom'] = cultivo_costo.geometry.apply(
    #    lambda x: WKTElement(x.wkt, srid=32615))
    # cultivo.drop('geometry', 1, inplace=True)
    #cultivo_costo.to_sql('resultado', engine, if_exists='replace', index=False,
    #                     dtype={'geom': Geometry('MULTIPOINT', srid=32615)})
    # guardar merge_cultivo como tabla
    #merge_cultivo = gpd.GeoDataFrame(merge_cultivo).set_geometry('geom')
    #merge_cultivo['geom'] = merge_cultivo.geometry.apply(
    #    lambda x: WKTElement(x.wkt, srid=32615))
    #merge_cultivo.to_sql('cultivo_acopios', engine, if_exists='replace', index=False,
    #                     dtype={'geom': Geometry('MULTIPOINT', srid=32615)})
    # Hacer poligono para cada acopio

    #for i, acopio in enumerate(merge_cultivo.nodo_acopio.unique()):
    #    s = """insert into poligono_cultivos
    #    select %s as id_acopio , sub.geom
    #    from
    #    (select * from st_setsrid(pgr_pointsAsPolygon('select nodo_acopio::int4 as id, st_x
    #    (st_geometryn(geom,1)) as x,  st_y  (st_geometryn(geom,1)) as y
    #     from cultivo_acopios where nodo_acopio= %s'),32615)as geom)as sub""" % (acopio, acopio)
    #    cur = con.cursor()
    #    try:
    #        cur.execute(s)
    #        con.commit()
    #    except Exception as e:
    #        con.commit()
    #        print(e)
    #        pass

    # Agarrar el shape y convertirlo a raster con gdal, la instrucción call se
    # utiliza para  traer un comando y ejecutarlo.
    #comando = ['gdal_grid', '-zfield', 'costo_tota', '-a_srs', 'EPSG:4326', '-l', 'costo', '-a',
    #           'invdist:power=2.0:smothing=0.0:radius1=0.0:radius2=0.0:angle=0.0:max_points=0:min_points=0:nodata=0.0',
    #           '-ot', 'Float32', '-of', 'GTiff', 'geonode/uploaded/coffee_dis_cost/costo.shp', 'geonode/uploaded/coffee_dis_cost/costo.tif']
    #try:
        #call(comando)
    #    print 'Sin Tif'
    #except:
    #    print('Error Tif')
    return jsontxt

def calculadif(con, engine, current_user):
    dbase='cafe'
    host=db['HOST']
    usr=db['USER'],
    pwd=db['PASSWORD']
    cultivo='cultivo'
    acopios='acopios',
    beneficio='beneficio'
    tostadora='tostadora',
    exportadora='exportadora'
    costo='costo'
    id_user = current_user.id
    # Conexion a postgres
    dist_cultivo_almacen = pd.read_sql_query(sql_costo(cultivo,
                                                       acopios,
                                                       costo, id_user), con)

    dist_acopios_beneficio = pd.read_sql_query(sql_costo(acopios,
                                                         beneficio,
                                                         costo, id_user), con)
    dist_beneficio_tostadora = pd.read_sql_query(sql_costo(beneficio,
                                                           tostadora,
                                                           costo, id_user), con)
    dist_tostadora_exportadora = pd.read_sql_query(sql_costo(
        tostadora,
        exportadora,
        costo, id_user), con)

    p1 = dist_cultivo_almacen.merge(dist_acopios_beneficio, left_on='end_vid',
                                    right_on='start_vid')
    p1.columns = ['id_cultivo', 'id_acopios', 'costo_c_a', 'id_acopios_y',
                  'id_beneficio', 'costo_a_b']
    p2 = p1.merge(dist_beneficio_tostadora, left_on='id_beneficio',
                  right_on='start_vid')
    # cambia los nombres a las columnafrom psycopg2 import sqls
    l = list(p2.columns)
    l[-3:] = ['id_beneficio', 'id_tostadora', 'costo_b_t']
    p2.columns = l

    resultado = p2.merge(dist_tostadora_exportadora, left_on='id_tostadora',
                         right_on='start_vid')
    rel_cultivo_acopio = resultado[['id_cultivo', 'id_acopios']]

    l = list(resultado.columns)
    l[-3:] = ['id_tostadora', 'id_exportadora', 'costo_t_e']
    resultado.columns = l

    resultado = resultado.set_index('id_cultivo')

    # asi selecciono los nulos:
    # nulos = p1[p1['start_vid_y'].isnull()]

    # costos = []
    # for c in list(resultado.columns):
    #  if c.startswith('agg_cost'):
    #    costos.append(c)

    # Calcular la suma de los costos
    columnas_costo = [c for c in list(resultado.columns)
                      if c.startswith('costo')]
    costos = resultado[columnas_costo].sum(axis=1)

    # Traer de la BD la tabla de cultivos
    query_cultivos = "select * from cultivo"
    cultivo = gpd.GeoDataFrame.from_postgis(query_cultivos, con,
                                            crs={'init': 'epsg:32615'})
    # Unir los nodos cultivos a los ids de cultivo originales:

    merge_cultivo = rel_cultivo_acopio.merge(cultivo, left_on='id_cultivo',
                                             right_on='nodos_cultivo')

    merge_cultivo = merge_cultivo[['id_cultivo', 'id_acopios', 'id', 'geom']]

    merge_cultivo.columns = ['nodo_cultivo', 'nodo_acopio', 'id_cultivo', 'geom']

    # Unir los costos a la tabla de cultivos
    costos = pd.DataFrame(costos)
    costos.columns = ['costo_total']
    cultivo_costo = cultivo.merge(costos, right_index=True, left_on='nodos_cultivo')
    world = cultivo_costo.to_crs({'init': 'epsg:4326'})
    jsontxt = world.to_json()


    # Guardar como shape para gdal
    tmp_dir_shp = os.path.join(settings.PROJECT_ROOT, "uploaded/coffee_dis_cost/costodif.shp")
    world.to_file(driver='ESRI Shapefile', filename=tmp_dir_shp)

    # Guardar el resultado en la base datos
    engine = create_engine('postgresql://'+db['USER']+':'+db['PASSWORD']+'@'+db['HOST']+':5432/cafe')
    cultivo_costo['geom'] = cultivo_costo.geometry.apply(
        lambda x: WKTElement(x.wkt, srid=32615))
    # cultivo.drop('geometry', 1, inplace=True)
    cultivo_costo.to_sql('resultadodif', engine, if_exists='replace', index=False,
                         dtype={'geom': Geometry('MULTIPOINT', srid=32615)})
    # guardar merge_cultivo como tabla
    merge_cultivo = gpd.GeoDataFrame(merge_cultivo).set_geometry('geom')
    merge_cultivo['geom'] = merge_cultivo.geometry.apply(
        lambda x: WKTElement(x.wkt, srid=32615))
    merge_cultivo.to_sql('cultivo_acopios', engine, if_exists='replace', index=False,
                         dtype={'geom': Geometry('MULTIPOINT', srid=32615)})
    # Hacer poligono para cada acopio

    for i, acopio in enumerate(merge_cultivo.nodo_acopio.unique()):
        s = """insert into poligono_cultivos 
        select %s as id_acopio , sub.geom
        from
        (select * from st_setsrid(pgr_pointsAsPolygon('select nodo_acopio::int4 as id, st_x 
        (st_geometryn(geom,1)) as x,  st_y  (st_geometryn(geom,1)) as y 
         from cultivo_acopios where nodo_acopio= %s'),32615)as geom)as sub""" % (acopio, acopio)
        cur = con.cursor()
        try:
            cur.execute(s)
            con.commit()
        except Exception as e:
            con.commit()
            print(e)
            pass

    # Agarrar el shape y convertirlo a raster con gdal, la instrucción call se
    # utiliza para  traer un comando y ejecutarlo.
    tmp_dir_tif = os.path.join(settings.PROJECT_ROOT, "uploaded/coffee_dis_cost/costodif.tif")
    comando = ['gdal_grid', '-zfield', 'costo_tota', '-a_srs', 'EPSG:4326', '-l', 'costodif', '-a',
               'invdist:power=2.0:smothing=0.0:radius1=0.0:radius2=0.0:angle=0.0:max_points=0:min_points=0:nodata=0.0',
                '-of', 'GTiff', '-ot', 'Float64', '-txe', '-95', '-90', '-tye', '18', '14', tmp_dir_shp, tmp_dir_tif]
    try:
        call(comando)
    except:
        print('Error Tif')

    return jsontxt


def calcula(request):
    if request.is_ajax():
        con = psycopg2.connect(database='cafe', user=db['USER'], password=db['PASSWORD'], host=db['HOST'])
        engine_str = 'postgresql://%s:%s@%s:5432/%s' % (db['USER'], db['PASSWORD'], db['HOST'], 'cafe')
        engine = create_engine(engine_str)
        jsontxt = calculaorg(con, engine)
        return HttpResponse( json.dumps(jsontxt), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def recalcula(request):
    if request.is_ajax():
        current_user = request.user
        con = psycopg2.connect(database='cafe', user=db['USER'], password=db['PASSWORD'], host=db['HOST'])
        engine_str = 'postgresql://%s:%s@%s:5432/%s' % (db['USER'], db['PASSWORD'], db['HOST'], 'cafe')
        engine = create_engine(engine_str)
        jsontxt = calculadif(con, engine, current_user)

        return HttpResponse( json.dumps(jsontxt), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")


def caldif(request):
    if request.is_ajax():
        con = psycopg2.connect(database='cafe', user=db['USER'], password=db['PASSWORD'], host=db['HOST'])
        sql = """SELECT resultado.id, resultado.geom, resultado.costo_total - resultadodif.costo_total as costo_total FROM resultado INNER JOIN resultadodif ON
                st_within(resultado.geom, st_buffer(resultadodif.geom, 0.1)) AND 
                st_within(resultadodif.geom, st_buffer(resultado.geom, 0.1))
                                      """
        resultado = gpd.GeoDataFrame.from_postgis(sql, con,
                                                crs={'init': 'epsg:32615'})
        resultado = resultado.to_crs({'init': 'epsg:4326'})
        resultado = resultado.to_json()
        return HttpResponse(json.dumps(resultado), content_type='application/json')
    else:
        return HttpResponse("Solo Ajax")


def addnode(request):
    if request.is_ajax():
        current_user = request.user
        query_data = json.loads(request.POST['query_data'])
        coords = query_data['coords']
        tipo = query_data['tipo']
        con = psycopg2.connect(database='cafe', user=db['USER'], password=db['PASSWORD'], host=db['HOST'])
        engine_str = 'postgresql://%s:%s@%s:5432/%s' % (db['USER'], db['PASSWORD'], db['HOST'], 'cafe')
        engine = create_engine(engine_str)
        jsontxt = agrega_nodos(coords, tipo, engine, con, current_user)
        return HttpResponse( json.dumps(jsontxt), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def rallnodes(request):
    if request.is_ajax():
        current_user = request.user
        con = psycopg2.connect(database='cafe', user=db['USER'], password=db['PASSWORD'], host=db['HOST'])
        jsontxt = rall_nodos(con, current_user)
        return HttpResponse( json.dumps(jsontxt), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")
