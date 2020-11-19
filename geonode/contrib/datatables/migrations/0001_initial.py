# Generated by Django 2.2.12 on 2020-06-30 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('layers', '0027_auto_20170801_1228_squashed_0033_auto_20180606_1543'),
        ('base', '0043_auto_20200527_0833'),
    ]

    operations = [
        migrations.CreateModel(
            name='DataTable',
            fields=[
                ('resourcebase_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.ResourceBase')),
                ('object_id', models.PositiveIntegerField(blank=True, null=True)),
                ('table_name', models.CharField(max_length=255, unique=True)),
                ('tablespace', models.CharField(max_length=255)),
                ('uploaded_file', models.FileField(upload_to='datatables')),
                ('create_table_sql', models.TextField(blank=True, null=True)),
                ('charset', models.CharField(max_length=255)),
                ('content_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType')),
                ('layer_attribute', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='layer_attr', to='layers.Attribute')),
                ('table_attribute', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='table_attr', to='layers.Attribute')),
            ],
            options={
                'abstract': False,
                'base_manager_name': 'objects',
            },
            bases=('base.resourcebase',),
        ),
        migrations.CreateModel(
            name='GeocodeType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Examples: US Census Block, US County FIPS code, US Zip code, etc', max_length=255, unique=True)),
                ('description', models.CharField(blank=True, help_text='Short description for end user', max_length=255)),
                ('sort_order', models.IntegerField(default=10)),
            ],
            options={
                'ordering': ('sort_order', 'name'),
            },
        ),
        migrations.CreateModel(
            name='JoinTargetFormatType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Census Tract (6 digits, no decimal)', max_length=255)),
                ('description_shorthand', models.CharField(help_text='dddddd', max_length=255)),
                ('clean_steps', models.TextField(help_text='verbal description. e.g. Remove non integers. Check for empty string. Pad with zeros until 6 digits.')),
                ('regex_replacement_string', models.CharField(help_text='"[^0-9]"; Usage: re.sub("[^0-9]", "", "1234.99"', max_length=255)),
                ('python_code_snippet', models.TextField(blank=True)),
                ('tranformation_function_name', models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='TableJoin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('view_name', models.CharField(blank=True, max_length=255, null=True)),
                ('view_sql', models.TextField(blank=True, null=True)),
                ('matched_records_count', models.IntegerField(blank=True, null=True)),
                ('unmatched_records_count', models.IntegerField(blank=True, null=True)),
                ('unmatched_records_list', models.TextField(blank=True, null=True)),
                ('datatable', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datatables.DataTable')),
                ('join_layer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='join_layer', to='layers.Layer')),
                ('layer_attribute', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='layer_attribute', to='layers.Attribute')),
                ('source_layer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='source_layer', to='layers.Layer')),
                ('table_attribute', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='table_attribute', to='layers.Attribute')),
            ],
        ),
        migrations.CreateModel(
            name='JoinTarget',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField(blank=True, null=True)),
                ('attribute', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='layers.Attribute')),
                ('geocode_type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='datatables.GeocodeType')),
                ('layer', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='layers.Layer')),
                ('type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='datatables.JoinTargetFormatType')),
            ],
        ),
    ]