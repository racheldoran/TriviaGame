
$(document).ready(function () {
  console.log("Hello");

  var time = 30;
  var winner = 0;
  var loser = 0;
  
  $(".timer").text("Time Remaining: " + time);
  $(".wins").text("Wins: " + winner)
  $(".losses").text("Losses " + loser)
  console.log(winner)
  console.log(loser)

  var intervalId = setInterval(count, 3000)
  function count() {
    $(".timer").html("Time Remaining: " + time);
    time--;
  }

  if (time === 0) {
    $(".questions").hide();
    clearInterval(intervalId)
  }

  $("#button-true").click(function () {
    winner++;
    alert("Hell Yeah!");
    console.log(winner)
  });

  $("#button-false").click(function () {
    alert("Hell No!");
    loser++;
    console.log(loser)
    
  });


});
