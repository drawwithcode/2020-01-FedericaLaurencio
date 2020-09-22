
function preload(){
  // put preload code here
}

function setup() {
  width = innerWidth;
   height = innerHeight-4;
   createCanvas(width, height);
  noCursor();
  fill("255");
  background(0, 0, 0);}
  fill("255");


function draw() {

  background(0, 0, 0, 20);
  textSize(42);
  text("dance with me", 100, 100);
  for (i = 0; i < 1; i++) {

     y = 160*sin(3*frameCount/180+PI/2);
     x = 160*sin(1*frameCount/180);

  fill("OrangeRed");
  noStroke();
  push();
  y = cos(3*frameCount/180)*cos(3*frameCount/180);
  x = sin(5*frameCount/180)*sin(5*frameCount/180);
translate(width/2, height/2);
rotate(20*frameCount/1000);
 ellipse(300*x, 300*y, 50, 50);

 pop()
 fill("LightSeaGreen");
  ellipse(mouseX, mouseY, 50, 50);

}

}
