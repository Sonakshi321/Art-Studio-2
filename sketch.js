const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//declare global variables
var engine,world;
var pencil,yp,rp,bp,gp;
var bgImage;
var window;
var wi;

function preload() {
  windowTime();
}

function setup() {

  //create a canvas
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
  
  //Create pencil for sketches
 pencil= new Pencil(60,50,40,90);

  //Create Window
  window= new Window(80,50,50,50);
 
}

function draw() {
  //update engine
  Engine.update(engine);
// background color
  background(bgImage);  

  //display pencil
  
  pencil.display();
  window.display();
  //yp.display();

  move();
  
  back();
  drawSprites();
}



function move(){
  if(keyCode === 32){
    Matter.Body.setPosition(pencil.body, {x: mouseX , y: mouseY});
  }
}


function back(){
  if(keyCode === 13){
    Matter.Body.setPosition(pencil.body, {x:40 , y: 90});
  }
}


