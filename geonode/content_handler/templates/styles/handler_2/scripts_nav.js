jQuery(function($) {
    'use strict';
    $(document).ready(function() {
        // PAGE-IDE
        var pageIDE = $('body').attr('class').split(' ')[0];
        var pageTPO = pageIDE.split('_')[0];
        var pageLEVS = pageIDE.split('_')[1];
        var pageLEVL = pageLEVS.length;
        // console.log(pageIDE + ' | ' + pageTPO + '_' + pageLEVS);
        var pageLEV1 = pageTPO + '_' + pageLEVS.substring(0, 2);
        var pageLEV2 = pageTPO + '_' + pageLEVS.substring(0, 4);
        var pageLEV3 = pageTPO + '_' + pageLEVS.substring(0, 6);
        // console.log(pageIDE + ' | ' + pageLEV1 + ' : ' + pageLEV2 + ' : ' + pageLEV3);
        /*******************************************************
            XTC-NAVAUX [ *** TEMPORAL-DEMO *** ]
        *******************************************************/
        // CODE
        var xtcCODE = '';
        $('#drawer-nav').append(xtcCODE);
        // ACTIVE
        setTimeout(function() {
            var xtcMENU = '#xtc_navAUX ul.nav-menu li.' + pageLEV1;
            $(xtcMENU).addClass('active');
        }, 600);
        /*******************************************************
            HEADER-MENU [CODE] [ACTIVE]
        *******************************************************/
        if ($('#header .header-menu').length) {
            // CODE
            var navCODE = '' +
                '<div class="content-nav">' +
                    '<ul class="nav-menu">' +
                        {% for item in topics %}
                            {% if item.custome_back == True %}
                                '<li class="tem_0{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}" {% if item.blank %} target="_blank" {% endif %}><i class="fas fa-arrow-left"></i> {{item}}</a>' +
                                {% else %}
                            {% endif %}
                        {% endfor %}
                        '<li class="tem_00"><a href="{% url "handler_home" home.url_name %}">Inicio <i class="fas fa-angle-down"></i></a>' +
                        '</li>' +
                        {% for item in topics %}
                            {% if item.custome_back == True %}
                                {% else %}
                                '<li class="tem_0{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}" {% if item.blank %} target="_blank" {% endif %}>{{item}} <i class="fas fa-angle-down"></i></a>' +
                                {% if item.children.all|length > 0 %}
                                '<ul class="nav-child">' +
                                {% for child in item.children.all|dictsort:"stack_order" %}
                                '<li class="tem_0{{item.id}}0{{child.id}}"><a href="{% if child.link %}{{ child.link }}{% else %}{% url "content_multimedia" home.url_name child.slug  %}{% endif %}" {% if child.blank %} target="_blank" {% endif %}>{{child}}</a></li>' +
                                {% endfor %}
                                '</ul>' +
                            {% endif %}
                            {% endif %}
                        '</li>' +
                        {% endfor %}
                    '</ul>' +
                '</div>';
            $('#header .header-menu').append(navCODE);
            // ACTIVE
            setTimeout(function() {
                var headerMENU = '#header .content-nav ul.nav-menu li.' + pageIDE;
                $(headerMENU).addClass('active');
                var parentMENU = '#header .content-nav ul.nav-menu > li.' + pageLEV1;
                $(parentMENU).addClass('active');
                var headernavMENU = '#header-nav .content-nav ul.nav-menu li.' + pageIDE;
                $(headernavMENU).addClass('active');
                var headernavMENU = '#header-nav .content-nav ul.nav-menu > li.' + pageLEV1;
                $(headernavMENU).addClass('active');
            }, 300);
        }
        /*******************************************************
            DRAWER-NAV [CODE] [ACTIVE]
        *******************************************************/
        if ($('#drawer-nav').length) {
            // CODE
            var drawerCODE = '' +
                // DRAWER-HEADER
                '<div id="drawer-header">' +
                '<div class="header-wrapper">' +
                '<div class="container-full">' +
                '<div class="content">' +
                '<div class="head-logo">' +
                {% if header.image_1 %}
                    '<div class="logo-item">' +
                        '<a class="sitelogo" href="{{header.link_1}}">'+
                            '<img src="{{MEDIA_URL}}{{header.image_1}}" width="50px;" alt="{{header.alt_1}}" title="{{header.alt_1}}">'+
                        '</a>'+
                    '</div>' +
                {% endif %}
                {% if header.image_2 %}
                    '<div class="logo-item">' +
                        '<a class="sitelogo" href="{{header.link_2}}">'+
                            '<img src="{{MEDIA_URL}}{{header.image_2}}" width="50px;" alt="{{header.alt_2}}" title="{{header.alt_2}}">'+
                        '</a>'+
                    '</div>' +
                {% endif %}
                '</div>' +
                '<div class="head-right">' +
                    '<div class="site-name">' +
                        '<h1 class="name-item sitename"><span class="xtc-nowrap">{{header.title}}</span>{% if header.title != home.name %} <span class="xtc-nowrap">- {{home.name}}</span>{% endif %}</h1>' +
                        '<h2 class="name-item sitename-sub"><span class="xtc-nowrap">{{header.description}}</span></h2>' +
                    '</div>' +
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
                    '<li class="tem_00"><a href="{% url "handler_home" home.url_name %}">Inicio</a></li>' +
                    {% for item in topics %}
                    '<li class="tem_0{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}">{{item}}</a></li>' +
                    {% endfor %}
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
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $('#drawer-nav .drawer-wrapper').prepend(drawerCODE);
            // ACTIVE
            setTimeout(function() {
                var drawerMENU = '#drawer-nav .content ul.nav-menu li.' + pageLEV1;
                $(drawerMENU).addClass('active');
            }, 600);
        }
        /*******************************************************
            DRAWER-NAV [INIT]
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
        /*******************************************************
            SIDEBAR-NAV [CODE] [ACTIVE]
        *******************************************************/
        if ($('#nav_menu-tp').length) {
            // CODE
            var sidebarTPCODE = '';
            $('#nav_menu-tp').prepend(sidebarTPCODE);
            // ACTIVE
            setTimeout(function() {
                for (var i = 1; i <= (pageLEVL / 2); i++) {
                    var pageITEMn = pageTPO + '_' + pageLEVS.substring(0, i * 2);
                    var sidebarITEM = '.row-sidebar nav .nav-menu .' + pageITEMn;
                    $(sidebarITEM).parent('.nav-child').addClass('active');
                    $(sidebarITEM).addClass('active');
                    $(sidebarITEM).find(">.nav-child").addClass('active');
                }
            }, 300);
        }
        if ($('#nav_menu-bt').length) {
            // CODE
            var sidebarBTCODE = '' +
                '<div class="nav-header">Temáticas</div>' +
                '<nav role="navigation">' +
                '<ul class="nav-menu">' +
                    {% for item in topics %}
                    '<li class="tem_0{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}">{{item}}</a>' +
                    {% if item.children.all|length > 0 %}
                    '<ul class="nav-child">' +
                        {% for child in item.children.all|dictsort:"stack_order" %}
                        '<li class="tem_0{{item.id}}0{{child.id}}"><a href="{% if child.link %}{{ child.link }}{% else %}{% url "content_multimedia" home.url_name child.slug  %}{% endif %}">{{child}}</a></li>' +
                        {% endfor %}
                    '</ul>' +
                    {% endif %}
                    '</li>' +
                    {% endfor %}
                '</ul>' +
                '</nav>';
            $('#nav_menu-bt').prepend(sidebarBTCODE);
            // ACTIVE
            setTimeout(function() {
                for (var i = 1; i <= (pageLEVL / 2); i++) {
                    var pageITEMn = pageTPO + '_' + pageLEVS.substring(0, i * 2);
                    var sidebarITEM = '.row-sidebar nav .nav-menu .' + pageITEMn;
                    $(sidebarITEM).parent('.nav-child').addClass('active');
                    $(sidebarITEM).addClass('active');
                    $(sidebarITEM).find(">.nav-child").addClass('active');
                }
            }, 300);


        }
        /* Mapas pantalla completa */
        $( "iframe.iframe-nw" ).wrap( '<div class="embed-responsive embed-responsive-16by9"></div>' );
		$( "iframe.iframe-fw" ).wrap( '<div class="embed-responsive embed-responsive-fw2 embed-responsive-16by9"></div>' );
		//Imagen full-width
		$( ".imgfw" ).wrap( '<figure class="full-width"></figure>' );
		$( ".imgfw" ).css('width', '100%');
		$( ".imgfw" ).css('height', 'auto');
		//ATL de la imagen
		$("img.imgfw").wrap('<div class="alt-wrap"/>');
        $("img.imgfw").each(function() {
            var alt = $(this).attr('alt');
            if(alt.length >= 3){
                $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
            }
        });
    });
});
