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
//function which can accept input/arguments
function isTouching(object1,object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
      && object1.x - object2.x < object1.width/2 + object2.width/2
      && object2.y - object1.y < object1.height/2 + object2.height/2
      && object1.y - object2.y < object1.height/2 + object2.height/2) {
    return true;
  }
  else {
    return false;
  }
}

function bounceOff(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX=movingRect.velocityX * (-1);
    fixedRect.velocityX *= (-1);
  }
  if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.velocityY=movingRect.velocityY * (-1);
    fixedRect.velocityY *= (-1);
  }
}