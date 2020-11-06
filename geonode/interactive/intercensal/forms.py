# -*- coding: utf-8 -*-

from django import forms
from .models import CustomTable, TableAttribute

THEME_CHOICES = (   
    ("poblacion", "Población"),
    ("migracion", "Migración"),
    ("etnicidad", "Etnicidad"),
    ("educacion", "Educación"),
    ("salud", "Servicios de salud"),
    ("economia", "Características económicas"),
    ("no_remunerado", "Trabajo no remunerado"),
    ("conyugal", "Situación conyugal"),
    ("hogares", "Hogares"),
    ("vivienda", "Vivienda"),
    ("alimentacion", "Alimentación"),
)

class UploadCustomTableForm(forms.ModelForm):
    uploaded_file = forms.FileField(label='Archivo')
    theme = forms.ChoiceField(choices=THEME_CHOICES, label='Tematica',required=True)

    class Meta:
        model = CustomTable
        fields = ['title', 'uploaded_file', 'theme', 'filter']
        exclude = ('table_name', 'create_table_sql','charset', 'filter_column')

    def clean(self):
        """
        Ensures the doc_file field is populated.
        """
        cleaned_data = super(UploadCustomTableForm, self).clean()
        title = self.cleaned_data.get('title')
        uploaded_file = self.cleaned_data.get('uploaded_file')

        if not title and uploaded_file:
            raise forms.ValidationError("Seleccione un archivo y escriba el titulo")

        return cleaned_data


class MetadataCustomTableForm(forms.ModelForm):
    theme = forms.ChoiceField(choices=THEME_CHOICES, label='Tematica', required=True)

    class Meta:
        model = CustomTable
        fields = ['title', 'theme']
        exclude = ('table_name', 'create_table_sql','charset', 'filter_column', 'uploaded_file', 'filter')


class AttributeTableForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AttributeTableForm, self).__init__(*args, **kwargs)
        self.fields['attribute'].widget.attrs['readonly'] = True
        self.fields['attribute_type'].widget.attrs['readonly'] = True
        self.fields['display_order'].widget.attrs['size'] = 3

    class Meta:
        model = TableAttribute
        exclude = (
            'custom_table_id',
            'attribute_label',
            # 'visible',
            'last_stats_updated',
            'count')


class TableCFilterForm(forms.ModelForm):
    filter_column = forms.ModelChoiceField(queryset=TableAttribute.objects.all(),
                                           required=True,
                                           label='Filtro')

    def __init__(self, *args, **kwargs):
        super(TableCFilterForm, self).__init__(*args, **kwargs)
        ta_choices = TableAttribute.objects.filter(custom_table=self.instance.id)
        self.fields['filter_column'].queryset = ta_choices

    def save(self, *args, **kwargs):
        table_attr = self.cleaned_data['filter_column']
        self.instance.filter_column = table_attr
        return super(TableCFilterForm, self).save(*args, **kwargs)

    class Meta:
        model = CustomTable
        fields = ['filter_column']

    def clean(self):
        """
        # Ensures selection fields are not empty.
        """
        cleaned_data = super(TableCFilterForm, self).clean()
        table_attr = cleaned_data.get('filter_column')

        if not table_attr:
            raise forms.ValidationError("Debe seleccionar el campo")

        return cleaned_data
