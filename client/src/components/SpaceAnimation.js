import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function SpaceAnimation({   spaceAnimationRef, setSpaceAnimation, spaceAnimation}) {
  console.log(spaceAnimationRef.current)

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  useEffect(()=>{
    console.log(spaceAnimationRef.current )

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 5;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;


    if(spaceAnimationRef.current){
      console.log(spaceAnimationRef.current )
  let bossA = new Image();
  let heightImage = 2000;
  let widthImage = 4000;
  const scale = .45;
  let scaledHeight = heightImage * scale;
  let scaledWidth = widthImage * scale; 
  bossA.src = 'https://i.imgur.com/mjwW9nO.png';
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
      if(spaceAnimationRef.current){

      frameCount++;
      if (frameCount < 4) {
       requestAnimationFrame(step);
        return;
      }
      frameCount = 0;
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], currentLoopIndex, boss.x, boss.y);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
     requestAnimationFrame(step);}
     else{
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      return
     }
    }

    function init() {
     requestAnimationFrame(step);
    }

    
  const update = () => {
    // if(bossStartRef.current){
    requestAnimationFrame(update);
  }

  update()}
  else{
    return
  }
  },[spaceAnimation])

//   //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;


  

let boss = {
  x: 0,
  y: 0,
  w: SCREEN_WIDTH,
  h: SCREEN_HEIGHT,

}


  return (
    <canvas

    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default SpaceAnimation;