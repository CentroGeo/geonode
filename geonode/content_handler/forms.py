#-*-encoding:utf-8-*-
from string import Template
from django.utils.safestring import mark_safe
from django.forms import ModelForm, ImageField
from django.conf import settings
from django import forms 
from geonode.content_handler.models import ManagmentContent, Header, MainHome, Menu, Content, Partner, Style, Footer, HeaderSectionStyle, ALIGN


class ManagmentContentForm(ModelForm):
    class Meta:
        model = ManagmentContent
        exclude = ['home', 'description', 'subtitle', 'object', 'color', 'thematic', 'template', 'public', 'copyright', 'primary_color', 'second_color', 'complementary_color', 'gray_colors']


class ManagmentContentUpdate(ModelForm):
    class Meta:
        model = ManagmentContent
        exclude = ['subtitle','color', 'thematic', 'template', 'public', 'copyright', 'primary_color', 'second_color', 'complementary_color', 'gray_colors']


class ManagmentTematizingForm(ModelForm):
    class Meta:
        model = ManagmentContent
        fields = ['thematic']


class ManagmentSectionTypeFrom(ModelForm):
    class Meta:
        model = ManagmentContent
        fields = ['template']


class ManagmentColorsForm(ModelForm):
    class Meta:
        model = ManagmentContent
        fields = ['color']


class ManagmentHexadecimalForm(ModelForm):
    class Meta:
        model = ManagmentContent
        fields = ['primary_color','second_color','complementary_color']


class HeaderForm(ModelForm):
    class Meta:
        model = Header
        exclude = ['home','is_hover', 'user', 'is_burger', 'is_search']


class HeaderFormC(ModelForm):
    class Meta:
        model = Header
        fields = '__all__'



class HeaderUpdate(ModelForm):
    class Meta:
        model = Header
        fields = '__all__'


class MainForm(ModelForm):
    class Meta:
        model = MainHome
        fields = '__all__'


class MainUpdate(ModelForm):
    class Meta:
        model = MainHome
        fields = '__all__'


class MainFormCarrucel(ModelForm):
    class Meta:
        model = MainHome
        exclude = ['home', 'section', 'image', 'is_carrucel', 'is_slider', 'is_smooth']


class MenuForm(ModelForm):
    class Meta:
        model = Menu
        exclude = ['home','section','slug']


class MenuUpdate(ModelForm):
    class Meta:
        model = Menu
        fields = '__all__'


class MenuFormCat(ModelForm):
    class Meta:
        model = Menu
        fields = ['name','link','blank','content','active','section_template','image']


# Esta clase es para el menu padre
class MenuFormParent(forms.ModelForm):
    active = forms.BooleanField(label='Mostrar/ocultar menú', required=False)
    class Meta:
        model = Menu
        fields = ['name', 'link', 'blank', 'comment_section', 'custome_back', 'content', 'active','has_mosaic','style_template']


class SimpleMenuForm(ModelForm):
    class Meta:
        model = Menu
        fields = ['name']


class MenuFormSection(ModelForm):
    class Meta:
        model = Menu
        fields = ['name', 'style_template', 'size', 'active']

class MenuFormSubsection(ModelForm):
    class Meta:
        model = Menu
        fields = ['name', 'link', 'image', 'content', 'section_template', 'active']

class MenuFormSectionContent(ModelForm):
    class Meta:
        model = Menu
        fields = ['name', 'content', 'active']


class ContentForm(ModelForm):
    class Meta:
        model = Content
        fields = '__all__'


class ContentUpdate(ModelForm):
    class Meta:
        model = Content
        fields = '__all__'


class SimpleContent(ModelForm):
    class Meta:
        model = Content
        exclude = ['home']


class SectionForm(ModelForm):
    class Meta:
        model = Menu
        exclude = ['home', 'parent_menu', 'is_section']


class SectionParentForm(ModelForm):
    class Meta:
        model = Menu
        exclude = ['home', 'is_divisor', 'is_institution', 'slug','content', 'image', 'description', 'link', 'blank', 'stack_order','parent_menu','section_template','is_section']


class UpdateSectionPartner(ModelForm):
    class Meta:
        model = Menu
        fields = ('name',)


class PictureWidget(forms.widgets.Widget):
    def render(self,name,value,attrs=None,**kwargs):
        html = Template("""
            Actualmente: 
            <img src="$media$link" style="width:100px; height: 100px;"/>
            <input type="checkbox" name="image-clear" id="image-clear_id">
            <label for="image-clear_id">Borrar</label><br><br>
            Cambio: 
            <input type="file" name="image" id="id_image">
            """)
        return mark_safe(html.substitute(media=settings.MEDIA_URL, link=value))


class PartnerForm(forms.ModelForm):
    class Meta:
        model = Partner
        fields = '__all__'


class PartnerUpdate(forms.ModelForm):
    #image = ImageField(widget=PictureWidget)
    class Meta:
        model = Partner
        exclude = ['home']


class StyleForm(ModelForm):
    class Meta:
        model = Style
        fields = '__all__'


class StylUpdateForm(ModelForm):
    class Meta:
        model = Style
        fields = ['font','primary_color', 'second_color','complementary_color','cover_color', 'background', 'plot']


class FooterForm(ModelForm):
    class Meta:
        model = Footer
        exclude = ['ms', 'home','style', 'user', 'active']


class StylFooterForm(ModelForm):
    class Meta:
        model = Style
        fields = ['primary_color','second_color'] #,'all'


class UpdatePartnerSection(ModelForm):
    name=forms.CharField(label="Institución")
    image=forms.ImageField(label="Logo")
    link=forms.URLField(label="URL")
    class Meta:
        model = Menu
        fields = ('name','image','link')


class HeaderSectionForm(ModelForm):
    text_align=forms.ChoiceField(label="Alineacion del texto", choices=ALIGN, widget=forms.RadioSelect())
    class Meta:
        model = HeaderSectionStyle
        exclude = ['section']