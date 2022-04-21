//global variables
var apy = 0.29;
var amy = 0.024;
var periodicalResult = [0,0,0,0,0,0,0,0,0,0,0,0];
//math
function apyCalculator()
{
  var numOne, numTwo;
  numOne = parseInt(document.getElementById("apy_amount").value);
  numTwo = parseInt(document.getElementById("formControlRange").value);
  
  for (var i = 0; i < 12; i++){
  	periodicalResult[i] = numOne * (1 + (amy * (1 - numTwo/100)));
  	numOne = periodicalResult[i];
  }

  
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: [month[d.getMonth()], month[d.getMonth()+1], month[d.getMonth()+2], month[d.getMonth()+3], month[d.getMonth()+4], month[d.getMonth()+5], month[d.getMonth()+6], month[d.getMonth()+7], month[d.getMonth()+8], month[d.getMonth()-3], month[d.getMonth()-2], month[d.getMonth()-1]],
    datasets: [{
      label: "Total Orai",
      data: periodicalResult,
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true
  }
});
}



//month
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

//chart
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'Total Orai',
  data: {
    labels: [month[d.getMonth()], month[d.getMonth()+1], month[d.getMonth()+2], month[d.getMonth()+3], month[d.getMonth()+4], month[d.getMonth()+5], month[d.getMonth()+6], month[d.getMonth()+7], month[d.getMonth()+8], month[d.getMonth()-3], month[d.getMonth()-2], month[d.getMonth()-1]],
    datasets: [{
      label: "Value",
      data: periodicalResult,
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true
  }
});