var dustbinIMG , ballIMG;
var ground, ball, dustbin;
var ballSprite, ballBody , dustbinSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2, height-35, width,10);

	ball=new Ball(200, 300, 70);
	

	dustbin= new Dustbin(700,655);
	

	//Create the Bodies Here.
	
	/*ballBody = Bodies.circle(100, 200 , 50 , {restitution:0.3});
	World.add(world, ballBody);

	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxLeft = createSprite(700,600,20,120);
	boxLeft.shapeColor = "white"
	boxLeft = Bodies.rectangle(700,600,20,120,{isStatic:true});
	World.add(world,boxLeft);
	
	boxRight = createSprite(900,600,20,120);
	boxRight.shapeColor = "white"
	boxRight = Bodies.rectangle(900,600,20,120,{isStatic:true});
	World.add(world,boxRight);

	boxBase = createSprite(800,650,200,20);
	boxBase.shapeColor = "white"
	boxBase = Bodies.rectangle(800,650,200,20,{isStatic:true});
	World.add(world,boxBase);*/
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  dustbin.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
	}

	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-50})
	}
}

