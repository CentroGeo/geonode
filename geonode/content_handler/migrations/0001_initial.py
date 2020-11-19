# Generated by Django 2.2.12 on 2020-07-07 21:49

import ckeditor.fields
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import geonode.content_handler.models
import re


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('groups', '0034_auto_20200512_1431'),
        #('ms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Footer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('copyright', models.CharField(blank=True, max_length=300, null=True, verbose_name='Copyright')),
                ('link_copyright', models.URLField(blank=True, default=None, verbose_name='URL de Copyright')),
                ('image_1', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 1')),
                ('link_1', models.URLField(blank=True, default=None, verbose_name='URL logo 1')),
                ('alt_1', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 1')),
                ('image_2', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 2')),
                ('link_2', models.URLField(blank=True, default=None, verbose_name='URL logo 2')),
                ('alt_2', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 2')),
                ('contact_1', models.CharField(blank=True, max_length=50, null=True, verbose_name='Contacto 1')),
                ('email_1', models.CharField(blank=True, max_length=250, verbose_name='Email de contacto 1')),
                ('link_contanct_1', models.URLField(blank=True, default=None, verbose_name='URL de contacto 1')),
                ('contact_2', models.CharField(blank=True, max_length=50, null=True, verbose_name='Contacto 2')),
                ('email_2', models.CharField(blank=True, max_length=250, verbose_name='Email de contacto 2')),
                ('link_contanct_2', models.URLField(blank=True, default=None, verbose_name='URL de contacto 2')),
                ('contact_3', models.CharField(blank=True, max_length=50, null=True, verbose_name='Contacto 3')),
                ('email_3', models.CharField(blank=True, max_length=250, verbose_name='Email de contacto 3')),
                ('link_contanct_3', models.URLField(blank=True, default=None, verbose_name='URL de contacto 3')),
                ('active', models.BooleanField(default=True, verbose_name='Activo')),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Header',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Este título aparecerá en la parte central del encabezado del home', max_length=250, verbose_name='Título*')),
                ('description', models.CharField(blank=True, help_text='Dependiendo del template que se ocupe la descripción puede aparecer abajo del título del encabezado o al pasar el puntero', max_length=300, verbose_name='Descripción')),
                ('is_hover', models.BooleanField(default=False, verbose_name='Apagar la descripción y que aparezca al pasar el puntero al título')),
                ('image_1', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 1')),
                ('link_1', models.URLField(blank=True, default=None, verbose_name='URL logo 1')),
                ('alt_1', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 1')),
                ('image_2', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 2')),
                ('link_2', models.URLField(blank=True, default=None, verbose_name='URL Logo 2')),
                ('alt_2', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 2')),
                ('image_3', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 3')),
                ('link_3', models.URLField(blank=True, default=None, verbose_name='URL logo 3')),
                ('alt_3', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 3')),
                ('image_4', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 4')),
                ('link_4', models.URLField(blank=True, default=None, verbose_name='URL logo 4')),
                ('alt_4', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 4')),
                ('image_5', models.ImageField(blank=True, default=None, help_text='Este logo es para la cabecera del home', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo 5')),
                ('link_5', models.URLField(blank=True, default=None, verbose_name='URL logo 5')),
                ('alt_5', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título 5')),
                ('is_login', models.BooleanField(default=False, verbose_name='Acceso con usuario')),
                ('is_burger', models.BooleanField(default=False, verbose_name='Menu')),
                ('is_search', models.BooleanField(default=False, verbose_name='Buscar')),
            ],
        ),
        migrations.CreateModel(
            name='ManagmentContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Home')),
                ('subtitle', models.CharField(blank=True, max_length=200, null=True, verbose_name='Título')),
                ('description', models.CharField(blank=True, max_length=300, null=True, verbose_name='Descripcion')),
                ('object', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Objetivo')),
                ('copyright', models.CharField(blank=True, max_length=300, null=True, verbose_name='Copyright')),
                ('url_name', models.CharField(help_text='El slug no puede tener espacios, caracteres especiales, ni arrobas', max_length=20, null=True, unique=True, validators=[django.core.validators.RegexValidator(re.compile('^[-a-zA-Z0-9_]+\\Z'), "Enter a valid 'slug' consisting of letters, numbers, underscores or hyphens.", 'invalid')], verbose_name='Complementa la URL del sitio (http://idegeo.centrogeo.org.mx/cms/)')),
                ('color', models.IntegerField(blank=True, default=0, null=True, verbose_name='Color')),
                ('thematic', models.IntegerField(blank=True, default=1, null=True, verbose_name='Tipo de Plantilla')),
                ('cover_image', models.ImageField(blank=True, null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Imagen de portada')),
                ('public', models.BooleanField(blank=True, default=False, verbose_name='Publicar')),
                ('template', models.CharField(blank=True, choices=[('1', 'Parallo'), ('2', 'Bibendum'), ('3', 'Editorial'), ('4', 'Prisma')], default='2', max_length=2, null=True, verbose_name='Estilo de Seccion')),
                ('gray_colors', models.BooleanField(default=True, verbose_name='Utilizar estilos de template')),
                ('primary_color', models.CharField(max_length=8, null=True, verbose_name='Color primario')),
                ('second_color', models.CharField(max_length=8, null=True, verbose_name='Color secundario')),
                ('complementary_color', models.CharField(max_length=8, null=True, verbose_name='Color complementario')),
                ('creation_date', models.DateField(auto_now_add=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='groups.GroupProfile', verbose_name='Grupo')),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Nombre*')),
                ('slug', models.SlugField(help_text='El slug es una palabra sin espacios que identifica a la sección.', verbose_name='Slug*')),
                ('image', models.ImageField(blank=True, null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Imagen')),
                ('link', models.URLField(blank=True, null=True, verbose_name='Enlace')),
                ('blank', models.BooleanField(default=False, verbose_name='Abrir en otra ventana')),
                ('custome_back', models.BooleanField(default=False, verbose_name='Menú de regreso')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Descripción')),
                ('content', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Entrada')),
                ('size', models.CharField(blank=True, choices=[('6', 'Small (150x150)'), ('5', 'Medium (250x250)'), ('4', 'Large (250x150)'), ('3', 'XLarge (497x279)'), ('2', 'Horizontal (851x315)'), ('1', 'Vertical (1080x608)')], default='4', max_length=250, null=True, verbose_name='Tamaño')),
                ('stack_order', models.IntegerField(blank=True, null=True)),
                ('active', models.BooleanField(default=True, verbose_name='Activo')),
                ('is_section', models.BooleanField(default=False, verbose_name='Es sección')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('section_template', models.CharField(blank=True, choices=[('1', 'Parallo'), ('2', 'Bibendum'), ('3', 'Editorial'), ('4', 'Prisma')], default='2', max_length=2, null=True, verbose_name='Estilo de encabezado de Seccion')),
                ('style_template', models.CharField(choices=[('1', 'Parallo'), ('2', 'Bibendum'), ('3', 'Editorial'), ('4', 'Prisma'), ('5', 'Carrusel'), ('6', 'Acordeon simple'), ('7', 'Carrusel enfásis'), ('8', 'Bloque viñeta'), ('9', 'Bloque viñeta invertido')], default='3', max_length=2, verbose_name='Estilo de seccion')),
                ('is_divisor', models.BooleanField(default=False, verbose_name='Es divisor')),
                ('is_institution', models.BooleanField(default=False, verbose_name='Es institucion')),
                ('comment_section', models.BooleanField(default=False, verbose_name='Agregar sección de comentarios')),
                ('has_mosaic', models.BooleanField(default=False, verbose_name='Agregar mosaico')),
                ('home', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.ManagmentContent', verbose_name='Home')),
                ('parent_menu', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='children', to='content_handler.Menu', verbose_name='Categoría superior')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Style',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('align', models.CharField(blank=True, choices=[('left', 'IZQUIERDA'), ('center', 'CENTRADO'), ('justify', 'JUSTIFICADO'), ('right', 'DERECHA')], default='left', max_length=10, null=True, verbose_name='Justificado')),
                ('font', models.CharField(blank=True, choices=[('Roboto', 'Roboto'), ('Roboto Mono', 'Roboto Mono'), ('Merriweather Sans', 'Merriweather Sans'), ('Merriweather', 'Merriweather'), ('Montserrat', 'Montserrat'), ('Architects Daughter', 'Architects Daughter')], default='Times New Roman', max_length=40, null=True, verbose_name='Tipo de letra')),
                ('size', models.CharField(blank=True, choices=[('s', 'Small (150x150)'), ('m', 'Medium (250x250)'), ('l', 'Large (250x150)'), ('x', 'XLarge (497x279)')], default='m', max_length=1, null=True, verbose_name='Tamaño de letra')),
                ('color', models.IntegerField(blank=True, default=0, null=True, verbose_name='Color')),
                ('primary_color', models.CharField(blank=True, help_text='Este color se aplicará al texto sólo al encabezado', max_length=40, null=True, verbose_name='Color de Texto')),
                ('background', models.ImageField(blank=True, help_text='Esta imagen reeplazará el color del fondo del header', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Imagen de Header (Opcional)')),
                ('second_color', models.CharField(blank=True, help_text='Este color se aplicará al fondo del  encabezado', max_length=40, null=True, verbose_name='Color de Fondo')),
                ('plot', models.ImageField(blank=True, help_text='Reemplazará el color de fondo de la descripción.', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Trama Mosaico (Opcional)')),
                ('cover_color', models.CharField(blank=True, help_text='Este color se aplicará al fondo del  encabezado', max_length=40, null=True, verbose_name='Color de Fondo')),
                ('complementary_color', models.CharField(blank=True, max_length=40, null=True, verbose_name='Color complementario')),
                ('all', models.BooleanField(default=True, verbose_name='Aplicar este estilo a todo el sitio')),
                ('status', models.BooleanField(default=True, verbose_name='Activo')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('footer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.Footer', verbose_name='Footer')),
                ('header', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.Header', verbose_name='Cabecera')),
                ('menu', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.Menu', verbose_name='Cabecera')),
            ],
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default=None, help_text='Este logo es para las instituciones participantes', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Logo')),
                ('link', models.URLField(blank=True, default=None, verbose_name='URL de logo')),
                ('alt', models.CharField(blank=True, max_length=50, null=True, verbose_name='Título')),
                ('stack_order', models.IntegerField(blank=True, help_text='Selecciona un número para el orden de aparición.', null=True, verbose_name='Posición del logo')),
                ('home', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.ManagmentContent', verbose_name='Home')),
            ],
            options={
                'ordering': ['stack_order'],
            },
        ),
        migrations.CreateModel(
            name='MainHome',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.CharField(choices=[('car', 'Carrucel'), ('sli', 'Slider'), ('smo', 'Smooth')], default='car', max_length=20, verbose_name='Sección')),
                ('title', models.CharField(max_length=50, verbose_name='Título*')),
                ('description', models.CharField(blank=True, max_length=100, null=True, verbose_name='Descripción')),
                ('link', models.URLField(blank=True, null=True, verbose_name='Enlace')),
                ('image', models.ImageField(blank=True, null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Imagen')),
                ('image_news', models.ImageField(blank=True, null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Imagen')),
                ('news', models.BooleanField(default=True, verbose_name='Novedades')),
                ('content', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Entrada')),
                ('is_carrucel', models.BooleanField(default=True, verbose_name='Carrucel')),
                ('is_slider', models.BooleanField(default=True, verbose_name='Slider')),
                ('is_smooth', models.BooleanField(default=True, verbose_name='Smooth')),
                ('active', models.BooleanField(default=True, verbose_name='Activo')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('link_order', models.PositiveIntegerField(db_index=True, default=0, editable=False)),
                ('home', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.ManagmentContent', verbose_name='Home')),
            ],
            options={
                'ordering': ['link_order'],
            },
        ),
        migrations.CreateModel(
            name='HeaderSectionStyle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('has_imagebackground', models.BooleanField(default=False, verbose_name='Imagen de fondo')),
                ('image', models.ImageField(blank=True, default=None, help_text='Nota: reduce la transparencia del color de fondo para poder ver la imagen.', null=True, upload_to=geonode.content_handler.models.get_upload_path, verbose_name='Imagen')),
                ('image_position_fixed', models.BooleanField(default=True, verbose_name='Posicion fija de imagen')),
                ('image_position', models.CharField(choices=[('left', 'Izquierda'), ('right', 'Derecha'), ('center', 'Centrado'), ('top', 'Arriba'), ('bottom', 'Abajo')], default='center', max_length=250, verbose_name='Posicion de imagen')),
                ('image_repeat', models.BooleanField(default=False, verbose_name='Repetir imagen (generar trama)')),
                ('background', models.CharField(default='rgba(255,255,255,1)', max_length=250, null=True, verbose_name='Color de fondo')),
                ('font_color', models.CharField(default='#000', max_length=250, null=True, verbose_name='Color de texto')),
                ('size_div', models.IntegerField(default='20', null=True, verbose_name='Tamaño de bloque (px)')),
                ('width_div', models.BooleanField(default=False, verbose_name='Ancho estrecho')),
                ('top_border', models.BooleanField(default=False, verbose_name='Borde superior')),
                ('top_border_thickness', models.IntegerField(default=1, null=True, verbose_name='Ancho de borde')),
                ('top_border_style', models.CharField(choices=[('solid', 'Sólido'), ('dotted', 'Punteado'), ('dashed', 'Rayado'), ('double', 'Doble'), ('groove', 'Ranura'), ('ridge', 'Cresta')], default='solid', max_length=250, null=True, verbose_name='Estilo de borde')),
                ('top_border_color', models.CharField(default='black', max_length=250, null=True, verbose_name='Color de borde')),
                ('bottom_border', models.BooleanField(default=False, verbose_name='Borde inferior')),
                ('bottom_border_thickness', models.IntegerField(default=1, null=True, verbose_name='Ancho de borde')),
                ('bottom_border_color', models.CharField(default='black', max_length=250, null=True, verbose_name='Color de borde')),
                ('bottom_border_style', models.CharField(choices=[('solid', 'Sólido'), ('dotted', 'Punteado'), ('dashed', 'Rayado'), ('double', 'Doble'), ('groove', 'Ranura'), ('ridge', 'Cresta')], default='solid', max_length=250, null=True, verbose_name='Estilo de borde')),
                ('size_font', models.IntegerField(default='28', null=True, verbose_name='Tamaño de fuente (px)')),
                ('text_align', models.CharField(choices=[('left', 'IZQUIERDA'), ('center', 'CENTRADO'), ('justify', 'JUSTIFICADO'), ('right', 'DERECHA')], default='center', max_length=250, verbose_name='Alineacion del texto')),
                ('underline', models.BooleanField(default=True, verbose_name='Subrayado')),
                ('section', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.Menu', verbose_name='Seccion')),
            ],
        ),
        migrations.AddField(
            model_name='header',
            name='home',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='content_handler.ManagmentContent', verbose_name='Home'),
        ),
        migrations.AddField(
            model_name='header',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='user_header', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='footer',
            name='home',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='home_footer', to='content_handler.ManagmentContent', verbose_name='Home'),
        ),
        #migrations.AddField(
        #    model_name='footer',
        #    name='ms',
        #    field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='ms_footer', to='ms.Microsite', verbose_name='MicroSitio'),
        #),
        migrations.AddField(
            model_name='footer',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='user_footer', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Entrada')),
                ('stack_order', models.IntegerField(blank=True, null=True)),
                ('active', models.BooleanField(default=True, verbose_name='Activo')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('home', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='content_handler.ManagmentContent', verbose_name='Home')),
            ],
            options={
                'ordering': ['stack_order'],
            },
        ),
    ]