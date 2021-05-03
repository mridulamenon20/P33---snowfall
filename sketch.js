const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var snowfall;
var snow = [];

function preload(){
  getBackgroundImg();
}

function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,800), random(0,800)));
      
    }

  }
 

}

function draw(){
  if(backgroundImg)
  background(backgroundImg); 
  
  Engine.update(engine);

  for(var i = 0; i<200; i++){
    snow[i].showDrop();
    snow[i].updateY()
}


 drawSprites();

}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,13);

   if(hour>=10 && hour<=15){
    bg = "snow1.jpg";
  }
  
   if(hour>=15 && hour<=20){
    bg = "snow3.jpg" 
  }

   if(hour>=20 && hour<=10){
    bg = "snow2.jpg"
  }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);

}