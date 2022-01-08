import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function PlayerCanvasSpaceToEarth({
  setLevelTwoPrefixStopper,levelTwoPreFixStopper, pleaseLevel2StopRef,
  cutSceneRef,setterCutScene,setplayerAppear, playerAppearRef, playerAppear
}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)
  const imageRef = useRef("https://i.imgur.com/oUoF9Nx.png")

  //left, down, right

  useEffect(()=>{
    // console.log(levelOneRef.current)
    
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.style.backgroundColor = "#D1FFFD";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 6;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    //Player Initial Position and Movement Speed
  
    const player = {
      w:SCREEN_WIDTH*(1/40),
      h:SCREEN_HEIGHT*(2/40),
      x:SCREEN_WIDTH*(19/20),
      y:SCREEN_HEIGHT*(1/20),
      speed:10,
      dx:3,
      dy:3
    }

  playerRef.current = player

  const drawPlane = () => {
    let plane = new Image();
    plane.src = imageRef.current
    plane.onload = function() {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.drawImage(plane,playerRef.current.x,playerRef.current.y,playerRef.current.w,playerRef.current.h);  
    // contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
  }}
  
  const update = () => {
      if(pleaseLevel2StopRef.current)
        {NextLevel();
        drawPlane();
        moveDownandLeft();
        requestAnimationFrame(update)}
        else{
            contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
            return
        }
}
   
  

  
    update()
  
  
  },[levelTwoPreFixStopper])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  // MOVEMENT FUNCTIONS // First Level


const moveDownandLeft = () => {
  playerRef.current.x -= playerRef.current.dx
  playerRef.current.y += playerRef.current.dy

  console.log(playerRef.current.y)
  
  
}

const NextLevel = () =>{

    if(playerRef.current.y > 900){
        pleaseLevel2StopRef.current = false
        cutSceneRef.current = true
        playerAppearRef.current = true
        setLevelTwoPrefixStopper(false)
        setplayerAppear(dog=>!dog)
        setterCutScene(fox=>!fox)
        playerRef.current.dy = 0
        playerRef.current.dx = 0
        // contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
      }

  
}



// Boundaries //

const boundariesLeft = (objectZ) => {
  if(objectZ.x < 0-(playerRef.current.w)*4){
    objectZ.x = 1700
  }
}




  return (
    <canvas
    ref = {canvasRef}
    />
  );
}

export default PlayerCanvasSpaceToEarth;
