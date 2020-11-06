<script type="text/javascript">

$('#c10-topic').on('change', function(event){
  var topic = $("#c10-topic").val();
  $('#c10-subtopic').empty().append($("<option />").val('').text('------'));
  $('#sld-field').empty().append($("<option />").val('').text('------'));
  $('#subtopic-div').hide();
  $('#sld-div').hide();
  $('#btnQueryC10').hide();

  $.ajax({
      url: '{% url "c10_subtopics" %}',
      type: 'POST',
      data: {'topic': JSON.stringify(topic),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'json',
      success: function(result) {
          if(jQuery.isEmptyObject(result)){
            $("#c10noDataMsg").show().delay(3000).fadeOut();
          } else {
            $.each(result, function(k, v) {
                $("#c10-subtopic").append($("<option />").val(k).text(v));
            });
            $('#subtopic-div').show();
          }
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });

});

$('#c10-subtopic').on('change', function(event){
  $('#sld-field').empty().append($("<option />").val('').text('------'));
  $('#sld-div').hide();
  $('#btnQueryC10').hide();
  var subtopic = $(this).val();

  $.ajax({
       url: '{% url "subtopic_fields" %}',
       type: 'POST',
       data: {'subtopic': JSON.stringify(subtopic),
              csrfmiddlewaretoken: '{{ csrf_token }}'
             },
       dataType: 'json',
       success: function(result) {
           $.each(result, function(key, value) {
               $("#sld-field").append($("<option />").val(key).text(value));
           });
           $('#sld-div').show();
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor al generar campos de tematizacion')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
});

$('#sld-field').on('change', function(event){
    $('#btnQueryC10').show();
});

$('#c2010_form').on('submit', function(event){
    $("#c10proccessMsg").show().delay(3000).fadeOut();

    event.preventDefault();

    var topic = $("#c10-topic").val();
    var subtopic = $("#c10-subtopic").val();
    var sld_field = $("#sld-field").val();
    var subtopic_text = $("#c10-subtopic option:selected").text();
    var sldfield_text = $("#sld-field option:selected").text();
    var lyr_title = sldfield_text + '_' + subtopic_text;

    query_data = {
      'subtopic': subtopic,
      //'table_title': table_title,
      'sld_field': sld_field
    }

    $.ajax({
      url: '{% url "c10_data" %}',
      type: 'POST',
      data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'json',
      success: function(data) {
          var layer = data.layer;
          var data_id = 'm7'+data.name+'i';

          if($("#" + 'm7c'+topic+'l'+data.name).length != 0) {
              $("#c10proccessMsg").hide().fadeOut();
              $("#c10proccessedMsg").show().delay(3000).fadeOut();
          } else {
              c10_layer = L.tileLayer.betterWms(data.href, {
              layers: layer.typename,
              format: 'image/png',
              transparent: true,
              styles: data.sld_name
              });

              checkboxes.push(c10_layer);

              for (var i = 0; i < checkboxes.length; i++) {
                if (layer.typename == checkboxes[i].wmsParams.layers) {
                  map.addLayer(checkboxes[i]);
                  var checkId = i;
                  var zIndex = 100+i;
                  checkboxes[i].setZIndex(zIndex);
                }
              }

              element = '<div id="m7'+data.name+'" class="layerMenuTopLevelGroupContainer">'
                  + '<div class="layerRow" id="'+layer.id+'" data-x0="'+layer.x0+'" data-x1="'+layer.x1+'" data-y0="'+layer.y0+'" data-y1="'+layer.y1+'" data-title="'+ lyr_title +'">'
                  + '<span class="fa-stack fa-lg download-l"><i class="fa fa-square fa-stack-2x"></i>'
                  + '<i title="Descargar capa" class="fa fa-download fa-stack-1x fa-inverse p-download" data-toggle="modal" data-target="#download-layer" data-name="'
                  + layer.typename+'" data-storeType="'+layer.storeType+'" data-id="lm7'+data.name+'i"></i></span>'
                  + '<label for="m7'+data.name+'i" title="'+lyr_title+'">'
                  + '<input class="checkbox" type="checkbox" id="m7'+data.name+'i" href="'+ data.href +'" value="'+layer.typename+'" title="'+lyr_title+'" checked>'
                  + lyr_title +'</label></div></div>'

              $("#latest-c10layers").prepend(element);

              imglegend = data.href+'?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer='+layer.typename+'&transparent=true'+'&style='+data.sld_name+'" title="'+lyr_title;
              legend = '<div id="l'+data_id+'" data-checkid="'+checkId+'" class="rowlegend"><div class="l-title">'
                + '<i data-toggle="tooltip" title="Desactivar" class="fa fa-check-square" data-id="l'+data_id+'" data-checkid="'+checkId+'"></i> '+lyr_title+'</div><div class="rlayer">'
                + '<div class="tools" style="display:none;"><i data-toggle="tooltip" title="Leyenda" data-id="l'+data_id+'" class="fa fa-list-alt"></i>'
                + '<i data-toggle="tooltip" title="Opacidad" data-id="l'+data_id+'" class="fa fa-arrows-h"></i>'
                + '<i title="Descripción" class="fa fa-info" data-container="body" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="No Disponible"></i>'
                + '<i data-toggle="tooltip" title="Eliminar" class="fa fa-times" data-value="'+layer.typename+'" data-id="'+data_id+'"></i></div>'
                + '</div><i data-toggle="tooltip" title="Herramientas" data-id="l'+data_id+'" class="vtools animationTransition fa fa-chevron-left"></i>'
                + '<div class="thumb"><a class="thumbnail2" href="#" data-image-id="" data-title="'+lyr_title+'" data-image="'+imglegend+'" data-target="#image-gallery"><img class="img-responsive" src="'+imglegend+'"/></a></div>'
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

              $('#c10-subtopic').find('option').remove().end();
              $('#sld_field').find('option').remove().end();
              $("#c10-topic").val('null');
              $('#subtopic-div').hide();
              $('#sld-div').hide();
              $('#btnQueryC10').hide();
              $('#census2010').modal('toggle');
              $("#c10proccessMsg").hide();
          }
      },
      error : function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    })
});

$(".c10Trigger").click( function() {
    if ($('#latest-c10layers').is(':empty')){
      $('#census2010').modal('show');
    }
});
</script>