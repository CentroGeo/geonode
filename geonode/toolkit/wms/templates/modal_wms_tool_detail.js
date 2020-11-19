<script type="text/javascript" src="{{ STATIC_URL }}idegeo/carousel/js/jquery.min.js"></script>
<script type="text/javascript" src="{{ STATIC_URL }}idegeo/soa_toolkit/js/jquery.multi-select.js"></script>
<script type="text/javascript" src="{{ STATIC_URL }}idegeo/soa_toolkit/css/multi-select.css"></script>

<script type="text/javascript">

//funcion para MODAL WMS en CONFIGURACION - wms_tool_detail.html
$('.add-layers-btn').on('click', function () {
    $('#miModal').addClass('is-active');

    //funcion adjunta para mantener la seleccion actual en el multiselect
    $("#wms-layers div").each(function () {
        var id_html = $(this).attr('wms-regid'); //atributo de divs que ya se ven en html
        $(".ms-selectable li").each(function() { //Recorre todos los li de la parte izquierda del multiselect
            var wms_id_js = $(this).attr('wms-regid'); //Numero de registro lado izquierdo en multiselect
            var wms_name_js = $(this).text(); //Nombre en multiselect
            var id_js = $(this).attr('id'); //Valor de registro en multiselect
            if (id_html == wms_id_js){ //Si el registro ya existe en el html
                $(this).hide();         //Ocultalo de la parte izquierda
                $(".ms-selection li").each(function() {
                    var wms2_id_js = $(this).attr('wms-regid'); //Numero de registro lado derecho en multiselect
                    if (id_html == wms2_id_js){ //Si el registro ya existe en el html
                        $(this).show(); //Muéstralo en la parte derecha
                    }
                })
            }
            })
        })
});


//FUNCION PARA EL MULTISELECT
$('#wmsSelect').multiSelect();

//FUNCION PARA DESELECCIONAR CAPAS EN MULTISELECT
$(".ms-selection").hover(function(){
    $(".ms-elem-selection").on('click', function() { //click en el lado derecho del multiselect
        var wms_regid_js = $(this).attr('wms-regid');//obtiene registros del lado derecho
        $(this).hide();//oculta la seleccion
        $(".ms-selectable li").each(function () { //recorre los li del lado izquierdo
            var wms2_regid_js = $(this).attr('wms-regid');//obtiene registros del lado izquierdo
            var wms_name_js = $(this).text();//obtiene el nombre del registro
                if (wms2_regid_js == wms_regid_js){ //Si coinciden los numeros de registro en ambos lados
                $(this).show(); //Se muestran del lado izquierdo
                }
        })
    })
});

//FUNCIONES PARA ACTIVAR Y DESACTIVAR BOTON DE ADD;
$(".ms-selectable").on('click', function() {
        $(".ms-selectable li").each(function() {
            if ($(this).hasClass('ms-selected')) {
                $(".btn-default").removeAttr("disabled");
            } else {
                $(".btn-default").attr("disabled","disabled");
            }
        })
});

$(".ms-selection").on('click', function() {
    if (!$(".ms-selection li").hasClass('ms-selected')) {
        $(".btn-default").prop('disabled', true);
    }
});

//METODO PARA OBTENER SELECCION DEL MODAL (CUANDO SE APRIETA EL BOTON)
$("#btn-wms").click(function() {
    var final_sel = null
    final_sel= $('#wmsSelect').val();

    data = {
        'final_sel': final_sel,
        'mv_id' : mv_id
    }

    $.ajax({
     url: '{% url "save_wms" %}',
     type: 'POST',
     data: {'data': JSON.stringify(data), csrfmiddlewaretoken: '{{ csrf_token }}'},
     dataType: 'json',

    success: function(result) {
            response=[];
            regid=[];
            select_li=[];
            item = 0;
            var count = ($("#wms-layers div").length);
            if (count == 0){
            $.each (result, function(k,v){
                    selection= '<div id="wms-regid' + k + '" wms-regid="' + k + '"><span><i class="fa fa-trash" title="Eliminar Capa" aria-hidden="true"></i></span>' + v + '</div>';
                    $("#wms-layers").append(selection);
                    })
            }

            $.each (result, function(k,v){
                response.push(k);
                $("#wms-layers div").each(function () {
                    var id_html = $(this).attr('wms-regid');
                    regid.push(id_html);
                })
            })

            response.sort();
            regid.sort();
            console.log(response);
            console.log(regid);
            var difference = $(response).not(regid).get();
             if (count > 0){
                if (difference.length >= 1){
                    $.each (result, function(k,v){
                        $.each(difference,function(index, value){
                            if (k == value){
                                selection= '<div id="wms-regid' + k + '" wms-regid="' + k + '"><span><i class="fa fa-trash" title="Eliminar Capa" aria-hidden="true"></i></span>' + v + '</div>';
                                $("#wms-layers").append(selection);
                                var difference = [];
                            }
                        })
                    })
                }
             }
    }//SUCCESS
    }) //ALAX
});

// METODO PARA VISUALIZAR WMS EN LA PAGINA DE GESTION
$(".minimize-menu-wms").click(function() {
    tool_id = $(this).attr('tool-id');
    var obj = "#tool-"+tool_id+"-head";
    if ($(obj).is(":visible")) {
      $(obj).hide();
      $("#tool-"+tool_id+"-lays").hide();
      $("i", this).attr("class", "fa fa-expand");
      $("i", this).attr("title", "Mostrar Capas");
      $("#tool-"+tool_id).css("background","");

      if ($("#topic-layers-div").is(":visible")) {
        $("#topic-layers-div").hide();
      }
    } else {
      $(obj).show();
      $("#tool-"+tool_id+"-lays").show();
      $("i", this).attr("class", "fa fa-compress");
      $("i", this).attr("title", "Oculta Capas");
      $("#tool-"+tool_id).css("background","aliceblue");
    }
});

//METODO PARA ELIMINAR
$(".wms-lays").on('click', '.fa-trash', function() {
    var wms_id = $(this).closest('div').attr('id');
    //console.log (wms_id);
    var reg_id = $(this).closest('div').attr('wms-regid');

    var wms_data = {
            'wms_id': wms_id, //ID del servicio wms
            'reg_id': reg_id, //ID de la tabla relación
            'mv_id' : mv_id  //ID del visualizador
        };
    console.log(wms_data);

    $.ajax({
      url: '{% url "remove_wms_layer" %}',
      type: 'POST',
      data: {'wms_data': JSON.stringify(wms_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
      dataType: 'html',
      success: function(result) {
          $('#'+wms_id).remove();
      },
      error: function(xhr,errmsg,err) {
          console.log('Error en el servidor')
          console.log(xhr.status + ": " + xhr.responseText);
      }
    });
});
    /* Delete Service */
  $('#wmsElements').on('click', 'i.dropWms', function() {
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
/* Agregar wms servicio */
$('#add_wmsForm').on('submit', function(event){
    console.log("submit");
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
            $("#wmsAddMsg").show().delay(4000).fadeOut();
            $("#wmsSelect").append('<option value="'+result.base_url+'">'+result.name+'</option>');
            console.log(html);
            $("#wmsElements").append(html);
            $('#addWmsModal').modal('toggle');
            $('#wmsName').val('');
            $('#wmsBaseurl').val(''),
            $('#wmsDescription').val('');
        },
        error : function(xhr,errmsg,err) {
            $("#wmsAlreadyMsg").show().delay(4000).fadeOut();
            console.log('Error en el servidor')
            console.log(xhr.status + ": " + xhr.responseText);
        }
      });
});

</script>
