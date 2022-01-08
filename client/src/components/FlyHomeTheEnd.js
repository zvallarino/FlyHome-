import React, { useRef,useEffect } from 'react';
import './App.css';

function FlyHomeTheEnd({planesFlyAway, planesFlyAwayRef}) {

  console.log("did you fire")
  console.log(planesFlyAwayRef.current)

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
    canvas.style['z-index'] = 10;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "red"
    context.lineWidth = 5
    contextRef.current = context;

  
    const drawText = () => {
      contextRef.current.font = "72px Courier New"
   

      
    //   contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      contextRef.current.strokeText("FLY HOME",SCREEN_WIDTH*(7.8/20), SCREEN_HEIGHT*(6/20));  
      contextRef.current.strokeText("THE END",SCREEN_WIDTH*(8/20), SCREEN_HEIGHT*(9/20));  
    
    }
  
    const update = () => {
        setTimeout(drawText,2000)
        // requestAnimationFrame(update)
    }
  
    if(planesFlyAwayRef.current){
    update()}
    else{
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
        return
    }
  },[planesFlyAway])


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

export default FlyHomeTheEnd;