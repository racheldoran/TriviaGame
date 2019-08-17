
$(document).ready(function () {
  console.log("Hello");

  var time = 20;
  var winner = 0;
  var loser = 0;

  
  $(".timer").text("Time Remaining: " + time);


  var setTimer = setInterval(count, 1000)
  function count() {
    $(".timer").html("Time Remaining: " + time);
    time--;
    if (time < 0) {
      $(".questions").hide();
      $("#start").hide();
      $(".wins").html("Wins: " + winner).show()
      $(".losses").html("Losses: " + loser).show()
      clearInterval(setTimer)
    }
  }

  


  //Question One//
  $("#bob-dylan").click(function () {
   alert("Hell Yeah!");
    winner++;
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
    alert("Hell Yeah!");
    winner++;
  
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
  alert("Hell Yeah!");
  winner++;

});

$("#jailhouse").click(function () {
  alert("Hell No!");
  loser++;
});

//Question Four//
$("#beatles").click(function () {
  alert("Hell Yeah!");
  winner++;
  
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
