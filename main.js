song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreLeftWrist = 0;
scoreRightWrist = 0;

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

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist  = " + scoreLeftWrist);

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

    fill("#EF5048");
	stroke("#EF5048");

    song1_status = song1.isPlaying();

    if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,30);

			song2.stop();

		if(song2_status == false)
		{
			song1.play();
			document.getElementById("song_name").innerHTML = "Playing - Awesome As I Wanna Be";
		}
	}
    if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status == false)
		{
			song1.play();
			document.getElementById("song_name").innerHTML = "Playing - My Past is Not Today";
		}
	}
}