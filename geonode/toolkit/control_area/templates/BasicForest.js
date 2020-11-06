<script type="text/javascript">
  $('span#forest-technology').click(function() {
    cleanBasicsForest();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/technology_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-forest-technology").show();
  });
  $('span#forest-installation').click(function(){
    cleanBasicsForest();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/installation_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-forest-installation").show();
  });
  $('span#forest-destination').click(function(){
    cleanBasicsForest();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/wood_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-forest-destination").show();
  });
  $('span#forest-not-wood').click(function(){
    cleanBasicsForest();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/fungus_pink.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $("#ejecute-forest-not-wood").show();
  });
  $('span#forest-surfaces').click(function(){
    cleanBasicsForest();
    $(this).html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/surface_pink.png" width="25px;" title="Distribución de otras superficies" alt="pv"/>');
    $("#ejecute-forest-surface").show();
  });
  function cleanBasicsForest(){
    $('#forest-technology').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/technology.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#forest-destination').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/wood.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#forest-not-wood').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/fungus.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#forest-installation').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/installation.png" width="25px;" title="Instalaciones Forestales" alt="pv"/>');
    $('#forest-surfaces').html('<img src="{{STATIC_URL}}soa_toolkit/img/ac/surface.png" width="25px;" title="Distribución de otras superficies" alt="pv"/>');
    $('#ejecute-forest-installation').hide();
    $('#ejecute-forest-technology').hide();
    $("#ejecute-forest-destination").hide();
    $('#ejecute-forest-not-wood').hide();
    $('#ejecute-forest-surface').hide();

  }
</script>
