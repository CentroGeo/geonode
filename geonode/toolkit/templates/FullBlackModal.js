<script type="text/javascript">
/*
This class js is for analysis tools for  crops controls areas with JQuery
*/
var glyphicon_chevron_up = false;

$(document).ready(function(){
  $("span.close_AC").click(function(){
    cerrarInfo();
    cen = new ContantsCensus();
    cen.close_tool_ca();
  });
  // map.on('click', onMapClick);
  function display_window(){
    var icon_container = $('#collapse-icon-container');
    var icon = icon_container.children();
    var bottom = (icon.hasClass('glyphicon-chevron-up') ? '93%' : '0');
    if(bottom=='0'){
      $('#collapse-icon-container').html('<i class="fa fa-arrow-up fa-1x" aria-hidden="true"></i>');
    }else {
      $('#collapse-icon-container').html('<i class="fa fa-arrow-down fa-1x" aria-hidden="true"></i>');
    }

    $('#collapse-icon-container').animate({
        bottom: bottom,
    }, 600);//Down th raw
    $('#query-result2').slideToggle('slow');
    icon.toggleClass('glyphicon-chevron-up').toggleClass('glyphicon-chevron-down');
  }
  $("#collapse-icon-container").click(function(){
    glyphicon_chevron_up = (glyphicon_chevron_up ? false : true);
    // console.log(glyphicon_chevron_up);
    openInfo();
  });
  function cerrarInfo() {
    $("#collapse-icon-container").hide("slow");
    $('#query-result2').slideToggle('slow');
}

});

function openInfo() {
    var bottom = (glyphicon_chevron_up ? '93%' : '0');
    if(glyphicon_chevron_up){
      $('#collapse-icon-container').html('<i class="fa fa-arrow-down fa-1x" aria-hidden="true"></i>');
    }else {
      $('#collapse-icon-container').html('<i class="fa fa-arrow-up fa-1x" aria-hidden="true"></i>');
    }
    $('#collapse-icon-container').animate({
        bottom: bottom,
    }, 600);//Down th raw
    $('#query-result2').slideToggle('slow');
}


</script>
