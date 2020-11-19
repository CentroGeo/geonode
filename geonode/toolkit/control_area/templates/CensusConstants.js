<script type="text/javascript">
/*
This class js is for call to constants of census_analysis from select loney spatial objects
*/
var CONSTANTS_data = [];
var AC_analisys = "CROPS_ANALISYS_SPRING";
var is_tool_census = false;
var id_map_census = 0;
var geometry_global = [];
var id_layerids_global = "";
var type_global = "";

function remove_selection() {
    $.each(map._layers, function (ml) {
        if (map._layers[ml].options.color) {
          if (map._layers[ml].options.color=="#3388ff") {
              map.removeLayer(this);
          }
        }
    })
}
function remove_rectangle() {
    $.each(map._layers, function (ml) {
        if (map._layers[ml].options.color) {
          if (map._layers[ml].options.color=="#f06eaa") {
              map.removeLayer(this);
          }
        }
    })
}
function multi_selec(geometry, id_layerids, type, layer){

  var geo = [];
  var coor_string = "";
  var coor_base = "";
  var close_ring = "";
  if (type === 'rectangle') {
    $('.background-reading-sub-ajax').show();
    $("#waiting").show();
    geo = geometry.getLatLngs();//geometry['polyline'];
    var pro = geo[0];
    for (var i = 0; i < pro.length; i++) {
      if (i==0) {
        close_ring = pro[i].lng+" "+pro[i].lat;
      }
      coor_string = coor_string +""+pro[i].lng+" "+pro[i].lat+",";
    }
    coor_base = coor_string+""+close_ring;//.substring(0,coor_string.length-1);
  var query_data = {
     'id_layerids': id_layerids,
     'geometry':coor_base
   }
  $.ajax({
        data: {'query_data': JSON.stringify(query_data),//JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
         url: '{% url "getMultiKeyAC" %}',
         type: "POST",
         success : function(data) {
          // console.log(data);
           var crops = data[0];
           var geoJsonF = data[1];
           if (crops.length==0) {
             $("#waiting").hide();
             $('.background-reading-sub-ajax').hide();
            console.log("No tiene configuración");
            $('#CROPS_ANALISYS_SPRING-div').html("<h1>La capa seleccionada no tiene configuración para la herramienta seleccionada. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
            return;
           }
           var data_info = crops[0];
           titles_fields = crops[1];
          //  console.log(titles_fields);
           var bear_query = crops[2];
           var upc = crops[3];
           var data_delimiter = crops[4];
           var nivel = crops[5];
           var header = crops[6];
           var ed = crops[7];
           var mu = crops[8];
           var ag = crops[9];
           var a__c = crops[10];
           if (header) {
             $('#control-area-tbl-main').show();
             $('#control-area-tbl-second').show();
             setHeader(a__c, ag, ed, mu);
           }
           remove_rectangle();
           remove_selection();
           setFeatureJSon(geoJsonF);
           cleanHalfWayModal();
           $('#control-area-div-modal').show();
           $('#control-area-tbl-second').show();
           if(data_info.length==0){
             alert("No hay cultivos para esta selección");
             $("#waiting").hide();
             $('.background-reading-sub-ajax').hide();
             return;
           }else if(bear_query==null){
               alert("No hay cultivos para esta selección");
               $("#waiting").hide();
               $('.background-reading-sub-ajax').hide();
               return;
             }
           //Data for specific analisisp008n06 = new Object();
           p008n06_delimiter = new Object();
           p008n10_delimiter = new Object();

          for (var delimiter_crops in data_delimiter) {
              p008n06_delimiter[delimiter_crops] = data_delimiter[delimiter_crops][1];
              p008n10_delimiter[delimiter_crops] = data_delimiter[delimiter_crops][2];
          }
          crop_max_sembrado_delimiter = [];
          crop_max_cosechado_delimiter = [];
          for (var max_d in p008n06_delimiter) {
            crop_max_sembrado_delimiter.push(p008n06_delimiter[max_d]);
          }
          for (var maxCo_d in p008n10_delimiter) {
            crop_max_cosechado_delimiter.push(p008n10_delimiter[maxCo_d]);
          }
           //Data for statal analiss
           p008n06 = new Object();
           p008n10 = new Object();

          for (var ca_crops in data_info) {
              p008n06[ca_crops] = data_info[ca_crops][1];
              p008n10[ca_crops] = data_info[ca_crops][2];
          }
          crop_max_sembrado = [];
          crop_max_cosechado = [];
          for (var max in p008n06) {
            crop_max_sembrado.push(p008n06[max]);
          }
          for (var maxCo in p008n10) {
            crop_max_cosechado.push(p008n10[maxCo]);
          }
         //  google.charts.load('current', {'packages': ['corechart'], 'callback': drawChartses});
           $('.table-results-pv').hide();
           drawChartsesCensus(data_info, nivel);
           $("#waiting").hide();
           $('.background-reading-sub-ajax').hide();

         },
         error : function(message) {
                 console.log(message);
         }
   });
 }
}
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
function setBasics(data){
  setBasicSurface(data[0], '.surfaces', "");
  setBasicInteger(data[1], '.scholerships', "");
  setBasicSurface(data[2], '.economy', "");
  setBasicPeople(data[3], '.economy_dependences', "");
  setBasicInteger(data[4], '.services', "");
}
function custom_crops(geometry, id_layerids, type, layer){
  var geo = [];
  var coor_string = "";
  var coor_base = "";
  var close_ring = "";
  if (type === 'rectangle') {
    $('.background-reading-sub-ajax').show();
    $("#waiting").show();
    geo = geometry.getLatLngs();//geometry['polyline'];
    var pro = geo[0];
    for (var i = 0; i < pro.length; i++) {
      if (i==0) {
        close_ring = pro[i].lng+" "+pro[i].lat;
      }
      coor_string = coor_string +""+pro[i].lng+" "+pro[i].lat+",";
    }
    coor_base = coor_string+""+close_ring;//.substring(0,coor_string.length-1);
  var query_data = {
     'id_layerids': id_layerids,
     'geometry':coor_base
   }
  $.ajax({
        data: {'query_data': JSON.stringify(query_data),//JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
         url: '{% url "getMultiKeyACCrops" %}',
         type: "POST",
         success : function(data) {
          //  console.log("a wevoooooooooooooooooooooooooooooooooooo");
          // console.log(data);
           var crops = data[0];
           var geoJsonF = data[1];
           if (crops.length==0) {
             $("#waiting").hide();
             $('.background-reading-sub-ajax').hide();
            console.log("No tiene configuración");
            $('#CROPS_ANALISYS_SPRING-div').html("<h1>La capa seleccionada no tiene configuración para la herramienta seleccionada. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
            return;
           }
           var data_info = crops[0];
           titles_fields = crops[1];
           var nivel = crops[3];
           var header = crops[4];
           var ed = crops[5];
           var mu = crops[6];
           var ag = crops[7];
           var a__c = crops[8];
           var arr_ac = crops[9];
           var data_info_oi = crops[9];
           var data_info_pn = crops[10];
           var data_info_cos = crops[11];
           var data_info_oi_cos = crops[12];
           var data_info_pn_cos = crops[13];
           var data_info_installations = crops[14];
           var data_info_correlation = crops[15];
           var data_info_technologies = crops[16];
           var data_info_problematic = crops[17];
           var data_info_destination = crops[18];

           if (header) {
             $('#control-area-tbl-main').show();
             $('#control-area-tbl-second').show();
             setHeader(a__c, ag, ed, mu);
           }
           remove_rectangle();
           remove_selection();

           for (var i = 0; i < geoJsonF.length; i++) {
                L.geoJson(geoJsonF[i], {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, geojsonMarkerOptions);
                }
                }).addTo(map);
           }
           if(data_info.length==0){
             alert("No hay cultivos para esta selección");
             $("#waiting").hide();
             $('.background-reading-sub-ajax').hide();
             return;
           }
           cleanHalfWayModal();
           $('#quer-crops').show();
           $("#waiting").hide();
           $('.background-reading-sub-ajax').hide();
           $('.table-results-pv').hide();
           $('#main-agricola').show();
           p008n06_pv_crops = new Object();
           p008n06_oi_crops = new Object();
           p008n06_perene_crops = new Object();
           p008n06_cos_crops = new Object();
           p008n06_oi_crops_cos = new Object();
           p008n06_pn_crops_cos = new Object();
           p008n06_correlation_pv = new Object();
          for (var delimiter_crops in data_info) {
              p008n06_pv_crops[delimiter_crops] = data_info[delimiter_crops][1];
          }
          for (var delimiter_crops in data_info_oi) {
            p008n06_oi_crops[delimiter_crops] = data_info_oi[delimiter_crops][1];
          }
          for (var delimiter_crops in data_info_pn) {
            p008n06_perene_crops[delimiter_crops] = data_info_pn[delimiter_crops][1];
          }
          for (var delimiter_crops in data_info_cos) {
            p008n06_cos_crops[delimiter_crops] = data_info_cos[delimiter_crops][1];
          }
          for (var delimiter_crops in data_info_oi_cos) {
            p008n06_oi_crops_cos[delimiter_crops] = data_info_oi_cos[delimiter_crops][1];
          }
          for (var delimiter_crops in data_info_pn_cos) {
            p008n06_pn_crops_cos[delimiter_crops] = data_info_pn_cos[delimiter_crops][1];
          }
          for (var delimiter_crops in data_info_correlation) {
            p008n06_correlation_pv[delimiter_crops] = data_info_correlation[delimiter_crops][1];
          }
          var lso = new LoneySpatial();
          lso.getGenericPay("Superficie de cultivos sembrados (HA)", data_info_correlation, 'piechart-crop-edo', chart_generic_pv);
          lso.getGenericPay("Superficie de cultivos sembrados (HA)", p008n06_oi_crops, 'piechart-crop-edo-oi', chart_generic_oi);
          lso.getGenericPay("Superficie de cultivos sembrados (HA)", p008n06_perene_crops, 'piechart-crop-edo-pn', chart_generic_perennes);
          lso.getGenericPay("Superficie de cultivos cosechados (HA)", data_info_correlation, 'piechart-crop-edo-cos', chart_generic_pv_cos);
          lso.getGenericPay("Superficie de cultivos cosechados (HA)", p008n06_oi_crops_cos, 'piechart-crop-edo-oi-cos', chart_generic_oi_cos);
          lso.getGenericPay("Superficie de cultivos cosechados (HA)", p008n06_pn_crops_cos, 'piechart-crop-edo-pn-cos', chart_generic_pn_cos);
          lso.getGenericBubble("Correlacion", data_info_correlation, 'correlation-pv', bubble_generic_correlation_pv);


           $("#waiting").hide();
           $('.background-reading-sub-ajax').hide();
           ejecute_basic(data_info_installations);

           setBasicSurface(data_info_technologies, '#ejecute-basic', "Tecnología aplicada a cultivos o plantaciones (HA)");
           setBasicInteger(data_info_problematic, '#ejecute-problematic', "Problemática que impide desarrollar la actividad agropecuaria (UP)");
           setBasicForeing(data_info_destination, '#ejecute-destination', "Destino de la producción (UP)");
           setBasics(data[2]);
         },
         error : function(message) {
                 console.log(message);
         }
   });
 }
}
function ejecute_basic(data){
    var jsonObj = [];
    if (data[0]!=null&&data[0]!=0) {
      var temp_crops = [];
      temp_crops.push("Beneficiadora de café/cacao");
      temp_crops.push(data[0]);
      jsonObj.push(temp_crops);
    }
    if (data[1]!=null&&data[1]!=0) {
      var temp_crops = [];
      temp_crops.push("Desfibradora");
      temp_crops.push(data[1]);
      jsonObj.push(temp_crops);
    }
    if (data[2]!=null&&data[2]!=0) {
      var temp_crops = [];
      temp_crops.push("Deshidratadora");
      temp_crops.push(data[2]);
      jsonObj.push(temp_crops);
    }
    if (data[3]!=null&&data[3]!=0) {
      var temp_crops = [];
      temp_crops.push("Empacadora frutas/verduras");
      temp_crops.push(data[3]);
      jsonObj.push(temp_crops);
    }
    if (data[4]!=null&&data[4]!=0) {
      var temp_crops = [];
      temp_crops.push("Seleccionadora");
      temp_crops.push(data[4]);
      jsonObj.push(temp_crops);
    }
    if (data[5]!=null&&data[5]!=0) {
      var temp_crops = [];
      temp_crops.push("Otra");
      temp_crops.push(data[5]);
      jsonObj.push(temp_crops);
    }
    if (data[6]!=null&&data[6]!=0) {
      var temp_crops = [];
      temp_crops.push("Vivero");
      temp_crops.push(data[6]);
      jsonObj.push(temp_crops);
    }
    if (data[7]!=null&&data[7]!=0) {
      var temp_crops = [];
      temp_crops.push("Invernadero");
      temp_crops.push(data[7]);
      jsonObj.push(temp_crops);
    }
    var titles = ['Tipo de instalación', 'Unidades Productivas'];
    var obj = jsonObj.sort(function(a, b){return a-b});
    obj.unshift(titles);
    if (obj.length>1) {
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawBasic);
    }

function drawBasic() {

      var data = google.visualization.arrayToDataTable(obj);

      var options = {
        title: 'Instalaciones para el manejo de la producción agrícola',
        chartArea: {width: '100%'},
        // with: auto,
        hAxis: {
          title: 'Número de Unidades Productivas (UP)',
          minValue: 0
        },
        colors: ['#253494', '#3498DB', '#F1C40F', '#C0392B', '#F1C40F'],
        legend: {position: 'none'},
        backgroundColor:{
              fill:'none'
              },
        // vAxis: {
        //   title: 'Instalación'
        // }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ejecute-installations'));

      chart.draw(data, options);
    }
}
function custom_famr(geometry, id_layerids, type, layer){
  var geo = [];
  var coor_string = "";
  var coor_base = "";
  var close_ring = "";
  if (type === 'rectangle') {
    $('.background-reading-sub-ajax').show();
    $("#waiting").show();
    geo = geometry.getLatLngs();//geometry['polyline'];
    var pro = geo[0];
    for (var i = 0; i < pro.length; i++) {
      if (i==0) {
        close_ring = pro[i].lng+" "+pro[i].lat;
      }
      coor_string = coor_string +""+pro[i].lng+" "+pro[i].lat+",";
    }
    coor_base = coor_string+""+close_ring;//.substring(0,coor_string.length-1);
  var query_data = {
     'id_layerids': id_layerids,
     'geometry':coor_base
   }
  $.ajax({
        data: {'query_data': JSON.stringify(query_data),//JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
         url: '{% url "getMultiKeyACFarm" %}',
         type: "POST",
         success : function(data) {
          //  console.log("a wevoooooooooooooooooooooooooooooooooooo");
          // console.log(data);
           var crops = data[0];
           var geoJsonF = data[1];
           if (crops.length==0) {
             $("#waiting").hide();
             $('.background-reading-sub-ajax').hide();
            console.log("No tiene configuración");
            $('#CROPS_ANALISYS_SPRING-div').html("<h1>La capa seleccionada no tiene configuración para la herramienta seleccionada. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
            return;
           }
           var data_info = crops[0];
           titles_fields = crops[1];
           var nivel = crops[2];
           var header = crops[3];
           var ed = crops[4];
           var mu = crops[5];
           var ag = crops[6];
           var a__c = crops[7];
           var arr_ac = crops[8];
           var data_info_beef = crops[9];
           var data_info_pig = crops[10];
           var data_info_bird = crops[11];
           var data_info_distribution = crops[12];

           if (header) {
             $('#control-area-tbl-main').show();
             $('#control-area-tbl-second').show();
             setHeader(a__c, ag, ed, mu);
           }
           remove_rectangle();
           remove_selection();
          for (var i = 0; i < geoJsonF.length; i++) {
            L.geoJson(geoJsonF[i], {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(map);
      }
           $('#control-area-tbl-second').hide();

           cleanHalfWayModal();
            $('#main-distribution').show();
            $('#quer-farm').show();

          $('#ejecute-distribution').html("");
          $('#ejecute-distribution').html("<div style='padding: 25px;'>Producción pecuaria</div>");

          var table_distribution = "";
          table_distribution = "<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>Reses y vacas<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data_info_beef[0]+"</span></div><td>"
          +"<td class='tb-ag' style='width:50%'>Cerdos<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data_info_pig[0]+"</span></div></td></tr></table>"
          +"<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>Aves<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data_info_bird[0]+"</span></div><td>"
          +"<td class='tb-ag' style='width:50%'>Borregos<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data_info_distribution[0]+"</span></div></td></tr></table>"
          +"<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>Chivos<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data_info_distribution[1]+"</span></div><td>"
          +"<td class='tb-ag' style='width:50%'>Colmenas<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data_info_distribution[2]+"</span></div></td></tr></table>";


           $('#ejecute-distribution').append(table_distribution);

           $('#ejecute-distribution-production').html("");
           $('#ejecute-distribution-production').append("<div style='padding: 25px;'>Producción</div>");
           var table_distribution_prod = "";
           table_distribution_prod = "<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>Litros diarios (Leche vaca)<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data_info_beef[1]+"</span></div><td>"
           +"<td class='tb-ag' style='width:50%'>Huevo por día<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data_info_bird[1]+"</span></div></td></tr></table>"
           +"<table class='tb-ag'><tr><td class='tb-ag-last'>Litros diarios (Leche chivo)</td></tr><tr><td class='tb-ag'><span class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac-only'>"+data_info_distribution[3]+"</span></span></td></tr></table>";
            $('#ejecute-distribution-production').append(table_distribution_prod);

           setBasics(data[2]);

           $("#waiting").hide();
           $('.background-reading-sub-ajax').hide();

         },
         error : function(message) {
                 console.log(message);
         }
   });
 }
}
function setBasicPeople(data, id, title){
  console.log(data);
  $(id).html("");
  if (title!="") {
    $(id).html("<div style='padding: 25px;'>"+title+"</div>");
  }
  var table = "";
  table = "<div class='people'>Hombres (< 18 años)</br><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/boy.png' width='80px;' alt='Hombres (< 18 años)' title='Hombres (< 18 años)'/></br>"+data[0]+"</div>"
  +"<div class='people'></br>Mujeres (< 18 años)</br><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/girl.png' width='80px;' title='Fertilizantes químicos (HA)' alt='Mujeres (< 18 años)' title='Mujeres (< 18 años)'/></br>"+data[1]+"</div>"
  +"<div class='people'></br>Hombres (> 18 años)</br><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/man.png' width='80px;' alt='Hombres (> 18 años)' title='Hombres (> 18 años)'/></br>"+data[2]+"</div>"
+"<div class='people'></br>Mujeres (> 18 años)</br><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/woman.png' width='80px;' title='Fertilizantes químicos (HA)' alt='Mujeres (> 18 años)' title='Mujeres (> 18 años)'/></br>"+data[3]+"</div>"

   $(id).append(table);
}
function setBasicSurface(data, id, title){
  $(id).html("");
  if (title!="") {
    $(id).html("<div style='padding: 25px;'>"+title+"</div>");
  }
  var size = Object.size(data);
  var i = 0;
  var table = "";
 for (var delimiter_crops in data) {
   i = i +1;
   if (data[delimiter_crops]!=null) {
     if(i % 2 == 0) {
       table = table+"<td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops].toFixed(1)+"</span></div></td></tr></table>";
     }
     else {
       if (size==i) {
         table = table+"<table class='tb-ag'><tr><td class='tb-ag-last'>"+delimiter_crops+"</td></tr><tr><td class='tb-ag'><span class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac-only'>"+data[delimiter_crops].toFixed(1)+"</span></span></td></tr></table>";
       }else {
         table = table+"<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops].toFixed(1)+"</span></div><td>";
       }
     }
   }
  }
   $(id).append(table);
}
function setBasicInteger(data, id, title){
  $(id).html("");
  $(id).html("<div style='padding: 25px;'>"+title+"</div>");
  var size = Object.size(data);
  var i = 0;
  var table = "";
 for (var delimiter_crops in data) {
   i = i +1;
   if(i % 2 == 0) {
     table = table+"<td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops]+"</span></div></td></tr></table>";
    }
    else {
       if (size==i) {
         table = table+"<table class='tb-ag'><tr><td class='tb-ag-last'>"+delimiter_crops+"</td></tr><tr><td class='tb-ag'><span class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac-only'>"+data[delimiter_crops]+"</span></span></td></tr></table>";
       }else {
         table = table+"<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops]+"</span></div><td>";
       }
    }
  }
   $(id).append(table);
}
function setBasicForeing(data, id, title){
  $(id).html("");
  $(id).html("<div style='padding: 25px;'>"+title+"</div>");
  var size = Object.size(data);
  var i = 0;
  var table = "";
  for (var delimiter_crops in data) {
    i = i +1;
    if(i % 2 == 0) {
      if (delimiter_crops=="Extranjero" || delimiter_crops=="Total Nacional") {
        table = table+"<td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/blue_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops]+"</span></div></td></tr></table>";
      }else {
        table = table+"<td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' title='Fertilizantes químicos (HA)' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops]+"</span></div></td></tr></table>";
      }
     }
     else {
        if (size==i) {
          if (delimiter_crops=="Extranjero" || delimiter_crops=="Total Nacional") {
            table = table+"<table class='tb-ag'><tr><td class='tb-ag-last'>"+delimiter_crops+"</td></tr><tr><td class='tb-ag'><span class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/blue_bullet.png' width='100px;' alt='pv'/><span class='circles-ac-only'>"+data[delimiter_crops]+"</span></span></td></tr></table>";
          }else {
            table = table+"<table class='tb-ag'><tr><td class='tb-ag-last'>"+delimiter_crops+"</td></tr><tr><td class='tb-ag'><span class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac-only'>"+data[delimiter_crops]+"</span></span></td></tr></table>";
          }
        }else {
          if (delimiter_crops=="Extranjero" || delimiter_crops=="Total Nacional") {
            table = table+"<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/blue_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops]+"</span></div><td>";
          }else {
            table = table+"<table class='tb-ag'><tr><td class='tb-ag' style='width:50%'>"+delimiter_crops+"<div class='cricle-base'><img src='{{STATIC_URL}}idegeo/soa_toolkit/img/ac/purple_bullet.png' width='100px;' alt='pv'/><span class='circles-ac'>"+data[delimiter_crops]+"</span></div><td>";
          }
        }
     }
   }
   $(id).append(table);
}
function custom_forest(geometry, id_layerids, type, layer){
  var geo = [];
  var coor_string = "";
  var coor_base = "";
  var close_ring = "";
  if (type === 'rectangle') {
    $('.background-reading-sub-ajax').show();
    $("#waiting").show();
    geo = geometry.getLatLngs();//geometry['polyline'];
    var pro = geo[0];
    for (var i = 0; i < pro.length; i++) {
      if (i==0) {
        close_ring = pro[i].lng+" "+pro[i].lat;
      }
      coor_string = coor_string +""+pro[i].lng+" "+pro[i].lat+",";
    }
    coor_base = coor_string+""+close_ring;//.substring(0,coor_string.length-1);
  var query_data = {
     'id_layerids': id_layerids,
     'geometry':coor_base
   }
  $.ajax({
        data: {'query_data': JSON.stringify(query_data),//JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
         url: '{% url "getMultiKeyACForest" %}',
         type: "POST",
         success : function(data) {
           var crops = data[0];
           var geoJsonF = data[1];
           if (crops.length==0) {
             $("#waiting").hide();
             $('.background-reading-sub-ajax').hide();
            console.log("No tiene configuración");
            // $('#CROPS_ANALISYS_SPRING-div').html("<h1>La capa seleccionada no tiene configuración para la herramienta seleccionada. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
            return;
           }
           var data_info = crops[0];
           titles_fields = crops[1];
           var nivel = crops[2];
           var header = crops[3];
           var ed = crops[4];
           var mu = crops[5];
           var ag = crops[6];
           var a__c = crops[7];
           var data_info_wood = crops[8];
           var data_info_wood_not = crops[9];
           var data_info_forest_technology = crops[10];
           var data_info_forest_installation = crops[11];
           var data_info_forest_destination = crops[12];
           var data_info_forest_not_wood = crops[13];
           console.log(data_info_forest_destination);

           if (header) {
             $('#control-area-tbl-main').show();
             $('#control-area-tbl-second').show();
             setHeader(a__c, ag, ed, mu);
           }
           remove_rectangle();
           remove_selection();
          for (var i = 0; i < geoJsonF.length; i++) {
            L.geoJson(geoJsonF[i], {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(map);
      }
           $('#control-area-tbl-second').hide();

           cleanHalfWayModal();
           $('#quer-wood').show();
           $('#main-forest').show();
           $('#main-forest-graf').show();

          var lso = new LoneySpatial();
          lso.getGenericBar("Producciòn maderable", data_info_wood, 'barchart-wood');
          lso.getGenericBar("Producciòn no maderable", data_info_wood_not, 'barchar-wood-non');
          setBasicSurface(data_info_forest_technology, '#ejecute-forest-technology', "Tecnología aplicada a la producción forestal");
          setBasicInteger(data_info_forest_installation, '#ejecute-forest-installation', "Instalaciones para el manejo de la producción forestal (UP)");
          setBasicForeing(data_info_forest_destination, '#ejecute-forest-destination', "Destino de la producción maderable (UP)");
          setBasicForeing(data_info_forest_not_wood, '#ejecute-forest-not-wood', "Destino de la producción no maderable (UP)");
          setBasics(data[2]);

          $("#waiting").hide();
          $('.background-reading-sub-ajax').hide();

         },
         error : function(message) {
                 console.log(message);
         }
   });
 }
}
function drawChartsesCensus(data_info, nivel){
    lso = new LoneySpatial();
    drawSelects();//rfull the selects with AC
    // console.log("some");
    // console.log(nivel);
    var niv = "";
    var coverage = $('#AC_Coverage').val();
    // console.log(temp_radio);
        // console.log("wiii es nacioonal");
        if (nivel=="mun") {
          niv = "municipal";
        }else if (nivel=="statal"){
          niv = "estatal";
        }
        else if (nivel=="agb") {
            niv = "agebs";
        }else {
          niv = "áreas de control";
        }
    // console.log(coverage);
    // console.log(niv);
    $('.header-info-title').html("Información general del poligono seleccionado");
    if (niv=="estatal") {
      // console.log("que pedo");
      $('#ac-ageb-mun-resulst').html("<h2>Analisis</h2>");
    }else {
      drawSelectsSpecific();
      $('#ac-ageb-mun-resulst').html("Resultados principales a nivel <b>"+niv+"</b> de agricultura primavera verano");
      lso.acAgebMunChart(niv);
      lso.updatePietXHarvestedCropSpecificAC();
      lso.updateChartXCultivoSpecific();
    }
    lso.updateChart_AC(false);
    lso.updatePietXHarvestedCrop_AC();//the crop default "Sembrado"
    lso.updateChartXCultivo();
    // glyphicon_chevron_up = true;
    // $("#collapse-icon-container").show();
    // openInfo();
  }
  function getIdState(data){
    var clv_edo = "";
    if(typeof data.CLV_EDO != 'undefined'){
      clv_edo = data.CLV_EDO;

    }else if(typeof data.CVE_ENT != 'undefined'){
      clv_edo = data.CVE_ENT;
    }else if (typeof data.clvedo != 'undefined') {
      clv_edo = data.clvedo;
    }
    return clv_edo;
  }
  function getIdMun(data){
    var id_mun = "";
    if(typeof data.clvmun != 'undefined'){
      id_mun = data.clvmun;

    }else if(typeof data.CVE_MUN != 'undefined'){
      id_mun = data.CVE_MUN;
    }
    return id_mun;
  }
  function getIdAgeb(data){
    var id_ageb = "";
    if(typeof data.id_ageb != 'undefined'){
      id_ageb = data.id_ageb;

    }else if (typeof data.CVE_AGEB != 'undefined') {
      id_ageb = data.CVE_AGEB;
    }else if (typeof data.CVE_AC != 'undefined') {
      id_ageb = data.CVE_AC;
    }
    return id_ageb;
  }
  function getIdAc(data){
    var id_ac = "";
    if(typeof data.AC_Tot != 'undefined'){
      id_ac = data.AC_Tot;

    }else if(typeof data.areactrl != 'undefined'){
      id_ac = data.areactrl;
    }else if (typeof data.CVE_AC != 'undefined') {
      id_ac = data.CVE_AC;
    }
    return id_ac;
  }
  function getCensus(clv_edo, id_mun,id_ageb, id_ac, id_layerids, nivel){
    var query_data = {
      'clv_edo': clv_edo,
      'id_mun': id_mun,
      'id_ageb': id_ageb,
      'id_ac': id_ac,
      'nivel': nivel[0],
      'id_layerids':id_layerids
    }
    $.ajax({
        url: '{% url "getAnalysisCensus" %}',
        type: 'POST',
        data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
        dataType: 'json',
        success : function(data) {
          // console.log(data);
          var data_info = data[0];
          titles_fields = data[1];
          var bear_query = data[2];
          var upc = data[3];
          var data_delimiter = data[4];
          var nivel = data[5];
          $('#control-area-tbl-main').show();
          $('#control-area-tbl-second').show();
          setHeader(id_ac, id_ageb, clv_edo, id_mun);
          if(data_info.length==0){
            alert("No hay cultivos para esta selección");
            $("#waiting").hide();
            $('.background-reading-sub-ajax').hide();
            return;
          }else if(bear_query==null){
            alert("No hay cultivos para esta selección");
            $("#waiting").hide();
            $('.background-reading-sub-ajax').hide();
            return;
          }
          //Data for specific analisisp008n06 = new Object();
          p008n06_delimiter = new Object();
          p008n10_delimiter = new Object();

         for (var delimiter_crops in data_delimiter) {
             p008n06_delimiter[delimiter_crops] = data_delimiter[delimiter_crops][1];
             p008n10_delimiter[delimiter_crops] = data_delimiter[delimiter_crops][2];
         }
         crop_max_sembrado_delimiter = [];
         crop_max_cosechado_delimiter = [];
         for (var max_d in p008n06_delimiter) {
           crop_max_sembrado_delimiter.push(p008n06_delimiter[max_d]);
         }
         for (var maxCo_d in p008n10_delimiter) {
           crop_max_cosechado_delimiter.push(p008n10_delimiter[maxCo_d]);
         }
          //Data for statal analiss
          p008n06 = new Object();
          p008n10 = new Object();

         for (var ca_crops in data_info) {
             p008n06[ca_crops] = data_info[ca_crops][1];
             p008n10[ca_crops] = data_info[ca_crops][2];
         }
         crop_max_sembrado = [];
         crop_max_cosechado = [];
         for (var max in p008n06) {
           crop_max_sembrado.push(p008n06[max]);
         }
         for (var maxCo in p008n10) {
           crop_max_cosechado.push(p008n10[maxCo]);
         }
        //  google.charts.load('current', {'packages': ['corechart'], 'callback': drawChartses});
          $('.table-results-pv').hide();
          drawChartsesCensus(data_info, nivel);
        },
        error : function(message) {
                console.log(message);
             }
        });
  }

$(document).ready(function(){
$('#CROPS_ANALISYS_SPRING-div').on("click","i.close-tool", function(e){
  $('#CROPS_ANALISYS_SPRING-div').html("");
  show_default();
});
});
class ContantsCensus{
  show_leyend_crop(){
    is_tool_census=true;
    SquereDraw.enable();
    // $('#CROPS_ANALISYS_SPRING-div').html("<h5><span class='draw-square' style='cursor: pointer;'>Dibuja un poligono para hacer el análisis <i class='fa fa-pencil-square-o'  style='color: #630f4f;' title='Dibuja un área para hacer la consulta' aria-hidden='true'></i></span></h5>");
    // $('.main_fields').show();

  }
  //Event for searching constants
  getConstants(){
        return is_tool_census;
      }
  setConstants(value){
    is_tool_census = value;
  }
 close_tool_ca(){
  $('#CROPS_ANALISYS_SPRING-div').html("");
  is_tool_census=false;
  remove_selection();
}
  getResultsCensus(data, id_layerids){
    // console.log("entro al evento");
    $("#halfway-modal").addClass('active');
    $("#halfway-modal").toggle("slide", {direction: "right"});
  }
getMainField(){
  $.ajax({
         data: {'layer_id': id_layerids },
         url: '{% url "getNivelSpatialObject" %}',
         type: 'GET',
         success : function(niv_ac) {
           if (niv_ac.length==0) {
            $('#CROPS_ANALISYS_SPRING-div').html("<h1>La capa seleccionada no tiene configuración para la herramienta seleccionada. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
            return;
           }
           if (niv_ac=="statal") {
             var clv_edo = getIdState(data);
             var id_mun = "";
             var id_ageb = "";
             var id_ac = "";
           }else if (niv_ac=="mun") {
             var id_mun = getIdMun(data);
             var clv_edo = getIdState(data);
             var id_ageb = "";
             var id_ac = "";
           }else if (niv_ac=="ac") {
             var id_mun = getIdMun(data);
             var clv_edo = getIdState(data);
             var id_ageb = getIdAgeb(data);
             var id_ac = getIdAc(data);
           }else {
             var id_mun = getIdMun(data);
             var clv_edo = getIdState(data);
             var id_ageb = getIdAgeb(data);
             var id_ac = "";
           }
           getCensus(clv_edo, id_mun,id_ageb, id_ac, id_layerids, niv_ac);
         },
         error : function(message) {
                 console.log(message);
         }
   });
}
geojsonMarkerOptions(feature) {
   return  {
     radius: 8,
     fillColor: "#01DFA5",
     color: "#01DFA5",
     weight: 1,
     opacity: 1,
     fillOpacity: 0.8
   };
 }
 showPanelCensus(geometry, id_layerids, type, layer){
   geometry_global = geometry;
   id_layerids_global = id_layerids;
   type_global = type;
 }
 getSelectionCensus(geometry, id_layerids, type, category){
   var bbox = [];
   var bbx = geometry._pxBounds;
   bbox.push(bbx.min.x);
   bbox.push(bbx.min.y);
   bbox.push(bbx.max.x);
   bbox.push(bbx.max.y);
   var poly = turf.bboxPolygon(bbox);
   var area = turf.area(poly);
   var mviewer = "{{mviewer.id}}";
   // console.log(mviewer);
   $.ajax({
  data: {'layer_id': id_layerids, 'mviewer':mviewer },
  url: '{% url "getNivelSpatialObject" %}',
  type: 'GET',
  success : function(niv_ac) {
    if (niv_ac.length==0) {
     console.log("No tiene configuración");
     alert("La capa seleccionada no tiene configuración para la herramienta seleccionada");
     $('#CROPS_ANALISYS_SPRING-div').html("<h1>La capa seleccionada no tiene configuración para la herramienta seleccionada. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
     return;
    }
    var zoom = map.getZoom();
    if (niv_ac=="statal") {
      if (category=="PV") {
        multi_selec(geometry, id_layerids, type, geometry);
      }else if (category=="FARM") {
        custom_famr(geometry, id_layerids, type, geometry);
      }else if (category=="CROPS") {
        custom_crops(geometry, id_layerids, type, geometry);
      }
    }else if (niv_ac=="mun") {
      if (zoom>=7) {
       //  if (area<=393221381222058) {
       if (category=="PV") {
         multi_selec(geometry, id_layerids, type, geometry);
       }else if (category=="FARM") {
         custom_famr(geometry, id_layerids, type, geometry);
       }else if (category=="CROPS") {
         custom_crops(geometry, id_layerids, type, geometry);
       }
       //  }else {
       //    remove_rectangle();
       //    $('#CROPS_ANALISYS_SPRING-div').html("<h1>El poligono es muy grande. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
       //    return;
       //  }
      }else {
        remove_rectangle();
        $('#CROPS_ANALISYS_SPRING-div').html("<h1>El zoom es muy alejado. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
        return;
      }
    }else if (niv_ac=="ageb") {
      if (zoom>=7) {
     //  if (area<=165299059642135) {
     if (category=="PV") {
       multi_selec(geometry, id_layerids, type, geometry);
     }else if (category=="FARM") {
       custom_famr(geometry, id_layerids, type, geometry);
     }else if (category=="CROPS") {
       custom_crops(geometry, id_layerids, type, geometry);
     }
     //  }else {
     //    remove_rectangle();
     //    $('#CROPS_ANALISYS_SPRING-div').html("<h1>El poligono es muy grande. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
     //    return;
     //  }
      }else {
        remove_rectangle();
        $('#CROPS_ANALISYS_SPRING-div').html("<h1>El zoom es muy alejado. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
        return;
      }
    }else if (niv_ac=="ac") {
      if (zoom>=10) {
     //  if (area<=76571563504019) {
     if (category=="PV") {
       multi_selec(geometry, id_layerids, type, geometry);
     }else if (category=="FARM") {
       custom_famr(geometry, id_layerids, type, geometry);
     }else if (category=="CROPS") {
       custom_crops(geometry, id_layerids, type, geometry);
     }else if (category=="FOREST") {
       custom_forest(geometry, id_layerids, type, geometry);
     }
     //  }else {
     //    remove_rectangle();
     //    $('#CROPS_ANALISYS_SPRING-div').html("<h1>El poligono es muy grande. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
     //    return;
     //  }
    }else {
      alert("El radio de selecciòn es muy amplio, agrega màs zoom para hacer la consulta");
      remove_rectangle();
      $('#CROPS_ANALISYS_SPRING-div').html("<h1>El zoom es muy alejado. <i class='fa fa-times close-tool' title='Cerrar' aria-hidden='true'></i></h1>");
      return;
    }
    }
  },
  error : function(message) {
          console.log(message);
       }
  });

 }

  }

</script>
