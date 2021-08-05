var gardenImg , rabbitImg , applei , leafi , orangeleafi , redleafi ;
var garden , rabbit , apple , leaf , leaf2 , leaf3 ,score  ;
var appleGroup , leafGroup , redleafGroup , orangeleafGroup ; 

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  leafi = loadImage("leaf.png");

  applei = loadImage("apple.png");

  
  orangeleafi = loadImage("orangeLeaf.png");

  redleafi = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(420,500);
  
// to create background
garden=createSprite(200,250);
garden.addImage(gardenImg);
garden.x = garden.width/2;
garden.velocityX=-2
garden.scale = 1.2

//creating rabbit
rabbit = createSprite(180,360,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//to create score
score = 0;

appleGroup = new Group();
orangeleafGroup = new Group();
leafGroup =  new Group();
redleafGroup = new Group();

 rabbit.debug = false
 rabbit.setCollider("circle",10,-20,200)
}


function draw() {
  // to add background
  background("light green");
  fill("green")
  textSize(25)
  
  

  edges= createEdgeSprites();                              
  rabbit.collide(edges);

  //to control rabbit
  rabbit.x = World.mouseX

 
  
   
  //to move background 
if(garden.x <120 ){
  garden.x =  garden.width/2;
}


  if(rabbit.isTouching(appleGroup)){
   appleGroup.destroyEach();
    score = score + 3
  }

  if(rabbit.isTouching(leafGroup)){
    leafGroup.destroyEach();
    score = score + 1
  } 
  
  if(rabbit.isTouching(orangeleafGroup)){
    orangeleafGroup.destroyEach();
    score = score + 2
  }
  if(rabbit.isTouching(redleafGroup)){
    redleafGroup.destroyEach();
    score = score + 2
  }

  spawnfood();
  drawSprites();
  text("SCORE  = "+score,150,100)
}

//to spawn leaves and apple
function spawnfood(){
if(frameCount % 200 === 0){
apple = createSprite(Math.round(random(50,450)),100,10,10)
apple.addImage(applei)
apple.velocityY = 4
apple.scale = 0.09
appleGroup.add(apple)
}
if(frameCount % 150 === 0){
 leaf  = createSprite(Math.round(random(50,450)),100,10,10)
 leaf.velocityY = 2
 leaf.scale = 0.1
 leaf.addImage(leafi)
leafGroup.add(leaf)

}
if(frameCount % 120 === 0){
  leaf2  = createSprite(Math.round(random(50,450)),100,10,10)
  leaf2.velocityY = 2
  leaf2.scale = 0.08
  leaf2.addImage(redleafi)
  redleafGroup.add(leaf2)


 }if(frameCount % 100 === 0){
  leaf3  = createSprite(Math.round(random(50,450)),100,10,10)
  leaf3.velocityY = 2
  leaf3.scale = 0.1
  leaf3.addImage(orangeleafi)
  orangeleafGroup.add(leaf3)

  
 }
}