import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function CommanderSketchPlaneFinal({commanderSketchRef, commanderSketchFinal, commanderPlane, commanderPlaneFinalRef}) {
  console.log(commanderPlaneFinalRef.current)

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)
  const imageRef = useRef("https://i.imgur.com/ymnWF8N.png")

  //left, down, right

  useEffect(()=>{
    // console.log(levelOneRef.current)

    
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.style.backgroundColor = "#D1FFFD";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 17;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    //Player Initial Position and Movement Speed

    
    if(commanderPlaneFinalRef.current){
  
    const player = {
      w:SCREEN_WIDTH*(4/20),
      h:SCREEN_HEIGHT*(2/20),
      x:SCREEN_WIDTH,
      y:SCREEN_HEIGHT/2,
      speed:10,
      dx:12,
      dy:0
    }

  playerRef.current = player

  const drawPlane = () => {
    let plane = new Image();
    plane.src = imageRef.current
    plane.onload = function() {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.drawImage(plane,playerRef.current.x,playerRef.current.y,playerRef.current.w,playerRef.current.h);  
    // contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
  }}
  
  const update = () => {
    if(commanderPlaneFinalRef.current)
   { drawPlane();
    moveLeft();
    requestAnimationFrame(update)}
    else{
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      return
    }
  }

  const sketchStopinTheMiddle = () =>{
    playerRef.current.dx = 0
  }

  
  
  setTimeout(sketchStopinTheMiddle,1500)


    update()}
    else{
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      return
    }

  },[commanderPlane])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  // MOVEMENT FUNCTIONS // First Level


const moveLeft = () => {
  playerRef.current.x -= playerRef.current.dx
  playerRef.current.y -= playerRef.current.dy
}



// Boundaries //

const boundariesLeft = (objectZ) => {
  if(objectZ.x < 0){
    setTimeout(functionTime,2000)
    objectZ.x = 1700
  }

  const functionTime = () => {
      console.log("Are We too deep")
  }
  setTimeout(functionTime,2000)
}




  return (
    <canvas
  
    ref = {canvasRef}
    />
  );
}

export default CommanderSketchPlaneFinal;
