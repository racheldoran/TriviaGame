
$(document).ready(function () {
  console.log("Hello");

  var time = 30;
  var winner = 0;
  var loser = 0;
  var user;
  
  $(".timer").text("Time Remaining: " + time);
  $(".wins").html("Wins: " + winner)
  $(".losses").html("Losses " + loser)

  var intervalId = setInterval(count, 3000)
  function count() {
    $(".timer").html("Time Remaining: " + time);
    time--;
  }

  if (time === 0) {
    $(".questions").hide();
    clearInterval(intervalId)
  }

  //Question One//
  if (user === true);
  winner++;



});
