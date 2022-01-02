import React, { useRef,useEffect } from 'react';
import './App.css';

function SpaceCanvas({levelOneRef,levelOneState}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.backgroundColor = "black";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 1;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    const space = {
      w:2000,
      h:500,
      x:0,
      y:0,
      speed:0,
      dx:0,
      dy:0
    }


  const drawSpace = () => {
    let spaceZ = new Image();
    spaceZ.src = "https://i.imgur.com/PwbWghf.png"
    spaceZ.onload = function() {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.drawImage(spaceZ,space.x,space.y,space.w,space.h);  
    // contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
  }}


const update = () => {
  if(levelOneRef.current)
  {requestAnimationFrame(update)}
  else{
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    return
  }
}


  update()
  },[levelOneState])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Constructor for Rectangles



  return (
    <canvas
    tabIndex="0" 

    ref = {canvasRef}
    />
  );
}

export default SpaceCanvas;