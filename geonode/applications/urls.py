from django.conf.urls import include, url
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.contrib import admin

import geonode.proxy.urls

from . import views

js_info_dict = {
    'packages': ('geonode.applications',),
}

urlpatterns = [
    # APPS
    url(r'^destination_exp/', include('geonode.apps.destination_exp.urls')),
    url(r'^fuero_comun/', include('geonode.apps.mugs.urls')),
    url(r'^farming/', include('geonode.apps.farming_siap.urls')),
    url(r'^lidar/', include('geonode.apps.lidar.urls')),
    url(r'^create_app/$', views.create_app, name='create_app'),
]
