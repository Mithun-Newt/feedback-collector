google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(init);

function init() {
  drawChart('pie');

  document.getElementById('chart-type').addEventListener('change', function () {
    drawChart(this.value);
  });
}

function drawChart(type) {
  const data = google.visualization.arrayToDataTable([
    ['Goal', 'Progress'],
    ['No Poverty', 60],
    ['Quality Education', 80],
    ['Climate Action', 50]
  ]);

  let chart;
  let options = {
    title: 'SDG Progress Overview',
    width: '100%',
    height: 500
  };

  if (type === 'pie') {
    options.pieHole = 0.4;
    chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  } else {
    options.legend = { position: 'none' };
    options.hAxis = { title: 'Progress (%)' };
    chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  }

  chart.draw(data, options);
}
