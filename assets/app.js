
$(document).ready(function () {
  console.log("Hello");

  var time = 30;


  $(".timer").text("Time Remaining: " + time);

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
    alert("Hell Yeah!");

  });

  $("#button-false").click(function () {
    alert("Hell No!");
  });
});
