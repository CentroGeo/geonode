from django.forms import ModelForm, Textarea
from django import forms

from geonode.interactive.chats_map.models import Chat, ReplyChat, LikeChat

class ChatsFormExclude(ModelForm):
  class Meta:
    model = Chat
    exclude = ['location','user_chat','parent_chat','maps','status']
    widgets = {
      'comments': Textarea(attrs={'class': 'textarea_comments','rows':3, 'cols':42, 'placeholder': 'Escribe un comentario...'}),#,'class': 'special'
      'url': Textarea(attrs={'class': 'textarea_comments','rows':1, 'cols':42,'placeholder': 'Ingresa una URL...(Opcional)'}),
      # 'image': Textarea(attrs={'class': 'textarea_comments','rows':1, 'cols':45,'placeholder': 'Selecciona la imagen...'}),
    }

class ReplyChatForm(ModelForm):
  class Meta:
    model = ReplyChat
    fields = '__all__'

class ChatsForm(ModelForm):
  class Meta:
    model = Chat
    fields = '__all__'

class ChatsFormExcludeMap(ModelForm):
  class Meta:
    model = Chat
    exclude = ['location','user_chat','parent_chat','maps','status']
    widgets = {
      'comments': Textarea(attrs={'class': 'textarea_comments','rows':3, 'cols':42, 'placeholder': 'Escribe un comentario...'}),#,'class': 'special'
      'url': Textarea(attrs={'class': 'textarea_comments','rows':1, 'cols':42,'placeholder': 'Ingresa una URL...(Opcional)'}),
      # 'image': Textarea(attrs={'class': 'textarea_comments','rows':1, 'cols':45,'placeholder': 'Selecciona la imagen...'}),
    }

class LikeChatForm(ModelForm):
  class Meta:
    model = LikeChat
    fields = '__all__'
