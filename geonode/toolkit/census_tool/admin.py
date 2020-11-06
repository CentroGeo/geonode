from django.contrib import admin
from geonode.toolkit.census_tool.models import CensusLayer, CencusConf

admin.site.register(CensusLayer)
admin.site.register(CencusConf)
