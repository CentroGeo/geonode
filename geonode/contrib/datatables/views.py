import sys
import os
import json
import traceback
from django.core import serializers
from django.core.serializers.json import Serializer
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth.decorators import login_required
from django.utils.text import slugify
from django.views.decorators.csrf import csrf_exempt
from django.utils.translation import ugettext_lazy as _

# Added by @ILopez
import logging
from django.db.models import F
from django.conf import settings
from django.utils.html import escape
from django.forms.models import inlineformset_factory
from django.shortcuts import render_to_response
from django.template import RequestContext, loader
from django.urls import reverse
from django.core.exceptions import PermissionDenied
from django_downloadview.response import DownloadResponse

from geonode.utils import resolve_object
from geonode.base.forms import CategoryForm
from geonode.people.forms import ProfileForm, PocForm, ExternalPersonForm
from geonode.base.models import TopicCategory, ResourceBase
from geonode.security.views import _perms_info_json
from geonode.layers.forms import LayerAttributeForm
from geonode.layers.models import Attribute
from geonode.geoserver.ows import wfs_links
from geonode.geoserver.helpers import ogc_server_settings

from .models import DataTable, JoinTarget, TableJoin
from .forms import UploadDataTableForm, DataTableForm, DataTableJoinForm
from .utils import process_csv_file, setup_join, create_point_col_from_lat_lon, get_valid_name

logger = logging.getLogger("geonode.layers.views")

CONTEXT_LOG_FILE = None

_PERMISSION_MSG_DELETE = _("You are not permitted to delete this document")
_PERMISSION_MSG_GENERIC = _('You do not have permissions for this document.')
_PERMISSION_MSG_MODIFY = _("You are not permitted to modify this document")
_PERMISSION_MSG_METADATA = _(
    "You are not permitted to modify this document's metadata")
_PERMISSION_MSG_VIEW = _("You are not permitted to view this document")


def _resolve_datatable(request, docid, permission='base.change_resourcebase',
                      msg=_PERMISSION_MSG_GENERIC, **kwargs):
    '''
    Resolve the datatable by the provided primary key and check the optional permission.
    '''
    return resolve_object(request, DataTable, {'pk': docid},
                          permission=permission, permission_msg=msg, **kwargs)


@login_required
@csrf_exempt
def datatables_detail(request, dt_id):
    """
    The view that show details of each datatable
    """
    datatable = None
    try:
        datatable = _resolve_datatable(
            request,
            dt_id,
            'base.view_resourcebase',
            _PERMISSION_MSG_VIEW)

    except Http404:
        return HttpResponse(
            loader.render_to_string(
                '404.html', RequestContext(
                    request, {
                        })), status=404)

    except PermissionDenied:
        return HttpResponse(
            loader.render_to_string(
                '401.html', RequestContext(
                    request, {
                        'error_message': _("You are not allowed to view this document.")})), status=403)

    if datatable is None:
        return HttpResponse(
            'An unknown error has occured.',
            content_type="text/plain",
            status=401
        )

    else:
        try:
            related = datatable.content_type.get_object_for_this_type(
                id=datatable.object_id)
        except:
            related = ''

        # Update count for popularity ranking,
        # but do not includes admins or resource owners
        # if request.user != document.owner and not request.user.is_superuser:
        #    Document.objects.filter(id=document.id).update(popular_count=F('popular_count') + 1)

        # metadata = datatable.link_set.metadata().filter(
        #    name__in=settings.DOWNLOAD_FORMATS_METADATA)

        context_dict = {
            'permissions_json': _perms_info_json(datatable),
            'resource': datatable,
            # 'metadata': metadata,
            # 'imgtypes': IMGTYPES,
            'related': related}

        # if settings.SOCIAL_ORIGINS:
        #    context_dict["social_links"] = build_social_links(request, document)

        return render_to_response(
            "tables_detail.html",
            RequestContext(request, context_dict))


