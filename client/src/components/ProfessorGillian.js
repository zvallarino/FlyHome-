import React, { useRef,useEffect } from 'react';
import './App.css';

function ProfessorGillian({cutSceneRef, cutSceneStart }) {
   
  console.log(cutSceneRef)

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
    canvas.style['z-index'] = 18;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
   
    contextRef.current = context;

  
    const gillian = {
        w:300,
        h:400,
        x:SCREEN_WIDTH*(15.5/20),
        y:10,
        speed:0,
        dx:0,
        dy:0
      }
  
    const drawGillian = () => {
      let gillianOne = new Image();
      gillianOne.src = "https://i.imgur.com/CQUq9AK.png"
      gillianOne.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
      contextRef.current.fillStyle = "grey"
      contextRef.current.fillRect(gillian.x-10, gillian.y-10, gillian.w+20, gillian.h+20);
      contextRef.current.drawImage(gillianOne,gillian.x,gillian.y,gillian.w,gillian.h); 
      drawRectangle()
    }}

    
    const drawText1 = () => {
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Professor Gillian:",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20))
      }

 const drawText2 = () => {
            drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Ah.",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText3 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Sketch's puppet has arrived",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText4 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Professor Gillian:",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText5 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("You Fool. Get Ready for your ",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText6 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("ENGLIGHTENMENT",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }


      const drawRectangle = () => {
        contextRef.current.fillStyle = "white";
        contextRef.current.fillRect(SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
        contextRef.current.strokeStyle = "black";
        contextRef.current.strokeRect(SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
      }

      const clearRect = () =>{
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
        // doomStartRef.current = true
        // setStartofDoom(true)
      }

  
    const update = () => {
      console.log(cutSceneRef.current)
      if(cutSceneRef.current)
        {drawFunction()}
        else{
          contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
          return
        }  
    }
  
    const drawFunction = () => {

        setTimeout(drawGillian,1000)
        setTimeout(drawText1,1300)
        setTimeout(drawText2,3000)
        setTimeout(drawText3,5000)
        setTimeout(clearRect,7000)

        setTimeout(drawGillian,14000)
        setTimeout(drawText4,14300)
        setTimeout(drawText5,16000)
        setTimeout(drawText6,18000)
        
        setTimeout(clearRect,20000)
        
    }


    update()

  },[cutSceneStart])


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

export default ProfessorGillian;