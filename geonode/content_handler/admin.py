from dal import autocomplete

from geonode.content_handler.models import ManagmentContent, Menu, Header, Style, MainHome, Content, Partner, Footer
from django.contrib import admin

admin.site.register(ManagmentContent)
admin.site.register(Menu)
admin.site.register(Header)
admin.site.register(Style)
admin.site.register(MainHome)
admin.site.register(Content)
admin.site.register(Partner)
admin.site.register(Footer)