# -*- coding: utf-8 -*-

from django import forms
from .models import AlfTable, AlfTableAttribute

THEME_CHOICES = (   
    ("conf_unidad_prod", "Conformación de la Unidad de Producción"),
    ("agricultura", "Agricultura"),
    ("vivero_invernadero", "Vivero e Invernadero"),
    ("ganaderia", "Ganadería"),
    ("forestal", "Aprovechamiento Forestal"),
    ("vehiculos", "Tractores, Vehículos y maquinaria"),
    ("creditos", "Obtención de créditos, seguros, apoyos y ahorro"),
    ("organizacion", "Organización para la producción y mano de obra"),
    ("capacitacion", "Capacitación"),
    ("terrenos", "Actividad económica en los terrenos"),
    ("caract_sociodemo", "Características sociodemográficas del productor"),
    ("caract_vivienda", "Características de la vivienda del productor"),
)

class UploadAlfTableForm(forms.ModelForm):
    uploaded_file = forms.FileField(label='Archivo')
    theme = forms.ChoiceField(choices=THEME_CHOICES, label='Tematica',required=True)

    class Meta:
        model = AlfTable
        fields = ['title', 'uploaded_file', 'theme', 'filter']
        exclude = ('table_name', 'create_table_sql','charset', 'filter_column')

    def clean(self):
        """
        Ensures the doc_file field is populated.
        """
        cleaned_data = super(UploadAlfTableForm, self).clean()
        title = self.cleaned_data.get('title')
        uploaded_file = self.cleaned_data.get('uploaded_file')

        if not title and uploaded_file:
            raise forms.ValidationError("Seleccione un archivo y escriba el titulo")

        return cleaned_data


class MetadataAlfTableForm(forms.ModelForm):
    theme = forms.ChoiceField(choices=THEME_CHOICES, label='Tematica', required=True)

    class Meta:
        model = AlfTable
        fields = ['title', 'theme']
        exclude = ('table_name', 'create_table_sql','charset', 'filter_column', 'uploaded_file', 'filter')


class AttributeAlfTableForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AttributeAlfTableForm, self).__init__(*args, **kwargs)
        self.fields['attribute'].widget.attrs['readonly'] = True
        self.fields['attribute_type'].widget.attrs['readonly'] = True
        self.fields['display_order'].widget.attrs['size'] = 3

    class Meta:
        model = AlfTableAttribute
        exclude = (
            'attribute_label',
            'last_stats_updated',
            'count')


class AlfTableFilterForm(forms.ModelForm):
    filter_column = forms.ModelChoiceField(queryset=AlfTableAttribute.objects.all(),
                                           required=True,
                                           label='Filtro')

    def __init__(self, *args, **kwargs):
        super(AlfTableFilterForm, self).__init__(*args, **kwargs)
        ta_choices = AlfTableAttribute.objects.filter(alf_table=self.instance.id)
        self.fields['filter_column'].queryset = ta_choices

    def save(self, *args, **kwargs):
        table_attr = self.cleaned_data['filter_column']
        self.instance.filter_column = table_attr
        return super(AlfTableFilterForm, self).save(*args, **kwargs)

    class Meta:
        model = AlfTable
        fields = ['filter_column']

    def clean(self):
        """
        # Ensures selection fields are not empty.
        """
        cleaned_data = super(AlfTableFilterForm, self).clean()
        table_attr = cleaned_data.get('filter_column')

        if not table_attr:
            raise forms.ValidationError("Debe seleccionar el campo")

        return cleaned_data
