import React, { useRef,useEffect } from 'react';
import './App.css';

function LightningBolts({ lightningBoltsRef, lightning, lightningStartRef }) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

 lightningBoltsRef.current.x = -1
 lightningBoltsRef.current.y = -1
 lightningBoltsRef.current.w = 0
 lightningBoltsRef.current.h = 0
  



  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style['z-index'] = 21;
    
    
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


const outerLoop = () => {
  for (i; i < boltsOfDoom.length;){
    // console.log(boltsOfDoom)
    drawLightning(boltsOfDoom[randomNumber][loopCounter])
    loopCounter++;
    i++;
  
    if(loopCounter === 2)
    {
      lightningBoltsRef.current.x = boltsOfDoom[randomNumber][loopCounter-1].x
      lightningBoltsRef.current.y = boltsOfDoom[randomNumber][loopCounter-1].y
      lightningBoltsRef.current.w = boltsOfDoom[randomNumber][loopCounter-1].w
      lightningBoltsRef.current.h = boltsOfDoom[randomNumber][loopCounter-1].h
    loopCounter = 0
    randomNumber = getRandomInt(7)
    }
    if(i === 4){
      i = 0
    }
    break;
    }
}

if(lightningStartRef.current){
let myInterval = setInterval(outerLoop, 750)  
const clearingOfInterval = () => {
  clearInterval(myInterval)
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
}
setTimeout(clearingOfInterval,10000)}else{
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
  return
}


const update = () => {
 requestAnimationFrame(update)
}


  update()
  },[lightning])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Constructor for Rectangles

  class Bolts {
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

    // Bolts from Left to right

    //Note the minus 35 and 55 are so the second bolt strikes in the exact middle of the first(not from the same x)

      // const BoltsOne = [boltOneS, boltOneL]

      const boltOneS = new Bolts(SCREEN_WIDTH/16,0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltOneL = new Bolts((SCREEN_WIDTH/16)-40,0,SCREEN_WIDTH*(1/20),SCREEN_HEIGHT,"#FBFF00")

      const boltOne = [boltOneS, boltOneL]

      const boltTwoS = new Bolts(SCREEN_WIDTH/5,0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltTwoL = new Bolts((SCREEN_WIDTH/5)-55,0,SCREEN_WIDTH*(1/15),SCREEN_HEIGHT,"#FBFF00")

      const boltTwo = [boltTwoS, boltTwoL]

      const boltThreeS = new Bolts(SCREEN_WIDTH/3,0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltThreeL = new Bolts((SCREEN_WIDTH/3)-40,0,SCREEN_WIDTH*(1/20),SCREEN_HEIGHT,"#FBFF00")

      const boltThree = [boltThreeS, boltThreeL]

      const boltFourS = new Bolts(SCREEN_WIDTH/2,0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltFourL = new Bolts((SCREEN_WIDTH/2)-55,0,SCREEN_WIDTH*(1/15),SCREEN_HEIGHT,"#FBFF00")

      const boltFour = [boltFourS, boltFourL]

      const boltFiveS = new Bolts(SCREEN_WIDTH*(2/3),0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltFiveL = new Bolts((SCREEN_WIDTH*(2/3))-40,0,SCREEN_WIDTH*(1/20),SCREEN_HEIGHT,"#FBFF00")

      const boltFive = [boltFiveS, boltFiveL]

      const boltSixS = new Bolts(SCREEN_WIDTH*(4/5),0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltSixL = new Bolts((SCREEN_WIDTH*(4/5))-55,0,SCREEN_WIDTH*(1/15),SCREEN_HEIGHT,"#FBFF00")

      const boltSix = [boltSixS, boltSixL]

      const boltSevenS = new Bolts(SCREEN_WIDTH*(15/16),0,SCREEN_WIDTH*(1/160),SCREEN_HEIGHT,"#FDFF8C")
      const boltSevenL = new Bolts((SCREEN_WIDTH*(15/16))-40,0,SCREEN_WIDTH*(1/20),SCREEN_HEIGHT,"#FBFF00")

      const boltSeven = [boltSevenS, boltSevenL]

    const boltsOfDoom = [boltOne, boltTwo, boltThree, boltFour, boltFive, boltSix, boltSeven]

  // Drawing function for Rectangles of Doom

  
const drawLightning = (bolt) => {

  contextRef.current.beginPath();
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
  contextRef.current.rect(bolt.x, bolt.y, bolt.w,bolt.h);
  contextRef.current.fillStyle = bolt.color
  contextRef.current.fill();
}


  
// let arrayOfDoom = [rectangleOne,rectangleTwo,rectangleThree, rectangleFour, rectangleFive, rectangleSix, rectangleSeven , rectangleEight, rectangleNine, rectangleTen, rectangleEleven, rectangleTwelve ]

// function for Interval


// Randomizer for Rectangles

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  return (
    <canvas
  
    // onKeyDown ={movementFunction}
    ref = {canvasRef}
    />
  );
}

export default LightningBolts;
