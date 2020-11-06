var vis_dict = {{vis_dict|safe}};
var perm_dict = {{perm_dict|safe}};
var baseMap = basemapsDict[{{basemap|safe}}][0];
var noTopics;
var map_layers = [];
var mask;
var layer_mask;
var swt_id;
var regid;
var showContainer;
var itemSelected = 'leyenda';
var classId = 'leyenda';
let colors_inner = new Array();
  const arr_colors_inner = ['#e5d010','#ed7728','#ff6699','#cf7fec','#2897ed','#81ea75','#707d92','#455B80','#D6E6FF','#8AB7FF',
                             '#6B7380','#6E92CC', '#FFAFA3', '#8AB7FF', '#AECC5A', '#9BB357','#4F75B3','#FFAFA3', '#8AB7FF','#AECC5A','#9BB357']


var map = L.map('map', {
    center: [22, -105],
    zoom: 6,
    animate: true,
    layers: [baseMap],
    minZoom: 4,
    zoomControl: false,
    attributionControl: false
  });
/* Set BBOX */
var bounds = [
  [parseFloat('{{mviewer.bbox_y0}}'.replace(',','.')),parseFloat('{{mviewer.bbox_x0}}'.replace(',','.'))],
  [parseFloat('{{mviewer.bbox_y1}}'.replace(',','.')),parseFloat('{{mviewer.bbox_x1}}'.replace(',','.'))]
]

map.fitBounds(bounds);
/* Basemaps functions */
$.each(basemapsDict, function(k, v){
  var html = '<li class="maptype '+k+'" data-maptype="'+k+'"><i class="foo far fa-circle"></i> <span class="layerTitles">'+v[1]+'</span><a href="#" class="source"></a></li>'
  $(".maptype-list").append(html);
});

/* Basemap initial selectedf */
$('.'+{{basemap|safe}}).addClass('selected');
$('.'+{{basemap|safe}} + '> i').attr('class', 'fas fa-check-circle');

  {% if mviewer.description %}
  $('#description').removeClass('hidden');

  $('#' + itemSelected).removeClass('selected');
  itemSelected = 'description';
  $('#description').toggleClass('selected');

  $('.topicTitle'+'.'+classId).addClass('hidden');
  $('.topics.scroll-thin-dark'+'.'+classId).addClass('hidden');
  classId =  'description';
  $('.topicTitle'+'.'+classId).removeClass('hidden');
  $('.topics.scroll-thin-dark'+'.'+classId).removeClass('hidden');

  $('#rightPanel').attr('style','width: 660px!important')
  $('.btn-panelHidden.leyenda').attr('style','right: 670px!important')
  $('.btn-panelHidden.description').attr('style','right: 670px!important')
  $('.btn-panelHidden.mapa').attr('style','right: 670px!important')
{% endif %}

// Basemaps event
// Cartografia base
$(".tab-basemaps").on('click', '.maptype', function() {
  var val = $(this).attr('data-maptype');
  $('.maptype').removeClass('selected');
  $('.maptype').find('i').attr('class', 'far fa-circle'); 
  $(this).addClass('selected');
  $(this).find('i').attr('class', 'fas fa-check-circle'); 
  basemapsDict[val][0].addTo(map);
  map.removeLayer(baseMap);
  baseMap = basemapsDict[val][0];
});

/* zoom */
L.control.zoom({
   position:'topleft'
  }).addTo(map);

