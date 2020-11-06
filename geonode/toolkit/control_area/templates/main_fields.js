<script type="text/javascript">

  $('#pv_mf').click(function() {
    console.log(geometry_global.length);
    if (geometry_global.length==0) {
         remove_rectangle();
        alert("Selecciona una capa para hacer la consulta");
        return;
    }else{
      cleanHalfWayModal();
      $('#quer-crops').show();
      var census = new ContantsCensus();
      census.getSelectionCensus(geometry_global,id_layerids_global, type_global, "CROPS");
    }
  });
  $('#farm_mf').click(function() {
    if (geometry_global.length==0) {
         remove_rectangle();
        alert("Selecciona una capa para hacer la consulta");
        return;
    }
    cleanHalfWayModal();
    $('#quer-farm').show();
    var census = new ContantsCensus();
    census.getSelectionCensus(geometry_global,id_layerids_global, type_global, "FARM");
  });
  $('#forest_mf').click(function() {
    if (geometry_global.length==0) {
         remove_rectangle();
        alert("Selecciona una capa para hacer la consulta");
        return;
    }
    cleanHalfWayModal();
    $('#quer-forest').show();
    var census = new ContantsCensus();
    census.getSelectionCensus(geometry_global,id_layerids_global, type_global, "FOREST");
  });
  $('#industry_mf').click(function() {
    if (geometry_global.length==0) {
         remove_rectangle();
        alert("Selecciona una capa para hacer la consulta");
        return;
    }
    cleanHalfWayModal();
    $('#quer-industry').show();
    // var census = new ContantsCensus();
    // census.getSelectionCensus(geometry_global,id_layerids_global, type_global, "INDUSTRY");
  });
</script>
