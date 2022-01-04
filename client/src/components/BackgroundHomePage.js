import React, { useRef,useEffect } from 'react';
import './App.css';

function BackgroundHomeCanvas({canvasChoiceRef}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  

  // Yellow, Green, Main
  const canvasOptions = ["https://i.imgur.com/Zs6FLf3.png","https://i.imgur.com/lTXQLAc.png","https://i.imgur.com/sCwapKA.png"]



  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.backgroundColor = "#B2FFFA";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = -1;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

  
    const space = {
        w:SCREEN_WIDTH,
        h:SCREEN_HEIGHT,
        x:0,
        y:0,
        speed:0,
        dx:0,
        dy:0
      }
  
  
    const drawSpace = () => {
      let spaceImage = new Image();
      spaceImage.src = canvasOptions[canvasChoiceRef.current]
      spaceImage.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      contextRef.current.drawImage(spaceImage,space.x,space.y,space.w,space.h);  
      // contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
    }}
  
    const update = () => {
     
    drawSpace()
      requestAnimationFrame(update)
      ;
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

export default BackgroundHomeCanvas;