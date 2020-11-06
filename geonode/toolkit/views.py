import json

from django.http import HttpResponse, HttpResponseRedirect, Http404, HttpResponseNotAllowed, HttpResponseServerError
from django.shortcuts import render, render_to_response, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from django.core.exceptions import PermissionDenied
from django.urls import reverse
from django.template import RequestContext
from django.db.models import Q

from geonode.mviewer.models import MViewer
from geonode.maps.models import Map
from geonode.toolkit.forms import ConfigureObjectSOAForm, ConfigureObjectSOAFormWOTool, ConfigureObjectSOAFormMWView, ConfigureObjectSOAFormMap
from geonode.toolkit.forms import ToolForm, ConfigureObjectFormLayer#, MapChartingToolsForm
from geonode.toolkit.models import SpatialObject, ConfigureObjectSOA

# This model is for tools
def config_tool(request, template='config_tool.html'):
    spatial_tool = SpatialObject.objects.all()
    config_tool = ConfigureObjectSOA.objects.all()
    return render_to_response(template, RequestContext(request, {'tool': spatial_tool, 'conf':config_tool}))

@login_required
def upload_tool(request):
    if request.method == 'POST':
        tool_form = ToolForm(request.POST)
        if tool_form.is_valid():
            tool_form.save()
            return HttpResponseRedirect(reverse("config_tool"))
    else:
        tool_form = ToolForm()
    return render(request, 'tool_form.html', {'form': tool_form})

@login_required
def update_tool(request, st_id):
    obj = get_object_or_404(SpatialObject, id=st_id)
    tool_form = ToolForm(request.POST or None, instance=obj)
    if request.method == 'POST':
        if tool_form.is_valid():
            tool_form.save()
            return HttpResponseRedirect(reverse("config_tool"))
    return render(request, 'tool_form.html',{'form':tool_form})

