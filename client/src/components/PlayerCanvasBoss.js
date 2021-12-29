import React, { useRef,useEffect,useState } from 'react';
import './App.css';
// import { render } from "react-dom";
// import { Stage, Layer, Image } from "react-konva";
// // gifler will be imported into global window object
// import "/gifler";



function PlayerCanvasBoss({
  bossRef, lightningBoltsRef
}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)

  const imageRef = useRef("https://i.imgur.com/dAvqr1d.png")
  const [counter,secondsCounter] =useState(0)
  const rotationRef = useRef(0)

    //  Up Right Down Left
  let rotationArray = ["https://i.imgur.com/GtyzjZb.png", "https://i.imgur.com/KuhriMc.png", "https://i.imgur.com/R1ZZM9i.png", "https://i.imgur.com/Zbuzj3K.png"]
  let firingRotationArray = ['https://i.imgur.com/9lDQkp9.png','https://i.imgur.com/6Zq7JC8.png','https://i.imgur.com/LlvH1ZX.png','https://i.imgur.com/YYMtBNz.png']
  let ouchArray = ["https://i.imgur.com/3BndMiB.png", "https://i.imgur.com/6drQQey.png", "https://i.imgur.com/hlwPzh2.png", "https://i.imgur.com/fiC5k5A.png"]
  //Dead Image 

  // https://i.imgur.com/hBclQUa.png

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
    canvas.style['z-index'] = 20;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    //Player Initial Position and Movement Speed
  
    const player = {
      w:400,
      h:100,
      x:700,
      y:400,
      speed:10,
      dx:3,
      dy:3
    }

  playerRef.current = player
  
  let plane = new Image();
  let heightImage = 500;
  let widthImage = 2000;
  const scale = .25;
  let scaledHeight = heightImage * scale;
  let scaledWidth = widthImage * scale; 
  plane.src = 'https://i.imgur.com/dAvqr1d.png';
  plane.onload = function() {
      init();
    };

function drawFrame(frameX, frameY, canvasX, canvasY) {
  contextRef.current.drawImage(plane,
    0, frameY * heightImage, widthImage, heightImage
    ,canvasX, canvasY, scaledWidth, scaledHeight);
    }

    function init() {
      drawFrame(0, 0, 0, 0);
      drawFrame(1,  1, scaledWidth, 0);
      drawFrame(0, 2, scaledWidth * 2, 0);
    }

    const cycleLoop = [0, 1, 2];
    let currentLoopIndex = 0;
    let frameCount = 0;
    
    function step() {
      frameCount++;
      if (frameCount < 4) {
        window.requestAnimationFrame(step);
        return;
      }
      frameCount = 0;
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], currentLoopIndex, playerRef.current.x, playerRef.current.y);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(step);
    }

    function init() {
      window.requestAnimationFrame(step);
    }


  // const drawPlane = () => {
  //   let plane = new Image();
  //   plane.src = imageRef.current
  //   plane.onload = function() {
  //   contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
  //   contextRef.current.drawImage(plane,playerRef.current.x,playerRef.current.y,playerRef.current.w,playerRef.current.h);  
  //   contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
  // }}




  const update = () => {
    // drawPlane();
    hit(lightningBoltsRef)
    requestAnimationFrame(update)
  }

  // gifler('assets/gif/run.gif').animate('canvas.running-pikachu')

  update()
  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  // MOVEMENT FUNCTIONS 

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
      hit(bossRef)

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
 
  if(rotationRef.current === 0||rotationRef.current === 2){
    // playerRef.current.x =  playerRef.current.x - (playerRef.current.w * (2))
    // playerRef.current.y =  playerRef.current.y + 150

    // playerRef.current.x =  playerRef.current.x
    // playerRef.current.y = playerRef.current.y
    playerRef.current.w = 400
    playerRef.current.h = 100
  } else if ( rotationRef.current === 1||rotationRef.current === 3 ){
    // playerRef.current.x =  playerRef.current.x + (playerRef.current.w/2)
    // playerRef.current.y =  playerRef.current.y - 150

   playerRef.current.w = 100
    playerRef.current.h = 400
  } else if (rotationRef.current === 4){
    // playerRef.current.x =  playerRef.current.x - (playerRef.current.w * (2))
    // playerRef.current.y =  playerRef.current.y + 150

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
    if(objectZ.y > SCREEN_HEIGHT-objectZ.h){
      objectZ.y = SCREEN_HEIGHT-objectZ.h
    }} 



  const hit = (refObject) => {
    // console.log(refObject.current)

    if(playerRef.current.x > (refObject.current.x+refObject.current.w)||
    playerRef.current.x + playerRef.current.w < (refObject.current.x)||
    playerRef.current.y > refObject.current.y + refObject.current.h ||
    playerRef.current.y + playerRef.current.h < refObject.current.y){

    } else {
      console.log('hit')
      refObject.current.image = "https://i.imgur.com/J6s56fV.png"
      rotationFunction()
    }
}



 

const KeyUp = (e) => {
  if(e.key === "l"){

    rotationFunction()
    imageRef.current =rotationArray[rotationRef.current]

  } else if(e.key === " "){
    // imageRef.current = "https://i.imgur.com/iNJmBDq.png"
    // console.log("stop boosting")
  } else if (e.key === "k"){

    console.log("stop super blasting")
  } else {
    secondsCounter(1)
    rotationFunction()
    imageRef.current = rotationArray[rotationRef.current]
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

export default PlayerCanvasBoss;
