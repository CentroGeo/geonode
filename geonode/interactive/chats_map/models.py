#encoding:utf-8
"""
Este modelo fue creado para agregar una hacer un comentario a un mapa agregando una imgan goereferenciada y una URL y 
hacer que ese comentario se pueda convertir en un chat para esa seccion
"""

from django.db import models
from django.core.validators import URLValidator
from django.contrib.gis.db import models
from django.conf import settings

from geonode.maps.models import Map

class Chat(models.Model):
	maps = models.ForeignKey(Map, related_name='chats_maps', verbose_name = "Mapas relacionados", null=True, blank=True,
                            on_delete=models.CASCADE)
	parent_chat = models.ForeignKey('self', on_delete=models.CASCADE, verbose_name = "Chat", related_name='children', null=True, blank=True)
	user_chat = models.ForeignKey(settings.AUTH_USER_MODEL, related_name = "user_chat", null=True, blank=True,
                                on_delete=models.CASCADE)
	comments = models.TextField(verbose_name='Comentario', max_length=1000, help_text='Ingresa tu comentario', null=True, blank=True)
	image = models.ImageField(verbose_name = "Imagen", help_text='Adjuntar foto', upload_to="images/chats-map/", null=True, blank=True)
	url = models.CharField(validators=[URLValidator()], max_length=100, null=True, blank=True, help_text='Ingresa una URL')
	location = models.PointField(srid=4326, null=True, blank=True)
	status = models.BooleanField(verbose_name = "Estaus", default=1)
	creation_date = models.DateTimeField(auto_now_add=True)

	def sorted_chats(self):
		return self.children.all().order_by('id')

	def __unicode__(self):
		return self.comments

class ReplyChat(models.Model):
    chat = models.ForeignKey(Chat, verbose_name = "Chat", related_name='chats_reply', null=True, blank=True,
                            on_delete=models.CASCADE)
    user_reply = models.ForeignKey(settings.AUTH_USER_MODEL, related_name = "user_reply", null=True, blank=True,
                            on_delete=models.CASCADE)
    comments = models.TextField(verbose_name='Comentario', max_length=1000)
    image = models.ImageField(verbose_name = "Imagen", help_text='Imágen', upload_to="images/chats-map/", null=True, blank=True)
    url = models.CharField(validators=[URLValidator()], max_length=100, null=True, blank=True)
    status = models.BooleanField(verbose_name = "Estaus")
    creation_date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.comments
class LikeChat(models.Model):
    chat = models.ForeignKey(Chat, verbose_name = "Chat", related_name='like_chat', null=True, blank=True,
                            on_delete=models.CASCADE)
    user_like = models.ForeignKey(settings.AUTH_USER_MODEL, related_name = "user_like", null=True, blank=True,
                                on_delete=models.CASCADE)
    is_like = models.BooleanField(verbose_name = "like")
    creation_date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.is_like
