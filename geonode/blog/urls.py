from django.urls import path

from . import views

js_info_dict = {
    'packages': ('geonode.blog',),
}

urlpatterns = [
    path('', views.blog_index, name='blog'),
    path('topics/', views.blog_topics, name='blog_topics'),
    path('topic/<slug>/', views.blog_topic_detail, name='blog_topic_detail'),
    path('<slug>/', views.blog_post, name='blog_post'),
    #Admin
    path('admin/', views.blog_admin, name='blog_admin'),
    path('admin/post', views.blog_post_add, name='blog_post_add'),
    path('admin/post/<id>/', views.blog_post_edit, name='blog_post_edit'),
    path('admin/post/<id>/remove/', views.blog_post_remove, name='blog_post_remove'),
    path('admin/link/', views.blog_link_add, name='blog_link_add'),
    path('admin/link/<id>/', views.blog_link_edit, name='blog_link_edit'),
    path('admin/topic/', views.blog_topic_add, name='blog_topic_add'),
    path('admin/topic/<id>/', views.blog_topic_edit, name='blog_topic_edit'),
    path('admin/topic/<id>/detail/', views.blog_topic_admin, name='blog_topic_admin'),
    path('admin/topic/<id>/remove/', views.blog_topic_remove, name='blog_topic_remove'),
    path('admin/sort_topic/', views.blog_sort_topic, name='blog_sort_topic'),
]
