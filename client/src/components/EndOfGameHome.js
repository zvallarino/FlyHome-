import React, { useRef,useEffect } from 'react';
import './App.css';

function EndOfGameHome({}) {

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
    canvas.style['z-index'] = 18;
    
    
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round"
    context.stokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;





const planetSmall = {
    w:SCREEN_WIDTH*(2/20),
    h:SCREEN_HEIGHT*(2/20),
  x:SCREEN_WIDTH*(8.5/20),
  y:SCREEN_HEIGHT*(10.5/20),
}

const planetMedium = {
  w:SCREEN_WIDTH*(3/20),
  h:SCREEN_HEIGHT*(3/20),
  x:SCREEN_WIDTH*(8/20),
  y:SCREEN_HEIGHT*(9.9/20),
}

const planetSuperSmall = {
    w:SCREEN_WIDTH*(1/20),
    h:SCREEN_HEIGHT*(1/20),
  x:SCREEN_WIDTH*(9/20),
  y:SCREEN_HEIGHT*(11.1/20),
}


const drawplanet = (planetObject) => {
let planet = new Image();
planet.src = "https://i.imgur.com/FiTjsoi.png"
planet.onload = function() {
contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
contextRef.current.drawImage(planet,planetObject.x,planetObject.y,planetObject.w,planetObject.h);  
// contextRef.current.strokeRect(playerRef.current.x, playerRef.current.y, playerRef.current.w, playerRef.current.h);
}
console.log('this just fired')
}



const drawPlanetSmall = () =>{
  //  drawplanet(planetObject)
  drawplanet(planetSmall)
}

const drawPlanetMedium = () =>{
  drawplanet(planetMedium)
   console.log("I fire now")
}

const drawPlanetSuperSmall = () =>{
  drawplanet(planetSuperSmall)
   console.log("I fire now")
}


function myStopFunction() {
    drawPlanetSuperSmall()
    // drawPlanetSmall()
    // drawPlanetMedium()
  
}

setTimeout(drawPlanetSuperSmall,3000)
setTimeout(drawPlanetSmall,6000)
setTimeout(drawPlanetMedium,9000)



myStopFunction()


const update = () => {
  requestAnimationFrame(update)
}


  update()
  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Constructor for Rectangles

  
  return (
    <canvas
    // onKeyDown ={movementFunction}
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default EndOfGameHome;
