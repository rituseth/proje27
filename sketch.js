
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var world,body;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof = new Roof(350,100,300,30)
World.add(world,roof)

bobObj1=new Bob(250,300);
bobObj2=new Bob(300,300);
bobObj3=new Bob(350,300)
bobObj4=new Bob(400,300)
bobObj5=new Bob(450,300)

rope1=new Rope(bobObj1.body,roof.body , -100,0);
World.add(world,rope1)
rope2=new Rope(bobObj2.body,roof.body,-50,0 );
World.add(world,rope2)
rope3=new Rope(bobObj3.body,roof.body , 0,0)
World.add(world,rope3)
rope4=new Rope(bobObj4.body,roof.body , +50,0);
World.add(world,rope4)
rope5=new Rope(bobObj5.body,roof.body,+100,0);
World.add(world,rope5)

Engine.run(engine);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });


Render.run(render);
		 
}


function draw() {
  
  background("white");
  Engine.update(engine)

  
roof.display();

bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display()


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

upKey()
 
}
function upKey()
	{
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-730,y:0});
}}




