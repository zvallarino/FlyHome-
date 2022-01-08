import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemiesSeed3Canvas({enemySeed3Ref, enemySeed3ExplosionRef, seed3,seed3StartRef}) {

    
  enemySeed3Ref.current.x = 0;
  enemySeed3Ref.current.y = 0;
  enemySeed3Ref.current.w = 0;
  enemySeed3Ref.current.h = 0;

    enemySeed3Ref.current.image = 'https://i.imgur.com/cqiU108.png'
    


  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 16;
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    let i = 0

    const movementStopper = () => {
      seedThree.dx = 0;
      seedThree.dy = 0;

      if(enemySeed3Ref.current.image === "https://i.imgur.com/J6s56fV.png"){
        enemySeed3ExplosionRef.current.x = 0;
        enemySeed3ExplosionRef.current.y = 0;
        enemySeed3ExplosionRef.current.w = 0;
        enemySeed3ExplosionRef.current.h = 0;}
        else{
      enemySeed3Ref.current.image = "https://i.imgur.com/9Gtot1h.png"}
    }
  
    const explosionMaker = () => {
     
      
      if(enemySeed3Ref.current.image === "https://i.imgur.com/J6s56fV.png"){
        enemySeed3ExplosionRef.current.x = 0;
        enemySeed3ExplosionRef.current.y = 0;
        enemySeed3ExplosionRef.current.w = 0;
        enemySeed3ExplosionRef.current.h = 0;}else{
      enemySeed3Ref.current.image = "https://i.imgur.com/Tg4i9DW.png"
      enemySeed3ExplosionRef.current.x = enemySeed3Ref.current.x;
      enemySeed3ExplosionRef.current.y = enemySeed3Ref.current.y;
      enemySeed3ExplosionRef.current.w = enemySeed3Ref.current.w;
      enemySeed3ExplosionRef.current.h = enemySeed3Ref.current.h;}
    }
  
    const disappearMaker = () => {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      enemySeed3ExplosionRef.current.x = -1;
      enemySeed3ExplosionRef.current.y = -1;
      enemySeed3ExplosionRef.current.w = 0;
      enemySeed3ExplosionRef.current.h = 0;
    }
  
    setTimeout(movementStopper,3000)
    setTimeout(explosionMaker,4000)
    setTimeout(disappearMaker,5000)
  

     const update = () => {
       if(seed3StartRef.current)
    {drawSeed(seedThree,i,enemySeed3Ref)
    moveEnemy(seedThree,enemySeed3Ref)
    requestAnimationFrame(update)}
    else{
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
      return
    }
  }


  update()
  },[seed3])

//   //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

// Enemy Constructor

class EnemyCreator {
  constructor(img, x, y, width, height, dx, dy) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.dx = dx;
    this.dy = dy;

  }
}


const seedThree = new EnemyCreator('https://i.imgur.com/qZaFU1N.png', SCREEN_WIDTH*(2/3),400, SCREEN_WIDTH/8,SCREEN_HEIGHT/4,20,2)


//Draw Function

function drawSeed(EnemyObject,i,refObject){
  let enemy = new Image();
  enemy.src = refObject.current.image
  enemy.onload = function() {
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
  contextRef.current.beginPath();
  contextRef.current.drawImage(enemy, EnemyObject.x, EnemyObject.y, EnemyObject.w, EnemyObject.h)
  // contextRef.current.strokeRect(EnemyObject.x, EnemyObject.y, EnemyObject.w,EnemyObject.h);
  contextRef.current.fill();}
  i++;
  }

  
function moveEnemy(enemyObject,refObject){
  enemyObject.x += enemyObject.dx
  enemyObject.y += enemyObject.dy

    
  refObject.current.x = enemyObject.x
  refObject.current.y = enemyObject.y
  refObject.current.w = enemyObject.w
  refObject.current.h = enemyObject.h


  boundariesLeft(enemyObject)
  boundariesRight(enemyObject)
  boundariesUp(enemyObject)
  boundariesDown(enemyObject)
}

const boundariesLeft = (objectZ) => {
  if(objectZ.x < 0){
    objectZ.dx *= -1
  } 
}

const boundariesRight = (objectZ) => {
  if(objectZ.x > SCREEN_WIDTH-objectZ.w){
    objectZ.dx *= -1
  } 
}

const boundariesUp = (objectZ) => {
  if(objectZ.y < 150){
    objectZ.dy *= -1
  }}
  
const boundariesDown = (objectZ) => {
  if(objectZ.y > 600){
    objectZ.dy *= -1
  }}  

  return (
    <canvas
   
    ref = {canvasRef}
    />
  );
}

export default EnemiesSeed3Canvas;