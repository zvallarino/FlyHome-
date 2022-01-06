import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function PlayerTitleCanvas({textRef,setText, pleaseStopRef, setPrefixStopper, PrefixStopper, levelOneRef,setLevelOneState }) {

  
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)
  const imageRef = useRef("https://i.imgur.com/KTMDmL2.png")

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
    canvas.style['z-index'] = 3;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    //Player Initial Position and Movement Speed
  
    const player = {
      w:SCREEN_WIDTH/20,
      h:SCREEN_HEIGHT/20,
      x:SCREEN_WIDTH + SCREEN_WIDTH/8,
      y:SCREEN_HEIGHT/2,
      speed:10,
      dx:3,
      dy:0
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
    if(pleaseStopRef.current)
    {NextLevel();
    drawPlane();
    moveLeft();
    requestAnimationFrame(update)}
    else{
      
      contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
      levelOneRef.current = true
      setLevelOneState(true)
      return
    }
  }

  if(pleaseStopRef.current){
    update()
  }
  else{
  
  return
  }

  },[PrefixStopper])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  // MOVEMENT FUNCTIONS // First Level


const moveLeft = () => {
  playerRef.current.x -= playerRef.current.dx
  if(playerRef.current.x>1200||playerRef.current.x<500){
    textRef.current = false
    setText(false)
  }else{
    textRef.current = true
    setText(true)
  }
}

const NextLevel = () =>{
  if(playerRef.current.x < -100){
    pleaseStopRef.current = false
    setPrefixStopper(false)
    playerRef.current.dx = 0
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
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
    tabIndex="0" 
    ref = {canvasRef}
    />
  );
}

export default PlayerTitleCanvas;
