from django import forms
from geonode.base_style.models import MainHeader

class InterfaceForm(forms.ModelForm):
    class Meta:
        model = MainHeader
        fields = "__all__"