const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1,stone1,rubber1;
var Ground;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    hammer1=new Hammer(200,100,80,20);

    rubber1=new Rubber(800,100,40);

    rubber1.debug=true;

    stone1=new Stone(500,100,80,80);

    Ground= new Surface(600,height,1200,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    hammer1.display();
    rubber1.display();
    stone1.display();
    Ground.display();
}