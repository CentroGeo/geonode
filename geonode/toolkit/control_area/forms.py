from django.forms import ModelForm
from django import forms
from geonode.toolkit.control_area.models import ControlArea

class ControlAreaForm(ModelForm):
    class Meta:
        model = ControlArea
        exclude = ["conf","user_sos", "status"]

class ControlAreaAllForm(ModelForm):
    class Meta:
        model = ControlArea
        fields = "__all__"