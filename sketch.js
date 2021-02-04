const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  left = new Ground(0, 400, 10, 800);
  right = new Ground(480, 400, 10, 800);
  bottom = new Ground(400, 800, 800, 10);
  topp = new Ground(0, 800, 800, 10);

  division1 = new Ground(80, 680, 10, 260);
  division2 = new Ground(160, 680, 10, 260);
  division3 = new Ground(240, 680, 10, 260);
  division4 = new Ground(320, 680, 10, 260);
  division5 = new Ground(400, 680, 10, 260);

  for (var j = 40; j<= width; j=j+50) 
  {
    plinkos.push(new Plinko(j,80));
  }
  for (var j = 15; j<= width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,160));
  }
  for (var j = 40; j<= width; j=j+50) 
  {
    plinkos.push(new Plinko(j,240));
  }
  for (var j = 15; j<= width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,320));
  }
  for (var j = 40; j<= width; j=j+50) 
  {
    plinkos.push(new Plinko(j,400));
  }
  for (var j = 15; j<= width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,480));
  }
  

}

function draw() {
  background("darkgrey");  

  Engine.update(engine);
  
  left.display();
  right.display();
  bottom.display();
  topp.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

  for (var j=0; j < plinkos.length; j++) 
  {
    plinkos[j].display();
  }

  if(frameCount%25===0){
    particles.push(new Particles(random(10, 475), 10,10));
  }
 for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }
}

