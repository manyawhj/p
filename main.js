leftWristX=0
rightWristX=0
difference=0

function preload(){}

function setup(){
    video=createCapture(VIDEO);
    video.size(300,300);
    video.position(850,250);
    
    canvas=createCanvas(300,300);
    canvas.position(500,250);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

document.getElementById("h123").innerHTML="The size of the text is "+difference+"px";

function draw(){

    background("#a3eeff");
    textSize("100");
    fill("#f22233");
    text('Manya',50, 400)
    
    
  }

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftwrist X is"+leftWristX+" "+"rightWrist X is"+rightWristX);
        difference=floor(leftWristX-rightWristX);
        console.log(difference);

    }
}