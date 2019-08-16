window.onload = function() {
    $("#start").on("click", start);
  };

  //  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var buttonTrue;
var buttonFalse;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 30;


function reset() {

  time = 0;


  // DONE: Change the "display" div to "00:00."
  $("#time").text("30");


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
if (buttonTrue) {
  alert("TRUE");
}

else if (buttonFalse) {
  alert("HELL NO")

  $("#button-true").append(buttonTrue)

  