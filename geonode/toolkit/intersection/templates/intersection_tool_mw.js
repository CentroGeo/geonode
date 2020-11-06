<script type="text/javascript">
/*
This class js is for tool intersections
*/
var layers_base_analisis = [];
// var titles_layers = [];
var layers_count = [];
// var shape_title_markers = [];
// var shape_title_base = [];
var id_layer_select_pie = 0;
//cilck to select tools
/*fa-pie-chart pie analisys and count este metodo busca las capas para contabilizarlas y graficarlas*/
function search_layers_intersections(){
    $('.check-data-general-grafic-pie').html(".");
    $('.check-analisys-data-general-grafic-pie').html("");
    $('.check-data-general-grafic-pie').prepend("<div>.</div>");
    $('.less-selected').html("Selecciona una opción");
    $('input:radio[value=count]').prop('checked',true);
    $('#tools_analisys_soa').addClass('is-active');

  $.ajax({
 data: {'layers_base': JSON.stringify(up.get_base_layer()),
        csrfmiddlewaretoken: '{{ csrf_token }}'
       },
 url: '{% url "search_base_polygons_tool" %}',
 type: 'POST',
 success : function(data) {
              $('.check-data-general-grafic-pie').html("");
              check = "";
              layers_base_analisis = data[1];
              layers_count = data[0];
               $('.check-data-general-grafic-pie').html("");
               for (var i = 0; i < up.get_base_layer().length; i++) {
                 check = '<div><input type="checkbox" name="base_check" value='+up.get_base_layer_specific(i)+'> '+up.get_title_layer_specific(i)+'</div>';
                  $(".check-data-general-grafic-pie").prepend(check);
               }
               $('.check-data-general-grafic-pie').prepend("<div>Selecciona las capas para totalizarlas</div>");
 },
 error : function(message) {
         console.log(message);
      }
 });

}
/*end*/

