from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

js_info_dict = {
    'packages': ('geonode.interactive.alf_census',),
}

urlpatterns = [

    # 2010 Census
    url(r'^subtopics/', views.c10_subtopics, name='c10_subtopics'),
    url(r'^subtopic_fields/', views.subtopic_fields, name='subtopic_fields'),
    url(r'^data/', views.c10_data, name='c10_data'),
]
