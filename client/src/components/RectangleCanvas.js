import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function RectangleCanvas({enemyXRef, enemyYRef, enemyWRef, enemyHRef, speed, colorRef}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
 
  const timerRef = useRef()

  const [counter,secondsCounter] =useState(0)

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.backgroundColor = "#E1FFE1";
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 1;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let i = 0;
let loopCounter = 0;
let randomNumber = 0;



// doesnt work at the moment but V close

// const nonduplicatingFunction = () =>{
//   if (randomNumber !== newNumber){
//     randomNumber = newNumber
//   } else if (randomNumber === 4){
//     randomNumber = 3
//   } else if (randomNumber === 0){
//     randomNumber = 1
//   } else {
//     console.log(randomNumber)
//     randomNumber = randomNumber + 1
//   }
// }



const outerLoop = () => {
    for (i; i < arrayS.length;){
      drawRectOfDoom(arrayS[randomNumber][loopCounter])
      loopCounter++;
      i++;
    
      if(loopCounter === 2){
        
        enemyXRef = arrayS[randomNumber][loopCounter].x
        enemyYRef = arrayS[randomNumber][loopCounter].y
        enemyWRef = arrayS[randomNumber][loopCounter].w
        enemyHRef = arrayS[randomNumber][loopCounter].h
        colorRef = arrayS[randomNumber][loopCounter].color

        console.log(enemyXRef)
        console.log(enemyYRef)
        console.log(enemyWRef)
        console.log(enemyHRef)
        console.log(colorRef)

      }else if (loopCounter === 3)
      {
        
        loopCounter = 0
        randomNumber = getRandomInt(8)
        // contextRef.current.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT)
        
      }
      if(i === 8){
        i = 0
      }
      break;
      }
}

setInterval(outerLoop, speed);  

const update = () => {

  // drawRectOfDoom(rectangleThreeS)

  requestAnimationFrame(update)
}


  update()
  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Constructor for Rectangles

  class RectanglesOfDoom {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.w = width;
      this.h = height;
      this.color = color;
    }
  }

  // Rectangles of Doom

    //green

      const rectangleOneS = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(1/5),SCREEN_HEIGHT/2,"#B3F5B3")
      const rectangleOneM = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(2/5),SCREEN_HEIGHT,"#7CA57C")
      const rectangleOneL = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(3/5),SCREEN_HEIGHT,"#3B503B")

      const rectangleOne = [rectangleOneS, rectangleOneM, rectangleOneL]

      //blue

      const rectangleTwoS = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/2,"#256AF8")
      const rectangleTwoM = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(5/8),SCREEN_HEIGHT,"#193E8A")
      const rectangleTwoL = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(7/8),SCREEN_HEIGHT,"#0F2552")

      const rectangleTwo = [rectangleTwoS,rectangleTwoM,rectangleTwoL]
      
       //yellow

      const rectangleThreeS = new RectanglesOfDoom(SCREEN_WIDTH*(3/4),0,SCREEN_WIDTH*(1/4),SCREEN_HEIGHT/2,"#F7FE63")
      const rectangleThreeM = new RectanglesOfDoom(SCREEN_WIDTH/2,0,SCREEN_WIDTH/2,SCREEN_HEIGHT,"#B5BA49")
      const rectangleThreeL = new RectanglesOfDoom(SCREEN_WIDTH/4,0,SCREEN_WIDTH*(3/4),SCREEN_HEIGHT,"#71752B")

      const rectangleThree = [rectangleThreeS,rectangleThreeM,rectangleThreeL]

      //red

      const rectangleFourS = new RectanglesOfDoom(SCREEN_WIDTH*(3/4),0, SCREEN_WIDTH*(1/4),SCREEN_HEIGHT/2,"#E83E65")
      const rectangleFourM = new RectanglesOfDoom(SCREEN_WIDTH/2,0, SCREEN_WIDTH*(5/8),SCREEN_HEIGHT,"#992D46")
      const rectangleFourL = new RectanglesOfDoom(SCREEN_WIDTH/10,0, SCREEN_WIDTH*(9/10),SCREEN_HEIGHT,"#5F1A2A")

      const rectangleFour = [rectangleFourS,rectangleFourM,rectangleFourL]

      //pink

                            
      const rectangleFiveS = new RectanglesOfDoom(0, SCREEN_HEIGHT*(3/4), SCREEN_WIDTH/4,SCREEN_HEIGHT*(1/4),"#E784E4")
      const rectangleFiveM = new RectanglesOfDoom(0, SCREEN_HEIGHT/2, SCREEN_WIDTH,SCREEN_HEIGHT/2,"#945292")
      const rectangleFiveL = new RectanglesOfDoom(0, SCREEN_HEIGHT*(1/4), SCREEN_WIDTH,SCREEN_HEIGHT*(3/4),"#523051")

      const rectangleFive = [rectangleFiveS, rectangleFiveM, rectangleFiveL]

      //Purple

      const rectangleSixS = new RectanglesOfDoom(0, SCREEN_HEIGHT*(3/4), SCREEN_WIDTH, SCREEN_HEIGHT*(1/4),"#DDC4EE")
      const rectangleSixM = new RectanglesOfDoom(0, SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT/2,"#9C89A9")
      const rectangleSixL = new RectanglesOfDoom(0, SCREEN_HEIGHT/9, SCREEN_WIDTH, SCREEN_HEIGHT*(8/9),"#766482")

      const rectangleSix = [rectangleSixS, rectangleSixM, rectangleSixL]

      //orange
      
      const rectangleSevenS = new RectanglesOfDoom(0, 0, SCREEN_WIDTH/4,  SCREEN_HEIGHT*(1/4),"#F3AD49")
      const rectangleSevenM = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(2/4),"#C78B34")
      const rectangleSevenL = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(3/4),"#875C1F")

      const rectangleSeven = [rectangleSevenS,rectangleSevenM, rectangleSevenL]
      //grey
      const rectangleEightS = new RectanglesOfDoom(SCREEN_WIDTH*(3/4), 0, SCREEN_WIDTH/4,  SCREEN_HEIGHT/4,"#D3D3D3")
      const rectangleEightM = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT/2,"#A09F9F")
      const rectangleEightL = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(8.6/10),"#565656")

      const rectangleEight = [rectangleEightS,rectangleEightM, rectangleEightL]


  // Drawing function for Rectangles of Doom

  
