
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hide1;
var myEngine,myWorld;
var baby,babyimage;
var boy,boyimage;



function preload()
{
	babyimage = loadImage("dg.png");

	boyimage = loadImage(".y799.png");

}

function setup() {
	createCanvas(1350, 650);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.

	ground = new Ground(675,600,1400,10)

	  box1 = new Box(1040,567,135,25);
	  box2 = new Box(960,520,25,120);
	  box3 = new Box(1100,520,25,120);

	  ball = new paper(200,500,40)

	  
	  hide1 = new hide(200,500,40,5)

	 


	 baby = createSprite(1040,400,10,10);
	 baby.addAnimation("walking",babyimage);
	 baby.scale = 0.3;

	
	 
	 boy = createSprite(200,450,10,10);
	 boy.addAnimation("walking",boyimage);
	 boy.scale = 0.7;

    	Engine.run(myEngine);
  
}


function draw() {


	//keyPressed ();

	
	Engine.update(myEngine);
	rectMode(CENTER);


  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display(); 
  hide1.display();  
  drawSprites();
 
	
  


}

function keyPressed (){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});

		Body.setStatic(ball, false); 

	}


}



