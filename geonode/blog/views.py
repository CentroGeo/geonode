
import json, requests
import base64
import zipfile
from django.shortcuts import render
from django.db.models import Q
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from geonode.blog.models import Topic, Post
from geonode.blog.forms import TopicForm, PostForm, PostUpdate, LinkForm, LinkUpdate


def blog_index(request, template='blog/blog_index.html'):

    posts = Post.objects.filter(active=True).filter(fix_index=True).exclude(image__isnull=True).exclude(image__exact='')
    topics = Topic.objects.filter(active=True)
    #institutions = Institution.objects.filter(active=True).filter(highlight=True).order_by('order')

    return render(request, template, {'posts': posts, 'topics': topics})


def blog(request, template='blog/blog.html'):

    text = request.GET.get('text')
    topic = request.GET.get('topic')

    topics = Topic.objects.filter(active=True).filter(blog_active=True)

    posts = Post.objects.filter(active=True).filter(topic__in=topics).exclude(image__isnull=True).exclude(image__exact='')

    if (text):
        posts = Post.objects.filter(active=True).filter(Q(title__icontains=text) | Q(post__icontains=text)).exclude(image__isnull=True).exclude(image__exact='')

    if (topic):
        posts = Post.objects.filter(active=True).filter(topic=topic).exclude(image__isnull=True).exclude(image__exact='')


    paginator = Paginator(posts,8)

    page = request.GET.get('page')
    try:
        items = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        items = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        items = paginator.page(paginator.num_pages)

    return render(request, template, {'posts': items, 'topics': topics})


def blog_post(request, slug, template='blog/blog_post.html'):

    try:
        post = Post.objects.get(slug=slug)
    except Post.DoesNotExist as e:
        raise Http404

    if not post.active:
        if not request.user.is_superuser:
            raise Http404

    if post.gallery_zip:
        images = {}
        with zipfile.ZipFile(post.gallery_zip, 'r') as z:
            for f in z.namelist():
                images.update({f: base64.b64encode(z.read(f)), })

        context = {
            "images": images,
        }

    topics = Topic.objects.filter(active=True)

    return render(request, template, {'posts': post, 'topics': topics})


def blog_topics(request, template='blog/blog_topics.html'):

    topics = Topic.objects.filter(parent_topic=None).filter(active=True).order_by('stack_order')

    return render(request, template, {'topics': topics,  'context': context})


def blog_topic_detail(request, slug, template='blog/blog_topic_detail.html'):

    try:
        topic = Topic.objects.get(slug=slug)
    except Topic.DoesNotExist as e:
        raise Http404

    posts = Post.objects.filter(active=True).filter(topic=topic)
    topics = Topic.objects.filter(parent_topic=None).filter(active=True).order_by('stack_order')

    return render(request, template, {'posts': posts, 'topic': topic, 'topics': topics})


# Admin
@login_required
def blog_admin(request, template='admin/blog_admin.html'):

    posts = Post.objects.filter(topic=None)
    topics = Topic.objects.filter(parent_topic=None).order_by('stack_order')

    return render(request, template, {'posts': posts, 'topics': topics})


@login_required
def blog_topic_admin(request, id, template='admin/blog_admin.html'):
    topic = get_object_or_404(Topic, id=id)
    posts = Post.objects.filter(topic=topic)
    topics = Topic.objects.filter(parent_topic=topic).order_by('stack_order')

    return render(request, template, {'topic': topic, 'posts': posts, 'topics': topics})


@login_required
def blog_post_add(request):

    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../admin/')
    else:
        topic_id = request.GET['topic_id']
        form = PostForm(initial={'topic': topic_id})

    return render(request, 'admin/blog_form.html', {'form': form})


@login_required
def blog_post_edit(request, id):

    obj = get_object_or_404(Post, id=id)
    form = PostUpdate(request.POST or None, request.FILES or None, instance=obj)
    if request.method == 'POST':

        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../../admin/')
    return render(request, 'admin/blog_form.html', {'form': form})


@login_required
def blog_post_remove(request, id, template='admin/blog_remove.html'):

    try:
        post = get_object_or_404(Post, id=id)
        if request.method == 'GET':
            return render(request, template, {
                "item": post,
                'id': id
            })
        if request.method == 'POST':
            post.delete()
            return HttpResponseRedirect('/blog/admin/')
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this ms_narrative_list',
            content_type="text/plain",
            status=401
        )


@login_required
def blog_link_add(request):

    if request.method == 'POST':
        form = LinkForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../admin/')
    else:
        topic_id = request.GET['topic_id']
        form = LinkForm(initial={'topic': topic_id,'format': 'link'})

    return render(request, 'admin/blog_form.html', {'form': form})


@login_required
def blog_link_edit(request, id):

    obj = get_object_or_404(Post, id=id)
    form = LinkUpdate(request.POST or None, request.FILES or None, instance=obj)
    if request.method == 'POST':

        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../../admin/')
    return render(request, 'admin/blog_form.html', {'form': form})


@login_required
def blog_topic_add(request):

    if request.method == 'POST':
        form = TopicForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../admin/')
    else:
        form = TopicForm()

    return render(request, 'admin/blog_form.html', {'form': form})


@login_required
def blog_topic_edit(request, id):

    obj = get_object_or_404(Topic, id=id)
    form = TopicForm(request.POST or None, request.FILES or None, instance=obj)
    if request.method == 'POST':

        if form.is_valid():
            form.save()
            return HttpResponseRedirect('../../admin/')
    return render(request, 'admin/blog_form.html', {'form': form})


@login_required
def blog_topic_remove(request, id, template='admin/blog_remove.html'):

    try:
        topic = get_object_or_404(Topic, id=id)
        if request.method == 'GET':
            return render(request, template, {
                "item": post,
                'id': id
            })
        if request.method == 'POST':
            topic.delete()
            return HttpResponseRedirect('/blog/admin/')
        else:
            return HttpResponse("Not allowed", status=403)

    except PermissionDenied:
        return HttpResponse(
            'You are not allowed to delete this ms_narrative_list',
            content_type="text/plain",
            status=401
        )


@login_required
def blog_sort_topic(request):
    if request.is_ajax():
        sorted_ids = json.loads(request.POST['sorted_ids'])
        st_order=1
        for e in sorted_ids:
            section = get_object_or_404(Topic, id=int(e))
            section.stack_order = st_order
            section.save()
            st_order += 1

        return HttpResponse(json.dumps({'ok': 'ok'}), content_type="application/json")
    else:
        return HttpResponse("Not ajax request")