import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemiesBallsCanvas({enemyBallXRef, enemyBallYRef, enemyBallWRef, enemyBallHRef, enemyBallImageRef}) {


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
    canvas.style['z-index'] = 2;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    
  const update = () => {
    // drawEnemyPlane(planeOne)
    // drawEnemyPlane(planeTwo)
    drawEnemyPlane(ballOne)
    moveEnemy(ballOne)
    requestAnimationFrame(update)
  }


  update()
  },[])

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

const planeOne = new EnemyCreator('https://i.imgur.com/qZaFU1N.png',SCREEN_WIDTH*(1/8),200, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)
const planeTwo = new EnemyCreator('https://i.imgur.com/qZaFU1N.png',  SCREEN_WIDTH*(4/10), 200, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)
// const planeThree = new EnemyCreator('https://i.imgur.com/qZaFU1N.png', SCREEN_WIDTH*(8/10),200, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)

const ballOne = new EnemyCreator('https://i.imgur.com/qZaFU1N.png', SCREEN_WIDTH*(1/8),400, SCREEN_WIDTH/16,SCREEN_HEIGHT/8,2,0)


//Draw Function

let i = 0

let enemy = {}

function drawEnemyPlane(EnemyObject,i,enemy){
  enemy = new Image();
  enemy.src = enemyBallImageRef.current
  enemy.onload = function() {
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
  contextRef.current.beginPath();
  contextRef.current.drawImage(enemy, EnemyObject.x, EnemyObject.y, EnemyObject.w, EnemyObject.h)
  contextRef.current.strokeRect(EnemyObject.x, EnemyObject.y, EnemyObject.w,EnemyObject.h);
  contextRef.current.fill();}
  i++;
  }

  
function moveEnemy(enemyObject){
  enemyObject.x += enemyObject.dx
  enemyObject.y += enemyObject.dy

    
  enemyBallXRef.current = enemyObject.x
  enemyBallYRef.current = enemyObject.y
  enemyBallWRef.current = enemyObject.w
  enemyBallHRef.current = enemyObject.h


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
    tabIndex="0" 
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default EnemiesBallsCanvas;
