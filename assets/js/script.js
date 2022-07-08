let lose = false;
let frutaNueva = true;
let frutaPosX = 0;
let frutaPosY = 0;
let fruta;
let puntaje = 0;

let left = false;
let right = true;
let up = false;
let down = false;

//Movimiento del personaje
let pjX = 31;
let pjY = 400;
let velocidad = 3;

let cuerpo = [];
let cabeza;

let frutaX = 0;
let frutaY = 0;

function setup() {
  createCanvas(1050, 768);
  fill(255, 0, 0);
}

function draw() {

   //fruta
   if(frutaNueva==true){
    randomFruta();
    frutaNueva = false;
  }

  function randomFruta() {
    frutaPosX = random(0, 1024);
    frutaPosY = random(0, 768);
  }

  //Colision fruta
   if(pjX >=(frutaPosX-30) && pjY >=(frutaPosY-30) && pjY <=(frutaPosY+30) && pjX <=(frutaPosX+30)){
     frutaNueva = true;
     puntaje++;
     cuerpo.push(rect(pjX, pjY, 30, 30));
   }
  
  //validaciones de cuadros de la pantalla
  if(pjX <= 0){
    reset();
  }else if(pjX >=975){
    reset();
  }else if(pjY <= 0){
    reset();
}else if(pjY >= 720){
  reset();
}

  if (keyIsDown(LEFT_ARROW)) {
    left = true;
    up = false;
    down = false;
    right = false;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    left = false;
    up = false;
    down = false;
    right = true;
  }

  if (keyIsDown(UP_ARROW)) {
    left = false;
    up = true;
    down = false;
    right = false;
  }

  if (keyIsDown(DOWN_ARROW)) {
    left = false;
    up = false;
    down = true;
    right = false;
  }

  clear();

  //PINTAR FONDO
  background(220);
  cabeza = rect(pjX, pjY, 30, 30);
  for (var i=0;i<=cuerpo.length;i++){
    
  }
  rect(frutaPosX, frutaPosY,30,30);

   //Puntaje
   textSize(32);
   text('Puntaje: '+ puntaje, 10, 30);

  if(left == true){
    pjX = pjX - velocidad;
  }
  
  if(right == true){
    pjX = pjX + velocidad;
  }
  
  if(up == true){
    pjY = pjY - velocidad;
  }

  if(down == true){
    pjY = pjY + velocidad;
  } 
  // console.log('pjX: '+ pjX);
  // console.log('pjY: '+ pjY);
  // console.log('frutaX: '+frutaPosX);
  // console.log('frutaY: '+frutaPosY);
  console.log('cuerpo'+cuerpo)
}
