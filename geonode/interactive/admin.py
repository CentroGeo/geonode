from django.contrib import admin
from .intercensal.models import CustomTable, TableAttribute, PollLayer
from .alf_census.models import AlfTable, AlfTableAttribute, AlfLayer

admin.site.register(PollLayer)
admin.site.register(CustomTable)
admin.site.register(TableAttribute)
admin.site.register(AlfLayer)
admin.site.register(AlfTable)
admin.site.register(AlfTableAttribute)
