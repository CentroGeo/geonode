jQuery(function($) {
    'use strict';
    $(document).ready(function() {
        var pageIDE = $('body').attr('class').split(' ')[0];
        var pageTPO = pageIDE.split('_')[0];
        var numLEVS = pageIDE.split('_')[1];
        var parentLEV = pageTPO + '_' + numLEVS.substring(0, 2);
        /*******************************************************
            XTC-IDEGEO [...]
        *******************************************************/
        // var xtcCODE = '' +
        //     '<div id="xtc-idegeo">' +
        //     '<div class="content-nav">' +
        //     '<ul class="nav-menu">' +
        //         '<li class="sty_01"><a href="styles_01.html">STY-01</a></li>' +
        //         '<li class="com_01"><a href="com_01.html">COM-01</a></li>' +
        //         '<li class="com_02"><a href="com_02.html">COM-02</a></li>' +
        //         '<li class="com_03"><a href="com_03.html">COM-03</a></li>' +
        //         '<li class="com_04"><a href="com_04.html">COM-04</a></li>' +
        //         '<li class="com_00"><a href="com_00.html">COM-00</a></li>' +
        //         '<li class="map_00"><a href="map_00.html">MAP-00</a></li>' +
        //     '</ul>' +
        //     '</div>' +
        //     '</div>';
        // $('#body-wrapper').append(xtcCODE);
        // setTimeout(function() {
        //     var xtcMENU = '#xtc-idegeo ul.nav-menu li.' + pageIDE;
        //     $(xtcMENU).addClass('active');
        // }, 300);
        /*******************************************************
            [...]
        *******************************************************/
        var navCODE = '' +
            '<div class="content-nav">' +
                '<ul class="nav-menu">' +
                    '<li class="doc_01"><a href="doc_01.html">Acerca de RTMG</a></li>' +
                    '<li class="com_01"><a href="com_01.html">Noticias</a></li>' +
                    '<li class="tem_01"><span>Migración</span>' +
                        '<ul class="nav-child">' +
                            '<li class="tem_0101"><a href="tem_0101.html">Migración 01</a></li>' +
                            '<li class="tem_0102"><a href="tem_0102.html">Migración 02</a></li>' +
                            '<li class="tem_0103"><a href="tem_0103.html">Migración 03</a></li>' +
                            '<li class="tem_0104"><a href="tem_0104.html">Migración 04</a></li>' +
                            '<li class="tem_0105"><a href="tem_0105.html">Migración 05</a></li>' +
                            '<li class="tem_0106"><a href="tem_0106.html">Migración 06</a></li>' +
                        '</ul>' +
                    '</li>' +
                    '<li class="tem_02"><span>Aspectos sociales</span>' +
                        '<ul class="nav-child">' +
                            '<li class="tem_0201"><a href="tem_0201.html">Temática 0201</a></li>' +
                            '<li class="tem_0202"><a href="tem_0202.html">Temática 0202</a></li>' +
                            '<li class="tem_0203"><a href="tem_0203.html">Temática 0203</a></li>' +
                            '<li class="tem_0204"><a href="tem_0204.html">Temática 0204</a></li>' +
                            '<li class="tem_0205"><a href="tem_0205.html">Temática 0205</a></li>' +
                            '<li class="tem_0206"><a href="tem_0206.html">Temática 0206</a></li>' +
                        '</ul>' +
                    '</li>' +
                    '<li class="tem_03"><span>Aspectos materiales</span>' +
                        '<ul class="nav-child">' +
                            '<li class="tem_0301"><a href="tem_0301.html">Temática 0301</a></li>' +
                            '<li class="tem_0302"><a href="tem_0302.html">Temática 0302</a></li>' +
                            '<li class="tem_0303"><a href="tem_0303.html">Temática 0303</a></li>' +
                            '<li class="tem_0304"><a href="tem_0304.html">Temática 0304</a></li>' +
                            '<li class="tem_0305"><a href="tem_0305.html">Temática 0305</a></li>' +
                            '<li class="tem_0306"><a href="tem_0306.html">Temática 0306</a></li>' +
                        '</ul>' +
                    '</li>' +
                    '<li class="tem_04"><span>Aspectos históricos</span>' +
                        '<ul class="nav-child">' +
                            '<li class="tem_0401"><a href="tem_0401.html">Temática 0401</a></li>' +
                            '<li class="tem_0402"><a href="tem_0402.html">Temática 0402</a></li>' +
                            '<li class="tem_0403"><a href="tem_0403.html">Temática 0403</a></li>' +
                            '<li class="tem_0404"><a href="tem_0404.html">Temática 0404</a></li>' +
                            '<li class="tem_0405"><a href="tem_0405.html">Temática 0405</a></li>' +
                            '<li class="tem_0406"><a href="tem_0406.html">Temática 0406</a></li>' +
                        '</ul>' +
                    '</li>' +

                    '<li class="com_02"><span>Directorio</span>' +
                        '<ul class="nav-child">' +
                            '<li class="com_0201"><a href="com_0201.html">CentroGeo</a></li>' +
                            '<li class="com_0202"><a href="com_0202.html">CIDE</a></li>' +
                            '<li class="com_0203"><a href="com_0203.html">CIESAS</a></li>' +

                            // '<li class="com_0204"><a href="com_0204.html">CNDH - México</a></li>' +

                            '<li class="com_0205"><a href="com_0205.html">COLEF</a></li>' +
                            '<li class="com_0206"><a href="com_0206.html">ECOSUR</a></li>' +
                            '<li class="com_0207"><a href="com_0207.html">FLACSO - Guatemala</a></li>' +
                            '<li class="com_0208"><a href="com_0208.html">MORA</a></li>' +
                            '<li class="com_0209"><a href="com_0209.html">USAC</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
            '</div>';
        $('#header .header-menu').append(navCODE);
        setTimeout(function() {
            var headerMENU = '#header .content-nav ul.nav-menu li.' + pageIDE;
            $(headerMENU).addClass('active');
            var parentMENU = '#header .content-nav ul.nav-menu > li.' + parentLEV;
            $(parentMENU).addClass('active');
        }, 300);
        /*******************************************************
            DRAWER-NAV [WRAPPER-CODE] [ACTIVE]
        *******************************************************/
        if ($('#drawer-nav').length) {
            // DRAWER [WRAPPER-CODE]
            var drawerCODE = '' +
                // DRAWER-HEADER
                '<div id="drawer-header">' +
                '<div class="header-wrapper">' +
                '<div class="container-full">' +
                '<div class="content">' +
                '<div class="head-logo"><a class="sitelogo" href="https://www.conacyt.gob.mx/"><img src="/static/rtmg2/img/logo/logo_conacyt.svg" alt="Logo CONACYT" title="Consejo Nacional de Ciencia y Tecnología"></a></div>' +
				'<div class="head-logo"><a class="sitelogo" href="index.html"><img src="/static/rtmg2/img/logo/logo_rtmg.svg" alt="Logo RTMG" title="Región Transfronteriza México-Guatemala"></a></div>' +
                '<div class="head-name">' +
                    '<h1 class="name-item sitename"><span class="xtc-break">Región Transfronteriza</span> <span class="xtc-break">México-Guatemala</span></h1>' +
                    '<!--<h2 class="name-item sitename-sub"><span class="xtc-nowrap">Lorem ipsum dolor sit amet consectetur</span></h2>-->' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                // DRAWER-CONTENT
                '<div id="drawer-content">' +
                '<div class="content-wrapper">' +
                '<div class="container-full">' +
                '<div class="content">' +
                '<div class="content-nav">' +
                '<ul class="nav-menu">' +
                    '<li class="doc_01"><a href="doc_01.html">Acerca de RTMG</a></li>' +
                    '<li class="com_01"><a href="com_01.html">Noticias</a></li>' +
                    '<li class="tem_01"><a href="tem_01.html">Migración</a></li>' +
                    '<li class="tem_02"><a href="tem_02.html">Temática 02</a></li>' +
                    '<li class="tem_03"><a href="tem_03.html">Temática 03</a></li>' +
                    '<li class="tem_04"><a href="tem_04.html">Temática 04</a></li>' +
                    // '<li class="com_10"><a href="com_10.html">Áreas de investigación RTMG</a></li>' +
                    '<li class="com_02"><a href="com_02.html">Directorio</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                // DRAWER-BOTTOM
                '<div id="drawer-bottom">' +
                '<div class="bottom-wrapper">' +
                '<div class="container-full">' +
                '<div class="content">' +
                // '<div class="bottom-logo">' +
                // '<div class="logo-item"><a href="https://www.conacyt.gob.mx/" target="_blank"><img src="img/logo/logo_conacyt_black.svg" alt="Logo CONACYT" style="width: 108px; height: 90px;" title="Consejo Nacional de Ciencia y Tecnología"></a></div>' +
                // '<div class="logo-item"><a href="https://www.centrogeo.org.mx/" target="_blank"><img src="img/logo/logo_centrogeo_black.svg" alt="Logo CentroGeo" style="width: 90px; height: 90px;" title="Centro de Investigación en Ciencias de Información Geoespacial"></a></div>' +
                // '</div>' +
                '<div class="bottom-nav">' +
                '<ul class="nav-menu">' +
                    '<li class="doc_02"><a href="doc_02.html">Política de privacidad</a></li>' +
                    '<li class="doc_03"><a href="doc_03.html">Condiciones generales de uso</a></li>' +
                    '<li><a href="mailto:contacto@rtmg.org">Contacto</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $('#drawer-nav .drawer-wrapper').append(drawerCODE);
            // DRAWER [ACTIVATE]
            setTimeout(function() {
                var drawerMENU = '#drawer-nav .content ul.nav-menu li.' + pageIDE;
                $(drawerMENU).addClass('active');
            }, 600);
        }
        /*******************************************************
            DRAWER-NAV [DRAWER-INIT]
        *******************************************************/
        if ($('#drawer-nav').length) {
            $('.drawer').drawer({
                class: {
                    nav: 'drawer-nav',
                        toggle: 'drawer-toggle',
                        overlay: 'drawer-overlay',
                        open: 'drawer-open',
                        close: 'drawer-close',
                        dropdown: 'drawer-dropdown'
                },
                iscroll: {
                    mouseWheel: false,
                    preventDefault: false
                },
                showOverlay: true
            });
        }
    });
});
