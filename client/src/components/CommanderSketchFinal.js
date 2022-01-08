import React, { useRef,useEffect } from 'react';
import './App.css';

function CommanderSketchFinal({ 
  setBossEnd, bossEndSceneRef, bossEndState, 
  commanderSketchRef, commanderSketchFinal, playerAppearRef,
  setplayerAppear, commanderPlaneFinalRef, commanderPlane, 
  setCommanderPlaneFinal, planesFlyAway, setPlanesFlyAway, 
  planesFlyAwayRef
}) {

   
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
    canvas.style['z-index'] = 8;
    
    
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
      sketchOne.src = "https://i.imgur.com/ONdG4YH.png"
      sketchOne.onload = function() {
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
      contextRef.current.fillStyle = "grey"
      contextRef.current.fillRect(sketch.x-10, sketch.y-10, sketch.w+20, sketch.h+20);
      contextRef.current.drawImage(sketchOne,sketch.x,sketch.y,sketch.w,sketch.h); 
      drawRectangle()
    }}

    
    const drawText1 = () => {
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Commander Sketch:",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20))
      }

 const drawText2 = () => {
            drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("I knew I could count on you.",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText3 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("Good Work! Lets Fly Home",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
      }

      const drawText4 = () => {
        drawRectangle()
        contextRef.current.font = "30px Arial  "
        contextRef.current.lineWidth = 1
        contextRef.current.strokeText("and get off the computer",SCREEN_WIDTH*(15.05/20), SCREEN_HEIGHT*(9.75/20));
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

      const startCutScene = () =>{
        bossEndSceneRef.current = true
        setBossEnd(fox=>!fox)
      }

      const playerDisappearPlease = () =>{
        playerAppearRef.current = false
        commanderPlaneFinalRef.current = false
        planesFlyAwayRef.current = true
        setplayerAppear(cats=>!cats)
        setCommanderPlaneFinal(fox=>!fox)
        setPlanesFlyAway(dragonbears => !dragonbears)
    
      }


    const update = () => {
      if(commanderSketchRef.current)
        {drawFunction();}
        else{
          contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
          return
        }
    }
  
    const drawFunction = () => {
      
        setTimeout(drawSketch,2000)
        setTimeout(drawText1,3000)
        setTimeout(startCutScene,4000)
        setTimeout(drawText2,5000)
        setTimeout(drawText3,7000)
        setTimeout(clearRect,8000)
        setTimeout(drawSketch,10000)
        setTimeout(drawText4,11500)
        setTimeout(playerDisappearPlease,12000)
        setTimeout(clearRect,14000)
        
    }


    update()

  },[commanderSketchFinal])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

 


  return (
    <canvas

    ref = {canvasRef}
    />
  );
}

export default CommanderSketchFinal;