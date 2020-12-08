# -*- coding: utf-8 -*-
import json
import urllib

from django.http import HttpResponse, HttpResponseRedirect, Http404, HttpResponseNotAllowed, HttpResponseServerError
from django.shortcuts import render, get_object_or_404
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from geonode.geoserver.helpers import ogc_server_settings

from geonode.mviewer.models import MViewer, Topic, LayerIds, LayeridMarker, MviewerHeader, TopicText, TopicTextItems
from geonode.mviewer.forms import MViewerForm, TopicForm, MViewerFormAll, LayerNarrativeForm, MarkerNarrativeForm, \
                                    MarkerIconForm, MviewerHeaderForm, TopicTextForm, TopicTextItemForm
from geonode.layers.models import Layer
from geonode.interactive.views import cat_connect, SENTINEL_LAYERS
from geonode.toolkit.models import ConfigureObjectSOA, SpatialObject
from geonode.interactive.wms_service.models import WmsService
from geonode.interactive.wms_service.forms import WmsServiceForm
from geonode.applications.models import Applications

# SENTINEL_LAYERS = {'TRUE_COLOR': {'nombre': 'Color Verdadero', 'descr': 'Basado en bandas 4,3,2'}, 'FALSE_COLOR': {'nombre':'Falso color (Vegetación)', 'descr': 'Basado en bandas 8,4,3'}, 'FALSE_COLOR_URBAN': {'nombre':'Falso color (Urbano)', 'descr': 'Basado en bandas 12,11,4'}, 'AGRICULTURE': {'nombre':'Agricultura', 'descr': 'Basado en bandas 11,8,2'}, 'NDVI': {'nombre':'Indice de Vegetación', 'descr': 'Basado en combinación de bandas (B8-B4)/(B8+B4)'}, 'MOISTURE_INDEX': {'nombre':'Indice de húmedad', 'descr': 'Basado en combinación de bandas (B8A-B11)/(B8A+B11)'}, 'GEOLOGY': {'nombre':'Geologia', 'descr': 'Basado en bandas 12,4,2'}, 'BATHYMETRIC': {'nombre':'Batimetria', 'descr': 'Basado en bandas 4,3,1'}, 'ATMOSPHERIC-PENETRATION': {'nombre':'Penetración atmosférica', 'descr': 'Basado en bandas 12,11,8A'}}

@login_required
def mviewer_list(request):
    group_list = []
    if request.user.is_authenticated:
        group_list = request.user.group_list_all()
        apps = Applications.objects.all()
    mviewers = MViewer.objects.filter(group__in=group_list)

    return render(request, 'mviewer_list.html', {'items': mviewers,'apps':apps})


def mviewer_public(request):
    mviewers = MViewer.objects.filter(is_public=True)

    return render(request, 'mviewer_public.html', {'items': mviewers})


@login_required
def mviewer_create(request):
    no_group = False
    if request.method == 'POST':
        mv_form = MViewerForm(request.POST, request.FILES)
        if mv_form.is_valid():
            mv_instance = mv_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_instance.pk]))
    else:
        mv_form = MViewerForm()
        my_groups = request.user.group_list_all()
        mv_form.fields["group"].queryset = my_groups
        no_group = False
        if not my_groups:
            no_group = True
    return render(request, 'mviewer_metadata.html', {'form': mv_form, 'mviewer':json.dumps({'bbox_x0':'a','logo':'B'}), 'no_group': no_group})


@login_required
def mviewer_metadata(request, mv_id):
    mviewer = get_object_or_404(MViewer, id=mv_id)
    if request.method == 'POST':
        mv_form = MViewerFormAll(request.POST, request.FILES, instance=mviewer)
        if mv_form.is_valid():
            mv_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_id]))
    else:
        mv_form = MViewerForm(instance=mviewer)

    jmviewer = {
      'bbox_x0':str(mviewer.bbox_x0),
      'bbox_y0':str(mviewer.bbox_y0),
      'bbox_x1':str(mviewer.bbox_x1),
      'bbox_y1':str(mviewer.bbox_y1),
      'logo':mviewer.logo
    }

    return render(request, 'mviewer_metadata.html', {'form': mv_form, 'mv':mviewer , 'mviewer':json.dumps(jmviewer)})