@login_required
@csrf_exempt
def datatables_upload(request, template='tables_upload.html'):
    if request.method == 'GET':
        form = UploadDataTableForm()
        ctx = {
            'form': form
        }
        return render_to_response(template, RequestContext(request, ctx))

    elif request.method == 'POST':
        form = UploadDataTableForm(request.POST, request.FILES)
        errormsgs = []
        out = {'success': False}
        if form.is_valid():
            data = form.cleaned_data
            datatable_name = slugify(unicode(os.path.splitext(os.path.basename(request.FILES['uploaded_file'].name))[0])).replace('-','_')
            table_name = get_valid_name(datatable_name)
            title = data['title']
            instance = DataTable(uploaded_file=request.FILES['uploaded_file'], table_name=table_name, title=title)
            delimiter = data['delimiter_type']
            no_header_row = data['no_header_row']
            # charset = data['charset']

            instance.owner = request.user
            resource_id = request.POST.get('resource', None)
            if resource_id:
                instance.content_type = ResourceBase.objects.get(id=resource_id).polymorphic_ctype
                instance.object_id = resource_id
            # by default, if RESOURCE_PUBLISHING=True then document.is_published
            # must be set to False
            is_published = True
            if settings.RESOURCE_PUBLISHING:
                is_published = False
            instance.is_published = is_published
            instance.save()

            dt, msg = process_csv_file(instance, delimiter=delimiter, no_header_row=no_header_row)

            if dt:
                return HttpResponseRedirect(
                    reverse(
                        'datatables_join',
                        args=(
                            dt.pk,
                        )))
            else:
                return HttpResponse(
                    loader.render_to_string(
                        '401.html', RequestContext(
                            request, {'error_message': msg,
                                      'error_title': 'Error en conjunto de caracteres',
                                      'encode_error': True
                                      })), status=402)
        else:
            for e in form.errors.values():
                errormsgs.extend([escape(v) for v in e])

            out['errors'] = form.errors
            out['errormsgs'] = errormsgs

        if out['success']:
            status_code = 200
        else:
            status_code = 400
        return render_to_response(template, RequestContext(request, {'form': form}))


@login_required
def datatables_metadata(request, dt_id, template='tables_metadata.html'):
    datatable = None
    try:
        datatable = _resolve_datatable(
            request,
            dt_id,
            'base.change_resourcebase_metadata',
            _PERMISSION_MSG_METADATA)
        datatable_attribute_set = inlineformset_factory(
        DataTable,
        Attribute,
        extra=0,
        form=LayerAttributeForm,
    )

    except Http404:
        return HttpResponse(
            loader.render_to_string(
                '404.html', RequestContext(
                    request, {
                        })), status=404)

    except PermissionDenied:
        return HttpResponse(
            loader.render_to_string(
                '401.html', RequestContext(
                    request, {
                        'error_message': _("You are not allowed to edit this datatable.")})), status=403)

    if datatable is None:
        return HttpResponse(
            'An unknown error has occured.',
            content_type="text/plain",
            status=401
        )

    else:
        poc = datatable.poc
        metadata_author = datatable.metadata_author
        topic_category = datatable.category
        external_person = datatable.external_person
        resource_id = datatable.resource.id

        if request.method == "POST":
            datatable_form = DataTableForm(
                request.POST,
                instance=datatable,
                # layer = related_layer,
                prefix="resource")
            attribute_form = datatable_attribute_set(
                request.POST,
                instance=datatable,
                prefix="datatable_attribute_set",
                queryset=Attribute.objects.order_by('display_order'))
            category_form = CategoryForm(
                request.POST,
                prefix="category_choice_field",
                initial=int(
                    request.POST["category_choice_field"]) if "category_choice_field" in request.POST else None)
        else:
            datatable_form = DataTableForm(instance=datatable, prefix="resource")
            attribute_form = datatable_attribute_set(
            instance=datatable,
            prefix="datatable_attribute_set",
            queryset=Attribute.objects.order_by('display_order'))
            category_form = CategoryForm(
                prefix="category_choice_field",
                initial=topic_category.id if topic_category else None)

        if request.method == "POST" and datatable_form.is_valid()\
                and attribute_form.is_valid() and category_form.is_valid():

            new_poc = datatable_form.cleaned_data['poc']
            new_keywords = datatable_form.cleaned_data['keywords']
            new_ep = datatable_form.cleaned_data['external_person']
            new_category = TopicCategory.objects.get(
                id=category_form.cleaned_data['category_choice_field'])

            if new_poc is None:
                if poc.user is None:
                    poc_form = ProfileForm(
                        request.POST,
                        prefix="poc",
                        instance=poc)
                else:
                    poc_form = ProfileForm(request.POST, prefix="poc")
                if poc_form.has_changed and poc_form.is_valid():
                    new_poc = poc_form.save()

            if new_ep is None:
                if external_person is None:
                    ep_form = ExternalPersonForm(
                        request.POST,
                        prefix="external_person",
                        instance=external_person)
                else:
                    ep_form = ExternalPersonForm(request.POST, prefix="external_person")
                if ep_form.has_changed and ep_form.is_valid():
                    new_ep = ep_form.save()

            for form in attribute_form.cleaned_data:
                la = Attribute.objects.get(id=int(form['id'].id))
                la.description = form["description"]
                la.attribute_type = form["attribute_type"]
                la.visible = form["visible"]
                la.display_order = form["display_order"]
                la.save()

            if new_poc is not None and new_ep is not None:
                the_datatable = datatable_form.save()
                the_datatable.poc = new_poc
                the_datatable.keywords.add(*new_keywords)
                DataTable.objects.filter(id=the_datatable.id).update(
                    category=new_category, external_person=new_ep,
                    )
                return HttpResponseRedirect(
                    reverse(
                        'datatables_detail',
                        args=(
                            datatable.id,
                        )))

        if external_person is None:
            ep_form = ExternalPersonForm(instance=external_person, prefix="external_person")
        else:
            datatable_form.fields['external_person'].initial = external_person
            ep_form = ExternalPersonForm(prefix="external_person")
            ep_form.hidden = True

        if poc is None:
            poc_form = ProfileForm(request.POST, prefix="poc")
        else:
            if poc is None:
                poc_form = ProfileForm(instance=poc, prefix="poc")
            else:
                datatable_form.fields['poc'].initial = poc.id
                poc_form = ProfileForm(prefix="poc")
                poc_form.hidden = True

        if metadata_author is None:
            author_form = ProfileForm(request.POST, prefix="author")
        else:
            if metadata_author is None:
                author_form = ProfileForm(
                    instance=metadata_author,
                    prefix="author")
            else:
                author_form = ProfileForm(prefix="author")
                author_form.hidden = True

        return render_to_response(template, RequestContext(request, {
            "datatable": datatable,
            "datatable_form": datatable_form,
            "ep_form": ep_form,
            "poc_form": poc_form,
            "author_form": author_form,
            "attribute_form": attribute_form,
            "category_form": category_form,
        }))

