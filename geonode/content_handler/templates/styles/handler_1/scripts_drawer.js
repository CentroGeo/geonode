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
        var style = '';

        if(typeof(header_word != "undefined")){
            style = ' style="color:'+header_word+'"';
            second_color = header_word;
        }else{
            {% if home.gray_colors == False %}
              var clr = color[id_color];
              style = ' style="color:'+clr+'"';
            {% endif %}
        }
        var navCODE = '' +
            '<div class="content-nav">' +
                '<ul class="nav-menu xtc-nowrap" style="justify-content: center;font-size: 18px;">' +
                    {% for item in topics %}
                        {% if item.custome_back == True %}
                            '<li class="tem_0{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}" {% if item.blank %} target="_blank" {% endif %}'+style+'><i class="fas fa-arrow-left"'+style+'></i> {{item}}</a>' +
                            {% else %}
                        {% endif %}
                    {% endfor %}
                   '<li><a href="{% url "handler_home" home.url_name %}"'+style+'" id="menu-hexa"><i class="fas fa-home"'+style+'></i> Inicio</a></li>' +
                    {% for item in topics %}
                        {% if item.custome_back == True %}
                            {% else %}
                            '<li class="tem_0{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}" {% if item.blank %} target="_blank" {% endif %}'+style+'>{{item}} </a>' +
                            {% if item.children.all|length > 0 %}
                            '<ul class="nav-child">' +
                            {% for child in item.children.all|dictsort:"stack_order" %}
                            '<li class="tem_0{{item.id}}0{{child.id}}"><a href="{% if child.link %}{{ child.link }}{% else %}{% url "content_multimedia" home.url_name child.slug  %}{% endif %}" {% if child.blank %} target="_blank" {% endif %}'+style+'>{{child}}</a></li>' +
                            {% endfor %}
                            '</ul>' +
                        {% endif %}
                        {% endif %}
                        '</li>' +
                    {% endfor %}
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
                {% if header.image_1 %}
                    '<div class="head-logo">' +
                        '<a class="sitelogo" href="{{header.link_1}}">'+
                            '<img src="{{MEDIA_URL}}{{header.image_1}}" width="50px;" alt="{{header.alt_1}}" title="{{header.alt_1}}">'+
                        '</a>'+
                    '</div>' +
                {% endif %}
                {% if header.image_2 %}
                    '<div class="head-logo">' +
                        '<a class="sitelogo" href="{{header.link_2}}">'+
                            '<img src="{{MEDIA_URL}}{{header.image_2}}" width="50px;" alt="{{header.alt_2}}" title="{{header.alt_2}}">'+
                        '</a>'+
                    '</div>' +
                {% endif %}
                '<div class="head-name">' +
                    '<h1 class="name-item sitename"><span class="xtc-break">{{header.title}}</span> <span class="xtc-break">{{header.description|truncatechars:80}}</span></h1>' +
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
                    {% for item in topics %}
                    '<li class="com_1{{item.id}}"><a href="{% if item.link %}{{ item.link }}{% else %}{% url "content_multimedia" home.url_name item.slug  %}{% endif %}">{{item}}</a></li>' +
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
            $('#drawer-nav .drawer-wrapper').append(drawerCODE);
            // DRAWER [ACTIVATE]
            setTimeout(function() {
                var drawerMENU = '#drawer-nav .content ul.nav-menu li.' + pageIDE;
                $(drawerMENU).addClass('active');
            }, 600);
        }
        /*******************************************************
            CAMBIO DE COLOR PARA EL TEMPLATE PERSONALIZADO
        *******************************************************/
        {% for item in topics %}
          console.log("menu-hexa{{item.id}}");
          if(document.getElementById("menu-hexa{{item.id}}")){
            document.getElementById("menu-hexa{{item.id}}").style.color = second_color;
          }
        {% endfor %}
        document.getElementById("menu-hexa").style.color = second_color;
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