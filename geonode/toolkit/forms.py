from django.forms import ModelForm
from django import forms
from django.forms.widgets import TextInput
from geonode.toolkit.models import SpatialObject, ConfigureObjectSOA
from geonode.maps.models import Map

class ToolForm(ModelForm):
    class Meta:
        model = SpatialObject
        fields = "__all__"

class ConfigureObjectSOAForm(ModelForm):
    class Meta:
        model = ConfigureObjectSOA
        fields = "__all__"

class ConfigureObjectSOAFormWOTool(ModelForm):
    class Meta:
        model = ConfigureObjectSOA
        exclude = ["tool"]

class ConfigureObjectSOAFormMWView(ModelForm):
    # def __init__(self, filter, *args, **kwargs):
    #     super(ConfigureObjectSOAFormMWView, self).__init__(*args, **kwargs)
    #     self.fields['tool'].query_set = SpatialObject.objects.filter(filter)
        # self.tool.queryset = SpatialObject.objects.filter(filter)
    class Meta:
        model = ConfigureObjectSOA
        # fields = "__all__"
        fields = ["tool"]#,"help", "status"

class ConfigureObjectSOAFormMap(ModelForm):
    class Meta:
        model = ConfigureObjectSOA
        fields = ["tool","maps", "status"]


#class MapChartingToolsForm(ModelForm):
#
#    class Meta(ModelForm):
#        model = Map
#        fields = ['charting_tools']

class ConfigureObjectFormLayer(ModelForm):
    class Meta:
        model = ConfigureObjectSOA
        fields = ["tool", "layer_mv"]# , "help", "status"
