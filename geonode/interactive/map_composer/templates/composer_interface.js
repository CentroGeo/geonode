<script type="text/javascript">
  var x0_mapa_global = 0;
  var x1_mapa_global = 0;
  var y0_mapa_global = 0;
  var y1_mapa_global = 0;
  var map_id = 0;

  var config = JSON.parse('{{config|escapejs}}');

  var progress = setInterval(function () {
    var $bar = $("#bar");
    $bar.width($bar.width() + 700);
  }, 800);

  $(window).load(function() {
    $("#bar").width($(this).width());
    $(".loader").fadeOut(2000);
    $(".container_layers").css('height', $(this).height()-140);
  });
  $( window ).resize(function() {
    $(".container_layers").css('height', $(this).height()-140);
  });

  /*Eliminar  footer*/
  $('#bottom-nav').css('display', 'none');
  $('#footer').css('display', 'none');
  $('#search').css('display', 'none');

  /*Tooltips*/
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  $('body').tooltip({
    selector: '[data-toggle="tooltip"]'
  });
  $(document).on({click: function () {
    $('[data-toggle="popover"]').popover()
  }}, '.fa');

  /*Display categories*/
  $(".layerListNub").click(function() {
    if($( ".layerMenu" ).hasClass( "translateLayerListRight" )){
      $(".layerMenu").removeClass( "translateLayerListRight" ).addClass( "translateLayerListLeft" );
      $(".layerMenuNubOpen").removeClass( "layerMenuNubOpen" ).addClass( "layerMenuNubClosed" );
      $(".leaflet-left").removeClass( "leaflet-control-openmenu" );
    }else{
      $(".layerMenu").removeClass( "translateLayerListLeft" ).addClass( "translateLayerListRight" );
      $(".layerMenuNubClosed").removeClass( "layerMenuNubClosed" ).addClass( "layerMenuNubOpen" );
      $(".leaflet-left").addClass( "leaflet-control-openmenu" );
    }
  });

  /*Display Legend*/
  $(".layerListNub2").click(function() {
    if($( ".layerMenu2" ).hasClass( "translateLayerListLeft2" )){
      $(".layerMenu2").removeClass( "translateLayerListLeft2" ).addClass( "translateLayerListRight2" );
      $(".fa-caret-right").removeClass( "fa-caret-right" ).addClass( "fa-list" );
    }else{
      $(".layerMenu2").removeClass( "translateLayerListRight2" ).addClass( "translateLayerListLeft2" );
      $(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
    }
  });

  /*Menu hover*/
  $( ".layerMenuTopLevelGroupLabel" ).hover(
    function() {
      $( this ).addClass( "layerMenuIconDivSelected" );
      $($(this).attr('data-id')).addClass( "layerMenuIconDivSelected" );
    }, function() {
      $( this ).removeClass( "layerMenuIconDivSelected" );
      if($($(this).attr('data-id')).hasClass( "layerMenuIconDivClicked" )){

      }else{
        $($(this).attr('data-id')).removeClass( "layerMenuIconDivSelected" );
      }
    }
  );
  /*Menu icon hover*/
  $( ".layerMenuIconDiv" ).hover(
    function() {
      $( this ).addClass( "layerMenuIconDivSelected" );
      $("#"+this.id+"t").addClass( "layerMenuIconDivSelected" );
    }, function() {
      $("#"+this.id+"t").removeClass( "layerMenuIconDivSelected" );
      if($("#"+this.id).hasClass( "layerMenuIconDivClicked" )){
      }else{
        $("#"+this.id).removeClass( "layerMenuIconDivSelected" );
      }
    }
  );

  /*Menu click*/
  $(".layerMenuTopLevelGroupLabel").click(function() {
    if($(this).attr('data-id')!="#m5"){
        $(".labelsContainer").addClass( "translateLayerLabelsLeft" );
        $($(this).attr('data-id')).addClass( "layerMenuIconDivClicked" );
        $($(this).attr('data-id')+'c').show( "slow" );
    }

  });
  /*Menu icon click*/
  $(".layerMenuIconDiv").click(function() {
    $(".labelsContainer").addClass( "translateLayerLabelsLeft" );
    $(".layerGroupContainer").hide( "slow" );
    $(".layerMenuIconDiv").removeClass( "layerMenuIconDivClicked" );
    $(".layerMenuIconDiv").removeClass( "layerMenuIconDivSelected" );
    $("#"+this.id).addClass( "layerMenuIconDivClicked" );
    $("#"+this.id).addClass( "layerMenuIconDivSelected" );
    $("#"+this.id+"c").show( "slow" );
  });

  /*Category and tags click*/
  $('.layerList').on('click', '.level2LabelText', function() {
    if ($("#"+$(this).attr('data-id')+" .layer").is(":visible")){
      $("#"+$(this).attr('data-id')+" .layer").hide( "slow" );
    }else{
      $(".layer").hide( "slow" );
      $("#"+$(this).attr('data-id')+" .layer").show( "slow" );
    }
  });

  /* Back Menu */
  $(".backToListButton").click(function() {
    // $(".layer").hide( "slow" );
    // $(".narrative").hide( "slow" );
    $(".layerGroupContainer").hide( "slow" );
    $(".labelsContainer").removeClass( "translateLayerLabelsLeft" );
    $(".layerMenuIconDiv").removeClass( "layerMenuIconDivClicked" );
    $(".layerMenuIconDiv").removeClass( "layerMenuIconDivSelected" );
  });

  /*Tools*/
  $("#addlegend").on("click", ".vtools", function() {
    $("#"+$(this).attr('data-id') + " .tools").toggle('slow');
    if($("#"+$(this).attr('data-id') + " .vtools").hasClass( "fa-chevron-left" )){
      $("#"+$(this).attr('data-id') + " .vtools").addClass('fa-chevron-right');
      $("#"+$(this).attr('data-id') + " .vtools").removeClass('fa-chevron-left');
    }else{
      $("#"+$(this).attr('data-id') + " .vtools").addClass('fa-chevron-left');
      $("#"+$(this).attr('data-id') + " .vtools").removeClass('fa-chevron-right');
    }
  });

  $("#addlegend").on("click", ".fa-list-alt", function() {
    $("#"+$(this).attr('data-id') + " .thumb").toggle('slow');
  });

  $("#addlegend").on("click", ".fa-arrows-h", function() {
    $("#"+$(this).attr('data-id') + " .slider").toggle('slow');
  });

  $("#addlegend").on("click", ".fa-check-square", function() {
    var dataId = $(this).attr('data-id');
    var leafletId = $("#"+dataId).attr("leaflet-id");
    for (var i = 0; i < checkboxes.length; i++) {
      if (leafletId == checkboxes[i]._leaflet_id) {
        map.removeLayer(checkboxes[i]);
      }
    }
    if ($("#"+$(this).attr('data-id')+" .slider").is(":visible")){
      $("#"+$(this).attr('data-id') + " .slider").toggle('slow');
    }
    if ($("#"+$(this).attr('data-id')+" .thumb").is(":visible")){
      $("#"+$(this).attr('data-id') + " .thumb").toggle('slow');
    }
    if($("#"+$(this).attr('data-id') + " .vtools").hasClass( "fa-chevron-right" )){
      $("#"+$(this).attr('data-id') + " .tools").toggle('slow');
      $("#"+$(this).attr('data-id') + " .vtools").addClass('fa-chevron-left');
      $("#"+$(this).attr('data-id') + " .vtools").removeClass('fa-chevron-right');
    }
    $(this).addClass('fa-square-o');
    $(this).removeClass('fa-check-square');
  });

  $("#addlegend").on("click", ".fa-square-o", function() {
    var dataId = $(this).attr('data-id');
    var leafletId = $("#"+dataId).attr("leaflet-id");
    for (var i = 0; i < checkboxes.length; i++) {
      if (leafletId == checkboxes[i]._leaflet_id) {
        map.addLayer(checkboxes[i]);
      }
    }
    if (!$("#"+$(this).attr('data-id')+" .thumb").is(":visible")){
      $("#"+$(this).attr('data-id') + " .thumb").toggle('slow');
    }
    $(this).addClass('fa-check-square');
    $(this).removeClass('fa-square-o');
  });

  $("#addlegend").on("click", ".fa-times", function() {
    var dataId = $(this).attr('data-id');
    var leafletId = $("#l"+dataId).attr("leaflet-id");
    $('#'+dataId).removeAttr('checked');
    $("#l"+dataId).fadeOut(200, function(){ $(this).remove();});
    var matcher = new RegExp("m7");
    if ( matcher.test(dataId) ) {
      var eid = dataId.slice(0,-1);
      $("#"+eid).fadeOut(200, function(){ $(this).remove();});
    }
    for (var i = 0; i < checkboxes.length; i++) {
       if (leafletId == checkboxes[i]._leaflet_id) {
         map.removeLayer(checkboxes[i]);
         checkboxes.splice(i,1);
       }
     }
  });

  $(".layerList").on("click",".g-download", function() {
    var layername = $(this).attr('data-name');
    var layer_storeType = $(this).attr('data-storetype');
    var links, htmlLinks = '';
    if(layer_storeType == 'dataStore'){
      links = {'KML':'KML','ESRI Shapefile':'Shapefile Comprimido','GeoJSON':'GeoJSON','CSV':'CSV','PDF':'PDF'}
    }
    else{
      links = {'TIF':'TIF'}
    }
    $.each(links, function(index, val) {
      htmlLinks += '<li><a href="/layers/download/'+layername+'/'+index+'">'+val+'</a></li>';
    });
    $( "#download-layer .modal-body" ).html(htmlLinks);
  });

  $("#addlegend").on("click", ".fa-file-text", function() {
    var url = $(this).attr('data-url');
    window.open(url, '_blank');
  });


  var theLayer = null,
      theLegend = null,
      dataId = null;
  var mbAttr = '<a href="http://www.centrogeo.org.mx/">CentroGeo &reg;</a> Centro Público de Investigación <a href="http://conacyt.gob.mx/">CONACYT</a>';
  var checkboxes = [];
  var snapshot = document.getElementById('snapshot');

  var layer_opacity = [];
  var index = [];
  var mapBase = OpenStreetMap;
  var map = L.map('map', {
        center: [22, -105],
        zoom: 6,
        animate: true,
        layers: [mapBase],
        minZoom: 4
      });

  $.each(baseLayers, function( k, v ){
    $( "#baseLayers" ).append( '<div class="radio"><label><input type="radio" name="baseLayers" value="'+k+'">'+k+'</label></div>' );
  });
  $('input[name=baseLayers]:radio').filter('[value="Open Street Map"]').attr('checked', 'checked');
  $("input[name=baseLayers]:radio").change(function () {
    baseLayers[this.value].addTo(map);
    map.removeLayer(mapBase);
    mapBase = baseLayers[this.value];
  });
  //L.control.layers(baseLayers).addTo(map);
  
  /*zoomBox*/
  L.control.zoomBox({
    modal: true
  }).addTo(map);

  //add configured controls coordinates
  L.control.coordinates({
    position:"bottomleft",
    decimals:6,
    decimalSeperator:".",
    labelTemplateLat:"Latitud: {y}",
    labelTemplateLng:"Longitud: {x}"
  }).addTo(map);

  x0_mapa_global = map.getBounds().getWest();
  x1_mapa_global = map.getBounds().getEast();
  y0_mapa_global = map.getBounds().getSouth();
  y1_mapa_global = map.getBounds().getNorth();

  /* Checkbox change event */
  $('.layerList').on('change', '.checkbox', function() {
    var checkId;
    var leafletId;
    var typename = this.value;
    dataId = $(this).attr('id');
    dataInfo = $(this).attr('data-info');

    if(this.checked) {
        theLayer = L.tileLayer.betterWms($(this).attr('href'), {
          layers: typename,
          format: 'image/png',
          transparent: true,
          attribution: mbAttr
        });

        checkboxes.push(theLayer);
        map.addLayer(theLayer);
        $.each(checkboxes, function(i, val) {
          if (theLayer._leaflet_id == val._leaflet_id) {
            leafletId = val._leaflet_id;
            checkId = i;
            var zIndex = 100+i;
            val.setZIndex(zIndex);
          }
        });
        imglegend = $(this).attr('href')+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+this.value+'&transparent=true" title="'+this.title;
        theLegend = '<div id="l'+dataId+'" leaflet-id="'+leafletId+'" typename="'+typename+'" data-title="'+this.title+'" class="rowlegend">'
        //+ '<div class="lBbox"><i data-toggle="tooltip" title="Desactivar" class="fa fa-check-square" data-id="l'+dataId+'"></i></div>'
        + '<div class="l-title"><i data-toggle="tooltip" title="Desactivar" class="fa fa-check-square" data-id="l'+dataId+'"></i> '+this.title+'</div>'
        + '<div class="thumb"><a class="thumbnail2" href="#" data-image-id="" data-title="'+this.title+'" data-image="'+imglegend
        + '" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'"/></a></div></div>';
        
        $( "#addlegend" ).prepend(theLegend);
        imgGallery();

    }else{
      leafletId = $("#l"+dataId).attr("leaflet-id");
      $("#l"+dataId).fadeOut(200, function(){ $(this).remove();});
      for (var i = 0; i < checkboxes.length; i++) {
        if (leafletId == checkboxes[i]._leaflet_id) {
          map.removeLayer(checkboxes[i]);
          checkboxes.splice(i,1);
        }
      }
    }

    if(checkboxes.length == 0) {
      $(".toolsSelected").hide();
    }
    if($( ".layerMenu2" ).hasClass( "lm-closed" )){
      var window_w = $( window ).width();
      if(window_w >= 1280){
        $(".layerMenu2").removeClass( "translateLayerListRight2" ).removeClass( "lm-closed" ).addClass( "translateLayerListLeft2" );
        $(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
      }
    }
  });

  /*Sortable*/
  $(function () {
    $("#addlegend").sortable({
      tolerance: 'pointer',
      revert: 'invalid',
      items: "> div.rowlegend",
      placeholder: 'placeholder',
      forcePlaceholderSize: true,
      forceHelperSize: true,
      axis: "y",
      cancel: "div.slider",
      cursor: "row-resize",
      stop: function(event, ui) {
        var sortedIDs = $(this).sortable('toArray');
        $.each(sortedIDs.reverse(), function(index, val) {
          var leafletId = $('#'+val).attr('leaflet-id');
          var zIndex = 100+index;
          var i=0;
          while (leafletId != checkboxes[i]._leaflet_id){
            i++;
          }
          checkboxes[i].setZIndex(zIndex);
        });
      }
    });
  });

  /* Map Reset in window */
  function resetMap() {
    $('.checkbox').removeAttr('checked');
    $( "#addlegend" ).empty();
    for (var i = 0; i < checkboxes.length; i++) {
      map.removeLayer(checkboxes[i]);
    }
    checkboxes = [];
  };


    $(".fa-repeat").click(function() {
      resetMap();
    });

  $(function() {
  $(".fa-question-circle").click(function() {
    $(".helpOverlayWrapper").css('height', $(".container_layers").height());
    //$(".helpOverlayWrapper").css('width', $(".container_layers").width());
    $(".helpOverlayWrapper").slideToggle('slow');
  });
  $(".helpOverlayWrapper").click(function() {
    $(".helpOverlayWrapper").slideToggle('fast');
  });
  });

  /*Buscador por texto*/
  $('input#text_search_input_l').quicksearch('div#result_text div.layer');
  $( "#text_search_input_l" ).bind('keyup', function(e) {
    if (this.value.length >= 3) {
      $("#m1c .layerRow").show( "fast" );
    }else {
      $("#m1c .layerRow").hide('fast');
    }
  });

  /*Seleccion de layer*/
  $("#addlegend").on("click", ".rowlegend", function() {
  $('.rowlegend').removeClass('layer_select');
  $(this).addClass('layer_select');
  $('.toolsSelected').show();
  var rlegendId = $(this).attr('id');
  if(rlegendId.indexOf('extLay')>-1) {$("#duplicateLayer").hide(); $("#styleCreate").hide();}
  else {
      var layer_id = $(this).attr('typename');

      $.ajax({
            data: {'layer_id': layer_id },
            url: '{% url "get_style_perm" %}',
            type: 'GET',
            success : function(perm) {
              if (perm == 'True') {$("#styleCreate").show(); $("#duplicateLayer").show();}
              else {$("#styleCreate").hide(); $("#duplicateLayer").hide();}
            },
            error : function(message) {
                    console.log(message);
            }
      });
  }
  $('.toolsSelected .fa').addClass('select');
  });

  $('.toolsSelected .fa-search').click(function(event) {
    var div_id = null;
    var typename = $(".layer_select").attr('typename');
    var rlegendId = $(".layer_select").attr('id');
    if(rlegendId.indexOf('extLay')>-1) {div_id = $("#wmsLayers input[type=checkbox][value='"+typename+"']").attr('id').slice(0, -1);}
    else {div_id = $("#result_text input[type=checkbox][value='"+typename+"']").attr('id').slice(0, -1);}
    var southWest = L.latLng($('#'+div_id+' .layerRow').attr('data-y0'), $('#'+div_id+' .layerRow').attr('data-x0')),
    northEast = L.latLng($('#'+div_id+' .layerRow').attr('data-y1'), $('#'+div_id+' .layerRow').attr('data-x1')),
    bounds = L.latLngBounds(southWest, northEast);
    map.fitBounds(bounds);
  });

  /* [Zoom to menu open] */
  $(".selectedRegionTitle").click( function() {
    if($(".selectedRegionTitle .fa" ).hasClass("fa-caret-down")) {
      $(".selectedRegionTitle .fa-caret-down").addClass('fa-caret-up');
      $(".selectedRegionTitle .fa-caret-down").removeClass('fa-caret-down');
      $(".geoDropDownMenu").slideDown("slow");
    } else {
      $(".selectedRegionTitle .fa-caret-up").addClass('fa-caret-down');
      $(".selectedRegionTitle .fa-caret-up").removeClass('fa-caret-up');
      $(".geoDropDownMenu").slideUp("slow");
    }
  });

  /* [moveend event] */
  map.on('moveend', function(move) {
    //$("#wait").css("display", "block");
    if ($("#m2").hasClass("layerMenuIconDivClicked")&&$(".layerMenu").hasClass("translateLayerListRight")) {
      var zoom = map.getZoom();
      if(zoom>=9){
        var x0_mapa = map.getBounds().getWest();
        var x1_mapa = map.getBounds().getEast();
        var y0_mapa = map.getBounds().getSouth();
        var y1_mapa = map.getBounds().getNorth();
        if((x0_mapa_global-x0_mapa)>1||(x0_mapa_global-x0_mapa)<-1
        ||(y0_mapa_global-y0_mapa)>1||(y0_mapa_global-y0_mapa)<-1){
         x0_mapa_global = map.getBounds().getWest();
         x1_mapa_global = map.getBounds().getEast();
         y0_mapa_global = map.getBounds().getSouth();
         y1_mapa_global = map.getBounds().getNorth();
         $(".filter_category").each(function(index) {
            var data_x0 = $(this).attr("data-x0");
            var data_x1 = $(this).attr("data-x1");
            var data_y0 = $(this).attr("data-y0");
            var data_y1 = $(this).attr("data-y1");

            if(data_x0!="undefined"){
              //If para checar que nuestra capa este dentro del bounding box del mapa visible
              if(x0_mapa<=data_x1&&y0_mapa<=data_y1
                &&data_x0<=x1_mapa&&data_y0<=y1_mapa){
                  $(this).removeClass("oculto");
                  $(this).addClass("activo");
              }else if(!$(this).find(".checkbox").is(":checked"))
              {
                $(this).addClass("oculto");
                $(this).removeClass("activo");
              }
              $('.category').each(function (index, val)  {
                var class_hide = $('#' + val.id + ' .activo').length;
                if (class_hide >= 1) {
                  $('#' + val.id).show(1000);
                }
                else {
                  $('#' + val.id).hide(1000);
                }
              });
            }
        });
      }//end if zoom minimo
      }else {
        $(".filter_category").removeClass("oculto");
        $(".filter_category").addClass("activo");
        $(".category").show(1000);
      }
    }
    //$("#wait").css("display", "none").delay( 800 );
});
/* [End moveend event] */

/*IMG Gallery*/
$("#addlegend").on("dblclick", "a.thumbnail2", function(e) {
    e.preventDefault();
    $('#image-gallery').modal('toggle');
});

function imgGallery(){

    loadGallery(true, 'a.thumbnail2');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
};

$("#image-gallery").draggable({
      handle: ".modal-header"
});

/* Crea los checkbox e icono de descarga de las capas */
function check_loop(clayers, div_id) {
    var layer_list = []
    $.each(clayers, function(k, value) {
       layer_list.push(value);
    });

    layer_list = layer_list.sort( function(a, b) {
           var atl = a.title.toLowerCase();
           var btl = b.title.toLowerCase();
           if(atl < btl) return -1;
           if(atl > btl) return 1;
           return 0;
           })

    $.each(layer_list, function(i, lay) {
        html = '<div id="'+div_id+lay.id+'" class="layerMenuTopLevelGroupContainer layer" style="display: none;">'
        + '<div class="layerRow filter_category" id="'+lay.id+'" data-x0="'+lay.x0+'" data-x1="'+lay.x1+'" data-y0="'
        + lay.y0 +'" data-y1="'+lay.y1+'" data-title="'+lay.title+'">'
        +'<label for="'+div_id+lay.id+'i" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'">'
        + '<input class="checkbox" type="checkbox" id="'+div_id+lay.id+'i" href="'+lay.ows_url+'" value="'+lay.typename
        + '" data-layerid="'+lay.id+'" data-info="'+lay.abstract+'" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'">'
        + lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'</label></div></div>';
        $('#'+div_id).append(html);
    });
}

/* Crea dinamicamente la lista de capas por categoria */
$(".catTrgg").click( function() {
    if ($('#cat_container').is(':empty')){
        $.ajax({
          url: '{% url "layers_cat_list" %}',
          type: 'POST',
          data: {csrfmiddlewaretoken: '{{ csrf_token }}'},
          dataType: 'json',
          success: function(result) {
              var cat_ordered = []
              $.each(result, function(k, value) {
                  cat_ordered.push(value);
              });

              cat_ordered = cat_ordered.sort(function(a, b) {
                 if(a.name < b.name) return -1;
                 if(a.name > b.name) return 1;
                 return 0;
              })

              /* Agrega las categorias y sus capas */
              $.each(cat_ordered, function(i, value) {
                var divcat_id = 'm2c'+ value.id + 'l',
                    clayers = value.layers;

                if( $('#'+divcat_id).length ){
                    check_loop(clayers, divcat_id);
                } else {
                    html = '<div id="'+divcat_id+'" class="layerMenuTopLevelGroupContainer level2LabelBorderBottom category"'
                    +'style="display: block;"><h6 class="level2LabelText translatable level2Label" data-id="m2c'
                    + value.id + 'l" style="direction: ltr;">' + value.name+'<span class="label label-info pull-right">'
                    + Object.keys(clayers).length+'</span></h6></div>'

                    $('#cat_container').append(html);
                    check_loop(clayers, divcat_id);
                }
              });
              $("#cat_load").hide();
          },
          error : function(xhr,errmsg,err) {
              console.log('Error en el servidor')
              console.log(xhr.status + ": " + xhr.responseText);
          }
        });
    }
});

function validateURL(textval) {
  var urlregex = new RegExp(
        "^(http:\/\/){1}([0-9A-Za-z]+\.){1}([0-9A-Za-z]+\.)");
  return urlregex.test(textval);
}

$('#wmsUrl').on('input', function() {
	var input=$(this);
	var wmsUrl=input.val();
	var format = validateURL(wmsUrl);
	if(format){input.css('border', '2px solid green'); $("#addWmsBtn").prop('disabled', false); $('#invalidUrlMsg').hide();}
	else{input.css('border', '2px solid red');$("#addWmsBtn").prop('disabled', true); $('#invalidUrlMsg').show();}
});

$("#addWmsBtn").click( function() {
    if ($('#wmsLayers').is(':empty')){
        $("#wmsLayers").hide();
        $('#wmsLoad').show();
        var wmsUrl = $('#wmsUrl').val();
        var nameSearch = $('#nameSearch').val();

        $.ajax({
          url: '{% url "external_wms" %}',
          type: 'POST',
          data: {'wmsUrl': wmsUrl, 'nameSearch': nameSearch, csrfmiddlewaretoken: '{{ csrf_token }}'},
          dataType: 'json',
          success: function(result) {
              var index = 0;
              $.each(result, function(key, lay) {
                html = '<div id="extLay'+index+'" class="layerMenuTopLevelGroupContainer extlayer">'
                + '<div class="layerRow" id="L'+index+'" data-x0="'+lay.bbox[0]+'" data-x1="'+lay.bbox[2]+'" data-y0="'
                + lay.bbox[1] +'" data-y1="'+lay.bbox[3]+'" data-title="'+lay.title+'">'
                +'<label for="extLay'+index+'i" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'" style="margin-left:0px;">'
                + '<input class="checkbox" type="checkbox" id="extLay'+index+'i" href="'+wmsUrl+'" value="'+key
                + '" data-layerid="'+lay.id+'" data-info="'+lay.abstract+'" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'">'
                + lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'</label></div></div>';
                $('#wmsLayers').append(html);
                index++;
              });
              $("#wmsLoad").hide();
              $("#wmsLayers").show();
              $("#emptyWms").prop('disabled', false);
          },
          error : function(xhr,errmsg,err) {
              $("#wmsLoad").hide();
              $("#notFoundUrlMsg").show();
              console.log('Error en el servidor')
              console.log(xhr.status + ": " + xhr.responseText);
          }
        });
    }
});

/*Vacia lista de resultados wms externos*/
$("#emptyWms").click( function() {
    $("#wmsLayers").empty();
});
/*Conversion de 4326 a 900913*/
var degrees2meters = function(lng,lat) {
        var x = lng * 20037508.34 / 180;
        var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
        y = y * 20037508.34 / 180;
        return [x, y]
}
var degrees4meters = function(slng,slat,nlng,nlat) {
        var x = slng * 20037508.34 / 180;
        var y = Math.log(Math.tan((90 + slat) * Math.PI / 360)) / (Math.PI / 180);
        y = y * 20037508.34 / 180;
        var x2 = nlng * 20037508.34 / 180;
        var y2 = Math.log(Math.tan((90 + nlat) * Math.PI / 360)) / (Math.PI / 180);
        y2 = y2 * 20037508.34 / 180;
        return [x, y, x2, y2]
}
/*Conversion de 900913 a 4326*/
var meters2degress = function(x,y) {
        var lng = x *  180 / 20037508.34 ;
        var lat =Number(180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2));

        return [lng, lat]
}

/* Inicia codigo de composer*/
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});


