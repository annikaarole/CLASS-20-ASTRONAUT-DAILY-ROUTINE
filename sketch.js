var backgroundiss;
var astronaut;
var annika;
var dhanashree;

function preload(){
  bg=loadImage("images/iss.png");
  da=loadImage("images/da.jpg");
  aa=loadImage("images/aa.jpg");
  sleep=loadImage("images/sleep.png");
  brush=loadImage("images/brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  drink=loadAnimation("images/drink2.png","images/drink1.png");
  move=loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(1600,800);
  //createSprite(800, 400, 50, 50);
  backgroundiss = createSprite(650,400);
  backgroundiss.addImage(bg);
  backgroundiss.scale = 0.25;

  annikaphoto = createSprite(1200,100);
  annikaphoto.addImage(aa);
  annikaphoto.scale = 0.25;

  dhanashreephoto = createSprite(1100,100);
  dhanashreephoto.addImage(da);
  dhanashreephoto.scale = 0.99;

  astronaut = createSprite(100,600);
  astronaut.addImage(sleep);
  astronaut.scale = 0.1;

  annika = createSprite(1200,600);
  annika.addImage(brush);
  annika.scale=0.1;

  dhanashree = createSprite(500,500);
  dhanashree.addImage(brush);
  dhanashree.scale=0.1;
  //annika.velocityX=-0.1;
  //annika.velocityY=-0.1;

}

function draw() {
  background(255,255,255);  


  if(keyDown("UP_ARROW")){
    annika.addAnimation("brushing",brush);
    annika.changeAnimation("brushing");
    //annika.y = 650;
    annika.velocityX = -0.1;
    annika.velocityY = -0.1;

    dhanashree.addAnimation("brushing",brush);
    dhanashree.changeAnimation("brushing");
    dhanashree.x=500;
    dhanashree.y=500;
    dhanashree.velocityX = -0.1;
    dhanashree.velocityY = -0.1;

  }
  else if(keyDown("RIGHT_ARROW")){
    annika.addAnimation("drinking",drink);
    annika.changeAnimation("drinking");
    annika.x=1100;
    annika.y=500;
    annika.velocityX=-0.1;
    annika.velocityY=-0.1;

    dhanashree.addAnimation("drinking",drink);
    dhanashree.changeAnimation("drinking");
    dhanashree.x=500;
    dhanashree.y=500;
    dhanashree.velocityX = -0.1;
    dhanashree.velocityY = -0.1;
  }
  else if(keyDown("DOWN_ARROW")){
    annika.addAnimation("eating",eat);
    annika.changeAnimation("eating");
    annika.x=1150;
    annika.y=550;
    annika.velocityX=-0.1;
    annika.velocityY=-0.1;

    dhanashree.addAnimation("eating",eat);
    dhanashree.changeAnimation("eating");
    dhanashree.x=500;
    dhanashree.y=500;
    dhanashree.velocityX = -0.1;
    dhanashree.velocityY = -0.1;

  }
  else if(keyDown("LEFT_ARROW")){
    annika.addAnimation("bathing",bath);
    annika.changeAnimation("bathing");
    annika.x=1170;
    annika.y=510;
    annika.velocityX=-0.1;
    annika.velocityY=-0.1;

    dhanashree.addAnimation("bathing",bath);
    dhanashree.changeAnimation("bathing");
    dhanashree.x=500;
    dhanashree.y=500;
    dhanashree.velocityX = -0.1;
    dhanashree.velocityY = -0.1;
    
  }
  else if(keyDown("g")){
    annika.addAnimation("gymming",gym);
    annika.changeAnimation("gymming");
    annika.x=1111;
    annika.y=555;
    annika.velocityX=-0.1;
    annika.velocityY=-0.1;

    dhanashree.addAnimation("gymming",gym);
    dhanashree.changeAnimation("gymming");
    dhanashree.x=500;
    dhanashree.y=500;
    dhanashree.velocityX = -0.1;
    dhanashree.velocityY = -0.1;
  }


  drawSprites();

  //text.color(255);
  text(" WALL OF FAME ",1100,25);
  text("WELCOME TO SPACESHIP OF KARAN, ANNIKA, DHANASHREE & ADITI",50,20);
  text("ASTRONAUT ANNIKA IS SLEEPING",50,40);
  text("ASTRONAUT DHANASHREE IS ROLE MODEL",50,60);
  text("ASTRONAUT KARAN IS ROLE MODEL",50,80);
  text("ASTRONAUT ADITI IS SPACEWALKING",50,100);
  text("INSTRUCTIONS: ",50,120);
  text("UP ARROW = BRUSHING",50,140);
  text("RIGHT ARROW = DRINKING",50,160);
  text("DOWN ARROW = EATING",50,180);
  text("LEFT ARROW = BATHING",50,200);
  text("g = GYMMING",50,220);

}