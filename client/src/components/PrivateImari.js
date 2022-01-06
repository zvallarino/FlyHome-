import React, { useRef,useEffect } from 'react';
import './App.css';

function PrivateImari({levelOneState, levelOneRef,  doomStartRef, setStartofDoom, spaceAnimationRef, setSpaceAnimation}) {
   
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
    canvas.style['z-index'] = 7;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
   
    contextRef.current = context;

  
    const imari = {
        w:300,
        h:400,
        x:SCREEN_WIDTH*(1/20),
        y:10,
        speed:0,
        dx:0,
        dy:0
      }
  
    const privateImari = () => {
      let imariOne = new Image();
      imariOne.src = "https://i.imgur.com/jajMk7O.png"
      imariOne.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
      contextRef.current.fillStyle = "grey"
      contextRef.current.fillRect(imari.x-10, imari.y-10, imari.w+20, imari.h+20);
      contextRef.current.drawImage(imariOne,imari.x,imari.y,imari.w,imari.h); 
      drawRectangle()
    }}

   

    
    const drawText1 = () => {
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Private Imari:",SCREEN_WIDTH*(.6/20), SCREEN_HEIGHT*(9.7/20))
      }

 const drawText2 = () => {
            drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Count on me,sir.",SCREEN_WIDTH*(.6/20), SCREEN_HEIGHT*(9.7/20));
      }

      const drawText3 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Engaging Hyperspeed!",SCREEN_WIDTH*(.6/20), SCREEN_HEIGHT*(9.7/20));
        spaceAnimationRef.current = true
        setSpaceAnimation(fox=>!fox)
        console.log(spaceAnimationRef.current)
      }

      const drawRectangle = () => {
        contextRef.current.fillStyle = "white";
        contextRef.current.fillRect(SCREEN_WIDTH*(0.5/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
        contextRef.current.strokeStyle = "black";
        contextRef.current.strokeRect(SCREEN_WIDTH*(0.5/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
      }

      const clearRect = () =>{
        contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
 

        doomStartRef.current = true
        setStartofDoom(true)
      }

  
    const update = () => {
        if(levelOneRef.current)
      {  
        drawFunction();}
        else{
            contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
            return
        }
    }
  
    const drawFunction = () => {
        setTimeout(privateImari,8000)
        setTimeout(drawText1,8200)
        setTimeout(drawText2,10000)
        setTimeout(drawText3,12000)
        setTimeout(clearRect,13000)  
    }


    update()

  },[levelOneState])


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

export default PrivateImari;