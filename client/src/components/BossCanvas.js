import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function BossCanvas({bossRef, bossStartRef, bossSet}) {


  bossRef.current.image = "https://i.imgur.com/3PjKfOy.png"

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
    canvas.style['z-index'] = 10;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;


  if(bossStartRef.current){
  let bossA = new Image();
  let heightImage = 1000;
  let widthImage = 2000;
  const scale = .75;
  let scaledHeight = heightImage * scale;
  let scaledWidth = widthImage * scale; 
  bossA.src = 'https://i.imgur.com/DBJLg7i.png';
  bossA.onload = function() {
      init();
    };

function drawFrame(frameX, frameY, canvasX, canvasY) {
  contextRef.current.drawImage(bossA,
    0, frameY * heightImage, widthImage, heightImage
    ,canvasX, canvasY, scaledWidth, scaledHeight);
    }

    const cycleLoop = [0,1,2,3,4,5];
    let currentLoopIndex = 0;
    let frameCount = 0;
    
    function step() {
      if(bossStartRef.current){
      
      frameCount++;
      if (frameCount < 2) {
        window.requestAnimationFrame(step);
        return;
      }
      frameCount = 0;
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], currentLoopIndex, boss.x, boss.y);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(step);
    }else{
      return
    }}

    function init() {
      window.requestAnimationFrame(step);
    }

    
  const update = () => {
    // if(bossStartRef.current){
    moveBoss(boss)
    window.requestAnimationFrame(update);
  }

  update()}else{
    return
  }
  },[bossSet])

//   //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;


  

let boss = {
  x: SCREEN_WIDTH*(1/18),
  y: SCREEN_HEIGHT*(1/12),
  w: 800,
  h: 400,
  dx: 2,
  dy: 1,
  img: bossRef.current.image
}


function moveBoss(bossObject){
  bossObject.x += bossObject.dx
  bossObject.y += bossObject.dy

  
  bossRef.current.x = bossObject.x
  bossRef.current.y = bossObject.y
  bossRef.current.w = bossObject.w
  bossRef.current.h = bossObject.h

  boundariesRight(bossObject)
  boundariesLeft(bossObject)
  boundariesUp(bossObject)
  boundariesDown(bossObject)

}


const boundariesLeft = (objectZ) => {
  if(objectZ.x < -100){
    objectZ.dx *= -1
  } 
}

const boundariesRight = (objectZ) => {
  if(objectZ.x > 900){
    objectZ.dx *= -1
  } 
}

const boundariesUp = (objectZ) => {
  if(objectZ.y < 0){
    objectZ.dy *= -1
  }}
  
const boundariesDown = (objectZ) => {
  if(objectZ.y > 100){
    objectZ.dy *= -1
  }}  

  return (
    <canvas

    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default BossCanvas;