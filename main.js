RainbowsSong = "";
SunsetsSong = "";

function preload() {
    RainbowsSong  = loadSound("Rainbow Dash's Awesome as I Wanna Be (Instrumental).mp3");
    SunsetsSong  = loadSound("Sunset Shimmer's  My Past Is Not Today Instrumental.mp3");
}

function play() {
    RainbowsSong.play();
    SunsetsSong.play();
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 450);
}