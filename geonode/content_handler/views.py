#-*-encoding:utf-8-*-
import random
import json
from itertools import chain

from django.template import RequestContext
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.sites.models import Site
from django.core.exceptions import PermissionDenied
from django.views.decorators.clickjacking import xframe_options_exempt
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.urls import reverse
from django.db import connections

from geonode.people.models import Profile
from geonode.content_handler.models import ManagmentContent, Menu, Header, MainHome, Content, Partner, Style, Footer, HeaderSectionStyle
from geonode.content_handler.forms import ManagmentContentForm, ManagmentContentUpdate, \
    HeaderForm, HeaderUpdate, MainForm, MainUpdate, MenuForm, MenuUpdate, HeaderFormC, MainFormCarrucel, MenuFormCat, MenuFormSection, SimpleMenuForm, \
    ContentForm, ContentUpdate, SimpleContent, ManagmentTematizingForm, ManagmentColorsForm, SectionForm, PartnerForm, PartnerUpdate, MenuFormParent, \
    MenuFormSectionContent, SectionParentForm, ManagmentSectionTypeFrom, ManagmentHexadecimalForm, StyleForm, StylUpdateForm, \
    FooterForm, StylFooterForm, UpdateSectionPartner, UpdatePartnerSection, MenuFormSubsection, HeaderSectionForm


# ADMIN CONTENT HANDLER HOMES -->
@login_required
def content_handler_list(request):
    site1 = Site.objects.get(id=1).domain
    site = site1+"hd/"
    group_list = []
    if request.user.is_authenticated:
        group_list = request.user.group_list_all()

    if request.user.is_superuser:
        ms = ManagmentContent.objects.all()
    else:
        ms = ManagmentContent.objects.filter(group__in=group_list)
    return render(request,'home_list.html',{'items':ms,'site':site})


@login_required
def content_handler_detail(request, ch_id):
    header = None
    style = None
    footer = None
    style_footer = None
    site1 = Site.objects.get(id=1).domain
    site = site1+"/cms/"
    ch = get_object_or_404(ManagmentContent, id= ch_id)
    main_content = MainHome.objects.filter(active=True).order_by('link_order')
    menus = Menu.objects.filter(home=ch_id).filter(parent_menu=None).filter(is_section=False).order_by('stack_order')
    sections = Menu.objects.filter(active=True).filter(home=ch_id).filter(parent_menu=None).filter(is_section=True).order_by('stack_order')
    content = Content.objects.filter(active=True).order_by('stack_order')
    try:
        header = Header.objects.get(home=ch_id)
    except Exception as e:
        print(e)
    try:
        style = Style.objects.get(header=header)
    except Exception as e:
        print(e)
    try:
        footer = Footer.objects.get(home=ch.id)
    except Exception as e:
        print(e)
    if footer:
        try:
            style_footer = Style.objects.get(footer=footer)
        except Exception as e:
            print(e)
    return render(request,'home_detail.html', {
        'ms': ch,
        'site': site,
        'header': header,
        'main_content': main_content,
        'menus': menus,
        'sections': sections,
        'content': content,
        'style': style,
        'footer': footer,
        'style_footer': style_footer
    })


@login_required
def upload_handler(request):
    no_group = False
    if request.method == 'POST':
        mc_form = ManagmentContentForm(request.POST, request.FILES)
        if mc_form.is_valid():
            mc_form.save()
            return HttpResponseRedirect('../')
    else:
        mc_form = ManagmentContentForm()
        my_groups = request.user.group_list_all()
        mc_form.fields["group"].queryset = my_groups
        if not my_groups:
            no_group = True
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'home_form.html', {'form': mc_form, 'profile':profile, 'no_group': no_group})