L.control.attribution({
  position: 'bottomleft'
}).addTo(map);

  var up = new UpAndDownLayer();
  let tematich_id = 0;


  /* OnOffswitch event */
  $(".onoffswitch").click(function() {
    var checkId;
    var leafletId;
    var typename = $(this).attr('data-typename');
    var title = $(this).attr('data-title');
    var dataId = $(this).attr('id');
    var ows_url = $(this).attr('data-href').replace('ows','wms');
    var style = $(this).attr('data-style');
    var default_style = $(this).attr('data-defstyle');

    if($(this).attr('class') == 'onoffswitch') {
        theLayer = L.tileLayer.betterWms(ows_url, {
          layers: typename,
          format: 'image/png',
          //maxZoom: 24,
          styles: style,
          transparent: true
        });

        map_layers.push(theLayer);
        map.addLayer(theLayer);
        $.each(map_layers, function(i, val) {
          if (theLayer._leaflet_id == val._leaflet_id) {
            leafletId = val._leaflet_id;
            checkId = i;
            var zIndex = 100+i;
            val.setZIndex(zIndex);
          }
        });
        $(this).attr('class', 'onoffswitch checked');
        $(this).css('background', 'green');

          layer_legend(dataId, theLayer._leaflet_id, title, typename, ows_url, style, default_style);
          $('.l-title').removeClass('selected');
          $("#cap"+dataId).removeClass('selected');
          showHideMarkers();
          $("#cap"+dataId).addClass('selected');
          let idLayer = $("#cap"+dataId).closest('li').attr('id').split('t')[1];
          regid = $('#st' + idLayer).attr('data-regid');
          showHideMarkers();
          if(regid != null) {
            $.ajax({
              url: '{% url "get_layer_narrative" %}',
              data: {'regid': regid},
              type: 'GET',
              success : function(obj) {
                  if((obj != null) && (obj)) {
                      $('#descCapa').empty();
                      $('#descCapa').append(obj);
                      $('#description').removeClass('hidden');
                      $('#descPanorama').addClass('hidden');
                      $('#descCapa').removeClass('hidden');
                  } else {
                    $('#descCapa').empty();
                    $("#description").removeClass('colorCap'); 
                    $("#description").addClass('hidden');
                }
              },
              error : function(message) {
                      console.log(message);
              }
            });
          } 
    } else {
        remove_layer(dataId);
        $('.l-title').removeClass('selected');
        if ($("#cap"+dataId).hasClass('selected')) {
          layerid_markers();
      } else {
          remove_markers();
      }
    }
    if ($("#cap"+dataId).hasClass('selected')) {
      $('#description').addClass('colorCap')
    } else {
      $('#description').removeClass('colorCap')
    }
    
  });

  /* Capas iniciales prendidas */
  $.each(vis_dict, function( k, v ){
      tematich_id = k//Guardamos el ip de la tematica para despues usarla con los colores (para el panel izquierdo)
      $.each(v, function( lid, vis ){
          if(vis==true || noTopics==true) {
              var swt_lay = '#st'+k+'l'+lid;
              var dataId = $(swt_lay).attr('id');
              var typename = $(swt_lay).attr('data-typename');
              var title = $(swt_lay).attr('data-title');
              var ows_url = $(swt_lay).attr('data-href').replace('ows','wms');
              var style = $(swt_lay).attr('data-style');
              var default_style = $(swt_lay).attr('data-defstyle');

              $(swt_lay).addClass('checked');
              $(swt_lay).css('background', 'green');

              theLayer = L.tileLayer.betterWms(ows_url, {
                layers: typename,
                format: 'image/png',
                styles: style,
                transparent: true
              });
              map_layers.push(theLayer);
              map.addLayer(theLayer);
              /*Code for app spatial objects analysis */
              // up.set_global_layer(map_layers);
              up.set_global_layer(map_layers);

              $.each(map_layers, function(i, val) {
                if (theLayer._leaflet_id == val._leaflet_id) {
                  leafletId = val._leaflet_id;
                  checkId = i;
                  var zIndex = 100+i;
                  val.setZIndex(zIndex);
                }
              });
              $(this).attr('class', 'onoffswitch checked');
              $(this).css('background', 'green');
              //if(is_vertical){
              //    layer_legend_inner(dataId, theLayer._leaflet_id, title, typename, ows_url, style, default_style, tematich_id);
              //}else{
                  layer_legend(dataId, theLayer._leaflet_id, title, typename, ows_url, style, default_style);
              //}

              /* Apaga capas que no estan visibles */
              if(vis==false) {
                $("#l"+dataId).find(".fa-eye").trigger("click");
              }
          }
      });
  });


  /*Drawing */
  var featureGroup = L.featureGroup().addTo(map);