def onoff_layers(user, topics):
    vis_dict = {}
    perm_dict={}
    for top in topics:
        layer_ids = LayerIds.objects.filter(topic=top)
        lay_dict = {}
        for e in layer_ids:
            layer = get_object_or_404(Layer, id=e.layer_id)
            if user.has_perm('download_resourcebase', layer.get_self_resource()):
                perm_dict[layer.id]= True
            visible = e.visible
            st_order = e.stack_order
            lay_dict[str(e.layer_id)+'r'+str(st_order)] = visible
        vis_dict[top.id] = lay_dict
    return vis_dict, perm_dict


@login_required
def mviewer_detail(request, mv_id):
    mviewer = get_object_or_404(MViewer, id=mv_id)
    topics = Topic.objects.filter(mviewer=mv_id).order_by('stack_order')
    config = ConfigureObjectSOA.objects.filter(mviewer=mv_id)
    wms_services = WmsService.objects.all()
    mviewer_wms = mviewer.wms_services.all()
    wms_form = WmsServiceForm()
    sty_dict = {}

    cat = cat_connect()
    top_index = 1
    for top in topics:
        # Actualiza los campos de LayerIds
        top_lays = LayerIds.objects.filter(topic=top).order_by('stack_order')
        index = 1
        for lay in top_lays:
            layer = get_object_or_404(Layer, id=lay.layer_id)
            lay.name = layer.typename
            lay.title = layer.title
            lay.stack_order = index
            gslayer = cat.get_layer(layer.typename)
            #lay.style = gslayer.default_style.name
            lay.default_style = gslayer.default_style.name
            lay.save()
            index += 1

            if gslayer._get_alternate_styles():
                layer_styles = []
                for e in gslayer._get_alternate_styles():
                    layer_styles.append(e.name)
                sty_dict[gslayer.name] = layer_styles
        top.stack_order=top_index
        top.save()
        top_index += 1

    return render(request, 'mviewer_detail.html',{
        'mviewer': mviewer,
        'wms_services': wms_services,
        'mviewer_wms': mviewer_wms,
        'topics': topics,
        'tools': config,
        'wms_form': wms_form,
        'sty_dict': json.dumps(sty_dict)})


@login_required
def mviewer_remove(request, mv_id, template='mviewer_remove.html'):
    mviewer = get_object_or_404(MViewer, id=mv_id)
    if request.method == 'GET':
        return render(request, template, {'mviewer': mviewer})
    if request.method == 'POST':
        mviewer.delete()
        return HttpResponseRedirect(reverse("mviewer_list"))
    else:
        return HttpResponse("Not allowed", status=403)


