var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21;
var gameState, man, manAnimation ;

function preload(){
   manAnimation = loadAnimation("man1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  man = createSprite(600,570,10,10);
  man.addAnimation(manAnimation);
  
   wall1 = createSprite(770, 300, 350, 10);
   wall2 = createSprite(600, 420, 10, 230);
   wall3 = createSprite(630,535, 70, 10);
   wall4 = createSprite(950,350, 10, 110);
   wall5 = createSprite(950,560, 10, 190);
   wall6 = createSprite(630,600, 70, 10);
   wall7 = createSprite(600,630, 10, 50);
   wall8 = createSprite(770,650, 350, 10);
   wall9 = createSprite(900,595, 10, 120);
   wall10 = createSprite(920,470, 50, 10);
   wall11 = createSprite(900,420, 10, 100);
   wall12 = createSprite(880,370, 50, 10);
   wall13 = createSprite(850,475, 10, 220);
   wall14 = createSprite(790,580, 130, 10);
   wall15 = createSprite(720,535, 10, 100);
   wall16 = createSprite(690,480, 70, 10);
   wall17 = createSprite(690,420, 170, 10);
   wall18 = createSprite(775,465, 10, 100);
   wall19 = createSprite(650,390, 10, 60);
   wall20 = createSprite(730,330, 10, 60);
   wall21 = createSprite(755,360, 60, 10);
   
  }

function draw() {
  background(0);  
  text(mouseX+","+mouseY,mouseX,mouseY);
  console.log(windowWidth);
  console.log(windowHeight);
  drawSprites();
}