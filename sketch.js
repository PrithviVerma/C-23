const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,760,100,100);
    box2 = new Box(950,760,100,100);
   pig1 = new pig(850,760);
   log1 = new log(850,730,300,PI/2);
   box3 = new Box(750,700,100,100);
   box4 = new Box(950,700,100,100);
   pig2 = new pig(850,700);
   log2 = new log(850,630,300,PI/2);
   box5 = new Box(850,590,100,100)
   log3 = new log(800,590,200,PI/4);
   log4 = new log (900,590,200,3*PI/4);
   bird1 = new bird(400,400);
   ground = new Ground(600,height,1200,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
   pig1.display();
    log1.display();
    box3.display();
    box4.display();
   pig2.display();
    log2.display();
box5.display();
log3.display();
log4.display();
bird1.display();

}