def microviewer(request, url_id):
    dir_conf = {}
    mviewer = get_object_or_404(MViewer, url_id=url_id)
    try:
        mviewer_header = get_object_or_404(MviewerHeader, mviewer=mviewer)
    except:
        mviewer_header = None
    configure_tool = ConfigureObjectSOA.objects.filter(mviewer=mviewer.id)
    soa = SpatialObject.objects.filter(general_tool=0)
    conf_specific = ConfigureObjectSOA.objects.filter(tool__in=soa).filter(mviewer=mviewer.id).order_by('tool')
    general_tool_count = ConfigureObjectSOA.objects.filter(mviewer=mviewer.id).filter(tool__general_tool=True).count()

    size = 0
    for con in configure_tool:
        size = size + 1

    for spec in conf_specific:
        list_conf = []
        list_conf.append(spec.tool.constant)
        list_conf.append(spec.tool.icon)
        list_conf.append(spec.tool.title+", "+spec.tool.description)
        dir_conf[spec.tool.id]=list_conf
    topics = Topic.objects.filter(mviewer=mviewer.id).order_by('stack_order')
    tlay_ids = []

    for top in topics:
        tlay_ids += top.layer_ids.values_list('id', flat=True).distinct()
    list_set = set(tlay_ids)
    lays_ids = (list(list_set))
    lays = Layer.objects.filter(id__in=lays_ids)
    user = request.user
    vis_dict, perm_dict = onoff_layers(user, topics)
    gjson = {}

    if mviewer.config:
        basemap = mviewer.config
    else:
        basemap = 'stamenTerrain'

    if 'Original' in mviewer.template_style:
        template = 'mviewer.html'
    elif 'Alternativo' in mviewer.template_style:
        template = 'mviewerAlt.html'
    else:
        template = 'mviewer.html'

    if mviewer.layer_mask:
        wfs_url = ogc_server_settings.public_url + 'wfs?'
        identifier = mviewer.layer_mask.typename.encode('utf-8')

        params = {
            'service': 'WFS',
            'version': '1.0.0',
            'request': 'GetFeature',
            'typename': identifier,
            'outputFormat': 'json',
            'srs': 'EPSG:4326',
        }
        dwn_url = wfs_url + urllib.urlencode(params)
        gjson_layer = urllib2.urlopen(dwn_url).read()
        gjson['gjson_layer']= gjson_layer

    wms_services = mviewer.wms_services.all

    return render(request, template, {
        'mviewer': mviewer,
        'mviewer_header':mviewer_header,
        'topics': topics,
        'configure_tool': configure_tool,
        'gen_tool_count': general_tool_count,
        'conf_specific':json.dumps(dir_conf),
        'size': size,
        'lays': lays,
        'wms_services': wms_services,
        'vis_dict':json.dumps(vis_dict),
        'perm_dict':json.dumps(perm_dict),
        'basemap':json.dumps(basemap),
        'layer_mask':json.dumps(gjson),
        'sentinel': SENTINEL_LAYERS
    })


def topic_create(request, mv_id):
    if request.method == 'POST':
        topic_form = TopicForm(request.POST, request.FILES)
        if topic_form.is_valid():
            num = Topic.objects.filter(mviewer=mv_id).count()
            if num >= 7:
                try:
                    mv = get_object_or_404(MViewer, id=mv_id)
                    if mviewer.template_style == 'Alternativo':
                        if num > 50:
                            return HttpResponse('Limite excedido')
                    else:
                        if mv.is_vertical != True: # solamente si el panel no esta activado puedes pasar el límite de tematicas
                                return HttpResponse('Limite excedido')
                        else:
                            if num > 20:# vamos a poner un límite de 15 tematicas para el panel izquierdo
                                return HttpResponse('Limite excedido')
                except:
                    pass
            index = num + 1
            new_topic = topic_form.save(commit=False)
            new_topic.mviewer = get_object_or_404(MViewer, id=mv_id)
            new_topic.stack_order = index
            new_topic.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_id]))
    else:
        topic_form = TopicForm()

    return render(request, 'topic_metadata.html', {'form': topic_form, 'mvid':mv_id})


def topic_metadata(request, mv_id, top_id):
    topic = get_object_or_404(Topic, id=top_id)
    if request.method == 'POST':
        topic_form = TopicForm(request.POST, request.FILES, instance=topic)
        if topic_form.is_valid():
            topic_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_id]))
    else:
        topic_form = TopicForm(instance=topic)
    return render(request, 'topic_metadata.html', {'form': topic_form, 'mvid':mv_id})


def topic_remove(request, mv_id, top_id):
    if request.is_ajax():
        topic = get_object_or_404(Topic, id=top_id)        
        topic.delete()
        return HttpResponse(json.dumps({'ok':'ok'}))
    else:
        return HttpResponse("Not allowed", status=403)


def edit_layer_narrative(request, mv_id, reg_id):
    layerid = get_object_or_404(LayerIds, id=reg_id)
    if request.method == 'POST':
        layerid_form = LayerNarrativeForm(request.POST, instance=layerid)
        if layerid_form.is_valid():
            layerid_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_id]))
    else:
        layerid_form = LayerNarrativeForm(instance=layerid)
    return render(request, 'layer_narrative.html', {'form': layerid_form, 'mvid': mv_id, 'layerid':layerid})


