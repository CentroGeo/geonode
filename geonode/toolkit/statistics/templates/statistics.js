<script type="text/javascript">
var stats_pie_data;

function reset_stats_tool() {
    $("#div-btn-stats").show();
    $('#stats').hide();
    $('#stats-result').hide();
    $("#collapse-icon-container").hide();
}

$('#btn-start-stats').click(function() {
    var swt_id = $(".layer-selected").attr('id').slice(1);
    var lay_id = $("#"+swt_id).attr('data-layid');

    data = {
        'lay_id': lay_id,
      }

    $.ajax({
        url: '{% url "get_layer_attr" %}',
        type: 'POST',
        data: {'data_attr': JSON.stringify(data),
               csrfmiddlewaretoken: '{{ csrf_token }}'
              },
        dataType: 'json',
        success: function(result) {
            $("#layer-attr").empty();
            $('#stats').show();
            $("#stats-select").show();

            var attr_list = [];
            var s_options = '<option value="">Seleccione</option>';

            /* Esta rutina permite ordenar los atributos*/
            $.each(result, function(k, value) {
                   attr_list.push(value);
            });

            attr_list = attr_list.sort( function(a, b) {
                           if(a.description & b.description){
                               var atl = a.description.toLowerCase();
                               var btl = b.description.toLowerCase();
                           } else {
                               var atl = a.attribute.toLowerCase();
                               var btl = b.attribute.toLowerCase();
                           }
                           if(atl < btl) return -1;
                           if(atl > btl) return 1;
                           return 0;
                        })
            /* Muestra la descripcion si tiene */
            $.each(attr_list, function(index, val) {
                var attr_type = val.type.split("xsd:")[1];
                if(val.description){
                    s_options += '<option value="'+val.attribute+'" data-type="'+attr_type+'">'+val.description+'('+attr_type+')</option>';
                } else {
                    s_options += '<option value="'+val.attribute+'" data-type="'+attr_type+'">'+val.attribute+'('+attr_type+')</option>';
                }
            });
            $("#div-btn-stats").hide();
            $("#layer-attr").append(s_options);
        },
        error : function(xhr,errmsg,err) {
            console.log('Error en el servidor')
            console.log(xhr.status + ": " + xhr.responseText);
        }
      });
});

$("#layer-attr").change(function(){
    var swt_id = $(".layer-selected").attr('id').slice(1);
    var table_name = $("#"+swt_id).attr('data-typename').split("geonode:")[1];
    var attr = $(this).val();
    var attr_type = $( "#layer-attr option:selected" ).attr('data-type');

    $("#s-table").empty();
    $("#s-chart").empty();
    $("#collapse-icon-container").hide();

    data = {
        'table_name': table_name,
        'attr': attr,
        'attr_type': attr_type,
      }

    $.ajax({
        url: '{% url "get_attr_stats" %}',
        type: 'POST',
        data: {'query_data': JSON.stringify(data),
               csrfmiddlewaretoken: '{{ csrf_token }}'
              },
        dataType: 'json',
        success: function(result) {
                if ('exceeded' in result){
                    $('#stats-result').hide();
                    $('#exceededMsg').show().delay(6000).fadeOut();
                  } else {
                    var html = '';
                    if(attr_type== 'int' || attr_type== 'long' || attr_type== 'double' ) {
                        html = '<label>Minimo:'+result[0]+'</label><br><label>Maximo:'+result[1]+'</label><br><label>Promedio:</label>';
                        $("#s-table").append(html);
                        $('#pie-chart-stats').hide();
                        $('#stats-result').show();
                    } else {
                        if (result.length < 20) {
                            var html = '<table id="stats-table"><tr><th>Nombre</th><th>Cant.</th><th>Area [km2]</th></tr>';
                            $.each(result, function(index, val) {
                                html += '<tr><td>'+val['label']+'</td><td>'+val['value']+'</td><td>'+val['area'].toFixed(3)+'</td></tr>';
                            });
                            html += '</table>';
                            $("#s-table").append(html);
                            drawPieGraph(result, 'value');
                            $('#stats-result').show();
                        } else {
                            $('#stats-content-modal').show();
                            modalTable(result);
                            drawBarGraph(result, 'value');
                        }
                    }
                }
        },
        error : function(xhr,errmsg,err) {
            console.log('Error en el servidor')
            console.log(xhr.status + ": " + xhr.responseText);
        }
      });
});

$('input[type=radio][name=stats-radio]').change(function() {
    $("#s-chart").empty();
    if (this.value == 'area') {
        drawPieGraph(stats_pie_data, 'area')
    }
    else {
        drawPieGraph(stats_pie_data, 'value')
    }
});