@login_required
@csrf_exempt
def datatables_join(request, dt_id, template='tables_join.html'):
    datatable = None
    try:
        datatable = _resolve_datatable(
            request,
            dt_id,
            'base.change_resourcebase_metadata',
            _PERMISSION_MSG_METADATA)

    except Http404:
        return HttpResponse(
            loader.render_to_string(
                '404.html', RequestContext(
                    request, {
                        })), status=404)

    if datatable is None:
        return HttpResponse(
            'An unknown error has occured.',
            content_type="text/plain",
            status=401
        )
    else:
        if request.method == 'POST':
            join_form = DataTableJoinForm(
                request.POST,
                instance=datatable,
                prefix="datatable_join"
                )

            if join_form.is_valid():
                join_form.save()
                table_name = datatable.table_name
                layer_typename = datatable.resource.typename
                table_attribute = join_form.cleaned_data['table_attribute']
                layer_attribute = join_form.cleaned_data['layer_attribute']
                inner_join = join_form.cleaned_data['inner_join']

                tj, msg = setup_join(table_name, layer_typename, table_attribute, layer_attribute, inner_join)

                if tj is None:
                    return HttpResponse(
                        loader.render_to_string(
                            '401.html', RequestContext(
                                request, {'error_message': 'La union es ilogica o los tipos no coinciden. '
                                                           'Vuelva a intentarlo. %s' % msg,
                                          'error_title': 'Error al crear la union',
                                          'encode_error': True
                                          })), status=402)
                else:
                    tjoin = {
                        'tj': tj,
                        'resource': datatable,
                        'download': False
                        }
                    return render_to_response('tables_join_result.html', RequestContext(request, tjoin))
        else:
            join_form = DataTableJoinForm(
                instance=datatable,
                prefix="datatable_join",
                )

        return render_to_response(template, RequestContext(request, {
            'resource': datatable,
            'form': join_form,
            }))


