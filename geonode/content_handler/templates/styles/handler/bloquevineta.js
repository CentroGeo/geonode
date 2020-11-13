jQuery(function($) {
    'use strict';
    $(document).ready(function() {
        /*******************************************************
            COMPONENT [CLICK]
        *******************************************************/
        $('.component .block-item .item-data').on('click', function() {
            var dataLNK = $(this).data('link');
            var dataTRG = $(this).data('target');
            if (dataTRG == '_blank') {
                window.open(dataLNK);
            } else {
                window.location = dataLNK;
            }
        });
        // ------
    });
});