{% if style %}

let header_word =  "{{style.primary_color|safe}}"
let header_background = "{{style.second_color|safe}}"
let header_background_url = "{{style.background|safe}}"
let plot_url = "{{style.plot|safe}}"
{% else %} 
let header_word;
{% endif %}
