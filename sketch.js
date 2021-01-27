var canvas;

var box;
var block1, block2, block3, block4;

var music;
var edges;
function preload(){
  music= loadSound("music.mp3");
}
function setup()
{
  
 canvas= createCanvas(800, 600);

box= createSprite(random(100,500),50,40,40)
box.shapeColor= "white";

 

block1= createSprite(20, 550, 350, 30 )
block1.shapeColor= "blue";

block2= createSprite(310, 550, 200,30)
block2.shapeColor= "orange";

block3= createSprite(525, 550, 200, 30)
block3.shapeColor= "violet";

block4= createSprite(735, 550, 200, 30)
block4.shapeColor= "green"
 box.velocityX= 3;
 box.velocityY= 9;
}
function draw() {
  background("black")
  
  edges= createEdgeSprites()
  box.bounceOff(edges);
  
 
  
  if(block1.isTouching(box) && box.bounceOff(block1))
{
  box.shapeColor= block1.shapeColor;
  music.play() 
}  
   if(block3.isTouching(box) && box.bounceOff(block3))
{
  box.shapeColor= block3.shapeColor;
} 
    if(block4.isTouching(box) && box.bounceOff(block4))
{
  box.shapeColor= block4.shapeColor;
}  

      if(block2.isTouching(box) )
{
  box.velocityX=0;
  box.velocityY=0;
  box.shapeColor= block2.shapeColor;
  music.stop()
}
  drawSprites();
}
