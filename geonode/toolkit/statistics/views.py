# -*- encoding: utf-8 -*-
import json
import psycopg2

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import RequestContext
from django.http import HttpResponse

from geonode.layers.models import Layer, Attribute
from geonode.maps.models import Map
from geonode.geoserver.helpers import ogc_server_settings

def get_layer_attr(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['data_attr'])
        layer_id = query_data['lay_id']
        attr_dict = {}

        attributes = Attribute.objects.filter(resource=layer_id).exclude(attribute='the_geom')

        for attr in attributes:
            attr_dict[attr.id] = {
                "attribute": attr.attribute,
                "description": attr.description,
                "type": attr.attribute_type
            }

        return HttpResponse(json.dumps(attr_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def get_attr_stats(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        table_name = query_data['table_name']
        attr = query_data['attr']
        attr_type = query_data['attr_type']

        qvalues = []
        count_e = 1
        get_area = True
        #query_sql = 'SELECT DISTINCT "%s" FROM %s WHERE "%s" IS NOT NULL ORDER BY "%s" ASC' % (
        #    theme_field, table_name, theme_field, theme_field)
        if attr_type == 'int' or attr_type == 'long' or attr_type == 'double':
            min_sql = 'SELECT MIN(NULLIF("%s", 0)) FROM %s' % (attr, table_name)
            max_sql = 'SELECT MAX("%s") FROM %s' % (attr, table_name)
        elif attr_type == 'string':
            # count_distinct = 'SELECT COUNT (DISTINCT "%s") FROM %s WHERE "%s" IS NOT NULL' % (
            #     attr, table_name, attr)

            query_sql = 'SELECT "%s", COUNT("%s") FROM "%s" GROUP BY "%s"' % (
                attr, attr, table_name, attr)

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

            if attr_type == 'int' or attr_type == 'long' or attr_type == 'double':
                cur.execute(min_sql)
                qvalues.append(cur.fetchone()[0])
                cur.execute(max_sql)
                qvalues.append(cur.fetchone()[0])
            elif attr_type == 'string':
                cur.execute(query_sql)
                for r in cur.fetchall():
                    reg = {'label': r[0], 'value': r[1]}
                    qvalues.append(reg)
                    count_e += 1
                    if count_e > 50:
                        get_area = False
                        qvalues = {'exceeded': 'Mas de 50 categorias'}
                        break

                if get_area:
                    query_srid = "SELECT Find_SRID('public', '" + table_name + "', 'the_geom');"
                    cur.execute(query_srid)
                    srid = cur.fetchone()[0]

                    if srid == 4326:
                        param = 'the_geom::geography'
                    else:
                        param = 'the_geom'

                    for e in qvalues:
                        query_area = 'SELECT SUM(ST_Area('+param+')) / 1000000 FROM (SELECT the_geom FROM "' + table_name \
                                     +'" WHERE "'+attr+'" = '+"'"+e['label']+"'"+') AS foo;'
                        cur.execute(query_area)
                        e['area'] = cur.fetchone()[0]

            conn.commit()
            conn.close()

        except Exception as e:
            print("Error querying table data: %s" % e)
            conn.close()

        return HttpResponse(json.dumps(qvalues), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")
