function acceptCookies() {
    document.getElementById('consent-popup').style.display = 'none';
}

function declineCookies() {
    document.getElementById('consent-popup').style.display = 'none';
}

window.onload = function() {
    document.getElementById('consent-popup').style.display = 'block';
};
