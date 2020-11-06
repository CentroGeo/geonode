import json

from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.conf import settings

from geonode.interactive.chats_map.models import Chat, ReplyChat
from geonode.interactive.chats_map.forms import ChatsForm, ReplyChatForm,LikeChatForm
from geonode.people.models import Profile

def save_chat_reply(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_chat=query_data['id_comment']
        comments=query_data['chat']
        url=query_data['url']
        creation_date = request.POST.get('timestamp', False)
        image=query_data['img']
        try:
        	user_id = 1
        	if request.user.is_authenticated():
        		user_id = request.user.id
        		path = settings.MEDIA_ROOT+"/images/chats-map/"
	        	reply_form = ReplyChatForm({'chat':id_chat,'user_reply':user_id,'comments': comments,'image':path,'url':url, 'status':1,'creation_date':creation_date})
	        	if reply_form.is_valid():
	        		obj_reply = reply_form.save()
        	return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except Chat.DoesNotExist:
        	print("Error No existe el objeto")
        	return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def save_chat_response(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        chat=query_data['id_chat']
        comments=query_data['comment']
        user_fb=query_data['user_fb']
        creation_date = request.POST.get('timestamp', False)
        try:
            user_id = 1
            if request.user.is_authenticated():
                user_id = request.user.id
            else:
                us = Profile.objects.filter(username = user_fb)
                if us:
                    user_id = us[0].id
                else:
                    us_saving_face = Profile(username = user_fb, facebook_access = True)
                    us_saving_face.save()
                    us_fb = Profile.objects.filter(username = us_saving_face.username)
                    if us_fb:
                        user_id = us_fb.id
                        print("i have user id of facebook")
                    else:
                        print("i do not found de user facebooke")
            reply_form = ReplyChatForm({'chat':chat,'user_reply':user_id,'comments': comments,'status':1,'creation_date':creation_date})
            if reply_form.is_valid():
                reply_obj = reply_form.save()
                instance = get_object_or_404(ReplyChat, id = reply_obj.id)
                data_list.append(instance.id)
                data_list.append(instance.user_reply.username)
                data_list.append(instance.comments)
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except Chat.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def delete_reponse(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_reply=query_data['id_reply']
        user_fb=query_data['user_fb']
        try:
            user_id = 1
            if request.user.is_authenticated():
                if id_reply:
                    instance = get_object_or_404(ReplyChat, id = id_reply)
                    instance.delete()
            else:
                us = Profile.objects.filter(username = user_fb)
                if us:
                    if id_reply:
                        instance = get_object_or_404(ReplyChat, id = id_reply)
                        id_face = us[0].id
                        loged = instance.user_reply.id
                        if int(loged) == int(id_face):
                            instance.delete()
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ReplyChat.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def delete_chat(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_chat=query_data['id_chat']
        user_fb=query_data['us_f']
        try:
            user_id = 1
            if request.user.is_authenticated():
                if id_chat:
                    if id_chat:
                        instance = get_object_or_404(Chat, id = id_chat)
                        instance.delete()
            else:
                if user_fb:
                    us = Profile.objects.filter(username = user_fb)
                    instance = get_object_or_404(Chat, id = id_chat)
                    if instance:
                        if us:
                            id_face = us[0].id
                            loged = instance.user_chat.id
                            if int(loged) == int(id_face):
                                instance.delete()

            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except Chat.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")

def save_like_chat(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        chat=query_data['id_chat']
        user_fb=query_data['user_fb']
        creation_date = request.POST.get('timestamp', False)
        try:
            user_id = 1
            if request.user.is_authenticated():
                user_id = request.user.id
            else:
                us = Profile.objects.filter(username = user_fb)
                if us:
                    user_id = us[0].id
                else:
                    us_saving_face = Profile(username = user_fb, facebook_access = True)
                    us_saving_face.save()
                    us_fb = Profile.objects.filter(username = us_saving_face.username)
                    if us_fb:
                        user_id = us_fb.id
                        print("i have user id of facebook")
                    else:
                        print("i do not found de user facebooke")
            like_form = LikeChatForm({'chat':chat,'user_like':user_id,'is_like':1,'creation_date':creation_date})
            if like_form.is_valid():
                like_form.save()
                print("save")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except Profile.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")
