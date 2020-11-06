from django.conf.urls import include, url
from django.views.generic import TemplateView

from . import views

js_info_dict = {
    'packages': ('geonode.interactive.chats_map',),
}

urlpatterns = [

    # Chats Maps
    url(r'^save_chat_response/$', views.save_chat_response, name='save_chat_response'),
    url(r'^save_chat_reply/$', views.save_chat_reply, name='save_chat_reply'),
    url(r'^delete_reponse/$', views.delete_reponse, name='delete_reponse'),
    url(r'^delete_chat/$', views.delete_chat, name='delete_chat'),
    url(r'^save_like_chat/$', views.save_like_chat, name='save_like_chat'),

]
