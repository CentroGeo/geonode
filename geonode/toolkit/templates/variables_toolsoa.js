<script type="text/javascript">
/*variables para analisis intersections*/
var analisys_layer_base = [];
var analisys_layer_base_name = [];
var global_layers = null;

  /* Set topic colors */

class UpAndDownLayer{
  set_layer(name, title){
    /*Code for app intersection_tool  */
     var name_l = name.split(":");
     analisys_layer_base.push(name_l[1]);
     analisys_layer_base_name.push(title);
    /*Code for app intersection_tool*/
  }
  set_global_layer(layer){
    global_layers = layer;
  }
  get_global_layer(){
    return global_layers;
  }
  get_title_layer(){
    return analisys_layer_base_name;
  }
  get_base_layer(){
    return analisys_layer_base;
  }
  get_title_layer_specific(i){
    return analisys_layer_base_name[i];
  }
  get_base_layer_specific(i){
    return analisys_layer_base[i];
  }
  get_global_layer_specific(i){
    return global_layers[i];
  }

}
</script>
