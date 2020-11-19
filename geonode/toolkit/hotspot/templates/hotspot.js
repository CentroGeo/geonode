<script type="text/javascript">
/*
This class js is for get map to hostpot
*/
var arr_legend_hot = [];
$(document).ready(function(){
  $('#module-legend ul.layers').on("click","i.eyeon-hot", function(e){
    var id_lhot = $(this).attr("id");
    var key_hot = id_lhot.substring("5",id_lhot.length);
    $(this).removeClass("eyeon-hot");
    $(this).addClass("eyeoff-hot");
    $(this).css("color","#2A2A2A");
    map.eachLayer(function (layer) {
      if(typeof layer.options.layer_id != 'undefined'){
        if (layer.options.layer_id==key_hot) {
          map.removeLayer(layer);
        }
      }
  });
  });
  $('#module-legend ul.layers').on("click","i.eyeoff-hot", function(e){
    var id_lhot = $(this).attr("id");
    var key_hot = id_lhot.substring("5",id_lhot.length);
    $(this).removeClass("eyeoff-hot");
    $(this).addClass("eyeon-hot");
    $(this).css("color","#97bd3d");
    putHeadMap(key_hot, arr_legend_hot[key_hot]);
  });
  // $("#module-legend ul.layers").on("click",".close-hot", function(e){
  //   console.log($(this).attr("id"));
  //   var id_lhot = $(this).attr("id");
  //   var key_hot = id_lhot.substring("3",id_lhot.length);
  //   console.log(key_hot);
  //   map.eachLayer(function (layer) {
  //     console.log(layer.options);
  //     if(typeof layer.options.layer_id != 'undefined'){
  //       if (layer.options.layer_id==key_hot) {
  //         map.removeLayer(layer);
  //       }
  //     }
  // });
  // });
  $('#HOSTPOT-div').on("click","i.close-tool", function(e){
    $('#HOSTPOT-div').html("");
    show_default();
    map.eachLayer(function (layer) {
      if(typeof layer.options.radius != 'undefined'){
        map.removeLayer(layer);
      }
  });
  });
});
function putHeadMap(id_lay, coordinates_hot){
  var heat = L.heatLayer(coordinates_hot, {
   layer_id: id_lay,
   radius: 20,
   blur: 15,
   maxOpacity : 0.8,
   scaleRadius : true,
   useLocalExtrema : false,
   maxZoom: 10,
   max: 4.0,
   latField: 'lat',
   lngField: 'lng',
   valueField: 'count',
   gradient : {
     0.25: "rgb(14,84,0)", // verde
     0.55: "yellow", // amarillo
     0.85: "rgb(255,153,0)", // naranja
     1.0: "rgb(168,0,0)" // rojo
     }
  }).addTo(map);
}
// <i class="fa fa-times close-hot" title="Eliminar" id="rmh'+id_lay+'" aria-hidden="true"></i>
function legend_hot(id_lay, title) {
  $( "#module-legend ul.layers" )
  .append( '<li id="lhot'+id_lay+'" class="legend-hots layer-info-container" leaflet-id="lh'+id_lay+'" style="border-left: 4px solid rgb(229, 208, 16);">\
   <span class="layer-name -alerts"><div class="no-sort container-eye-icon">\
   <i class="fa fa-eye eyeon-hot" id="hideh'+id_lay+'" aria-hidden="true"></i>\
   </div><div class="l-title" style="width:230px;">Mapa de calor -'+title+' </div>\
   <div class="no-sort pull-right" style="display: none;">\
   <div class="tools no-sort" style="display:none;">\
   <a href="#" class="f15" title="Leyenda">\
   <i class="fa fa-list-alt" aria-hidden="true"></i></a>\
   <a href="#" class="f15" title="Opacidad">\
   <i class="fa fa-arrows-h" aria-hidden="true"></i></a>\
   <a href="#" class="f15" title="Info">\
   <i class="fa fa-info-circle" aria-hidden="true"></i></a>\
   <a href="#" class="f15" title="Eliminar">\
   <i class="fa fa-times-circle" aria-hidden="true"></i></a></div>\
   <div class="pull-right">\
   <i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="lh4"></i></div></div>\
   <div class="thumb">\
   <a class="thumbnail2" href="#" data-target="#image-gallery">Min \
   <img src="{{STATIC_URL}}idegeo/soa_toolkit/img/legend_hot.png" style="vertical-align: middle; height:20px; width:180px;"/>\
    Max</a></div>\
    <div id="sld-st1l5r1" class="no-sort slidecontainer" style="display:none;">\
    <input type="range" min="1" max="100" value="100" class="slider" id="1">\
    <span id="percent1">100%</span></div></span>\
    </li></ul>' );
}

function getHotspot(){
if (typeof($(".layer-selected").attr('id')) != "undefined") {
  var swt_id = $(".layer-selected").attr('id').slice(1);
  var lay_id = $("#"+swt_id).attr('data-regid');
  if (typeof(lay_id) != "undefined") {
    console.log(arr_legend_hot[lay_id]);
    if (typeof(arr_legend_hot[lay_id]) != "undefined") {
      $('#HOSTPOT-div').show();
      $('#HOSTPOT-div').html("<h1>Quitar mapas de calor. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
      alert("la capa ya tiene un mapa de calor");
        return;
    }
    var query_data = {
       'id_layerids': lay_id
     }
     $.ajax({
     data: {'query_data': JSON.stringify(query_data),//JSON.stringify(query_data),
        csrfmiddlewaretoken: '{{ csrf_token }}'
       },
    url: '{% url "hotspot_tool" %}',
    type: 'POST',
    success : function(data) {
      var id_lay = data[0];
      console.log(id_lay);
      var name_tab = data[1];
      var shapes = data[2];
      var coordinates_hot = [];
      for (var i = 0; i < shapes.length; i++) {
        var hot = [];
        hot.push(shapes[i][0].coordinates[1]);
        hot.push(shapes[i][0].coordinates[0]);
        coordinates_hot.push(hot);
      }
      arr_legend_hot[id_lay] = coordinates_hot;
      // $('#HOSTPOT-div').show();
      // $('#HOSTPOT-div').html("<h1>Quitar mapa de calor. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
      putHeadMap(id_lay, coordinates_hot);
      legend_hot(id_lay, name_tab);
      show_default();
    },
    error : function(message) {
            console.log(message);
         }
    });
  }
}
}
</script>
