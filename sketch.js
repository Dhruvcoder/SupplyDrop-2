var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var holder,holderIMG,facility,facilityIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	helicopterIMG=loadImage("sprites/helicopter.png")
	packageIMG=loadImage("sprites/package.png")
	facilityIMG=loadImage("sprites/bg.png")
	holderIMG=loadImage("sprites/holder.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	facility=createSprite(400,436);
	facility.addImage(facilityIMG)
	facility.scale=1.4

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.0

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(122, 147, 45)

	holder=createSprite(385,640);
	holder.addImage(holderIMG)
	holder.scale=2.7

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	holder = Bodies.rectangle(width/2 , 200 , 5 ,{isStatic:true} );
	World.add(world, holder);    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(148, 230, 244);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);    
  }
}