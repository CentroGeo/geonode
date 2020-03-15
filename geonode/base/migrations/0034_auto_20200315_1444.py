# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-03-15 14:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0033_resourcebase_doi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resourcebase',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='resourcebase',
            name='last_updated',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
