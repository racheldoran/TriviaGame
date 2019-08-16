var time = 30;

function start (){
    interval=setInterval(decrement, 30000);

    function decrement (){
        time--;
        $("#time").html("<h2> Time Remaining" + time "</h2>")
    }
}