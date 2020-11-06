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


class CustomTable(models.Model):

    """
    DataTable Custom
    """
    title = models.CharField(max_length=255)
    table_name = models.CharField(max_length=255, unique=True)
    uploaded_file = models.FileField(upload_to="datatables")
    create_table_sql = models.TextField(null=True, blank=True)
    charset = models.CharField(max_length=255)
    theme = models.CharField(max_length=255)
    filter = models.BooleanField('Filtro Intermedio',
        help_text='Seleccione si la tabla tiene  una columna de filtro intermedio',
        default=False)

    filter_column = models.ForeignKey(
        'TableAttribute',
        blank=True,
        null=True,
        related_name='cfilter_attribute',
        on_delete=models.CASCADE)

    def __unicode__(self):
        return self.table_name

    def remove_table(self):
        db = ogc_server_settings.datastore_db
        conn = psycopg2.connect(
            "dbname='" + db['NAME'] + "' user='" + db['USER'] +
            "'  password='" + db['PASSWORD'] + "'")
        cur = conn.cursor()
        cur.execute('drop table if exists %s cascade;' % self.table_name)
        conn.commit()
        cur.close()
        conn.close()


class TableAttribute(models.Model):
    """
        Auxiliary model for storing custom table attributes.
    """
    custom_table = models.ForeignKey(
        CustomTable,
        blank=True,
        null=True,
        unique=False,
        related_name='attribute_set',
        on_delete=models.CASCADE)

    attribute = models.CharField(
        _('attribute name'),
        help_text=_('name of attribute as stored in shapefile/spatial database'),
        max_length=255,
        blank=False,
        null=True,
        unique=False)
    description = models.CharField(
        _('attribute description'),
        help_text=_('description of attribute to be used in metadata'),
        max_length=255,
        blank=True,
        null=True)
    attribute_label = models.CharField(
        _('attribute label'),
        help_text=_('title of attribute as displayed in GeoNode'),
        max_length=255,
        blank=True,
        null=True,
        unique=False)
    attribute_type = models.CharField(
        _('attribute type'),
        help_text=_('the data type of the attribute (integer, string, geometry, etc)'),
        max_length=50,
        blank=False,
        null=False,
        default='xsd:string',
        unique=False)
    visible = models.BooleanField(
        _('visible?'),
        help_text=_('specifies if the attribute should be displayed in identify results'),
        default=True)
    display_order = models.IntegerField(
        _('display order'),
        help_text=_('specifies the order in which attribute should be displayed in identify results'),
        default=1)

    # statistical derivations
    count = models.IntegerField(
        _('count'),
        help_text=_('count value for this field'),
        default=1)

    last_stats_updated = models.DateTimeField(
        _('last modified'),
        default=datetime.datetime.now,
        help_text=_('date when attribute statistics were last updated'))  # passing the method itself, not

    objects = AttributeManager()

    def __str__(self):
        return "%s" % self.attribute_label.encode(
            "utf-8") if self.attribute_label else self.attribute.encode("utf-8")

    def unique_values_as_list(self):
        return self.unique_values.split(',')


class PollLayer(ResourceBase):
    """
    Modelo para capas del censo Agropecuario 2007
    """
    custom_table = models.ForeignKey(CustomTable, null=True, blank=True, on_delete=models.CASCADE)
    workspace = models.CharField(max_length=128)
    store = models.CharField(max_length=128)
    storeType = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    typename = models.CharField(max_length=128, null=True, blank=True)

    charset = models.CharField(max_length=255, default='UTF-8')

    def __unicode__(self):
        return self.name

    def remove_polllayer(self):
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
        conn.commit()
        cur.close()
        conn.close()


def pre_delete_customtable(instance, sender, **kwargs):
    instance.remove_table()


def pre_delete_polllayer(instance, sender, **kwargs):
    instance.remove_polllayer()


signals.pre_delete.connect(pre_delete_customtable, sender=CustomTable)
signals.pre_delete.connect(pre_delete_polllayer, sender=PollLayer)