def add_layer_markers(request, mv_id, reg_id):
    layerid = get_object_or_404(LayerIds, id=reg_id)
    mviewer = get_object_or_404(MViewer, id=mv_id)
    marker_narrative_form = MarkerNarrativeForm()
    marker_icon_form = MarkerIconForm()
    markers = layerid.markers.all()
    markers_dict = []

    for m in markers:
        if m.options:
            options = json.loads(m.options)
            color = options['color']
            if 'shape' in options:
                shape = options['shape']
            else:
                shape = 'circle'
            if 'transparent' in options:
                transparent = options['transparent']
            else:
                transparent = 'false'
        else:
            color = '#df1e1e'
            shape = 'circle'
            transparent = 'false'
        markers_dict.append({'id': m.id, 'lat': str(m.lat), 'lng': str(m.lng), 'title': m.title, 'narrative': m.narrative,
                             'icon': str(m.icon), 'color': color, 'shape': shape, 'transparent': transparent})

    lay_data = {
        'id': layerid.id,
        'name': layerid.name,
        'style': layerid.style,
        'ows': layerid.layer.ows_url
    }

    return render(request, 'layerid_markers.html', {
        'layer': layerid.layer,
        'mviewer': mviewer,
        'form': marker_narrative_form,
        'icon_form': marker_icon_form,
        'mvid': mv_id,
        'layerid': json.dumps(lay_data),
        'markers': json.dumps(markers_dict)
    })


