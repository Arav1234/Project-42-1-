var space1Image, space
var space2Image, space2
var space3Image, space3
var space4Image, space4
var issImage   , iss
var hasDocked = false

function preload(){

BGimage = loadImage("spacebg.jpg")
space1Image = loadImage("spacecraft1.png");
space2Image = loadImage("spacecraft2.png");
space3Image = loadImage("spacecraft3.png");
space4Image = loadImage("spacecraft4.png");
issImage    = loadImage("iss.png")        ;

}

function setup() {
  createCanvas(1000,500);

  space = createSprite(800, 400, 50, 50);
  space.addImage("space", space1Image);
  space.scale = 0.4;

  //space2 = createSprite(800, 400, 50, 50);
  //space2.scale = 0.4;

  //space3 = createSprite(800, 400, 50, 50);
  //space3.scale = 0.4;

  //space4 = createSprite(800, 400, 50, 50);
  //space4.scale = 0.4;
  iss = createSprite(200, 180, 50, 50);
  iss.addImage("iss", issImage);
  iss.scale = 0.5;
iss.debug = true;
}

function draw() {
  background(BGimage);
  if(!hasDocked){
    space.x= space.x+random(-1,1)
  
  if (keyDown("up_arrow")) {
  //space2.addAnimation("space2", space2Image); 
    space.velocityX = 0;
   space.velocityY = -2;
  } else if (keyCode === DOWN_ARROW) {
    //space.addImage("space", space1Image); 
    space.velocityX = 0;
    space.velocityY = 2;
  } else if (keyCode === LEFT_ARROW) {
    //space3.addImage("space3", space3Image); 
    space.velocityX = -2;
    space.velocityY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    //space4.addImage("space", space4Image); 
    space.velocityX = 2;
    space.velocityY = 0;
  } 
} 
  if(space.y<=(iss.y+70)&&space.x<=(iss.x-10)){
    hasDocked = true
    stroke("0");
    fill("black");
    textSize(24);
    text("Docking Complete",80,224);
    space.setVelocity(0,0);
  }
  
  drawSprites();
  fill("white")
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}
