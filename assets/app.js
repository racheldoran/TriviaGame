
$(document).ready(function () {
  console.log("Hello");


  //  Variable that will hold our setInterval that runs the stopwatch
var buttonTrue = true;
var buttonFalse = false;



var time = 30;


$(".timer").text("Time Remaining: " + time);

var intervalId = setInterval(count, 30000)
function count(){
  $(".timer").html("Time Remaining: " + time);
time--;
}
if (time < 0) {
  $(".questions").hide();
  clearInterval(intervalId)
}

$( "#button-true" ).click(function() {
  alert( "Hell Yeah!" );

});
})

