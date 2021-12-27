import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function BossCanvas({bossXRef,bossYRef, bossHRef, bossWRef, bossImgRef}) {



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
    canvas.style['z-index'] = 8;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    let plane = new Image();
  let heightImage = 1000;
  let widthImage = 2000;
  const scale = .75;
  let scaledHeight = heightImage * scale;
  let scaledWidth = widthImage * scale; 
  plane.src = 'https://i.imgur.com/DBJLg7i.png';
  plane.onload = function() {
      init();
    };

function drawFrame(frameX, frameY, canvasX, canvasY) {
  contextRef.current.drawImage(plane,
    0, frameY * heightImage, widthImage, heightImage
    ,canvasX, canvasY, scaledWidth, scaledHeight);
    }

    function init() {
      drawFrame(0, 0, 0, 0);
      drawFrame(1,  1, scaledWidth, 0);
      drawFrame(0, 2, scaledWidth * 2, 0);
    }

    const cycleLoop = [0,1,2,3,4,5];
    let currentLoopIndex = 0;
    let frameCount = 0;
    
    function step() {
      frameCount++;
      if (frameCount < 7) {
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
    }

    function init() {
      window.requestAnimationFrame(step);
    }

    
  const update = () => {

    // drawBoss(boss)
    moveBoss(boss)
    requestAnimationFrame(update);
  }

  update()
  },[])

//   //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;


  

let boss = {
  x: SCREEN_WIDTH*(2/7),
  y: SCREEN_HEIGHT*(1/12),
  w: 800,
  h: 400,
  dx: 2,
  dy: 1,
  img: bossImgRef.current
}

function drawBoss(bossObject){
let MainBoss = new Image();
MainBoss.src = bossImgRef.current
MainBoss.onload = function() {
contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
contextRef.current.beginPath();
contextRef.current.drawImage(MainBoss, bossObject.x, bossObject.y, bossObject.w, bossObject.h)
contextRef.current.strokeRect(boss.x, boss.y, boss.w,boss.h);
contextRef.current.fill();}
}


function moveBoss(bossObject){
  bossObject.x += bossObject.dx
  bossObject.y += bossObject.dy


  bossXRef.current = bossObject.x
  bossYRef.current = bossObject.y
  bossWRef.current = bossObject.w
  bossHRef.current = bossObject.h

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
    tabIndex="0" 
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default BossCanvas;