
var upper = 9999999999; 
var lower = 0000000000; 

var current = 5555555555; 

function document(){
    console.log('test');
}

$(document).ready(function() {
  
  $('#smaller').click(smaller);
  $('#bigger').click(bigger);
  
  $('#submit').click(submit);
  
}); 

function submit() {
  alert("You submitted: " + numberToString(current)); 
}

function numberToString(p) {
  var sp = "" + p; 
  var acc = ""; 
  for(var i=0; i < sp.length; i++) {
    acc += sp.charAt(i);
    if([2, 5].indexOf(i) != -1) {
      acc += "-";
    }
  }
  return acc; 
}

function updateDisplay() {
  current = Math.floor((upper + lower) / 2); 
  ("#phone-number").html(numberToString(current)); 
}

function smaller() {
  upper = current - 1; 
  updateDisplay(); 
}

function bigger() {
  lower = current + 1; 
  updateDisplay(); 
}