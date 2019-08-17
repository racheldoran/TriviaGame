
$(document).ready(function () {
  console.log("Hello");

  var time = 30;
  var winner = 0;
  var loser = 0;

  
  $(".timer").text("Time Remaining: " + time);
  $(".wins").html("Wins: " + winner)
  $(".losses").html("Losses: " + loser)

  var setTimer = setInterval(count, 3000)
  function count() {
    $(".timer").html("Time Remaining: " + time);
    time--;
  }

  if (time === 0) {
    $(".questions").hide();
    $("#start").hide();
    clearInterval(setTimer)
  }


  //Question One//
  $("#bob-dylan").click(function () {
   $(".wins").text("Wins: " + winner)
   alert("Hell Yeah!");
    winner++;
    console.log(winner)
  });

  $("#robert-plant").click(function () {
    $(".losses").text("Losses: " + loser)
    alert("Hell No!");
    loser++;
    console.log(loser)
    
  });
  $("#paul-mccartney").click(function () {
    $(".losses").text("Losses: " + loser)
    alert("Hell No!");
    loser++;
  });

  //Question Two//
  $("#nirvana").click(function () {
    $(".losses").text("Losses: " + loser)
    alert("Hell No!");
    loser++;
  });
  
  $("#rem").click(function () {
    $(".wins").text("Wins: " + winner)
    alert("Hell Yeah!");
    winner++;
  
  });

  $("#pumpkins").click(function () {
    $(".losses").text("Losses: " + loser)
    alert("Hell No!");
    loser++;
  });

//Question Three//
$("#little-sister").click(function () {
  $(".losses").text("Losses: " + loser)
  alert("Hell No!");
  loser++;
});

$("#heartbreak").click(function () {
  $(".wins").text("Wins: " + winner)
  alert("Hell Yeah!");
  winner++;

});

$("#jailhouse").click(function () {
  $(".losses").text("Losses: " + loser)
  alert("Hell No!");
  loser++;
});

//Question Four//
$("#beatles").click(function () {
  $(".wins").text("Wins: " + winner)
  alert("Hell Yeah!");
  winner++;
  
});

$("#stones").click(function () {
  $(".losses").text("Losses: " + loser)
  alert("Hell No!");
  loser++;
});

$("#zeppelin").click(function () {
  $(".losses").text("Losses: " + loser)
  alert("Hell No!");
  loser++;
});



});