const drawRectOfDoom = (rectangleOfDoom) => {
  contextRef.current.beginPath();
  contextRef.current.rect(rectangleOfDoom.x, rectangleOfDoom.y, rectangleOfDoom.w,rectangleOfDoom.h);
  contextRef.current.fillStyle = rectangleOfDoom.color
  contextRef.current.fill();
}

  
let arrayS = [rectangleOne,rectangleTwo,rectangleThree, rectangleFour, rectangleFive, rectangleSix, rectangleSeven , rectangleEight]



// function for Interval


  //MOVEMENT FUNCTIONS


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

//HIT MARKERS

// const hit = () => {
//   if(playerRef.current.y + playerRef.current.h < enemyYRef.current - circleC.size || playerRef.current.y > enemyYRef.current + circleC.size || playerRef.current.x > enemyXRef.current + circleC.size || playerRef.current.x + playerRef.current.w < enemyXRef.current - circleC.size){
//     console.log("miss")
//   } else {
//     console.log('hit')
//     colorRef.current = "red"
//   }
// }




// function circleMove(circleObject){
//   circleObject.x += circleObject.dx
//   circleObject.y += circleObject.dy
//   enemyXRef.current = circleObject.x
//   enemyYRef.current = circleObject.y
//   boundariesLeft(circleObject)
//   boundariesRight(circleObject)
//   boundariesDownBall(circleObject)
// }

const KeyUp = (e) => {
  // if(e.key === "l"){
  //   imageRef.current = "https://i.imgur.com/iNJmBDq.png"
  //   colorRef.current = "grey"
  // } else if(e.key === " "){
  //   imageRef.current = "https://i.imgur.com/iNJmBDq.png"
  //   console.log("stop boosting")
  // } else if (e.key === "k"){
  //   console.log("stop super blasting")
  // } else {
  //   secondsCounter(1)
  //   colorRef.current = "grey"
  // }
}



  return (
    <canvas
    tabIndex="0" 
    // onKeyDown ={movementFunction}
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default RectangleCanvas;
