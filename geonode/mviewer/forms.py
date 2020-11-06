from dal import autocomplete

from django.forms import ModelForm
from django import forms
from geonode.mviewer.models import MViewer, Topic, LayerIds, LayeridMarker


class MViewerForm(ModelForm):
    template_style = forms.ChoiceField(
        label='Seleccionar el tema del panorama',
        choices=MViewer.TEMA
    )
    def __init__(self, *args, **kwargs):
        super(MViewerForm, self).__init__(*args, **kwargs)
        self.fields['bbox_x0'].widget.attrs['readonly'] = True
        self.fields['bbox_y0'].widget.attrs['readonly'] = True
        self.fields['bbox_x1'].widget.attrs['readonly'] = True
        self.fields['bbox_y1'].widget.attrs['readonly'] = True

    class Meta:
        model = MViewer
        exclude = ['logo', 'wms_services']
        widgets = {
            'layer_mask': autocomplete.ModelSelect2(url='autocomplete_layer')
        }


class TopicForm(ModelForm):
    class Meta:
        model = Topic
        exclude = ['mviewer', 'layer_ids', 'stack_order']


class MViewerFormAll(ModelForm):
    def __init__(self, *args, **kwargs):
        super(MViewerFormAll, self).__init__(*args, **kwargs)
        self.fields['bbox_x0'].widget.attrs['readonly'] = True
        self.fields['bbox_y0'].widget.attrs['readonly'] = True
        self.fields['bbox_x1'].widget.attrs['readonly'] = True
        self.fields['bbox_y1'].widget.attrs['readonly'] = True

    class Meta:
        model = MViewer
        fields = '__all__'

        widgets = {
            'layer_mask': autocomplete.ModelSelect2(url='autocomplete_layer')
        }


class LayerNarrativeForm(ModelForm):
    class Meta:
        model = LayerIds
        fields = ('narrative',)


class MarkerNarrativeForm(ModelForm):
    class Meta:
        model = LayeridMarker
        fields = ('title', 'narrative')


class MarkerIconForm(ModelForm):
    class Meta:
        model = LayeridMarker
        fields = ('icon',)