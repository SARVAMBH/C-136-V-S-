video = "";

function preload()
{
    video = createVideo("video.mp4");
    video.hide();
    video.size(550,420);
}

function setup()
{
    canvas = createCanvas(550,420);
    canvas.center();
}

function draw()
{
    image(video,0,0,550,420);
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}