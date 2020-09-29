
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
if(frameCount > 135 && frameCount < 235){
fill(255);
translate(320,20);
  rect(100, 120, 340, 180, 20);
  triangle(230, 200, 320, 200, 350,360)
fill(000);
  textSize(40);
  text("dance with me", 140, 220);
}
if(frameCount > 990 && frameCount < 1000){
fill(255);
translate(540,180);
  rect(100, 120, 340, 180, 20);
  triangle(230, 200, 320, 200, 350,360)
fill(000);
  textSize(38);
  text("it was a", 130, 195);
  text("wonderful dance", 130, 250);

}

if(frameCount > 650 && frameCount < 750){
fill(255);
translate(700, 120);
  rect(100, 120, 340, 180, 20);
  triangle(230, 200, 320, 200, 350,360)
fill(000);
  textSize(38);
  text("you are", 150, 195);
  text("moving great", 150, 250);

}

if(frameCount==1000){
  noLoop();
}

}
