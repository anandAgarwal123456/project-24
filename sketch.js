
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject,paperObject,Ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObject= new dustbinObject(1200,650);
	paperObject=  new Paper(200,450,40);
	ground= new Ground(width/2,670,width,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObject.display();
  paperObject.display();
  ground.display()
  
  drawSprites();
 
}



