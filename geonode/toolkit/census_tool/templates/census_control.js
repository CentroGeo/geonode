<script type="text/javascript">
/*
This class js is for analysis for  crops controls areas for mviewer
*/
var table_selected = "";
var filter_name = "";
var field_name = "";
var ac_layer = L.tileLayer;
var national_nivel_ac = "mun";
var statal_nivel_ac = "mun";
var municipal_nivel_ac = "ageb";
var arr_legend_census = [];
var chart_GeneralCrop = null;
$(document).ready(function(){
  /*Clicks radio buttons*/
$("#national_ac input[name='group_nat']").click(function(){
  var coverage = $('#AC_Coverage').val();
  var temp_radio = $(this).val();
  // console.log(temp_radio);
    if(coverage=="national"){
      if (temp_radio=="mun") {
        national_nivel_ac = "mun";
        $("#notice_ac").html("Nivel a tematizar: por Municipio");
      }else {
        national_nivel_ac = "state";
        $("#notice_ac").html("Nivel a tematizar: por Estado");
      }
    }
});
$("#statal_ac input[name='group_est']").click(function(){
  var coverage = $('#AC_Coverage').val();
  var temp_radio = $(this).val();
      if(coverage=="statal"){
        if (temp_radio=="mun") {
          statal_nivel_ac = "mun";
          $("#notice_ac").html("Nivel a tematizar: por Municipio");
        }else if (temp_radio=="agb") {
            statal_nivel_ac = "ageb";
            $("#notice_ac").html("Nivel a tematizar: por Agebs");
        }else {
          statal_nivel_ac = "ac";
          $("#notice_ac").html("Nivel a tematizar: por Áreas de control");
        }
      }
});
  $('#module-legend ul.layers').on("click","i.census-dow", function(e){
    var layername = $(this).attr('data-name');
    var layer_storeType = $(this).attr('data-storetype');
    var links, htmlLinks = '';
    if(layer_storeType == 'dataStore'){
      links = {'KML':'KML','ESRI Shapefile':'Shapefile Comprimido','GeoJSON':'GeoJSON','CSV':'CSV','PDF':'PDF'}
    }
    else{
      links = {'TIF':'TIF'}
    }
    $.ajax({
      url: '{% url "dwn_links" %}',
      type: 'POST',
      data: {'layername': layername,
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'html',
      success: function(result) {
          var val = 'ShapeFile';
          htmlLinks += '<li><a href="'+result+'">'+val+'</a></li>';
          $( "#download_layer_mv .modal-content-download").html(htmlLinks);
          $("#download_layer_mv").addClass("is-active");
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
  });

  $('#module-legend ul.layers').on("click","i.eyeon-census", function(e){
    var id_lcen = $(this).attr("id");
    var key_cen = id_lcen.substring("5",id_lcen.length);
    $(this).removeClass("eyeon-census");
    $(this).addClass("eyeoff-census");
    $(this).css("color","#2A2A2A");
  if (typeof(arr_legend_census[key_cen]) != "undefined") {
      map.removeLayer(arr_legend_census[key_cen]);
  }
  });
  $('#module-legend ul.layers').on("click","i.eyeoff-census", function(e){
    var id_lcen = $(this).attr("id");
    var key_cen = id_lcen.substring("5",id_lcen.length);
    $(this).removeClass("eyeoff-census");
    $(this).addClass("eyeon-census");
    $(this).css("color","#97bd3d");
    if (typeof(arr_legend_census[key_cen]) != "undefined") {
          map.addLayer(arr_legend_census[key_cen]);
    }
  });
  $(".AC_from_towns").click(function(){
    $(".categorys_AC").show();
  });
  $(".AC_from_state").click(function(){
      var id_state = $(this).val();//catch the key id
      if($('#AC_Coverage').val() == "mun"){
          $('.towns_AC').show();
          $('#AC_Town option').remove();
            $.getJSON( "{{MEDIA_URL}}areas_control_2010/municipios.json", function(json) {
                  $.each(json, function(key, value) {
                    if(value.CVE_ENT==id_state){
                      $('#AC_Town')
                           .append($('<option>', { value : value.CVE_MUN })
                           .text(value.NOM_MUN));
                    }
                   });
              });
          }else {
            $(".categorys_AC").show();
          }
  });

  //This event is for radio buttons coverages country
  $("#AC_Coverage").click(function(){
    if ($("#AC_Coverage").val()==0||$("#AC_Coverage").val()=="") {
      $('#notice_ac').html("");
      $("#worng_ac").html("Selecciona el nivel.");
       return;
    }else {
      $("#worng_ac").html("");
    }
    clean();
    $("#switch_ac").show();
    $("#statal_ac").show();
      getCategorysCensus();
      if($("#AC_Coverage").val() == "national"){
        $(".categorys_AC").show();
        $("#national_ac").show();
        $("#statal_ac").hide();
        $('#AC_Theme').show();
      }else if ($("#AC_Coverage").val() == "statal") {
        $("#national_ac").hide();
        $("#statal_ac").show();
        $('#AC_Theme').hide();
        $('.field_subjec').hide();
        full_state();
      }else if ($("#AC_Coverage").val() == "mun") {
        full_state();
      }else {
        $('#worng_ac').html("Por favor seleeciona la covertura");
      }
  });
  $(".AC_from_category").click(function() {
  var id_subject = $(this).val();//catch the key id
  if (id_subject==0||id_subject=="") {
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona un categoria.");
     return;
  }else {
    $("#worng_ac").html("");
  }
  $('#AC_Field').hide();
  $('#AC_Theme').hide();
  query_data = {
    'id_subject':id_subject
  }
  $.ajax({
      data: {'query_data': JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
      url: '{% url "getSubjectsCenus" %}',
      type: 'POST',
      success : function(data) {
        var data_subject = data;
        var obj_subj = new Object();
        var data_subj = data;
        for (subjects in data_subj) {
          obj_subj[data_subj[subjects]] = data_subj[subjects];
        }
        $('#AC_Subject option').remove();
        $('#AC_Subject')
             .append($('<option>', { value : '0' })
             .text("---SELECCIONA UN TEMA---"));
        $.each(obj_subj, function(key, value) {
            $('#AC_Subject')
                 .append($('<option>', { value : key })
                 .text(value));
         });
         $('.subjects_AC').show();
      },
      error : function(message) {
              console.log(message);
           }
      });
});
$(".AC_from_subject").click(function() {
  //catch the key id
  var id_subject = $(this).val();
  var table_subject = $("#AC_Subject").val();
  if (id_subject==0||id_subject=="") {
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona un tema.");
     return;
  }else {
    $("#worng_ac").html("");
  }
  $('#AC_Theme').show();

  query_data = {
    'subtopic': id_subject
  }
  if(table_subject=="AGRICULTURA PV"||table_subject=="AGRICULTURA OI"||table_subject=="AGRICULTURA PERENNES"){
      $.ajax({
        data: {'query_data': JSON.stringify(query_data),
        csrfmiddlewaretoken: '{{ csrf_token }}'
      },
      url: '{% url "getThemeCensus" %}',
      type: 'POST',
      success : function(data) {
        // console.log(data);
        var data_subj = data.data[0];
        table_selected = data.table;
        // filter_name = data.variable;
        var obj_subj = new Object();
        var x_indice = 0;
        for (subjects in data_subj) {
          obj_subj[data_subj[subjects][0]] = data_subj[subjects][1];
        }
        $('#AC_Theme option').remove();
        $('#AC_Theme')
          .append($('<option>', { value : '0' })
          .text("---SELECCIONA UN CAMPO DE TEMATIZACIÓN---"));
        $.each(obj_subj, function(key, value) {
          $('#AC_Theme')
          .append($('<option>', { value : key })
          .text(value));
        });
        $('.themes_AC').show();
      },
      error : function(message) {
        console.log(message);
      }
    });
  }else{//Numericos
    $.ajax({
        data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
        url: '{% url "getTheme_numberCensus" %}',
        type: 'POST',
        success : function(data) {
          // console.log(data);
          var data_subj = data.data[0];
          table_selected = data.table;
          // filter_name = data.variable;
          var obj_subj = new Object();
          var x_indice = 0;
          for (subjects in data_subj) {
            obj_subj[data_subj[subjects][0]] = data_subj[subjects][1];
          }
          $('#AC_Theme option').remove();
          $('#AC_Theme')
               .append($('<option>', { value : '0' })
               .text("---SELECCIONA UN CAMPO DE TEMATIZACIÓN---"));
          $.each(obj_subj, function(key, value) {
              $('#AC_Theme')
                   .append($('<option>', { value : key })
                   .text(value));
           });
           $('.themes_AC').show();
        },
        error : function(message) {
                console.log(message);
             }
        });
  }
});
//Thema para seleccionar el campo
  $(".AC_from_theme").click(function(){
    var id_subject = $(this).val();//catch the key id
    var coverage = $('#AC_Coverage').val();
    var id_edo = $("#AC_State").val();
    var id_mun = $('#AC_Town').val();
    filter_name = $(this).val();
    var table_subject = $("#AC_Subject").val();
    if (filter_name==0||filter_name=="") {
      $('#notice_ac').html("");
      $("#worng_ac").html("Selecciona el campo de tematización.");
       return;
    }else {
      $("#worng_ac").html("");
    }

    query_data = {
      'subtopic': id_subject,
      'coverage': coverage,
      'id_edo': id_edo,
      'id_mun':id_mun,
      'table_selected': table_selected,
      'filter_name': filter_name
    }
    if(table_subject=="AGRICULTURA PV"||table_subject=="AGRICULTURA OI"||table_subject=="AGRICULTURA PERENNES"){
          $.ajax({
              data: {'query_data': JSON.stringify(query_data),
                   csrfmiddlewaretoken: '{{ csrf_token }}'
                  },
              url: '{% url "getSubtopicsCensus" %}',
              type: 'POST',
              success : function(data) {
                // console.log(data);
                var data_subj = data.data;
                field_name = data.variable;
                var obj_subj = new Object();
                for (subjects in data_subj) {
                  obj_subj[data_subj[subjects][0]] = data_subj[subjects][0];
                }
                $('#AC_Field option').remove();
                $('#AC_Field')
                     .append($('<option>', { value : '0' })
                     .text("---SELECCIONA UN CAMPO A TEMATIZAR--"));
                $.each(obj_subj, function(key, value) {
                    $('#AC_Field')
                         .append($('<option>', { value : key })
                         .text(value));
                 });
                 $('.fields_AC').show();
                 $('#AC_Field').show();
              },
              error : function(message) {
                      console.log(message);
                   }
              });
      }else{
        //Nunbers
        // showTematizer();
        $('#run_query_theme_census').show();
        }

  });
  $(".AC_from_Field").click(function(){
  $('#run_query_theme_census').show();
});
$("#run_query_theme_census").click(function(){
    $('#notice_ac').html("Espera, mientras se hace tu consulta.");
    showTematizer();
});
});

function getCoverageCensus(){
  $('#census_tool').addClass('is-active');
  query_data = {
    'coverage': 1
  }
  $.ajax({
      url: '{% url "getCoverageCensus" %}',
      type: 'POST',
      data: {'query_data': JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
      dataType: 'json',
      success : function(data) {
        // console.log(data);
        $('#AC_Coverage option').remove();
        $('#AC_Coverage')
            .append($('<option>', {'value':'0'})
            .text("---SELECCIONA EL NIVEL---"));
        if(data.all_states!="0"){
            $('#AC_Coverage')
            .append($('<option>', {'value':'national'})
            .text(data.all_states));
        }
        if(data.states!="0"){
            $('#AC_Coverage')
            .append($('<option>', {'value':'statal'})
            .text(data.states));
        }

      },
      error : function(message) {
              console.log(message);
           }
      });

}
function getCategorysCensus(){
  $.ajax({
      data: {'id_subject': JSON.stringify("id_subject"),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
      url: '{% url "getCategorysCensus" %}',
      type: 'POST',
      success : function(data) {
        $('#AC_Category option').remove();
        $('#AC_Category')
             .append($('<option>', { value : '0' })
             .text("---SELECCIONA UNA CATEGORIA---"));
        for (var i = 0; i <= data.length; i++) {
          var obj_cat = new Object();
          var data_cat = data[i];
          for (cats in data_cat) {
            obj_cat[data_cat[cats]] = data_cat[cats];
          }
          $.each(obj_cat, function(key, value) {
              $('#AC_Category')
                   .append($('<option>', { value : key })
                   .text(value));
           });
        }
      },
      error : function(message) {
              console.log(message);
           }
      });
}
function clean(){
  $('.categorys_AC').hide();
  $('.states_AC').hide();
  $('.subjects_AC').hide();
  $('.fields_AC').hide();
  $(".tematic_map").hide();
  $(".towns_AC").hide();
  $('#notice_ac').html("");
  $('#worng_ac').html("");
  $("#run_query_theme_census").hide();
}
function full_state(){
$(".states_AC").show();
if ($('#AC_State option').length == 1) {
  query_data = {
    'name': 'mun',
  }
  $.ajax({
      url: '{% url "getConfigurationCensus" %}',
      type: 'POST',
      data: {'query_data': JSON.stringify(query_data),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
      dataType: 'json',
      success : function(data) {
        var all_states = data.all_states;
        var states = data.states;
        if(typeof all_states === 'undefined'){
          console.log("Revisa la Configuración de ConfigurationAC");
          alert("Esta sección no esta configurada, ve con tu administrador");
          return;
        }
        $('#AC_State option').remove();
        $('#AC_State')
            .append($('<option>', { value : '0' })
            .text("---SELECCIONA UN ESTADO---"));
        $.getJSON( "{{MEDIA_URL}}areas_control_2010/estados.json", function(json) {
              $.each(json, function(key, value) {
                if (all_states) {//Si es verdadero significa que esto es para todos los estados
                    $('#AC_State')
                    .append($('<option>', { value : key+1 })
                    .text(value.ENTIDAD));
                }else {
                  //si es falso es por que es solo uno o mas estados
                  if (states.length<=2) {//Solo es un estado ej. Yucatan o Aguscalientes o Otro
                    if(key+1==states) {
                      //Este if solo es para Yucatan
                      $('#AC_State')
                      .append($('<option>', { value : key+1 })
                      .text(value.ENTIDAD));
                    }
                  }else {
                    var str_states = states.split(",");
                    for (var i = 0; i < str_states.length; i++) {
                      if(key+1==str_states[i]) {//Este if es para varios estados, ej. Adesur Todo
                        $('#AC_State')
                        .append($('<option>', { value : key+1 })
                        .text(value.ENTIDAD));
                      }
                    }
                  }
                }
               });
          });

      },
      error : function(message) {
              console.log(message);
           }
      });

}
}
function getTematizerStatal(){
    // console.log("statal");
    var category = $("#AC_Category").val();
    var table_subject = $("#AC_Subject").val();
    var theme_field = $("#AC_Field").val();
    var nivel = statal_nivel_ac;
    var id_edo = $("#AC_State").val();
    if(table_subject=="AGRICULTURA PV"||table_subject=="AGRICULTURA OI"||table_subject=="AGRICULTURA PERENNES"){
      if(!validate_basic(nivel, category, table_subject, filter_name, field_name)){
        return false;
      }
      if(!validate_edo(id_edo)){
        return false;
      }
        query_data = {
          'category': category,
          'table_subject': table_selected,
          'theme_field': theme_field,
          'nivel': nivel,
          'id_edo': id_edo,
          'filter_name': filter_name,
          'field_name':field_name
        }
        $.ajax({
            url: '{% url "getTematizerStatal_Census" %}',
            type: 'POST',
            data: {'query_data': JSON.stringify(query_data),
                 csrfmiddlewaretoken: '{{ csrf_token }}'
                },
            dataType: 'json',
            success : function(data) {
              tematizing(data);
              layer = data.layer;
              var data_ac = data.data_ac;
              // updateChart(data_ac);
              var southWest = L.latLng(layer.x0, layer.y0);
              var northEast = L.latLng(layer.x1, layer.y1);
              bounds = L.latLngBounds(southWest, northEast);
              map.fitBounds(bounds);
            },
            error : function(message) {
                    console.log(message);
                 }
            });
      }else{
        // console.log("number");
        field_name = $("#AC_Theme").val();
        var subject = $('#AC_Subject');
        if(!validate_number_basic(nivel, category, table_subject, field_name)){
          return false;
        }
        if(!validate_edo(id_edo)){
          return false;
        }
        query_data = {
          'category': category,
          'table_subject': table_selected,
          'theme_field': theme_field,
          'nivel': nivel,
          'id_edo': id_edo,
          'filter_name': filter_name,
          'field_name':field_name,
          'subject': subject
        }
        $.ajax({
            url: '{% url "getTSN_Census" %}',
            type: 'POST',
            data: {'query_data': JSON.stringify(query_data),
                 csrfmiddlewaretoken: '{{ csrf_token }}'
                },
            dataType: 'json',
            success : function(data) {
              tematizing(data);
              layer = data.layer;
              var data_ac = data.data_ac;
              // updateChart(data_ac);
              var southWest = L.latLng(layer.x0, layer.y0);
              var northEast = L.latLng(layer.x1, layer.y1);
              bounds = L.latLngBounds(southWest, northEast);
              map.fitBounds(bounds);
            },
            error : function(message) {
                    console.log(message);
                 }
            });
      }
}
function showTematizer(){
    var coverage = $('#AC_Coverage').val();
    $('#notice_ac').html("Por favor espera mientras se ejecuta la consulta ");
    if(coverage=="national"){
        getTematizerNational();
    }else if (coverage=="statal") {
        getTematizerStatal();
    }else if (coverage=="mun") {
        getTematizerMunicipal();
    }else {
        $('#worng_ac').html("Selecciona una covertura");
        $('#notice_ac').html("");
    }
}
function validate_number_basic(nivel,category, theme, field){
  if(category=="---SELECCIONA UNA OPCIÓN---"||category=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona la categoria.");
    return false;
  }else if(nivel=="---SELECCIONA UNA OPCIÓN---"||nivel=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el nivel a tematizar.");
    return false;
  }
  else if(theme==""||theme=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el tema.");
    return false;
  }
  else if(field==""||field=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el campo a tematizar.");
    return false;
  }
  else{
    $('#notice_ac').html("Por favor espera mientras se ejecuta la consulta");
    $("#worng_ac").html("");
    return true;
  }
}
function getTematizerNational(){
    var url_str = "";
    var category = $("#AC_Category").val();
    var table_subject = $("#AC_Subject").val();
    var theme_field = $("#AC_Field").val();
    var nivel = national_nivel_ac;

    if(table_subject=="AGRICULTURA PV"||table_subject=="AGRICULTURA OI"||table_subject=="AGRICULTURA PERENNES"){
        if(!validate_basic(nivel, category, table_subject, filter_name, theme_field)){
          return false;
        }
        query_data = {
          'category': category,
          'table_subject': table_selected,
          'theme_field': theme_field,
          'nivel': nivel,
          'filter_name': filter_name,
          'field_name':field_name
        }
        $.ajax({
            url: '{% url "getTematizer_nationalCensus" %}',
            type: 'POST',
            data: {'query_data': JSON.stringify(query_data),
                 csrfmiddlewaretoken: '{{ csrf_token }}'
                },
            dataType: 'json',
            success : function(data) {
              tematizing(data);
            },
            error : function(message) {
                    console.log(message);
                 }
            });
      }else{
        field_name = $("#AC_Theme").val();
        if(!validate_number_basic(nivel, category, table_subject, field_name)){
          return false;
        }

        var subject = $("#AC_Subject").val();
        query_data = {
          'category': category,
          'table_subject': table_selected,
          'theme_field': theme_field,
          'nivel': nivel,
          'filter_name': filter_name,
          'field_name':field_name,
          'subject':subject
        }
        $.ajax({
            url: '{% url "getTem_NNCensus" %}',
            type: 'POST',
            data: {'query_data': JSON.stringify(query_data),
                 csrfmiddlewaretoken: '{{ csrf_token }}'
                },
            dataType: 'json',
            success : function(data) {
              tematizing(data);
            },
            error : function(message) {
                    console.log(message);
                 }
            });
      }

}
function tematizing(data){
  var empty = data.empty;
  if (empty) {
    $('#worng_ac').html("No hay datos para este campo en este nivel geográfico");
    return;
  }
  var category = $("#AC_Subject").val();
  var theme_field = $("#AC_Field").val();
  var coverage = $('#AC_Coverage').val();
  var id_edo = $("#AC_State").val();
  var id_mun = $("#AC_Town").val();
  $("#theme_name_ac").html(category);
  if(theme_field == 0){
      $("#variable_name_ac").html($("#AC_Theme").text());
  }else {
    $("#variable_name_ac").html(theme_field);
  }
  var theme = theme_field;
  var layer = data.layer;
  var data_id = 'm7c'+theme+'l'+layer.id+'i';
  ac_layer = L.tileLayer.betterWms(data.href, {
  layers: layer.typename,
  format: 'image/png',
  transparent: true
  });
  arr_legend_census[layer.id] = ac_layer;
  map.addLayer(ac_layer);
  $('#census_tool').removeClass('is-active');
  imglegend = data.href+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+layer.typename+'&transparent=true" title="'+layer.title;
  legend_census(data_id, imglegend, layer.title, layer.typename, layer.storeType, layer.id);
  show_default(CONSTANT_CENSO);
  return data;
}
function legend_census(leaflet_id, imglegend, lgd_title, typename, storeType, dataId) {
  var theLegend = '<li id="l'+ dataId +'" class="layer layer-info-container" leaflet-id="'+leaflet_id
                   + '"><span class="layer-name -alerts"><div class="no-sort container-eye-icon">'
                   + '<i class="fa fa-eye eyeon-census" id="hidec'+dataId+'" aria-hidden="true"></i></div><div class="l-title" style="width:230px;">'+lgd_title+'</div>'
                   + '<div class="no-sort pull-right"><div class="tools no-sort" style="display:none;"><a href="#" class="f15" title="Leyenda">'
                   + '<i class="fa fa-list-alt" aria-hidden="true"></i></a>'
                   + '<a href="#" class="f15" title="Info">'
                   + '<i class="fa fa-download census-dow" aria-hidden="true"'
                   + ' data-toggle="modal" data-target="#download_layer_mv" data-name="'
                   + typename+'" data-storeType="'+storeType+'" data-id="'+dataId+'"></i>'
                   + '</i></a><a href="#" class="f15" title="Eliminar">'
                   + '<i class="fa fa-times-circle" aria-hidden="true"></i></a></div>'
                   + '<div class="pull-right"><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="l'+dataId+'"></i></div></div>'
                   + '<div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'" /></a></div>'
                   + '<div id="sld-'+dataId+'" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'
                   + leaflet_id+'"><span id="percent'+leaflet_id+'">100%</span></div></span></li>';
    $( "#module-legend ul.layers" ).prepend(theLegend);
}
function validate_basic(nivel,category, theme, tematizing, field){
  if(category=="---SELECCIONA UNA OPCIÓN---"||category=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona la categoria.");
    return false;
  }else if(nivel=="---SELECCIONA UNA OPCIÓN---"||nivel=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el nivel a tematizar.");
    return false;
  }
  else if(theme==""||theme=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el tema.");
    return false;
  }
  else if(tematizing==""||tematizing=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el el campo de tamatización.");
    return false;
  }
  else if(field==""||field=="0"){
    $('#notice_ac').html("");
    $("#worng_ac").html("Selecciona el campo a tematizar.");
    return false;
  }
  else{
    $('#notice_ac').html("Por favor espera mientras se ejecuta la consulta");
    $("#worng_ac").html("");
    return true;
  }
}
function validate_edo(edo){
    if(edo=="---SELECCIONA UNA OPCIÓN---"||edo=="0"){
      $('#notice_ac').html("");
      $("#worng_ac").html("Selecciona un estado.");
      return false;
    }else if (edo==0) {
      $('#notice_ac').html("");
      $("#worng_ac").html("Selecciona un estado.");
      return false;
    }
    else{
      $('#notice_ac').html("Por favor espera mientras se ejecuta la consulta");
      $("#worng_ac").html("");
      return true;
    }
}
/*End Clicks radio buttons*/
function getTematizerMunicipal(){
    var category = $("#AC_Category").val();
    var table_subject = $("#AC_Subject").val();
    var theme_field = $("#AC_Field").val();
    var nivel = municipal_nivel_ac;
    var id_edo = $("#AC_State").val();
    var id_mun = $("#AC_Town").val();
    if(table_subject=="AGRICULTURA PV"||table_subject=="AGRICULTURA OI"||table_subject=="AGRICULTURA PERENNES"){
        if(!validate_basic(nivel, category, table_subject, filter_name, field_name)){
          return false;
        }
        if(!validate_edo(id_edo)){
          return false;
        }
        if(!validate_mun(id_mun)){
          return false;
        }
        query_data = {
          'category': category,
          'table_subject': table_selected,
          'theme_field': theme_field,
          'nivel': nivel,
          'id_edo': id_edo,
          'id_mun': id_mun,
          'filter_name': filter_name,
          'field_name':field_name
        }
        $.ajax({
            url: '{% url "getTematizer_Census" %}',
            type: 'POST',
            data: {'query_data': JSON.stringify(query_data),
                 csrfmiddlewaretoken: '{{ csrf_token }}'
                },
            dataType: 'json',
            success : function(data) {
              // console.log(data);
              if(data.layer!="None"){
                tematizing(data);
                layer = data.layer;
                var southWest = L.latLng(layer.x0, layer.y0);
                var northEast = L.latLng(layer.x1, layer.y1);
                bounds = L.latLngBounds(southWest, northEast);
                map.fitBounds(bounds);
              }else{
                $("#worng_ac").html("No hay datos para este campo, selecciona otro");
              }

            },
            error : function(message) {
                    console.log(message);
                 }
            });
      }else{
        field_name = $("#AC_Theme").val();
        if(!validate_number_basic(nivel, category, table_subject, field_name)){
          return false;
        }
        if(!validate_edo(id_edo)){
          return false;
        }
        if(!validate_mun(id_mun)){
          return false;
        }
        query_data = {
          'category': category,
          'table_subject': table_selected,
          'theme_field': theme_field,
          'nivel': nivel,
          'id_edo': id_edo,
          'id_mun': id_mun,
          'filter_name': filter_name,
          'field_name':field_name
        }
        $.ajax({
            url: '{% url "getTematizerNumber_Census" %}',
            type: 'POST',
            data: {'query_data': JSON.stringify(query_data),
                 csrfmiddlewaretoken: '{{ csrf_token }}'
                },
            dataType: 'json',
            success : function(data) {
              tematizing(data);
              layer = data.layer;
              var southWest = L.latLng(layer.x0, layer.y0);
              var northEast = L.latLng(layer.x1, layer.y1);
              bounds = L.latLngBounds(southWest, northEast);
              map.fitBounds(bounds);

            },
            error : function(message) {
                    console.log(message);
                 }
            });
      }
}
</script>
