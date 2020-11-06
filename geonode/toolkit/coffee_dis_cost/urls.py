from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # configure tools
    url(r'^calcula/$', views.calcula, name='calcula'),
    url(r'^recalcula/$', views.recalcula, name='recalcula'),
    url(r'^caldif/$', views.caldif, name='caldif'),
    url(r'^addnode/$', views.addnode, name='addnode'),
    url(r'^rallnodes/$', views.rallnodes, name='rallnodes'),
]
