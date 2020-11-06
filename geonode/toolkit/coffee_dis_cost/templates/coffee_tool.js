<script type="text/javascript">
var geojson_calorg, json_calorg, geojson_caldif, json_caldif, geojson_difres, json_difres, maxval=0, raster_costo;
function calcular_cafe_org(){

    if(geojson_calorg != null){
        map.removeLayer(geojson_calorg);
        $("#lcafe1").remove();
    }

    function getColor(d) {
        return d > 227932 ? '#800026' :
               d > 167529  ? '#BD0026' :
               d > 125291  ? '#E31A1C' :
               d > 98766  ? '#FC4E2A' :
               d > 80357   ? '#FD8D3C' :
               d > 62114   ? '#FEB24C' :
               d > 42216   ? '#FED976' :
                          '#FFEDA0';
    }

    function geojsonMarkerOptions(feature) {
        return {
            fillColor: getColor(feature.properties.costo_total),
            radius: 4.5,
            color: "#000",
            weight: 0,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    function legend() {

        var div = '<div class="info legend">',
            grades = [0, 42216, 62114, 80357, 98766, 125291, 167529, 227932];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        div += '</div>';
        return div;
    };

    $.ajax({
         data: {
                csrfmiddlewaretoken: '{{ csrf_token }}'
               },
         url: '{% url "calcula" %}',
         type: 'POST',
         success : function(data) {
            json_calorg = JSON.parse(data);
            geojson_calorg = L.geoJSON(json_calorg, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, geojsonMarkerOptions(feature));
                    }
                }
            ).addTo(map);
            map_layers.push(geojson_calorg);
            $( "#module-legend ul.layers" ).append( '<li id="lcafe1" class="layer layer-info-container" leaflet-id="'+geojson_calorg._leaflet_id+'" style="border-left: 4px solid rgb(229, 208, 16);"><span class="layer-name -alerts"><div class="no-sort container-eye-icon"><i class="fa fa-eye eyeon" aria-hidden="true"></i></div><div class="l-title" style="width:230px;">Costo cultivos</div><div class="no-sort pull-right" style="display: none;"><div class="tools no-sort" style="display:none;"><a href="#" class="f15" title="Leyenda"><i class="fa fa-list-alt" aria-hidden="true"></i></a><a href="#" class="f15" title="Opacidad"><i class="fa fa-arrows-h" aria-hidden="true"></i></a><a href="#" class="f15" title="Info"><i class="fa fa-info-circle" aria-hidden="true"></i></a><a href="#" class="f15" title="Eliminar"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div><div class="pull-right"><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="lcafe1"></i></div></div><div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery">'+legend()+'</a></div><div id="sld-st1l5r1" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'+geojson_calorg._leaflet_id+'"><span id="percent'+geojson_calorg._leaflet_id+'">100%</span></div></span></li></ul>' );
         },
         error : function(message) {
                 console.log(message);
              }
     });
}
function calcular_cafe_dif(){

    if(geojson_caldif != null){
        map.removeLayer(geojson_caldif);
        $("#lcafe2").remove();
    }
    if(geojson_difres != null){
        map.removeLayer(geojson_difres);
        $("#lcafe3").remove();

    }
    if(raster_costo != null){
        map.removeLayer(raster_costo);
        $("#lcafe4").remove();
    }

    function getColor(d) {
        return d > 227932 ? '#800026' :
               d > 167529  ? '#BD0026' :
               d > 125291  ? '#E31A1C' :
               d > 98766  ? '#FC4E2A' :
               d > 80357   ? '#FD8D3C' :
               d > 62114   ? '#FEB24C' :
               d > 42216   ? '#FED976' :
                          '#FFEDA0';
    }

    function geojsonMarkerOptions(feature) {
        return {
            fillColor: getColor(feature.properties.costo_total),
            radius: 4.5,
            color: "#000",
            weight: 0,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    function legend() {

        var div = '<div class="info legend">',
            grades = [0, 42216, 62114, 80357, 98766, 125291, 167529, 227932];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        div += '</div>';
        return div;
    };


    $.ajax({
         data: {
                csrfmiddlewaretoken: '{{ csrf_token }}'
               },
         url: '{% url "recalcula" %}',
         type: 'POST',
         success : function(data) {
            loadtif();
            json_caldif = JSON.parse(data);
            geojson_caldif = L.geoJSON(json_caldif, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, geojsonMarkerOptions(feature));
                    }
                }
            ).addTo(map);
            map_layers.push(geojson_caldif);
            $( "#module-legend ul.layers" ).append( '<li id="lcafe2" class="layer layer-info-container" leaflet-id="'+geojson_caldif._leaflet_id+'" style="border-left: 4px solid rgb(229, 208, 16);"><span class="layer-name -alerts"><div class="no-sort container-eye-icon"><i class="fa fa-eye eyeon" aria-hidden="true"></i></div><div class="l-title" style="width:230px;">Costo de cultivos recalculado</div><div class="no-sort pull-right" style="display: none;"><div class="tools no-sort" style="display:none;"><a href="#" class="f15" title="Leyenda"><i class="fa fa-list-alt" aria-hidden="true"></i></a><a href="#" class="f15" title="Opacidad"><i class="fa fa-arrows-h" aria-hidden="true"></i></a><a href="#" class="f15" title="Info"><i class="fa fa-info-circle" aria-hidden="true"></i></a><a href="#" class="f15" title="Eliminar"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div><div class="pull-right"><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="lcafe2"></i></div></div><div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery">'+legend()+'</a></div><div id="sld-st1l5r1" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'+geojson_caldif._leaflet_id+'"><span id="percent'+geojson_caldif._leaflet_id+'">100%</span></div></span></li></ul>' );
            $('div#difres').show( "slow" );
            $('div#recalcular').hide( "slow" );
         },
         error : function(message) {
                 console.log(message);
              }
     });
}
function calcular_cafe_difres(){

    if(geojson_difres != null){
        map.removeLayer(geojson_difres);
        $("#lcafe3").remove();
    }

    function getColor(d) {
        var rango = maxval/4
        return d > rango*3 ? '#005a32' :
               d > rango*2  ? '#41ab5d' :
               d > rango   ? '#a1d99b' :
               d > 1   ? '#c7e9c0' :
                          '#f7fcf5';
    }

    function geojsonMarkerOptions(feature) {
        return {
            fillColor: getColor(feature.properties.costo_total),
            radius: 4.5,
            color: "#000",
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        };
    }

    function legend() {
        var rango = maxval/4;
        var div = '<div class="info legend">',
            grades = [0, 1, parseInt(rango), parseInt(rango*2), parseInt(rango*3)];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        div += '</div>';
        return div;
    };


    $.ajax({
         data: {
                csrfmiddlewaretoken: '{{ csrf_token }}'
               },
         url: '{% url "caldif" %}',
         type: 'POST',
         success : function(data) {
            json_difres = JSON.parse(data);
            maxval = json_difres.features.reduce(function(max, x) { return (x.properties.costo_total > max) ? x.properties.costo_total : max; }, 0);
            geojson_difres = L.geoJSON(json_difres, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, geojsonMarkerOptions(feature));
                    }
                }
            ).addTo(map);
            map_layers.push(geojson_difres);
            $( "#module-legend ul.layers" ).append( '<li id="lcafe3" class="layer layer-info-container" leaflet-id="'+geojson_difres._leaflet_id+'" style="border-left: 4px solid rgb(229, 208, 16);"><span class="layer-name -alerts"><div class="no-sort container-eye-icon"><i class="fa fa-eye eyeon" aria-hidden="true"></i></div><div class="l-title" style="width:230px;">Diferencia en costo</div><div class="no-sort pull-right" style="display: none;"><div class="tools no-sort" style="display:none;"><a href="#" class="f15" title="Leyenda"><i class="fa fa-list-alt" aria-hidden="true"></i></a><a href="#" class="f15" title="Opacidad"><i class="fa fa-arrows-h" aria-hidden="true"></i></a><a href="#" class="f15" title="Info"><i class="fa fa-info-circle" aria-hidden="true"></i></a><a href="#" class="f15" title="Eliminar"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div><div class="pull-right"><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="lcafe3"></i></div></div><div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery">'+legend()+'</a></div><div id="sld-st1l5r1" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'+geojson_difres._leaflet_id+'"><span id="percent'+geojson_difres._leaflet_id+'">100%</span></div></span></li></ul>' );
            $('div#difres').hide( "slow" );
         },
         error : function(message) {
                 console.log(message);
              }
     });
}
function addnodes(){
    var tipo = $('#tiponode').find(":selected").val();
    if(shapes['marker'].length >= 1){
        var time = 0;
        $.each(shapes['marker'], function (i) {
            setTimeout(function() {
            var lat = parseFloat(shapes['marker'][i]._latlng.lat);
            var lng = parseFloat(shapes['marker'][i]._latlng.lng);
            var latlng = [lat, lng];
            query_data = {
                coords: latlng,
                tipo: tipo
            }
            $.ajax({
                 data: {
                        csrfmiddlewaretoken: '{{ csrf_token }}',
                        'query_data': JSON.stringify(query_data)
                       },
                 url: '{% url "addnode" %}',
                 type: 'POST',
                 success : function(data) {
                    featureGroup.removeLayer(shapes['marker'][i]);
                 },
                 error : function(message) {
                         console.log(message);
                      }
             });
             //shapes['marker'].splice(i,1);
             }, time);
             time += 1000;
                //shapes['marker']=[];
         });
         $('div#recalcular').show( "slow" );
         $('div#difres').hide( "slow" );
     }
}
function rallnodes(){
        $.ajax({
             data: {
                    csrfmiddlewaretoken: '{{ csrf_token }}'
                   },
             url: '{% url "rallnodes" %}',
             type: 'POST',
             success : function(data) {
                if(geojson_difres != null){
                    map.removeLayer(geojson_difres);
                    $("#lcafe3").remove();

                }
                if(geojson_caldif != null){
                    map.removeLayer(geojson_caldif);
                    $("#lcafe2").remove();
                }
                if(raster_costo != null){
                    map.removeLayer(raster_costo);
                    $("#lcafe4").remove();
                }

             },
             error : function(message) {
                     console.log(message);
                  }
         });
     $('div#recalcular').hide( "slow" );
     $('div#difres').hide( "slow" );
 }
