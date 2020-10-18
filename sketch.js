const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var paper;
var ground;

function setup() {
  createCanvas(800, 400);
  
  engine = Engine.create();
  world = engine.world;
 
  dustbin1 = new Dustbin(540,330,20,100);
  dustbin2 = new Dustbin(710,330,20,100);
  dustbin3 = new Dustbin(625,371,150,20);
 
  paper = new Paper(100,360,15);

  ground = new Ground(400,390,800,20);

  Engine.run(engine);
  
  keyPressed();

  console.log(paper);
}


function draw() {
  
  background(0);
  
  Engine.update(engine);

  rectMode(CENTER);
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  paper.display();

  ground.display();
}

function keyPressed(){

    if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x: 30,y: -35});
    }
    }