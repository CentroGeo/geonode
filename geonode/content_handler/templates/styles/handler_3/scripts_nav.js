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
            $('#header-nav').css('padding-bottom', '0px');
            // ACTIVE
            setTimeout(function() {
                var headerMENU = '#header .content-nav ul.nav-menu li.' + pageIDE;
                $(headerMENU).addClass('active');
                var parentMENU = '#header .content-nav ul.nav-menu > li.' + pageLEV1;
                $(parentMENU).addClass('active');
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
                {% if header.image_1 %}
                '<div class="head-logo"><a class="sitelogo" href="{{header.link_1}}"><img src="{{MEDIA_URL}}{{ header.image_1 }}" alt="{{ header.alt_1 }}" title="{{ header.alt_1 }}"></a></div>' + 
                {% endif %}
                '<div class="head-name">' + 
                    '<h1 class="name-item sitename"><span class="xtc-nowrap">{{header.title}}</span></h1>' + 
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
                    {% for item in topics %}
                        '<li class="doc_01"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}" {% if item.blank %} target="_blank" {% endif %}>{{item}}</a></li>' + 
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
                '<div class="bottom-logo">' + 
                {% if header.image_2 %}
                    '<div class="logo-item"><a href="{{header.link_2}}" target="_blank"><img src="{{MEDIA_URL}}{{header.image_2}}" alt="{{MEDIA_URL}}{{header.alt_2}}" style="width: auto; height: 60px;" title="{{MEDIA_URL}}{{header.alt_2}}"></a></div>' + 
                {% endif %}
                {% if header.image_3 %}
                    '<div class="logo-item"><a href="{{header.link_3}}" target="_blank"><img src="{{MEDIA_URL}}{{header.image_3}}" alt="{{MEDIA_URL}}{{header.alt_3}}" style="width: auto; height: 60px;" title="{{MEDIA_URL}}{{header.alt_3}}"></a></div>' + 
                {% endif %}
                {% if header.image_4 %}
                    '<div class="logo-item"><a href="{{header.link_4}}" target="_blank"><img src="{{MEDIA_URL}}{{header.image_4}}" title="{{MEDIA_URL}}{{header.alt_4}}" style="width: auto; height: 60px;"></a></div>' + 
                {% endif %}
                {% if header.image_5 %}
                    '<div class="logo-item"><a href="{{header.link_5}}" target="_blank"><img src="{{MEDIA_URL}}{{header.image_5}}" alt="{{MEDIA_URL}}{{header.alt_5}}" style="width: auto; height: 60px;" title="{{MEDIA_URL}}{{header.alt_5}}"></a></div>' + 
                {% endif %}
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
        function sidenavbar() {
            if($(window).scrollTop() >= $('#section-intro').height() ) {
                $('#slider-nav').show();
                $('.inline-nav-header').show();
            } else {
                $('#slider-nav').hide();
                $('.inline-nav-header').hide();
            }
        }
        sidenavbar();
        $(window).scroll(sidenavbar)
    });
});
//$('#body-wrapper').attr('style','margin-bottom: ' + $('#section-bottom').height() + 'px');
$('#section-bottom').attr('style','position: relative');