from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # configure tools
    url(r'^$', views.destination_exp, name='destination_exp'),
    url(r'^export.json$', views.export_json, name='export_json'),
    url(r'^import.json$', views.import_json, name='import_json'),
    url(r'^import_export.json$', views.import_export_json, name='import_export_json'),
    url(r'^products_exp.json$', views.export_products, name='export_products'),
    url(r'^products_imp.json$', views.import_products, name='import_products'),
]