#########################################################################
#This class is for tools configurate, by any Map, Layer or vwiver
#first step of configure tools is full spatial_tool with any unique contant
# second you must add ConfigurateSOS for any details.
# In this url.py you can find all the tools.
#and you will able add other tools.
#########################################################################

from django.conf.urls import include, url
from django.urls import path
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
    # configure tools
    url(r'^$', views.config_tool, name='config_tool'),
    url(r'^upload_tool/$', views.upload_tool, name='upload_tool'),
    url(r'^upd_tool/(?P<st_id>\d+)$', views.update_tool, name='update_tool'),
    url(r'^drop_st/(?P<st_id>\d+)$', views.delete_tool, name='delete_tool'),
    url(r'^upload_conf/(?P<st_id>\d+)$', views.upload_configure, name='upload_configure'),
    url(r'^upd_conf/(?P<conf_id>\d+)$', views.update_configure, name='update_configure'),
    url(r'^drop_conf/(?P<conf_id>\d+)$', views.delete_configure, name='delete_configure'),
    path('upload_confmw/<int:mw_id>', views.upload_configure_mviewer, name='upload_configure_mviewer'),
    url(r'^drop_confmw/(?P<mw_id>\d+)/(?P<conf_id>\d+)$', views.delete_configure_mviewer, name='delete_configure_mviewer'),
    url(r'^upldate_confmw/(?P<mw_id>\d+)/(?P<conf_id>\d+)$', views.update_configure_mviewer, name='update_configure_mviewer'),
    url(r'^get_constants_tools_by_id/$', views.get_constants_tools_by_id, name='get_constants_tools_by_id'),
    url(r'^set_tool_map/$', views.set_charting_tool_map, name='set_charting_tool_map'),
    url(r'^get_tool_map/$', views.get_charting_tool_map, name='get_charting_tool_map'),
    #url(r'^set_charting_tool/$', views.set_charting_tool, name='set_charting_tool'),
    url(r'^upload_confLayer/(?P<mw_id>\d+)/(?P<layer_id>\d+)$', views.upload_configure_layer, name='upload_configure_layer'),
    # Tools
    path('intersection/', include('geonode.toolkit.intersection.urls')),
    path('stats/', include('geonode.toolkit.statistics.urls')),
    path('control_area/', include('geonode.toolkit.control_area.urls')),
    path('coffee_dis_cost/', include('geonode.toolkit.coffee_dis_cost.urls')),
    path('wms/', include('geonode.toolkit.wms.urls')),
    path('hotspot/', include('geonode.toolkit.hotspot.urls')),
    path('census_tool/', include('geonode.toolkit.census_tool.urls')),
]
