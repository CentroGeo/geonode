#########################################################################
#
#
#
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
    'packages': ('geonode.interactive',),
}

urlpatterns = [

    # Census urls
    url(r'^intercensal/', include('geonode.interactive.intercensal.urls')),
    url(r'^alf_census/', include('geonode.interactive.alf_census.urls')),
    url(r'^c10census/', include('geonode.interactive.census2010.urls')),
    # Intersecctions Pie graphic
    url(r'^intersection_tool/', include('geonode.interactive.intersection_tool.urls')),
    # Composer
    url(r'^map_composer/', include('geonode.interactive.map_composer.urls')),
    # Chats
    url(r'^chats_map/', include('geonode.interactive.chats_map.urls')),
    url(r'^wms_service/', include('geonode.interactive.wms_service.urls')),
    # Interactive
    url(r'^layers/?$', views.layer_interface, name='layer_interface'),
    url(r'^maps/?$', views.maps_interface, name='maps_interface'),
    url(r'^maps/ajax/$', views.interactive_map, name='interactive_map'),
    url(r'^documents/?$', views.documents_interface, name='documents_interface'),
    #url(r'^projects/?$', views.projects_interface, name='projects_interface'),
    url(r'^interface/layerlink/?$', views.layer_links, name='layer_links'),
    url(r'^visor_map/(?P<mapid>[^/]+)/$', views.visor_map, name='visor_map'),
    # Auxiliar layers URLs
    url(r'^layers/categories?$', views.layers_cat_list, name='layers_cat_list'),
    url(r'^layers/tags?$', views.layers_tags_list, name='layers_tags_list'),
    # Styles manager
    url(r'^layers/styles/symbol?$', views.symbol, name='symbol'),
    url(r'^layers/styles/categorized?$', views.categorized, name='categorized'),
    url(r'^layers/styles/graduated?$', views.graduated, name='graduated'),
    url(r'^layers/styles/raster_graduated?$', views.raster_graduated, name='raster_graduated'),
    url(r'^layers/styles/edit?$', views.edit_style, name='edit_style'),
    url(r'^layers/styles/getGeomType?$', views.getGeomType, name='getGeomType'),
    url(r'^layers/styles/get_raster_bands?$', views.get_raster_bands, name='get_raster_bands'),
    # QuickMap URLs
    url(r'^qmap_data/?$', views.qmap_data, name='qmap_data'),
    url(r'^qmap_thumb/?$', views.qmap_thumbnail, name='qmap_thumbnail'),
    url(r'^save_quickmap/?$', views.save_quickmap, name='save_quickmap'),
    url(r'^delete_quickmap/?$', views.delete_quickmap, name='delete_quickmap'),
    url(r'^<qmapid>/quickmap_embed$', views.quickmap_embed, name='quickmap_embed'),
    url(r'^get_featureinfo/?$', views.get_featureinfo, name='get_featureinfo'),
    url(r'^get_layer_attributes/?$', views.get_layer_attributes, name='get_layer_attributes'),
    url(r'^data_calculator/?$', views.data_calculator, name='data_calculator'),
    url(r'^face/$', views.face_embed, name='face_embed'),
    url(r'^maps/get_csv/$', views.get_csv, name='get_csv'),
    url(r'^maps/get_csv_trimestral/$', views.get_csv_trimestral, name='get_csv_trimestral'),
    url(r'^get_style_perm/$', views.get_style_perm, name='get_style_perm')
]
