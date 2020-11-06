from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^getCoverageCensus/$', views.getCoverageCensus, name='getCoverageCensus'),
    url(r'^getCategorysCensus/$', views.getCategorysCensus, name='getCategorysCensus'),
    url(r'^getConfigurationCensus/$', views.getConfigurationCensus, name='getConfigurationCensus'),
    url(r'^getSubjectsCenus/$', views.getSubjectsCenus, name='getSubjectsCenus'),
    url(r'^getTheme_numberCensus/$', views.getTheme_numberCensus, name='getTheme_numberCensus'),
    url(r'^getThemeCensus/$', views.getThemeCensus, name='getThemeCensus'),
    url(r'^getSubtopicsCensus/$', views.getSubtopicsCensus, name='getSubtopicsCensus'),
    url(r'^getTematizer_nationalCensus/$', views.getTematizer_nationalCensus, name='getTematizer_nationalCensus'),
    url(r'^getTem_NNCensus/$', views.getTem_NNCensus, name='getTem_NNCensus'),
    url(r'^getTematizerStatal_Census/$', views.getTematizerStatal_Census, name='getTematizerStatal_Census'),
    url(r'^getTSN_Census/$', views.getTSN_Census, name='getTSN_Census'),
    url(r'^getTematizer_Census/$', views.getTematizer_Census, name='getTematizer_Census'),
    url(r'^getTematizerNumber_Census/$', views.getTematizerNumber_Census, name='getTematizerNumber_Census'),
]
