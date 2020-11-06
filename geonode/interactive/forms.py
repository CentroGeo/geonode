# -*- coding: utf-8 -*-
from django import forms
from geonode.interactive.models import QuickMap

class QuickMapForm(forms.ModelForm):

    class Meta:
        model = QuickMap
        fields = ("title", "abstract")
        widgets = {
            'title': forms.TextInput(
                attrs={'id': 'title', 'required': True}
            ),
            'abstract': forms.Textarea(
                attrs={'id': 'abstract', 'required': True, 'placeholder': 'Describe tu composicion...'}
            ),
        }
