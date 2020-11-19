<script type="text/javascript">
  $('span#distribution').click(function() {
    cleanFarm();
    $(this).html('<img src="{{STATIC_URL}}idegeo/soa_toolkit/img/ac/ganado_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-distribution").show();
  });
  $('span#distribution_production').click(function(){
    cleanFarm();
    $(this).html('<img src="{{STATIC_URL}}idegeo/soa_toolkit/img/ac/milk_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-distribution-production").show();
  });

  $('span#distribution_surfaces').click(function(){
    cleanFarm();
    $(this).html('<img src="{{STATIC_URL}}idegeo/soa_toolkit/img/ac/surface_pink.png" width="25px;" title="Distribución de otras superficies" alt="pv"/>');
    $("#ejecute-distribution-surfaces").show();
  });

  function cleanFarm(){
    $('#distribution').html('<img src="{{STATIC_URL}}idegeo/soa_toolkit/img/ac/ganado.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#distribution_production').html('<img src="{{STATIC_URL}}idegeo/soa_toolkit/img/ac/milk.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#distribution_surfaces').html('<img src="{{STATIC_URL}}idegeo/soa_toolkit/img/ac/surface.png" width="25px;" title="Distribución de otras superficies" alt="pv"/>');
    $('#ejecute-distribution').hide();
    $('#ejecute-distribution-production').hide();
    $('#ejecute-distribution-surfaces').hide();
  }
</script>
