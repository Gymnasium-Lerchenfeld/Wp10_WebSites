const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'http://127.0.0.1:5500/2023_2024/vynil/index.html';
const site = 'Spinzz.de';
function submitted(event) {event.preventDefault();
    const url = google + site + spinzz.de + q.ariaValueMax;
    const win = window.open(url, '_blank'); win.focus();
}

f.addEventListener('submit', submitted);