/*DrawControl is necesary for drawing custom */
  var drawControl = new L.Control.Draw({
        edit: {
          featureGroup: featureGroup
        },
        position:'bottomright',
        draw: {
          polygon: false,
          polyline: false,
          rectangle: false,
          circle: false,
          marker: true,
        }
  }).addTo(map);
  var SquereDraw = new L.Draw.Rectangle(map, {draggable: true});


  function remove_layer(dataId) {
      var leafletId = $("#l"+dataId).attr("leaflet-id");
      $("#l"+dataId).fadeOut(200, function(){ $(this).remove();});
      for (var i = 0; i < map_layers.length; i++) {
        if (leafletId == map_layers[i]._leaflet_id) {
          map.removeLayer(map_layers[i]);
          map_layers.splice(i,1);
        }
      }
      $("#"+dataId).attr('class', 'onoffswitch');
      $("#"+dataId).css('background', 'gray');
  }
  
  function layer_legend(dataId, leaflet_id, title, typename, ows_url, style, default_style) {
    var lgd_title = ((style != default_style) ? style : title);
    let dataInfo = '';
    var imglegend = ows_url+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+typename+'&style='+style+'&transparent=true&LEGEND_OPTIONS=fontColor:ffffff;fontSize:11;';
    var theLegend = '<li id="l'+ dataId +'" class="legend layer-info-container" leaflet-id="'+leaflet_id
                     + '"><span class="layer-name -alerts"><div class="checkbox">'
                     + '<i class="fas fa-check-square" data-topic="structure" data-layer='+ leaflet_id+'></i></div><div id="cap'+ dataId +'" class="l-title" style="width:230px;">'+lgd_title+'</div>'
                      //+ '<div class="no-sort container-info-icon" title="+Info"><i class="fa fa-file-text" aria-hidden="true"></i></div>'
                      + '<div class="rlayer"><div class="tools" style="display:none;">'
                     + '<i data-toggle="tooltip" title="Leyenda" class="fa fa-list-alt itool"></i><i data-toggle="tooltip" title="Opacidad" class="fas fa-arrows-alt-h itool"></i>'
                     + '<i title="Descripción" class="fa fa-info itool" data-container="body" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="'+dataInfo+'"></i>'
                     + '<i title="Zoom" class="fas fa-search itool"></i>'
                     + '<i data-toggle="tooltip" title="Eliminar" class="fa fa-times-circle itool"></i></div>'
                     + '</div><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="l'+dataId+'"></i>'
                     + '<div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'" style="'+style+'"/></a></div>'
                     + '<div id="sld-'+dataId+'" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'
                     + leaflet_id+'"><span id="percent'+leaflet_id+'">100%</span></div></span></li>';
    $(".layers").prepend(theLegend);
    var top_id = $("#"+dataId).attr("data-topid");
    var color = $("#nav-head"+top_id).css('border-color');
    $("#l"+dataId).css('border-left','4px solid '+color);
    /*Code for app toolkit spatial objects analysis  */
    up.set_layer(typename, title);
 }


 $('#btn-panelHidden-rg').click(function() {
    $('#rightPanel').toggleClass('hiddePanel');
    $('#description').toggleClass('panelToggle');
    $('#mapa').toggleClass('panelToggle');
    $('#leyenda').toggleClass('panelToggle');
    $(this).toggleClass('hidden');
    $('#' + itemSelected).removeClass('selected');
    $('#narrative-nav-maker').addClass('hidden');

    if(itemSelected == 'description') {
      $('#rightPanel').attr('style','')
      $('.btn-panelHidden.leyenda').attr('style','')
      $('.btn-panelHidden.description').attr('style','')
      $('.btn-panelHidden.mapa').attr('style','')
    }
});

$('#btn-panelHidden-lf').click(function() {
  $(this).toggleClass('hidden');
  $('#' + showContainer).toggleClass('hidden');
  if($('#' + showContainer).hasClass('hidden')) {
    $('.leaflet-control-zoom').attr('style','margin-left: 85px !important');
  } else {
    $('.leaflet-control-zoom').attr('style','margin-left: 535x !important');
  }
});

