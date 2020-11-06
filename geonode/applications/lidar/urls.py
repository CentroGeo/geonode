from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # configure tools
    url(r'^$', views.lidar, name='lidar'),
    url(r'^catastro/$', views.catastro, name='catastro'),
]
