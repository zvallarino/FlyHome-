import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function LevelTwoPlayerCanvas({bossXRef,bossYRef, bossHRef, bossWRef, bossImgRef, bossHitCounter, lightningBoltsXRef, ligtningBoltsYRef, lightningBoltsWRef, lightningBoltsHRef
}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)

  const imageRef = useRef("https://i.imgur.com/5rjTnM5.png")
  const [counter,secondsCounter] =useState(0)
  const rotationRef = useRef(0)




 

    //  Up Right Down Left
  let rotationArray = ["https://i.imgur.com/5rjTnM5.png", "https://i.imgur.com/KuhriMc.png", "https://i.imgur.com/R1ZZM9i.png", "https://i.imgur.com/Zbuzj3K.png"]
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
    canvas.style['z-index'] = 4;
    
    
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

  const drawPlane = () => {
    let plane = new Image();
    plane.src = imageRef.current
    plane.onload = function() {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.drawImage(plane,playerRef.current.x,playerRef.current.y,playerRef.current.w,playerRef.current.h);  
    contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
  }}

  const update = () => {
    drawPlane();
    lightningStrike();
    requestAnimationFrame(update)
  }


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
      hit()
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
  if(objectZ.x > 1516){
    objectZ.x = 1516
  }
}

const boundariesUp = (objectZ) => {
  if(objectZ.y < 5){
    objectZ.y = 5
  }}
  
const boundariesDown = (objectZ) => {
  if(objectZ.y > 835){
    objectZ.y = 835
  }} 
  

  // Turned Boundaries

  
const boundariesRightTurn = (objectZ) => {
  if(objectZ.x > 1816){
    objectZ.x = 1816
  }
}

const boundariesDownTurn = (objectZ) => {
    if(objectZ.y > 534){
      objectZ.y = 534
    }} 
    

//HIT MARKERS

  const hit = () => {

      if(playerRef.current.x > (bossXRef.current+bossWRef.current) || playerRef.current.x + playerRef.current.w < (bossXRef.current) || playerRef.current.y > bossYRef.current + bossHRef.current||playerRef.current.y + playerRef.current.h < bossYRef.current){
        console.log('miss')
      } else {
        console.log("hit")
        bossHitCounter.current =  bossHitCounter.current + 1
        if( bossHitCounter.current < 10){
        bossImgRef.current = ouchArray[0]} 
        else{
          bossImgRef.current = "https://i.imgur.com/hBclQUa.png"
        }
        rotationFunction()
      }
  }

  // lightningBoltsXRef, ligtningBoltsYRef, lightningBoltsWRef, lightningBoltsHRef

  const lightningStrike = () => {
    
    if(playerRef.current.y > ligtningBoltsYRef.current + lightningBoltsHRef.current||playerRef.current.y + playerRef.current.h < ligtningBoltsYRef.current||playerRef.current.x > (lightningBoltsXRef.current+lightningBoltsWRef.current) || playerRef.current.x + playerRef.current.w < (lightningBoltsXRef.current)){
      return
    } else {
      console.log("hit")
      rotationFunction()
      imageRef.current = ouchArray[rotationRef.current]
    }

    console.log('This is the player')
    console.log('This is the x')
    console.log(playerRef.current.x)
    console.log('This is the y')
    console.log(playerRef.current.y)
    // // console.log(playerRef.current.w)
    // // console.log(playerRef.current.h)


    // console.log('This is the Enemy')

    // console.log(enemyYRef.current+enemyHRef.current)
    // // console.log(enemyXRef)
    // // console.log(enemyYRef)
    // // console.log(enemyWRef)
    // console.log(enemyHRef)
    // console.log(colorRef)
}




  

const KeyUp = (e) => {
  if(e.key === "l"){
    rotationFunction()
    imageRef.current =rotationArray[rotationRef.current]
    bossImgRef.current = "https://i.imgur.com/3PjKfOy.png"
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

export default LevelTwoPlayerCanvas;
