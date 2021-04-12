
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
		
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree1 = new Tree(645,400);
	boy1 = new Boy(200,650);
	stone1 = new Stone(150,620);
	sling = new Slingshot(stone1.body,{x:150, y:620});
	mango1 = new Mango(645,300,50,50);
	mango2 = new Mango(600,200,70,70);
	mango3 = new Mango(700,200,80,80);
	mango4 = new Mango(550,300,60,60);
	mango5 = new Mango(600,350,55,55);
	mango6 = new Mango(693,345,65,65);
	mango7 = new Mango(750,300,58,58);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree1.display();
  boy1.display();
  stone1.display();
  sling.display();  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  detectcollission(stone1,mango1)
  detectcollission(stone1,mango2)
  detectcollission(stone1,mango3)
  detectcollission(stone1,mango4)
  detectcollission(stone1,mango5)
  detectcollission(stone1,mango6)
  detectcollission(stone1,mango7)
  drawSprites();
  
 
}

function mouseReleased(){
    sling.fly()
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y: mouseY})
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:150, y:620})
		sling.attach(stone1.body)
	}
}
function detectcollission(stone1,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone1.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone1.r){
		Mango.Body.setStatic(mango.body,false)
	}
}


