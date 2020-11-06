# -*- encoding: utf-8 -*-

# imports
import psycopg2
import json

# django
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseServerError
from django.template import RequestContext
from django.template.loader import render_to_string
from django.contrib.sites.models import Site


def lidar(request, template='lidar_rgb.html'):
    site = Site.objects.get(id=1)
    return render(request, template, {'site':site})

def catastro(request, template='catastro.html'):
    site = Site.objects.get(id=1)
    return render(request, template, {'site':site})
