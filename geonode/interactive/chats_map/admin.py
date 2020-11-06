from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from geonode.interactive.chats_map.models import Chat , ReplyChat

admin.site.register(Chat, LeafletGeoAdmin)
admin.site.register(ReplyChat)