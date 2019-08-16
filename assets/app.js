var timeRemaing = 30;

setTimeout(thirtySeconds, 1000 * 3);

function thirtySeconds() {
    // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
    $("#time").append("<h2>Time Remaining</h2>");
  