function modalTable(data) {
    glyphicon_chevron_up = true;
    $("#collapse-icon-container").show();
    $("#close_ac_info").hide();
    $("#pie-chart-stats").hide();
    openInfo();

    $("#stats-modal-table").empty();
    $("#stats-modal-graph").empty();
    var html = '<table id="stats-modal-table"><tr><th></th><th>Nombre</th><th>Cant.</th><th>Area [km2]</th></tr>';
    $.each(data, function(index, val) {
        html += '<tr><td width="3%">'+(index+1)+'</td><td class="td-label">'+val['label']+'</td><td>'+val['value']+'</td><td>'+val['area'].toFixed(3)+'</td></tr>';
    });
    html += '</table>';
    $("#stats-modal-table").append(html);
}

function drawPieGraph(data, param) {
    stats_pie_data = data;
    $("#pie-chart-stats").show();
    $("input[name='stats-radio']").prop('checked', false);
    $("input[name='stats-radio'][value="+param+"]").prop('checked', true);

    var w = 205,
        h = 205,
        r = 100,
        color = d3.scale.category20c();

    var vis = d3.select("#s-chart")
        .append("svg:svg")
        .data([data])
            .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr("height", h)
            .attr("id", "svg-pie")
        .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
        .outerRadius(r);

    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d[param]; });    //we must tell it out to access the value of each element in our data array

    var tooltip = d3.select("#s-chart")
		.append('div')
		.attr('class', 'stats-tooltip');

		tooltip.append('div')
		.attr('class', 'label');

		tooltip.append('div')
		.attr('class', 'count');

		tooltip.append('div')
		.attr('class', 'percent');

    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)

        arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            //.text(function(d, i) { return i+1;/*data[i].value;*/ });        //get the label from our original data array

        arcs.on('mouseover', function(d) {
            var total = d3.sum(data.map(function(d) {return d[param];}));
            var percent = Math.round(1000 * d.data[param] / total) / 10;

            tooltip.select('.label').html(d.data.label).style('color','black');
            if (param == 'area') {
                tooltip.select('.count').html('Sup. '+d.data.area.toFixed(3)+' km2');
            } else {
                tooltip.select('.count').html('Cant. '+d.data.value);
            }
            tooltip.select('.percent').html(percent + '%');

            tooltip.style('display', 'block');
            tooltip.style('opacity', 0.8);
        });

        arcs.on('mousemove', function(d) {
            tooltip.style('top', (d3.event.layerY - 5) + 'px')
            .style('left', (d3.event.layerX - 25) + 'px');
        });

        arcs.on('mouseout', function() {
            tooltip.style('display', 'none');
            tooltip.style('opacity',0);
        });
}

function drawBarGraph(data, param) {
    stats_pie_data = data;
    $("input[name='stats-bar-radio']").prop('checked', false);
    $("input[name='stats-bar-radio'][value="+param+"]").prop('checked', true);
    // set the dimensions of the canvas
    var margin = {top: 20, right: 20, bottom: 40, left: 60},
        width = 700 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

    // define the axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    var svg = d3.select("#stats-modal-graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style({'background': 'white'})
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3.select("#stats-modal-graph")
        .append('div')
        .attr('class', 'stats-bar-tooltip');

        tooltip.append('div')
        .attr('class', 'label');

        tooltip.append('div')
        .attr('class', 'count');

        tooltip.append('div')
		.attr('class', 'percent');

  // scale the range of the data
  x.domain(data.map(function(d,i) { return i+1; }));
  y.domain([0, d3.max(data, function(d) { return d[param]; })]);

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Cantidad");

  // Add bar chart
  var bars = svg.selectAll("bar")
             .data(data)
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d, i) { return x(i+1); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d[param]); })
              .attr("height", function(d) { return height - y(d[param]); });

        bars.on('mouseover', function(d) {
            tooltip.select('.label').html(d.label).style('color','black');
            tooltip.select('.count').html('Cant. '+d.value);
            tooltip.select('.percent').html('Sup. '+d.area.toFixed(3)+' km2');
            tooltip.style('display', 'block');
            tooltip.style('opacity', 0.8);
        });

        bars.on('mousemove', function(d) {
            tooltip.style('top', (d3.event.layerY - 70) + 'px')
            .style('left', (d3.event.layerX - 45) + 'px');
        });

        bars.on('mouseout', function() {
            tooltip.style('display', 'none');
            tooltip.style('opacity',0);
        });
}

$("#STATISTICS-div .close-tool").click(function() {
  $("#collapse-icon-container").hide("slow");
  $('#stats-content-modal').hide();
  show_default();
});
</script>