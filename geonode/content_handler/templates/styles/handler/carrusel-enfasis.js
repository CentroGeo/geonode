jQuery(function($) {
    'use strict';
    $(document).ready(function() {
        /*******************************************************
            COMPONENT [TOGGLE]
        *******************************************************/
        $('.component .component-nav .nav-item').on('click', function() {
            // TOGGLE [CONTENT]
            var dataTOGGLE = $(this).data('toggle');
            $(this).closest('.component-wrapper').find('.component-content .content-item').attr('data-hidden', 'true');
            $(this).closest('.component-wrapper').find('.component-content #' + dataTOGGLE).attr('data-hidden', 'false');
            // TOGGLE [NAVIGATION][BACKGROUND]
            var imageTHUMB = $(this).find('img').attr('src');
            var imageBACKG = imageTHUMB.replace('_thumb', '');
            $(this).siblings('.nav-item').removeClass('active');
            $(this).closest('.component').css('background-image', 'url(' + imageBACKG + ')');
            $(this).addClass('active');
        });
        // ------
    });
});