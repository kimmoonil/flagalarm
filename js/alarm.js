
const alarmContainer = document.querySelector('.js-alarm');
const currentTime = alarmContainer.querySelector('h1');
function getTime(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

if(hours>12){
    let pm = hours-12;
    currentTime.innerText =
    `${pm < 10 ? `0${pm}` : pm}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}else{
    currentTime.innerText =
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
}

function alarmHandler(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const currentHMS = 
    `${hours < 10 ? `0${hours}` : hours}${minutes < 10 ? `0${minutes}` : minutes}${seconds < 10 ? `0${seconds}` : seconds}`;
    ;
    var flag12 = document.getElementById("12flag");
    var flag19 = document.getElementById("19flag");
    var flag21 = document.getElementById("21flag");
    var alarm  = document.getElementById("alarm");
    if((currentHMS==134100)){
        flag12.play();
    }
    if((currentHMS==185900)){
        flag19.play();
    }
    if((currentHMS==205900)){
        flag21.play();
    }
    if((currentHMS==134150)){
        flag12.pause();
        alarm.play();
    }
    if((currentHMS==185950)){
        flag19.pause();
        alarm.play();
    }
    if((currentHMS==205950)){
        flag21.pause();
        alarm.play();
    }

}    
    

function init(){
getTime();
setInterval(getTime, 1000);
setInterval(alarmHandler,1000);
}

init();

