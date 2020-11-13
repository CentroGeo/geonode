# encoding:utf-8
import os

from django.db import models
from django.core import validators
from ckeditor.fields import RichTextField

from django.template import defaultfilters
from django.conf import settings
from django.urls import reverse
# models
from geonode.groups.models import GroupProfile
#from geonode.ms.models import Microsite

TEMPLATES = (
    ('1', 'RTMG'),
    ('2', 'ISTMO'),
)
ALIGN = (
    ('left', 'IZQUIERDA'),
    ('center', 'CENTRADO'),
    ('justify', 'JUSTIFICADO'),
    ('right', 'DERECHA'),
)
FONTS = (
    ('Roboto', 'Roboto'),
    ('Roboto Mono', 'Roboto Mono'),
    ('Merriweather Sans', 'Merriweather Sans'),
    ('Merriweather', 'Merriweather'),
    ('Montserrat','Montserrat'),
    ('Architects Daughter','Architects Daughter')

)
SIZE = (
    ('s', 'Small (150x150)'),
    ('m', 'Medium (250x250)'),
    ('l', 'Large (250x150)'),
    ('x', 'XLarge (497x279)'),
)

SECTIONS = (
    ('car', 'Carrucel'),
    ('sli', 'Slider'),
    ('smo', 'Smooth'),
)

SIZE_TYPE = (
        ('6', 'Small (150x150)'),
        ('5', 'Medium (250x250)'),
        ('4', 'Large (250x150)'),
        ('3', 'XLarge (497x279)'),
        ('2', 'Horizontal (851x315)'),
        ('1', 'Vertical (1080x608)'),
    )

STYLE_TYPE = (
        ('1', 'Parallo'),
        ('2', 'Bibendum'),
        ('3', 'Editorial'),
        ('4', 'Prisma'),
    )

STYLE_TEMP = (
        ('1', 'Parallo'),
        ('2', 'Bibendum'),
        ('3', 'Editorial'),
        ('4', 'Prisma'),
        ('5', 'Carrusel'),
        ('6', 'Acordeon simple'),
        ('7', 'Carrusel enfásis'),
        ('8', 'Bloque viñeta'),
        ('9', 'Bloque viñeta invertido')
    )

IMAGE_POSITION = (
    ('left', 'Izquierda'),
    ('right', 'Derecha'),
    ('center', 'Centrado'),
    ('top', 'Arriba'),
    ('bottom', 'Abajo')
)

FORMAT_CHOICES = (
    ('standard', 'Historia'),
    #('image', 'Imagen'),
    ('link', 'Enlace'),
    #('gallery', 'Galería'),
)
BORDER = (
    ('solid', 'Sólido'),
    ('dotted', 'Punteado'),
    ('dashed', 'Rayado'),
    ('double', 'Doble'),
    ('groove', 'Ranura'),
    ('ridge', 'Cresta')
)

def get_upload_path(instance, filename):
    return os.path.join(
        "content_handler", filename)


