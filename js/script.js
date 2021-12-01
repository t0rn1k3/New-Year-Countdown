const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const currentYear = new Date().getFullYear();
const newYear =  new Date(`january 01 ${currentYear + 1} 00:00:00`);

function getCount() {
    const currentTime = new Date();
    const left = newYear - currentTime;

    const d = Math.floor(left / 1000 / 60 / 60 / 24);
    const h = Math.floor(left / 1000 / 60 / 60) % 24;
    const m = Math.floor(left / 1000 / 60 ) % 60;
    const s = Math.floor(left / 1000 ) % 60;

    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(getCount, 1000);



