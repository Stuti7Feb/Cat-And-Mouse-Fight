var catFirst, catWalk, catLast, cat;
var mouseFirst, mouseWait, mouseLast, mouse;
var garden, gardenImg;

function preload() {
 catFirst = loadImage("images/tomOne.png");
 catWalk = loadAnimation("images/tomTwo.png", "images/tomThree.png");
 catLast = loadImage("images/tomFour.png");

 mouseFirst = loadImage("images/jerryOne.png");
 mouseWait = loadAnimation("images/jerryThree.png", "images/jerryTwo.png");
 mouseLast = loadImage("images/jerryFour.png");

 gardenImg = loadImage("images/garden.png");

}

function setup(){
createCanvas(1000,800);

garden = createSprite(500, 400);
garden.addImage("garden", gardenImg);

cat = createSprite(800, 600, 20, 20);
cat.addImage(catFirst);
cat.scale = 0.2;

mouse = createSprite(200, 600, 20, 20);
mouse.addImage(mouseFirst);
mouse.scale = 0.1;

}

function draw() {
 background(255);

 //keyPressed
 keyPressed();

 if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addImage("catLastImage", catLast);
    cat.changeImage("catLastImage");

    mouse.addImage("mouseLastImage", mouseLast);
    mouse.changeImage("mouseLastImage");

    cat.velocityX = 0;
 }

  drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
  
   cat.velocityX = -4;
   cat.addAnimation("catRunning", catWalk);
   cat.changeAnimation("catRunning");

   mouse.addAnimation("mouseWaiting", mouseWait);
   mouse.changeAnimation("mouseWaiting");

 }
}
