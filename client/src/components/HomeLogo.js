import React, { useRef,useEffect } from 'react';
import './App.css';

function HomeLogo() {

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

    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;
  

  
    const LogoObject = {
        w:SCREEN_WIDTH,
        h:SCREEN_HEIGHT,
        x:0,
        y:0,
        speed:0,
        dx:0,
        dy:0
      }
  
  
    const DrawLogo = () => {
      let Logo = new Image();
      Logo.src = "https://i.imgur.com/EZba7KU.png"
      Logo.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      contextRef.current.drawImage(Logo,LogoObject.x,LogoObject.y,LogoObject.w,LogoObject.h);  
      // contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
    }}
  
    const update = () => {

        requestAnimationFrame(update)
    }
  
  
    update()
  },[])


  //SCREEN HEIGHT/WIDTH


 


  return (
    <canvas
    tabIndex="0" 

    ref = {canvasRef}
    />
  );
}

export default HomeLogo;