$('.panelIcon').click(function() {
  let id = $(this).attr('id').split('m')[1];
  $('#' + showContainer).addClass('hidden')
  showContainer = 'containerTematic' + id;
  $('#containerTematic' + id).toggleClass('hidden');
  if ($('#containerTematic' + id).hasClass('hidden')){
    $('#btn-panelHidden-lf').addClass('hidden');
  } else {
    $('#btn-panelHidden-lf').removeClass('hidden');
  }

$('containerTematic' + id).removeClass('hidden'); 

if($('#containerTematic' + id).hasClass('hidden')) {
  $('.leaflet-control-zoom').attr('style','margin-left: 80px !important');
} else {
  $('.leaflet-control-zoom').attr('style','margin-left: 510px !important');
}
});

$('.btn-r').click(function() {
  $('#' + itemSelected).removeClass('selected');
  itemSelected = $(this).attr('id');
  $(this).toggleClass('selected');
  if($('#rightPanel').hasClass('hiddePanel')) {
    $('#description').toggleClass('panelToggle');
    $('#mapa').toggleClass('panelToggle');
    $('#leyenda').toggleClass('panelToggle');
    $('#rightPanel').toggleClass('hiddePanel');
  }
  if($('#btn-panelHidden-rg').hasClass('hidden')) {
    $('#btn-panelHidden-rg').removeClass('hidden')
  }
  $('.topicTitle'+'.'+classId).addClass('hidden');
  $('.topics.scroll-thin-dark'+'.'+classId).addClass('hidden');
  classId = this.className.split(' ')[2];
  $('.topicTitle'+'.'+classId).removeClass('hidden');
  $('.topics.scroll-thin-dark'+'.'+classId).removeClass('hidden');

  if(itemSelected == 'description') {
    $('#rightPanel').attr('style','width: 660px!important')
    $('.btn-panelHidden.leyenda').attr('style','right: 670px!important')
    $('.btn-panelHidden.description').attr('style','right: 670px!important')
    $('.btn-panelHidden.mapa').attr('style','right: 670px!important')
  } else {
    $('#rightPanel').attr('style','')
    $('.btn-panelHidden.leyenda').attr('style','')
    $('.btn-panelHidden.description').attr('style','')
    $('.btn-panelHidden.mapa').attr('style','')
  }

})

/* Herramientas de Leyenda */
$("#legends").on('click', '.fa-check-square', function() {
    let leafletId = $(this).attr('data-layer');
    $(this).attr('class', 'far fa-square');
    for (var i = 0; i < map_layers.length; i++) {
        if (leafletId == map_layers[i]._leaflet_id) {
          map.removeLayer(map_layers[i]);
        }
    }
});
$("#legends").on('click', '.fa-square', function() {
    let leafletId = $(this).attr('data-layer');
    $(this).attr('class', 'fas fa-check-square');

    for (var i = 0; i < map_layers.length; i++) {
        if (leafletId == map_layers[i]._leaflet_id) {
          map.addLayer(map_layers[i]);
        }
    }
});
$("#legends").on("click", ".vtools", function() {
    $("#"+$(this).attr('data-id') + " .tools").toggle('slow');
    if($("#"+$(this).attr('data-id') + " .vtools").hasClass( "fa-chevron-left" )){
      $("#"+$(this).attr('data-id') + " .vtools").attr('data-icon', 'chevron-right');
    }else{
      $("#"+$(this).attr('data-id') + " .vtools").attr('data-icon', 'chevron-left');
    }
  });

$("#legends").on("click", ".fa-list-alt", function() {
    $("#"+$(this).closest('.legend').attr('id') + " .thumb").toggle('slow');
});

$("#legends").on("click", ".fa-arrows-alt-h", function() {
    $("#"+$(this).closest('.legend').attr('id') + " .slidecontainer").toggle('slow');
});

$("#legends").on('click', '.fa-times-circle', function() {
    var dataId = $(this).closest('.legend').attr('id');
    $('#'+dataId.slice(1)).click();
});


/* Slider para opacidad */
$("#legends").on('change', '.slider', function() {
    var range = $(this).val();
    var element_id = $(this).attr('id');
    for (var i = 0; i < map_layers.length; i++) {
          if (element_id == map_layers[i]._leaflet_id) {
                map_layers[i].setOpacity(range/100);
                $('#percent'+element_id).html(range+"%");
          }
    }
  });

