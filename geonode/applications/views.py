import json

from django.http import HttpResponse, HttpResponseRedirect, Http404, HttpResponseNotAllowed, HttpResponseServerError
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.template import RequestContext

from geonode.applications.forms import ApplicationsForm

# Create your views here.
@login_required
def create_application(request):
    if request.method == 'POST':
        ms_form = ApplicationsForm(request.POST, request.FILES)
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect('../../mviewer')
    else:
        ms_form = ApplicationsForm()
    return render(request, 'apps_form.html', {'form': ms_form})