# clase para poder manejar los homes
class ManagmentContent(models.Model):
    group = models.ForeignKey(GroupProfile, on_delete=models.DO_NOTHING, verbose_name="Grupo")
    name = models.CharField(verbose_name="Home", max_length=200)
    subtitle = models.CharField(verbose_name="Título", max_length=200, null=True, blank=True)
    description = models.CharField(verbose_name='Descripcion', max_length=300, null=True, blank=True)
    object = RichTextField(verbose_name="Objetivo", null=True, blank=True)
    copyright = models.CharField(verbose_name='Copyright', max_length=300, null=True, blank=True)
    url_name = models.CharField(validators=[validators.validate_slug],
                                verbose_name="Complementa la URL del sitio (http://idegeo.centrogeo.org.mx/cms/)",
                                help_text='El slug no puede tener espacios, caracteres especiales, ni arrobas',
                                max_length=20, unique=True, blank=False, null=True)
    color = models.IntegerField(verbose_name='Color', null=True, blank=True, default=0)
    thematic = models.IntegerField(verbose_name='Tipo de Plantilla', null=True, blank=True, default=1)
    cover_image = models.ImageField(verbose_name="Imagen de portada", upload_to=get_upload_path, null=True, blank=True)
    public = models.BooleanField(verbose_name="Publicar", blank=True, default=False)
    template = models.CharField(verbose_name="Estilo de Seccion", max_length=2, choices=STYLE_TYPE, blank=True, null=True, default='2')
    gray_colors = models.BooleanField(verbose_name="Utilizar estilos de template", blank=False, default=True)
    primary_color = models.CharField(verbose_name="Color primario", max_length=8, blank=False, null=True)
    second_color = models.CharField(verbose_name="Color secundario", max_length=8, blank=False, null=True)
    complementary_color = models.CharField(verbose_name="Color complementario", max_length=8, blank=False, null=True)
    creation_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Menu(models.Model):
    home = models.ForeignKey('ManagmentContent', on_delete=models.DO_NOTHING, verbose_name="Home", null=True, blank=True)
    parent_menu = models.ForeignKey('self', on_delete=models.DO_NOTHING, verbose_name="Categoría superior",
                                       related_name='children', null=True, blank=True)
    name = models.CharField(verbose_name="Nombre*", max_length=100)
    slug = models.SlugField(verbose_name="Slug*", help_text="El slug es una palabra sin espacios que identifica a la sección.")
    image = models.ImageField(verbose_name="Imagen", upload_to=get_upload_path, null=True, blank=True)
    link = models.URLField(verbose_name="Enlace", null=True, blank=True)
    blank = models.BooleanField(verbose_name="Abrir en otra ventana", blank=False, default=False)
    custome_back = models.BooleanField(verbose_name="Menú de regreso", blank=False, default=False)
    description = models.TextField(verbose_name="Descripción", null=True, blank=True)
    content = RichTextField(verbose_name="Entrada", null=True, blank=True)
    size = models.CharField(verbose_name = "Tamaño", max_length=250, choices=SIZE_TYPE, blank=True, null=True, default='4')
    stack_order = models.IntegerField(null=True, blank=True)
    active = models.BooleanField(verbose_name = "Activo", default=True)
    is_section = models.BooleanField(verbose_name='Es sección', default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    section_template = models.CharField(verbose_name="Estilo de encabezado de Seccion", max_length=2, choices=STYLE_TYPE, blank=True, null=True, default='2')
    style_template = models.CharField(verbose_name="Estilo de seccion", max_length=2, choices=STYLE_TEMP, blank=False, null=False, default='3')
    is_divisor = models.BooleanField(verbose_name='Es divisor', default=False)
    is_institution = models.BooleanField(verbose_name='Es institucion', default=False)
    comment_section = models.BooleanField(verbose_name="Agregar sección de comentarios", blank=False, default=False)
    has_mosaic = models.BooleanField(verbose_name='Agregar mosaico', default=False)

    def get_absolute_url(self):
        return reverse("content_handler_detail", kwargs={'ch_id': self.home.id})

    def save(self, *args, **kwargs):
        super(Menu, self).save(*args, **kwargs)
        self.slug = 'menuSect-'+str(self.home.id)+'-'+str(self.id)
        super(Menu, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Header(models.Model):
    home = models.ForeignKey('ManagmentContent', on_delete=models.CASCADE, verbose_name="Home", null=True, blank=True)
    title = models.CharField(verbose_name="Título*", max_length=250,
                             help_text='Este título aparecerá en la parte central del encabezado del home')
    description = models.CharField(verbose_name="Descripción", max_length=300, blank=True,
                                   help_text="Dependiendo del template que se ocupe la descripción puede aparecer abajo del título del encabezado o al pasar el puntero")
    is_hover = models.BooleanField(verbose_name="Apagar la descripción y que aparezca al pasar el puntero al título", default=False)
    image_1 = models.ImageField(verbose_name="Logo 1",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_1 = models.URLField(verbose_name="URL logo 1", blank=True, default=None)
    alt_1 = models.CharField(verbose_name="Título 1", max_length=50, blank=True, null=True)
    image_2 = models.ImageField(verbose_name="Logo 2",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_2 = models.URLField(verbose_name="URL Logo 2", blank=True, default=None)
    alt_2 = models.CharField(verbose_name="Título 2", max_length=50, blank=True, null=True)
    image_3 = models.ImageField(verbose_name="Logo 3",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_3 = models.URLField(verbose_name="URL logo 3", blank=True, default=None)
    alt_3 = models.CharField(verbose_name="Título 3", max_length=50, blank=True, null=True)
    image_4 = models.ImageField(verbose_name="Logo 4",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_4 = models.URLField(verbose_name="URL logo 4", blank=True, default=None)
    alt_4 = models.CharField(verbose_name="Título 4", max_length=50, blank=True, null=True)
    image_5 = models.ImageField(verbose_name="Logo 5",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_5 = models.URLField(verbose_name="URL logo 5", blank=True, default=None)
    alt_5 = models.CharField(verbose_name="Título 5", max_length=50, blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name="user_header")
    is_login = models.BooleanField(verbose_name="Acceso con usuario", default=False)
    is_burger = models.BooleanField(verbose_name="Menu", default=False)
    is_search = models.BooleanField(verbose_name="Buscar", default=False)

    def get_absolute_url(self):
        return reverse("content_handler_list")

    def __str__(self):
        return self.home.name


class Footer(models.Model):
    home = models.ForeignKey('ManagmentContent', on_delete=models.DO_NOTHING, verbose_name="Home", related_name='home_footer', null=True, blank=True)
    #ms = models.ForeignKey(Microsite, on_delete=models.DO_NOTHING, verbose_name="MicroSitio", related_name='ms_footer', null=True, blank=True)
    copyright = models.CharField(verbose_name='Copyright', max_length=300, null=True, blank=True)
    link_copyright = models.URLField(verbose_name="URL de Copyright", blank=True, default=None)
    image_1 = models.ImageField(verbose_name="Logo 1",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_1 = models.URLField(verbose_name="URL logo 1", blank=True, default=None)
    alt_1 = models.CharField(verbose_name="Título 1", max_length=50, blank=True, null=True)
    image_2 = models.ImageField(verbose_name="Logo 2",
                                help_text='Este logo es para la cabecera del home',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link_2 = models.URLField(verbose_name="URL logo 2", blank=True, default=None)
    alt_2 = models.CharField(verbose_name="Título 2", max_length=50, blank=True, null=True)
    contact_1 = models.CharField(verbose_name="Contacto 1", max_length=50, blank=True, null=True)
    email_1 = models.CharField(verbose_name='Email de contacto 1', max_length=250, blank=True)
    link_contanct_1 = models.URLField(verbose_name="URL de contacto 1", blank=True, default=None)
    contact_2 = models.CharField(verbose_name="Contacto 2", max_length=50, blank=True, null=True)
    email_2 = models.CharField(verbose_name='Email de contacto 2', max_length=250, blank=True)
    link_contanct_2 = models.URLField(verbose_name="URL de contacto 2", blank=True, default=None)
    contact_3 = models.CharField(verbose_name="Contacto 3", max_length=50, blank=True, null=True)
    email_3 = models.CharField(verbose_name='Email de contacto 3', max_length=250, blank=True)
    link_contanct_3 = models.URLField(verbose_name="URL de contacto 3", blank=True, default=None)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name="user_footer")
    active = models.BooleanField(verbose_name="Activo", default=True)
    created = models.DateTimeField(auto_now_add=True)

    def get_absolute_url(self):
        return reverse("content_handler_list")

    def __str__(self):
        return self.copyright


class Style(models.Model):
    align = models.CharField(verbose_name="Justificado", max_length=10, choices=ALIGN, blank=True, null=True,
                             default='left')
    font = models.CharField(verbose_name="Tipo de letra", max_length=40, choices=FONTS, blank=True, null=True,
                            default='Times New Roman')
    size = models.CharField(verbose_name="Tamaño de letra", max_length=1, choices=SIZE, blank=True, null=True,
                            default='m')
    color = models.IntegerField(verbose_name='Color', null=True, blank=True, default=0)
    primary_color = models.CharField(verbose_name="Color de Texto"
                                    , help_text="Este color se aplicará al texto sólo al encabezado"
                                     , max_length=40, blank=True, null=True)
    background = models.ImageField(verbose_name="Imagen de Header (Opcional)"
                                   , help_text="Esta imagen reeplazará el color del fondo del header"
                                   , upload_to=get_upload_path, null=True, blank=True)
    second_color = models.CharField(verbose_name="Color de Fondo"
                                    , help_text="Este color se aplicará al fondo del  encabezado"
                                    , max_length=40, blank=True, null=True)
    plot = models.ImageField(verbose_name="Trama Mosaico (Opcional)"
                                   , help_text="Reemplazará el color de fondo de la descripción."
                                   , upload_to=get_upload_path, null=True, blank=True)
    cover_color = models.CharField(verbose_name="Color de Fondo"
                                    , help_text="Este color se aplicará al fondo del  encabezado"
                                    , max_length=40, blank=True, null=True)
    complementary_color = models.CharField(verbose_name="Color complementario", max_length=40, blank=True, null=True)
    header = models.ForeignKey(Header, on_delete=models.DO_NOTHING, verbose_name="Cabecera", null=True, blank=True)
    footer = models.ForeignKey(Footer, on_delete=models.DO_NOTHING, verbose_name="Footer", null=True, blank=True)
    menu = models.ForeignKey(Menu, on_delete=models.DO_NOTHING, verbose_name="Cabecera", null=True, blank=True)
    all = models.BooleanField(verbose_name="Aplicar este estilo a todo el sitio", default=True)
    status = models.BooleanField(verbose_name="Activo", default=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.primary_color


class MainHome(models.Model):
    home = models.ForeignKey(ManagmentContent, on_delete=models.DO_NOTHING, verbose_name="Home", null=True, blank=True)
    section = models.CharField(verbose_name="Sección", choices=SECTIONS, default='car', max_length=20)
    title = models.CharField(verbose_name="Título*", max_length=50)
    description = models.CharField(verbose_name="Descripción", max_length=100, null=True, blank=True)
    link = models.URLField(verbose_name="Enlace", null=True, blank=True)
    image = models.ImageField(verbose_name="Imagen", upload_to=get_upload_path, null=True, blank=True)
    image_news = models.ImageField(verbose_name="Imagen", upload_to=get_upload_path, null=True, blank=True)
    news = models.BooleanField(verbose_name="Novedades", default=True)
    content = RichTextField(verbose_name="Entrada", null=True, blank=True)
    is_carrucel = models.BooleanField(verbose_name="Carrucel", default=True)
    is_slider = models.BooleanField(verbose_name="Slider", default=True)
    is_smooth = models.BooleanField(verbose_name="Smooth", default=True)
    active = models.BooleanField(verbose_name="Activo", default=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    link_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)

    class Meta:
        ordering = ['link_order']

    def __str__(self):
        return self.title


# contenido para la página
class Content(models.Model):
    home = models.ForeignKey(ManagmentContent, on_delete=models.DO_NOTHING, verbose_name="Home", null=True, blank=True)
    content = RichTextField(verbose_name="Entrada", null=True, blank=True)
    stack_order = models.IntegerField(null=True, blank=True)
    active = models.BooleanField(verbose_name = "Activo", default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def get_absolute_url(self):
        return reverse("content_handler_detail", kwargs={'ch_id': self.home.id})

    class Meta:
        ordering = ['stack_order']

    def __str__(self):
        return self.home.name


class Partner(models.Model):
    home = models.ForeignKey(ManagmentContent, on_delete=models.DO_NOTHING, verbose_name="Home", null=True, blank=True)
    image = models.ImageField(verbose_name="Logo",
                                help_text='Este logo es para las instituciones participantes',
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    link = models.URLField(verbose_name="URL de logo", blank=True, default=None)
    alt = models.CharField(verbose_name="Título", max_length=50, blank=True, null=True)
    stack_order = models.IntegerField(verbose_name="Posición del logo", null=True, blank=True, help_text="Selecciona un número para el orden de aparición.")

    def get_absolute_url(self):
        return reverse("content_handler_list")

    class Meta:
        ordering = ['stack_order']

    def __str__(self):
        return self.home.name

class HeaderSectionStyle(models.Model):
    section = models.OneToOneField(Menu, on_delete=models.DO_NOTHING, verbose_name="Seccion", null=True, blank=True)
    has_imagebackground = models.BooleanField(verbose_name="Imagen de fondo", default=False)
    image = models.ImageField(verbose_name="Imagen",
                                help_text="Nota: reduce la transparencia del color de fondo para poder ver la imagen.",
                                upload_to=get_upload_path, blank=True, null=True, default=None)
    image_position_fixed = models.BooleanField(verbose_name="Posicion fija de imagen", default=True)
    image_position = models.CharField(verbose_name="Posicion de imagen", choices=IMAGE_POSITION, max_length=250, null=False, default='center')
    image_repeat = models.BooleanField(verbose_name="Repetir imagen (generar trama)", default=False)
    background = models.CharField(verbose_name="Color de fondo", max_length=250, null=True, default="rgba(255,255,255,1)")
    font_color = models.CharField(verbose_name="Color de texto", max_length=250, null=True, default="#000")
    size_div = models.IntegerField(verbose_name="Tamaño de bloque (px)", null=True, default="20")
    width_div = models.BooleanField(verbose_name="Ancho estrecho", default=False)
    top_border = models.BooleanField(verbose_name='Borde superior', default=False)
    top_border_thickness = models.IntegerField(verbose_name='Ancho de borde', default=1, null=True)
    top_border_style = models.CharField(verbose_name="Estilo de borde", choices=BORDER, max_length=250, default='solid', null=True)
    top_border_color = models.CharField(verbose_name="Color de borde", max_length=250, default='black', null=True)
    bottom_border = models.BooleanField(verbose_name='Borde inferior', default=False)
    bottom_border_thickness = models.IntegerField(verbose_name="Ancho de borde", default=1, null=True)
    bottom_border_color = models.CharField(verbose_name="Color de borde", max_length=250, default='black', null=True)
    bottom_border_style = models.CharField(verbose_name="Estilo de borde", choices=BORDER, max_length=250, default='solid', null=True)
    size_font = models.IntegerField(verbose_name="Tamaño de fuente (px)", null=True, default="28")
    text_align = models.CharField(verbose_name="Alineacion del texto", choices=ALIGN, max_length=250, null=False, default="center")
    underline = models.BooleanField(verbose_name='Subrayado', default=True)