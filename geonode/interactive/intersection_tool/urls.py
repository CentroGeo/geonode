from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # Intersecctions Pie graphic
    url(r'^get_constants_tools_map/$', views.get_constants_tools_map, name='get_constants_tools_map'),
    url(r'^search_base_polygons/$', views.search_base_polygons, name='search_base_polygons'),
    url(r'^get_bbox/$', views.get_bbox, name='get_bbox'),
    url(r'^get_geoJson_by_name_layer/$', views.get_geoJson_by_name_layer, name='get_geoJson_by_name_layer'),
]
