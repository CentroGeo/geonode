from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # Intersecctions Pie graphic
    url(r'^get_constants_soa/$', views.get_constants_tools_map_tool, name='get_constants_tools_map_tool'),
    url(r'^sbp_tool/$', views.search_base_polygons_tool, name='search_base_polygons_tool'),
    url(r'^get_bbox_tool/$', views.get_bbox_tool, name='get_bbox_tool'),
    url(r'^get_gjbynl/$', views.get_geoJson_by_name_layer_tool, name='get_geoJson_by_name_layer_tool'),
]
