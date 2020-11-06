<script type="text/javascript">
/*
This class js is for grafics of select loney spatial objects
*/
var chart_XCrop = null;
var chart_XCropHaraversted = null;
var chart_XCrop_specific = null;
var chart_xcrop_haraversted_specific = null;
var chart_GeneralCrop = null;
var chart_performance = null;
var chart_ac_ageb_mun = null;
var chart_generic_pv = null;
var chart_generic_oi = null;
var chart_generic_perennes = null;
var chart_generic_pv_cos = null;
var chart_generic_oi_cos = null;
var chart_generic_pn_cos = null;
var bubble_generic_correlation_pv = null;
var bar_generic_installations = null;
var bar_generic_wood = null;
var bar_generic_wood_non = null;

class LoneySpatial{
  //Event for delete graphics
  deleteGraphics(){
    if (chart_XCrop != null) {
      chart_XCrop.clearChart();
    }
    if (chart_XCropHaraversted != null) {
      chart_XCropHaraversted.clearChart();
    }
    if (chart_GeneralCrop != null) {
      chart_GeneralCrop.clearChart();
    }
    if (chart_performance != null) {
      chart_performance.clearChart();
    }
    if (chart_ac_ageb_mun != null) {
      chart_ac_ageb_mun.clearChart();
    }
    if (chart_XCrop_specific != null) {
      chart_XCrop_specific.clearChart();
    }
    if (chart_xcrop_haraversted_specific != null) {
      chart_xcrop_haraversted_specific.clearChart();
    }
  }

  getGenericBubble(title_pv, data, id_crop, chart){
    var jsonObjPie2 = [];
    jsonObjPie2 = dataGenerateBubblePV(data);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawBubble);

function drawBubble() {
  var data = google.visualization.arrayToDataTable(jsonObjPie2);

  var options = {
    title: 'Distribución del volumen de la cosecha por unidades productivas', //+
          //  'entre los cultivos cosechados y los cultivos sembrados del censo agropecuario (2010)',
   chartArea: {width: '90%'},
   legend: {position: 'top', maxLines: 3},
   backgroundColor:{
         fill:'none'
         },
   colorAxis: {colors: ['#f990df', '#8E44AD']},
    hAxis: {title: 'Cosecha (TON)'},
    vAxis: {title: 'UP'},
    bubble: {textStyle: {fontSize: 11}}
  };
if (id_crop=='correlation-pv') {
  if (bubble_generic_correlation_pv != null) {
    bubble_generic_correlation_pv.clearChart();
    bubble_generic_correlation_pv = null;
    bubble_generic_correlation_pv = new google.visualization.BubbleChart(document.getElementById(id_crop));
    bubble_generic_correlation_pv.draw(data, options);
  }else {
    bubble_generic_correlation_pv = new google.visualization.BubbleChart(document.getElementById(id_crop));
    bubble_generic_correlation_pv.draw(data, options);
  }
}
}
  }
  getGenericPay(title_pv, data, id_crop, chart){
    var jsonObjPie2 = [];
     if (id_crop=='piechart-crop-edo') {
       jsonObjPie2 = dataGeneratePiePV(data, false);
     }else if (id_crop=='piechart-crop-edo-cos') {
       jsonObjPie2 = dataGeneratePiePV(data, true);
     }else {
       console.log(data);
       console.log("pìe");
       jsonObjPie2 = dataGeneratePie(data);//To do checar este objeto biene mal
     }
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartCrop);

