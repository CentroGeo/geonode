<script type="text/javascript">
var CONSTANT_SURVEY = "SURVEY_GENERATE";
$(document).ready(function(){
  $('#set_charting_tool_select').click(function(){
  var tool_charting_list = [];
  var mapid = {{mapid}};
  $('input[name="charting_tool_selected"]:checked').each(function() {
     tool_charting_list.push(parseInt(this.value));
  });

 /* $.ajax({
 data: {'tool_list': JSON.stringify(tool_charting_list),'mapid': JSON.stringify(mapid),
        csrfmiddlewaretoken: '{{ csrf_token }}'
       },
 url: '{% url "set_charting_tool" %}',
 type: 'POST',
 success : function(data) {
           console.log("successful");
 },
 error : function(message) {
         console.log(message);
      }
 });

});*/
  $('#set_charting_tool_select2').click(function(){
    var tool_charting_list = [];
    var tool_charting_list_false = [];
    var mapid = "{{mapid|safe}}";
    $('input[name="charting_tool_selected"]:checked').each(function() {
      //  tool_charting_list[this.value].append(parseInt(true));
       tool_charting_list.push(parseInt(this.value));
    });
    $('input[name="charting_tool_selected"]:not(:checked)').each(function() {
      //  tool_charting_list[this.value].append(parseInt(false));
       tool_charting_list_false.push(parseInt(this.value));
    });

    $.ajax({
   data: {'tool_list': JSON.stringify(tool_charting_list),'tool_list_false': JSON.stringify(tool_charting_list_false),'mapid': JSON.stringify(parseInt(mapid)),
          csrfmiddlewaretoken: '{{ csrf_token }}'
         },
   url: '{% url "set_charting_tool_map" %}',
   type: 'POST',
   success : function(data) {
             console.log("successful");
   },
   error : function(message) {
           console.log(message);
        }
   });

  });
$('#add_tools2').click(function(){
  var mapid = "{{mapid|safe}}";
  $.ajax({
 data: {'mapid': JSON.stringify(parseInt(mapid)),
        csrfmiddlewaretoken: '{{ csrf_token }}'
       },
 url: '{% url "get_charting_tool_map" %}',
 type: 'POST',
 success : function(data) {
            $('.set-tool-check').html("");
           var list_tools = data.list_tools;
           var list_tools_all = data.list_tools_all;
           if (list_tools.length>0) {
            //  $('.set-tool-check').html(list_tools[0][0]);
             for (var i = 0; i <= list_tools.length; i++) {
               if (list_tools[i][2]==1) {
                 $('.set-tool-check').append('<input type="checkbox" name="charting_tool_selected" title="'+list_tools[i][1]+'" id="ch'+list_tools[i][0]+'" value="'+list_tools[i][0]+'" checked>'+list_tools[i][1]+'<br>');

               }else {
                 $('.set-tool-check').append('<input type="checkbox" name="charting_tool_selected" title="'+list_tools[i][1]+'" id="ch'+list_tools[i][0]+'" value="'+list_tools[i][0]+'" >'+list_tools[i][1]+'<br>');
               }
             }
           }
          //  else{
          //    if (list_tools.length==0) {
          //      $('.set-tool-check').html("");
          //      for (var i = 0; i <= list_tools_all.length; i++) {
          //        $('.set-tool-check').append('<input type="checkbox" name="charting_tool_selected" title="'+list_tools_all[i][1]+'" id="ch'+list_tools_all[i][0]+'" value="'+list_tools_all[i][0]+'">'+list_tools_all[i][1]+'<br>');
          //      }
          //    }else {
          //     //  $('.set-tool-check').html("");
          //      for (var i = 0; i < list_tools_all.length; i++) {
          //        console.log("ñññññññññññññññññññ");
           //
          //        if (list_tools[i][0]==list_tools_all[i][0]) {
          //          $('.set-tool-check').append('<input type="checkbox" name="charting_tool_selected" title="'+list_tools_all[i][1]+'" id="ch'+list_tools_all[i][0]+'" value="'+list_tools_all[i][0]+'" checked>'+list_tools_all[i][1]+'<br>');
           //
          //        }else {
          //          $('.set-tool-check').append('<input type="checkbox" name="charting_tool_selected" title="'+list_tools_all[i][1]+'" id="ch'+list_tools_all[i][0]+'" value="'+list_tools_all[i][0]+'" >'+list_tools_all[i][1]+'<br>');
          //        }
          //      }
          //    }
          //  }
 },
 error : function(message) {
         console.log(message);
      }
 });

});

});


</script>
