import json

from django.contrib.auth.decorators import login_required
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotAllowed, HttpResponseServerError
from geonode.interactive.views import get_user_layers
from geonode.base.models import TopicCategory
from geonode.maps.views import _resolve_map, new_map_config
from django.utils.translation import ugettext as _

from geonode.interactive.wms_service.forms import WmsServiceForm
from geonode.interactive.wms_service.models import WmsService

_PERMISSION_MSG_VIEW = _("You are not allowed to view this map.")


@login_required
def composer(request, template='composer.html'):
    config = new_map_config(request)
    list_category = TopicCategory.objects.all().order_by('gn_description')
    layer_list, dwn_ids = get_user_layers(request.user)
    wms_services = WmsService.objects.all()
    wms_form = WmsServiceForm()
    if isinstance(config, HttpResponse):
        return config
    else:
        return render_to_response(template, RequestContext(request, {
            'config': config,
            'mapid': 0,
            'list_category': list_category,
            'local_layers':layer_list,
            'wms_services': wms_services,
            'wms_form': wms_form
        }))


@login_required
def composer_view(request, mapid, template='composer.html'):

    map_obj = _resolve_map(request, mapid, 'base.view_resourcebase', _PERMISSION_MSG_VIEW)

    config = map_obj.viewer_json(request.user)

    list_category = TopicCategory.objects.all().order_by('gn_description')
    layer_list, dwn_ids = get_user_layers(request.user)
    wms_services = WmsService.objects.all()
    wms_form = WmsServiceForm()

    return render_to_response(template, RequestContext(request, {
        'config': json.dumps(config),
        'mapid': mapid,
        'list_category': list_category,
        'local_layers':layer_list,
        'wms_services': wms_services,
        'wms_form': wms_form
    }))
