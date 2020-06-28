function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20)
  ground2 = new Ground(600,300,10,100)
  box1 = new Box(600,200,15,15)
  box2 = new Box(620,200,15,15)
box3 = new Box(640,200,15,15)
box4 = new Box(600,250,15,15)
box5 = new Box(620,250,15,15)
box6 = new Box(640,250,15,15)
box7 = new Box(600,300,15,15)
box8 =  new Box(620,300,15,15)
box9 = new Box(640,300,15,15)
Matter.Bodies.polygon(300, 300, 8, 7.5, [options])




}

function draw() {
  background(255,255,255);  
ground.display();
ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
 drawSprites();
}