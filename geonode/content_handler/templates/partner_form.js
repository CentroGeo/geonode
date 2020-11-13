document.getElementById("id_link").classList.add('form-control')
document.getElementById("id_name").classList.add('form-control')
$("#sortable").sortable({
    grid: [ 20, 10 ],
    stop: function(e) {
        if($('#logo')){
            $('#id_stack_order').val($('#logo').index() + 1)
        }
        if($('#current')) {
            $('#id_stack_order').val($('#current').index() + 1)
        }
    }
});
$("#sortable").disableSelection();