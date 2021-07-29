var x = document.getElementById("music");

function enableLoop() {
    x.loop = true;
    x.load();
}

function enableAutoplay() {
    x.autoplay = true;
    x.load();
}