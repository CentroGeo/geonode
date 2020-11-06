  $(document).ready(function(){
 /*fin de degradacion las imagenes de eliminacion de comentarios*/
   $('.body_comments').jBox('Tooltip', {
              getTitle: 'data-jbox-title',
              getContent: 'data-jbox-content',
              trigger: 'click',
    });
        /*Fin de save comments to comments*/
   // Interceptamos el evento submit
    //Comentarios generales
    $('#fo3').submit(function() {
   // Enviamos el formulario usando AJAX
   if($('#comment_group').val()=="")
   {
        return false;
   }
   else
   {
   //('#result').text("");
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            // Mostramos un mensaje con la respuesta
            success: function(data) {
                var comentario = $('#comment_group').val();
                $('#result').append("<p>"+comentario+"</p>");
                $('#comment_group').val("");

            }
        })
        return false;
   }
        return false;
    });
    //Comentarios por parrafo
    $('#c_rw').submit(function() {
   // Enviamos el formulario usando AJAX
   if($('#comment_row').val()=="")
   {
   $('#result_row').html("<span style='color: red;'>Ingresa tu comentario</span>");
        return false;
   }
   else
   {
    //$('#result_row').text("");
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            // Mostramos un mensaje con la respuesta
            success: function(data) {
                var com = $('#comment_row').val();
                $('#result_row').append("<p>"+com+"</p>");
                $('.from_row').hide();
                $('#comment_row').val("");
            }
        })
        return false;
   }
        return false;
    });
  /*Cuando pasan el puntero sobre un parrafo*/
  $(".narTitle").mouseenter(function(){

      id_comentario = $(this).attr('id');
      if id_comentario{
       $.ajax({
            url: "count_coments/"+id_comentario+"/"+id_narrative,
            type: "get",
            success: function (data) {
                if(data == 0){
                        $('.tip').text("+");
                }else{
                      $('.tip').text(data);
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
     }
        });
        /*Fin de comentario_id*/

        /*Cuando pasan el puntero sobre un parrafo*/
  $(".narStitle").mouseenter(function(){

        id_comentario = $(this).attr('id');
      if id_comentario{
       $.ajax({
            url: "count_coments/"+id_comentario+"/"+id_narrative,
            type: "get",
            success: function (data) {
                if(data == 0){
                        $('.tip').text("+");
                }else{
                      $('.tip').text(data);
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
     }
        });
        /*Fin de comentario_id*/

        /*Cuando pasan el puntero sobre un parrafo*/
  $(".narStext").mouseenter(function(){

        id_comentario = $(this).attr('id');
      if id_comentario{
       $.ajax({
            url: "count_coments/"+id_comentario+"/"+id_narrative,
            type: "get",
            success: function (data) {
                if(data == 0){
                        $('.tip').text("+");
                }else{
                      $('.tip').text(data);
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
     }
        });
        /*Fin de comentario_id*/


        /*Cuando pasan el puntero sobre un parrafo*/
  $(".narCite").mouseenter(function(){

        id_comentario = $(this).attr('id');
      if id_comentario{
       $.ajax({
            url: "count_coments/"+id_comentario+"/"+id_narrative,
            type: "get",
            success: function (data) {
                if(data == 0){
                        $('.tip').text("+");
                }else{
                      $('.tip').text(data);
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
     }
        });
        /*Fin de comentario_id*/

        /*Cuando pasan el puntero sobre un parrafo*/
  $(".coment_id").mouseenter(function(){

        id_comentario = $(this).attr('id');
      if id_comentario{
       $.ajax({
            url: "count_coments/"+id_comentario+"/"+id_narrative,
            type: "get",
            success: function (data) {
                if(data == 0){
                        $('.tip').text("+");
                }else{
                      $('.tip').text(data);
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
     }
        });
        /*Fin de comentario_id*/

/* comienza metodo para eliminar comentarios generales del modal*/
$('.content_mod').on("click","span.delete_img_comment_row", function(e){
            var id_c_t_c_row =$(this).attr('id');
             $.confirm({
                title: 'Aviso',
                content: '¿Realmente deseas eliminar el comentario y los sub comentarios?.',
                confirmButton: 'Aceptar',
                confirmButtonClass: 'btn-info',
                icon: 'fa fa-question-circle',
                animation: 'scale',
                confirm: function () {
                     var str_2 =id_c_t_c_row;
                 var id_temp =0;
                 var len_id_2 = str_2.length;
                 var len_rply_2 = 4;
                  if(len_rply_2>len_id_2){
                       idk_original_2 = len_rply_2-len_id_2;
                  }
                  else{

                        idk_original_2 = len_id_2-len_rply_2;
                  }
                  var idk_str_2 = str_2.substring(0, idk_original_2);
                  var id_temp_com = parseInt(idk_str_2)
                     $.ajax({
            url: "delete_comments_gnr/"+id_temp_com,
            type: "get",
            success: function (data) {
                if(data == "False"){
                        $.alert({
                               title: 'Aviso!',
                                content: 'No se puede eliminar!',
                            });
                }else{
                      $.alert({
                              title: 'Aviso!',
                                content: 'Comentario eliminado!',
                            });
                      $('.' + "dd, #"+id_c_t_c_row).detach();
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
                }

            });



});
/*se acabaron los delets*/
/* comienza metodo para eliminar comentarios de los comentarios del modal*/
$('.content_mod').on("click","span.delete_img_comment_row_rply", function(e){
            var id_c_t_c_row =$(this).attr('id');
             $.confirm({
                    title: 'Aviso',
                    content: '¿Realmente desea eliminar el comentario?',
                    confirmButton: 'Aceptar',
                    confirmButtonClass: 'btn-info',
                    icon: 'fa fa-question-circle',
                    animation: 'scale',
                    confirm: function () {
                         var str_2 =id_c_t_c_row;
                 var id_temp =0;
                 var len_id_2 = str_2.length;
                 var len_rply_2 = 4;
                  if(len_rply_2>len_id_2){
                       idk_original_2 = len_rply_2-len_id_2;
                  }
                  else{

                        idk_original_2 = len_id_2-len_rply_2;
                  }
                  var idk_str_2 = str_2.substring(0, idk_original_2);
                  var id_temp_com = parseInt(idk_str_2)
                     $.ajax({
            url: "delete_comment_row/"+id_temp_com,
            type: "get",
            success: function (data) {
                if(data == "False"){
                         $.alert({
                               title: 'Aviso!',
                                content: 'No se puede eliminar!',
                            });
                }else{
                       $.alert({
                                title: 'Aviso!',
                                content: 'Comentario eliminado!',
                            });
                      $('.' + "dd, #"+id_c_t_c_row).detach();
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
                    }

                });

});
/*se acabaron los delets*/
/*img_delete_comments_gnr_row*/
 $("span.delete_img_gnr_row").on({
        mouseenter: function(){
            var id_c_t_c_row_m =$(this).attr('id');
            $('.' + "dd, #"+id_c_t_c_row_m).css("opacity", "1");
        },
        mouseleave: function(){
            var id_c_t_c_row_m =$(this).attr('id');
            $('.' + "dd, #"+id_c_t_c_row_m).css("opacity", "0.4");
        },
        click: function(){
            var id_c_t_c_row =$(this).attr('id');
             $.confirm({
                    title: 'Aviso',
                    content: '¿Realmente deseas eliminar el comentario?',
                    confirmButton: 'Aceptar',
                    confirmButtonClass: 'btn-info',
                    icon: 'fa fa-question-circle',
                    animation: 'scale',
                    confirm: function () {
                         var str_2 =id_c_t_c_row;
                 var id_temp =0;
                 var len_id_2 = str_2.length;
                 var len_rply_2 = 4;
                  if(len_rply_2>len_id_2){
                       idk_original_2 = len_rply_2-len_id_2;
                  }
                  else{

                        idk_original_2 = len_id_2-len_rply_2;
                  }
                  var idk_str_2 = str_2.substring(0, idk_original_2);
                  var id_temp_com = parseInt(idk_str_2)
                     $.ajax({
            url: "delete_comment_row/"+id_temp_com,
            type: "get",
            success: function (data) {
                if(data == "False"){
                         $.alert({
                                title: 'Aviso!',
                                content: 'No se puede eliminar!',
                            });
                }else{
                      $.alert({
                                title: 'Aviso!',
                                content: 'Comentario eliminado!',
                            });
                      $('.' + "dd, #"+id_c_t_c_row).detach();
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
                    }

                });

        }
    });
    /* fin img_delete_comments_gnr_row*/
    /*eliminar comentarios generales*/
 $("span.delete_comment_gnr").on({
        mouseenter: function(){
            var id_c_t_c_row_m =$(this).attr('id');
            $('.' + "dd, #"+id_c_t_c_row_m).css("opacity", "1");
        },
        mouseleave: function(){
            var id_c_t_c_row_m =$(this).attr('id');
            $('.' + "dd, #"+id_c_t_c_row_m).css("opacity", "0.4");
        },
        click: function(){
            var id_c_t_c_row =$(this).attr('id');
             $.confirm({
                    title: 'Aviso',
                    content: '¿Realmente desea eliminar el comentario y los sub comentarios?',
                    confirmButton: 'Aceptar',
                    confirmButtonClass: 'btn-info',
                    icon: 'fa fa-question-circle',
                    animation: 'scale',
                    confirm: function () {
                         var str_2 =id_c_t_c_row;
                 var id_temp =0;
                 var len_id_2 = str_2.length;
                 var len_rply_2 = 4;
                  if(len_rply_2>len_id_2){
                       idk_original_2 = len_rply_2-len_id_2;
                  }
                  else{

                        idk_original_2 = len_id_2-len_rply_2;
                  }
                  var idk_str_2 = str_2.substring(0, idk_original_2);
                  var id_temp_com = parseInt(idk_str_2)
                     $.ajax({
            url: "delete_comments_gnr/"+id_temp_com,
            type: "get",
            success: function (data) {
                if(data == "False"){
                         $.alert({
                                title: 'Aviso!',
                                content: 'No se puede eliminar!',
                            });
                }else{
                       $.alert({
                               title: 'Aviso!',
                                content: 'Comentario eliminado!',
                            });
                      $('.' + "dd, #"+id_c_t_c_row).detach();
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       });
                    }

                });

        }
    });
    /* fin de elimina comentarios generales*/
     /*fin de replicas generales*/
/*Codigo para las replicas de los comentarios row*/
          $(".add_comment").click(function(){
               $(".from_row").show();
           });
     /*fin de replicas row*/
        /*Codigo para el listener del mensage*/
        $(".tip").on({
        mouseenter: function(){
            $(".tip").css("opacity", "1.0");
        },
        mouseleave: function(){
            $(".tip").css("opacity", "0.9");
        },
        click: function(){

              $.ajax({
            url: "search_comments/"+id_comentario+"/"+id_narrative+"/"+us_id,
            type: "get",
            success: function (data) {
                $('#id_comment_row').val(id_comentario);
                var n = id_comentario.toString();
                if(data == 0){
                    $('.content_mod').text("");
                    $('.content_mod').css({"width": "550px","font-weight": "bold", "font-size": "110%"});
                    $('#result_row').text("");
                }else{
                      $('.content_mod').html(data)
                      $("span.delete_img_comment_row").css("opacity", "0.4");
                      $("span.delete_img_comment_row_rply").css("opacity", "0.4");
                      $('.content_mod').css({"width": "550px", "font-size": "100%"});
                      $('#result_row').text("");
                }
            },
            error: function (data) {
                alert("Error. " + "Status: " + data.status + " Text: " + data.statusText);
            }
       }).done(function( msg ) {
              
                });
        }
    });

    });