@login_required
def delete_tool(request, st_id, template='tool_remove.html'):
    try:
        tools = get_object_or_404(SpatialObject, id=st_id)
        if request.method == 'GET':
            return render_to_response(template, RequestContext(request, {
                "tool": tools
            }))
        if request.method == 'POST':
            tools.delete()
            return HttpResponseRedirect(reverse("config_tool"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this config_tool',
            content_type="text/plain",
            status=401
        )

@login_required
def upload_configure(request, st_id):
    obj = get_object_or_404(SpatialObject, id=st_id)
    if request.method == 'POST':
        tool_form = ConfigureObjectSOAForm(request.POST)
        if tool_form.is_valid():
            tool_form.save()
            return HttpResponseRedirect(reverse("config_tool"))
    else:
        tool_form = ConfigureObjectSOAFormWOTool()
    return render(request, 'config_form.html', {'form': tool_form,'obj':obj})

@login_required
def update_configure(request, conf_id):
    obj = get_object_or_404(ConfigureObjectSOA, id=conf_id)
    tool_form = ConfigureObjectSOAFormWOTool(request.POST or None, instance=obj)
    if request.method == 'POST':
        if tool_form.is_valid():
            tool_form.save()
            return HttpResponseRedirect(reverse("config_tool"))
    return render(request, 'config_form.html',{'form':tool_form,'obj':obj})

@login_required
def delete_configure(request, conf_id, template='config_remove.html'):
    try:
        tools = get_object_or_404(ConfigureObjectSOA, id=conf_id)
        if request.method == 'GET':
            return render_to_response(template, RequestContext(request, {
                "tool": tools
            }))
        if request.method == 'POST':
            tools.delete()
            return HttpResponseRedirect(reverse("config_tool"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this config_tool',
            content_type="text/plain",
            status=401
        )

@login_required
def upload_configure_mviewer(request, mw_id):
    obj = get_object_or_404(MViewer, id=mw_id)
    if request.method == 'POST':
        tool = request.POST.get('tool', False)
        help = request.POST.get('help', False)
        status = request.POST.get('status', False)
        creation_date = request.POST.get('timestamp', False)
        tool_ready_exist = ConfigureObjectSOA.objects.filter(tool = tool).filter(mviewer=mw_id)
        if tool_ready_exist:
            print("Ya existe esta herramienta")
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
        if request.user.is_authenticated:
            user = request.user.id
        tool_form = ConfigureObjectSOAForm({'tool':tool, 'mviewer':mw_id, 'help':help,'coverages':'statal','user_sos':user, 'status':status, 'creation_date':creation_date})
        if tool_form.is_valid():
            tool_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
    else:
        tool_form = ConfigureObjectSOAFormMWView()
        tool_form.fields['tool'].queryset = SpatialObject.objects.filter(general_tool=1)
        # tool_form = ConfigureObjectSOAFormMWView()
        # tool_form = ConfigureObjectSOAFormMWView(Q(general_tool=0))
        # form.rate.queryset = ConfigureObjectSOA.objects.filter(mviewer=mw_id)
    return render(request, 'config_form.html', {'form': tool_form,'obj':obj})

@login_required
def delete_configure_mviewer(request, mw_id, conf_id, template='config_remove_mw.html'):
    try:
        tools = get_object_or_404(ConfigureObjectSOA, id=conf_id)
        if request.method == 'GET':
            return render_to_response(template, RequestContext(request, {
                "tool": tools,
                "mw_id": mw_id
            }))
        if request.method == 'POST':
            tools.delete()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this mviewer_detail',
            content_type="text/plain",
            status=401
        )

@login_required
def update_configure_mviewer(request, mw_id, conf_id):
    obj = get_object_or_404(ConfigureObjectSOA, id=conf_id)
    tool_form = ConfigureObjectSOAFormMWView(request.POST or None, instance=obj)
    if request.method == 'POST':
        if tool_form.is_valid():
            tool_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
    return render(request, 'config_form.html',{'form':tool_form, 'obj':obj})

"""
Metodo para obtener la constante de las herramientas por id
"""
def get_constants_tools_by_id(request):
    if request.is_ajax():
        try:
            list_tool = []
            id_tool = request.POST.get('id_tool', "None")
            print(id_tool)
            if id_tool not in "None":
                spatial = get_object_or_404(SpatialObject, pk=id_tool)
                list_tool.append(str(spatial.constant))

        except ObjectDoesNotExist:
            HttpResponseServerError("ObjectDoesNotExist Map!")
        return HttpResponse(json.dumps(list_tool), content_type='application/json' )
    else:
        return HttpResponse("Not ajax request")

"""
Este metodo es el ajax para guardar que herramienta se va asignar al mapa
"""
def set_charting_tool_map(request):
    if request.is_ajax():
        try:
            list_tools = []
            list_tools_dis = []
            id_map = request.POST.get('mapid', "None")
            tools_list = request.POST.get('tool_list', "None")
            tool_list_disable = request.POST.get('tool_list_false', "None")
            if tools_list not in "None":
                tools_list_without_c = tools_list.replace("[","").replace("]","").replace('"','')
                tool_l = tools_list_without_c.split(",")
                tools_list_without_c_disable = tool_list_disable.replace("[","").replace("]","").replace('"','')
                tool_l_dis = tools_list_without_c_disable.split(",")
                obj = get_object_or_404(Map, id=id_map)
                for tool in tool_l:
                    list_tools.append(tool)
                for toold in tool_l_dis:
                    list_tools_dis.append(toold)
                if obj:
                    if list_tools:
                        for tool_id in list_tools:
                            spatial = get_object_or_404(SpatialObject, id=tool_id)
                            config = ConfigureObjectSOA.objects.filter(maps = obj.id).filter(tool = spatial.id)
                            # print config
                            # print "config"
                            if config:
                                for cn in config:
                                    c_t = get_object_or_404( ConfigureObjectSOA, id = cn.id)
                                    tool_form = ConfigureObjectSOAFormMap({'tool':spatial.id, 'maps':obj.id, 'status':1} or None, instance=c_t)
                                    if tool_form.is_valid():
                                        tool_form.save()
                                # print c_t
                            else:
                                tool_form = ConfigureObjectSOAFormMap({'tool':spatial.id, 'maps':obj.id, 'status':1})
                                if tool_form.is_valid():
                                    tool_form.save()
                    if list_tools_dis:
                        for tool_id in list_tools_dis:
                            spatial = get_object_or_404(SpatialObject, id=tool_id)
                            config = ConfigureObjectSOA.objects.filter(maps = obj.id).filter(tool = spatial.id)
                            # print config
                            # print "config"
                            if config:
                                for cn in config:
                                    c_t = get_object_or_404( ConfigureObjectSOA, id = cn.id)
                                    tool_form = ConfigureObjectSOAFormMap({'tool':spatial.id, 'maps':obj.id, 'status':0} or None, instance=c_t)
                                    if tool_form.is_valid():
                                        tool_form.save()
                            else:
                                tool_form = ConfigureObjectSOAFormMap({'tool':spatial.id, 'maps':obj.id, 'status':0})
                                if tool_form.is_valid():
                                    tool_form.save()
        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse(json.dumps(list_tools), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")
"""
Este metodo es el ajax para guardar que herramienta se va asignar al mapa
def set_charting_tool(request):
    if request.is_ajax():
        try:
            list_tools = []
            id_map = request.POST.get('mapid', "None")
            tools_list = request.POST.get('tool_list', "None")
            if tools_list not in "None":
                tools_list_without_c = tools_list.replace("[","").replace("]","").replace('"','')
                tool_l = tools_list_without_c.split(",")
                obj = get_object_or_404(Map, id=id_map)
                for tool in tool_l:
                    list_tools.append(tool)
                if obj:
                    if len(list_tools)>=2:
                        formulario = MapChartingToolsForm({'charting_tools': list_tools}or None, instance=obj)
                    else:
                        if list_tools[0]=="":
                            lis = []
                            formulario = MapChartingToolsForm({'charting_tools': lis}or None, instance=obj)
                        else:
                            formulario = MapChartingToolsForm({'charting_tools': list_tools}or None, instance=obj)
                    if formulario.is_valid():
                        formulario.save()


        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse(json.dumps(list_tools), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")
Este metodo es el ajax para guardar que herramienta se va asignar al mapa
"""
def get_charting_tool_map(request):
    if request.is_ajax():
        try:
            list_tools_all = []
            dir_tools = {}
            list_tools = []
            id_map = request.POST.get('mapid', "None")
            if id_map not in "None":
                obj = get_object_or_404(Map, id=id_map)
                if obj:
                    char = SpatialObject.objects.ConfigureObjectSOA()
                    tools_map_desable = ConfigureObjectSOA.objects.filter(maps = obj.id).filter(status = 0)
                    tools_map = ConfigureObjectSOA.objects.filter(maps = obj.id).filter(status = 1)
                    for tool in tools_map:
                        # for too in tools_map:
                        #     print too
                        list_all = []
                        list_con = []
                        # if tool.id == too.tool.id:
                            # charting_tool = get_object_or_404(SpatialObject, id = tool.tool.id)
                        list_con.append(str(tool.tool.id))
                        list_con.append(unicode(tool.tool.tittle))
                        list_con.append(True)
                        list_tools.append(list_con)
                    for tool in tools_map_desable:

                        list_all.append(str(tool.tool.id))
                        list_all.append(unicode(tool.tool.tittle))
                        list_all.append(False)
                        list_tools.append(list_all)

                dir_tools = {'list_tools':list_tools,'list_tools_all':list_tools_all}

        except KeyError:
            HttpResponseServerError("Malformed data!")
        return HttpResponse(json.dumps(dir_tools), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

@login_required
def upload_configure_layer(request, mw_id, layer_id):
    obj = get_object_or_404(MViewer, id=mw_id)
    if request.method == 'POST':
        tool = request.POST.get('tool', False)
        help = request.POST.get('help', False)
        status = request.POST.get('status', False)
        print(tool)
        # layerid = request.POST.get('layer_mv', False)
        creation_date = request.POST.get('timestamp', False)
        tool_ready_exist = ConfigureObjectSOA.objects.filter(tool = tool).filter(layer_mv=layer_id).filter(mviewer=mw_id)
        obj = get_object_or_404(SpatialObject, id=tool)
        print(obj)
        print(tool_ready_exist)
        print(layer_id)
        if tool_ready_exist:
            print("Ya existe esta herramienta")
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
        if request.user.is_authenticated:
            user = request.user.id
        tool_form = ConfigureObjectSOAForm({'tool':tool, 'mviewer':mw_id,'layer_mv':layer_id, 'help':help,'coverages':'statal','user_sos':user, 'status':status, 'creation_date':creation_date})
        if tool_form.is_valid():
            conf = tool_form.save()
            print("saved")
            print(obj.constant)
            if obj.constant in "CROPS_ANALISYS_SPRING":
                return HttpResponseRedirect(reverse('configure_tool_upload', args=[mw_id, conf.id]))
            else:
                return HttpResponseRedirect(reverse('mviewer_detail', args=[mw_id]))
    else:
        # tool_form = ConfigureObjectFormLayer()
        tool_form = ConfigureObjectSOAFormMWView()
        tool_form.fields['tool'].queryset = SpatialObject.objects.filter(general_tool=0)
        # tool_form = ConfigureObjectSOAFormMWView(Q(status=0))
    return render(request, 'config_form.html', {'form': tool_form,'obj':obj})
