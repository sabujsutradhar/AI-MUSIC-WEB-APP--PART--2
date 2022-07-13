song = "";

function proload()
{
    song = localSound("music.mp3")
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristx = 0;
rightWristy = 0;

leftWristx = 0;
leftWristy = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}