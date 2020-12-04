jQuery(function($) {
    'use strict';
    $(document).ready(function() {
        /*******************************************************
            SET-DIMENSION [LOCALSTORAGE]
        *******************************************************/
        // SET-DIMENSION
        $('.btn-wrapper a').on('click', function() {
            var dataLINK = $(this).data('link');
            var setDimension = {
                'dimSelect': 'select',
                'dimValue': dataLINK
            };
            localStorage.setItem('data_RTMG', JSON.stringify(setDimension));
        });
        // GET-DIMENSION
        var getDimension = JSON.parse(localStorage.getItem('data_RTMG'));
        $('.btn-wrapper .alert .get-dimension').text(getDimension.dimValue);
    });
});