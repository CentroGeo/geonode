import re
from dal import autocomplete
from django import forms
from django.utils.translation import ugettext, ugettext_lazy as _
from .models import DataTable
from geonode.base.forms import ResourceBaseForm
from django.contrib.contenttypes.models import ContentType
from django.forms import HiddenInput, TextInput
from geonode.layers.models import Layer, Attribute
from geonode.base.enumerations import CHARSETS

"""
Specify Data Table Delimiter Choices
"""
#   Delimiter choices
#   For each delimiter, specify a "varname", "value", and "friendly_name"
#
DELIMITER_TYPE_INFO = ( dict(varname='COMMA', value=',', friendly_name='Comma Separated (.csv)'),
                        dict(varname='TAB', value='\t', friendly_name='Tab Separated (.tab)'),
                    )
assert len(DELIMITER_TYPE_INFO) > 1, "DELIMITER_TYPE_INFO must have at least one value"

DELIMITER_TYPE_CHOICES = [ (dt['varname'], dt['friendly_name']) for dt in DELIMITER_TYPE_INFO] # choices for Form
DELIMITER_VALUE_LOOKUP = dict( (dt['varname'], dt['value']) for dt in DELIMITER_TYPE_INFO)  # value look up for form "clean"
DEFAULT_DELIMITER = DELIMITER_TYPE_INFO[0]['varname']   # form default value


class DataTableForm(ResourceBaseForm):

    resource = forms.ChoiceField(label='Asociado a')

    def __init__(self, *args, **kwargs):
        super(DataTableForm, self).__init__(*args, **kwargs)
        rbases = list(Layer.objects.all())
        rbases.sort(key=lambda x: x.title)
        rbases_choices = []
        rbases_choices.append(['no_link', '---------'])
        for obj in rbases:
            type_id = ContentType.objects.get_for_model(obj.__class__).id
            obj_id = obj.id
            form_value = "type:%s-id:%s" % (type_id, obj_id)
            display_text = '%s (%s)' % (obj.title, obj.polymorphic_ctype.model)
            rbases_choices.append([form_value, display_text])
        self.fields['resource'].choices = rbases_choices
        if self.instance.content_type:
            self.fields['resource'].initial = 'type:%s-id:%s' % (
                self.instance.content_type.id, self.instance.object_id)

    def save(self, *args, **kwargs):
        contenttype_id = None
        contenttype = None
        object_id = None
        resource = self.cleaned_data['resource']
        if resource != 'no_link':
            matches = re.match("type:(\d+)-id:(\d+)", resource).groups()
            contenttype_id = matches[0]
            object_id = matches[1]
            contenttype = ContentType.objects.get(id=contenttype_id)
        self.cleaned_data['content_type'] = contenttype_id
        self.cleaned_data['object_id'] = object_id
        self.instance.object_id = object_id
        self.instance.content_type = contenttype
        return super(DataTableForm, self).save(*args, **kwargs)

    class Meta(ResourceBaseForm.Meta):
        model = DataTable
        fields = ['owner', 'metadata_author_ext', 'title','abstract','purpose','date',  'category',
                  'edition', 'source', 'rights', 'administrative_name', 'poc','external_person',
                  'temporal_extent_start', 'temporal_extent_end','supplemental_information', 'keywords',
                 ]

        exclude = ResourceBaseForm.Meta.exclude + (
            'default_style',
            'styles',
            'upload_session',
            'service'
            # Estos campos no son necesarios para Centro Geo
            'metadata_author',
            'detail_url',
            'colaborators'
            )
        # widgets = autocomplete_light.get_widgets_dict(DataTable)

