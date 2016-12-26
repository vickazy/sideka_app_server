var  chartColors = {
    	red: 'rgb(255, 99, 132)',
    	blue: 'rgb(54, 162, 235)',
    	purple: 'rgb(153, 102, 255)'
};
var convertDate = function(date){
  var value = new Date(date)
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return value.getDate() + " " + monthNames[value.getMonth()] + " " + value.getFullYear();
}
var config = {
    type: 'line',
    data: {
        labels: content.map(d => convertDate(d.date)),
        datasets: [{
            label: "Berita",
            backgroundColor: chartColors.red,
            borderColor: chartColors.red,
            data: content.map(c => parseInt(c.blog.score * 100)),
            fill: false,
        }, {
            label: "Penduduk",
            fill: false,
            backgroundColor: chartColors.purple,
            borderColor: chartColors.purple,
            data: content.map(c => parseInt(c.penduduk.score * 100)),
        },{
          label: "Anggaran",
          fill: false,
          backgroundColor: chartColors.blue,
          borderColor: chartColors.blue,
          data: content.map(c => parseInt(c.apbdes.score * 100)),
        }
      ]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            text:'Chart Statistics'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};

window.onload = function() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'black';
      ctx.font = '26px Arial';
      ctx.fillText('Quick Brown Fox', 0, 26);
  }
    window.myLine = new Chart(ctx, config);
};
