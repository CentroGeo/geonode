# -*- coding: utf-8 -*-
from django.core import validators
from django.db import models
from fontawesome.fields import IconField
from ckeditor.fields import RichTextField

from geonode.groups.models import GroupProfile
from geonode.layers.models import Layer
from geonode.interactive.wms_service.models import WmsService


class MViewer(models.Model):
    LOGOS = (('O', 'Naranja'), ('B', 'Negro'), ('BS', 'Negro 2'), ('BR', 'Café'), ('G', 'Gris'), ('W', 'Blanco'),
             ('Y', 'Amarillo'), ('GR', 'Verde'), ('GC', 'Gris claro'), ('BL', 'Azul'), ('BE', 'Crema'), ('P', 'Morado'),
             ('S', 'Estrellas'),)
    TEMA = (('Original', 'Original'), ('Alternativo', 'Alternativo'))
    group = models.ForeignKey(GroupProfile, verbose_name = "Grupo",
                            on_delete=models.CASCADE)
    name = models.CharField(verbose_name = "Nombre", max_length=200)
    url_id = models.CharField(validators=[validators.validate_slug], verbose_name="Complementa la URL del sitio (http://idegeo.centrogeo.org.mx/mviewer/)",
                                help_text='El identificador no puede tener espacios, caracteres especiales, ni arrobas',
                                max_length=20, unique=True, blank=False, null=True)
    is_public = models.BooleanField(default=False, verbose_name="Es público", help_text='Activar para publicar el panorama')
    template_style = models.CharField(max_length=250, default='Original', verbose_name="Seleccionar el tema del panorama")
    no_topics = models.BooleanField(default=False, verbose_name="Sin panel de temáticas")
    is_vertical = models.BooleanField(default=False, verbose_name="Activar para Panel Izquierdo o Desactivar para Panel Superior")
    icon_title = models.BooleanField(default=False, verbose_name="Mostrar nombre de temática")
    image = models.ImageField(verbose_name="Imagen", upload_to="images/", null=True, blank=True)
    logo = models.CharField(verbose_name='Logotipo', max_length=2, choices=LOGOS, null=True, blank=True)
    description = RichTextField(verbose_name="Descripcion", blank=True, null=True)
    sentinel = models.BooleanField(default=False, verbose_name="Temática Sentinel", help_text='Muestra tematica con capas del servicio Sentinel')
    layer_mask = models.ForeignKey(Layer, verbose_name="Capa de mascara", null=True, blank=True, 
                                    help_text='Seleccione una capa tipo poligono como mascara.',
                                    on_delete=models.CASCADE)
    bbox_x0 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    bbox_y0 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    bbox_x1 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    bbox_y1 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    config = models.CharField(verbose_name = "Mapa Base", max_length=200, null=True, blank=True)
    creation_date = models.DateField(auto_now_add=True)
    wms_services = models.ManyToManyField(WmsService, verbose_name="wms_services", blank=True)

    def __str__(self):
        return self.name


class Topic(models.Model):
    mviewer = models.ForeignKey(MViewer, verbose_name = "Visualizador", null=True, blank=True,
                                on_delete=models.CASCADE)
    name = models.CharField(verbose_name = "Nombre", max_length=40)
    description = models.TextField(verbose_name = "Descripcion", max_length=200)
    icon = IconField(default='', verbose_name="Icono")
    custome_icon = models.ImageField(verbose_name= "Icono Personalizado" , upload_to="images/", null=True, blank=True)
    creation_date = models.DateField(auto_now_add=True)
    layer_ids = models.ManyToManyField(Layer, through='LayerIds', verbose_name="IDs de capas")
    stack_order = models.IntegerField(null=True, blank=True)

    def __unicode__(self):
        return self.name


class LayeridMarker(models.Model):
    lat = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    lng = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    title = models.CharField(verbose_name='Titulo', null=True, max_length=200)
    narrative = RichTextField(verbose_name="Narrativa de Marcador", blank=True, null=True)
    icon = IconField(default='info', verbose_name="Icono")
    options = models.CharField(verbose_name="Opciones del marcador", max_length=500, null=True, blank=True)

    def __str__(self):
        return str(self.pk)


class LayerIds(models.Model):
    topic = models.ForeignKey(Topic, db_column='topic_id',
                                on_delete=models.CASCADE)
    layer = models.ForeignKey(Layer, db_column='layer_id',
                                on_delete=models.CASCADE)
    visible = models.BooleanField(default=False)
    name = models.CharField(null=True, max_length=200)
    title = models.CharField(null=True, max_length=200)
    style = models.CharField(max_length=250, null=True)
    default_style = models.CharField(max_length=250, null=True)
    stack_order = models.IntegerField(null=True, blank=True)
    narrative = RichTextField(verbose_name="Narrativa de Capa", blank=True, null=True)
    markers = models.ManyToManyField(LayeridMarker, blank=True)

    class Meta:
        db_table = 'mviewer_topic_layer_ids'

    def __unicode__(self):
        return self.name
