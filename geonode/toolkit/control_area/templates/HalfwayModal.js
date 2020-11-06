<script type="text/javascript">

  $('#close-halfway').click(function() {
     $("#halfway-modal").toggle("slide", {direction: "right"});
     $("#halfway-modal").removeClass('active');
     $('#close-halfway').hide();
     show_default(CONSTANT_CONTROL_AREAS);
     cleanHalfWayModal();
  });
  $('#hide-halfway').click(function() {
     $("#halfway-modal").toggle("slide", {direction: "right"});
     $("#halfway-modal").removeClass('active');
     $('#close-halfway').hide();
     $('.arrow-left').show();
  });
  $('.draw-square').click(function() {
    is_OpenModalHalfWay = true;
    SquereDraw.enable();
    cleanHalfWayModal();
    $('.main_fields').show();
  });
  $('#CROPS_ANALISYS_SPRING-div').on("click","span.draw-square", function(e){
    SquereDraw.enable();
    cleanHalfWayModal();
    $('.main_fields').show();
  });
  $('.arrow-left').click(function() {
    $("#halfway-modal").toggle("slide", {direction: "right"});
    $("#halfway-modal").removeClass('active');
    $('.arrow-left').hide();
    $('#close-halfway').show();
  });
  $('.back-menu').click(function() {
    cleanHalfWayModal();
    $('.main_fields').show();
  });
function cleanHalfWayModal(){
  $('.main_fields').hide();
  $('#control-area-div-modal').hide();
  $('#control-area-tbl-second').hide();
  $('#quer-farm').hide();
  $('#quer-crops').hide();
  $('#quer-industry').hide();
  $('#main-agricola').hide();
  $('#main-forest').hide();
  $('#main-forest-graf').hide();
  $('#main-distribution').hide();
  $('#ejecute-distribution').html("");
  $('#ejecute-distribution-production').html("");
  $('#ejecute-destination').html("");
  $('#ejecute-problematic').html("");
  $('#ejecute-distribution').html("");
  $('#ejecute-basic').html("");
}
</script>
