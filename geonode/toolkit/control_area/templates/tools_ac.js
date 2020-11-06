<script type="text/javascript">
/*
This class js is for analysis tools for  crops controls areas with JQuery
*/
var crop_max_sembrado = [];
var crop_max_cosechado = [];
var crop_max_sembrado_delimiter = [];
var crop_max_cosechado_delimiter = [];
var titles_fields = [];

var comboA = "";
var comboB = "";
var combo_specific_A = "";
var combo_specific_B = "";

var ups_cult = new Object();
var p008n06 = new Object();
var p008n10 = new Object();
var p008n14 = new Object();
var jsonObjPie = [];
var jsonObj = [];
var jsonObj2 = [];
var p008n06_delimiter = new Object();
var p008n10_delimiter = new Object();
var p008n06_pv_crops = new Object();
var p008n06_oi_crops = new Object();
var p008n06_perene_crops = new Object();
var p008n06_oi_crops_cos = new Object();
var p008n06_pn_crops_cos = new Object();

$(document).ready(function(){
  $("span.close_AC").click(function(){
    $('#control-area-tbl-main').hide();
    $('#control-area-tbl-second').hide();
  });
});
function drawSelects(){
 $.each(p008n06, function(key, value) {
     $('#generalCropSelectID')
          .append($('<option>', { value : key })
          .text(key));
    $('#xCropSelectID')
         .append($('<option>', { value : key })
         .text(key));
  });
}
function drawSelectsSpecific(){
  $.each(p008n06_delimiter, function(key, value) {
      $('#specific_cropsA')
           .append($('<option>', { value : key })
           .text(key));
     $('#specific_cropsB')
          .append($('<option>', { value : key })
          .text(key));
   });
}
function dataGenerateChartByUser(dataSow, dataHarvested){
  var generalTitles = ['Cultivos', 'Superficie sembrada','Producción en toneladas'];//titles_fields[3][1], titles_fields[4][1]];
  var generalCropsMax = [];
  var generalCropsMaxSow = [];
  var generalCropsMaxHarvested = [];
  var maxS = crop_max_sembrado.sort(function(a, b){return b-a});
  var maxC = crop_max_cosechado.sort(function(a,b){return b-a});
  var maximoSem = maxS[0];
  var penultimoSem = maxS[1];
  var maximoCos = maxC[0];
  var penultimoCos = maxC[1];

  for (d in dataSow) {
    var sow_max_value = dataSow[d];
    var sow_max_name = d;

    if (comboA==sow_max_name) {
      generalCropsMaxSow.push(sow_max_name);
      generalCropsMaxSow.push(sow_max_value);
    }
    if (comboB==sow_max_name) {
      generalCropsMaxHarvested.push(sow_max_name);
      generalCropsMaxHarvested.push(sow_max_value);
    }
  }
  for (h in dataHarvested) {
    var sow_max_value = dataHarvested[h];
    var sow_max_name = h;
    if (comboA==sow_max_name) {
      generalCropsMaxSow.push(sow_max_value);
    }
    if (comboB==sow_max_name) {
      generalCropsMaxHarvested.push(sow_max_value);
    }
  }
  generalCropsMax.push(generalTitles);
  generalCropsMax.push(generalCropsMaxSow);
  generalCropsMax.push(generalCropsMaxHarvested);
  return generalCropsMax;

}
function dataGenerateChartByUserSpecific(dataSow, dataHarvested){
  var generalTitles = ['Cultivos', 'Superficie sembrada','Producción en toneladas'];//titles_fields[3][1], titles_fields[4][1]];
  var generalCropsMax = [];
  var generalCropsMaxSow = [];
  var generalCropsMaxHarvested = [];
  var maxS = crop_max_sembrado_delimiter.sort(function(a, b){return b-a});
  var maxC = crop_max_cosechado_delimiter.sort(function(a,b){return b-a});
  var maximoSem = maxS[0];
  var penultimoSem = maxS[1];
  var maximoCos = maxC[0];
  var penultimoCos = maxC[1];

  for (d in dataSow) {
    var sow_max_value = dataSow[d];
    var sow_max_name = d;

    if (combo_specific_A==sow_max_name) {
      generalCropsMaxSow.push(sow_max_name);
      generalCropsMaxSow.push(sow_max_value);
    }
    if (combo_specific_B==sow_max_name) {
      generalCropsMaxHarvested.push(sow_max_name);
      generalCropsMaxHarvested.push(sow_max_value);
    }
  }
  for (h in dataHarvested) {
    var sow_max_value = dataHarvested[h];
    var sow_max_name = h;
    if (combo_specific_A==sow_max_name) {
      generalCropsMaxSow.push(sow_max_value);
    }
    if (combo_specific_B==sow_max_name) {
      generalCropsMaxHarvested.push(sow_max_value);
    }
  }
  generalCropsMax.push(generalTitles);
  generalCropsMax.push(generalCropsMaxSow);
  generalCropsMax.push(generalCropsMaxHarvested);

  return generalCropsMax;

}
 function dataGenerateChart(dataSow, dataHarvested){
  var generalTitles = ['Cultivos', 'superficie sembrada','Producción en toneladas'];//titles_fields[3][1], titles_fields[4][1]];
  var generalCropsMax = [];
  var generalCropsMaxSow = [];
  var generalCropsMaxHarvested = [];
  var maxS = crop_max_sembrado.sort(function(a, b){return b-a});
  var maxC = crop_max_cosechado.sort(function(a,b){return b-a});
  var maximoSem = maxS[0];
  var penultimoSem = maxS[1];
  var maximoCos = maxC[0];
  var penultimoCos = maxC[1];

  for (d in dataSow) {
    var sow_max_value = dataSow[d];
    var sow_max_name = d;

    if (maximoSem==sow_max_value) {
      generalCropsMaxSow.push(sow_max_name);
      generalCropsMaxSow.push(sow_max_value);
    }
    if (penultimoSem==sow_max_value) {
      generalCropsMaxHarvested.push(sow_max_name);
      generalCropsMaxHarvested.push(sow_max_value);
    }
  }
  for (h in dataHarvested) {
    var sow_max_value = dataHarvested[h];
    var sow_max_name = h;
    if (maximoCos==sow_max_value) {
      generalCropsMaxSow.push(sow_max_value);
    }
    if (penultimoCos==sow_max_value) {
      generalCropsMaxHarvested.push(sow_max_value);
    }
  }
  generalCropsMax.push(generalTitles);
  generalCropsMax.push(generalCropsMaxSow);
  generalCropsMax.push(generalCropsMaxHarvested);

  return generalCropsMax;

}
function dataGenerateChartDelimiter(dataSow, dataHarvested){
 var generalTitles = ['Cultivos', 'superficie sembrada','Producción en toneladas'];//titles_fields[3][1], titles_fields[4][1]];
 var generalCropsMax = [];
 var generalCropsMaxSow = [];
 var generalCropsMaxHarvested = [];
 var maxS = crop_max_sembrado_delimiter.sort(function(a, b){return b-a});
 var maxC = crop_max_cosechado_delimiter.sort(function(a,b){return b-a});
 var maximoSem = maxS[0];
 var penultimoSem = maxS[1];
 var maximoCos = maxC[0];
 var penultimoCos = maxC[1];

 for (d in dataSow) {
   var sow_max_value = dataSow[d];
   var sow_max_name = d;

   if (maximoSem==sow_max_value) {
     generalCropsMaxSow.push(sow_max_name);
     generalCropsMaxSow.push(sow_max_value);
   }
   if (penultimoSem==sow_max_value) {
     generalCropsMaxHarvested.push(sow_max_name);
     generalCropsMaxHarvested.push(sow_max_value);
   }
 }
 for (h in dataHarvested) {
   var sow_max_value = dataHarvested[h];
   var sow_max_name = h;
   if (maximoCos==sow_max_value) {
     generalCropsMaxSow.push(sow_max_value);
   }
   if (penultimoCos==sow_max_value) {
     generalCropsMaxHarvested.push(sow_max_value);
   }
 }
 generalCropsMax.push(generalTitles);
 generalCropsMax.push(generalCropsMaxSow);
 generalCropsMax.push(generalCropsMaxHarvested);

 return generalCropsMax;

}
function dataGenerateBarWood(data, is_wood){
  // sown_harvested = ["Cultivos","Sembradp","Cosechado"];//titles_fields[3][1],titles_fields[4][1]];
  var jsonObj = [];
  // for (var delimiter_crops in data) {
    if (is_wood) {
      if(typeof data.A != 'undefined'){
        if (data.A!=null) {
          var temp_crops = [];
          var number = data.A;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("En rollo");
          temp_crops.push(redon_number);
          temp_crops.push('color: #2c7fb8');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.B != 'undefined'){
        if (data.B!=null) {
          var temp_crops = [];
          var number = data.B;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Aserrío");
          temp_crops.push(redon_number);
          temp_crops.push('color: #41b6c4');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.C != 'undefined'){
        if (data.C!=null) {
          var temp_crops = [];
          var number = data.C;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Postería");
          temp_crops.push(redon_number);
          temp_crops.push('color: #a1dab4');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.D != 'undefined'){
        if (data.D!=null) {
          var temp_crops = [];
          var number = data.D;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Leña");
          temp_crops.push(redon_number);
          temp_crops.push('color: #ffffcc');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.E != 'undefined'){
        if (data.E!=null) {
          var temp_crops = [];
          var number = data.E;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Celulosa");
          temp_crops.push(redon_number);
          temp_crops.push('color: #8E44AD');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.F != 'undefined'){
        if (data.F!=null) {
          var temp_crops = [];
          var number = data.F;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Carbón");
          temp_crops.push(redon_number);
          temp_crops.push('color: #76A7FA');
          jsonObj.push(temp_crops);
        }
      }
    }else {
      if(typeof data.A != 'undefined'){
        if (data.A!=null) {
          var temp_crops = [];
          var number = data.A;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Leña");
          temp_crops.push(number);
          temp_crops.push('color: #41b6c4');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.B != 'undefined'){
        if (data.B!=null) {
          var temp_crops = [];
          var number = data.B;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Hongos");
          temp_crops.push(number);
          temp_crops.push('color: #41b6c4');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.C != 'undefined'){
        if (data.C!=null) {
          var temp_crops = [];
          var number = data.C;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Candelilla");
          temp_crops.push(number);
          temp_crops.push('color: #a1dab4');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.D != 'undefined'){
        if (data.D!=null) {
          var temp_crops = [];
          var number = data.D;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Lechuguilla");
          temp_crops.push(number);
          temp_crops.push('color: #ffffcc');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.E != 'undefined'){
        if (data.E!=null) {
          var temp_crops = [];
          var number = data.E;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Barbasco");
          temp_crops.push(number);
          temp_crops.push('color: #8E44AD');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.F != 'undefined'){
        if (data.F!=null) {
          var temp_crops = [];
          var number = data.F;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Resina");
          temp_crops.push(number);
          temp_crops.push('color: #76A7FA');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.G != 'undefined'){
        if (data.G!=null) {
          var temp_crops = [];
          var number = data.G;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Tierra de monte");
          temp_crops.push(number);
          temp_crops.push('color: #76A7FA');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.H != 'undefined'){
        if (data.H!=null) {
          var temp_crops = [];
          var number = data.H;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Hojas de palma ");
          temp_crops.push(number);
          temp_crops.push('color: #76A7FA');
          jsonObj.push(temp_crops);
        }
      }
      if(typeof data.I != 'undefined'){
        if (data.I!=null) {
          var temp_crops = [];
          var number = data.I;
          var num = number.toFixed(1);
          var redon_number = parseFloat(num);
          temp_crops.push("Semillas");
          temp_crops.push(number);
          temp_crops.push('color: #76A7FA');
          jsonObj.push(temp_crops);
        }
      }
    }
    console.log(jsonObj);
    console.log("jsonObj");
var obj = jsonObj.sort(function(a, b) {
  return a - b;
});
console.log(obj);

  // }
  var titles = ["Producciòn no maderable", "Índice de producción", { role: 'style' }];
  obj.unshift(titles);
  return obj;
}
function dataGeneratePiePV(data, is_harvest){
  // sown_harvested = ["Cultivos","Sembradp","Cosechado"];//titles_fields[3][1],titles_fields[4][1]];
  var jsonObj = [];
  for (var delimiter_crops in data) {
    var temp_crops = [];
    temp_crops.push(delimiter_crops);
    if (is_harvest) {
      if(typeof data[delimiter_crops][3] != 'undefined'){
        var number = data[delimiter_crops][3];
        var num = number.toFixed(1);
        var redon_number = parseFloat(num);
        temp_crops.push(redon_number);
      }else {
        temp_crops.push(data[delimiter_crops][3]);
      }
    }else {
      if(typeof data[delimiter_crops][1] != 'undefined'){
        var number = data[delimiter_crops][1];
        var num = number.toFixed(1);
        var redon_number = parseFloat(num);
        temp_crops.push(redon_number);
      }else {
        temp_crops.push(data[delimiter_crops][1]);
      }
    }
    jsonObj.push(temp_crops);
  }
  var titles = ["Cultivo", "de mayor producción"];
  var obj = jsonObj.sort();
  obj.unshift(titles);
  return obj;
}
function dataGenerateBubblePV(data_info_correlation){
  var jsonObj = [];
  for (var delimiter_crops in data_info_correlation) {
    var temp_crops = [];
    temp_crops.push(data_info_correlation[delimiter_crops][0]);
    if(typeof data_info_correlation[delimiter_crops][1] != 'undefined'){
      var number = data_info_correlation[delimiter_crops][1];
      var num = number.toFixed(1);
      var redon_number = parseFloat(num);
      temp_crops.push(redon_number);
    }else {
      temp_crops.push(data_info_correlation[delimiter_crops][1]);
    }
    if(typeof data_info_correlation[delimiter_crops][3] != 'undefined'){
      var number = data_info_correlation[delimiter_crops][3];
      var num = number.toFixed(1);
      var redon_number = parseFloat(num);
      temp_crops.push(redon_number);
    }else {
      temp_crops.push(data_info_correlation[delimiter_crops][3]);
    }
    if(typeof data_info_correlation[delimiter_crops][5] != 'undefined'){
      var number = data_info_correlation[delimiter_crops][5];
      var num = number.toFixed(1);
      var redon_number = parseFloat(num);
      temp_crops.push(redon_number);
    }else {
      temp_crops.push(data_info_correlation[delimiter_crops][5]);
    }
    if(typeof data_info_correlation[delimiter_crops][4] != 'undefined'){
      var number = data_info_correlation[delimiter_crops][4];
      var num = number.toFixed(1);
      var redon_number = parseFloat(num);
      temp_crops.push(redon_number);
    }else {
      temp_crops.push(data_info_correlation[delimiter_crops][4]);
    }
    // temp_crops.push(data_info_correlation[delimiter_crops][1]);
    // temp_crops.push(data_info_correlation[delimiter_crops][3]);
    // temp_crops.push(data_info_correlation[delimiter_crops][5]);
    // temp_crops.push(data_info_correlation[delimiter_crops][4]);
    jsonObj.push(temp_crops);
  }

  var titles = ['ID', 'Sembrado', 'Cosechado', 'Cosechado (TON)', 'Unidades de producción'];
  var obj = jsonObj.sort();
  obj.unshift(titles);
  return obj;
}
function dataGeneratePie(data){
  // sown_harvested = ["Cultivos","Sembradp","Cosechado"];//titles_fields[3][1],titles_fields[4][1]];
  var jsonObj = [];
  for (gn in data) {
    var temp_crops = [];
    temp_crops.push(gn);
    if(typeof data[gn] != 'undefined'){
      var number = data[gn];
      var num = number.toFixed(1);
      var redon_number = parseFloat(num);
      temp_crops.push(redon_number);
    }else {
      temp_crops.push(data[gn]);
    }
    jsonObj.push(temp_crops);
  }
  var titles = ["Cultivo", "de mayor producción"];
  var obj = jsonObj.sort();
  obj.unshift(titles);
  return obj;
}
function setFeatureJSon(geoJsonF){
  for (var i = 0; i < geoJsonF.length; i++) {
    L.geoJson(geoJsonF[i], {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
}
}
function setHeader(id_ac, id_ageb, id_edo, id_mun){
  var entidad_ac = "";
  var municipio_ac = "";
  var ageb_ac = "";
  var area_control_ac = "";
  // $('.query-result-section-content').html("awssssssss");
  if(id_edo != ""){
    $.getJSON( "{{MEDIA_URL}}areas_control_2010/estados.json", function(json) {
      $.each(json, function(key, value) {
        // console.log(key);
        // console.log(value);
        if (value.NUM_EDO == id_edo) {
          $("#coverage_ac").html(value.ENTIDAD);
          // console.log(value.ENTIDAD);
        }
      });
    });
  }else {
    $("#coverage_ac").html("N/A");
  }
  if(id_mun != ""){
    $.getJSON( "{{MEDIA_URL}}areas_control_2010/municipios.json", function(json) {
          $.each(json, function(key, value) {
            if(value.CVE_ENT==id_edo){
              $("#muni_ac").html(value.NOM_MUN);

            }
           });
      });
  }
  else {
    $("#muni_ac").html("N/A");
    if (typeof areactrl != 'undefined') {
      if (areactrl != "") {
          $.getJSON( "{{MEDIA_URL}}areas_control_2010/municipios.json", function(json) {
                $.each(json, function(key, value) {
                  if(value.CVE_MUN==areactrl.substring(3,5)){
                    $("#muni_ac").html(value.NOM_MUN);
                  }
                 });
            });
      }
    }
  }
  if (id_ageb != "") {
     $("#id_ageb_ac").html(id_ageb);
  }else {
      $("#id_ageb_ac").html("N/A");
      if (id_ac != "") {
          $("#id_ageb_ac").html(id_ac.substring(0,10));
      }
  }
  if (id_ac != "") {
     $("#id_ac").html(id_ac);
  }else {
     $("#id_ac").html("N/A");
  }
  // console.log("sha");
  // $('.query-result-section-content').html('<div class="table-responsive"><table class="table-results"><tr class="tr-results"><th class="th-results">\
  // Estado:</th><td class="td-results">'+entidad_ac+'</td>\
  // <th class="th-results">Municipio:</th><td class="td-results"><span id="muni_ac"> '+municipio_ac+' </span></td></tr>\
  // <tr class="tr-results"><th class="th-results">Agebs:</th><td class="td-results"><span id="id_ageb_ac">'+ageb_ac+' </span></td>\
  // <th class="th-results">Area de control: </th><td class="td-results"><span id="id_ac">'+area_control_ac+' </span></td></tr></table>\
  // ');
}
function dataGeneratePie2(data2){
  jsonObj2 = [];
  for (gn2 in data2) {
    var temp_crops = [];
    temp_crops.push(gn2);
    temp_crops.push(data2[gn2]);
    jsonObj2.push(temp_crops);
  }
  var titles = ["Cultivo", "Cosechado"];
  jsonObj2.unshift(titles);

  return jsonObj2;
}

//$('.select_general_cropsB').on("change","select#xCropSelectID", function(e){
$( "#xCropSelectID" ).change(function() {
  var id = $(this).val();
  updateChartGeneral(id);
});
$( "#specific_cropsB" ).change(function() {
  var id = $(this).val();
  updateChartSpecific(id);
});
function updateChartGeneral(id2){
  var id1 = $('#generalCropSelectID').val();
  if (id1==id2) {
    alert("No puedes seleccionar la misma opción");
    return;
  }
  if (id1=="--Selecciona opción a comparar--"||id2=="--Selecciona opción a comparar--") {
    alert("Selecciona una opción para comparar");
    return;
  }
  comboA = id1;
  comboB = id2;
  lso = new LoneySpatial();
  lso.updateChart_AC(true);

}
function updateChartSpecific(id2){
  var id1 = $('#specific_cropsA').val();
  if (id1==id2) {
    alert("No puedes seleccionar la misma opción");
    return;
  }
  if (id1=="--Selecciona opción a comparar--"||id2=="--Selecciona opción a comparar--") {
    alert("Selecciona una opción para comparar");
    return;
  }
  combo_specific_A = id1;
  combo_specific_B = id2;
  comboA = id1;
  comboB = id2;
  lso = new LoneySpatial();
  lso.updateChart_ACSpecific();
  lso.updateChart_AC(true);
}

function drawChartses(data_info, performance, nivel){
  lso = new LoneySpatial();
  var table_subject = $("#AC_Subject").val();
  if(table_subject=="AGRICULTURA PV"||table_subject=="AGRICULTURA OI"||table_subject=="AGRICULTURA PERENNES"){
    $('.table-results-pv').show();
    lso.getPerformance(performance);
  }
  drawSelects();//rfull the selects with AC
  var niv = "";
  var coverage = $('#AC_Coverage').val();
  // console.log(temp_radio);
    if(coverage=="national"){
      // console.log("wiii es nacioonal");
      if (nivel=="mun") {
        niv = "municipal";
      }else {
        niv = "estatal";
      }
    }else {
      // console.log("wiii es estatal");
      if (nivel=="mun") {
        niv = "municipial";
      }else if (nivel=="agb") {
          niv = "agebs";
      }else {
        niv = "áreas de control";
      }
    }
  if (niv=="estatal") {
    $('#ac-ageb-mun-resulst').html("<h2>Analisis</h2>");
  }else {
    $('#ac-ageb-mun-resulst').html("Resultados principales a nivel <b>"+niv+"</b> de agricultura primavera verano");
    lso.acAgebMunChart(niv);

  }
  lso.updateChart_AC(false);
  lso.updatePietXHarvestedCrop_AC();//the crop default "Sembrado"
  lso.updateChartXCultivo();
  glyphicon_chevron_up = true;
  $("#collapse-icon-container").show();
  openInfo();
}
class ACL{
  getOptions(properties) {
    if (chart_XCrop!=null) {
      lso = new LoneySpatial();
      lso.deleteGraphics();
    }
    var id_edo = "";
    if(typeof properties["nivel"] === 'undefined'){
      var nivel = "";
    }else {
      var nivel = properties["nivel"];
    }
    if(typeof properties["coverage"] === 'undefined'){
      var coverage = "";
    }else {
      var coverage = properties["coverage"];
    }
    if(typeof properties["clvmun"] === 'undefined'){
      var id_mun = "";
    }else {
      var id_mun = properties["clvmun"];
    }
    if(typeof properties["CLV_EDO"] === 'undefined'){
      var clv_edo = "";
    }else {
      var clv_edo = properties["CLV_EDO"];
      var id_edo = clv_edo;
    }
    if(typeof properties["CVE_ENT"] === 'undefined'){
      var cve_ent = "";
    }else {
      var cve_ent = properties["CVE_ENT"];
      var id_edo = cve_ent;
    }
    if(typeof properties["id_ageb"] === 'undefined'){
      var id_ageb = "";
    }else {
      var id_ageb = properties["id_ageb"];
    }
    if(typeof properties["areactrl"] === 'undefined'){
      var areactrl = "";
    }else {
      var areactrl = properties["areactrl"];
    }
  setHeader(areactrl, id_ageb, id_edo, id_mun);

    var coverage = $('#AC_Coverage').val();
    var field = $('#AC_Field').val();

    query_data = {
      'coverage': coverage,
      'nivel': nivel,
      'id_mun': id_mun,
      'CLV_EDO': clv_edo,
      'CVE_ENT': cve_ent,
      'id_ageb': id_ageb,
      'areactrl':areactrl,
      'field': field
    }
    // console.log("getAnalisysPerClvedo");
    $.ajax({
        url: '{% url "getAnalisysPerClvedo" %}',
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
          // console.log(data_delimiter);
          var bear_str = Math.trunc(bear_query);
          $('#bear_crops').html(bear_str+"%");
          $('#upc').html(upc);
          if(data_info.length==0){
            alert("No hay cultivos para esta selección");
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
          drawChartses(data_info, bear_str, nivel);

        },
        error : function(message) {
                console.log(message);
             }
        });

  }

}
</script>
