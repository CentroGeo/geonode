import psycopg2
import datetime

from django.db import models
from django.conf import settings
from django.db.models import signals
from django.utils.translation import ugettext_lazy as _
from django.urls import reverse
from geoserver.catalog import Catalog

from geonode.base.models import ResourceBase
from geonode.layers.models import AttributeManager
from geonode.geoserver.helpers import ogc_server_settings

_user = settings.OGC_SERVER['default']['USER']
_password = settings.OGC_SERVER['default']['PASSWORD']

class CensusLayer(ResourceBase):
    """
    Modelo para capas del censo 2010 de areas de control
    """
    custom_table = models.CharField(max_length=128, null=True, blank=True)
    workspace = models.CharField(max_length=128)
    store = models.CharField(max_length=128)
    storeType = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    typename = models.CharField(max_length=128, null=True, blank=True)

    charset = models.CharField(max_length=255, default='UTF-8')

    def __unicode__(self):
        return self.name

    def remove_censuslayer(self):
        # Remove from gs
        cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                      _user, _password)
        lyr = cat.get_layer(self.typename)
        if lyr:
            cat.delete(lyr)
            cat.reload()

        lyr_style = cat.get_style(self.typename.split(':')[1])
        if lyr_style:
            cat.delete(lyr_style)
            cat.reload()

        # Remove from postgis
        db = ogc_server_settings.datastore_db
        conn = psycopg2.connect(
            "dbname='" + db['NAME'] + "' user='" + db['USER'] +
            "'  password='" + db['PASSWORD'] + "'")
        cur = conn.cursor()
        cur.execute('drop materialized view if exists %s cascade;' % self.name)
        cur.execute('drop materialized view if exists pre_%s cascade;' % self.typename.split(':')[1])
        conn.commit()
        cur.close()
        conn.close()

# This Class is for configuration of Areas de control, here go the name of layers and number of status of the aplication
class CencusConf(models.Model):
    alias = models.CharField(verbose_name = "Alias", max_length=50, unique=True)
    name_layer = models.CharField(verbose_name = "Nombre de la capa", max_length=250, unique=True)
    coverage = models.CharField(verbose_name = "Estados", max_length=20)
    state = models.BooleanField(verbose_name = "Estatus")
    all_states = models.BooleanField(verbose_name = "Todos los estados")
    creation_date = models.DateField(auto_now_add=True)

    def __unicode__(self):
        return self.alias
def pre_delete_censuslayer(instance, sender, **kwargs):
    instance.remove_censuslayer()


# signals.pre_delete.connect(pre_delete_customtable, sender=custom_table)
signals.pre_delete.connect(pre_delete_censuslayer, sender=CensusLayer)
