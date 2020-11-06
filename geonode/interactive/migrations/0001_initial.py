# Generated by Django 2.2.12 on 2020-06-30 20:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import geonode.security.models
import geonode.utils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='QuickMap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('abstract', models.TextField(blank=True, verbose_name='abstract')),
                ('thumbnail_url', models.TextField(blank=True, null=True)),
                ('detail_url', models.CharField(blank=True, max_length=255, null=True)),
                ('zoom', models.IntegerField(verbose_name='zoom')),
                ('projection', models.CharField(max_length=32, verbose_name='projection')),
                ('center_x', models.FloatField(verbose_name='center X')),
                ('center_y', models.FloatField(verbose_name='center Y')),
                ('bbox_x0', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('bbox_x1', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('bbox_y0', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('bbox_y1', models.DecimalField(blank=True, decimal_places=10, max_digits=19, null=True)),
                ('config', models.TextField(verbose_name='JSON Configuration')),
                ('last_modified', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Owner')),
            ],
            bases=(models.Model, geonode.security.models.PermissionLevelMixin),
        ),
        migrations.CreateModel(
            name='QMapLayer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stack_order', models.IntegerField(verbose_name='stack order')),
                ('format', models.CharField(blank=True, max_length=200, null=True, verbose_name='format')),
                ('name', models.CharField(max_length=200, null=True, verbose_name='name')),
                ('opacity', models.FloatField(default=1.0, verbose_name='opacity')),
                ('styles', models.CharField(blank=True, max_length=200, null=True, verbose_name='styles')),
                ('transparent', models.BooleanField(default=False, verbose_name='transparent')),
                ('group', models.CharField(blank=True, max_length=200, null=True, verbose_name='group')),
                ('fixed', models.BooleanField(default=False, verbose_name='fixed')),
                ('visibility', models.BooleanField(default=True, verbose_name='visibility')),
                ('ows_url', models.URLField(blank=True, null=True, verbose_name='ows URL')),
                ('layer_params', models.TextField(verbose_name='layer params')),
                ('source_params', models.TextField(verbose_name='source params')),
                ('local', models.BooleanField(default=False)),
                ('quick_map', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='qlayer_set', to='interactive.QuickMap')),
            ],
            options={
                'ordering': ['stack_order'],
            },
            bases=(models.Model, geonode.utils.GXPLayerBase),
        ),
    ]
