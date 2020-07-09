var fixedRect, movingRect;
var rect1,rect2;

var rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  rect1=createSprite(800,100,50,80);
  rect2=createSprite(800,300,90,100);

  rect3=createSprite(100,400,50,50);
  rect3.shapeColor="orange"
  rect4=createSprite(800,400,50,50);
  rect3.velocityX=+5
  rect4.velocityX=-3

  rect5=createSprite(300,100,50,50);
  rect6=createSprite(300,700,50,50);
  rect5.shapeColor="yellow"
  rect5.velocityY=+5
  rect6.velocityY=-3
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red"
  }
  else if(isTouching(movingRect,rect1)){
    movingRect.shapeColor="red";
    rect1.shapeColor="red"
  }
  else if(isTouching(movingRect,rect2)){
    movingRect.shapeColor="red";
    rect2.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green";
    rect2.shapeColor="green" 
    fixedRect.shapeColor="green"
    rect1.shapeColor="green"
  }

  drawSprites();
}
