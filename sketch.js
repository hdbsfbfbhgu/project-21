var path,cat,redWool,greenWool,bluWool,dogs;
var pathImg,catImg,redwoolImg,bluwoolImg,greenwoolImg,dogImg
var redwoolG,bluwoolG,greenwoolG,dogGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("road.png");
  catImg = loadImage("wtj-removebg-preview.png");
  redwoolImg = loadImage("redwol-removebg-preview.png");
  bluwoolImg = loadImage("buuwl-removebg-preview.png");
  greenwoolImg = loadImage("greenwl-removebg-preview.png");
  dogImg = loadImage("dg-removebg-preview.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating cat running
cat = createSprite(50,500,20,20);
cat.addAnimation("SahilRunning",catImg);
cat.scale=0.25;
  
  
redwoolG=new Group();
bluwoolG=new Group();
greenwoolG=new Group();
dogGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  cat.x = World.mouseX;
  
  edges= createEdgeSprites();
  cat.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createrdwool();
    createbluwool();
    creategreenwol();
    createdogs();

    if (redwoolG.isTouching(cat)) {
      redwoolG.destroyEach();
    
    }
    else if (bluwoolG.isTouching(cat)) {
      bluwoolG.destroyEach();

      
    }else if(greenwoolG.isTouching(cat)) {
      greenwoolG.destroyEach();

  
      
    }else{
      if(dogGroup.isTouching(cat)) {
        gameState=END;
        
        redwoolG.destroyEach();
         bluwoolG.destroyEach();
         greenwoolG.destroyEach();
         dogGroup.destroyEach();
        
         redwoolG.setVelocityYEach(0);
         bluwoolG.setVelocityYEach(0);
         greenwoolG.setVelocityYEach(0);
         dogGroup.setVelocityYEach(0);
         
         
         
        
     
    }
  }
  
  drawSprites();

  }

}

function createrdwool() {
  if (World.frameCount % 200 == 0) {
  var redWool = createSprite(Math.round(random(50, 350),40, 10, 10));
  redWool.addImage(redwoolImg);
 redWool.scale=0.125
redWool.velocityY = 3;
redWool.lifetime = 150;
  redwoolG.add(redWool);
  }
}

function creategreenwol() {
  if (World.frameCount % 320 == 0) {
  var greenWool = createSprite(Math.round(random(50, 350),40, 10, 10));
  greenWool.addImage(greenwoolImg);
  greenWool.scale=0.25;
  greenWool.velocityY = 3;
  greenWool.lifetime = 150;
  greenwoolG.add(greenWool);
}
}

function createbluwool() {
  if (World.frameCount % 410 == 0) {
  var bluWool = createSprite(Math.round(random(50, 350),40, 10, 10));
  bluWool.addImage(bluwoolImg);
  bluWool.scale=0.13;
  bluWool.velocityY = 3;
  bluWool.lifetime = 150;
  bluwoolG.add(bluWool);
  }
}

function createdogs(){
  if (World.frameCount % 530 == 0) {
  var dogs = createSprite(Math.round(random(50, 350),40, 10, 10));
  dogs.addImage(dogImg);
  dogs.scale=0.25;
  dogs.velocityY = 3;
  dogs.lifetime = 150;
  dogGroup.add(dogs);
  }
}
