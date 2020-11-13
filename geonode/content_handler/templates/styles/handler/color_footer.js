{% if style %}
    let footer_header = "{{style.second_color|safe}}";

    if(document.getElementById("section-bottom")){
      //cambiamos el border top del footer
      document.getElementById("section-bottom").style.borderTop = "4px solid "+footer_header;
    }

{% endif %}

{% if style_footer %}
    let footer_word =  "{{style_footer.primary_color|safe}}"
    let footer_background = "{{style_footer.second_color|safe}}"
    if(document.getElementById("section-bottom")){
      //cambiamos el border top del footer
      document.getElementById("section-bottom").style.backgroundColor = footer_background;
      document.getElementById("section-bottom").style.color = footer_word;
    }
{% endif %}

