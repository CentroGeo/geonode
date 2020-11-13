<script type="text/javascript">
//agregamos rampa de colores para el fondo
var bkg_color = ['#3182bd','#3D7345','#8090A6','#FF8100',
'#756bb1','#900502','#267366',
'#763D99','#37784B','#e6550d',
'#1c9099','#2b8cbe','#d33c7c',
'#d33c7c','#31a354','#31a354',
'#BF7F00','#e34a33'];
//agregamos rampa de colores para el texto
var color = ['#deebf7','#A68F7B','#373D40','#004757',
'#efedf5','#F07E5C','#F59E7A',
'#FFCE40','#8EA385','#fee6ce',
'#ece2f0','#ece7f2','#BB8ABC',
'#fde0dd','#f7fcb9','#f7fcb9',
'#FFAA00','#fee8c8'];
//agregamos rampa de colores para el color de fondo complementario
var color_complementary = ['#3D9962','#A6592D','#636363','#FF5100'
,'#bcbddc','#FFBD9F','#105B48',
'#8856A7','#74A876','#fdae6b',
'#a6bddb','#a6bddb','#993D63',
'#fa9fb5','#addd8e','#addd8e',
'#805500','#fdbb84'];
var id_color = 0;
var primary_color = '';
var second_color = '';
id_color = {{home.color}};


{% if home.gray_colors %}
    primary_color = bkg_color[id_color];
    second_color = color[id_color];
    complementary = color_complementary[id_color];
{% else %}
    {% if home.primary_color %}
        primary_color = "{{home.primary_color|safe}}";
        complementary = primary_color;
    {% else %}
        primary_color = bkg_color[id_color];
    {% endif %}

    {% if home.second_color %}
        second_color = "{{home.second_color|safe}}";
    {% else %}
        second_color = color[id_color];
    {% endif %}
    {% if home.complementary_color %}
        complementary = "{{home.complementary_color|safe}}";
    {% else %}
        complementary = color_complementary[id_color];
    {% endif %}
{% endif %}

if(typeof(header_background) != "undefined"){
    if(document.getElementById("header")){
      //cambiamos el color del fondo header de rtmg
      document.getElementById("header").style.backgroundColor=header_background;
      if(typeof(header_background_url) != "undefined"){
              document.getElementById("header").style.backgroundImage = "url({{MEDIA_URL}}"+header_background_url+")";
      }

    }
    if(document.getElementById("description-header")){
      //cambiamos el color de fondo de header de rtmg
      document.getElementById("description-header").style.backgroundColor=header_background;

      if(plot_url != ""){
        document.getElementById("description-header").style.backgroundImage = "url({{MEDIA_URL}}"+plot_url+")";
      }
    }
}else{
    if(document.getElementById("header")){
      //cambiamos el color del fondo header de rtmg
      document.getElementById("header").style.backgroundColor=primary_color;
      if (id_color==0||id_color==11||id_color==14) {
        document.getElementById("header").style.backgroundImage = "url({{STATIC_URL}}content_handler/style_1/img/intro_background2.png)";
      }
      if (id_color==12||id_color==13) {
        document.getElementById("header").style.backgroundImage = "url({{STATIC_URL}}content_handler/style_1/img/intro_background1.png)";
      }
    }
    if(document.getElementById("description-header")){
      //cambiamos el color de fondo de header de rtmg
      document.getElementById("description-header").style.backgroundColor=primary_color;
      if (id_color==0||id_color==11||id_color==14) {
        document.getElementById("description-header").style.backgroundImage = "url({{STATIC_URL}}content_handler/style_1/img/intro_background2.png)";
      }
      if (id_color==12||id_color==13) {
        document.getElementById("description-header").style.backgroundImage = "url({{STATIC_URL}}content_handler/style_1/img/intro_background1.png)";
      }
    }
}
if(typeof(header_word) != "undefined"){
    if(document.getElementById("text-title-header")){
      //cambiamos el color de letra del titulo del header de rtmg
      document.getElementById("text-title-header").style.color=header_word;
    }
    if(document.getElementById("text-description-header")){
      //cambiamos el color del font de la descripcion rtmg
      document.getElementById("text-description-header").style.color=header_word;
    }
}else{
    if(document.getElementById("text-title-header")){
     //cambiamos el color de letra del titulo del header de rtmg
     document.getElementById("text-title-header").style.color=second_color;
    }
    if(document.getElementById("text-description-header")){
      //cambiamos el color del font de la descripcion rtmg
      document.getElementById("text-description-header").style.color=second_color;
    }
}

if(document.getElementById("burger-rts")){
  //cambiamos el color de fondo del burger
  //document.getElementById("burger-rts").style.backgroundColor=color_complementary[id_color];
}

{% for sec in sections %}
    if(document.getElementById("section-is-hd{{sec.id}}")){
      document.getElementById("section-is-hd{{sec.id}}").style.backgroundColor=second_color;
      document.getElementById("section-is-hd{{sec.id}}").style.color=primary_color;
    }
    if(document.getElementById("text-section-is-hd{{sec.id}}")){
      document.getElementById("text-section-is-hd{{sec.id}}").style.color=primary_color;
    }
    if(document.getElementById("section-editorial{{sec.id}}")){
      document.getElementById("section-editorial{{sec.id}}").style.borderBottom = "4px solid "+primary_color;
    }

{% endfor %}
if(document.getElementById("institute-hd")){
  document.getElementById("institute-hd").style.backgroundColor=second_color;
}
if(document.getElementById("text-institute-hd")){
  document.getElementById("text-institute-hd").style.color=primary_color;
}

{% for item in sections %}
  {% if item.children.all|length > 0 %}
    {% for child in item.children.all|dictsort:"stack_order" %}
        if(document.getElementById("exploration-is{{child.id}}")){
          document.getElementById("exploration-is{{child.id}}").style.color=complementary;
          $('#exploration-is{{child.id}}').hover(function() {
            $(this).css("color", primary_color);
          }, function() {
            $(this).css("color", complementary);
          });
        }

      if(document.getElementById("more-editorial{{child.id}}")){
        document.getElementById("more-editorial{{child.id}}").style.boxShadow = "inset 0 0 0 2px "+primary_color;
      }
      if(document.getElementById("text-more-editorial{{child.id}}")){
        document.getElementById("text-more-editorial{{child.id}}").style.color = primary_color;
      }
      {% endfor %}
  {% endif %}
{% endfor %}

</script>
