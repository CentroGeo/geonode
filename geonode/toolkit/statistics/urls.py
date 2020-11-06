from django.conf.urls import include, url

from . import views

urlpatterns = [
    url(r'^get_attr_stats/$', views.get_attr_stats, name='get_attr_stats'),
    url(r'^get_layer_attr/$', views.get_layer_attr, name='get_layer_attr'),
]
