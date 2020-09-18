
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var floor1;
var a;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

floor1 = new Floor(400,300,200,50);

this.body = Bodies.rectangle(20,20,20,20);
World.add(world,a);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}



