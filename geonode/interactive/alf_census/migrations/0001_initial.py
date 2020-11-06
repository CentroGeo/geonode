# Generated by Django 2.2.12 on 2020-07-01 15:32

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('base', '0043_auto_20200527_0833'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlfTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('table_name', models.CharField(max_length=255, unique=True)),
                ('uploaded_file', models.FileField(upload_to='datatables')),
                ('create_table_sql', models.TextField(blank=True, null=True)),
                ('charset', models.CharField(max_length=255)),
                ('theme', models.CharField(max_length=255)),
                ('filter', models.BooleanField(default=False, help_text='Seleccione si la tabla tiene  una columna de filtro intermedio', verbose_name='Filtro Intermedio')),
            ],
        ),
        migrations.CreateModel(
            name='AlfTableAttribute',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attribute', models.CharField(help_text='name of attribute as stored in shapefile/spatial database', max_length=255, null=True, verbose_name='attribute name')),
                ('description', models.CharField(blank=True, help_text='description of attribute to be used in metadata', max_length=255, null=True, verbose_name='attribute description')),
                ('attribute_label', models.CharField(blank=True, help_text='title of attribute as displayed in GeoNode', max_length=255, null=True, verbose_name='attribute label')),
                ('attribute_type', models.CharField(default='xsd:string', help_text='the data type of the attribute (integer, string, geometry, etc)', max_length=50, verbose_name='attribute type')),
                ('visible', models.BooleanField(default=True, help_text='specifies if the attribute should be displayed in identify results', verbose_name='visible?')),
                ('display_order', models.IntegerField(default=1, help_text='specifies the order in which attribute should be displayed in identify results', verbose_name='display order')),
                ('count', models.IntegerField(default=1, help_text='count value for this field', verbose_name='count')),
                ('last_stats_updated', models.DateTimeField(default=datetime.datetime.now, help_text='date when attribute statistics were last updated', verbose_name='last modified')),
                ('alf_table', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='attribute_set', to='alf_census.AlfTable')),
            ],
        ),
        migrations.AddField(
            model_name='alftable',
            name='filter_column',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='alf_cfilter_attribute', to='alf_census.AlfTableAttribute'),
        ),
        migrations.CreateModel(
            name='AlfLayer',
            fields=[
                ('resourcebase_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.ResourceBase')),
                ('workspace', models.CharField(max_length=128)),
                ('store', models.CharField(max_length=128)),
                ('storeType', models.CharField(max_length=128)),
                ('name', models.CharField(max_length=128)),
                ('typename', models.CharField(blank=True, max_length=128, null=True)),
                ('charset', models.CharField(default='UTF-8', max_length=255)),
                ('alf_table', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='alf_census.AlfTable')),
            ],
            options={
                'abstract': False,
                'base_manager_name': 'objects',
            },
            bases=('base.resourcebase',),
        ),
    ]
