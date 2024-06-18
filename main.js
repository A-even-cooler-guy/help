
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
function preload(){
    notion = loadSound("notion.mp3");
    daylight = loadSound("daylight.mp3");
}

function setup(){
    canvas=createCanvas(700 , 800);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Your lucky. Beware is all ill tell ya");
}

function draw(){
    image(video,0,0,550,550);
}

function gotPoses(reaults){
if(results.length>0){
    rightWristY=results[0].pose.rightWrist.y;
    leftWristY=results[0].pose.leftWrist.y;

    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;

}
}