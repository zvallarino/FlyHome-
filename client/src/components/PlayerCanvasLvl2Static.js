import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function PlayerCanvasLvl2Static() {
  


  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)
  // const colorRef = useRef('grey')
  const imageRef = useRef("https://i.imgur.com/5rjTnM5.png")
  const [counter,secondsCounter] =useState(0)
  const rotationRef = useRef(0)
 

    // Right Down Left Up
    let rotationArray = ["https://i.imgur.com/xXGDB6n.png", "https://i.imgur.com/eR1OYjO.png", "https://i.imgur.com/yOSSK7V.png", "https://i.imgur.com/5rSfjsg.png"]
    let firingRotationArray = ['https://i.imgur.com/7vaIib6.png','https://i.imgur.com/xsRPixH.png','https://i.imgur.com/S776W1H.png','https://i.imgur.com/ARL4Jm4.png']
    let ouchArray = ["https://i.imgur.com/3BndMiB.png", "https://i.imgur.com/6drQQey.png", "https://i.imgur.com/hlwPzh2.png", "https://i.imgur.com/fiC5k5A.png"]
  
  let rotationCounter = 0


  //left, down, right

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.style.backgroundColor = "#D1FFFD";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 5;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    //Player Initial Position and Movement Speed
  
    const player = {
        x:700,
        y:400,
        w:SCREEN_WIDTH*(4/20),
        h:SCREEN_HEIGHT*(2/20),
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
    drawPlane();
    requestAnimationFrame(update)
  }


  update()

  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  // MOVEMENT FUNCTIONS // First Level


  const moveUp = () => {
    playerRef.current.y = playerRef.current.y - (playerRef.current.dy * counter)
  
    boundariesUp(playerRef.current) 
  
    secondsCounter(counter => counter +3)
  }
  
  const moveLeft = () => {
    playerRef.current.x =  playerRef.current.x - (playerRef.current.dx * counter)
  
  
    boundariesLeft(playerRef.current)
  
    secondsCounter(counter => counter +3)
    
  }
  const moveRight = () => {
    playerRef.current.x = playerRef.current.x + (playerRef.current.dx * counter)
  
    if(rotationRef.current === 0||rotationRef.current === 2||rotationRef.current === 4){
      boundariesRight(playerRef.current)
    } else{
      boundariesRightTurn(playerRef.current)
    }
  
    secondsCounter(counter => counter +3)
  }
  
  const moveDown = () => {
    playerRef.current.y = playerRef.current.y + (playerRef.current.dy * counter)
  
  
    if(rotationRef.current === 0||rotationRef.current === 2||rotationRef.current   === 4){
      boundariesDown(playerRef.current)
    } else {
      boundariesDownTurn(playerRef.current)
    }
    secondsCounter(counter => counter +3)
  }
  
  const moveRightUp = () => {
    moveUp()
    moveRight()

  }
  
  const moveRightDown = () => {
    moveRight()
    moveDown()

  }
  
  const moveLeftUp = () => {
    moveLeft()
    moveUp()
  
  }
  
  const moveLeftDown = () => {
    moveLeft()
    moveDown()

  }

  //Movement Functions
  
  const movementFunction = (e) => {
    if(e.key === "w"){
      moveUp()
    } else if (e.key ===  "d"){
      moveRight()
    } else if (e.key === "a"){
      moveLeft()
    } else if (e.key === "s"){
      moveDown()
    } else if (e.key === "q"){
      moveLeftUp()
    } else if(e.key === "e"){
      moveRightUp()
    }else if(e.key === "z"){
      moveLeftDown()
    } else if(e.key === "c"){
      moveRightDown()
    } else if( e.key === "l"){
      rotationFunction()
      imageRef.current = firingRotationArray[rotationRef.current]
      // hit()
    } else if ( e.key === "k"){
      console.log("superBlaster")
    } else if ( e.key === " "){
      rotationCounter++
      rotationRef.current = rotationRef.current + 1
      rotationFunction()
      imageRef.current = rotationArray[rotationRef.current]

    }
  } 


   // Rotation Function 

   const rotationFunction = () => {
    // console.log(rotationRef.current)
  if(rotationRef.current === 0||rotationRef.current === 2){
    playerRef.current.w = 400
    playerRef.current.h = 100
  } else if ( rotationRef.current === 1||rotationRef.current === 3 ){
   playerRef.current.w = 100
    playerRef.current.h = 400
  } else if (rotationRef.current === 4){
    playerRef.current.w = 400
    playerRef.current.h = 100
    rotationCounter = 0
    rotationRef.current = 0
  }}

// Boundaries //

const boundariesLeft = (objectZ) => {
  if(objectZ.x < 6){
    objectZ.x = 6
  }
}

const boundariesRight = (objectZ) => {
  if(objectZ.x > SCREEN_WIDTH-objectZ.w){
    objectZ.x = SCREEN_WIDTH-objectZ.w
  }
}

const boundariesUp = (objectZ) => {
  if(objectZ.y < 5){
    objectZ.y = 5
  }}
  
const boundariesDown = (objectZ) => {
  if(objectZ.y > SCREEN_HEIGHT-objectZ.h){
    objectZ.y = SCREEN_HEIGHT-objectZ.h
  }} 
  
  

  // Turned Boundaries

  
const boundariesRightTurn = (objectZ) => {
  if(objectZ.x > SCREEN_WIDTH-objectZ.w){
    objectZ.x = SCREEN_WIDTH-objectZ.w
  }
}

const boundariesDownTurn = (objectZ) => {
    if(objectZ.y > 534){
      objectZ.y = 534
    }} 
    

//HIT MARKERS

  const hit = (refObject) => {
      if(playerRef.current.y > refObject.current.y + refObject.current.h||playerRef.current.y + playerRef.current.h < refObject.current.y||playerRef.current.x > (refObject.current.x+refObject.current.w) || playerRef.current.x + playerRef.current.w < (refObject.current.x)){
        return
      } else {
        rotationFunction()
        imageRef.current = ouchArray[rotationRef.current]
      }
  }


  

const KeyUp = (e) => {
  if(e.key === "l"){
    rotationFunction()
    imageRef.current =rotationArray[rotationRef.current]
  } else if(e.key === " "){
   
  } else if (e.key === "k"){
    //  imageRef.current = "https://i.imgur.com/iNJmBDq.png"
    // console.log("stop boosting")

    console.log("stop super blasting")
  } else {
    // imageRef.current =rotationArray[rotationCounter]
    secondsCounter(1)
  }
}

  return (
    <canvas
    tabIndex="0" 
    onKeyDown ={movementFunction}
    onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default PlayerCanvasLvl2Static;
