from django.conf.urls import include, url
from django.urls import path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^$', views.config_interface, name='config_interface'),
    url(r'^(?P<id>[-\w]+)$', views.config_interface, name='config_interface'),
]