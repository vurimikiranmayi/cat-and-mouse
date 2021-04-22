var garden,gardenImage
var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;

function preload() {
    //load the images here
groundImage=loadImage("images/garden.png");
catImg1= loadAnimation("images/cat1.png"); 
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
catImg3= loadAnimation("images/cat4.png"); 
mouseImg1=loadAnimation("images/mouse1.png");
mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
var canvas= createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(260,640,70,70);
mouse.addAnimation("mouseImg",mouseImg1);
mouse.scale=0.2

cat=createSprite(700,650,40,40);
cat.addAnimation("catImg",catImg1);
cat.scale=0.2
}

function draw() {
    background(groundImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.widt-mouse.width)/2) {
}
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
  mouse.addAnimation("mouseTeasing",mouseImg2);
   mouse.changeAnimation("mouseTeasing");
   mouse.frameDelay=25;

   cat.addAnimation("catTeasing",catImg2);
   cat.changeAnimation("catTeasing");
   cat.frameDelay=25;
   
}
}
