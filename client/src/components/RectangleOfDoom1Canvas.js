import React, { useRef,useEffect } from 'react';
import './App.css';

function RectangleOfDoom1Canvas({rectOfDoomRef, setdoomOfRectState, doomStartRef, startOfDoom}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
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

    if(doomStartRef.current){

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let i = 0;
let loopCounter = 0;
let randomNumber = 0;

//OuterLoop cant take any parameters or it stops firing idk why

// Checks if on the way up it hits not the other way? 


const outerLoop = () => {

    for (i; i < arrayOfDoom.length;){
      drawRectOfDoom(arrayOfDoom[randomNumber][loopCounter])
      loopCounter++;
      i++;
    
      if(loopCounter === 1){
      
      }else if (loopCounter === 3)
      {
        rectOfDoomRef.current.x = arrayOfDoom[randomNumber][loopCounter-1].x
        rectOfDoomRef.current.y = arrayOfDoom[randomNumber][loopCounter-1].y
        rectOfDoomRef.current.w = arrayOfDoom[randomNumber][loopCounter-1].w
        rectOfDoomRef.current.h = arrayOfDoom[randomNumber][loopCounter-1].h
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

const planetSmall = {
  w:SCREEN_WIDTH/8,
  h:SCREEN_HEIGHT/7,
  x:SCREEN_WIDTH*(.4),
  y:SCREEN_HEIGHT/5,
}

const planetMedium = {
  w:SCREEN_WIDTH/4,
  h:SCREEN_HEIGHT/3,
  x:SCREEN_WIDTH/3,
  y:SCREEN_HEIGHT/5,
}

const planetLarge = {
  w:SCREEN_WIDTH/2,
  h:SCREEN_HEIGHT*(2/3),
  x:SCREEN_WIDTH/5,
  y:SCREEN_HEIGHT/5,
}


const drawplanet = (planetObject) => {
let planet = new Image();
planet.src = "https://i.imgur.com/e65aHji.png"
planet.onload = function() {
contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
contextRef.current.drawImage(planet,planetObject.x,planetObject.y,planetObject.w,planetObject.h);  
// contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
}

}

const myInterval = setInterval(outerLoop, 1500);

const drawPlanetSmall = () =>{
  //  drawplanet(planetObject)
  drawplanet(planetSmall)
}

const drawPlanetMedium = () =>{
  drawplanet(planetMedium)
   console.log("I fire now")
}

const drawPlanetLarge = () =>{
  drawplanet(planetLarge)
   console.log("I fire now")
}

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
  contextRef.current.font = "30px Arial"
  contextRef.current.lineWidth = 1
  contextRef.current.strokeText("Hurry Up, Private!",SCREEN_WIDTH*(15.2/20), SCREEN_HEIGHT*(9.75/20));
}}



const drawRectangle = () => {
  contextRef.current.fillStyle = "white";
  contextRef.current.fillRect(SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
  contextRef.current.strokeStyle = "black";
  contextRef.current.strokeRect(SCREEN_WIDTH*(15/20), SCREEN_HEIGHT*(9/20), SCREEN_WIDTH*(4.3/20), SCREEN_HEIGHT*(1/20));
}

function myStopFunction() {
  clearInterval(myInterval);
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
  drawSketch()
  setTimeout(timeoutAttempt,2000) 
}



const timeoutAttempt = () => {
  setdoomOfRectState(true)
}

if(doomStartRef.current)
{setTimeout(myStopFunction, 20000);}
else{
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height); 
  return
}


// myInterval

// setInterval(outerLoop, speed)  



const update = () => {
 
    requestAnimationFrame(update)
 
}


  update()} else{
    return
  }
  },[startOfDoom])


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


  // Drawing function for Rectangles of Doom

const drawRectOfDoom = (rectangleOfDoom) => {
  contextRef.current.beginPath();
  contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
  contextRef.current.rect(rectangleOfDoom.x, rectangleOfDoom.y, rectangleOfDoom.w,rectangleOfDoom.h);
  contextRef.current.fillStyle = rectangleOfDoom.color
  contextRef.current.fill();
}
  
let arrayOfDoom = [rectangleOne,rectangleTwo,rectangleThree, rectangleFour, rectangleFive, rectangleSix, rectangleSeven , rectangleEight, rectangleNine, rectangleTen, rectangleEleven, rectangleTwelve ]


// Randomizer for Rectangles

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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

export default RectangleOfDoom1Canvas;
