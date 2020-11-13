import os
from django.db import models


def get_upload_path(instance, filename):
    return os.path.join(
        "styles", filename)


class MainHeader(models.Model):
    color = models.CharField(verbose_name="Color de fondo y del tema", max_length=250, null=True, default="rgba(75, 136, 101, 1)")
    color_gestion = models.CharField(verbose_name="Color de encabezados en gestión", max_length=250, null=True, default="rgba(52, 99, 72, 1)")
    color_font =  models.CharField(verbose_name="Color de texto (donde aplique)", max_length=250, null=True, default="rgba(36, 117, 71, 1)")
    logo = models.ImageField(verbose_name="Logo", help_text="Nota: El logo aparecerá en todos los encabezados",upload_to=get_upload_path, blank=True, null=True, default=None)
    title = models.CharField(verbose_name="Título o nombre de plataforma", max_length=300, null=True, default="Plataforma Geoweb IDEGeo")
    subtitle = models.CharField(verbose_name="Subntitulo de plataforma", max_length=300, null=True, default="Servicios de Información Geoespacial")
    cms = models.BooleanField(verbose_name="Usar CMS como home de plataforma", default=False)
    cmsHome = models.ForeignKey('content_handler.ManagmentContent',verbose_name="Nombre del CMS", on_delete=models.DO_NOTHING, null=True, blank=True)