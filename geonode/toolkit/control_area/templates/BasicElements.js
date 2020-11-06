<script type="text/javascript">
  $('span#installations_basic').click(function() {
    cleanBasics();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/installation_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-installations").show();
  });
  $('span#technology_basic').click(function(){
    cleanBasics();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/technology_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-basic").show();
  });
  $('span#problematic_basic').click(function(){
    cleanBasics();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/problematic_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-problematic").show();
  });
  $('span#destination_basic').click(function(){
    cleanBasics();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/chain_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-destination").show();
  });
  $('span#surfaces_basic').click(function(){
    cleanBasics();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/surface_pink.png" width="25px;" title="Distribución de otras superficies" alt="pv"/>');
    $("#ejecute-surfaces").show();
  });

  function cleanBasics(){
    $('#technology_basic').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/technology.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#destination_basic').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/chain.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#problematic_basic').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/problematic.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#installations_basic').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/installation.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#surfaces_basic').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/surface.png" width="25px;" title="Distribución de otras superficies" alt="pv"/>');
    $("#ejecute-installations").hide();
    $("#ejecute-basic").hide();
    $('#ejecute-problematic').hide();
    $('#ejecute-destination').hide();
    $('#ejecute-distribution').hide();
    $('#ejecute-surfaces').hide();
  }
</script>
