import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemyPlane2Canvas({enemyPlane2Ref}) {


  enemyPlane2Ref.current.image = 'https://i.imgur.com/FJ20n1X.png'


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
    canvas.style['z-index'] = 12;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    let i = 0

  const update = () => {
    drawEnemyPlane(planeTwo,i,enemyPlane2Ref)
    moveEnemy(planeTwo, enemyPlane2Ref)
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


const planeTwo = new EnemyCreator('https://i.imgur.com/FJ20n1X.png', 200, 250, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)


//Draw Function

let i = 0



function drawEnemyPlane(EnemyObject,i,refObject){
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
    tabIndex="0" 
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default EnemyPlane2Canvas;