### Vistas para Ajax ###
def add_topic_layers(request):
    if request.is_ajax():
        add_data = json.loads(request.POST['add_data'])
        topic_id = add_data['topic_id']
        id_list = add_data['id_list']
        added_ids = {}
        ap = []
        lay_styles = []
        topic = get_object_or_404(Topic, id=topic_id)
        top_elem = LayerIds.objects.filter(topic=topic)
        index = len(top_elem)+1
        cat = cat_connect()

        for id in id_list:
            lay = get_object_or_404(Layer, id=id)
            r = LayerIds(topic=topic, layer=lay, name=lay.typename)
            r.title = lay.title
            r.stack_order = index
            gslayer = cat.get_layer(lay.typename)
            r.style = gslayer.default_style.name
            r.default_style = gslayer.default_style.name
            r.save()
            for e in gslayer._get_alternate_styles():
                lay_styles.append(e.name)

            added_ids[lay.name] = {'layer_id': id, 'st_order': index, 'style': r.style, 'reg_id' : r.id, 'styles': lay_styles, 'name': r.name }
            ap.append(id)
            index += 1

        return HttpResponse(json.dumps(added_ids), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def remove_topic_layer(request):
    if request.is_ajax():
        rmv_data = json.loads(request.POST['rmv_data'])
        reg_id = rmv_data['reg_id']
        r = get_object_or_404(LayerIds, id=reg_id)
        r.delete()

        return HttpResponse(json.dumps({'ok':'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def set_layer_style(request):
    if request.is_ajax():
        data = json.loads(request.POST['data'])
        reg_id = data['reg_id']
        style_select = data['style_select']
        r = get_object_or_404(LayerIds, id=reg_id)
        r.style = style_select
        r.save()

        return HttpResponse(json.dumps({'ok':'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def tlayer_on(request):
    if request.is_ajax():
        data = json.loads(request.POST['data'])
        reg_id = data['reg_id']
        topic_layer = get_object_or_404(LayerIds, id=reg_id)
        topic_layer.visible = True
        topic_layer.save()

        return HttpResponse(json.dumps({'ok':'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def tlayer_off(request):
    if request.is_ajax():
        data = json.loads(request.POST['data'])
        reg_id = data['reg_id']
        topic_layer = get_object_or_404(LayerIds, id=reg_id)
        topic_layer.visible = False
        topic_layer.save()

        return HttpResponse(json.dumps({'ok':'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def sort_topic(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            topic = get_object_or_404(Topic, id=int(e))
            topic.stack_order = st_order
            topic.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def sort_layer(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            layer = get_object_or_404(LayerIds, id=int(e))
            layer.stack_order = st_order
            layer.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def has_layer_tool(request):
    if request.is_ajax():
        regid = request.GET['regid']
        r = get_object_or_404(LayerIds, id=regid)
        tools_flag = r.sos_layers_mv.all().exists()
        markers_flag = r.markers.all().exists()
        narrative_flag = False
        if r.narrative:
            narrative_flag = True

        flags_dict = {'tflag': tools_flag, 'nflag': narrative_flag, 'mflag': markers_flag}

        return HttpResponse(json.dumps(flags_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def get_layer_narrative(request):
    if request.is_ajax():
        regid = request.GET['regid']
        r = get_object_or_404(LayerIds, id=regid)
        narrative = r.narrative

        return HttpResponse(json.dumps(narrative), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def add_layerid_marker(request):
    if request.is_ajax():
        regid = request.GET['regid']
        lat = request.GET['lat']
        lng = request.GET['lng']

        marker = LayeridMarker(lat=lat, lng=lng)
        marker.save()
        r = get_object_or_404(LayerIds, id=regid)
        r.markers.add(marker)

        return HttpResponse(json.dumps(marker.id), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def remove_layerid_marker(request):
    if request.is_ajax():
        regid = request.GET['regid']
        marker_id = request.GET['marker_id']

        marker = get_object_or_404(LayeridMarker, id=marker_id)
        r = get_object_or_404(LayerIds, id=regid)
        r.markers.remove(marker)
        marker.delete()

        return HttpResponse(json.dumps(marker_id), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def add_marker_narrative(request):
    if request.is_ajax():
        title = request.POST['title']
        content = request.POST['content']
        marker_id = request.POST['marker_id']

        marker = get_object_or_404(LayeridMarker, id=marker_id)
        marker.title = title
        marker.narrative = content
        marker.save()

        return HttpResponse(json.dumps('EXITO'), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def change_marker_position(request):
    if request.is_ajax():
        markid = request.GET['markid']
        lat = request.GET['lat']
        lng = request.GET['lng']
        marker = get_object_or_404(LayeridMarker, id=markid)
        marker.lat = lat
        marker.lng = lng
        marker.save()

        return HttpResponse(json.dumps('EXITO'), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def change_icon_marker(request):
    if request.is_ajax():
        marker_id = request.POST['marker_id']
        icon = request.POST['icon']
        color = request.POST['color']
        shape = request.POST['shape']
        transparent = request.POST['transparent']

        marker = get_object_or_404(LayeridMarker, id=marker_id)
        marker.icon = icon
        marker.options = json.dumps({'color': color, 'shape': shape, 'transparent': transparent})
        marker.save()

        return HttpResponse(json.dumps('EXITO'), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def layerid_markers(request):
    if request.is_ajax():
        regid = request.GET['regid']
        layerid = get_object_or_404(LayerIds, id=regid)
        markers = layerid.markers.all()
        markers_dict = []

        for m in markers:
            if m.options:
                options = json.loads(m.options)
                color = options['color']
                if 'shape' in options:
                    shape = options['shape']
                else:
                    shape = 'circle'
                if 'transparent' in options:
                    transparent = options['transparent']
                else:
                    transparent = 'false'
            else:
                color = '#df1e1e'
                shape = 'circle'
                transparent = 'false'
            markers_dict.append({'id': m.id, 'lat': str(m.lat), 'lng': str(m.lng), 'title': m.title, 'narrative': m.narrative,
                                 'icon': str(m.icon), 'color': color, 'shape': shape, 'transparent': transparent})

        return HttpResponse(json.dumps(markers_dict), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")

@login_required
def upload_mviewer_header(request, mv_id):
    mviewer = MViewer.objects.get(id=mv_id)
    if request.method == 'POST':
        header_form = MviewerHeaderForm(request.POST, request.FILES)
        if header_form.is_valid():
            temp = header_form.save(commit=False)
            temp.mviewer = mviewer
            temp.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_id]))
    else:
        header_form = MviewerHeaderForm()
    return render(request, 'mviewer_header.html',{'form':header_form,'mviewer':mviewer})


@login_required
def edit_mviewer_header(request, header_id):
    header = MviewerHeader.objects.get(id=header_id)
    if request.method == 'POST':
        header_form = MviewerHeaderForm(request.POST, request.FILES, instance=header)
        if header_form.is_valid():
            header_form.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[header.mviewer.id]))
    else:
        header_form = MviewerHeaderForm(instance=header)
    return render(request, 'mviewer_header.html',{'form':header_form,'header':header}) 


@login_required
def create_text_topic(request, mv_id):
    mv_instance = MViewer.objects.get(id=mv_id)
    if request.method == 'POST':
        topicForm = TopicTextForm(request.POST, request.FILES)
        if topicForm.is_valid():
            tmp = topicForm.save(commit=False)
            tmp.mviewer = mv_instance
            tmp.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[mv_instance.id]))
    else:
        topicForm = TopicTextForm()

    return render(request, 'topic_text.html', {'form': topicForm, 'mvid': mv_instance.id})


@login_required
def update_text_topic(request, topictext_id):
    topic_text_instance = TopicText.objects.get(id=topictext_id)
    if request.method == 'POST':
        topicForm = TopicTextForm(request.POST, request.FILES, instance=topic_text_instance)
        if topicForm.is_valid():
            topicForm.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[topic_text_instance.mviewer.id]))
    else:
        topicForm = TopicTextForm(instance=topic_text_instance)

    return render(request, 'topic_text.html', {'form': topicForm, 'mvid': topic_text_instance.mviewer.id})

@login_required
def delete_text_topic(request, topictext_id):
    mviewer_id = TopicText.objects.get(id=topictext_id).mviewer.id
    TopicText.objects.get(id=topictext_id).delete()

    return HttpResponseRedirect(reverse('mviewer_detail', args=[mviewer_id]))


@login_required
def create_text_topic_item(request, topictext_id):
    topic_text_instance = TopicText.objects.get(id=topictext_id)
    if request.method == 'POST':
        topicForm = TopicTextItemForm(request.POST, request.FILES)
        if topicForm.is_valid():
            tmp = topicForm.save(commit=False)
            tmp.topic_text = topic_text_instance
            tmp.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[topic_text_instance.mviewer.id]))
    else:
        topicForm = TopicTextItemForm()

    return render(request, 'topic_text_item.html', {'form': topicForm, 'mvid': topic_text_instance.mviewer.id})


@login_required
def update_text_topic_item(request, topictextitem_id):
    topic_text_instance = TopicTextItems.objects.get(id=topictextitem_id)
    if request.method == 'POST':
        topicForm = TopicTextItemForm(request.POST, request.FILES, instance=topic_text_instance)
        if topicForm.is_valid():
            topicForm.save()
            return HttpResponseRedirect(reverse('mviewer_detail', args=[topic_text_instance.topic_text.mviewer.id]))
    else:
        topicForm = TopicTextItemForm(instance=topic_text_instance)

    return render(request, 'topic_text_item.html', {'form': topicForm, 'mvid': topic_text_instance.topic_text.mviewer.id})

@login_required
def delete_text_topic_item(request, topictextitem_id):
    mviewer_id = TopicTextItems.objects.get(id=topictextitem_id).topic_text.mviewer.id
    TopicTextItems.objects.get(id=topictextitem_id).delete()

    return HttpResponseRedirect(reverse('mviewer_detail', args=[mviewer_id]))

def sort_text_topic(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            topic = get_object_or_404(TopicText, id=int(e))
            topic.stack_order = st_order
            topic.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), mimetype="application/json")
    else:
        return HttpResponse("Not ajax request")

def sort_text_topic_item(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            topic = get_object_or_404(TopicTextItems, id=int(e))
            topic.stack_order = st_order
            topic.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), mimetype="application/json")
    else:
        return HttpResponse("Not ajax request") 