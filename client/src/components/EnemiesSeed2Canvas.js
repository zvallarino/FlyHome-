import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemiesSeed2Canvas({enemySeed2Ref, enemySeed2ExplosionRef, seed2,seed2StartRef}) {

  
  enemySeed2Ref.current.x = -1;
  enemySeed2Ref.current.y = -1;
  enemySeed2Ref.current.w = 0;
  enemySeed2Ref.current.h = 0;

    enemySeed2Ref.current.image = 'https://i.imgur.com/cqiU108.png'


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
    canvas.style['z-index'] = 15;
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    let i = 0

     const update = () => {
       if(seed2StartRef.current){
    drawSeed(seedTwo,i,enemySeed2Ref)
    moveEnemy(seedTwo,enemySeed2Ref)
    requestAnimationFrame(update)}
    else{
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
      return
    }
  }

  
  const movementStopper = () => {
    seedTwo.dx = 0;
    seedTwo.dy = 0;
    console.log(enemySeed2Ref.current.image)
    if(enemySeed2Ref.current.image === "https://i.imgur.com/J6s56fV.png"){
      enemySeed2ExplosionRef.current.x = 0;
      enemySeed2ExplosionRef.current.y = 0;
      enemySeed2ExplosionRef.current.w = 0;
      enemySeed2ExplosionRef.current.h = 0;}
      else{
    enemySeed2Ref.current.image = "https://i.imgur.com/9Gtot1h.png"}
  }

  const explosionMaker = () => {
    if(enemySeed2Ref.current.image === "https://i.imgur.com/J6s56fV.png"){
      enemySeed2ExplosionRef.current.x = 0;
      enemySeed2ExplosionRef.current.y = 0;
      enemySeed2ExplosionRef.current.w = 0;
      enemySeed2ExplosionRef.current.h = 0;}
      else{
    enemySeed2Ref.current.image = "https://i.imgur.com/Tg4i9DW.png"
    enemySeed2ExplosionRef.current.x = enemySeed2Ref.current.x;
    enemySeed2ExplosionRef.current.y = enemySeed2Ref.current.y;
    enemySeed2ExplosionRef.current.w = enemySeed2Ref.current.w;
    enemySeed2ExplosionRef.current.h = enemySeed2Ref.current.h;}
  }

  const disappearMaker = () => {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
 
    enemySeed2ExplosionRef.current.x = 0;
    enemySeed2ExplosionRef.current.y = 0;
    enemySeed2ExplosionRef.current.w = 0;
    enemySeed2ExplosionRef.current.h = 0;
  }

  setTimeout(movementStopper,3000)
  setTimeout(explosionMaker,4000)
  setTimeout(disappearMaker,5000)


  update()
  },[seed2])

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


const seedTwo = new EnemyCreator('https://i.imgur.com/qZaFU1N.png', SCREEN_WIDTH/3,400, SCREEN_WIDTH/8,SCREEN_HEIGHT/4,-15,1)


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

export default EnemiesSeed2Canvas;