import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function PlayerCanvas() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const playerRef = useRef(null)
  const enemyXRef = useRef(1)
  const enemyYRef = useRef(1)
  const colorRef = useRef('grey')
  const [speed,setSpeed] = useState(5)
  const imageRef = useRef("https://i.imgur.com/iNJmBDq.png")
  const [counter,secondsCounter] =useState(0)

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.backgroundColor = "#D1FFFD";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 2;
    
    
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
      dx:2,
      dy:2
    }

  playerRef.current = player

  const drawPlane = () => {
    let plane = new Image();
    plane.src = imageRef.current
   
    plane["z-index"] = 10;
    plane.onload = function() {
    contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.drawImage(plane,playerRef.current.x,playerRef.current.y,playerRef.current.w,playerRef.current.h);  
    contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
  }}

  const update = () => {
    drawPlane();
    drawCircle(circleA);
    circleMove(circleA);
    drawCircle(circleB);
    circleMove(circleB);
    drawCircle(circleC);
    circleMove(circleC);
    requestAnimationFrame(update)
  }


  update()
  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //MOVEMENT FUNCTIONS

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

  boundariesRight(playerRef.current)
  secondsCounter(counter => counter +3)
}

const moveDown = () => {
  playerRef.current.y = playerRef.current.y + (playerRef.current.dy * counter)
  console.log(playerRef.current.y)

  boundariesDown(playerRef.current)
  secondsCounter(counter => counter +3)
}

const moveRightUp = () => {
  playerRef.current.y = playerRef.current.y - (playerRef.current.dy * counter)
  playerRef.current.x = playerRef.current.x + (playerRef.current.dx * counter)

  boundariesRight(playerRef.current)
  boundariesUp(playerRef.current)
  secondsCounter(counter => counter +3)
  
}

const moveRightDown = () => {
  playerRef.current.y = playerRef.current.y + (playerRef.current.dy * counter)
  playerRef.current.x = playerRef.current.x + (playerRef.current.dx * counter)

  boundariesRight(playerRef.current)
  boundariesDown(playerRef.current)
  secondsCounter(counter => counter +3)
}

const moveLeftUp = () => {
  playerRef.current.y = playerRef.current.y - (playerRef.current.dy * counter)
  playerRef.current.x =  playerRef.current.x - (playerRef.current.dx * counter)

  boundariesLeft(playerRef.current)
  boundariesUp(playerRef.current)
  secondsCounter(counter => counter +3)
}

const moveLeftDown = () => {
  playerRef.current.y = playerRef.current.y + (playerRef.current.dy * counter)
  playerRef.current.x =  playerRef.current.x - (playerRef.current.dx * counter)
  boundariesDown(playerRef.current)
  boundariesLeft(playerRef.current)
  secondsCounter(counter => counter +3)
}

const movementFunction = (e) => {
  if(e.key === "w"){
    moveUp()
  } else if (e.key ===  "d"){
    moveRight()
  } else if (e.key === "a"){
    moveLeft()
  }else if (e.key === "s"){
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
    imageRef.current = "https://i.imgur.com/9lDQkp9.png"
    hit()
  } else if ( e.key === "k"){
    console.log("superBlater")
  } else if ( e.key === " "){
    imageRef.current = "https://i.imgur.com/Li6ZU6C.png"
    console.log("boosters")
  }
}

// Boundaries //

const boundariesLeft = (objectZ) => {
  if(objectZ.x < -300){
    objectZ.x = 1900
  }
}

const boundariesRight = (objectZ) => {
  if(objectZ.x > 1900){
    objectZ.x = -300
  } 
}

const boundariesUp = (objectZ) => {
  if(objectZ.y < 0){
    objectZ.y = 0
  }}
  
const boundariesDown = (objectZ) => {
  if(objectZ.y > 835){
    objectZ.y = 835
  }}  

  const boundariesUpBall = (objectZ) => {
    if(objectZ.y < 0){
      objectZ.y = 835
    }}


  const boundariesDownBall = (objectZ) => {
    if(objectZ.y > 835){
      objectZ.y = 0
  
    }}


// Randomizer for Rectangles

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Rectangle Drawings

const rectangleOne  = {
  x:20,
  y:20,
  size:20, 
}


const drawRectRight = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT);
  contextRef.current.fillStyle = "green"
  contextRef.current.fill();
}


const drawRectRightRight = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH*(3/4), SCREEN_HEIGHT);
  contextRef.current.fillStyle = "blue"
  contextRef.current.fill();
}

const drawRectLeft = () => {
  contextRef.current.beginPath();
  contextRef.current.lineWidth = "4";
  contextRef.current.rect(SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT);
  contextRef.current.fillStyle = "blue"
  contextRef.current.fill();
}

const drawRectLeftLeft = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(SCREEN_WIDTH/4, 0, SCREEN_WIDTH*(3/4), SCREEN_HEIGHT);
  contextRef.current.fillStyle = "blue"
  contextRef.current.fill();
}

const drawRectUp = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT);
  contextRef.current.fillStyle = "pink"
  contextRef.current.fill();
}

const drawRectUpUp = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, SCREEN_HEIGHT/4, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4));
  contextRef.current.fillStyle = "purple"
  contextRef.current.fill();
}

const drawRectDown = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT/2);
  contextRef.current.fillStyle = "pink"
  contextRef.current.fill();
}

const drawRectDownDown = () => {
  contextRef.current.beginPath();
  contextRef.current.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4));
  contextRef.current.fillStyle = "purple"
  contextRef.current.fill();
}

//Draw Enemies

// const circleC = {
//   x:900,
//   y:450,
//   size:100,
//   dx:0,
//   dy:2,
//   color: colorRef.current
// }

const circleC = {
  x:700,
  y:400,
  size:100,
  dx:4,
  dy:0,
  color: colorRef.current
}

const circleA = {
  x:900,
  y:800,
  size:100,
  dx:5,
  dy:0,
  color: "red"
}

const circleB = {
  x:900,
  y:100,
  size:100,
  dx:0,
  dy:7,
  color: "green"
}

//HIT MARKERS

const hit = () => {
  if(playerRef.current.y + playerRef.current.h < enemyYRef.current - circleC.size || playerRef.current.y > enemyYRef.current + circleC.size || playerRef.current.x > enemyXRef.current + circleC.size || playerRef.current.x + playerRef.current.w < enemyXRef.current - circleC.size){
    console.log("miss")
  } else {
    console.log('hit')
    colorRef.current = "red"
  }
}


function drawCircle(circleObject){
contextRef.current.beginPath();
contextRef.current.arc(circleObject.x,circleObject.y,circleObject.size, 0, Math.PI * 2);
contextRef.current.fillStyle = colorRef.current
contextRef.current.fill();
}


function circleMove(circleObject){
  circleObject.x += circleObject.dx
  circleObject.y += circleObject.dy
  enemyXRef.current = circleObject.x
  enemyYRef.current = circleObject.y
  boundariesLeft(circleObject)
  boundariesRight(circleObject)
  boundariesDownBall(circleObject)
}

const KeyUp = (e) => {
  if(e.key === "l"){
    imageRef.current = "https://i.imgur.com/iNJmBDq.png"
    colorRef.current = "grey"
  } else if(e.key === " "){
    imageRef.current = "https://i.imgur.com/iNJmBDq.png"
    console.log("stop boosting")
  } else if (e.key === "k"){
    console.log("stop super blasting")
  } else {
    secondsCounter(1)
    colorRef.current = "grey"
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

export default PlayerCanvas;