def datatables_download(request, dt_id, down_geom=0):
    datatable = get_object_or_404(DataTable, pk=dt_id)
    if not request.user.has_perm(
            'base.download_resourcebase',
            obj=datatable.get_self_resource()):
        return HttpResponse(
            loader.render_to_string(
                '401.html', RequestContext(
                    request, {
                        'error_message': _("You are not allowed to view this document.")})), status=401)

    if down_geom == '1':
        table_Join = get_object_or_404(TableJoin, datatable=dt_id)
        dwn_url=None
        links = wfs_links(
            ogc_server_settings.public_url +
            'wfs?', table_Join.view_name.encode('utf-8'))
        for ext, name, mime, wfs_url in links:
            if mime == 'SHAPE-ZIP':
                dwn_url = wfs_url
                name = 'Zipped Shapefile'

        tjoin = {
            'tj': table_Join,
            'dwn_url': dwn_url,
            'download': True
            }
        return render_to_response('tables_join_result.html', RequestContext(request, tjoin))
    else:
        return DownloadResponse(datatable.uploaded_file)


@login_required
def datatables_remove(request, dt_id, template='tables_remove.html'):
    try:
        datatable = _resolve_datatable(
            request,
            dt_id,
            'base.delete_resourcebase',
            _PERMISSION_MSG_DELETE)

        if request.method == 'GET':
            return render_to_response(template, RequestContext(request, {
                "document": datatable
            }))
        if request.method == 'POST':
            datatable.delete()
            return HttpResponseRedirect(reverse("tables_browse"))
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this datatable',
            content_type="text/plain",
            status=401
        )


@login_required
def datatables_change_attr(request, dt_id, la_attr, ta_attr):
    try:
        datatable = _resolve_datatable(
            request,
            dt_id,
            'base.change_resourcebase_metadata',
            _PERMISSION_MSG_METADATA)

    except Http404:
        return HttpResponse(
            loader.render_to_string(
                '404.html', RequestContext(
                    request, {
                        })), status=404)

    table_name = datatable.table_name
    layer_attr = Attribute.objects.get(id=la_attr)
    table_attr = Attribute.objects.get(id=ta_attr)

    import psycopg2
    db = ogc_server_settings.datastore_db
    conn = psycopg2.connect(
        "dbname='" +
        db['NAME'] +
        "' user='" +
        db['USER'] +
        "'  password='" +
        db['PASSWORD'] +
        "' port=" +
        db['PORT'] +
        " host='" +
        db['HOST'] +
        "'")

    if 'string' in layer_attr.attribute_type:

        try:
            cur = conn.cursor()
            cur.execute('alter table %s alter column %s type character varying(255);' % (table_name, table_attr.attribute))
            conn.commit()
            table_attr.attribute_type = 'xsd:string'
            table_attr.save()
        except Exception as e:
            logger.error(
                "Error modifying attribute %s in table %s:%s",
                table_attr.attribute,
                table_name,
                str(e))
        finally:
            conn.close()

    return HttpResponseRedirect(reverse('datatables_join', args=(datatable.id,)))


def datatables_info_metadata(request, dt_id):
    """
    The view that show details of each datatables
    """
    datatables = None
    try:
        datatables = _resolve_datatable(
            request,
            dt_id,
            'base.view_resourcebase',
            _PERMISSION_MSG_VIEW)

    except Http404:
        return HttpResponse(
            loader.render_to_string(
                '404.html', RequestContext(
                    request, {
                        })), status=404)

    except PermissionDenied:
        return HttpResponse(
            loader.render_to_string(
                '401.html', RequestContext(
                    request, {
                        'error_message': _("You are not allowed to view this datatables.")})), status=403)

    if datatables is None:
        return HttpResponse(
            'An unknown error has occured.',
            content_type="text/plain",
            status=401
        )

    else:
        try:
            related = datatables.content_type.get_object_for_this_type(
                id=datatables.object_id)
        except:
            related = ''

        DataTable.objects.filter(id=datatables.id).update(popular_count=F('popular_count') + 1)

        return render_to_response(
            "tables_info_metadata.html",
            RequestContext(
                request,
                {
                    'permissions_json': _perms_info_json(datatables),
                    'resource': datatables,
                    # 'imgtypes': IMGTYPES,
                    'related': related}))

"""
Inician las vistas originales de la API de jjhonson
"""

def log_snippet(log_file):
    if not os.path.isfile(log_file):
        return "No log file at %s" % log_file

    with open(log_file, "r") as f:
        f.seek(0, 2)  # Seek @ EOF
        fsize = f.tell()  # Get Size
        f.seek(max(fsize - 10024, 0), 0)  # Set pos @ last n chars
        return f.read()

