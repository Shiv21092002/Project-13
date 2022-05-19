var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var balloon1,balloon2,balloon3,balloon4,balloon5,balloon6, balloon7,balloon8,balloon9,balloon10,balloon11,balloon12, balloon13,balloon14, balloon15,balloon16;
var createArrow;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png")
}

function setup() {
  createCanvas(550, 500);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  balloon1 = createSprite(50, 250, 10, 10);
  balloon1.addImage(red_balloonImage);
  balloon1.scale = 0.06;

  balloon2 = createSprite(100, 250, 10, 10);
  balloon2.addImage(blue_balloonImage);
  balloon2.scale = 0.065;
 
  balloon3 = createSprite(150, 250, 10, 10);
  balloon3.addImage(green_balloonImage);
  balloon3.scale = 0.065;
  
  balloon4 = createSprite(200, 250, 10, 10);
  balloon4.addImage(pink_balloonImage);
  balloon4.scale = 0.8;
  
  balloon5 = createSprite(50, 200, 10, 10);
  balloon5.addImage(red_balloonImage);
  balloon5.scale = 0.06;
  
  balloon6 = createSprite(100, 200, 10, 10);
  balloon6.addImage(blue_balloonImage);
  balloon6.scale = 0.065;
 
  balloon7 = createSprite(150, 200, 10, 10);
  balloon7.addImage(green_balloonImage);
  balloon7.scale = 0.065;
  
  balloon8 = createSprite(50, 300, 10, 10);
  balloon8.addImage(red_balloonImage);
  balloon8.scale = 0.06;
  
  balloon9 = createSprite(100, 300, 10, 10);
  balloon9.addImage(blue_balloonImage);
  balloon9.scale = 0.065;
 
  balloon10 = createSprite(150, 300, 10, 10);
  balloon10.addImage(green_balloonImage);
  balloon10.scale = 0.065;
  
  balloon11 = createSprite(50, 150, 10, 10);
  balloon11.addImage(red_balloonImage);
  balloon11.scale = 0.06;
  
  balloon12 = createSprite(100, 150, 10, 10);
  balloon12.addImage(blue_balloonImage);
  balloon12.scale = 0.065;
 
  balloon13 = createSprite(50, 350, 10, 10);
  balloon13.addImage(red_balloonImage);
  balloon13.scale = 0.06;
  
  balloon14 = createSprite(100, 350, 10, 10);
  balloon14.addImage(blue_balloonImage);
  balloon14.scale = 0.065;
 
  balloon15 = createSprite(50, 100, 10, 10);
  balloon15.addImage(red_balloonImage);
  balloon15.scale = 0.06;
  
  balloon16 = createSprite(50, 400, 10, 10);
  balloon16.addImage(red_balloonImage);
  balloon16.scale = 0.06;
 
 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
 
  //moving bow
  bow.y = World.mouseY
  
  
  
    // release arrow when space key is pressed
  if (keyDown("space")) {
    var arrow = createArrow();
    arrow.addImage(arrowImage);
    arrow.y = bow.y;
  }
  
  drawSprites();
}
function createArrow() {
  arrow= createSprite(480, 220, 1, 1);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

