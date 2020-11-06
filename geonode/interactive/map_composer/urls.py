from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views 

js_info_dict = {
    'packages': ('geonode.interactive.map_composer',),
}

urlpatterns = [
    url(r'^$', views.composer, name='composer'),
    url(r'^(?P<mapid>[^/]+)/view$', views.composer_view, name='composer_view'),
]