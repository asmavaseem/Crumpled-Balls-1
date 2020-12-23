
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world;
var dustbin,paper;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 390, width, 10,{
    isStatic: true
  });
  ground.shapeColor = "yellow";
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("white");
    text("to start the game press 'UP ARROW' key", 230, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();
  }
}
function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
	Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y: -15})
   {
   }
  }
}