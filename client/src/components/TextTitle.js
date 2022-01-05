import React, { useRef,useEffect } from 'react';
import './App.css';

function TextTitle({textRef, textState}) {

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
    canvas.style['z-index'] = 4;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"

    context.lineWidth = 5
    contextRef.current = context;

  
    const drawText = () => {
      contextRef.current.font = "43px Courier New"
      
    //   contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      contextRef.current.strokeText("Year: 2420",SCREEN_WIDTH*(8/20), SCREEN_HEIGHT*(17/20));  
      contextRef.current.strokeText("Galaxy: Andromeda",SCREEN_WIDTH*(8/20), SCREEN_HEIGHT*(18/20));  
      contextRef.current.strokeText("Sector: 5C",SCREEN_WIDTH*(8/20), SCREEN_HEIGHT*(19/20));  
    }
  
    const update = () => {
        drawText();
        // requestAnimationFrame(update)
    }
  
    if(textRef.current){
    update()}
    else{
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
        return
    }
  },[textState])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

 


  return (
    <canvas
    tabIndex="0" 

    ref = {canvasRef}
    />
  );
}

export default TextTitle;