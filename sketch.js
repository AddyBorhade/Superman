const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
 
var engine, world;
var ground, ball;
var boxes = []

function preload(){
    monster = loadImage("mosnter-01.png")

}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    superman = loadImage("Superhero-01.png")
    backgroundImg = loadImage("GamingBackground.png")
   var monster = Matter.Body.create()
    
    


    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(650,405,300,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0,
        density:1
    }

    ball = Bodies.circle(300,100,150, ball_options);
    ball.visibility = "false"
    World.add(world,ball);

    var i;
    for (i = 0; i < 550; i++) {
      text += box[i] ;
    }    

    
    chain = new Chain({x:250, y:200}, ball)

    // box1 = new Box(250,200,50,50)
    // box2 = new Box(300,200,50,50)
    // box3 = new Box(350,200,50,50)
    // box4 = new Box(400,200,50,50)
    // box5 = new Box(450,200,50,50)
    // box6 = new Box(300,150,50,50)
    // box7 = new Box(350,150,50,50)
    // box8 = new Box(400,150,50,50)
    // box9 = new Box(350,100,50,50)

for(var x = 550; x<=800; x = x+50){
    boxes.push(new Box(x,200,50,50))
}

for(var x = 550; x<=800; x = x+50){
    boxes.push(new Box(x,100,50,50))
}

}



function draw(){
    background(backgroundImg);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    imageMode(CENTER)
    image(superman,ball.position.x, ball.position.y,300,200)

    imageMode 
    image(mosnter.position.x,monster.position.y,300,200)

    

    
    

    chain.display()
// box1.display()
// box2.display()
// box3.display()
// box4.display()
// box5.display()
// box6.display()
// box7.display()
// box8.display()
// box9.display()

for(var index = 0; index<boxes.length;index = index+1){
boxes[index].display()
}




}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x:mouseX, y: mouseY})
}