@login_required
@csrf_exempt
def datatable_upload_api(request):
    if request.method != 'POST':
        return HttpResponse("Invalid Request", content_type="text/plain", status=500)
    else:
        form = UploadDataTableForm(request.POST, request.FILES)
        if form.is_valid():
            data = form.cleaned_data
            table_name = slugify(unicode(os.path.splitext(os.path.basename(request.FILES['uploaded_file'].name))[0])).replace('-','_')
            instance = DataTable(uploaded_file=request.FILES['uploaded_file'], table_name=table_name, title=table_name)
            delimiter = data['delimiter_type'] 
            no_header_row = data['no_header_row']
            
            instance.save()
            dt, msg = process_csv_file(instance, delimiter=delimiter, no_header_row=no_header_row)
            if dt:
                return_dict = {
                    'datatable_id': dt.pk,
                    'datatable_name': dt.table_name,
                    'success': True,
                    'msg': ""
                }
                return HttpResponse(json.dumps(return_dict), content_type="application/json", status=200) 
            else:
                return_dict = {
                    'datatable_id': None,
                    'datatable_name': None,
                    'success': False,
                    'msg': msg
                } 
                return HttpResponse(json.dumps(return_dict), content_type="application/json", status=400) 
        else:
            return_dict = {
                'datatable_id': None,
                'datatable_name': None,
                'success': False,
                'msg': "Form Errors: " + form.errors.as_text() 
            }
            return HttpResponse(json.dumps(return_dict), content_type="application/json", status=400)

@login_required
@csrf_exempt
def datatable_detail(request, dt_id):
    dt = get_object_or_404(DataTable, pk=dt_id)
    object = json.loads(serializers.serialize("json", (dt,), fields=('uploaded_file', 'table_name')))[0]
    attributes = json.loads(serializers.serialize("json", dt.attributes.all()))
    attribute_list = []
    for attribute in attributes:
        attribute_list.append({'attribute':attribute['fields']['attribute'], 'type':attribute['fields']['attribute_type']})
    object["attributes"] = attribute_list
    data = json.dumps(object) 
    return HttpResponse(data)

@login_required
def jointargets(request):
    if len(request.GET.keys()) > 0:
        kwargs = {}
        if request.GET.get('title'):
            kwargs['layer__title__icontains'] = request.GET.get('title')
        if request.GET.get('type'):
            kwargs['geocode_type__name__icontains'] = request.GET.get('type')
        if request.GET.get('start_year'):
            if request.GET.get('start_year').isdigit():
                kwargs['year__gte'] = request.GET.get('start_year')
            else:
                return HttpResponse(json.dumps({'success': False, 'msg':'Invalid Start Year'}), content_type="application/json")
        if request.GET.get('end_year'):
            if request.GET.get('end_year').isdigit():
                kwargs['year__lte'] = request.GET.get('end_year')
            else:
                return HttpResponse(json.dumps({'success': False, 'msg':'Invalid End Year'}), content_type="application/json")
        jts = JoinTarget.objects.filter(**kwargs) 
        results = [ob.as_json() for ob in jts] 
        return HttpResponse(json.dumps(results), content_type="application/json")
    else:
        jts = JoinTarget.objects.all()
        results = [ob.as_json() for ob in jts] 
        return HttpResponse(json.dumps(results), content_type="application/json")

