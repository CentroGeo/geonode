from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

js_info_dict = {
    'packages': ('geonode.interactive.alf_census',),
}

urlpatterns = [

    # ALF Census Layers
    url(r'^alf_layers_list/', views.alf_layers_list, name='alf_layers_list'),
    url(r'^census_data/', views.census_data, name='census_data'),
    url(r'^census_attr/', views.census_attr, name='census_attr'),
    url(r'^census_attr_value/', views.census_attr_value, name='census_attr_value'),
    # ALF Datatables
    url(r'^$', views.alf_tables_list, name='alf_tables_list'),
    url(r'^alf_tables_upload/', views.alf_tables_upload, name='alf_tables_upload'),
    url(r'^alf_tables_remove/<ct_id>/', views.alf_tables_remove, name='alf_tables_remove'),
    url(r'^alf_tables_metadata/<ct_id>/', views.alf_tables_metadata, name='alf_tables_metadata'),
    url(r'^alf_cfilter/<ct_id>/', views.alf_cfilter, name='alf_cfilter'),
]
