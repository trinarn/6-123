var retangulo;
function setup() {
  createCanvas(400,400);
  retangulo=createSprite(100,43,45,59)
}

function draw() 
{
  background(30);
  if (keyDown("left")) { 
    retangulo .velocityX=-18
    retangulo .velocityY=0

    }
  if (keyDown("right")) {
    retangulo .velocityX=+18
    retangulo .velocityY=0 
  }
if (keyDown("down")) {
  retangulo .velocityX=0
  retangulo .velocityY=18 } 

if (keyDown("up")) {
  retangulo .velocityX=0
  retangulo .velocityY=-18
}
drawSprites()
  }




