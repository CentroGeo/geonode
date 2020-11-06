from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # getAnalysisCensus
    url(r'^getAnalysisCensus/$', views.getAnalysisCensus, name='getAnalysisCensus'),
    url(r'^getNivelSpatialObject/$', views.getNivelSpatialObject, name='getNivelSpatialObject'),
    url(r'^getAnalisys/$', views.getAnalisysPerClvedo, name='getAnalisysPerClvedo'),
    url(r'^conf_tool/(?P<mw_id>\d+)/(?P<conf_id>\d+)$', views.configure_tool, name='configure_tool'),
    url(r'^getMKY/$', views.getMultiKeyAC, name='getMultiKeyAC'),
    url(r'^getMKYF/$', views.getMultiKeyACFarm, name='getMultiKeyACFarm'),
    url(r'^configure_tool_upload/(?P<mw_id>\d+)/(?P<conf_id>\d+)$', views.configure_tool_upload, name='configure_tool_upload'),
    url(r'^getMKYC/$', views.getMultiKeyACCrops, name='getMultiKeyACCrops'),
    url(r'^getMKYFor/$', views.getMultiKeyACForest, name='getMultiKeyACForest'),
]
