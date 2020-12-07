var fixedR,movingR;



function setup() {
  createCanvas(800,400);
  fixedR = createSprite(200, 200, 50, 80);
  fixedR.shapeColor = "yellow"; 
  movingR = createSprite(400,200,80,30);
  movingR.shapeColor = "blue";
}
function draw() {
  background("black");
  
  movingR.x = World.mouseX;
  movingR.y = World.mouseY;

  if(movingR.x - fixedR.x < movingR.width/2 + fixedR.width/2
    && fixedR.x - movingR.x < movingR.width/2 + fixedR.width/2
    && fixedR.y - movingR.y < movingR.width/2 + fixedR.width/2
    && movingR.y - fixedR.y < movingR.width/2 + fixedR.width/2 ) {
    movingR.shapeColor = "red";
  }
  else {
    movingR.shapeColor = "blue";
  }

  drawSprites();
}