<script type="text/javascript">

var map_layer_wms = [];

//FUNCION para MODAL WMS en VISUALIZADOR
function wms_ext(){
    $('#tools_wms').addClass('is-active');
};

//FUNCION PARA OBTENER LOS LAYERS DE CADA WMS
$("#wmsSelect").change(function(){
     if ($(this).val() != 'null') {
         $("#wmsLayers").empty();
         $("#wmsLayers").hide();
         $('#wmsLoad').show();
         var wmsUrl = $(this).val();
         var nameSearch = null;
         $.ajax({
           url: '{% url "external_wms" %}',
           type: 'POST',
           data: {'wmsUrl': wmsUrl, 'nameSearch': nameSearch, csrfmiddlewaretoken: '{{ csrf_token }}'},
           dataType: 'json',
         success: function(result) {
                   var index = 0;
                   var layer_list = [];
                   $.each(result, function(k, value) {
                      value['typename'] = k;
                      layer_list.push(value);
                   });

                   layer_list = layer_list.sort( function(a, b) {
                          var atl = a.title.toLowerCase();
                          var btl = b.title.toLowerCase();
                          if(atl < btl) return -1;
                          if(atl > btl) return 1;
                          return 0;
                          });
                   $.each(layer_list, function(key, lay) {
                     var html = '<div id="extLay'+index+'" class="layerMenuTopLevelGroupContainer extlayer">'
                     + '<div class="layerRow" id="L'+index+'" data-x0="'+lay.bbox[0]+'" data-x1="'+lay.bbox[2]+'" data-y0="'
                     + lay.bbox[1] +'" data-y1="'+lay.bbox[3]+'" data-title="'+lay.title+'">'
                     +'<label for="extLay'+index+'i" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'" style="margin-left:0px;">'
                     + '<input class="checkbox-wms" type="checkbox" id="extLay'+index+'i" href="'+wmsUrl+'" value="'+ lay.typename
                     + '" data-layerid="'+key+'" data-info="'+lay.abstract+'" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'">'
                     + lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'</label></div></div>';
                     $('#wmsLayers').append(html);
                   });
                   $("#wmsLoad").hide();
                   $("#wmsLayers").show();
         },
         error : function(xhr,errmsg,err) {
               $("#wmsLoad").hide();
               var html='<div id="notFoundUrlMsg" class="fadeMsg" style="font-size:12px; margin:0; padding:0;">No se encontró el servicio</div>';
               $('#wmsLayers').append(html);
               $("#wmsLayers").show();

               console.log('Error en el servidor');
               //console.log(xhr.status + ": " + xhr.responseText);
           }
         });
     }

 });

 //FUNCION PARA AGREGAR SERVICIO A LEYENDA
$('#wmsLayers').on("change","input.checkbox-wms", function(e){
        if( $(this).is(':checked') ) {
           var id = $(this).attr("data-layerid");
            var value = $(this).attr("value");
            var url = $(this).attr("href");
            var title = $(this).attr("title");

            var imglegend = url+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+value+'&transparent=true"';
            var theLegend = '<li id="wms'+ id +'" class="layer layer-info-container" leaflet-id="'+id
                          + '"><span class="layer-name -alerts" ><div class="no-sort container-eye-icon">'
                          + '<i class="fa fa-eye wms-eye eyeon" aria-hidden="true"></i></div><div class="l-title" style="width:230px;">'+title+'</div>'
//                          + '<div class="no-sort pull-right"><div class="tools no-sort" style="display:none;"><a href="#" class="f15" title="Leyenda">'
//                          + '<i class="fa fa-list-alt" aria-hidden="true"></i></a><a href="#" class="f15" title="Opacidad">'
//                          + '<i class="fa fa-arrows-h" aria-hidden="true"></i></a><a href="#" class="f15" title="Info">'
//                          + '<i class="fa fa-info-circle" aria-hidden="true"></i></a><a href="#" class="f15" title="Eliminar">'
//                          + '<i class="fa fa-times-circle" aria-hidden="true"></i></a></div>'
//                          + '<div class="pull-right"><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="l'+id+'"></i></div></div>'
                          + '<div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'" style="'+title+'"/></a></div>'
                          + '<div id="sld-'+id+'" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'
                          + id+'"><span id="percent'+id+'"></span></div></span></li>';
            $(".layers").prepend(theLegend);

            //AGREGA WMS AL MAPA
             theLayer = L.tileLayer.betterWms(url, {
                layers: value,
                format: 'image/png',
                transparent: true
              });
              map_layer_wms[id] = theLayer;
              map.addLayer(theLayer);
    } else {
        var check_title = $(this).attr("title");
        console.log("El checkbox con valor " + $(this).attr("title") + " ha sido deseleccionado");
        $(".layers li").each(function(){
            var legend_title = $(this).text();
            if (check_title == legend_title){
              $(this).hide();
            }
            })
        map.removeLayer(theLayer);
    }
});

//FUNCION PARA DESHABILITAR VISUALIZACIÓN
$(".layers").on('click', 'i.wms-eye', function() {
    var wms_layer = $(this).closest('li').attr("id");
    var wms_id = wms_layer.substring(3,wms_layer.length);
    if (typeof(map_layer_wms[wms_id]) != "undefined") {
            if ($(this).hasClass('eyeon')) {
                map.removeLayer(map_layer_wms[wms_id]);
                $(this).removeClass('eyeon');
            } else {
                map.addLayer(map_layer_wms[wms_id]);
                $(this).addClass('eyeon');
            }
    }
  });


//FUNCION PARA LIMPIAR LOS LAYERS DEL WMS
$("#emptyWms").click (function() {
    $("#wmsLayers").empty();
});


//FUNCION PARA OBTENER LAYERS DE WMS NO INCORPORADOS
$("#addWmsBtn").click( function() {
    if ($('#wmsLayers').not(':empty')){
        $("#wmsLayers").empty();
        $('#wmsLoad').show();
        }
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
                var html = '<div id="extLay'+index+'" class="layerMenuTopLevelGroupContainer extlayer">'
                + '<div class="layerRow" id="L'+index+'" data-x0="'+lay.bbox[0]+'" data-x1="'+lay.bbox[2]+'" data-y0="'
                + lay.bbox[1] +'" data-y1="'+lay.bbox[3]+'" data-title="'+lay.title+'">'
                +'<label for="extLay'+lay+'i" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'" style="margin-left:0px;">'
                + '<input class="checkbox-wms" type="checkbox" id="extLay'+index+'i" href="'+wmsUrl+'" value="'+key
                + '" data-layerid="'+lay.id+'" data-info="'+lay.abstract+'" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'">'
                + lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'</label></div></div>';
                $('#wmsLayers').append(html);
                })
           }
        })
 });

//FUNCION PARA VALIDAR LA DIRECCION HTTP DEL WMS I
function validateURL(textval) {
  var urlregex = new RegExp(
        "^(http:\/\/){1}([0-9A-Za-z]+\.){1}([0-9A-Za-z]+\.)");
  return urlregex.test(textval);
}

//FUNCION PARA VALIDAR LA DIRECCION HTTP DEL WMS II
$("#wmsUrl").change(function(){
	var wmsUrl = $('#wmsUrl').val();
    var format = validateURL(wmsUrl);
    if(format){$('#invalidUrlMsg').css('border', '2px solid green'); $('#invalidUrlMsg').hide();}
	else{$('#invalidUrlMsg').css('border', '0px solid red'); $('#invalidUrlMsg').show();}

});

</script>
