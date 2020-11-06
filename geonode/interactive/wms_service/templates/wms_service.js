/* Agregar wms servicio */
$('#wmsForm').on('submit', function(event){
    event.preventDefault();
    var name = $('#wmsName').val(),
          base_url = $('#wmsBaseurl').val(),
          description = $('#wmsDescription').val();

    form_data = {
        'name': name,
        'description': description,
        'base_url': base_url,
    }

    $.ajax({
        url: '{% url "save_wms_service" %}',
        type: 'POST',
        data: {'form_data': JSON.stringify(form_data),
               csrfmiddlewaretoken: '{{ csrf_token }}'
              },
        dataType: 'json',
        success: function(result) {
            var desc = result.description ? result.description : '';
            var html = '<div id="'+result.id+'" style="margin: 0px 0px 15px 0px;"><div style="color:#0092EA"><i class="fa fa-external-link-square"></i> <b>'+result.name+'</b>'
                       + '<a href="#" data-toggle="tooltip" title="Eliminar" class="fa fa-times fa-1x" data-id="'+result.id+'" style="position:relative; float:right;"></a>'
                       //+ '<a href="" data-toggle="tooltip" title="Editar" class="fa fa-bars fa-1x" style="position:relative; float:right;"></a>
                       + '</div><i>'+result.base_url+'</i><br>'
                       + '<p>'+desc+'</p><a href="#" id="delWms'+result.id+'" class="delWms" data-id="'+result.id+'" data-url="'+result.base_url+'" style="display:none;">'
                       + '<i>¿Eliminar objeto?</i></a></div>';
            $("#wmsSavedMsg").show().delay(4000).fadeOut();
            $("#wmsSelect").append('<option value="'+result.base_url+'">'+result.name+'</option>');
            $("#wmsElements").append(html);
            $('#addWmsModal').modal('toggle');
            $('#wmsName').val('');
            $('#wmsBaseurl').val(''),
            $('#wmsDescription').val('');
        },
        error : function(xhr,errmsg,err) {
            $("#wmsDuplMsg").show().delay(4000).fadeOut();
            console.log('Error en el servidor')
            console.log(xhr.status + ": " + xhr.responseText);
        }
      });
});

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
               var layer_list = []
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
                      })

               $.each(layer_list, function(key, lay) {
                 html = '<div id="extLay'+index+'" class="layerMenuTopLevelGroupContainer extlayer">'
                 + '<div class="layerRow" id="L'+index+'" data-x0="'+lay.bbox[0]+'" data-x1="'+lay.bbox[2]+'" data-y0="'
                 + lay.bbox[1] +'" data-y1="'+lay.bbox[3]+'" data-title="'+lay.title+'">'
                 +'<label for="extLay'+index+'i" title="'+lay.title.slice(0,1).toUpperCase()+lay.title.slice(1)+'" style="margin-left:0px;">'
                 + '<input class="checkbox" type="checkbox" id="extLay'+index+'i" href="'+wmsUrl+'" value="'+ lay.typename
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
               $("#notFoundUrlMsg").show().delay(3000).fadeOut();
               console.log('Error en el servidor')
               console.log(xhr.status + ": " + xhr.responseText);
           }
         });
     }
 });

 /* Muestra mensaje de eliminar */
 $('#wmsElements').on('click', '.fa-times', function() {
    id = $(this).attr('data-id');
    if($("#delWms"+id).is(':visible')){
        $("#delWms"+id).hide();
    }
    else{
        $("#delWms"+id).show();
    }
  });

    /* Delete Service */
  $('#wmsElements').on('click', '.delWms', function() {
    id = $(this).attr('data-id');
    url = $(this).attr('data-url');

    $.ajax({
        url: '{% url "delete_wms" %}',
        type: 'POST',
        data: {'id':id, csrfmiddlewaretoken: '{{ csrf_token }}'},
        dataType: 'html',
        success: function(id) {
            $('#wms'+id).remove();
            $("#wmsSelect option[value='"+url+"']").remove();
        },
    });
  });