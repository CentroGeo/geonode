from django.conf.urls import include, url

from . import views

js_info_dict = {
    'packages': ('geonode.interactive.intercensal',),
}

urlpatterns = [
    url(r'^save_wms/?$', views.save_wms_service, name='save_wms_service'),
    url(r'^delete_wms/?$', views.delete_wms, name='delete_wms'),
    url(r'^external_wms/?$', views.external_wms, name='external_wms'),
]