function second_part_analysis_pie(){

  $('.less-selected').html("");
  var arr_layer_base = [];

  var arr_obj_bbxylayer = [];
  var ar = [1,2,3];
  var arr_bbox = [];
  var arr_layer = [];
  var projection = ", 4326";
  var indice = 0;
  var obj_l = [];
  var obj_l_b = [];

  arr_obj_bbxylayer["bbox"] = [];
  arr_obj_bbxylayer["layers"] = [];
  var bbox = map.getBounds();
  arr_obj_bbxylayer["bbox"].push([bbox]);
  arr_obj_bbxylayer["layers"].push([up.get_global_layer()]);
  arr_bbox.push(bbox["_northEast"]["lng"]);
  arr_bbox.push(bbox["_northEast"]["lat"]);
  arr_bbox.push(bbox["_southWest"]["lng"]);
  arr_bbox.push(bbox["_southWest"]["lat"]);
  arr_bbox.push(4312);

  $('input:checkbox[name=chb]:checked').each(
      function() {
          obj_l.push($(this).val());
      }
  );
  $('input:radio[name=base]:checked').each(
      function() {
          obj_l_b.push($(this).val());
      }
  );

  for (var i = 0; i < up.get_global_layer().length; i++) {
    if ("No background" != up.get_global_layer_specific(i).options.layers){
        if (obj_l.length==0) {
            $('.less-selected').html("Selecciona una o varias capas para hacer la intersección");
            return;
        }
        if (obj_l_b.length==0) {
            $('.less-selected').html("Selecciona una capa base para hacer la intersección");
            return;
        }
        var name_lay = up.get_global_layer_specific(i).options.layers.split(":");
        for (var z = 0; z < obj_l.length; z++) {
          if (name_lay[1]==obj_l[z]) {
            indice +=1;
            if(indice>=5){
              $('.less-selected').html("Tu selección debe ser menor a 5 datos");
              $("#pie_chart_mw").css("display", "none");
              return;
            }else {
              $('.less-selected').html("Procesando solicitud, espere un momento...");
              arr_layer.push(name_lay[1]);
            }
          }
        }
    }
  }
  $.ajax({
 data: {'bbox': JSON.stringify(arr_bbox), 'layers': JSON.stringify(arr_layer),'layer_base': JSON.stringify(obj_l_b),
        csrfmiddlewaretoken: '{{ csrf_token }}'
       },
 url: '{% url "get_bbox_tool" %}',
 type: 'POST',
 success : function(data_lay) {
          $("#pie_chart_mw").css("display", "block");
          var count_element = [];

          $.each(data_lay, function(key, value){
          if(!count_element.hasOwnProperty(value)){
              count_element[value]=1;
          }
          else{
              count_element[value]++;
          }
});

$('.less-selected').html("Datos gráficados, da click en el boton cerrar");
$('#tools_analisys_soa').removeClass('is-active');

                var w = 300,                        //width
                h = 300,                            //height
                r = 100,                            //radius
                color = d3.scale.category20c();     //builtin range of colors

                var data = [];
                var elementos = [];
                for (var i = 0; i < up.get_global_layer().length; i++) {
                    if ("No background" != up.get_global_layer_specific(i).options.layers){
                        var name_lay = up.get_global_layer_specific(i).options.layers.split(":");
                        for (var z = 0; z < obj_l.length; z++) {
                          if (name_lay[1]==obj_l[z]) {
                            if (typeof name_lay[1] != "undefined"){
                                if (typeof count_element[name_lay[1]] != "undefined"){
                                  var data_obj = new Object();
                                  data_obj.legendLabel = name_lay[1];
                                  data_obj.magnitude = count_element[name_lay[1]];
                                  data.push(data_obj);
                                }
                            }
                           }
                        }
                  }
                }
                if(data.length>=1){
                    drawPie("Pie1", data, "#pie_chart_mw .chart", "colorScale20c", 10, 100, 5, 0);
                }
                else{
                  $('.less-selected').html("No se puede hacer este conteo debido a que no hay capas o las capas son muy pocas para ser contabilizadas");
                  $("#pie_chart_mw").css("display", "none");
                }


 },
 error : function(message) {
         console.log(message);
      }
 });

};
/*radios shapes*/
$('.check-data-general-grafic-pie').on("click","input.chb", function(e){
     $('.check-analisys-data-general-grafic-pie').html("");
      for (var i = 0; i < layers_base_analisis.length; i++) {
        radios = "";
        radios = '<input type="checkbox" name="chb" value='+layers_base_analisis[i]+'> '+findElement(layers_base_analisis[i])+'<br>';
        $(".check-analisys-data-general-grafic-pie").prepend(radios);
      }
      $('.check-analisys-data-general-grafic-pie').prepend("<hr></hr><div>Selecciona las capas a intersectar</div>");
});
/*Close the general grafic pie */
$("#close-general-grafic-soa").on("click", function() {
  $("#pie_chart_mw").css("display", "none");
  show_default(CONSTANT_INTERSECTION);
    });
