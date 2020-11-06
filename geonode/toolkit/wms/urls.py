#########################################################################
#This class is for tools configurate, by any Map, Layer or vwiver
#first step of configure tools is full spatial_tool with any unique contant
# second you must add ConfigurateSOS for any details.
# In this url.py you can find all the tools.
#and you will able add other tools.
#########################################################################

from django.conf.urls import include, url
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.contrib import admin

import geonode.proxy.urls

from . import views

js_info_dict = {
    'packages': ('geonode.toolkit',),
}

urlpatterns = [
    url(r'^save_wms/?$', views.save_wms, name='save_wms'),
    url(r'^remove_wms_layer/$', views.remove_wms_layer, name='remove_wms_layer'),
    #url(r'^wms_selected/?$', views.wms_selected, name='wms_selected'),
    url(r'^select_wmslayer/?$', views.select_wmslayer, name='select_wmslayer'),
    url(r'^external_wms_toolkit/?$', views.external_wms_toolkit, name='external_wms_toolkit'), #OBTENER LAYERS DE WMS
]
