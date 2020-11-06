# -*- coding: utf-8 -*-

import json

from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import RequestContext
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotAllowed, HttpResponseServerError
from django.utils.translation import ugettext as _

from geonode.interactive.wms_service.forms import WmsServiceForm
from geonode.interactive.wms_service.models import WmsService
from geonode.mviewer.models import MViewer
from geonode.mviewer.models import MViewer, Topic, LayerIds
from owslib.wms import WebMapService

PERMISSION_MSG_VIEW = _("You are not allowed to view this map.")

def ext_wms(request):
    if request.is_ajax():
        wms_services = WmsService.objects.all()
        names = []
        for wms in wms_services:
            names.append(wms.name)
        return HttpResponse("Ajax request")
    else:
        return HttpResponse("Not ajax request")

#GUARDAR LA SELECCIÓN ACTUAL EN LA TABLA DE LA BASE DE DATOS
def save_wms(request):
    if request.is_ajax():
        data = json.loads(request.POST['data'])
        wms_ids = data['final_sel'] #Selección final
        mv_id = data['mv_id'] #Id del Visualizador
        names = {}

        mviewer = get_object_or_404(MViewer, id=mv_id)#Trae objeto uno por uno que tenga el id del visualizador contemplado

        for id in wms_ids:
            wms_object = get_object_or_404(WmsService, id=int(id)) #Obtiene los id de unicamente los servicios seleccionados
            mviewer.wms_services.add(wms_object)#Se guarda con la sintaxis: Instancia[id del visualizador]-Campo de Relacion[campo ManytoMany]- acción add [agregar a la tabla] -Instancia[id del objeto de la selección]
            names[wms_object.id] = wms_object.name #Arma un diccionario con llave ID y Nombre del Servicio

        return HttpResponse(json.dumps(names), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")

# def wms_selected(request):
#     wms_selected = MViewer.wms_services.objects.all()
#     print (wms_selected)
#     return render_to_response('wms_tool_detail.html',{
#         'wms_selected': wms_selected,
#         },context_instance=RequestContext(request))

#BORRAR OBJETOS SI SE DES-SELECCIONAN
def remove_wms_layer(request):
    if request.is_ajax():
        rwms_data = json.loads(request.POST['wms_data'])
        #print rwms_data
        id = rwms_data['wms_id']     #ID del servicio wms
        reg_id = rwms_data['reg_id'] #ID de la tabla relación
        mv_id = rwms_data['mv_id']   #ID del visualizador

        mviewer = get_object_or_404(MViewer, id=mv_id)#Trae objeto uno a uno que tenga el id del visualizador contemplado
#       PROPUESTA: ES EL MISMO PROCEDIMIENTO QUE EL ANTERIOR POR ESO TAL VEZ NO BORRA LOS DATOS EN TABLA
#       Hay que agregar el for

        wms_object = get_object_or_404(WmsService, id=reg_id)#Obtiene los id de unicamente los servicios seleccionados
        mviewer.wms_services.remove(wms_object)#Arma un diccionario con llave ID y Nombre del Servicio

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def select_wmslayer(request):
    if request.is_ajax():
        wmslayer_data = json.loads(request.POST['data'])
        print(wmslayer_data)
        id = wmslayer_data['id_wms_final']

        mviewer = get_object_or_404(WmsService, id=id)
        wms_url = mviewer.base_url
        print(mviewer)
        print(wms_url)

        return HttpResponse("Not ajax request")
        # return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def external_wms_toolkit(request):
    if request.is_ajax():
        layers_dict = {}
        wms_url = request.POST['wmsUrl']
        name_search = request.POST['nameSearch']
        wms = WebMapService(wms_url)
        layers = list(wms.contents)

        for layer in layers:
            layers_dict[layer] = {
            'title': wms.contents[layer].title,
            'abstract': wms.contents[layer].abstract,
            'bbox': wms.contents[layer].boundingBox,
            }
        return HttpResponse(json.dumps(layers_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")