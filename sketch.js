var  Fixedrect, Movingrect;




function setup() {
  createCanvas(800,400);
  Fixedrect=createSprite(400, 250, 50, 50);
  Fixedrect.shapeColor="red";
  Movingrect=createSprite(300,400,50,50);
  Movingrect.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  Movingrect.x=World.mouseX;
  Movingrect.y=World.mouseY;

  if (Movingrect.x-Fixedrect.x<Movingrect.width/2+Fixedrect.width/2 && 
    Fixedrect.x-Movingrect.x<Fixedrect.width/2+Movingrect.width/2&&
    Movingrect.y-Fixedrect.y<Movingrect.height/2+Fixedrect.height/2&&
    Fixedrect.y-Movingrect.y<Fixedrect.height/2+Movingrect.height/2  ) {
Movingrect.shapeColor="Black";
Fixedrect.shapeColor="Blue";



  }
  else {
    Movingrect.shapeColor="red";
    Fixedrect.shapeColor="red";



  }

  drawSprites();
}