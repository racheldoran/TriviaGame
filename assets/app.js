
$(document).ready(function () {
  console.log("Hello");

  var time = 30;
  var winner = 0;
  var loser = 0;
  var question = true;
  var otherQuestion = false;
  
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
  $("#bob-dylan").click(function () {
    winner++;
    alert("Hell Yeah!");
    console.log(winner)
  });

  $("#robert-plant").click(function () {
    alert("Hell No!");
    loser++;
    console.log(loser)
    
  });
  $("#paul-mccartney").click(function () {
    alert("Hell No!");
    loser++;
  });

  //Question Two//
  $("#nirvana").click(function () {
    alert("Hell No!");
    loser++;
  });
  
  $("#rem").click(function () {
    winner++;
    alert("Hell Yeah!");
  });

  $("#pumpkins").click(function () {
    alert("Hell No!");
    loser++;
  });

//Question Three//
$("#little-sister").click(function () {
  alert("Hell No!");
  loser++;
});

$("#heartbreak").click(function () {
  winner++;
  alert("Hell Yeah!");
});

$("#jailhouse").click(function () {
  alert("Hell No!");
  loser++;
});

//Question Four//
$("#beatles").click(function () {
 winner++;
  alert("Hell Yeah!");
});

$("#stones").click(function () {
  alert("Hell No!");
  loser++;
});

$("#zeppelin").click(function () {
  alert("Hell No!");
  loser++;
});



});
