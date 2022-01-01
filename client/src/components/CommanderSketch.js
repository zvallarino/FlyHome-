import React, { useRef,useEffect } from 'react';
import './App.css';

function CommanderSketch() {

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
   
    contextRef.current = context;

  
    const sketch = {
        w:300,
        h:400,
        x:SCREEN_WIDTH*(15.5/20),
        y:10,
        speed:0,
        dx:0,
        dy:0
      }
  
  
    const drawSketch = () => {
      let sketchOne = new Image();
      sketchOne.src = "https://i.imgur.com/PpJW78X.png"
      sketchOne.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
      contextRef.current.fillStyle = "grey"
      contextRef.current.fillRect(sketch.x, sketch.y, sketch.w, sketch.h);
      contextRef.current.fillStyle = "white" 
      contextRef.current.fillRect(sketch.x+20, sketch.y+5, sketch.w-40, sketch.h-20); 
      contextRef.current.drawImage(sketchOne,sketch.x,sketch.y,sketch.w,sketch.h); 
      drawRectangle()
    }}

    
    const drawText1 = () => {
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Commander Sketch:",SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9.75/20));

      }

      const drawText2 = () => {
            drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Private, I need you home now.",SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText3 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Professor Gillian is attacking!.",SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawRectangle = () => {
        contextRef.current.fillStyle = "white";
        contextRef.current.fillRect(SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
        contextRef.current.strokeStyle = "black";
        contextRef.current.strokeRect(SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
      }

      const clearRect = () =>{
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
      }

  
    const update = () => {
        drawSketch();
        TextFunction();

        
        // requestAnimationFrame(update)
    }
  
    const TextFunction = () => {
     
        setTimeout(drawText1,2000)
        setTimeout(drawText2,4000)
        setTimeout(drawText3,6000)
        setTimeout(clearRect,8000)
        
    }


    update()

  },[])


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

export default CommanderSketch;