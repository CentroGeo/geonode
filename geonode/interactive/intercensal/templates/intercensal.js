<script type="text/javascript">
$('#poll-theme').on('change', function(event){
  var theme = $("#poll-theme").val();
  $('#poll_table').empty().append($("<option />").val('').text('------'));
  $('#attributes').empty().append($("<option />").val('').text('------'));
  $('#attr_value').empty().append($("<option />").val('').text('------'));
  $('#poll_list').hide();
  $('#filter-value').hide();
  $('#theme-field').hide();
  $('#btnQueryPoll').hide();

  $.ajax({
      url: '{% url "polls_list" %}',
      type: 'POST',
      data: {'theme': JSON.stringify(theme),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'json',
      success: function(result) {
          if(jQuery.isEmptyObject(result)){
            $("#noDataMsg").show().delay(3000).fadeOut();
          } else {
            $.each(result, function() {
                $("#poll_table").append($("<option />").val(this.table_name).text(this.title).attr("id",this.id));
            });
            $('#poll_list').show();
          }
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });

});

$('#poll_table').on('change', function(event){
  $('#attributes').empty().append($("<option />").val('').text('------'));
  $('#attr_value').empty().append($("<option />").val('').text('------'));
  $('#filter-value').hide();
  $('#theme-field').hide();
  $('#btnQueryPoll').hide();
  var table_id = $(this).children(":selected").attr("id");
  var table_name = $(this).val();

  data = {
      'table_name': table_name,
      'table_id': table_id,
    }

  $.ajax({
      url: '{% url "poll_attr_value" %}',
      type: 'POST',
      data: {'data': JSON.stringify(data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'json',
      success: function(result) {
          if(jQuery.isEmptyObject(result)){
            $('#attr_value').change();
          } else {
            $.each(result, function() {
              $("#attr_value").append($("<option />").val(this).text(this));
            });
            $('#filter-value').show();
          }
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor al obtener valores')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
});

$('#attr_value').on('change', function(event){
   var id = $('#poll_table').children(":selected").attr("id");
   $('#attributes').empty().append($("<option />").val('').text('------'));
   $('#btnQueryPoll').hide();
   $.ajax({
       url: '{% url "poll_attr" %}',
       type: 'POST',
       data: {'poll_id': JSON.stringify(id),
              csrfmiddlewaretoken: '{{ csrf_token }}'
             },
       dataType: 'json',
       success: function(result) {
           $.each(result, function(key, value) {
               $("#attributes").append($("<option />").val(key).text(value));
           });
           $('#theme-field').show();
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor al generar campos de tematizacion')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
});

$('#attributes').on('change', function(event){
    $('#btnQueryPoll').show();
});

$('#poll_form').on('submit', function(event){
    $("#proccessMsg").show().delay(3000).fadeOut();
    get_data(event);
});

function get_data(event) {
    event.preventDefault();
    var table_name = $("#poll_table").val();
    var table_id = $("#poll_table").children(":selected").attr("id");
    var table_title = $("#poll_table option:selected").text();
    var theme = $("#poll-theme").val();
    var theme_field = $("#attributes").val();
    var column_value = $("#attr_value").val();

    query_data = {
      'table_name': table_name,
      'table_id': table_id,
      'table_title': table_title,
      'column_value': column_value,
      'theme_field': theme_field
    }

    $.ajax({
      url: '{% url "poll_data" %}',
      type: 'POST',
      data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'json',
      success: function(data) {
          if('exists' in data){
            if ($("#m4c"+theme+"l .layer").is(":hidden")){
                $(".level2LabelText[data-id='m4c"+theme+"l']").click();
            }
            $('#m4c'+theme+'l'+data.layer_id+'i').prop('checked', true).change();
          } else {
              var layer = data.layer;
              var data_id = 'm4c'+theme+'l'+layer.id+'i'

              poll_layer = L.tileLayer.betterWms(data.href, {
              layers: layer.typename,
              format: 'image/png',
              transparent: true
              });

              checkboxes.push(poll_layer);

              for (var i = 0; i < checkboxes.length; i++) {
                if (layer.typename == checkboxes[i].wmsParams.layers) {
                  map.addLayer(checkboxes[i]);
                  var checkId = i;
                  var zIndex = 100+i;
                  checkboxes[i].setZIndex(zIndex);
                }
              }

              element = '<div id="m4c'+theme+'l'+layer.id+'" class="layerMenuTopLevelGroupContainer">'
                  + '<div class="layerRow" id="'+layer.id+'" data-x0="'+layer.x0+'" data-x1="'+layer.x1+'" data-y0="'+layer.y0+'" data-y1="'+layer.y1+'" data-title="'+ layer.title +'">'
                  + '<span class="fa-stack fa-lg download-l"><i class="fa fa-square fa-stack-2x"></i>'
                  + '<i title="Descargar capa" class="fa fa-download fa-stack-1x fa-inverse p-download" data-toggle="modal" data-target="#download-layer" data-name="'
                  + layer.typename+'" data-storeType="'+layer.storeType+'" data-id="lm4c'+theme+'l'+layer.id+'i"></i></span>'
                  + '<label for="m4c'+theme+'l'+layer.id+'i" title="'+layer.title+'">'
                  + '<input class="checkbox" type="checkbox" id="m4c'+theme+'l'+layer.id+'i" href="'+ data.href +'" value="'+layer.typename+'" title="'+layer.title+'" checked>'
                  + layer.title+'</label></div></div>'

              $("#latest-list").prepend(element);

              imglegend = data.href+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+layer.typename+'&transparent=true" title="'+layer.title;
              legend = '<div id="l'+data_id+'" data-checkid="'+checkId+'" class="rowlegend"><div class="l-title">'
                + '<i data-toggle="tooltip" title="Desactivar" class="fa fa-check-square" data-id="l'+data_id+'" data-checkid="'+checkId+'"></i> '+layer.title+'</div><div class="rlayer">'
                + '<div class="tools" style="display:none;"><i data-toggle="tooltip" title="Leyenda" data-id="l'+data_id+'" class="fa fa-list-alt"></i>'
                + '<i data-toggle="tooltip" title="Opacidad" data-id="l'+data_id+'" class="fa fa-arrows-h"></i>'
                + '<i title="Descripción" class="fa fa-info" data-container="body" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="No Disponible"></i>'
                + '<i data-toggle="tooltip" title="Eliminar" class="fa fa-times" data-value="'+layer.typename+'" data-id="'+data_id+'"></i></div>'
                + '</div><i data-toggle="tooltip" title="Herramientas" data-id="l'+data_id+'" class="vtools animationTransition fa fa-chevron-left"></i>'
                + '<div class="thumb"><a class="thumbnail2" href="#" data-image-id="" data-title="'+layer.title+'" data-image="'+imglegend+'" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'"/></a></div>'
                + '<div class="slider"><div class="cslide"><div id="'+data_id+'s" title="'+layer.typename+'" data-checkid="'+checkId+'" data-id="l'+data_id+'"></div></div><span>100%</span></div></div>';

              $("#addlegend").prepend(legend);
              imgGallery();

              if($( ".layerMenu2" ).hasClass( "lm-closed" )){
                var window_w = $( window ).width();
                if(window_w >= 1280){
                  $(".layerMenu2").removeClass( "translateLayerListRight2" ).removeClass( "lm-closed" ).addClass( "translateLayerListLeft2" );
                  $(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
                }
              }
                  /*Slider*/
              d3.select('#'+data_id+'s').call(d3.slider().value(100).on("slide", function(evt, value) {
                var element_slider = evt.toElement.title;
                var element_id = evt.toElement.id;
                var post = $('#'+element_id).attr('data-checkid');
                var num = value/100;
                num = num.toFixed(2);
                checkboxes[post].setOpacity(num);
                num = (num*10).toFixed()*10;
                d3.select('#'+ $('#'+element_id).attr('data-id') + ' .slider span').text(num.toFixed()+"%");
              }));
              $("#l"+data_id+ " .slider").slideToggle('slow');
          }

          $('#attr_value').find('option').remove().end();
          $('#attributes').find('option').remove().end();
          $('#poll_table').find('option').remove().end();
          $("#poll-theme").val('null');
          $('#filter').hide();
          $('#poll_list').hide();
          $('#filter-value').hide();
          $('#theme-field').hide();
          $('#btnQueryPoll').hide();
          $('#census-poll').modal('toggle');
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
}

$("#m4c").on('click', '.p-download', function() {
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
          var val = 'ShapeFile'
          htmlLinks += '<li><a href="'+result+'">'+val+'</a></li>';
          $( "#download-layer .modal-body" ).html(htmlLinks);
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
});

$(".intTrigger").click( function() {
    if ($('#latest-alf-layers').is(':empty')){
      $('#census-poll').modal('show');
    }
});
</script>