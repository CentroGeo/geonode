# Generated by Django 2.2.12 on 2020-06-30 20:45

import ckeditor.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import fontawesome.fields
import re


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('layers', '0027_auto_20170801_1228_squashed_0033_auto_20180606_1543'),
        ('groups', '0034_auto_20200512_1431'),
        ('wms_service', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LayeridMarker',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lat', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('lng', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('title', models.CharField(max_length=200, null=True, verbose_name='Titulo')),
                ('narrative', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Narrativa de Marcador')),
                ('icon', fontawesome.fields.IconField(blank=True, default='info', max_length=60, verbose_name='Icono')),
                ('options', models.CharField(blank=True, max_length=500, null=True, verbose_name='Opciones del marcador')),
            ],
        ),
        migrations.CreateModel(
            name='LayerIds',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('visible', models.BooleanField(default=False)),
                ('name', models.CharField(max_length=200, null=True)),
                ('title', models.CharField(max_length=200, null=True)),
                ('style', models.CharField(max_length=250, null=True)),
                ('default_style', models.CharField(max_length=250, null=True)),
                ('stack_order', models.IntegerField(blank=True, null=True)),
                ('narrative', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Narrativa de Capa')),
                ('layer', models.ForeignKey(db_column='layer_id', on_delete=django.db.models.deletion.CASCADE, to='layers.Layer')),
                ('markers', models.ManyToManyField(blank=True, to='mviewer.LayeridMarker')),
            ],
            options={
                'db_table': 'mviewer_topic_layer_ids',
            },
        ),
        migrations.CreateModel(
            name='MViewer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Nombre')),
                ('url_id', models.CharField(help_text='El identificador no puede tener espacios, caracteres especiales, ni arrobas', max_length=20, null=True, unique=True, validators=[django.core.validators.RegexValidator(re.compile('^[-a-zA-Z0-9_]+\\Z'), "Enter a valid 'slug' consisting of letters, numbers, underscores or hyphens.", 'invalid')], verbose_name='Complementa la URL del sitio (http://idegeo.centrogeo.org.mx/mviewer/)')),
                ('is_public', models.BooleanField(default=False, help_text='Activar para publicar el panorama', verbose_name='Es público')),
                ('template_style', models.CharField(default='Original', max_length=250, verbose_name='Seleccionar el tema del panorama')),
                ('no_topics', models.BooleanField(default=False, verbose_name='Sin panel de temáticas')),
                ('is_vertical', models.BooleanField(default=False, verbose_name='Activar para Panel Izquierdo o Desactivar para Panel Superior')),
                ('icon_title', models.BooleanField(default=False, verbose_name='Mostrar nombre de temática')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Imagen')),
                ('logo', models.CharField(blank=True, choices=[('O', 'Naranja'), ('B', 'Negro'), ('BS', 'Negro 2'), ('BR', 'Café'), ('G', 'Gris'), ('W', 'Blanco'), ('Y', 'Amarillo'), ('GR', 'Verde'), ('GC', 'Gris claro'), ('BL', 'Azul'), ('BE', 'Crema'), ('P', 'Morado'), ('S', 'Estrellas')], max_length=2, null=True, verbose_name='Logotipo')),
                ('description', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='Descripcion')),
                ('sentinel', models.BooleanField(default=False, help_text='Muestra tematica con capas del servicio Sentinel', verbose_name='Temática Sentinel')),
                ('bbox_x0', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('bbox_y0', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('bbox_x1', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('bbox_y1', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('config', models.CharField(blank=True, max_length=200, null=True, verbose_name='Mapa Base')),
                ('creation_date', models.DateField(auto_now_add=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.GroupProfile', verbose_name='Grupo')),
                ('layer_mask', models.ForeignKey(blank=True, help_text='Seleccione una capa tipo poligono como mascara.', null=True, on_delete=django.db.models.deletion.CASCADE, to='layers.Layer', verbose_name='Capa de mascara')),
                ('wms_services', models.ManyToManyField(blank=True, to='wms_service.WmsService', verbose_name='wms_services')),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, verbose_name='Nombre')),
                ('description', models.TextField(max_length=200, verbose_name='Descripcion')),
                ('icon', fontawesome.fields.IconField(blank=True, default='', max_length=60, verbose_name='Icono')),
                ('custome_icon', models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Icono Personalizado')),
                ('creation_date', models.DateField(auto_now_add=True)),
                ('stack_order', models.IntegerField(blank=True, null=True)),
                ('layer_ids', models.ManyToManyField(through='mviewer.LayerIds', to='layers.Layer', verbose_name='IDs de capas')),
                ('mviewer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='mviewer.MViewer', verbose_name='Visualizador')),
            ],
        ),
        migrations.AddField(
            model_name='layerids',
            name='topic',
            field=models.ForeignKey(db_column='topic_id', on_delete=django.db.models.deletion.CASCADE, to='mviewer.Topic'),
        ),
    ]
