from django.forms import ModelForm
from geonode.applications.models import Applications


class ApplicationsForm(ModelForm):
    class Meta:
        model = Applications
