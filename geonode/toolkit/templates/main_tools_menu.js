<script type="text/javascript">
/*
En este js se tienen que agregar las constantes de cada herramientanueva y agregar en el método selectTool un if con su constante,
que se dio de alta en SpatialObject. (Para más información de uso ver archivo main_tool_menu.html)
*/
//Add your contant
var CONSTANT_INTERSECTION = "PIE_GRAPH_INTERSECTION";
var CONSTANT_CONTROL_AREAS = "CROPS_ANALISYS_SPRING";
var CONSTANT_SURVEY = "SURVEY_GENERATE";
var CONSTANT_STATISTICS = "STATISTICS";
var CONSTANT_COFFEE = "COFFEE_ROOT";
var CONSTANT_HOTSPOT = "HOTSPOT";
var CONSTANT_CENSO = "CENSO";
var CONSTANT_WMS = "WMS";
var shapes = [];
var glyphicon_chevron_up = false;
var arr_constants = [CONSTANT_INTERSECTION, CONSTANT_CONTROL_AREAS,CONSTANT_SURVEY,CONSTANT_STATISTICS,CONSTANT_COFFEE,CONSTANT_WMS, CONSTANT_CENSO];
var isWait = true;
let is_OpenModalHalfWay = false;

$(document).ready(function(){
  $('.choose_tool').html("");
  var arr_conf_specific = {{ conf_specific|safe }};
  var how_much_tools = {{ size|safe }};
  if (how_much_tools>=2) {
    {% for objs in configure_tool %}
        var name_tool = "{{ objs.tool.title|safe }}";
        var desc_tool = "{{ objs.tool.description|safe }}";
        var alias = "{{objs.help|safe}}";
        var help = "{{ objs.tool.help|safe }}";
        var icon = "{{objs.tool.icon|safe}}";
        var contant = "{{objs.tool.constant}}";
        var name = name_tool+","+desc_tool;
        $('.description-intersection').html(desc_tool); //Titulo Modal
        var id_tool = "{{ objs.tool.id|safe }}";
        {% if objs.tool.general_tool %}
        $('.choose_tool').append('<span class="icons-toolbar-soa"> \
        <i id="'+contant+'" class="fa fa-'+icon+' icon-tool " title="'+name+'" aria-hidden="true"></i>\
        <span>');
        {% endif %}
    {% endfor %}

    $.each(arr_conf_specific, function( k, v ){
       $('.l_tool').append('<span class="icons-toolbar-soa"> \
          <i id="'+v[0]+'" class="fa fa-'+v[1]+' icon-tool " title="'+v[2]+'" aria-hidden="true"></i>\
          <span>');
    });

  }else {
    {% for objs in configure_tool %}
        var constants = "{{objs.tool.constant}}";
        if (constants==CONSTANT_CONTROL_AREAS) {
          cen = new ContantsCensus();
          is_OpenModalHalfWay = false;
          cen.setConstants(true);
          $("#halfway-modal").addClass('active');
          $("#halfway-modal").toggle("slide", {direction: "right"});
        }else if(constants==CONSTANT_INTERSECTION) {
          search_layers_intersections();
          hide_default(CONSTANT_INTERSECTION);
        }else if(constants==CONSTANT_CENSO) {
          getCoverageCensus();
          hide_default(CONSTANT_CENSO);
        }else if(constants==CONSTANT_WMS) {
          wms_ext();
          hide_default(CONSTANT_WMS);
        }else {
          {% for objs in configure_tool %}
              var name_tool = "{{ objs.tool.title|safe }}";
              var desc_tool = "{{ objs.tool.description|safe }}";
              var alias = "{{objs.help|safe}}";
              var help = "{{ objs.tool.help|safe }}";
              var icon = "{{objs.tool.icon|safe}}";
              var contant = "{{objs.tool.constant}}";
              var name = name_tool+","+desc_tool;
              $('.description-intersection').html(desc_tool); //Titulo Modal
              var id_tool = "{{ objs.tool.id|safe }}";
              {% if objs.tool.general_tool %}
              $('.choose_tool').append('<span class="icons-toolbar-soa"> \
              <i id="'+contant+'" class="fa fa-'+icon+' icon-tool " title="'+name+'" aria-hidden="true"></i>\
              <span>');
              {% endif %}
          {% endfor %}

          $.each(arr_conf_specific, function( k, v ){
             $('.l_tool').append('<span class="icons-toolbar-soa"> \
                <i id="'+v[0]+'" class="fa fa-'+v[1]+' icon-tool " title="'+v[2]+'" aria-hidden="true"></i>\
                <span>');
          });
        }
    {% endfor %}

  }

  $(document).ajaxStart(function(){
    isWait = true;
    setTimeout(function(){
       if(isWait) {
        $('.background-reading').css("display", "block");
       }
    }, 800);
  });

  $(document).ajaxComplete(function(){
    isWait = false;
    $('.background-reading').css("display", "none");
  });
});

