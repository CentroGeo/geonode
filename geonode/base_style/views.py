
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect


from geonode.content_handler.views import handler_home
from geonode.base_style.models import MainHeader
from geonode.base_style.forms import InterfaceForm

def index(request):
    obj = MainHeader.objects.all()
    styles = ''
    for i in obj:
        styles = i
    if str(type(styles)) == "<class 'geonode.base.models.MainHeader'>":
        if styles.cms:
            return handler_home(request, styles.cmsHome.url_name)
    return render(request, 'indexIdegeo.html', {'MainHeader': styles})

 
def varpass(request):
    head = MainHeader.objects.all()
    headStyle = ''
    for i in head:
        headStyle = i
    return render(request, 'vartemplate.html', {'MainHeader': headStyle})

def config_interface(request, id=''):
    if id != '':
        obj = get_object_or_404(MainHeader, id=id)
        form = InterfaceForm(request.POST or None, request.FILES or None, instance=obj)
    else: 
        obj = ''
        form = InterfaceForm(request.POST or None, request.FILES or None)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../../')
    return render(request, 'interface_data.html', {'form': form,'obj': obj})