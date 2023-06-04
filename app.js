var sec = 0;
var min = 0;
var hour = 0;


var hourVal = document.getElementById("hour");
var minVal = document.getElementById("min");
var secVal = document.getElementById("sec");
var StartButton = document.getElementById("startBtn");
var StopButton = document.getElementById("stopBtn");

var interval; 

function renderVal (){
    secVal.innerHTML = sec;
    minVal.innerHTML = min;
    hourVal.innerHTML = hour;

}

function timestart (){
    StartButton.disabled = true;
    StopButton.disabled = false;
sec ++; 
secVal.innerHTML = sec;
if (sec == 60){
    min ++;
    sec = 0;
    if (min == 60 ){
        hour ++;
        min = 0;
    }
}
renderVal()
console.log(sec);
}


function timer (){
interval = setInterval(function()
{timestart();
}, 1000);
}

function stoptimer(){
    StopButton.disabled = true;
    StartButton.disabled = false;
    clearInterval(interval);
}


function resettimer(){
    sec = 0;
    min = 0;
    hour = 0;
    stoptimer();
    renderVal
}















