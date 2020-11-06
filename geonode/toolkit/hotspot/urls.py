from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^hotspot_tool/$', views.hotspot_tool, name='hotspot_tool'),
]
