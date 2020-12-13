const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,par;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(600,750);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,740,1200,20)

  for(var k = 10; k <= width; k = k+100){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var j = 10; j <= width; j = j+40){
    plinkos.push(new Plinko(j,75,10))
  }

  for(var j = 25; j <= width-25; j = j+40){
    plinkos.push(new Plinko(j,175,10))
  }

  for(var j = 10; j <= width; j = j+40){
    plinkos.push(new Plinko(j,275,10))
  }

  for(var j = 25; j <= width-25; j = j+40){
    plinkos.push(new Plinko(j,375,10))
  }

 

}



function draw() {
  background(0);  
  Engine.update(engine);

  console.log(frameCount)
  
  if(frameCount%60 === 0){
    for(var i = 10; i<20; i++){
      particles.push(new Particle(random(10,590),i, 10))
    }
  }
  ground.display();

  for(var k = 0; k<divisions.length; k++){
    divisions[k].display()
  }

  for(var j = 0; j<plinkos.length; j++){
     plinkos[j].display()
  }
   
  for(var i = 0; i<particles.length; i++){
    particles[i].display()
  }
 // if(frameCount%60===0){
 // count++;
 // particle = new Particle(random(width/2-10, width/2+10),10, 10)
// }
 
//par.display();
}

//function mousePressed(){
//  par = new Particle(mouseX,10,10);
//}