var Bullet, wall, thickness;
var speed, weight;
var Damage;


function setup() {
  createCanvas(1600,400);


  
  //generates random speed, weight for Bullet and thicknesss of wall
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
 

  //create Bullet
   Bullet = createSprite(50, 200, 60, 20);
   Bullet.shapeColor = "black";

   //create wall
   wall = createSprite(1200, 200, thickness, height/2);
   wall.shapeColor = "rgb(80, 80, 80)";

  
}

function draw() {
  background(255,255,255);  

  //assign velocity to the Bullet
  Bullet.velocityX = speed;
 
  if(hasCollided(wall, Bullet) === true)
  {
    wall.shapeColor = color(0, 255, 0);
  }else if(hasCollided(wall, Bullet) === false)
  {
    wall.shapeColor = color(255, 0, 0);
  }

  drawSprites();
}
