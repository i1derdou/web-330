"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: David Clemens
      Date: 2024-06-02

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// timer constructor function
function timer(min,sec)
{
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

// runPause function
function runPause(timer,minBox,secBox){

    // if timeID is defined
    if(timer.timeID)
    {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    }
    else
    {
        // setup the interval
        timer.timeID = window.setInterval(function()
        {
            countdown(timer,minBox,secBox);
        },1000)
    }
}

// countdown function
function countdown(timer,minBox,secBox)
{
    // if seconds are more than 0
    if(timer.seconds > 0)
    {
        timer.seconds -= 1;
    }
    // if minutes are more than 0
    else if(timer.minutes > 0)
    {
        timer.minutes -= 1;
        timer.seconds = 59;
    }
    else
    {
        // clear the interval
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    }

    // set the minutes and seconds value
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;

}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
const myTimer = new timer(minBox.value,secBox.value);

// change event on minutes box
minBox.onchange = ()=>{
    myTimer.minutes = minBox.value;
}

// change event on seconds box
secBox.onchange = ()=>{
    myTimer.seconds = secBox.value;
}

// click event on runPause button
runPauseTimer.onclick = ()=>{
    runPause(myTimer,minBox,secBox);
}

