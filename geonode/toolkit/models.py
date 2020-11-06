#encoding:utf-8
"""
Este modelo fue creado para administrar las herramientas independientes que pueda tener un mapa, una capa, o un vizualizador
"""
from fontawesome.fields import IconField
from django.conf import settings
from django.db import models

from geonode.mviewer.models import MViewer, LayerIds
from geonode.layers.models import Layer
from geonode.maps.models import Map

"""
This Model is created for tools of analisys from general maps
"""
class SpatialObject(models.Model):
    title = models.CharField(verbose_name = "Título", max_length=250, unique=True)
    description = models.TextField(verbose_name='Descripción', help_text='Esta descripción saldrá en el tooltip del icono, junto conel título',max_length=250)
    constant = models.CharField(verbose_name = "Constante", help_text="Esta constante no se tiene que repetir por que será el id de tu evento" ,max_length=40)
    help = models.CharField(verbose_name = "Ayuda", help_text="Esta ayuda saldrá en el detalle del visualizador (Esto es en caso de que la herramienta necesite otro tipo de configuración)",max_length=250, blank=True, null=True)
    status = models.BooleanField(verbose_name = "Activa", blank=True)
    icon = models.CharField(verbose_name = "Ingresa el icono para tu herramienta ej: (trash)", help_text="puedes consultar: https://fontawesome.com/v4.7.0/icons/",max_length=250, blank=False, null=False)
    general_tool = models.BooleanField(verbose_name = "General", help_text="Si tu herramienta va ligada a una capa, no selecciones esta opción", blank=True)
    creation_date = models.DateField(auto_now_add=True)

    def __unicode__(self):
        return self.title

class ConfigureObjectSOA(models.Model):
    tool = models.ForeignKey(SpatialObject, related_name='sos_tools', 
                            verbose_name = "Herramientas relacionadas", help_text="Selecciona una herramienta de análisis para tu visualizador",
                            null=False, blank=False,
                            on_delete=models.CASCADE)
    maps = models.ForeignKey(Map, related_name='sos_maps', verbose_name = "Mapas relacionados", null=True, blank=True,
                            on_delete=models.CASCADE)
    layers = models.ForeignKey(Layer, related_name='sos_layers', verbose_name = "Capas relacionadas", 
                                null=True, blank=True,
                                on_delete=models.CASCADE)
    mviewer = models.ForeignKey(MViewer, related_name='sos_mviewer', verbose_name = "Vizualizadores relacionados",
                                null=True, blank=True,
                                on_delete=models.CASCADE)
    layer_mv = models.ForeignKey(LayerIds, related_name='sos_layers_mv', 
                                verbose_name = "Capas de mviewer relacionadas", 
                                help_text="Selecciona la capa a aplicar la herramienta",
                                null=True, blank=True,
                                on_delete=models.CASCADE)
    help = models.CharField(verbose_name = "Título",
                            help_text="Este título es el que se mostrará en tu visualizador",
                            max_length=250, blank=True, null=True)
    user_sos = models.ForeignKey(settings.AUTH_USER_MODEL, related_name = "user_sos",
                                null=True, blank=True,
                                on_delete=models.CASCADE)
    status = models.BooleanField(verbose_name = "Activa", default=1)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return unicode(self.tool.title) or u''
