// colorPicker para campos de color
    // color de fondo
$('#id_background').closest('div').addClass('input-group colorpicker-component')
$('#id_background').closest('div').append("<span class='input-group-addon'><i></i></span>")
$('#id_background').closest('div').attr('id', 'colorBack')
    // color de texto
$('#id_font_color').closest('div').addClass('input-group colorpicker-component')
$('#id_font_color').closest('div').append("<span class='input-group-addon'><i></i></span>")
$('#id_font_color').closest('div').attr('id', 'colorFont')
    // color de borde superior
$('#id_top_border_color').closest('div').addClass('input-group colorpicker-component')
$('#id_top_border_color').closest('div').append("<span class='input-group-addon'><i></i></span>")
$('#id_top_border_color').closest('div').attr('id', 'colorBorderTop')
    // color de borde inferior
$('#id_bottom_border_color').closest('div').addClass('input-group colorpicker-component')
$('#id_bottom_border_color').closest('div').append("<span class='input-group-addon'><i></i></span>")
$('#id_bottom_border_color').closest('div').attr('id', 'colorBorderBottom')
// colorPicker para fondo
$('#colorBack').colorpicker().on('changeColor', function() {
    $('#innerDiv').css({'background-color':  $('#id_background').val()});
});
// colorPicker para texto
$('#colorFont').colorpicker().on('changeColor', function() {
    $('#title').css({'color':  $('#id_font_color').val()});
});
// colorPicker para borde superior y otras opciones
let topThickness = '{{ subsect.headersectionstyle.top_border_thickness }}'; 
let topStyle = '{{ subsect.headersectionstyle.top_border_style }}'; 
let topColor = '{{ subsect.headersectionstyle.top_border_color }}';
if (topThickness.length == 0) {
    topThickness = $('#id_top_border_thickness').val();
    topStyle = $('#id_top_border_style').val();
    topColor = $('#id_top_border_color').val();
}
$('#id_top_border_thickness').change(function() {
    topThickness = $(this).val();
    $('#innerDiv').css({'border-top':  topThickness + "px " + topStyle + " " + topColor});
})
$('#id_top_border_style').change(function() {
    topStyle = $(this).val();
    $('#innerDiv').css({'border-top':  topThickness + "px " + topStyle + " " + topColor});
})
$('#colorBorderTop').colorpicker().on('changeColor', function() {
    topColor = $('#id_top_border_color').val();
    $('#innerDiv').css({'border-top':  topThickness + "px " + topStyle + " " + topColor});
});
// colorPicker para borde inferior y otras opciones
let bottomThickness = '{{ subsect.headersectionstyle.bottom_border_thickness }}'; 
let bottomStyle = '{{ subsect.headersectionstyle.bottom_border_style }}'; 
let bottomColor = '{{ subsect.headersectionstyle.bottom_border_color }}';
if (bottomThickness.length == 0) {
    bottomThickness = $('#id_bottom_border_thickness').val();
    bottomStyle = $('#id_bottom_border_style').val();
    bottomColor = $('#id_bottom_border_color').val();
}
$('#id_bottom_border_thickness').change(function() {
    bottomThickness = $(this).val();
    $('#innerDiv').css({'border-bottom':  bottomThickness + "px " + bottomStyle + " " + bottomColor});
})
$('#id_bottom_border_style').change(function() {
    bottomStyle = $(this).val();
    $('#innerDiv').css({'border-bottom':  bottomThickness + "px " + bottomStyle + " " + bottomColor});
})
$('#colorBorderBottom').colorpicker().on('changeColor', function() {
    bottomColor = $('#id_bottom_border_color').val();
    $('#innerDiv').css({'border-bottom':  bottomThickness + "px " + bottomStyle + " " + bottomColor});
});
// edicion de estilo de vista previa
    // subrayado
$('#id_underline').change(function() {
    if ($(this).is(':checked')) {
        $('#title').css({'text-decoration':  'underline'});
    } else {
        $('#title').css({'text-decoration':  'none'});
    }
})
    // alineacion
let al;
$('input:radio[name=text_align]').change(function () {
    $('#title').css({'text-align': $(this).val()})
    if($('#id_width_div').is(':checked')) {
        if($(this).val() == 'left') {
            al = '-left';
            $('#innerDiv').css({'margin-left': 0});
            $('#innerDiv').css({'margin-right': 'auto'});
        } else if ($(this).val() == 'right') {
            al = '-right';
            $('#innerDiv').css({'margin-right': 0});
            $('#innerDiv').css({'margin-left': 'auto'});
        } else {
            al = ''
            $('#innerDiv').css({'margin': 'auto'});
        }
    }
})
    // tamaño del div
$('#id_size_div').change(function() {
    $('#innerDiv').css({'padding-top': $(this).val() + 'px'})
    $('#innerDiv').css({'padding-bottom': $(this).val() + 'px'})
})
    // tamaño de fuente
