from django.conf.urls import url
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

from . import views

js_info_dict = {
    'packages': ('geonode.contrib.datatables',),
}

urlpatterns = [
                       url(r'^api/upload/?$', views.datatable_upload_api, name='datatable_upload_api'),
                       url(r'^api/upload_and_join/?$', views.datatable_upload_and_join_api, name='datatable_upload_and_join_api'),
                       url(r'^api/upload_lat_lon/?$', views.datatable_upload_lat_lon_api, name='datatable_upload_lat_lon_api'),
                       url(r'^api/join/(?P<tj_id>\d+)/$', views.tablejoin_detail, name='tablejoin_detail'),
                       url(r'^api/join/(?P<tj_id>\d+)/remove$', views.tablejoin_remove, name='tablejoin_remove'),
                       url(r'^api/join/?$', views.tablejoin_api, name='tablejoin_api'),
                       url(r'^api/jointargets/?$', views.jointargets, name='jointargets'),
                       url(r'^api/(?P<dt_id>\d+)/$', views.datatable_detail, name='datatable_detail'),
                       url(r'^api/(?P<dt_id>\d+)/remove$', views.datatable_remove, name='datatable_remove'),
                       # Agregadas al API original
                       url(r'^$',
                           TemplateView.as_view(template_name='tables_list.html'), name='tables_browse'),
                       url(r'^upload/?$', views.datatables_upload, name='tables_upload'),
                       url(r'^(?P<dt_id>\d+)/?$', views.datatables_detail, name='datatables_detail'),
                       url(r'^(?P<dt_id>[^/]*)/metadata$', views.datatables_metadata, name="datatables_metadata"),
                       url(r'^(?P<dt_id>\d+)document_info_metadata$', views.datatables_info_metadata,
                           name='datatables_info_metadata'),
                       url(r'^(?P<dt_id>\d+)/remove$', views.datatables_remove, name="datatables_remove"),
                       url(r'^(?P<dt_id>\d+)/download$', views.datatables_download, name="datatables_download"),
                       url(r'^(?P<dt_id>\d+)/(?P<down_geom>\d+)/download$', views.datatables_download, name="datatables_download"),
                       url(r'^(?P<dt_id>\d+)/join$', views.datatables_join, name="datatables_join"),
                       url(r'^(?P<dt_id>\d+)/(?P<la_attr>\w+)/(?P<ta_attr>\w+)/change$', views.datatables_change_attr, name="datatables_change_attr"),
]
