window.onload = function() {
    $("#start").on("click", start);
  };

  //  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var buttonTrue;
var buttonFalse;


var time = 30;

$(".timer").html("Time Remaining " + time);


function reset() {

  time = 0;


  // DONE: Change the "display" div to "00:00."
  $("#time").html("30");
  $(":button-true").input(buttonTrue)


}
function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 30000);
    clockRunning = true;
  }
}
function stop() {

  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false;
}

$( "#button-true" ).click(function() {
  alert( "Hell Yeah!" );

});
