
function preload(){
  //pre-load image
  path=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  cloud = createSprite(200,200);
}


function draw() {
  drawSprites();
  background(180);


}
