song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    song1  = loadSound("Rainbow.mp3");
    song2  = loadSound("Sunset.mp3");
}

function play() {
    song1.play();
    song2.play();

    song1.setVolume(1);
    song1.rate(1);

    song2.setVolume(1);
    song2.rate(1);
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(200, 250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized! :)");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = " + leftWristX + " Left wrist y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = " + rightWristX + " Right wrist y = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 450);
}