class UploadDataTableForm(forms.ModelForm):
    uploaded_file = forms.FileField(label='Archivo')
    delimiter_type = forms.ChoiceField(
        choices=DELIMITER_TYPE_CHOICES,
        initial=DEFAULT_DELIMITER,
        label='Tipo de separador',
        required=False)
    no_header_row = forms.BooleanField(initial=False, required=False)
    """
    charset = forms.ChoiceField(
        choices=CHARSETS,
        initial=CHARSETS[1][0],
        label="Conjunto de caracteres",
        required=False,
        help_text=_("Seleccione el conjunto de caracteres o dejar el predeterminado"),
        widget=forms.Select())
    """
    resource = forms.CharField(
        required=True,
        label=_("Link to"),
        help_text="Recurso al que desea asociar esta Tabla",
        widget=TextInput(
            attrs={
                'name': 'title__contains',
                'id': 'resource'}))

    class Meta:
        model = DataTable
        fields = ['title', 'uploaded_file', 'delimiter_type', 'no_header_row', 'resource']
        exclude = ('table_name','charset',)

    def clean(self):
        """
        Ensures the doc_file or the doc_url field is populated.
        """
        cleaned_data = super(UploadDataTableForm, self).clean()
        title = self.cleaned_data.get('title')
        uploaded_file = self.cleaned_data.get('uploaded_file')
        resource = self.cleaned_data.get('resource')

        if not title:
            raise forms.ValidationError("El recurso debe tener un titulo")

        # if not resource:
        #    raise forms.ValidationError("La tabla debe tener un archivo y recurso asociado")

        return cleaned_data

    def clean_delimiter_type(self):
        """
        Return actual delimiter value.  e.g. form may have "COMMA" but return ","
        """
        delim = self.cleaned_data.get('delimiter_type', None)
        if delim is None or len(delim) ==0:
            # If no delim is specified, default to a comma
            delim_value = DELIMITER_VALUE_LOOKUP.get(DEFAULT_DELIMITER, None) 
        else:
            delim_value = DELIMITER_VALUE_LOOKUP.get(delim, None)
        if delim_value is None:
            raise forms.ValidationError(_('Invalid value'))

        return delim_value


"""
Se implementa ModelChoiceField personalizado para poder ver
el atributo y su tipo, en el cuadro de seleccion.
"""
class UserModelChoiceField(forms.ModelChoiceField):

    def label_from_instance(self, obj):
        if 'string' in obj.attribute_type or obj.attribute_type == 'unicode':
            attr_label = 'Caracter'
        elif 'int' in obj.attribute_type:
            attr_label = 'Entero'
        else:
            attr_label = 'Desconocido'
        label = '%s (%s)' % (obj.attribute, attr_label)
        return label


class DataTableJoinForm(forms.ModelForm):
    layer_attribute = UserModelChoiceField(queryset=Attribute.objects.all(),
                                           required=True,
                                           label='Atributo de Capa')
    table_attribute = UserModelChoiceField(queryset=Attribute.objects.all(),
                                           required=True,
                                           label='Atributo de Tabla')

    inner_join = forms.BooleanField(label='Conservar solo registros coincidentes',
                                    required = False)

    def __init__(self, *args, **kwargs):
        super(DataTableJoinForm, self).__init__(*args, **kwargs)
        la_choices = Attribute.objects.filter(resource=self.instance.resource.id).exclude(attribute='the_geom')
        ta_choices = Attribute.objects.filter(resource=self.instance.id)
        self.fields['layer_attribute'].queryset = la_choices
        self.fields['table_attribute'].queryset = ta_choices

    def save(self, *args, **kwargs):
        layer_attr = self.cleaned_data['layer_attribute']
        table_attr = self.cleaned_data['table_attribute']
        self.instance.layer_attribute = layer_attr
        self.instance.table_attribute = table_attr
        return super(DataTableJoinForm, self).save(*args, **kwargs)

    class Meta:
        model = DataTable
        fields = ['layer_attribute', 'table_attribute']

    def clean(self):
        """
        # Ensures selection fields are not empty.
        """
        cleaned_data = super(DataTableJoinForm, self).clean()
        layer_attr = cleaned_data.get('layer_attribute')
        table_attr = cleaned_data.get('table_attribute')

        if not layer_attr or not table_attr:
            raise forms.ValidationError("Debe seleccionar ambos campos")

        return cleaned_data
