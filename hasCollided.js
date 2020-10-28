
function hasCollided(object1, object2)
{

//Detect the collision of the object1 with object2
if(object1.x - object2.x < object1.width/2 + object2.width/2)
{ 
  object2.x = object1.x -object2.width/2 - object1.width/2;
  object2.y = height/2;
    Damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(Damage < 10)
    {
      return true;
    }else if(Damage > 10)
          {
           return false;
          }
}


}