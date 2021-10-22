var box ;
function setup() {
  createCanvas(800,800);
  
  box = createSprite (400,460,79,86) ; 

}

function draw() 
{
  background("blue");
  
if (keyIsDown (LEFT_ARROW)) {
      box.x = box.x -5 ;
  }
  

  drawSprites () ;
}




