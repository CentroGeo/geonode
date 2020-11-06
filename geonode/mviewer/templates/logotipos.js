<script type="text/javascript">
 $(document).ready(function() {
       //Codigo para cambiar el logo y el header
       var logo = "{{mviewer.logo|safe}}";
         switch (logo) {
             case "O":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_naran.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#DD7238");
                 break;
             case  "B":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_black.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 break;
             case "BS":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_black_strong.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 break;
             case "BR":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_brown.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#6C3C20");
                 break;
             case "G":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_gray.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#C96936");
                 break;
             case "W":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_white.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#6B3B20");
                 $('.header-sitename').css("color","#ed7728b8");
 
                 break;
             case "Y":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_yellow.jpeg" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#6C3C20");
                 break;
             case "GR":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_green.png" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#8A9D62");
                 break;
             case "GC":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_grayc.png" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#F57240");
                 break;
             case "BL":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_blue.png" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#607E94");
                 break;
             case "BE":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_beige.png" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#652E18");
                 break;
             case "P":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_purple.png" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#C96936");
                 break;
             case  "S":
                 $('.header-logo-left-mviwer').html('<a href="http://www.centrogeo.org.mx/"><img src="{{STATIC_URL}}idegeo/mviewer/img/logo_geo_stars.png" width="190px;" title="CentroGeo" alt="logo centroGeo"></a>');
                 $('.header-title').css("background-color","#002777c");
         }
 
     });
 </script>
