#encoding:utf-8
"""
Este modelo fue creado para configurar las áreas de control del censo 2010
"""
from django.db import models
from django.conf import settings

from geonode.toolkit.models import ConfigureObjectSOA

class ControlArea(models.Model):
    conf = models.ForeignKey(ConfigureObjectSOA, related_name='conf_ca', verbose_name = "Config", 
                            null=True, blank=True,
                            on_delete=models.CASCADE)
    COVERAGES = (
        ('ac', 'Áreas de Control'),
        ('ageb', 'Agebs'),
        ('mun', 'Municipal'),
        ('statal', 'Estatal'),
    )
    coverages = models.CharField(max_length=10, choices=COVERAGES, verbose_name = "*Cobertura", help_text="Selecciona la covertura de la capa")
    state = models.CharField(max_length=64, blank=True, null=True,
                                     verbose_name='Estatal', help_text="Selecciona el estado")
    mun = models.CharField(max_length=64, blank=True, null=True,
                                     verbose_name='Municipal')
    ageb = models.CharField(max_length=64, blank=True, null=True,
                                     verbose_name='Ageb')
    ac = models.CharField(max_length=64, blank=True, null=True,
                                     verbose_name='Area de control')
    user_sos = models.ForeignKey(settings.AUTH_USER_MODEL, related_name = "user_ca",
                                null=True, blank=True,
                                on_delete=models.CASCADE)
    status = models.BooleanField(verbose_name = "Estaus", default=1)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.conf.tool.description