@login_required
def update_handler(request, ch_id):
    obj = get_object_or_404(ManagmentContent, id=ch_id)
    ms_form = ManagmentContentUpdate(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect('../')
    return render(request,'home_form.html',{'form':ms_form, 'profile':profile, 'obj':obj})


@login_required
def remove_handler(request, ch_id, template='home_remove.html'):
    try:
        mc = get_object_or_404(ManagmentContent, id=ch_id)
        if request.method == 'GET':
            return render(requeest,template,{"mc": mc})
        if request.method == 'POST':
            mc.delete()
            return HttpResponseRedirect(reverse("content_handler_list"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this ms_gestor_list',
            content_type="text/plain",
            status=401
        )


@login_required
def upload_header(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    us = request.user
    if request.method == 'POST':
        title = request.POST.get('title', False)
        description = request.POST.get('description', False)
        is_hover = request.POST.get('is_hover', False)
        link_1 = request.POST.get('link_1', False)
        alt_1 = request.POST.get('alt_1', False)
        link_2 = request.POST.get('link_1', False)
        alt_2 = request.POST.get('alt_1', False)
        link_3 = request.POST.get('link_1', False)
        alt_3 = request.POST.get('alt_1', False)
        link_4 = request.POST.get('link_1', False)
        alt_4 = request.POST.get('alt_1', False)
        link_5 = request.POST.get('link_1', False)
        alt_5 = request.POST.get('alt_1', False)
        is_burger = False
        is_search = False
        header = HeaderFormC({'home': ch_id, 'title': title, 'description': description, 'is_hover': is_hover
                                , 'link_1': link_1, 'alt_1': alt_1
                                , 'link_2': link_2, 'alt_2': alt_2
                                , 'link_3': link_3, 'alt_3': alt_3
                                , 'link_4': link_4, 'alt_4': alt_4
                                , 'link_5': link_5, 'alt_5': alt_5
                                , 'user': us.id, 'is_burger': is_burger, 'is_search': is_search
                             }, request.FILES)
        if header.is_valid():
            header.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        header = HeaderForm()
    profile = get_object_or_404(Profile, username=us)
    return render(request,'hd_header_form.html', {'form': header, 'profile':profile, 'home':home})


@login_required
def update_header(request, ch_id, h_id):
    obj = get_object_or_404(Header, id=h_id)
    header = HeaderForm(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if header.is_valid():
            header.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    return render(request,'hd_header_update.html',{'form':header, 'profile':profile, 'obj':obj})


@login_required
def remove_header(request, h_id, template='hd_header_remove.html'):
    try:
        head = get_object_or_404(Header, id=h_id)
        if request.method == 'GET':
            return render(request,template,{"head": head})
        if request.method == 'POST':
            head.delete()
            return HttpResponseRedirect(reverse("content_handler_list"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this content_handler_list',
            content_type="text/plain",
            status=401
        )


@login_required
def main_list(request, ch_id):
    carrucel_section = 1
    slider_section = 2
    smooth_section = 3
    home = get_object_or_404(ManagmentContent, id=ch_id)
    carrucel = MainHome.objects.filter(home=ch_id).filter(is_carrucel=True).order_by('link_order')
    slider = MainHome.objects.filter(active=True).filter(is_slider=True).filter(home=ch_id).order_by('link_order')
    smooth = MainHome.objects.filter(active=True).filter(is_smooth=True).filter(home=ch_id).order_by('link_order')
    site1 = Site.objects.get(id=1).domain
    site = site1+"handler/"
    return render(request,'hd_interactive.html',
                              {'ms':home,
                               'site':site,
                               'carrucel': carrucel,
                               'slider': slider,
                               'smooth': smooth,
                               'car_sec': carrucel_section,
                               'slider_section': slider_section,
                               'smooth_section': smooth_section
                               })


@login_required
def upload_main(request, ch_id, section_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    if request.method == 'POST':
        carrucel = False
        slider = False
        smooth = False
        section_name = 'N/A'
        if str(section_id) in '1':
            carrucel = True
            section_name = 'car'
        elif str(section_id) in '2':
            slider = True
            section_name = 'sli'
        elif str(section_id) in '3':
            section_name = 'smo'
            smooth = True
        else:
            return Http404
        title = request.POST.get('title', False)
        description = request.POST.get('description', False)
        link = request.POST.get('link', False)
        news = request.POST.get('news', False)
        active = request.POST.get('active', False)
        created = request.POST.get('timestamp', False)
        link_order = request.POST.get('link_order')
        ms_form = MainForm(
            {'home': ch_id, 'section':section_name, 'title': title, 'description': description, 'link':link, 'news': news,
             'is_carrucel':carrucel,'is_slider':slider, 'is_smooth':smooth,
             'active': active, 'created':created, 'modified':created, 'link_order': link_order}
            , request.FILES)
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        ms_form = MainFormCarrucel()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'hd_main_form.html', {
        'form': ms_form, 'profile':profile, 'home':home
    })


@login_required
def update_main(request, main_id, ch_id):
    obj = get_object_or_404(MainHome, id=main_id)
    ms_form = MainFormCarrucel(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect("../../main_list/"+ch_id)
    return render(request,'hd_main_form.html',{'form':ms_form, 'profile':profile, 'obj':obj})


@login_required
def remove_main(request, main_id, template='hd_main_remove.html'):
    try:
        main = get_object_or_404(MainHome, id=main_id)
        if request.method == 'GET':
            return render(request, template, {
                "main": main
            })
        if request.method == 'POST':
            main.delete()
            return HttpResponseRedirect(reverse("content_handler_list"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this content_handler_list',
            content_type="text/plain",
            status=401
        )


@login_required
def upload_submenu(request, ch_id, menu_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    menu = get_object_or_404(Menu, id=menu_id)
    if request.method == 'POST':
        menu_form = MenuFormCat(request.POST, request.FILES)
        if menu_form.is_valid():
            instance = menu_form.save(commit=False)
            instance.home = home
            instance.parent_menu = menu
            instance.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        menu_form = MenuFormCat()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'hd_submenu_form.html', {'form': menu_form, 'profile': profile, 'home': home, 'menu':menu})


@login_required
def upload_menu(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    if request.method == 'POST':
        ms_form = MenuFormCat(request.POST, request.FILES)
        if ms_form.is_valid():
            instance = ms_form.save(commit=False)
            menu = Menu.objects.filter(home=ch_id).filter(is_section=False).count()
            instance.home = home
            instance.size = '4'
            instance.stack_order = menu + 1
            instance.style_template = '3'
            instance.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        ms_form = MenuFormCat()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request, 'hd_menu_form.html', {'form': ms_form, 'profile': profile, 'home': home})


@login_required
def upload_menu_parent(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    if request.method == 'POST':
        ms_form = MenuFormParent(request.POST, request.FILES, initial={'active': True})
        if ms_form.is_valid():
            instance = ms_form.save(commit=False)
            menu = Menu.objects.filter(home=ch_id).filter(is_section=False).count()
            instance.home = home
            instance.size = '4'
            instance.stack_order = menu+1
            instance.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        ms_form = MenuFormParent(initial={'active': True})
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'hd_menu_form.html', {'form': ms_form, 'profile': profile, 'home': home})


@login_required
def upload_section(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    if request.method == 'POST':
        ms_form = MenuFormSection(request.POST, request.FILES)
        if ms_form.is_valid():
            instance = ms_form.save(commit=False)
            instance.home = home
            instance.is_section = True
            instance.save()
            return HttpResponseRedirect(reverse('header_section_style', args=[ch_id,instance.id]))
    else:
        ms_form = MenuFormSection()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'hd_section_form.html', {'form': ms_form, 'profile':profile, 'home':home, 'ch_id': ch_id})


@login_required
def upload_subsection(request, ch_id, menu_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    Menu_parent = get_object_or_404(Menu, id=menu_id)
    if request.method == 'POST':
        menu = Menu.objects.filter(home=ch_id).filter(is_section=True).count()
        menu_form = MenuFormSubsection(request.POST or None, request.FILES or None)
        if menu_form.is_valid():
            temp = menu_form.save(commit=False)
            temp.home = home
            temp.parent_menu = Menu_parent
            temp.stack_order = menu+1
            temp.save()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    else:
        menu_form = MenuFormSubsection()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request, 'hd_subsection_form.html', {'form': menu_form, 'profile': profile, 'home': home, 'menu': Menu_parent})


@login_required
def update_menu(request, ch_id, menu_id):
    obj = get_object_or_404(Menu, id=menu_id)
    if obj.parent_menu_id is not None:
        menu_form = MenuFormCat(request.POST or None, request.FILES or None, instance=obj)
    else:
        menu_form = MenuFormParent(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if menu_form.is_valid():
            menu_form.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    return render(request,'hd_menu_form.html',{'form':menu_form, 'profile':profile, 'obj':obj})


@login_required
def remove_menu(request, ch_id, menu_id, template='hd_menu_remove.html'):
    try:
        menu = get_object_or_404(Menu, id=menu_id)
        flag = False
        if menu.is_section:
            flag = True
        if request.method == 'GET':
            return render(request,template, {
                "menu": menu,
                "home": ch_id
            })
        if request.method == 'POST':
            menu.delete()
            if flag:
                return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
            else:
                return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this content_handler_list',
            content_type="text/plain",
            status=401
        )


"""
Desplegue del contenido de el home principal 
"""
@xframe_options_exempt
def handler_home(request, msurlname=None):
    style = None
    footer = None
    style_footer = None
    site = Site.objects.get(id=1).domain
    if request.user.is_authenticated:
        group_list = request.user.group_list_all()
    try:
        config = ManagmentContent.objects.get(url_name=msurlname)
        if str(config.thematic) in '0':
            raise Http404
        template = 'styles/handler_'+str(config.thematic)+'/style_'+str(config.thematic)+'.html'
    except ManagmentContent.DoesNotExist as e:
        raise Http404
    if not config.public:
        if config.group not in group_list:
            if not request.user.is_superuser:
                raise Http404

    try:
        header = Header.objects.get(home=config)
    except Header.DoesNotExist as e:
        print(e)
        raise Http404
    try:
        style = Style.objects.get(header=header)
    except Style.DoesNotExist as e:
        print(e)
        pass

    topics = Menu.objects.filter(parent_menu=None).filter(home=config).filter(active=True)\
        .filter(is_section=False).order_by('stack_order')
    sections = Menu.objects.filter(parent_menu=None).filter(home=config).filter(active=True).filter(
        is_section=True).order_by('stack_order')

    # sections = TopicEntry.objects.all().aggregate(Max('stack_order'))
    is_select = 0
    for t in sections:
        print(t.id)
        if t.id>is_select:
            is_select = t.id

    # items_list = list(chain(posts, ms, mviwers, documents))
    items_list = list(chain(topics))
    random.shuffle(items_list)
    news = MainHome.objects.filter(active=True).filter(home=config).filter(is_carrucel=True).order_by('link_order')
    content = Content.objects.filter(active=True).filter(home=config).order_by('stack_order')
    partner = Partner.objects.filter(home=config)

    try:
        footer = Footer.objects.get(home=config.id)
    except Footer.DoesNotExist as e:
        print(e)
        pass
    if footer:
        try:
            style_footer = Style.objects.get(footer=footer)
        except Style.DoesNotExist as e:
            print(e)
            pass

    return render(request,template, {'site':site,'topics': topics, 'partner':partner,
                                                                 'items_list': items_list, 'news': news, 'content':content, 'style':style,
                                                                 'header':header, 'home': config, 'is_select':is_select, 'sections': sections,
                                                                 'footer': footer, 'style_footer': style_footer
                                                                 })


@login_required
def sort_carrucel(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            link = get_object_or_404(MainHome, id=int(e))
            link.link_order = st_order
            link.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


def sort_sections_handler(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            section = get_object_or_404(Menu, id=int(e))
            section.stack_order = st_order
            section.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


@xframe_options_exempt
def content_multimedia(request, msurlname, slug):
    style = None
    footer = None
    style_footer = None
    if request.user.is_authenticated:
        group_list = request.user.group_list_all()
    try:
        config = ManagmentContent.objects.get(url_name=msurlname)
        template = 'styles/handler_'+str(config.thematic)+'/multimedia_'+str(config.thematic)+'.html'
        print(template)
    except ManagmentContent.DoesNotExist as e:
        raise Http404
    try:
        menu = Menu.objects.get(slug=slug)
        template = 'styles/handler_'+str(config.thematic)+'/multimedia_'+str(config.thematic)+'.html'
        print(template)
    except ManagmentContent.DoesNotExist as e:
        raise Http404
    if config.public != True:
        if not config.group in group_list:
            if not request.user.is_superuser:
                raise Http404

    try:
        header = Header.objects.get(home=config)
    except Header.DoesNotExist as e:
        print(e)
        raise Http404

    topics = Menu.objects.filter(parent_menu=None).filter(home=config).filter(active=True)\
        .filter(is_section=False).order_by('stack_order')
    sections = Menu.objects.filter(parent_menu=None).filter(home=config).filter(active=True).filter(
        is_section=True).order_by('stack_order')

    is_select = 0
    for t in sections:
        if t.id>is_select:
            is_select = t.id
    print(is_select)

    news = MainHome.objects.filter(active=True).filter(home=config).order_by('link_order')
    items_list = list(chain(news))
    random.shuffle(items_list)

    try:
        style = Style.objects.get(header=header)
    except Style.DoesNotExist as e:
        print(e)
        pass
    print(config.id)
    print('aqui es',config.id)
    try:
        footer = Footer.objects.get(home=config)
    except Footer.DoesNotExist as e:
        print(e)
        pass
    if footer:
        try:
            style_footer = Style.objects.get(footer=footer)
        except Style.DoesNotExist as e:
            print(e)
            pass

    return render(request,template, {'topics': topics, 'menu': menu, 'style':style,
                                    'items_list': items_list, 'others_news': news,
                                    'header':header, 'home':config, 'is_select':is_select,
                                    'sections':sections,'footer': footer, 'style_footer': style_footer})


@login_required
def upload_content(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    if request.method == 'POST':
        content = request.POST.get('content', False)
        stack_order = request.POST.get('stack_order', False)
        active = request.POST.get('active', False)
        created_at = request.POST.get('timestamp')

        ms_form = ContentForm({'home':ch_id, 'content':content, 'stack_order':stack_order, 'active':active, 'created_at':created_at}, request.FILES or None)
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect("../content_list/"+ch_id)
    else:
        ms_form = SimpleContent()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'content_form.html', {'form': ms_form, 'profile':profile, 'home':home})


@login_required
def update_content(request, ch_id, content_id):
    obj = get_object_or_404(Content, id=content_id)
    menu_form = SimpleContent(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if menu_form.is_valid():
            menu_form.save()
            return HttpResponseRedirect("../../content_list/"+ch_id)
    return render(request,'content_form.html',{'form':menu_form, 'profile':profile, 'obj':obj})


@login_required
def remove_content(request, ch_id, content_id, template='content_remove.html'):
    try:
        content = get_object_or_404(Content, id=content_id)
        if request.method == 'GET':
            return render(request,template,{
                "content": content,
                "home": ch_id
            })
        if request.method == 'POST':
            content.delete()
            return HttpResponseRedirect("../../content_list/"+ch_id)
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this content_handler_list',
            content_type="text/plain",
            status=401
        )


def hd_save_thmatizing(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_ms=query_data['id_ms']
        id_tematics = query_data['id_tematics']
        try:
            obj = get_object_or_404(ManagmentContent, id=id_ms)
            data_list.append(obj.url_name)
            colors_form = ManagmentTematizingForm({'thematic': id_tematics}, instance = obj)
            if colors_form.is_valid():
                colors_form.save()
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ManagmentContent.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )

    else:
        return HttpResponse("Solo Ajax")


def hd_grays_managment(request):
    if request.is_ajax():
        query_data = json.loads(request.POST['query_data'])
        id_ms = query_data['id_ms']
        grays = query_data['grays']
        obj = get_object_or_404(ManagmentContent, id=id_ms)
        obj.gray_colors = grays
        obj.save()

        return HttpResponse( json.dumps({'exito':'si'}), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")


def hd_save_color(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_ms=query_data['id_ms']
        id_color = query_data['id_color']
        try:
            obj = get_object_or_404(ManagmentContent, id=id_ms)
            data_list.append(obj.url_name)
            colors_form = ManagmentColorsForm({'color': id_color}, instance = obj)
            if colors_form.is_valid():
                colors_form.save()
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ManagmentContent.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")


@login_required
def hd_publish(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        ch_id=query_data['home']
        try:
            ms = get_object_or_404(ManagmentContent, id=ch_id)
            ms.public = True
            ms.save()
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ManagmentContent.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")


@login_required
def hd_publish_managment(request, ch_id):
    ms = get_object_or_404(ManagmentContent, id=ch_id)
    ms.public = True
    ms.save()
    return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))


@login_required
def update_section(request, ch_id, menu_id):
    obj = get_object_or_404(Menu, id=menu_id)
    if not obj.is_institution == True:
        if not obj.is_divisor == True:
            menu_form = SectionParentForm(request.POST or None, request.FILES or None, instance=obj)
        else:
            menu_form = UpdateSectionPartner(request.POST or None, request.FILES or None, instance=obj)
    else:
        menu_form = UpdateSectionPartner(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if menu_form.is_valid():
            menu_form.save()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    return render(request, 'hd_section_form.html',{'form':menu_form, 'profile':profile, 'obj':obj, 'ch_id': ch_id, 'menu_id': menu_id})


@login_required
def upload_partner(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    ms_form = MenuFormSectionContent()
    instance = ms_form.save(commit=False)
    instance.home = home
    instance.is_section = True
    instance.is_institution = True
    instance.save()

    return HttpResponseRedirect(reverse('section_list', args=[ch_id]))


@login_required
def upload_institution(request, ch_id, menu_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    menu = get_object_or_404(Menu, id=menu_id)
    if request.method == 'POST':
        menu_form = UpdatePartnerSection(request.POST, request.FILES)
        if menu_form.is_valid():
            instance = menu_form.save(commit=False)
            count_menu = Menu.objects.filter(home=ch_id).filter(is_section=True).filter(is_institution=True).count()
            instance.home = home
            instance.parent_menu = menu
            instance.stack_order = count_menu
            instance.save()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    else:
        menu_form = UpdatePartnerSection()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'hd_subsection_form.html', {'form': menu_form, 'profile': profile, 'home': home, 'menu':menu})

@login_required
def update_partner(request, ch_id, partner_id):
    obj = get_object_or_404(Partner, id=partner_id)
    menu_form = PartnerUpdate(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    institution = Partner.objects.filter(home_id=obj.home_id)
    if request.method == 'POST':
        if menu_form.is_valid():
            temp = menu_form.save(commit=False)
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    return render(request,'partner_form.html',{'form':menu_form, 'profile':profile, 'obj':obj,
                                'institution': institution})


@login_required
def remove_partner(request, ch_id, partner_id, template='partner_remove.html'):
    try:
        menu = get_object_or_404(Partner, id=partner_id)
        if request.method == 'GET':
            return render(request,template, {
                "menu": menu,
                "home": ch_id
            })
        if request.method == 'POST':
            menu.delete()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this content_handler_list',
            content_type="text/plain",
            status=401
        )


def sort_partner(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            section = get_object_or_404(Partner, id=int(e))
            section.stack_order = st_order
            section.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


@login_required
def section_list(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    sections = Menu.objects.filter(home=ch_id).filter(is_section=True).order_by('stack_order')
    partner = Partner.objects.filter(home=ch_id)
    site1 = Site.objects.get(id=1).domain
    site = site1 + "handler/"
    return render(request,'sections_list.html',
                              {'ms': home,
                               'site': site,
                               'partner': partner,
                               'sections': sections
                               })


@login_required
def hd_content_list(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    content = Content.objects.filter(home=ch_id).filter(active=True).order_by('stack_order')
    site1 = Site.objects.get(id=1).domain
    site = site1 + "handler/"
    return render('content.html',
                              {'ms': home,
                               'site': site,
                               'content': content
                               })


def sort_content(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            section = get_object_or_404(Content, id=int(e))
            section.stack_order = st_order
            section.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")


@login_required
def upload_section_content(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    if request.method == 'POST':
        ms_form = MenuFormSectionContent(request.POST, request.FILES)
        ms_form.fields['content'].required = True

        if ms_form.is_valid():
            instance = ms_form.save(commit=False)
            instance.home = home
            instance.is_section = True
            instance.save()
            return HttpResponseRedirect(reverse('header_section_style', args=[ch_id,instance.id]))
    else:
        ms_form = MenuFormSectionContent()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request,'content_form.html', {'form': ms_form, 'profile':profile, 'home':home})



@login_required
def add_divider(request, ch_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    ms_form = MenuFormSectionContent()
    instance = ms_form.save(commit=False)
    instance.home = home
    instance.is_section = True
    instance.is_divisor = True
    instance.save()

    return HttpResponseRedirect(reverse('section_list', args=[ch_id]))

@login_required
def update_section_content(request, ch_id, menu_id):
    obj = get_object_or_404(Menu, id=menu_id)
    menu_form = MenuFormSectionContent(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        menu_form.fields['content'].required = True
        if menu_form.is_valid():
            menu_form.save()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    return render(request,'hd_section_form.html', {'form': menu_form, 'profile': profile, 'obj': obj, 'ch_id': ch_id, 'menu_id': menu_id})


@login_required
def update_block(request, ch_id, menu_id):
    obj = get_object_or_404(Menu, id=menu_id)
    menu = get_object_or_404(Menu, id=obj.parent_menu_id)
    if menu.is_institution != True:
        menu_form = MenuFormSubsection(request.POST or None, request.FILES or None, instance=obj)
    else:
        menu_form = UpdatePartnerSection(request.POST or None, request.FILES or None, instance=obj)
    profile = get_object_or_404(Profile, username=request.user)
    if request.method == 'POST':
        if menu_form.is_valid():
            menu_form.save()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    return render(request,'hd_menu_form.html',{'form':menu_form, 'profile':profile, 'obj':obj, 'menu':menu})


"""
    método vía ajax en donde buscaremos el área que el usuario ingrese,
    en el cliente se valida que el área sea un valor numerico 
"""
# def search_area(request):
#     if request.is_ajax():
#         # se obtiene el parametro que regresa el request vía GET
#         area = request.GET['area']
#         # se define la capa a consultar
#         layer = 'poligonos_agricultura'
#         # se prepara la conección a la base de datos
#         cur = connections['datastore'].cursor()
#         # armamos el query, para traer el geojson del área seleccionada
#         sql = 'SELECT ST_AsGeoJSON(the_geom), area, descr_31 FROM "%s" WHERE area =' % layer \
#               + "'%s'" % area
#
#         common_geom = []
#         try:
#             # se ejecuta la consulta en un try por si algo sale mal
#             cur.execute(sql)
#             common_geom = cur.fetchall()
#         except Exception as e:
#             print e
#
#         corn_features = []
#         for r in common_geom:
#             # convertimos nuestro json en un diccionario python para poder obtener el primer row de la consulta
#             obj = json.loads(r[0])
#             # sí hay más de un poligono esto significa que es un multipolygon
#             if len(obj['coordinates']) > 1:
#                 feat = {"type": "Feature", "geometry": {"type": "MultiPolygon", "coordinates": obj['coordinates']},
#                         "properties": {"area": r[1], "description": r[2]}}
#             else:
#                 # si no, sólo es un poligono
#                 feat = {"type": "Feature", "geometry": {"type": "Polygon", "coordinates": obj['coordinates'][0]},
#                         "properties": {"area": r[1], "description": r[2]}}
#             # se agrega en una lista por los posibles multipoligonos
#             corn_features.append(feat)
#         common_geojson = {"type": "FeatureCollection", "features": corn_features}
#
#         return HttpResponse(json.dumps(common_geojson), content_type="application/json")
#     else:
#         return HttpResponse("Not ajax request")


def hd_save_section_type(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_ms=query_data['id_ms']
        id_tematics = query_data['id_tematics']
        print(id_tematics)
        try:
            obj = get_object_or_404(ManagmentContent, id=id_ms)
            data_list.append(obj.url_name)
            colors_form = ManagmentSectionTypeFrom({'template': id_tematics}, instance = obj)
            if colors_form.is_valid():
                colors_form.save()
                print("guardo")
            else:
                print("no guardo")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ManagmentContent.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )

    else:
        return HttpResponse("Solo Ajax")


"""
Guarda los colores hexadecimales para el home
"""
def hd_save_hexadecimal(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_home = query_data['id_home']
        primary=query_data['primary']
        second = query_data['second']
        complementary = query_data['complementary']
        try:
            obj = get_object_or_404(ManagmentContent, id=id_home)
            data_list.append(obj.url_name)
            colors_form = ManagmentHexadecimalForm({'primary_color': primary, 'second_color':second, 'complementary_color': complementary}, instance = obj)
            if colors_form.is_valid():
                colors_form.save()
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ManagmentContent.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")


"""
Si ya existen los colores hexadecimales para el home se muestran
"""
def hd_hexadecimal(request):
    if request.is_ajax():
        data_list = []
        query_data = json.loads(request.POST['query_data'])
        id_home = query_data['id_home']
        try:
            obj = get_object_or_404(ManagmentContent, id=id_home)
            data_list.append(obj.primary_color)
            data_list.append(obj.second_color)
            data_list.append(obj.complementary_color)
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
        except ManagmentContent.DoesNotExist:
            print("Error No existe el objeto")
            return HttpResponse( json.dumps(data_list), content_type='application/json' )
    else:
        return HttpResponse("Solo Ajax")



@login_required
def upload_style_header(request, ch_id, header_id):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    header = get_object_or_404(Header, id=header_id)
    form = StyleForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        temp = form.save(commit=False)
        temp.header = header
        temp.save()
        return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        form = StylUpdateForm()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request, 'style_header_form.html', {'form': form, 'profile':profile,'home': home})


@login_required
def update_style_header(request, ch_id, id_style):
    home = get_object_or_404(ManagmentContent, id=ch_id)
    obj = get_object_or_404(Style, id=id_style)
    ms_form = StylUpdateForm(request.POST or None, request.FILES or None, instance=obj)
    if request.method == 'POST':
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    return render(request, 'style_header_form.html',{'form':ms_form, 'obj':obj,'home': home})


@login_required
def upload_footer(request, ch_id):
    obj = get_object_or_404(ManagmentContent, id=ch_id)

    if request.method == 'POST':
        footer_form = FooterForm(request.POST, request.FILES)
        if footer_form.is_valid():
            temp = footer_form.save(commit=False)
            temp.home = obj
            temp.user  = request.user
            temp.active = 1
            temp.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
        else:
            footer_form = FooterForm()
    else:
        footer_form = FooterForm()

    return render(request,'hd_footer_form.html', {'form': footer_form})



@login_required
def update_footer(request, ch_id, foo_id):
    obj = get_object_or_404(Footer, id=foo_id)
    footer = FooterForm(request.POST or None, request.FILES or None, instance=obj)
    if request.method == 'POST':
        if footer.is_valid():
            footer.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    return render(request,'hd_footer_form.html',{'form':footer, 'obj':obj})



@login_required
def remove_footer(request, foo_id, template='footer_remove.html'):
    try:
        mc = get_object_or_404(Footer, id=foo_id)
        if request.method == 'GET':
            return render(request,template,{
                "mc": mc
            })
        if request.method == 'POST':
            mc.delete()
            return HttpResponseRedirect(reverse("content_handler_list"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this ms_gestor_list',
            content_type="text/plain",
            status=401
        )



@login_required
def upload_style_footer(request, ch_id, foo_id):
    styl = Footer.objects.get(id=foo_id)
    form = StylFooterForm(request.POST, request.FILES)
    if form.is_valid() and styl is not None:
        tmp = form.save(commit=False)
        tmp.footer = styl
        tmp.save()
        return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    else:
        form = StylFooterForm()
    profile = get_object_or_404(Profile, username=request.user)
    return render(request, 'style_header_form.html', {'form': form, 'profile':profile})



@login_required
def update_style_footer(request, ch_id, id_style):
    obj = get_object_or_404(Style, id=id_style)
    ms_form = StylFooterForm(request.POST or None, request.FILES or None, instance=obj)
    if request.method == 'POST':
        if ms_form.is_valid():
            ms_form.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[ch_id]))
    return render(request, 'style_header_form.html',{'form':ms_form, 'obj':obj})


@login_required
def header_section_style(request, ch_id, menu_id):
    subsect = get_object_or_404(Menu, id=menu_id)
    try: 
        ms_form = HeaderSectionForm(request.POST or None,  request.FILES or None, instance=subsect.headersectionstyle)
    except: 
        ms_form = HeaderSectionForm(request.POST or None, initial={'text_align': 'center'})
    if request.method == 'POST':
        if ms_form.is_valid():
            header = ms_form.save(commit=False)
            header.section = subsect
            header.save()
            return HttpResponseRedirect(reverse('section_list', args=[ch_id]))
    return render(request,'header_style.html',{'form':ms_form,'subsect': subsect})


@login_required
def header_menu_style(request, menu_id, ch_id=''):
    subsect = get_object_or_404(Menu, id=menu_id)
    try: 
        ms_form = HeaderSectionForm(request.POST or None,  request.FILES or None, instance=subsect.headersectionstyle)
    except: 
        ms_form = HeaderSectionForm(request.POST or None, initial={'text_align': 'center'})
    if request.method == 'POST':
        if ms_form.is_valid():
            header = ms_form.save(commit=False)
            header.section = subsect
            header.save()
            return HttpResponseRedirect(reverse('content_handler_detail', args=[subsect.home.id]))
    return render(request,'header_style.html',{'form':ms_form,'subsect': subsect})