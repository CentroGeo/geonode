<script type="text/javascript">
$(document).ready(function(){
hide_ca();
	var arr_attribute = {{ arr_attribute|safe }};
	$('#id_state').prop("readonly", true);
    $('#id_ageb').prop("readonly", true);
    $('#id_mun').prop("readonly", true);
    $('#id_ac').prop("readonly", true);

$('#add-attribute').click(function(){
   var state = $('#ac_statal_select').val();
   var mun = $('#ac_mun_select').val();
   var ageb = $('#ac_ageb_select').val();
   var ac = $('#ac_ac_select').val();
   $('#id_state').val(state);
   $('#id_mun').val(mun);
   $('#id_ageb').val(ageb);
   $('#id_ac').val(ac);

  //  $('#attribute-layer').modal('toggle');

});
$('#ac_statal_select').click(function(){
	  $('#state').val($(this).val());
});
$('#ac_mun_select').click(function(){
	  $('#mun').val($(this).val());
});
$('#ac_ageb_select').click(function(){
	  $('#ageb').val($(this).val());
});
$('#ac_ac_select').click(function(){
	  $('#ac').val($(this).val());
});

  $('#id_coverages').change(function(){
    hide_ca();
    var coverage = $(this).val();
    if (coverage=="0") {
        return;
    }
		$('#coverages').val(coverage);
    if (coverage=="statal") {
    	$('#ac_statal_select option').remove();
	   $('#ac_statal_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL ESTADO O ENTIDAD---"));
        for (i = 0; i < arr_attribute.length; i++) {
        	$('#ac_statal_select')
		        .append($('<option>', {value : arr_attribute[i] })
		        .text(arr_attribute[i]));
        }
        $('#ac_statal_select').show();
    }
    if (coverage=="mun") {
        $('#ac_statal_select').show();
        $('#ac_mun_select').show();
        $('#ac_statal_select option').remove();
       $('#ac_statal_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL ESTADO O ENTIDAD---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_statal_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
        $('#ac_mun_select option').remove();
       $('#ac_mun_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL MUNICIPIO---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_mun_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }

    }
    if (coverage=="ageb") {
        $('#ac_statal_select').show();
        $('#ac_mun_select').show();
        $('#ac_ageb_select').show();
        $('#ac_statal_select option').remove();
       $('#ac_statal_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL ESTADO O ENTIDAD---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_statal_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
       $('#ac_mun_select option').remove();
       $('#ac_mun_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL MUNICIPIO---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_mun_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
        $('#ac_ageb_select option').remove();
       $('#ac_ageb_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL AGEB---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_ageb_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
    }
    if (coverage=="ac") {
        $('#ac_statal_select').show();
        $('#ac_mun_select').show();
        $('#ac_ac_select').show();
        $('#ac_ageb_select').show();
         $('#ac_statal_select option').remove();
       $('#ac_statal_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL ESTADO O ENTIDAD---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_statal_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
       $('#ac_mun_select option').remove();
       $('#ac_mun_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL MUNICIPIO---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_mun_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
        $('#ac_ac_select option').remove();
       $('#ac_ac_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL AREA DE CONTROL---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_ac_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }
          $('#ac_ageb_select option').remove();
       $('#ac_ageb_select')
        .append($('<option>', { value : '0' })
        .text("---SELECCIONA LA CLAVE DEL AGEB---"));
        for (i = 0; i < arr_attribute.length; i++) {
            $('#ac_ageb_select')
                .append($('<option>', {value : arr_attribute[i] })
                .text(arr_attribute[i]));
        }

    }
    // $('#attribute-layer').modal('toggle');
  });
  function hide_ca(){
    $('#ac_statal_select').hide();
    $('#ac_mun_select').hide();
    $('#ac_ageb_select').hide();
    $('#ac_ac_select').hide();
}
});

</script>
