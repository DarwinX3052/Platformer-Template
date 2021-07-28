//Player
var p1;
var e1, e2, e3;
//Map
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m0, m11, m12;
function setup(){
  createCanvas(500, 500);
  p1 = createSprite(50, 50, 50, 50);
  p1.shapeColor = "green"
  
  e1 = createSprite(-500, 300, 50, 50);
  e2 = createSprite(1000, 300, 50, 50);
  e3 = createSprite(600, 300, 50, 50);
  e1.shapeColor = "red";
  e2.shapeColor = "red";
  e3.shapeColor = "red";
  
  
  
  m1 = createSprite(50, 400, 200, 50);
  m2 = createSprite(400, 350, 200, 50);
  m3 = createSprite(50, 400, 200, 50);
  m4 = createSprite(-200, 500, 200, 50);
  m5 = createSprite(-500, 350, 200, 50);
  m6 = createSprite(600, 550, 200, 50);
  m7 = createSprite(900, 500, 300, 50);
  m8 = createSprite(50, 700, 100, 50);
  m9 = createSprite(1000, 400, 200, 50);
  m0 = createSprite(-900, 300, 200, 50);
  m11 = createSprite(150, 50, 50, 250);
  m12 = createSprite(300, 50, 50, 250);
}
function draw(){
  background("lightblue");
  fill("black")
  textSize(20)
  text("This is a Secret between us ;)", 0, 800);
  text("Platformer Template 0.1,", -50, 200)
  text("Use W to jump, A and D to move.", -75, 225)
  text("Don't Touch the red bois.", -50, 250)
  camera.position.x = p1.x;
  camera.position.y = p1.y;
  if (keyDown("a")){
    p1.x += -5;
  }
  if (keyDown("d")){
    p1.x += 5;
  }
  if (keyDown("w") && p1.collide(m1)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m2)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m3)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m4)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m5)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m6)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m7)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m8)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m9)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m0)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m11)){
    p1.velocityY = -15;
  }
  if (keyDown("w") && p1.collide(m12)){
    p1.velocityY = -15;
  }
  p1.velocityY += 0.6;
  drawSprites();
  p1.collide(m1);
  p1.collide(m2);
  p1.collide(m3);
  p1.collide(m4);
  p1.collide(m5);
  p1.collide(m6);
  p1.collide(m7);
  p1.collide(m8);
  p1.collide(m9);
  p1.collide(m0);
  p1.collide(m11);
  p1.collide(m12);
  
  if (p1.y > 800){
    p1.y = 50;
    p1.x = 50;
  }
  if (p1.isTouching(e1)){
    p1.x = 50;
    p1.y = 50;
  }
  if (p1.isTouching(e2)){
    p1.x = 50;
    p1.y = 50;
  }
  if (p1.isTouching(e3)){
    p1.x = 50;
    p1.y = 50;
  }
}