import React, { useRef,useEffect } from 'react';
import './App.css';

function CloudsStatic() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.style.backgroundColor = "#B2FFFA";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 3;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

  
    const clouds = {
        w:2000,
        h:500,
        x:0,
        y:0,
        speed:0,
        dx:0,
        dy:0
      }
  
  
    const drawClouds = () => {
      let cloudZ = new Image();
      cloudZ.src = "https://i.imgur.com/PwbWghf.png"
      cloudZ.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      contextRef.current.drawImage(cloudZ,clouds.x,clouds.y,clouds.w,clouds.h);  
      // contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
    }}
  
    const update = () => {
        drawClouds();
        requestAnimationFrame(update)
    }
  
  
    update()
  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

 


  return (
    <canvas

    ref = {canvasRef}
    />
  );
}

export default CloudsStatic;