$('#id_size_font').change(function() {
    $('#title').css({'font-size': $(this).val() + 'px'})
})
// se verifican opciones iniciales para subrayado
if ($('#id_underline').is(':checked')) {
    $('#title').css({'text-decoration':  'underline'});
} else {
    $('#title').css({'text-decoration':  'none'});
}
// se verifican opciones iniciales para alineado de texto
var align = '{{ subsect.headersectionstyle.text_align }}';
if (align.length == 0) {
    $('#title').css({'text-align': 'center'});
}
// Border de div
let topIds = ['id_top_border_thickness', 'id_top_border_style', 'id_top_border_color']
let bottomIds = ['id_bottom_border_thickness', 'id_bottom_border_style', 'id_bottom_border_color']
function idBorder(ids,op) {
    if (!op) {
        for (let i=0;i<ids.length;i++) {
            $('#' + ids[i]).hide();
            $('#div_' + ids[i]).hide();
        }
    } else {
        for (let i=0;i<ids.length;i++) {
            $('#' + ids[i]).show();
            $('#div_' + ids[i]).show();
        }
    }
}
// se muestran o no opciones de borde superior
if ( ! $('#id_top_border').is(':checked') ) {
    idBorder(topIds, false);
}
$('#id_top_border').change(function() {
    if ( $(this).is(':checked') ) {
        idBorder(topIds, true);
        $('#innerDiv').css({'border-top':  $('#id_top_border_thickness').val() + "px " + $('#id_top_border_style').val() + " " + $('#id_top_border_color').val()});
    } else {
        idBorder(topIds, false);
        $('#innerDiv').css({'border-top': 'none'});
    }
})
// se muestran o no opciones de border inferior
if ( ! $('#id_bottom_border').is(':checked') ) {
    idBorder(bottomIds, false);
}
$('#id_bottom_border').change(function() {
    if ( $(this).is(':checked') ) {
        idBorder(bottomIds, true);
        $('#innerDiv').css({'border-bottom':  $('#id_bottom_border_thickness').val() + "px " + $('#id_bottom_border_style').val() + " " + $('#id_bottom_border_color').val()});
    } else {
        idBorder(bottomIds, false);
        $('#innerDiv').css({'border-bottom': 'none'});
    }
})
// se usa o no imagen de fondo
let imageURL;
function checkImage() {
    let imageIds = ['id_image','id_image_position_fixed','id_image_position','id_image_repeat']
    if ( $('#id_has_imagebackground').is(':checked') ) {
        for(let i=0;i<imageIds.length;i++) {
            $('#' + imageIds[i]).show()
            $('#div_' + imageIds[i]).show()
            if (imageURL) {
                $('#outDiv')
                .css({'background-image': 'url(' + imageURL + ')'}) 
            } else {
                $('#outDiv')
                .css({'background-image': 'url({{MEDIA_URL}}{{ subsect.headersectionstyle.image }})'}) 
            }
        }
    } else {
        for(let i=0;i<imageIds.length;i++) {
            $('#' + imageIds[i]).hide()
            $('#div_' + imageIds[i]).hide()
            $('#outDiv')
              .css({'background-image': 'none'})
            attach();
            repeat();
            $('#outDiv').css({'background-position': $('#id_image_position').val()})
        }
    }
}
checkImage();
$('#id_has_imagebackground').change(function() {
    checkImage();
})
$('#id_image').change(function(input) {
    if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imageURL = e.target.result;
          $('#outDiv')
            .css({'background-image': 'url(' +e.target.result +')'})
        };
        reader.readAsDataURL(input.target.files[0]);
    }
})
function attach() {
    if ($('#id_image_position_fixed').is(':checked')) {
        $('#outDiv').css({'background-attachment': 'fixed'})
    } else {
        $('#outDiv').css({'background-attachment': 'local'})
    }
}
$('#id_image_position_fixed').change(function() {
    attach();
})
$('#id_image_position').change(function() {
    $('#outDiv').css({'background-position': $(this).val()})
})
function repeat() {
    if ($('#id_image_repeat').is(':checked')) {
        $('#outDiv').css({'background-repeat': 'repeat'})
    } else {
        $('#outDiv').css({'background-repeat': 'no-repeat'})
    }
}
$('#id_image_repeat').change(function() {
    repeat();
})
function widthDiv() {
    if($('#id_width_div').is(':checked')) {
        $('#innerDiv').css({'width': 'fit-content'});
        if (typeof al == 'undefined') {
            $('#innerDiv').css({'margin{% if subsect.headersectionstyle.text_align == 'left' %}-right{% elif subsect.headersectionstyle.text_align == 'right' %}-left{% endif %}': 'auto'});
        } else {
            if(al == '-left') {
                $('#innerDiv').css({'margin-right' : 'auto'});
            } else if (al == '-right') {
                $('#innerDiv').css({'margin-left' : 'auto'});
            } else {
                $('#innerDiv').css({'margin' : 'auto'});
            }
        }
    } else {
		$('#innerDiv').css({'width': 'auto'});
		$('#innerDiv').css({'margin-left': '0'});
		$('#innerDiv').css({'margin-right': '0'});
        $('#innerDiv').css({'margin{% if subsect.headersectionstyle.text_align == 'left' %}-right{% elif subsect.headersectionstyle.text_align == 'right' %}-left{% endif %}': 0});
    }
}
widthDiv();
$('#id_width_div').change(function() {
    widthDiv();
})