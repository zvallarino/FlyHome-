import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemiesSeed1Canvas({enemySeed1Ref, enemySeed1ExplosionRef, seed1, seed1StartRef}) {


 enemySeed1Ref.current.image = 'https://i.imgur.com/cqiU108.png'

  enemySeed1Ref.current.x = -1;
  enemySeed1Ref.current.y = -1;
  enemySeed1Ref.current.w = 0;
  enemySeed1Ref.current.h = 0;


  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const colorRef = useRef('grey')

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 14;
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    let i = 0

     const update = () => {
       if(seed1StartRef.current){
      drawSeed(seedOne,i,enemySeed1Ref)
      moveEnemy(seedOne,enemySeed1Ref)
      requestAnimationFrame(update)}
      else{
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
        return
      }
  }

  const movementStopper = () => {
    // console.log("noway")
    seedOne.dx = 0;
    seedOne.dy = 0;

    if(enemySeed1Ref.current.image === "https://i.imgur.com/J6s56fV.png"){
      enemySeed1ExplosionRef.current.x = 0;
      enemySeed1ExplosionRef.current.y = 0;
      enemySeed1ExplosionRef.current.w = 0;
      enemySeed1ExplosionRef.current.h = 0;
    } else {
      enemySeed1Ref.current.image = "https://i.imgur.com/9Gtot1h.png"
    }
  }

  const explosionMaker = () => {
    // console.log("superNoWay")
    if(enemySeed1Ref.current.image === "https://i.imgur.com/J6s56fV.png"){
      enemySeed1ExplosionRef.current.x = 0;
      enemySeed1ExplosionRef.current.y = 0;
      enemySeed1ExplosionRef.current.w = 0;
      enemySeed1ExplosionRef.current.h = 0;
    } else {

    enemySeed1Ref.current.image = "https://i.imgur.com/Tg4i9DW.png"
    enemySeed1ExplosionRef.current.x = enemySeed1Ref.current.x;
    enemySeed1ExplosionRef.current.y = enemySeed1Ref.current.y;
    enemySeed1ExplosionRef.current.w = enemySeed1Ref.current.w;
    enemySeed1ExplosionRef.current.h = enemySeed1Ref.current.h;
    }
  }

  const disappearMaker = () => {
    // console.log("Not gonna happen")
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    // console.log( enemySeed1Ref.current.image)
    enemySeed1ExplosionRef.current.x = 0;
    enemySeed1ExplosionRef.current.y = 0;
    enemySeed1ExplosionRef.current.w = 0;
    enemySeed1ExplosionRef.current.h = 0;
  }

  setTimeout(movementStopper,3000)
  setTimeout(explosionMaker,4000)
  setTimeout(disappearMaker,5000)


  update()
  },[seed1])

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


const seedOne = new EnemyCreator('https://i.imgur.com/qZaFU1N.png', SCREEN_WIDTH*(1/8),400, SCREEN_WIDTH/8,SCREEN_HEIGHT/4,15,2)


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
  if(objectZ.y > 300){
    objectZ.dy *= -1
  }}  

  return (
    <canvas
  
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default EnemiesSeed1Canvas;