function loadtif(){

var toggleClip = function () {
        var newClipMask = raster_costo.options.clip ? undefined : clipMask;
        raster_costo.setClip(newClipMask);
    }

var clipMask = [[-93.21669722665777,17.958031052919914],[-93.14523822652666,17.93305387986645],[-93.09527310511946,17.841751624733995],[-93.01208696333856,17.798402091504634],[-93.05733138583706,17.724365272718632],[-93.04068239328753,17.610541687570056],[-92.9590065372928,17.49494248916834],[-92.88751040265248,17.511183012613614],[-92.83077681350618,17.48032622584545],[-92.75533440838663,17.344742455824417],[-92.67784878760101,17.380714930199456],[-92.66774844439884,17.457694034224215],[-92.5943276790035,17.493153992787516],[-92.52013014314812,17.573766037630477],[-92.41642839181958,17.5769518025563],[-92.35153924006251,17.618164083182418],[-92.35002980430934,17.703497002926206],[-92.27455796966443,17.692847156576537],[-92.09060016561405,17.857304771385394],[-91.99141478629186,17.920314860184057],[-91.89127569051091,17.887751475912285],[-91.81630720747694,17.900848716376526],[-91.78199890813883,17.854992761935268],[-91.7823876113098,17.71021117753655],[-91.65821598405363,17.676015202868445],[-91.63494497142715,17.534498964987446],[-91.67216231758809,17.444782831176713],[-91.55890758621467,17.401255570748393],[-91.41715111821382,17.371535113685233],[-91.42821325534094,17.218021346651522],[-91.27765943305799,17.179181583114772],[-91.26751198670654,17.10827014067999],[-91.06559364951956,16.921171005954417],[-90.96754473754977,16.900832659439104],[-90.88747314937126,16.82345323855173],[-90.709565466918,16.721660716877924],[-90.65914206749208,16.642104806253425],[-90.64359235063898,16.515007761921154],[-90.58662988041435,16.469570519220188],[-90.39145069381092,16.40297357883489],[-90.45358465768103,16.224276483559606],[-90.42861488564779,16.174809334006255],[-90.44204147290603,16.074257322357308],[-91.15094448753996,16.074286554868188],[-91.73064986434642,16.073558327131583],[-92.21059656149241,15.261423620920418],[-92.07470484407865,15.089259712353881],[-92.08611970445854,15.022217166892082],[-92.1458581269213,14.979264321580473],[-92.13675707002957,14.897349957400035],[-92.18181785879597,14.847574265672908],[-92.14603356673574,14.662165661025773],[-92.18271718400965,14.578895655132987],[-92.23829231335104,14.541419963627513],[-92.51855721301688,14.807507925942463],[-92.99277539415213,15.290026758435292],[-93.31768798029651,15.577715810824772],[-93.528234072302,15.745147337768039],[-93.77262718678112,15.911033787501863],[-93.89781167156382,15.975670775245463],[-93.85455181760568,16.0141832538198],[-93.89833832955117,16.08371651348198],[-94.08576063657175,16.12411022238012],[-94.11137275136372,16.175825414248582],[-94.0447351062932,16.222990850956307],[-94.03662516715085,16.358496986576352],[-94.08489118961816,16.450991236269005],[-94.13977060232509,16.464620646306468],[-93.86248905265836,17.152280507428195],[-93.77275605955487,17.246444970151405],[-93.66286835256291,17.257008080362418],[-93.51117700178658,17.44909247940067],[-93.48000886238066,17.551464134263455],[-93.35644062601644,17.648749961040924],[-93.34092919186355,17.924339900313246],[-93.27288201023934,17.982034019188504],[-93.21669722665777,17.958031052919914]]
    for (var i=0;i<clipMask.length;i++) {
        var tmp = clipMask[i][0];
        clipMask[i][0] = clipMask[i][1];
        clipMask[i][1] = tmp;
    }
    raster_costo = L.leafletGeotiff(
            url='{{MEDIA_URL}}coffee_dis_cost/costodif.tif',
            options={band: 0,
                displayMin: 11000,
                displayMax: 380000,
                name: 'Costo Cafe',
                colorScale: 'raster',
                clampLow: false,
                clampHigh: true,
                //vector:true,
                arrowSize: 20,
            }
        ).addTo(map);
    map_layers.push(raster_costo);
    $( "#module-legend ul.layers" ).append( '<li id="lcafe4" class="layer layer-info-container" leaflet-id="'+raster_costo._leaflet_id+'" style="border-left: 4px solid rgb(229, 208, 16);"><span class="layer-name -alerts"><div class="no-sort container-eye-icon"><i class="fa fa-eye eyeon" aria-hidden="true"></i></div><div class="l-title" style="width:230px;">Raster - Costo cultivos</div><div class="no-sort pull-right" style="display: none;"><div class="tools no-sort" style="display:none;"><a href="#" class="f15" title="Leyenda"><i class="fa fa-list-alt" aria-hidden="true"></i></a><a href="#" class="f15" title="Opacidad"><i class="fa fa-arrows-h" aria-hidden="true"></i></a><a href="#" class="f15" title="Info"><i class="fa fa-info-circle" aria-hidden="true"></i></a><a href="#" class="f15" title="Eliminar"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div><div class="pull-right"><i data-toggle="tooltip" title="Herramientas" class="vtools fa fa-chevron-left" data-id="lcafe4"></i></div></div><div class="thumb"><a class="thumbnail2" href="#" data-target="#image-gallery">Min <img id="colorScaleImage" src="" style="vertical-align: middle; height:20px; width:180px;"/> Max</a></div><div id="sld-st1l5r1" class="no-sort slidecontainer" style="display:none;"><input type="range" min="1" max="100" value="100" class="slider" id="'+raster_costo._leaflet_id+'"><span id="percent'+raster_costo._leaflet_id+'">100%</span></div></span></li></ul>' );
    toggleClip();
    document.getElementById('colorScaleImage').setAttribute('src',raster_costo.colorScaleData);
}
</script>