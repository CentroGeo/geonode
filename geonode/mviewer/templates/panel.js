<script type="text/javascript">
/*Esta clase esta hecha para MVIEWER
es la funcionalidad para ocultar la leyenda de mviewer

  /*Si eligieron el panel, hay que ocultar la legenda para ponerla en el panel vertical*/
  {% if mviewer.is_vertical %}
       document.getElementById("module-legend").style.display = "none"
  {% endif %}

  /*const $simbiology = document.getElementById("module-legend-inner")
  $simbiology.style.width ="340px"
  $simbiology.style.left = "0px"
  $simbiology.style.top = "0px"*/

/*
 const keyframes_close = [ {
            transform: 'translateX(0px) translateY(0px) scale(1)'
           },
           {
            transform: 'translateX(-100px) translateY(0px) scale(1)'
          },
          {
            transform: 'translateX(-339px) translateY(0px) scale(1)'
           }];
 const keyframes_open = [ {
            transform: 'translateX(-339px) translateY(0px) scale(1)'
           },
           {
            transform: 'translateX(-100px) translateY(0px) scale(1)'
          },
          {
            transform: 'translateX(0px) translateY(0px) scale(1)'
           }];
          const options = {
              duration: 1000,
              delay: 0,
              direction: 'alternate',
              easing: 'ease',
              iteration: 1,
              fill: 'forwards',
              iterationStart: 0,
              endDelay: 300
            }
    const $logo = document.getElementById('logo_nav')
    const $leftMenuActivationTab = document.getElementById('leftMenuActivationTab')
    const $panel_mviever = document.getElementById('panel_mviever')
    const $arr_l = document.getElementById("arrow-l")
    const $arr_r = document.getElementById("arrow-r")
    const $plus_simb = document.getElementById("plus-simbio")
    const $plus_cat = document.getElementById("plus-cate")
    const $body_simb = document.getElementById("layers-img")
    const $body_cat = document.getElementById("category-img")
    const $min_simb = document.getElementById("min-simbio")
    const $min_cat = document.getElementById("min-cate")
    let closed_panel_mv = false
    let closed_window = false
    $plus_simb.addEventListener("click", (event)=>{
        if(closed_window==false){
          closed_window = true
          $body_simb.style.display = "block"
          $min_simb.style.display = "block"
          $plus_simb.style.display = "none"
        }else{
          closed_window = false
          $min_cat.style.display = "none"
          $body_simb.style.display = "none"
          $plus_simb.style.display = "block"
        }
    });
    $min_simb.addEventListener("click", (event)=>{
        if(closed_window==false){
          closed_window = true
          $body_simb.style.display = "block"
          $min_simb.style.display = "block"
          $plus_simb.style.display = "none"
        }else{
          closed_window = false
          $min_simb.style.display = "none"
          $body_simb.style.display = "none"
          $plus_simb.style.display = "block"
        }
    });
    $plus_cat.addEventListener("click", (event)=>{
        if(closed_window==false){
          closed_window = true
          $body_cat.style.display = "block"
          $min_cat.style.display = "block"
          $plus_cat.style.display = "none"
        }else{
          closed_window = false
          $body_cat.style.display = "none"
          $body_cat.style.display = "none"
          $plus_cat.style.display = "block"
        }
    });
     $min_cat.addEventListener("click", (event)=>{
        if(closed_window==false){
          closed_window = true
          $body_cat.style.display = "block"
          $min_cat.style.display = "block"
          $plus_cat.style.display = "none"
        }else{
          closed_window = false
          $min_cat.style.display = "none"
          $body_cat.style.display = "none"
          $plus_cat.style.display = "block"
        }
    });
    $leftMenuActivationTab.addEventListener('click', (event) =>{
        if(closed_panel_mv==false){
          closed_panel_mv = true
          $arr_l.style.display = "none"
          $arr_r.style.display = "block"
          $logo.animate(keyframes_close,options)
          $panel_mviever.animate(keyframes_close,options)
        }else{
          closed_panel_mv = false
          $arr_l.style.display = "block"
          $arr_r.style.display = "none"
          $logo.style.left= "350px"
          $logo.animate(keyframes_open,options)
          $panel_mviever.animate(keyframes_open,options)
        }
    });*/
</script>