/*End Close the general grafic pie */
/*Update the general grafic pie */
$("#update-general-grafic-soa").on("click", function() {
    update_general_pie();
});
/*End Update the general grafic pie */

 /*Metodo para darle evento al radio buton de tipo de gráfica*/
 $('input:radio').change(
     function(){
       var element = this.value;
       if(element!='')
       {
         if (element=='count') {
           $('.check-analisys-data-general-grafic-pie').html("");
             $('.check-data-general-grafic-pie').html("");
             for (var i = 0; i < up.get_base_layer().length; i++) {
               check = '<div><input type="checkbox" name="base_check" value='+up.get_base_layer_specific(i)+'> '+up.get_title_layer_specific(i)+'</div>';
                $(".check-data-general-grafic-pie").prepend(check);
             }
             $('.check-data-general-grafic-pie').prepend("<div>Selecciona las capas para totalizarlas</div>");
         }
         else if (element=='analysis') {
             $('.check-analisys-data-general-grafic-pie').html("");
             $('.check-data-general-grafic-pie').html("");
              for (var i = 0; i < layers_count.length; i++) {
                radio = "";
                radio = '<div><input type="radio" name="base" class="chb" value='+layers_count[i]+'/> '+findElement(layers_count[i])+'</div>';
                $(".check-data-general-grafic-pie").prepend(radio);
              }
              $('.check-data-general-grafic-pie').prepend("<div>Selecciona una capa base de intersección</div>");
         }

       }

     }
 );
 $(document).ajaxStart(function(){
       $("#wait").css("display", "block");
       $('.chart').css({'cursor':'wait'});
       $('#update-general-grafic').css({'cursor':'wait'});
       $('#close-general-grafic').css({'cursor':'wait'});
   });
   $(document).ajaxComplete(function(){
       $("#wait").css("display", "none");
       $('.chart').css({'cursor':'pointer'});
       $('#update-general-grafic').css({'cursor':'pointer'});
       $('#close-general-grafic').css({'cursor':'pointer'});
   });
   $("#general-pie").click(function(){
     var element = $('input:radio[name=element]:checked').val();
     $('.less-selected').html("");
     if(element=="count")
     {
       $('#count-data').html("Total de elementos a esta escala");
         display_general_pie();
     }
     else{
       $('#count-data').html("Intersección de elementos");
         second_part_analysis_pie();
     }
   });

     /*show data for pie*/
   function display_general_pie(){
     var arr_obj_bbxylayer = [];
     var ar = [1,2,3];
     var arr_bbox = [];
     var arr_layer = [];
     var projection = ", 4326";
     var indice = 0;
     var obj_l = [];

     arr_obj_bbxylayer["bbox"] = [];
     arr_obj_bbxylayer["layers"] = [];
     var bbox = map.getBounds();
     arr_obj_bbxylayer["bbox"].push([bbox]);
     arr_obj_bbxylayer["layers"].push([up.get_global_layer()]);
     arr_bbox.push(bbox["_northEast"]["lng"]);
     arr_bbox.push(bbox["_northEast"]["lat"]);
     arr_bbox.push(bbox["_southWest"]["lng"]);
     arr_bbox.push(bbox["_southWest"]["lat"]);
     arr_bbox.push(4312);

     $('input:checkbox[name=base_check]:checked').each(
         function() {
             obj_l.push($(this).val());
         }
     );
     for (var i = 0; i < up.get_global_layer().length; i++) {
       if ("No background" != up.get_global_layer_specific(i).options.layers){
           // if($('#li'+i+' i').hasClass('fa-check-square')){
           // var count_check = $('input:checkbox[name=base_check]:checked').val();
             var name_lay = up.get_global_layer_specific(i).options.layers.split(":");
             if (obj_l.length==0) {
                 $('.less-selected').html("Selecciona una o varias capas para totalizarlas");
                 return;
             }
             for (var z = 0; z < obj_l.length; z++) {
               if (name_lay[1]==obj_l[z]) {
                 indice +=1;
                 if(indice>=5){
                   $('.less-selected').html("Tu selección debe ser menor a 5 datos");
                   $("#pie_chart_mw").css("display", "none");
                   return;
                 }else {
                   $('.less-selected').html("Procesando solicitud...");
                   arr_layer.push(name_lay[1]);
                 }
               }
             }
         }
     }
     // $("#close-general-grafic").unbind( "click", aClick );//.text( "Does nothing..." );
     $.ajax({
    data: {'bbox': JSON.stringify(arr_bbox), 'layers': JSON.stringify(arr_layer),
           csrfmiddlewaretoken: '{{ csrf_token }}'
          },
    url: '{% url "get_bbox_tool" %}',
    type: 'POST',
    success : function(data) {
                 $('.less-selected').html("Datos gráficados");
                 $('#tools_analisys_soa').removeClass('is-active');
                   $("#pie_chart_mw").css("display", "block");
                   // $("#update-general-grafic").bind( "click", aClick );
                   var w = 300,                        //width
                   h = 300,                            //height
                   r = 100,                            //radius
                   color = d3.scale.category20c();     //builtin range of colors
                   var data_pie = [];
                   for (var i = 0; i < data.length; i++) {
                     if (typeof data[i][0] != "undefined"){
                         if (typeof data[i][1].length != "undefined"){
                           var data_obj = new Object();
                           data_obj.legendLabel = data[i][0];
                           data_obj.magnitude = data[i][1].length;
                           if (data[i][1].length>=1) {
                              data_pie.push(data_obj);
                           }
                     }
                   }

                   }
                   if(data_pie.length>=1){
                       drawPie("Pie1", data_pie, "#pie_chart_mw .chart", "colorScale20c", 10, 100, 5, 0);
                   }
                   else{
                     $('.less-selected').html("No se puede hacer este conteo debido a que no hay capas o las capas son muy pocas para ser contabilizadas");
                     $("#pie_chart_mw").css("display", "none");
                   }

    },
    error : function(message) {
            console.log(message);
         }
    });

   };
   /*show data for pie*/
   function update_general_pie(){
   var arr_obj_bbxylayer = [];
   var ar = [1,2,3];
   var arr_bbox = [];
   var arr_layer = [];
   var projection = ", 4326";
   var indice = 0;
   var obj_l = [];

   arr_obj_bbxylayer["bbox"] = [];
   arr_obj_bbxylayer["layers"] = [];
   var bbox = map.getBounds();
   arr_obj_bbxylayer["bbox"].push([bbox]);
   arr_obj_bbxylayer["layers"].push([up.get_global_layer()]);
   arr_bbox.push(bbox["_northEast"]["lng"]);
   arr_bbox.push(bbox["_northEast"]["lat"]);
   arr_bbox.push(bbox["_southWest"]["lng"]);
   arr_bbox.push(bbox["_southWest"]["lat"]);
   arr_bbox.push(4312);

   $('input:checkbox[name=base_check]:checked').each(
       function() {
           obj_l.push($(this).val());
          //  console.log($(this).val());
       }
   );
   for (var i = 0; i < up.get_global_layer().length; i++) {
    //  console.log(layers[i]);
     if ("No background" != up.get_global_layer_specific(i).options.layers){
         // if($('#li'+i+' i').hasClass('fa-check-square')){
         // var count_check = $('input:checkbox[name=base_check]:checked').val();
           var name_lay = up.get_global_layer_specific(i).options.layers.split(":");
          //  console.log(layers[i].name);
          //  console.log(obj_l);
           if (obj_l.length==0) {
               $('.less-selected').html("Selecciona una o varias capas para totalizarlas");
               return;
           }
           for (var z = 0; z < obj_l.length; z++) {
            //  console.log(obj_l[z]);
            //  console.log(name_lay[1]);
             if (name_lay[1]==obj_l[z]) {
               indice +=1;
               if(indice>=5){
                 $('.less-selected').html("Tu selección debe ser menor a 5 datos");
                 $("#pie_chart_mw").css("display", "none");
                 return;
               }else {
                 $('.less-selected').html("Procesando solicitud...");
                 arr_layer.push(name_lay[1]);
               }
             }
           }
       }
   }
   // $("#close-general-grafic").unbind( "click", aClick );//.text( "Does nothing..." );
   $.ajax({
   data: {'bbox': JSON.stringify(arr_bbox), 'layers': JSON.stringify(arr_layer),
         csrfmiddlewaretoken: '{{ csrf_token }}'
        },
   url: '{% url "get_bbox_tool" %}',
   type: 'POST',
   success : function(data) {
                 $("#pie_chart_mw").css("display", "block");
                 // $("#update-general-grafic").bind( "click", aClick );
                 var w = 300,                        //width
                 h = 300,                            //height
                 r = 100,                            //radius
                 color = d3.scale.category20c();     //builtin range of colors
                 var data_pie = [];
                 for (var i = 0; i < data.length; i++) {
                   if (typeof data[i][0] != "undefined"){
                       if (typeof data[i][1].length != "undefined"){
                         var data_obj = new Object();
                        //  console.log("label");
                        //  console.log(data[i][0]);
                        //  console.log("numer");
                        //  console.log(data[i][1].length);
                         data_obj.legendLabel = data[i][0];
                         data_obj.magnitude = data[i][1].length;
                         if (data[i][1].length>=1) {
                            data_pie.push(data_obj);
                         }
                   }
                 }

                 }
                //  console.log(data_pie);
                 if(data_pie.length>=1){
                     drawPie("Pie1", data_pie, "#pie_chart_mw .chart", "colorScale20c", 10, 100, 5, 0);
                 }
                 else{
                   $('.less-selected').html("No se puede hacer este conteo debido a que no hay capas o las capas son muy pocas para ser contabilizadas");
                   $("#pie_chart_mw").css("display", "none");
                 }

   },
   error : function(message) {
          console.log(message);
       }
   });

   };

    //dibuja la gráfica de pay general
      function drawPie( pieName, dataSet, selectString, colors, margin, outerRadius, innerRadius, sortArcs ) {
    // Color Scale Handling...
      var colorScale = d3.scale.category20c();
      switch (colors)
      {
        case "colorScale10":
          colorScale = d3.scale.category10();
          break;
        case "colorScale20":up.get_base_layer()
        case "colorScale20b":
          colorScale = d3.scale.category20b();
          break;
        case "colorScale20c":
          colorScale = d3.scale.category20c();
          break;
        default:
          colorScale = d3.scale.category20c();
      };

      var canvasWidth = 490;
      var pieWidthTotal = outerRadius * 2;;
      var pieCenterX = outerRadius + margin/2;
      var pieCenterY = outerRadius + margin/2;
      var legendBulletOffset = 30;
      var legendVerticalOffset = (outerRadius - margin)-230;//outerRadius - margin
      var legendTextOffset = 20;
      var textVerticalSpace = 20;

      var canvasHeight = 0;
      var pieDrivenHeight = outerRadius*2 + margin*2;
      var legendTextDrivenHeight = (dataSet.length * textVerticalSpace) + margin*2;
    // Autoadjust Canvas Height
    if (pieDrivenHeight >= legendTextDrivenHeight)
    {
    canvasHeight = pieDrivenHeight;
    }
    else
    {
    canvasHeight = legendTextDrivenHeight;
    }

      var x = d3.scale.linear().domain([0, d3.max(dataSet, function(d) { return d.magnitude; })]).rangeRound([0, pieWidthTotal]);
      var y = d3.scale.linear().domain([0, dataSet.length]).range([0, (dataSet.length * 20)]);


      var synchronizedMouseOver = function() {
        var arc = d3.select(this);
        var indexValue = arc.attr("index_value");

        var arcSelector = "." + "pie-" + pieName + "-arc-" + indexValue;
        var selectedArc = d3.selectAll(arcSelector);
        selectedArc.style("fill", "Maroon");

        var bulletSelector = "." + "pie-" + pieName + "-legendBullet-" + indexValue;
        var selectedLegendBullet = d3.selectAll(bulletSelector);
        selectedLegendBullet.style("fill", "Maroon");

        var textSelector = "." + "pie-" + pieName + "-legendText-" + indexValue;
        var selectedLegendText = d3.selectAll(textSelector);
        selectedLegendText.style("fill", "Maroon");
      };

      var synchronizedMouseOut = function() {
        var arc = d3.select(this);
        var indexValue = arc.attr("index_value");
        // id_layer_select_pie = indexValue;
        // console.log("*****************");

        var arcSelector = "." + "pie-" + pieName + "-arc-" + indexValue;
        var selectedArc = d3.selectAll(arcSelector);
        var colorValue = selectedArc.attr("color_value");
        selectedArc.style("fill", colorValue);

        var bulletSelector = "." + "pie-" + pieName + "-legendBullet-" + indexValue;
        var selectedLegendBullet = d3.selectAll(bulletSelector);
        var colorValue = selectedLegendBullet.attr("color_value");
        selectedLegendBullet.style("fill", colorValue);

        var textSelector = "." + "pie-" + pieName + "-legendText-" + indexValue;
        var selectedLegendText = d3.selectAll(textSelector);
        selectedLegendText.style("fill", "#089fcf");
      };

      var tweenPie = function (b) {
        b.innerRadius = 0;
        var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
        return function(t) {
          return arc(i(t));
        };
      }
       $(selectString).html("");
       $(selectString).css("display", "block");

      // Create a drawing canvas...
      var canvas = d3.select(selectString)
        .append("svg:svg") //create the SVG element inside the <body>
          .data([dataSet]) //associate our data with the document
          .attr("width", 210) //set the width of the canvas canvasWidth
          .attr("height", 240) //set the height of the canvas  canvasHeight
          .append("svg:g") //make a group to hold our pie chart
            .attr("transform", "translate(" + pieCenterX + "," + pieCenterY + ")") // Set center of pie

    // Define an arc generator. This will create <path> elements for using arc data.
      var arc = d3.svg.arc()
          .innerRadius(innerRadius) // Causes center of pie to be hollow
          .outerRadius(outerRadius);

      var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([130, 0])
          .html(function(d) {
            return "<span style='color:#424242'>" + findElement(d.data.legendLabel) + ", <span>"+d.data.magnitude;
          })
   //, </span><span style='color:#089fcf'>" + d.data.magnitude + "</span>
    // Define a pie layout: the pie angle encodes the value of dataSet.
    // Since our data is in the form of a post-parsed CSV string, the
    // values are Strings which we coerce to Numbers.
      var pie = d3.layout.pie()
    .value(function(d) { return d.magnitude; })
    .sort(function(a, b) {if (sortArcs==1) { return b.magnitude - a.magnitude; } else { return null; } });

      // Select all <g> elements with class slice (there aren't any yet)
      var arcs = canvas.selectAll("g.slice")
        // Associate the generated pie data (an array of arcs, each having startAngle,
        // endAngle and value properties)
        .data(pie)
        // This will create <g> elements for every "extra" data element that should be associated
        // with a selection. The result is creating a <g> for every object in the data array
        // Create a group to hold each slice (we will have a <path> and a <text>      // element associated with each slice)
    .enter().append("svg:a")
          .attr("xlink:href", function(d) { return d.data.link; })
          .append("svg:g")
            .attr("class", "slice")    //allow us to style things in the slices (like text)
            // Set the color for each slice to be chosen from the color function defined above
            // This creates the actual SVG path using the associated data (pie) with the arc drawing function
            .style("stroke", "#E9E8F7" )
            .attr("d", arc);

        canvas.call(tip);

      arcs.append("svg:path")
        // Set the color for each slice to be chosen from the color function defined above
        // This creates the actual SVG path using the associated data (pie) with the arc drawing function
        .attr("fill", function(d, i) { return colorScale(i); } )
        .attr("color_value", function(d, i) { return colorScale(i); }) // Bar fill color...
        .attr("index_value", function(d, i) { return "index-" + i; })
        .attr("class", function(d, i) { return "pie-" + pieName + "-arc-index-" + i; })
        .style("stroke", "#E9E8F7" )
        .attr("d", arc)
        .on('mouseover', tip.show)
        .on("mouseout", tip.hide)
        // .on('mouseover', synchronizedMouseOver)
        // .on("mouseout", synchronizedMouseOut)
        .transition()
          .ease("bounce")
          .duration(2000)
          .delay(function(d, i) { return i * 50; })
          .attrTween("d", tweenPie);

          arcs.on("click", function(d) {
            get_coordinates_by_name_layer(d.data.legendLabel);
            d3.event.stopPropagation();
          });

   // });

      // Add a magnitude value to the larger arcs, translated to the arc centroid and rotated.
      arcs.filter(function(d) { return d.endAngle - d.startAngle > .2; }).append("svg:text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        //.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")"; })
        .attr("transform", function(d) { //set the label's origin to the center of the arc
          //we have to make sure to set these before calling arc.centroid
          d.outerRadius = outerRadius; // Set Outer Coordinate
          d.innerRadius = innerRadius; // Set Inner Coordinate
          return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")";
        })
        .style("fill", "#E9E8F7")
        .style("font", "normal 12px serif")
        .text(function(d) { return d.data.magnitude; });

      // Computes the angle of an arc, converting from radians to degrees.
      function angle(d) {
        var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
        return a > 90 ? a - 180 : a;
      }
      //       .on('mouseover', synchronizedMouseOver)
      //       .on("mouseout", synchronizedMouseOut);
            $(selectString).css({ opacity: 1.0 });
            //Drag.init(document.getElementById("pie_chart_mw"));

    };

    function geojsonMarkerOptions(feature) {
       return  {
         radius: 8,
         fillColor: "red",
         color: "red",
         weight: 1,
         opacity: 1,
         fillOpacity: 0.8
       };
     }
    //  var geojsonMarkerOptions = {
    //      radius: 8,
    //      fillColor: "#FFFC00",
    //      color: "#E8E66C",
    //      weight: 1,
    //      opacity: 1,
    //      fillOpacity: 0.8
    //  };
    function get_coordinates_by_name_layer(name_layer){

        var arr_obj_bbxylayer = [];

        var arr_bbox = [];
        var arr_layer = [];
        var projection = ", 4326";
        var indice = 0;
        var td = 0;
        var obj_l = [];
        var obj_l_b = "";

        arr_obj_bbxylayer["bbox"] = [];
        arr_obj_bbxylayer["layers"] = [];

        var bbox = map.getBounds();
        arr_obj_bbxylayer["bbox"].push([bbox]);
        arr_obj_bbxylayer["layers"].push([up.get_global_layer()]);
        arr_bbox.push(bbox["_northEast"]["lng"]);
        arr_bbox.push(bbox["_northEast"]["lat"]);
        arr_bbox.push(bbox["_southWest"]["lng"]);
        arr_bbox.push(bbox["_southWest"]["lat"]);
        arr_bbox.push(4312);

        var element = $('input:radio[name=element]:checked').val();
        $('.less-selected').html("");

        if(element=="count")
        {
          $('input:checkbox[name=base_check]:checked').each(
              function() {
                if (td==0) {
                  if (name_layer==$(this).val()) {
                    td +=1;
                    obj_l.push($(this).val());
                  }
                }
              }
          );

          for (var i = 0; i < up.get_global_layer().length; i++) {
            if ("No background" != up.get_global_layer_specific(i).options.layers){
                  var name_lay = up.get_global_layer_specific(i).options.layers.split(":");
                  if (obj_l.length==0) {
                      $('.less-selected').html("Selecciona una o varias capas para totalizarlas");
                      return;
                  }
                  for (var z = 0; z < obj_l.length; z++) {
                    if (name_lay[1]==obj_l[z]) {
                      indice +=1;
                      if(indice>=5){
                        $('.less-selected').html("Tu selección debe ser menor a 5 datos");
                        $("#pie_chart_mw").css("display", "none");
                        return;
                      }else {
                        $('.less-selected').html("Procesando solicitud...");
                        arr_layer.push(name_lay[1]);
                      }
                    }
                  }
            }
          }
        }
        else{
          // console.log("analisys");
          $('input:checkbox[name=chb]:checked').each(
              function() {
                if (td==0) {
                  if (name_layer==$(this).val()) {
                    td +=1;
                    // console.log("es identico ");
                    obj_l.push($(this).val());
                  }
                  // else {
                  //   console.log("no entro");
                  // }
                }
                // else {
                //   console.log("se fue");
                // }
              }
          );
          $('input:radio[name=base]:checked').each(
              function() {
                obj_l_b = $(this).val();
                // console.log("llego a base");
                // console.log($(this).val());
              }
          );

          for (var i = 0; i < up.get_global_layer().length; i++) {
            if ("No background" != up.get_global_layer_specific(i).options.layers){

                if (obj_l.length==0) {
                    // console.log("Selecciona una o varias capas para hacer la intersección");
                    return;
                }
                if (obj_l_b.length==0) {
                    // console.log("Selecciona una capa base para hacer la intersección");
                    return;
                }
                var name_lay = up.get_global_layer_specific(i).options.layers.split(":");
                for (var z = 0; z < obj_l.length; z++) {
                  if (name_lay[1]==obj_l[z]) {
                    indice +=1;
                    if(indice>=5){
                      // console.log("Tu selección debe ser menor a 5 datos");
                      $("#pie_chart_mw").css("display", "none");
                      return;
                    }else {
                      // console.log("Procesando solicitud, espere un momento...");
                      arr_layer.push(name_lay[1]);
                    }
                  }
                }
                  if (name_lay[1]==obj_l_b) {
                      var arr_layer_base = [];
                      // console.log("Datos gráficados");
                      arr_layer_base.push(name_lay[1]);
                      // console.log("Procesando solicitud, espere un momento...");
                  }
              }
          }
        }
        // console.log("SI HAY BASE");
        $.ajax({
       data: {'bbox': JSON.stringify(arr_bbox), 'layers': JSON.stringify(arr_layer),'layer_base': JSON.stringify(arr_layer_base),
              csrfmiddlewaretoken: '{{ csrf_token }}'
             },
       url: '{% url "get_geoJson_by_name_layer_tool" %}',
       type: 'POST',
       success : function(shapes) {
         deleteAllGeoJson();
        for (var i = 0; i < shapes.length; i++) {
          // console.log(shapes[i]);
          L.geoJson(shapes[i], {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          }
      }).addTo(map);
        }

       },
       error : function(message) {
               console.log(message);
            }
       });
    };
    function deleteAllGeoJson() {
        $.each(map._layers, function (ml) {
            if (map._layers[ml].feature) {
                map.removeLayer(this);
            }
        })
    }
function findElement(arr) {
  for (var i = 0; i <= up.get_base_layer().length; i++) {
    var arr_n = arr.replace('"','').replace('"','');
    if (arr_n == up.get_base_layer_specific(i)){
      return up.get_title_layer_specific(i);
    }
    // will return undefined if not found; you could return a default instead
  }
}

</script>
