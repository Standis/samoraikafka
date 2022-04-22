//global variables
var apy = 0.29;
var amy = 0.02417;
var periodicalResult = [0,0,0,0,0,0,0,0,0,0,0,0];
var noneCompoundResult  = [0,0,0,0,0,0,0,0,0,0,0,0];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];

var ctxL = document.getElementById("lineChart").getContext('2d');

//math
function apyCalculator()
{
  var numOne, numTwo;
  numOne = parseInt(document.getElementById("apy_amount").value);
  numTwo = parseInt(document.getElementById("formControlRange").value);
  
  if(document.getElementById("compound").checked) {
  	for (var i = 0; i < 12; i++){
	  	periodicalResult[i] = numOne * (1 + (amy * (1 - numTwo/100)));
	  	numOne = periodicalResult[i];
	  }
  }
  else {
	    for (var i = 0; i < 12; i++){
	  	noneCompoundResult[i] = (numOne * (1 + (amy * (1 - numTwo/100)))) - numOne;
	  	periodicalResult[i] = numOne + ((i + 1) * noneCompoundResult[i]);
	  }
  }



  
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: [month[d.getMonth()], month[d.getMonth()+1], month[d.getMonth()+2], month[d.getMonth()+3], month[d.getMonth()+4], month[d.getMonth()+5], month[d.getMonth()+6], month[d.getMonth()+7], month[d.getMonth()+8], month[d.getMonth()-3], month[d.getMonth()-2], month[d.getMonth()-1]],
    datasets: [{
      label: "Total Orai",
      data: periodicalResult,
      backgroundColor: 'rgba(97, 47, 202, .2)',
      borderColor: 'rgba(52, 27, 85, .7)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true
  }
});
};

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
};