@login_required
@csrf_exempt
def tablejoin_api(request):
    if request.method == 'GET':
         return HttpResponse("Unsupported Method", content_type="application/json", status=500) 
    elif request.method == 'POST':
        table_name = request.POST.get("table_name", None)
        layer_typename = request.POST.get("layer_typename", None)
        table_attribute = request.POST.get("table_attribute", None)
        layer_attribute = request.POST.get("layer_attribute", None)
        if table_name and layer_typename and table_attribute and layer_attribute:
            try:
                tj, msg = setup_join(table_name, layer_typename, table_attribute, layer_attribute)
                if tj:
                    return_dict = {
                        'join_id': tj.pk,
                        'view_name': tj.view_name,
                        'matched_records': tj.matched_records_count,
                        'unmatched_records': tj.unmatched_records_count,
                        'unmatched_records_list': tj.unmatched_records_list,
                        'datatable': tj.datatable.table_name,
                        'source_layer': tj.source_layer.typename,
                        'table_attribute': tj.table_attribute.attribute,
                        'layer_attribute': tj.layer_attribute.attribute,
                        'join_layer': tj.join_layer.typename,
                        'layer_url': tj.join_layer.get_absolute_url()
                    }
                    return HttpResponse(json.dumps(return_dict), content_type="application/json", status=200)
                else:
                    return_dict = {
                        'success': False,
                        'msg': "Error Creating Join: %s" % msg 
                    }
                    return HttpResponse(json.dumps(return_dict), content_type="application/json", status=400)
            except:
                return_dict = {
                    'success': False,
                    'msg': "Error Creating Join: %s" % msg 
                }
                return HttpResponse(json.dumps(return_dict), content_type="application/json", status=400) 
        else:
            return HttpResponse(json.dumps({'msg':'Invalid Request', 'success':False}), content_type='application/json', status=400)

@login_required
@csrf_exempt
def tablejoin_detail(request, tj_id):
    tj = get_object_or_404(TableJoin, pk=tj_id)
    results = [ob.as_json() for ob in [tj]][0]
    data = json.dumps(results)
    return HttpResponse(data)

@login_required
@csrf_exempt
def tablejoin_remove(request, tj_id):
    # TODO: Check Permissions!!
    try:
        tj = get_object_or_404(TableJoin, pk=tj_id)
        tj.datatable.delete()
        tj.join_layer.delete()
        tj.delete()
        return HttpResponse(json.dumps({'success':True, 'msg': ('%s removed' % (tj.view_name))}), content_type='application/json', status=200)
    except:
        return HttpResponse(json.dumps({'success':False, 'msg': ('Error removing Join %s' % (sys.exc_info()[0]))}), content_type='application/json', status=400)

@login_required
@csrf_exempt
def datatable_remove(request, dt_id):
    # TODO: Check Permissions!!
    try:
        dt = get_object_or_404(DataTable, pk=dt_id)
        dt.delete()
        return HttpResponse(json.dumps({'success':True, 'msg': ('%s removed' % (dt.table_name))}), content_type='application/json', status=200)
    except:
        return HttpResponse(json.dumps({'success':False, 'msg': ('Error removing DataTable %s' % (sys.exc_info()[0]))}), content_type='application/json', status=400)

@login_required
@csrf_exempt
def datatable_upload_and_join_api(request):
    request_post_copy = request.POST.copy()
    join_props = request_post_copy
    try:
        resp = datatable_upload_api(request)
        upload_return_dict = json.loads(resp.content)
        if upload_return_dict['success'] != True:
            return HttpResponse(json.dumps(upload_return_dict), content_type='application/json', status=400)
        join_props['table_name'] = upload_return_dict['datatable_name']
    except:
        traceback.print_exc(sys.exc_info())
        return HttpResponse(json.dumps({'msg':'Uncaught error ingesting Data Table', 'success':False}), content_type='application/json', status=400)
    try:
        original_table_attribute = join_props['table_attribute']
        sanitized_table_attribute = slugify(unicode(original_table_attribute)).replace('-','_') 
        join_props['table_attribute'] = sanitized_table_attribute
        request.POST = join_props
        resp = tablejoin_api(request)
        return resp 
    except:
        traceback.print_exc(sys.exc_info())
        return HttpResponse("Not yet")

@login_required
@csrf_exempt
def datatable_upload_lat_lon_api(request):
    try:
        resp = datatable_upload_api(request)
        upload_return_dict = json.loads(resp.content)
        if upload_return_dict['success'] != True:
            return HttpResponse(json.dumps(upload_return_dict), content_type='application/json', status=400)
    except:
        traceback.print_exc(sys.exc_info())
        return HttpResponse(json.dumps({'msg':'Uncaught error ingesting Data Table', 'success':False}), content_type='application/json', status=400)

    try:
        layer, msg = create_point_col_from_lat_lon(upload_return_dict['datatable_name'], request.POST.get('lat_column'), request.POST.get('lon_column'))
        return HttpResponse(json.dumps(upload_return_dict), content_type='application/json', status=200)
    except:
        traceback.print_exc(sys.exc_info())
        return HttpResponse(json.dumps({'msg':'Uncaught error ingesting Data Table', 'success':False}), content_type='application/json', status=400)