/* HERRAMIENTAS GENERALES */
$('div.choose_tool').on("click","i#"+CONSTANT_INTERSECTION, function(e){
  search_layers_intersections();
  hide_default(CONSTANT_INTERSECTION);
});
$('div.choose_tool').on("click","i#"+CONSTANT_COFFEE, function(e){
    drawControl.addTo(map);
    calcular_cafe_org();
  hide_default(CONSTANT_COFFEE);//Este Método es necesario que lo dejes en tú evento para que cambie el color de tú icono al dar click
});
$('div.choose_tool').on("click","i#"+CONSTANT_STATISTICS, function(e) {
  hide_default(CONSTANT_STATISTICS);
});
$('div.choose_tool').on("click","i#"+CONSTANT_WMS, function(e) {
  wms_ext();
  hide_default(CONSTANT_WMS);
});
$('div.choose_tool').on("click","i#"+CONSTANT_CENSO, function(e){
  getCoverageCensus();
  hide_default(CONSTANT_CENSO);
});

/* HERRAMIENTA DE CAPA */
$('div.l_tool').on("click","i#"+CONSTANT_CONTROL_AREAS, function(e){
  cen = new ContantsCensus();
  is_OpenModalHalfWay = false;
  cen.show_leyend_crop();
  hide_default(CONSTANT_CONTROL_AREAS);
});
$('div.l_tool').on("click","i#"+CONSTANT_HOTSPOT, function(e){
  getHotspot();
  hide_default(CONSTANT_HOTSPOT);
});
//Método para mostrar la leyenda por default, mandar a llamar cuando se termine de usar la herrramienta
// como parametro se le pasa tu constante.
function show_default() {
  $('.analysis-tab-content').removeClass('-active');
  $('#default').addClass('-active');
}
//Método para ocultar la leyenda por default, mandar a llamar cuando se muestre su herramienta
function hide_default(constant){
  $('.analysis-tab-content').removeClass('-active');
  $('#'+constant+'-div').addClass('-active');
}
function show_default_all(){
  $('#default').show();
  for (var i = 0; i < arr_constants.length; i++) {
    $('#'+arr_constants[i]).css("color","#565656");
  }
}
function show_layer_tool(){
    $('#layer-tools').show();
}
function hide_layer_tool(){
    $('#layer-tools').hide();
}
// INSERTAR LOS EVENTOS LLAMANDO A LA CONSTANTE COMO SE MUESTRA EN; PIE_GRAPH_INTERSECTION
// $('div.choose_tool').on("click","i#YOUR_CONSTANT_CHANGE_HERE", function(e){
//   search_layers_intersections();//your method
  //hide_default(this);//Este Método es necesario que lo dejes en tú evento para que cambie el color de tú icono al dar click
// });
/* Modal events */
$(".modal-close .fa-times").click(function() {
  $('.modal-hide').removeClass('is-active');
  show_default_all();
});
$(".modal-backdrop").click(function() {
  $('.modal-hide').removeClass('is-active');
});


/*Events for drawing */
map.on('draw:created', getGeojsonGeometry);
map.on('draw:edited', getGeojsonGeometry);
/*Get the point for once that point the location
Si se requiere ocupar los drawControl del mviewer es necesario hacer una variable para saber
si tu herramienta es seleccionada y setearle el valor cuando lo este, si se ha terminado el proceso la variable deberá ser falsa*/
function getGeojsonGeometry(e){
	featureGroup.addLayer(e.layer);//agregamos lo dibujado al mapa
  var shapes = getShapes(featureGroup);//shapes es un array que tiene las coordenadas de acuerdo al tipo de geometria que traiga el objeto
  var type = e.layerType;
  var layer = e.layer;
	var json = layer.toGeoJSON();//obtenemos un geoJson de la geometria
  // console.log(json);
  var census = new ContantsCensus();
  if (census.getConstants()) {//en este caso utilizo mi variable y mi propio método para asegurarme que   va utilizar mi herramienta el usuario
    //mandar a llamar el metodo de areas de control
      if (typeof($(".layer-selected").attr('id')) != "undefined") {
        var swt_id = $(".layer-selected").attr('id').slice(1);
        var lay_id = $("#"+swt_id).attr('data-regid');
        if (typeof(swt_id) == "undefined") {
          alert("selecciona la capa para hacer la consulta");
        }else {
          if (typeof(lay_id) != "undefined") {
            if (!is_OpenModalHalfWay) {
              $("#halfway-modal").addClass('active');
              $("#halfway-modal").toggle("slide", {direction: "right"});
            }
            census.showPanelCensus(layer,lay_id, type, layer);
            // census.getSelectionCensus(layer,lay_id, type, layer);
          }
        }
      }
  }
}
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
/*get coordintates of geometry object*/
var getShapes = function (drawnItems) {
     shapes = [];
     shapes["polyline"] = [];
     shapes["circle"] = [];
     shapes["marker"] = [];
     drawnItems.eachLayer(function (layer) {
         // Note: Rectangle extends Polygon. Polygon extends Polyline.
         // Therefore, all of them are instances of Polyline
         if (layer instanceof L.Polyline) {
             shapes["polyline"].push(layer);
         }
         if (layer instanceof L.Circle) {
             shapes["circle"].push([layer]);
         }
         if (layer instanceof L.Marker) {
             shapes["marker"].push(layer);
         }
     });
     return shapes;
 };
</script>
