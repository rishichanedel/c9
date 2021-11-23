var football;
function setup() {
  createCanvas(400,400);
  football=createSprite(200,200,50,50);
}

function draw() 
{
  background(0);
  
  if(keyIsDown(UP_ARROW)){
    football.y=football.y-5;
  }

  if(keyIsDown(DOWN_ARROW)){
    football.y=football.y+5;
  }

  if(keyIsDown(LEFT_ARROW)){
    football.x=football.x-5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    football.x=football.x+5;
  }
  drawSprites();

}