$("#savenewMap").click(function(event) {
    if(checkboxes.length>0){
      save(event, map_id);
    }
  });
  
  function save(event, map_id) {
      event.preventDefault();
      var mapBaseSelected = $('input[name=baseLayers]:checked').val();
      var saveLayers = [];
      var layerBase = {
                "fixed": true,
                "group": "background",
                "name": mapBaseSelected.replace(/ /g,''),
                "opacity": 1,
                "selected": true,
                "source": "0",
                "title": mapBaseSelected,
                "visibility": true
              };
      saveLayers.push(layerBase);
      $($(".rowlegend").get().reverse()).each(function( index ) {
            var idLegend = $(this).attr("id");
            var dataTitle = $(this).attr("data-title");
            var status = $("#"+idLegend+" .fa").hasClass('fa-check-square');
            var typename = $(this).attr("typename");
            var title = typename.replace("geonode:", "");
            var styles = $('#'+idLegend).find('.img-responsive').attr("style");
            styles = typeof styles != "undefined" ? styles : '';
            var lgd_url = $(this).find('.thumbnail2').attr('data-image');
            var ows_url = lgd_url.split('?')[0];
            var source='0';

            var url_exist = false;
            for (var i = 0; i < Object.keys(config.sources).length; i++){
              if(ows_url == config.sources[i.toString()].url) {
                  url_exist = true;
                  source = i.toString();
              }
            }
            if (!url_exist){
              var ext_source = {
                  'ptype': "gxp_wmscsource",
                  'restUrl':"/gs/rest",
                  'url': ows_url
              }
              config.sources[(Object.keys(config.sources).length).toString()] = ext_source;
              source = (Object.keys(config.sources).length - 1).toString();
            }

            saveLayers.push({
                "attribution": null,
                "cached": true,
                "capability": {
                  "abstract": "",
                  "authorityURLs": {},
                  "bbox": {
                    "EPSG:4326": {
                      "bbox": [
                        -117.12045095319,
                        14.6223451841443,
                        -86.8120112349319,
                        32.7101862141882
                      ],
                      "srs": "EPSG:4326"
                    }
                  },
                  "cascaded": 0,
                  "dimensions": {},
                  "fixedHeight": 0,
                  "fixedWidth": 0,
                  "formats": [
                    "image/png",
                    "application/atom xml",
                    "application/atom+xml",
                    "application/openlayers",
                    "application/pdf",
                    "application/rss xml",
                    "application/rss+xml",
                    "application/vnd.google-earth.kml",
                    "application/vnd.google-earth.kml xml",
                    "application/vnd.google-earth.kml+xml",
                    "application/vnd.google-earth.kml+xml;mode=networklink",
                    "application/vnd.google-earth.kmz",
                    "application/vnd.google-earth.kmz xml",
                    "application/vnd.google-earth.kmz+xml",
                    "application/vnd.google-earth.kmz;mode=networklink",
                    "atom",
                    "image/geotiff",
                    "image/geotiff8",
                    "image/gif",
                    "image/gif;subtype=animated",
                    "image/jpeg",
                    "image/png8",
                    "image/png; mode=8bit",
                    "image/svg",
                    "image/svg xml",
                    "image/svg+xml",
                    "image/tiff",
                    "image/tiff8",
                    "kml",
                    "kmz",
                    "openlayers",
                    "rss",
                    "text/html; subtype=openlayers"
                  ],
                  "identifiers": {},
                  "infoFormats": [
                    "text/plain",
                    "application/vnd.ogc.gml",
                    "text/xml",
                    "application/vnd.ogc.gml/3.1.1",
                    "text/xml; subtype=gml/3.1.1",
                    "text/html",
                    "application/json"
                  ],
                  "keywords": [
                    "features",
                    "carre1mgw"
                  ],
                  "llbbox": [
                    -117.12045095319,
                    14.6223451841443,
                    -86.8120112349319,
                    32.7101862141882
                  ],
                  "metadataURLs": [],
                  "name": typename,
                  "nestedLayers": [],
                  "noSubsets": false,
                  "opaque": false,
                  "prefix": "geonode",
                  "queryable": true,
                  "srs": {
                    "EPSG:900913": true
                  },
                  "styles": [
                    {
                      "legend": {
                        "format": "image/png",
                        "height": "20",
                        "href": "http://localhost:8080/geoserver/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer="+typename,
                        "width": "20"
                      },
                      "name": title,
                      "title": "A gold line style"
                    }
                  ],
                  "tileSets": [
                    {
                      "bbox": {
                        "EPSG:900913": {
                          "bbox": [
                            -20037508.34,
                            0,
                            0,
                            20037508.34
                          ],
                          "srs": "EPSG:900913"
                        }
                      },
                      "format": "image/gif",
                      "height": 256,
                      "layers": typename,
                      "resolutions": [
                        156543.03390625,
                        78271.516953125,
                        39135.7584765625,
                        19567.87923828125,
                        9783.939619140625,
                        4891.9698095703125,
                        2445.9849047851562,
                        1222.9924523925781,
                        611.4962261962891,
                        305.74811309814453,
                        152.87405654907226,
                        76.43702827453613,
                        38.218514137268066,
                        19.109257068634033,
                        9.554628534317017,
                        4.777314267158508,
                        2.388657133579254,
                        1.194328566789627,
                        0.5971642833948135,
                        0.29858214169740677,
                        0.14929107084870338,
                        0.07464553542435169,
                        0.037322767712175846,
                        0.018661383856087923,
                        0.009330691928043961,
                        0.004665345964021981,
                        0.0023326729820109904,
                        0.0011663364910054952,
                        0.0005831682455027476,
                        0.0002915841227513738,
                        0.0001457920613756869
                      ],
                      "srs": {
                        "EPSG:900913": true
                      },
                      "styles": styles,
                      "width": 256
                    }
                  ],
                  "title": title
                },
                "format": "image/png",
                "name": typename,
                "opacity": 1,
                "selected": false,
                "source": source,
                "styles": styles,
                "tiled": true,
                "title": dataTitle,
                "transparent": true,
                "visibility": status
              });
      });
      var title = $('#title').val(),
          abstract = $('#abstract').val();

      var body = {
          "about": {
            "abstract": abstract,
            "title": title
          },
          "ajaxLoginUrl": "/account/ajax_login",
          "csrfToken": "{{ csrf_token }}",
          "defaultSourceType": config.defaultSourceType,
          "homeUrl": "/",
          "id": config.id,
          "listeners": {},
          "localCSWBaseUrl": "{{ BASE_URL }}catalogue/csw",
          "localGeoServerBaseUrl": "{{GEOSERVER_BASE_URL}}",
          "map": {
            "center": degrees2meters(map.getCenter().lng,map.getCenter().lat),
            "layers": saveLayers,
            "maxExtent": config.maxExtent,
            "maxResolution": config.map.maxResolution,
            "projection": config.map.projection,
            "units": config.units,
            "zoom": map.getZoom()
          },
          "printService": "http://localhost:8080/geoserver/pdf/",
          "proxy": "/proxy/?url=",
          "rest": "/maps/",
          "sources": config.sources
        };
      if(config.id == 0){
        $.ajax({
          url: '{% url "new_map_json" %}',
          type: 'POST',
          data: JSON.stringify(body),
          dataType: 'json',
          success: function(result) {
              map_id = result.id;
              if (map_id != 0) {
                  $("#myModal .modal-body").html('<form role="form"><div class="form-group"><label for="usrname"><span class="fa fa-share-square-o"></span> Compartir mapa</label></div>'+
                  '<div class="form-group"><label><span class="fa fa-link"></span> Url del mapa</label>'+
                  '<input type="text" class="form-control" value="'+window.location.href.split('/interactive')[0]+'/maps/'+map_id+'/leaflet_embed">'+
                  '</div><div class="form-group"><label for="psw"><span class="fa fa-code"></span> Código HTML del mapa</label>'+
                  '<textarea class="form-control" rows="4"><iframe src="'+window.location.href.split('/interactive')[0]+'/maps/'+map_id+'/leaflet_embed"></iframe></textarea></div></div>');
                  $("#myModal .modal-footer").html('');
                  $("#myModal .modal-header h4").html('¡Mapa guardado!');
                  //$("#myBtn").hide('slow');
              }
          },
          error : function(xhr,errmsg,err) {
              console.log('Error en el servidor')
              console.log(xhr.status + ": " + xhr.responseText);
          }
        });
      }else {
        $.ajax({
          url: '{% url "map_json" mapid %}',
          type: 'PUT',
          data: JSON.stringify(body),
          dataType: 'json',
          success: function(result) {
              map_id = result.id;
              if (map_id != 0) {
                  $("#myModal .modal-body").html('<form role="form"><div class="form-group"><label for="usrname"><span class="fa fa-share-square-o"></span> Compartir mapa</label></div>'+
                  '<div class="form-group"><label><span class="fa fa-link"></span> Url del mapa</label>'+
                  '<input type="text" class="form-control" value="'+window.location.href.split('/interactive')[0]+'/maps/'+map_id+'/leaflet_embed">'+
                  '</div><div class="form-group"><label for="psw"><span class="fa fa-code"></span> Código HTML del mapa</label>'+
                  '<textarea class="form-control" rows="4"><iframe src="'+window.location.href.split('/interactive')[0]+'/maps/'+map_id+'/leaflet_embed"></iframe></textarea></div></div>');
                  $("#myModal .modal-footer").html('');
                  $("#myModal .modal-header h4").html('¡Mapa guardado!');
                  //$("#myBtn").hide('slow');
              }
          },
          error : function(xhr,errmsg,err) {
              console.log('Error en el servidor')
              console.log(xhr.status + ": " + xhr.responseText);
          }
        });
      }
  }

