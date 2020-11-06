import os
import json
import psycopg2
import uuid

from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect
from geoserver.catalog import Catalog

from geonode.layers.models import Layer, Attribute
from geonode.interactive.intercensal.views import create_and_save_SLD
from .topics_data import topics_dict, subtopics_dict

_user = settings.OGC_SERVER['default']['USER']
_password = settings.OGC_SERVER['default']['PASSWORD']


def c10_subtopics(request):
    if request.is_ajax():
        topic = json.loads(request.POST['topic'])
        sub = {}
        if topic in topics_dict:
            sub = topics_dict[topic]

        return HttpResponse(json.dumps(sub, encoding='latin1'), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def subtopic_fields(request):
    if request.is_ajax():
        subtopic = json.loads(request.POST['subtopic'])
        fields = {}
        if subtopic in subtopics_dict:
            fields = subtopics_dict[subtopic]

        return HttpResponse(json.dumps(fields, encoding='latin1'), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def c10_data(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        query_shape = {}
        if query_data:
            subtopic = query_data['subtopic']
            sld_field = query_data['sld_field']
            layer_name = 'muni_2010gw_conpob'
            layer_dict = {}

            name = subtopic + '_' + sld_field
            double_view_name = "c10_%s" % name
            ows_url = settings.OGC_SERVER['default']['PUBLIC_LOCATION'] + "wms"
            cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest", _user, _password)

            try:
                layer = Layer.objects.get(name='muni_2010gw_conpob')
                attribute = Attribute.objects.get(resource=layer, attribute=sld_field)
                attr_type = attribute.attribute_type

                layer_dict = {
                    'id': layer.id, 'title': layer.title, 'typename': layer.typename, "storeType": layer.storeType,
                    'x0': str(layer.bbox_x0), 'y0': str(layer.bbox_y0), 'x1': str(layer.bbox_x1),
                    'y1': str(layer.bbox_y1),
                }

                # Create SLD and assign
                if attr_type == 'int' or attr_type == 'float' or attr_type == 'xsd:double':
                    try:
                        create_and_save_SLD(layer_name, attribute.attribute, double_view_name, cat, 'c10')
                    except:
                        pass

            except Exception as e:
                    print("Error al obtener capa o atributo: %s" % e)

            query_shape = {
                'layer':layer_dict,
                'name':name,
                'sld_name': double_view_name,
                'href': ows_url
            }
        return HttpResponse(json.dumps(query_shape), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")