$('#legends').on('click', '.l-title',function() {
  $("#description").removeClass('colorMark');
  if( ! $(this).hasClass('selected')) {
    $('#description').addClass('colorCap');
    $('.l-title').removeClass('selected');
    showHideMarkers();
    $(this).addClass('selected');
    let idLayer = $(this).closest('li').attr('id').split('t')[1];
    regid = $('#st' + idLayer).attr('data-regid');
    showHideMarkers();
    if(regid != null) {
      $.ajax({
        url: '{% url "get_layer_narrative" %}',
        data: {'regid': regid},
        type: 'GET',
        success : function(obj) {
            if((obj != null) && (obj)) {
                $('#descCapa').empty();
                $('#descCapa').append(obj);
                $('#description').removeClass('hidden');
                $('#descPanorama').addClass('hidden');
                $('#descCapa').removeClass('hidden');
            } else {
                $('#descCapa').empty();
                $("#description").removeClass('colorCap'); 
                $("#description").addClass('hidden');
            }
        },
        error : function(message) {
                console.log(message);
        }
      });
    } 
  } else {
    $('#description').removeClass('colorCap');
    $('.l-title').removeClass('selected');
    showHideMarkers();
    {% if mviewer.description %}
    $('#description').removeClass('hidden');
    $('#descPanorama').removeClass('hidden');
    $('#descCapa').addClass('hidden');
    $('#marker-narrative').hide();
    $('#descCapa').show();
    {% else %}
    $('#description').addClass('hidden');
    {% endif %}
  }
})


$(".layers").on("click", ".fa-search", function() {
  var swt_id = $(this).closest('li').attr('id').slice(1);
  var southWest = L.latLng($('#'+swt_id).attr('data-y0'), $('#'+swt_id).attr('data-x0')),
  northEast = L.latLng($('#'+swt_id).attr('data-y1'), $('#'+swt_id).attr('data-x1')),
  bounds = L.latLngBounds(southWest, northEast);
  map.fitBounds(bounds);
});

/* Herramientas de Informacion en Leyenda */

$(".layers").on("click", ".fa-info", function() {
  var swt_id = $(this).closest('li').attr('id').slice(1);
  modal_info(swt_id);
});

$(".layer-title").on("click", ".fa-info", function() {
  var swt_id = $(this).attr('data-id');
  modal_info(swt_id);
});

function modal_info(swt_id){
  var dataInfo = $('#'+swt_id).attr('data-info');
  var dataTitle = $('#'+swt_id).attr('data-title');
  var dataDate = $('#'+swt_id).attr('data-date');
  var dataTypename = $('#'+swt_id).attr('data-typename');
  var layid = $('#'+swt_id).attr('data-layid');
  $('#lay-tit').html(dataTitle);
  $('#lay-abst').html(dataInfo);
  $('#lay-date').html(dataDate);
  $('#sourceModal').removeClass('hidden');
  $('#sourceModal').addClass('is-active');
  $('#down-meta').attr('href', '/layers/'+dataTypename+'/pdf_metadata_layer');
  if (layid in perm_dict){
    $('#down-shp').show();
    $('#down-shp').attr('href', '/layers/download/'+dataTypename+'/ESRI Shapefile');
  }
}

$(".modal-close").on("click", function() {
  $('#sourceModal').addClass('hidden')
});


$(function () {
  $(".layers").sortable({
    tolerance: 'pointer',
    revert: 'invalid',
    items: "> li.legend",
    placeholder: 'placeholder',
    forcePlaceholderSize: true,
    forceHelperSize: true,
    axis: "y",
    cancel: "div.no-sort",
    cursor: "row-resize",
    stop: function(event, ui) {
      var sortedIDs = $(this).sortable('toArray');
      $.each(sortedIDs.reverse(), function(index, val) {
        var leafletId = $('#'+val).attr('leaflet-id');
        var zIndex = 100+index;
        var i=0;
        while (leafletId != map_layers[i]._leaflet_id){
          i++;
        }
        map_layers[i].setZIndex(zIndex);
      });
    }
  });
});


  /* Evento del module-tabs */
  function showHideMarkers() {
    if ($('div.l-title').hasClass('selected')) {
        layerid_markers();
    } else {
        remove_markers();
        $('#narrative-nav-maker').addClass('hidden');
    }
};