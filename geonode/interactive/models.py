import os
import logging

from urllib.parse import urljoin

from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.core.cache import cache
from django.contrib.staticfiles import finders
from django.db.models import signals
from django.core.files import File

from geonode.layers.models import Layer
from geonode.utils import GXPMapBase, GXPLayerBase
from geonode.maps.models import MapLayer
from geonode.security.models import PermissionLevelMixin

logger = logging.getLogger(__name__)

class QuickMap(models.Model, PermissionLevelMixin):

    """
    A QuickMap aggregates several layers together from MapInterface and annotates them
    with a viewport configuration.
    """

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, verbose_name=_("Owner"),
                                on_delete=models.CASCADE,)

    title = models.CharField(_('title'), max_length=255)

    abstract = models.TextField(_('abstract'), blank=True)

    # fields necessary for the apis
    thumbnail_url = models.TextField(null=True, blank=True)
    detail_url = models.CharField(max_length=255, null=True, blank=True)

    # viewer configuration
    zoom = models.IntegerField(_('zoom'))
    # The zoom level to use when initially loading this map.  Zoom levels start
    # at 0 (most zoomed out) and each increment doubles the resolution.

    projection = models.CharField(_('projection'), max_length=32)
    # The projection used for this map.  This is stored as a string with the
    # projection's SRID.

    center_x = models.FloatField(_('center X'))
    # The x coordinate to center on when loading this map.  Its interpretation
    # depends on the projection.

    center_y = models.FloatField(_('center Y'))
    # The y coordinate to center on when loading this map.  Its interpretation
    # depends on the projection.

    # Save bbox values in the database.
    # This is useful for spatial searches and for generating thumbnail images and metadata records.
    bbox_x0 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    bbox_x1 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    bbox_y0 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)
    bbox_y1 = models.DecimalField(max_digits=19, decimal_places=10, blank=True, null=True)

    config = models.TextField(_('JSON Configuration'))
    # Map configuration in JSON format

    last_modified = models.DateTimeField(auto_now_add=True)
    # The last time the map was modified.

    def __unicode__(self):
        return '%s by %s' % (
            self.title, (self.owner.username if self.owner else "<Anonymous>"))

    @property
    def center(self):
        """
        A handy shortcut for the center_x and center_y properties as a tuple
        (read only)
        """
        return (self.center_x, self.center_y)

    @property
    def layers(self):
        layers = QMapLayer.objects.filter(quick_map=self.id)
        return [layer for layer in layers]

    @property
    def only_layers(self):
        layers = QMapLayer.objects.filter(quick_map=self.id).exclude(group='background')
        return [layer for layer in layers]

    def viewer_json(self):
        sources = {}
        names = []
        map_layers = self.layers
        configs = [l.source_config() for l in map_layers]

        i = 0
        for source in configs:
            while str(i) in sources:
                i += 1
            sources[str(i)] = source

        for lay in map_layers:
            names.append(lay.name)
        config = {
            'id': self.id,
            'about': {
                'title': self.title,
                'abstract': self.abstract
            },
            'sources': sources,
            'map': {
                'layers': [l.layer_config(l) for l in map_layers],
                'center': [self.center_x, self.center_y],
                'projection': self.projection,
                'zoom': self.zoom
            }
        }
        return config

    def _render_thumbnail(self):
        from cStringIO import StringIO

        try:
            from PIL import Image, ImageOps
        except ImportError as e:
            logger.error(
                '%s: Pillow not installed, cannot generate thumbnails.' %
                e)
            return None

        filename = finders.find('qmaps/qmap-thumb.jpg', False)
        img = Image.open(filename)

        imgfile = StringIO()
        img.save(imgfile, format='PNG')
        return imgfile.getvalue()

    def save_thumbnail(self, filename, image):
        thumb_folder = 'thumbs'
        upload_path = os.path.join(settings.MEDIA_ROOT, thumb_folder)
        if not os.path.exists(upload_path):
            os.makedirs(upload_path)

        with open(os.path.join(upload_path, filename), 'wb') as f:
            thumbnail = File(f)
            thumbnail.write(image)

        url_path = os.path.join(settings.MEDIA_URL, thumb_folder, filename).replace('\\', '/')
        url = urljoin(settings.SITEURL, url_path)
        """
        Link.objects.get_or_create(resource=self,
                                   url=url,
                                   defaults=dict(
                                       name='Thumbnail',
                                       extension='png',
                                       mime='image/png',
                                       link_type='image',
                                   ))
        """
        QuickMap.objects.filter(id=self.id).update(
            thumbnail_url=url
        )


