from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

js_info_dict = {
    'packages': ('geonode.interactive.intercensal',),
}

urlpatterns = [

    # Intercensus Poll
    url(r'^polls_list/', views.polls_list, name='polls_list'),
    url(r'^poll_data/', views.poll_data, name='poll_data'),
    url(r'^poll_attr/', views.poll_attr, name='poll_attr'),
    url(r'^poll_attr_value/', views.poll_attr_value, name='poll_attr_value'),
    url(r'^dwn_links/', views.dwn_links, name='dwn_links'),
    # Intercensal Datatables
    url(r'^$', views.custom_tables_list, name='custom_tables_list'),
    url(r'^upload_custom/', views.datatables_upload_custom, name='tables_upload_custom'),
    url(r'^customtables_remove/<ct_id>/', views.customtables_remove, name='customtables_remove'),
    url(r'^customtables_metadata/<ct_id>/', views.customtables_metadata, name='customtables_metadata'),
    url(r'^select_cfilter/<ct_id>/', views.select_cfilter, name='select_cfilter'),
]
