# -*- coding: utf-8 -*-
from django.core import validators
from django.db import models

class Applications(models.Model):
    name = models.CharField(verbose_name = "Nombre", max_length=200)
    url = models.CharField(verbose_name = "UTL", max_length=200)
    image = models.ImageField(verbose_name="Imagen", upload_to="images/", null=True, blank=True)
    description = models.TextField(verbose_name = "UTL", max_length=200)
    creation_date = models.DateField(auto_now_add=True)

    def __unicode__(self):
        return self.name
