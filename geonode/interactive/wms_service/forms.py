# -*- coding: utf-8 -*-
from django import forms
from geonode.interactive.wms_service.models import WmsService

class WmsServiceForm(forms.ModelForm):

    class Meta:
        model = WmsService
        fields = ("name", "base_url", "description")
        widgets = {
            'base_url': forms.TextInput(
                attrs={'id': 'wmsBaseurl', 'required': True}
            ),
            'name': forms.TextInput(
                attrs={'id': 'wmsName', 'required': True}
            ),
            'description': forms.Textarea(
                attrs={'id': 'wmsDescription', 'placeholder': 'Describa el servicio (Opcional)'}
            ),
        }