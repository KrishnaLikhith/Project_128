believer = "";
phoenix = "";
leftwX = 0;
leftwY = 0;
rightwX = 0;
rightwY = 0;

function preload(){
    believer = loadSound("Believer.mp3");
    phoenix = loadSound("Phoenix.mp3");
    
}
function setup(){
canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);
}
 function draw(){
     image(video, 0,0,600,500);
 }
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPosses(results){
    if(results.length > 0){
        console.log(results);
    }
}