function drawChartCrop() {
  var data = google.visualization.arrayToDataTable(jsonObjPie2);

  var options = {
    title: title_pv,
    chartArea: {width: '100%'},
    // legend: {position: 'top', maxLines: 3},
    backgroundColor:{
          fill:'none'
          },
    colors: ['#2c7fb8', '#41b6c4', '#a1dab4', '#ffffcc', '#8E44AD'],
    is3D: true
  };
if (id_crop=='piechart-crop-edo-pn') {
  if (chart_generic_perennes != null) {
    chart_generic_perennes.clearChart();
    chart_generic_perennes = null;
    chart_generic_perennes = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_perennes.draw(data, options);
  }else {
    chart_generic_perennes = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_perennes.draw(data, options);
  }
}else if (id_crop=='piechart-crop-edo-oi') {
  if (chart_generic_oi != null) {
    chart_generic_oi.clearChart();
    chart_generic_oi = null;
    chart_generic_oi = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_oi.draw(data, options);
  }else {
    chart_generic_oi = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_oi.draw(data, options);
  }
}else if (id_crop=='piechart-crop-edo') {
  if (chart_generic_pv != null) {
    chart_generic_pv.clearChart();
    chart_generic_pv = null;
    chart_generic_pv = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_pv.draw(data, options);
  }else {
    chart_generic_pv = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_pv.draw(data, options);
  }
}else if (id_crop=='piechart-crop-edo-cos') {
  if (chart_generic_pv_cos != null) {
    chart_generic_pv_cos.clearChart();
    chart_generic_pv_cos = null;
    chart_generic_pv_cos = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_pv_cos.draw(data, options);
  }else {
    chart_generic_pv_cos = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_pv_cos.draw(data, options);
  }
}else if (id_crop=='piechart-crop-edo-oi-cos') {
  if (chart_generic_oi_cos != null) {
    chart_generic_oi_cos.clearChart();
    chart_generic_oi_cos = null;
    chart_generic_oi_cos = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_oi_cos.draw(data, options);
  }else {
    chart_generic_oi_cos = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_oi_cos.draw(data, options);
  }
}else if (id_crop=='piechart-crop-edo-pn-cos') {
  if (chart_generic_pn_cos != null) {
    chart_generic_pn_cos.clearChart();
    chart_generic_pn_cos = null;
    chart_generic_pn_cos = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_pn_cos.draw(data, options);
  }else {
    chart_generic_pn_cos = new google.visualization.PieChart(document.getElementById(id_crop));
    chart_generic_pn_cos.draw(data, options);
  }
}
}
  }
  getGenericBar(title_pv, data, id_crop){
    var jsonObjPie2 = [];
     if (id_crop=='barchart-wood') {
       jsonObjPie2 = dataGenerateBarWood(data, true);
     }else {
       console.log(data);
       console.log("pìe");
       jsonObjPie2 = dataGenerateBarWood(data, false);//To do checar este objeto biene mal
     }
     if (jsonObjPie2 != null) {
       console.log(jsonObjPie2);
       google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawBarWood);
     }

