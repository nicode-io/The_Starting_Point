const divChart = document.createElement("canvas");
divChart.setAttribute("id", "chartContainer");
divChart.setAttribute("style", "height: 300px; width: 100%;")
const firstHeading = document.getElementById("firstHeading");
firstHeading.after(divChart);

var ctx = document.getElementById('chartContainer').getContext('2d');

var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    chart = new CanvasJS.Chart("chartContainer",{
        title:{
            text:"Live Chart with dataPoints from External JSON"
        },
        data: [{
        type: "line",
        dataPoints : dataPoints,
        }]
    });
    chart.render();
    updateChart();
});

function updateChart() {
    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
        $.each(data, function(key, value) {
            dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1])
            });
       });
       chart.render();
       setTimeout(function(){updateChart()}, 1000);
    });
 }