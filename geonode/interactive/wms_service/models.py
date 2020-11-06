import logging
from django.conf import settings
from django.db import models

class WmsService(models.Model):
    """
    Service Class to represent remote Geo Web Services
    """
    base_url = models.URLField('URL', unique=True)
    name = models.CharField('Nombre', max_length=255)
    description = models.CharField('Descripcion', max_length=255, null=True, blank=True)

    def __unicode__(self):
        return self.name