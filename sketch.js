const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var particles = [];
var plinkos = [];
var divisions = [];
var DivisionHeight = 300;

function setup() {
  createCanvas(480,800);

  ground = new Ground(600, height, 1200, 20);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background("red"); 
  Engine.update(engine); 

  ground.display();
  for (var k = 0; k <=innerWidth; k = k + 80){
    divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) 
  {

    plinkos.push(new plinkos(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new plinkos(j,175));
  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
  drawSprites();
}