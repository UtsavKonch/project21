var wall,speed,weight,thickness,bullet


function setup() {
  createCanvas(1600,400);
 speed=random(20,50);
 weight=random(30,52);
 thickness=random(22,83);
 bullet=createSprite(50,200,50,5);
 bullet.velocityX=speed;
 bullet.shapeColor="red";
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="brown";
}

function hasCollided(bullet1,wall1){
bulletRightEdge=bullet1.x+bullet1.width
wallLeftEdge=wall1.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;

}
return false;
}

function draw() {
  background("white");  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor="green";

   }
   if(damage<10){
     wall.shapeColor="blue";
   }
 }
 
  
  drawSprites();
}