function getUrlVars() {
    var vars = [], hash;
    if (window.location.href.indexOf('?')>-1){
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[1]);
            //vars[hash[0]] = hash[1];
        }
    }
    return vars;
}

$(document).ready(function() {
    $(".leaflet-left").addClass( "leaflet-control-openmenu" );
    if (getUrlVars().length > 0){
      $.each(getUrlVars(), function(index, val) {
        $('.checkbox').filter('[value="'+val.replace("%3A",":")+'"]').trigger('click');
      });
      $(".layerMenu").removeClass( "translateLayerListRight" ).addClass( "translateLayerListLeft" );
      $(".layerMenuNubOpen").removeClass( "layerMenuNubOpen" ).addClass( "layerMenuNubClosed" );
      $(".layerMenu2").removeClass( "translateLayerListRight2" ).addClass( "translateLayerListLeft2" );
      $(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
      $(".leaflet-left").removeClass( "leaflet-control-openmenu" );
    }
    if( window.location.href.indexOf('?layer=') != -1 ) {
        $(".rowlegend").addClass('layer_select');
        $(".logo").text('Editor de Capa');
        $("#styleCreate").trigger("click");
    }
});

if ({{mapid}} != 0) {
  sAjaxMap(config);
}

  /*Succes ajaxMap*/
  function sAjaxMap(data){
    var layers = data.map.layers;
    var x = data.map.center[1];
    var y = data.map.center[0];
    var point = new L.Point(y, x); // Lon/Lat
    var latlng = L.Projection.SphericalMercator.unproject(point);
    map.setView(latlng, data.map.zoom);
    $('#title').val(data.about.title);
    $('#abstract').text(data.about.abstract);
    $.each(layers, function(index, val) {
      if (val.group != 'background'){
        var dataId = 'i'+index;
        var dataInfo = "";
        var leafletId;
        if(typeof val.capability != "undefined"){
            dataInfo = '<i title="Descripción" class="fa fa-info" data-container="body" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="'+val.capability.abstract+'"></i>';
        }
        var layerStyle = typeof val.styles != "undefined" ? val.styles : '';
        var theLayer = L.tileLayer.betterWms(data.sources[val.source].url, {
              layers: val.name,
              format: val.format,
              transparent: true,
              styles: layerStyle
            });

        map.addLayer(theLayer);
        checkboxes.push(theLayer);
        var leafletId = theLayer._leaflet_id;

        for (var i = 0; i < checkboxes.length; i++) {
          if (leafletId == checkboxes[i]._leaflet_id) {
            var checkId = i;
            var zIndex = 100+i;
            var faCkeck = 'fa-check-square';
            var display = 'style="display:block;"';
            checkboxes[i].setZIndex(zIndex);
            if(!val.visibility){
              map.removeLayer(checkboxes[i]);
              faCkeck = 'fa-square-o';
              display = 'style="display:none;"';
            }
          }
        }

        imglegend = data.sources[val.source].url+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+val.name+'&style='+layerStyle+'&transparent=true" title="'+val.title;
        theLegend = '<div id="l'+dataId+'" leaflet-id="'+leafletId+'" typename="'+val.name+'" data-title="'
        + val.title+'" class="rowlegend"><div class="l-title"><i data-toggle="tooltip" title="Desactivar" class="fa '+faCkeck
        + '" data-id="l'+dataId+'"></i> '+val.title+'</div><div class="rlayer">'
        + '<div class="tools" style="display:none;"><i data-toggle="tooltip" title="Leyenda" data-id="l'+dataId+'" class="fa fa-list-alt"></i>'
        + dataInfo +'<i data-toggle="tooltip" title="Eliminar" class="fa fa-times" data-value="'+this.name+'" data-id="'+dataId+'"></i></div>'
        + '</div><i data-toggle="tooltip" title="Herramientas" data-id="l'+dataId+'" class="vtools animationTransition fa fa-chevron-left"></i>'
        + '<div class="thumb"'+display+'><a class="thumbnail2" href="#" data-image-id="" data-title="'+val.title+'" data-image="'
        + imglegend+'" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'" style="'+layerStyle+'"/></a></div></div>';

        $( "#addlegend" ).prepend(theLegend);

        $("#l"+dataId+ " .slider").slideToggle('slow');
        if($( ".layerMenu2" ).hasClass( "lm-closed" )){
          var window_w = $( window ).width();
          if(window_w >= 1280){
            $(".layerMenu2").removeClass( "translateLayerListRight2" ).removeClass( "lm-closed" ).addClass( "translateLayerListLeft2" );
            $(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
          }
        }
      }else{
        if(val.visibility){
          $('input[name=baseLayers]:radio').filter('[value="'+val.title+'"]').trigger('click');
        }
      }
    });
  }
</script>