function drawBarWood() {
  var data = google.visualization.arrayToDataTable(jsonObjPie2);

  // var options = {
  //   title: title_pv,
  //   chartArea: {width: '100%'},
  //   // legend: {position: 'top', maxLines: 3},
  //   backgroundColor:{
  //         fill:'none'
  //         },
  //   bars: 'vertical',
  //   colors: ['#2c7fb8', '#41b6c4', '#a1dab4', '#ffffcc', '#8E44AD'],
  //   is3D: true
  // };
  var options = {
          // title: title_pv,
          chartArea: {width: '80%'},
          legend: { position: 'none' },
          chart: { title: 'Chess opening moves',
                   subtitle: 'popularity by percentage' },
          bars: 'vertical', // Required for Material Bar Charts.
          backgroundColor:{
                  fill:'none'
                  },
          axes: {
            x: {
              0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };
if (id_crop=='barchart-wood') {
  if (bar_generic_wood != null) {
    bar_generic_wood.clearChart();
    bar_generic_wood = null;
    bar_generic_wood = new google.visualization.ColumnChart(document.getElementById(id_crop));
    bar_generic_wood.draw(data, options);
  }else {
    bar_generic_wood = new google.visualization.ColumnChart(document.getElementById(id_crop));
    bar_generic_wood.draw(data, options);
    console.log("yer");
  }
}else {
  if (bar_generic_wood_non != null) {
    bar_generic_wood_non.clearChart();
    bar_generic_wood_non = null;
    bar_generic_wood_non = new google.visualization.ColumnChart(document.getElementById(id_crop));
    bar_generic_wood_non.draw(data, options);
  }else {
    bar_generic_wood_non = new google.visualization.ColumnChart(document.getElementById(id_crop));
    bar_generic_wood_non.draw(data, options);
  }
}
}
  }
  //drawing the pie chart for sow
  updateChartXCultivo(){
    var title_Cro = "";
    var jsonObjPie = [];
    google.charts.load('current', {
      callback: function () {
      // begin drawing
      google.charts.setOnLoadCallback(drawChartPie);
      title_Cro = "% Superficie cosechada del cultivo en P-V";//+titles_fields[3][1]+"";
      jsonObjPie = dataGeneratePie(p008n06);
    },
      packages: ['corechart', 'corechart']
    });

        function drawChartPie() {
          var data = google.visualization.arrayToDataTable(jsonObjPie);
          var options = {
            // colors: ['#540747', '#840a70', '#b30e98', '#a40c8b', '#f257d9', '#f576e0', '#f796e7', '#f9b5ee', '#Superficiefcd5f5'],
            title: title_Cro,
            height: 320,
            width: 380
          };

          chart_XCrop = new google.visualization.PieChart(document.getElementById('pieXcropsSow_AC'));
          chart_XCrop.draw(data, options);
        }
  }
  //drawing the pie chart for sow
  updateChartXCultivoSpecific(){
    var title_Cro = "";
    var jsonObjPie = [];
    google.charts.load('current', {
      callback: function () {
      // begin drawing
      google.charts.setOnLoadCallback(drawChartPieSpeicific);
      title_Cro = "% Superficie cosechada del cultivo en P-V";//+titles_fields[3][1]+"";
      // jsonObjPie = dataGeneratePie(p008n06);
      jsonObjPie = dataGeneratePie(p008n06_delimiter);//To do checar este objeto biene mal
    },
      packages: ['corechart', 'corechart']
    });

        function drawChartPieSpeicific() {
          var data = google.visualization.arrayToDataTable(jsonObjPie);
          var options = {
            // colors: ['#540747', '#840a70', '#b30e98', '#a40c8b', '#f257d9', '#f576e0', '#f796e7', '#f9b5ee', '#Superficiefcd5f5'],
            title: title_Cro,
            height: 320,
            width: 380
          };

          chart_XCrop_specific = new google.visualization.PieChart(document.getElementById('pie-Xcrops-sow-specific-AC'));
          chart_XCrop_specific.draw(data, options);
        }
  }
  //drawing the pie chart for Harvested for specific place
  updatePietXHarvestedCropSpecificAC(){
    var jsonObjPie2 = [];
    var title_Cro2 = "";
        // google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {
        callback: function () {
          google.charts.setOnLoadCallback(drawChartPieSpecificSemb);
          jsonObjPie2 = dataGeneratePie(p008n10_delimiter);//To do checar este objeto biene mal
          title_Cro2 = "% "+titles_fields[3][1]+"";
        },
        packages: ['corechart', 'corechart']
      });

      function drawChartPieSpecificSemb() {
          var data = google.visualization.arrayToDataTable(jsonObjPie2);
          var options = {
            // colors: ['#9b3e0f', '#ca5113', '#e95d16', '#ec7335', '#ed7e44', '#f09364', '#f3a983', '#f6bea2', '#f9d4c1'],
            title: title_Cro2
          };

          chart_xcrop_haraversted_specific = new google.visualization.PieChart(
          document.getElementById('pie-Xcrops-harvested-specific-AC'));
          chart_xcrop_haraversted_specific.draw(data, options);
        }
  }
  //drawing the pie chart for Harvested
  updatePietXHarvestedCrop_AC(){
    var jsonObjPie2 = [];
    var title_Cro2 = "";
        // google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {
        callback: function () {
          google.charts.setOnLoadCallback(drawChartPie2);
          jsonObjPie2 = dataGeneratePie2(p008n10);//To do checar este objeto biene mal
          // title_Cro2 = "% Superficie Cosechado";
          title_Cro2 = "% "+titles_fields[3][1]+"";
        },
        packages: ['corechart', 'corechart']
      });

      function drawChartPie2() {
          var data = google.visualization.arrayToDataTable(jsonObjPie2);
          var options = {
            // colors: ['#9b3e0f', '#ca5113', '#e95d16', '#ec7335', '#ed7e44', '#f09364', '#f3a983', '#f6bea2', '#f9d4c1'],
            title: title_Cro2,
            height: 320,
            width: 380
          };

          chart_XCropHaraversted = new google.visualization.PieChart(
          document.getElementById('pieXcropsHarvested_AC'));
          chart_XCropHaraversted.draw(data, options);
        }
  }
  /*Draw Combo Chart bar for control area of two crops*/
  updateChart_AC(selectByUser){
    var jsonObj = [];
    if (selectByUser) {
      var sow_harvested = dataGenerateChartByUser(p008n06, p008n10);
    }
    else {
      var sow_harvested = dataGenerateChart(p008n06, p008n10);
    }
    var data_col = [{id: 'task', label: 'Anio', type: 'string'},
                 {id: 'hours', label: "Maíz Blanco", type: 'number'}];

    // google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {
    callback: function () {
      // begin drawing
        google.charts.setOnLoadCallback(drawComboChartBar);
    },
    packages: ['corechart', 'corechart']
  });

    function drawComboChartBar() {
      // console.log("draw");
      // console.log(sow_harvested);
    //   var d = [
    //    ['Cultivos', 'Sem', 'Cos'],
    //    ['Frijol',  165,      938],
    //    ['Coco',  136,      691]
    // ];
    // console.log(d);
      var data = new google.visualization.arrayToDataTable(sow_harvested);

          var options = {
          title: "Cultivos con mayor producción:",//" "+titles_fields[3][1]+" y "+titles_fields[4][1]+" con mayor producción.",
          titleTextStyle: {
            //  color: '#b9babf',
              fontName: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 14},
          // isStacked: true,
          // height: 500,
          // width: 760,
          height: 500,
          width: 760,
          legend: { position: 'top', maxLines: 3 },
          // legend: {title: '74440',position: 'top'},
          hAxis: {title: 'Superficie sebrada y cosechada con mayor producción.',
          titleTextStyle: {
            //  color: '#b9babf',
              fontName: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 14
            },
            // direction: -1,
            slantedText: true,
            slantedTextAngle: 25

         },
         seriesType: 'bars',
          series: {5: {type: 'line'}},
          vAxis: {minValue: 0},//, title: 'okok', titleTextStyle: {color: '#FF0000'}
        //  colors: ['#990099', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      //   is3D: true,

          scales: {
            xAxes: [{
                type: 'linear',
                position: 'top',
            }]
        }
        };
        chart_GeneralCrop = new google.visualization.ComboChart(
            document.getElementById('generalChartCrops_AC'));
        //$('#chart_div').css("display","block");
        chart_GeneralCrop.draw(data, options);
      }
  }
  /*Draw Combo Chart bar for control area of two crops*/
  updateChart_ACSpecific(){
    var jsonObj = [];

    var sow_harvested_specific = dataGenerateChartByUserSpecific(p008n06_delimiter, p008n10_delimiter);
    var data_col = [{id: 'task', label: 'Anio', type: 'string'},
                 {id: 'hours', label: "Maíz Blanco", type: 'number'}];
    google.charts.load('current', {
    callback: function () {
        google.charts.setOnLoadCallback(drawComboChartBarSpecific);
    },
    packages: ['corechart', 'corechart']
  });
    function drawComboChartBarSpecific() {

        var d = [
         ['Cultivos', 'Sem', 'Cos'],
         ['Frijol',  165,      938],
         ['Coco',  136,      691]
      ];
      // console.log(d);
      var data = new google.visualization.arrayToDataTable(sow_harvested_specific);
          var options = {
          title: "Cultivos con mayor producción:",//" "+titles_fields[3][1]+" y "+titles_fields[4][1]+" con mayor producción.",
          titleTextStyle: {
            //  color: '#b9babf',
              fontName: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 14},
          // isStacked: true,
          // height: 500,
          // width: 760,
          height: 500,
          width: 760,
          legend: { position: 'top', maxLines: 3 },
          // legend: {title: '74440',position: 'top'},
          hAxis: {title: 'Superficie sebrada y cosechada con mayor producción.',
          titleTextStyle: {
            //  color: '#b9babf',
              fontName: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 14
            },
            // direction: -1,
            slantedText: true,
            slantedTextAngle: 25

         },
         seriesType: 'bars',
          series: {5: {type: 'line'}},
          vAxis: {minValue: 0},//, title: 'okok', titleTextStyle: {color: '#FF0000'}
        //  colors: ['#990099', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      //   is3D: true,

          scales: {
            xAxes: [{
                type: 'linear',
                position: 'top',
            }]
        }
        };
        chart_GeneralCrop = new google.visualization.ComboChart(
            document.getElementById('ac_ageb_mun_chart'));
        //$('#chart_div').css("display","block");
        chart_GeneralCrop.draw(data, options);
      }
  }
  /*Draw Performance grafic for control area*/
  getPerformance(performance){
    google.charts.load('current', {
    callback: function () {
      // begin drawing
       google.charts.setOnLoadCallback(drawPerform);
    },
    packages: ['corechart', 'gauge']
  });
   function drawPerform() {

     var data = google.visualization.arrayToDataTable([
       ['Label', 'Value'],
       ['Rendimiento', performance]
     ]);

     var options = {
       width: 400, height: 120,
       redFrom: 0, redTo: 20,
       yellowFrom:20, yellowTo: 50,
       greenFrom:50, greenTo: 100,
       minorTicks: 5
     };


     chart_performance = new google.visualization.Gauge(document.getElementById('performance_ac'));
     chart_performance .draw(data, options);
   }
  }
  /*Draw Combo Chart bar for control area of two crops*/
  acAgebMunChart(nivel){
    var jsonObj = [];

    var sow_harvested = dataGenerateChartDelimiter(p008n06_delimiter, p008n10_delimiter);

    var data_col = [{id: 'task', label: 'Anio', type: 'string'},
                 {id: 'hours', label: "Maíz Blanco", type: 'number'}];

    // google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {
    callback: function () {
      // begin drawing
        google.charts.setOnLoadCallback(multiDrawComboChartBar);
    },
    packages: ['corechart', 'corechart']
  });

    function multiDrawComboChartBar() {


      var data = new google.visualization.arrayToDataTable(sow_harvested);

          var options = {
          title: "Cultivos con mayor produccióna nivel "+nivel+":",//" "+titles_fields[3][1]+" y "+titles_fields[4][1]+" con mayor producción.",
          titleTextStyle: {
              fontName: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 14},
          height: 500,
          width: 760,
          legend: { position: 'top', maxLines: 3 },
          hAxis: {title: 'Superficie sebrada y cosechada con mayor producción.',
          titleTextStyle: {
              fontName: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 14
            },
            slantedText: true,
            slantedTextAngle: 25

         },
         seriesType: 'bars',
          series: {5: {type: 'line'}},
          vAxis: {minValue: 0},//, title: 'okok', titleTextStyle: {color: '#FF0000'}

          scales: {
            xAxes: [{
                type: 'linear',
                position: 'top',
            }]
        }
        };
        chart_ac_ageb_mun = new google.visualization.ComboChart(
            document.getElementById('ac_ageb_mun_chart'));
        chart_ac_ageb_mun.draw(data, options);
      }
  }
}
</script>
