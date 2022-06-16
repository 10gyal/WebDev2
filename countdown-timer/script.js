const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secsEl = document.getElementById('secs');

const newYears = '1 January 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    //totalLeft is in secs
    const totalLeft = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalLeft/3600/24);

    const hours = Math.floor(totalLeft/3600)%24;
    
    const minutes = Math.floor(totalLeft/60)%60;
    
    const secs = Math.floor(totalLeft)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

//initial call
countdown();

setInterval(countdown, 1000);