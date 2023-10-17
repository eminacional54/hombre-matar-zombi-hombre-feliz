var bg,bgImg;
var player, shooterImg, shooter_shooting;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
 
  zombie = loadImage("assets/zombie.png")

  balas = loadImage("assets/balas.jpg")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

bala = createSprite(displayWidth-1150, displayHeight-300, 50, 50)
  bala.addImage(balas.jpg)
   bala.scale = 0.01
   bala.debug = true
   bala.setCollider("rectangle",0,0,300,300)

zombie = createSprite(displayWidth-1150, displayHeight-300, 50, 50)
  zombie.addImage(zombie.png)
   zombie.scale = 0.3 
   zombie.debug = true
   zombie.setCollider("rectangle",0,0,300,300)

//Crear el sprite del jugador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+30 
  
}
 if(keyDown("LEFT_ARROW")||touches.length>0){
 player.x = player.x-30 
} 

  
//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.


drawSprites();

}