class QMapLayer(models.Model, GXPLayerBase):

    """
    The MapLayer model represents a layer included in a map.  This doesn't just
    identify the dataset, but also extra options such as which style to load
    and the file format to use for image tiles.
    """

    quick_map = models.ForeignKey(QuickMap, related_name="qlayer_set", 
                                    on_delete=models.CASCADE,)
    # The map containing this layer

    stack_order = models.IntegerField(_('stack order'))
    # The z-index of this layer in the map; layers with a higher stack_order will
    # be drawn on top of others.

    format = models.CharField(
        _('format'),
        null=True,
        max_length=200,
        blank=True)
    # The content_type of the image format to use for tiles (image/png, image/jpeg,
    # image/gif...)

    name = models.CharField(_('name'), null=True, max_length=200)
    # The name of the layer to load.

    # The interpretation of this name depends on the source of the layer (Google
    # has a fixed set of names, WMS services publish a list of available layers
    # in their capabilities documents, etc.)

    opacity = models.FloatField(_('opacity'), default=1.0)
    # The opacity with which to render this layer, on a scale from 0 to 1.

    styles = models.CharField(
        _('styles'),
        null=True,
        max_length=200,
        blank=True)
    # The name of the style to use for this layer (only useful for WMS layers.)

    transparent = models.BooleanField(_('transparent'), default=False)
    # A boolean value, true if we should request tiles with a transparent
    # background.

    group = models.CharField(_('group'), null=True, max_length=200, blank=True)

    fixed = models.BooleanField(_('fixed'), default=False)
    # A boolean value, true if we should prevent the user from dragging and
    # dropping this layer in the layer chooser.
    """
    group = models.CharField(_('group'), null=True, max_length=200, blank=True)
    # A group label to apply to this layer.  This affects the hierarchy displayed
    # in the map viewer's layer tree.
    """
    visibility = models.BooleanField(_('visibility'), default=True)
    # A boolean value, true if this layer should be visible when the map loads.

    ows_url = models.URLField(_('ows URL'), null=True, blank=True)
    # The URL of the OWS service providing this layer, if any exists.

    layer_params = models.TextField(_('layer params'))
    # A JSON-encoded dictionary of arbitrary parameters for the layer itself when
    # passed to the GXP viewer.

    # If this dictionary conflicts with options that are stored in other fields
    # (such as format, styles, etc.) then the fields override.

    source_params = models.TextField(_('source params'))
    # A JSON-encoded dictionary of arbitrary parameters for the GXP layer source
    # configuration for this layer.

    # If this dictionary conflicts with options that are stored in other fields
    # (such as ows_url) then the fields override.

    local = models.BooleanField(default=False)
    # True if this layer is served by the local geoserver

    def layer_config(self, user=None):
        # Try to use existing user-specific cache of layer config
        if self.id:
            cfg = cache.get("layer_config" +
                            str(self.id) +
                            "_" +
                            str(0 if user is None else user.id))
            if cfg is not None:
                return cfg

        cfg = GXPLayerBase.layer_config(self, user=user)
        # if this is a local layer, get the attribute configuration that
        # determines display order & attribute labels
        if Layer.objects.filter(typename=self.name).exists():
            try:
                if self.local:
                    layer = Layer.objects.get(typename=self.name)
                else:
                    layer = Layer.objects.get(
                        typename=self.name,
                        service__base_url=self.ows_url)
                attribute_cfg = layer.attribute_config()
                if "getFeatureInfo" in attribute_cfg:
                    cfg["getFeatureInfo"] = attribute_cfg["getFeatureInfo"]
                if not user.has_perm(
                        'base.view_resourcebase',
                        obj=layer.resourcebase_ptr):
                    cfg['disabled'] = True
                    cfg['visibility'] = False
            except:
                # shows maplayer with pink tiles,
                # and signals that there is problem
                # TODO: clear orphaned MapLayers
                layer = None

        if self.id:
            # Create temporary cache of maplayer config, should not last too long in case
            # local layer permissions or configuration values change (default
            # is 5 minutes)
            cache.set("layer_config" +
                      str(self.id) +
                      "_" +
                      str(0 if user is None else user.id), cfg)
        return cfg

    @property
    def layer_title(self):
        if self.local:
            title = Layer.objects.get(typename=self.name).title
        else:
            title = self.name
        return title

    @property
    def local_link(self):
        if self.local:
            layer = Layer.objects.get(typename=self.name)
            link = "<a href=\"%s\">%s</a>" % (
                layer.get_absolute_url(), layer.title)
        else:
            link = "<span>%s</span> " % self.name
        return link

    class Meta:
        ordering = ["stack_order"]

    def __unicode__(self):
        return '%s?layers=%s' % (self.ows_url, self.name)


def create_thumbnail(sender, instance, **kwargs):
    try:
        qmap = QuickMap.objects.get(id=instance.id)

    except QuickMap.DoesNotExist:
        return

    image = qmap._render_thumbnail()
    filename = 'qmap-%s-thumb.png' % qmap.id
    qmap.save_thumbnail(filename, image)

    # create_document_thumbnail.delay(object_id=instance.id)


signals.post_save.connect(create_thumbnail, sender=QuickMap)