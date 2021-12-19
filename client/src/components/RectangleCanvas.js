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

//
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



let i = 0;
let loopCounter = 0;
let randomNumber = 0;


const outerLoop = () => {
    for (i; i < arrayOfDoom.length;){
      drawRectOfDoom(arrayOfDoom[randomNumber][loopCounter])
      loopCounter++;
      i++;
    
      if(loopCounter === 2){
        
        console.log("does it work in order")
        // enemyXRef = arrayS[randomNumber][loopCounter].x
        // enemyYRef = arrayS[randomNumber][loopCounter].y
        // enemyWRef = arrayS[randomNumber][loopCounter].w
        // enemyHRef = arrayS[randomNumber][loopCounter].h
        // colorRef = arrayS[randomNumber][loopCounter].color

      }else if (loopCounter === 3)
      {

        loopCounter = 0
        randomNumber = getRandomInt(12)
        // contextRef.current.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT)
        
      }
      if(i === 12){
        i = 0
      }
      break;
      }
}

setInterval(outerLoop, speed);  



const update = () => {


enemyXRef.current = rectangleEightM.x
enemyYRef.current = rectangleEightM.y
enemyWRef.current = rectangleEightM.w
enemyHRef.current = rectangleEightM.h

//



// 1 W, 2 W
//Top Left

// 3 W, 4 W
// Top Right

//5 W, 6 W
// Bottom Left


// drawRectOfDoom(rectangleTenL)

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

    //top left to right

      const rectangleOneS = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/4,"#B3F5B3")
      const rectangleOneM = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(2/5),SCREEN_HEIGHT,"#7CA57C")
      const rectangleOneL = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(3/5),SCREEN_HEIGHT,"#3B503B")

      const rectangleOne = [rectangleOneS, rectangleOneM, rectangleOneL]

      //top left to right

      const rectangleTwoS = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(1/5),SCREEN_HEIGHT/2,"#256AF8")
      const rectangleTwoM = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(5/8),SCREEN_HEIGHT,"#193E8A")
      const rectangleTwoL = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(7/8),SCREEN_HEIGHT,"#0F2552")

      const rectangleTwo = [rectangleTwoS,rectangleTwoM,rectangleTwoL]
      
       //yellow

        //top right to left


      const rectangleThreeS = new RectanglesOfDoom(SCREEN_WIDTH*(3/4),0,SCREEN_WIDTH*(1/4),SCREEN_HEIGHT/4,"#yellow")
      const rectangleThreeM = new RectanglesOfDoom(SCREEN_WIDTH/2,0,SCREEN_WIDTH/2,SCREEN_HEIGHT,"#B5BA49")
      const rectangleThreeL = new RectanglesOfDoom(SCREEN_WIDTH/4,0,SCREEN_WIDTH*(3/4),SCREEN_HEIGHT,"#71752B")

      const rectangleThree = [rectangleThreeS,rectangleThreeM,rectangleThreeL]

      //red

      //top right to left

      const rectangleFourS = new RectanglesOfDoom(SCREEN_WIDTH*(3/4),0, SCREEN_WIDTH*(1/4),SCREEN_HEIGHT/2,"red")
      const rectangleFourM = new RectanglesOfDoom(SCREEN_WIDTH/2,0, SCREEN_WIDTH*(5/8),SCREEN_HEIGHT,"#992D46")
      const rectangleFourL = new RectanglesOfDoom(SCREEN_WIDTH/10,0, SCREEN_WIDTH*(9/10),SCREEN_HEIGHT,"#5F1A2A")

      const rectangleFour = [rectangleFourS,rectangleFourM,rectangleFourL]

      //pink

      //Bottom left to right

                            
      const rectangleFiveS = new RectanglesOfDoom(0, SCREEN_HEIGHT*(3/4), SCREEN_WIDTH/4,SCREEN_HEIGHT*(1/4),"pink")
      const rectangleFiveM = new RectanglesOfDoom(0, 0, SCREEN_WIDTH/2,SCREEN_HEIGHT,"#945292")
      const rectangleFiveL = new RectanglesOfDoom(0,0, SCREEN_WIDTH*(3/4),SCREEN_HEIGHT,"#523051")

      const rectangleFive = [rectangleFiveS, rectangleFiveM, rectangleFiveL]

      //Purple

      //Bottom left to right

      const rectangleSixS = new RectanglesOfDoom(0, SCREEN_HEIGHT*(3/4), SCREEN_WIDTH/3, SCREEN_HEIGHT*(1/4),"purple")
      const rectangleSixM = new RectanglesOfDoom(0, 0, SCREEN_WIDTH/2,SCREEN_HEIGHT,"#9C89A9")
      const rectangleSixL = new RectanglesOfDoom(0,0, SCREEN_WIDTH*(11/12), SCREEN_HEIGHT,"#766482")

      const rectangleSix = [rectangleSixS, rectangleSixM, rectangleSixL]

      //orange

      //bottom right to left
      
      const rectangleSevenS = new RectanglesOfDoom(SCREEN_WIDTH*(3/4), SCREEN_HEIGHT*(3/4), SCREEN_WIDTH/4,  SCREEN_HEIGHT/4,"orange")
      const rectangleSevenM = new RectanglesOfDoom(SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2,  SCREEN_HEIGHT,"#C78B34")
      const rectangleSevenL = new RectanglesOfDoom(SCREEN_WIDTH/4, 0, SCREEN_WIDTH*(3/4),  SCREEN_HEIGHT,"#875C1F")

      const rectangleSeven = [rectangleSevenS,rectangleSevenM, rectangleSevenL]

      //grey

      //bottom right to left

      const rectangleEightS = new RectanglesOfDoom(SCREEN_WIDTH*(2/3), SCREEN_HEIGHT*(3/4), SCREEN_WIDTH/3,  SCREEN_HEIGHT/4,"#D3D3D3")
      const rectangleEightM = new RectanglesOfDoom(SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2,  SCREEN_HEIGHT,"#A09F9F")
      const rectangleEightL = new RectanglesOfDoom(SCREEN_WIDTH/12, 0, SCREEN_WIDTH*(11/12),  SCREEN_HEIGHT,"#565656")

      const rectangleEight = [rectangleEightS,rectangleEightM, rectangleEightL]


      //Top to Bottom

      const rectangleNineS = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT/8,"#FF0000")
      const rectangleNineM = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT/2,"#A40000")
      const rectangleNineL = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(3/4),"#660101")

      const rectangleNine = [rectangleNineS,rectangleNineM, rectangleNineL]

      const rectangleTenS = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT/4,"#D3D3D3")
      const rectangleTenM = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(2/3),"#74029C")
      const rectangleTenL = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(7/8),"#310042")

      const rectangleTen = [rectangleTenS,rectangleTenM, rectangleTenL]


      //Bottom to Top

      const rectangleElevenS = new RectanglesOfDoom(0, SCREEN_HEIGHT*(7/8), SCREEN_WIDTH, SCREEN_HEIGHT/8,"#87FBC1")
      const rectangleElevenM = new RectanglesOfDoom(0, SCREEN_HEIGHT/2, SCREEN_WIDTH,  SCREEN_HEIGHT/2,"#2DFF96")
      const rectangleElevenL = new RectanglesOfDoom(0, SCREEN_HEIGHT*(1/4), SCREEN_WIDTH,  SCREEN_HEIGHT*(3/4),"#00FF80")

      const rectangleEleven = [rectangleElevenS,rectangleElevenM, rectangleElevenL]

      const rectangleTwelveS = new RectanglesOfDoom(0, SCREEN_HEIGHT*(3/4), SCREEN_WIDTH, SCREEN_HEIGHT/4,"#FFE07E")
      const rectangleTwelveM = new RectanglesOfDoom(0, SCREEN_HEIGHT/2, SCREEN_WIDTH,  SCREEN_HEIGHT/2,"#FFD85C")
      const rectangleTwelveL = new RectanglesOfDoom(0, SCREEN_HEIGHT*(1/8), SCREEN_WIDTH,  SCREEN_HEIGHT*(7/8),"#FFCD2C")

      const rectangleTwelve = [rectangleTwelveS,rectangleTwelveM, rectangleTwelveL]


      const rectangleMiddle = new RectanglesOfDoom(SCREEN_WIDTH/4,  SCREEN_HEIGHT/4 , SCREEN_WIDTH/2,  SCREEN_HEIGHT/2,colorRef.current)


  // Drawing function for Rectangles of Doom

  
const drawRectOfDoom = (rectangleOfDoom) => {
  contextRef.current.beginPath();
  contextRef.current.rect(rectangleOfDoom.x, rectangleOfDoom.y, rectangleOfDoom.w,rectangleOfDoom.h);
  contextRef.current.fillStyle = rectangleOfDoom.color
  // console.log(rectangleOfDoom.color)
  contextRef.current.fill();
}
  
let arrayOfDoom = [rectangleOne,rectangleTwo,rectangleThree, rectangleFour, rectangleFive, rectangleSix, rectangleSeven , rectangleEight, rectangleNine, rectangleTen, rectangleEleven, rectangleTwelve ]

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
// HIT for Circles

// const hit = () => {
//   if(playerRef.current.y + playerRef.current.h < enemyYRef.current - circleC.size || playerRef.current.y > enemyYRef.current + circleC.size || playerRef.current.x > enemyXRef.current + circleC.size || playerRef.current.x + playerRef.current.w < enemyXRef.current - circleC.size){
//     console.log("miss")
//   } else {
//     console.log('hit')
//     colorRef.current = "red"
//   }
// }

// Hit for Rectangles






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
