const start = document.querySelector("#start");
const stopp = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = false;

function stopWatch() //stopwatch logic
{
    seconds++;
    if(seconds / 60 === 1) //seconds
    {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1) //minutes
        {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) //adding first digit(0) when the second one is a one-digit number
    {
        displaySeconds = "0" + seconds.toString();
    }
    else
    {
        displaySeconds = seconds; //but removing the zero in front if it is two-digit number
    }

    if(minutes < 10)
    {
        displayMinutes = "0" + minutes.toString();
    }
    else
    {
        displayMinutes = minutes;
    }

    if(hours < 10)
    {
        displayHours = "0" + hours.toString();
    }
    else
    {
        displayHours = hours;
    }

    document.querySelector(".screen").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds; //displaying the time on screen
}

//we apply styles to buttons and start/stop/reset the timer ↓
start.onclick = () => {
    stopp.id = "stop"; 
    if(status === false)
    {
        interval = window.setInterval(stopWatch, 1000); //increasing by 1 second
        status = true;
        start.id = "start_after";
    }

}

stopp.onclick = () => {
    start.id = "start";
    if(status === true)
    {
        window.clearInterval(interval);
        status = false;
        stopp.id = "stop_after";
    }

}

reset.onclick = () => {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector(".screen").innerHTML = "00:00:00";
    status = false;
    start.id = "start";
    stopp.id = "stop";
}