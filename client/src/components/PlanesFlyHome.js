import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function PlanesFlyHome({planesFlyAway, planesFlyAwayRef}) {



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
    canvas.style['z-index'] = 19;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    if(planesFlyAwayRef.current){
  let bossA = new Image();
  let heightImage = 2000;
  let widthImage = 4000;
  const scale = .25;
  let scaledHeight = heightImage * scale;
  let scaledWidth = widthImage * scale; 
  bossA.src = 'https://i.imgur.com/WnkyOFd.png';
  bossA.onload = function() {
      init();
    };

function drawFrame(frameX, frameY, canvasX, canvasY) {
  contextRef.current.drawImage(bossA,
    0, frameY * heightImage, widthImage, heightImage
    ,canvasX, canvasY, scaledWidth, scaledHeight);
    }

    const cycleLoop = [0,1,2,3,4,5,6,7];
    let currentLoopIndex = 0;
    let frameCount = 0;
    
    function step() {

        if(planesFlyAwayRef.current){
            frameCount++;
            if (frameCount < 3) {
            window.requestAnimationFrame(step);
            return;
            }
      frameCount = 0;
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], currentLoopIndex, boss.x, boss.y);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
        return
      }
      window.requestAnimationFrame(step);}
      else{
          return
      }
   }

    function init() {
      window.requestAnimationFrame(step);
    }

    
  const update = () => {
    window.requestAnimationFrame(update);
  }

  update()}
  else{
      return
  }

}
  ,[planesFlyAway])

//   //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;


  

let boss = {
  x: SCREEN_WIDTH*(2/7),
  y: SCREEN_HEIGHT*(1/12),
  w: 800,
  h: 400,
  dx: 2,
  dy: 1
}





  return (
    <canvas

    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default PlanesFlyHome;