  var id_ms = {{ms.id}};
  var id_template = {{ms.template}};
  var tmp_template = ['Parallo','Bibendum','Editorial','Prisma'];
  var template_ms = tmp_template[id_template];

  var combo_template = "<select id='ms_thematic_cb_"+id_ms+"'' class='section_type_cb'>";

  //FORMATOS DE PRESENTACION
  if(id_template==1){combo_template += "<option value='1' selected>Parallo</option>";}
  else{combo_template += "<option value='1'>Parallo</option>";}

  if(id_template==2){combo_template += "<option value='2' selected>Bibendum</option>";}
  else{combo_template += "<option value='2'>Bibendum</option>";}

  if(id_template==3){combo_template += "<option value='3' selected>Editorial</option>";}
  else{combo_template += "<option value='3'>Editorial</option>";}

  if(id_template==4){combo_template += "<option value='4' selected>Prisma</option>";}
  else{combo_template += "<option value='4'>Prisma</option>";}

  $("#thematic_ms_"+id_ms).html(" <span class='ms_themes_cb'> "+combo_template+" </span>");

  $(".section_type_cb").change(function(){
    var id_ms_compuest = $(this).attr('id');

    var id_ms_compuest_array = id_ms_compuest.split("_");
    var id_ms = id_ms_compuest_array[3];

    var id_tematics = $("#ms_thematic_cb_"+id_ms+" option:selected").val();
    console.log(id_tematics);

    query_data = {
        'id_ms':id_ms,
        'id_tematics': id_tematics
    }
    $.ajax({
      data: {'query_data': JSON.stringify(query_data),
      csrfmiddlewaretoken: '{{ csrf_token }}'
      },
      url: '{% url "hd_save_section_type" %}',
      type: 'POST',
      success : function(data) {
      // console.log('<iframe src="{{site}}'+data[0]+'" width="590" height="800"/>');
      },
      error : function(message) {
      console.log(message);
      }
    });
  });
