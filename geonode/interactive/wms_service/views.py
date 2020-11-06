import json
from django.http import HttpResponse
from owslib.wms import WebMapService

from geonode.interactive.wms_service.models import WmsService


def save_wms_service(request):
    if request.is_ajax():
        jdata = json.loads(request.POST['form_data'])

        name = jdata['name'].encode('utf-8')
        base_url = jdata['base_url']
        description = jdata['description']
        wms_serv = WmsService(base_url=base_url, name=name)
        wms_serv.description = description.encode('utf-8')
        wms_serv.save()

        wms = {
            'base_url': wms_serv.base_url,
            'name': wms_serv.name,
        }
        return HttpResponse(json.dumps(wms), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def delete_wms(request):
    if request.is_ajax():
        id = request.POST['id']
        if id:
            wms = WmsService.objects.get(id=id)
            wms.delete()

        return HttpResponse(id)
    else:
        return HttpResponse("Not ajax request")


def external_wms(request):
    if request.is_ajax():
        layers_dict = {}
        wms_url = request.POST['wmsUrl']
        name_search = request.POST['nameSearch']
        # If authetincation needed
        # wms_user = request.POST['wmsUser']
        # wms_pass = request.POST['wmsPass']

        # if wms_user:
        #     wms = WebMapService(wms_url, username=wms_user, password=wms_pass)
        # else:
        #     wms = WebMapService(wms_url)
        wms = WebMapService(wms_url)

        layers = list(wms.contents)

        if name_search:
            if name_search in layers:
                layers_dict[name_search] = {
                    'title': wms.contents[name_search].title,
                    'abstract': wms.contents[name_search].abstract,
                    'bbox': wms.contents[name_search].boundingBox,
                }
        else:
            for layer in layers:
                layers_dict[layer] = {
                    'title': wms.contents[layer].title,
                    'abstract': wms.contents[layer].abstract,
                    'bbox': wms.contents[layer].boundingBox,
                }
        return HttpResponse(json.dumps(layers_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")