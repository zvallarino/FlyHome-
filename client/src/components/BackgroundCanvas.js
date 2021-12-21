import React, { useRef,useEffect } from 'react';
import './App.css';

function BackgroundCanvas() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


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

const update = () => {
  drawRectOfDoom(rectangleSea)
  drawRectOfDoom(rectangleSky)

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

      const rectangleSea = new RectanglesOfDoom(0,SCREEN_HEIGHT*(3/4),SCREEN_WIDTH,SCREEN_HEIGHT/4,"#0032FF")
      const rectangleSky = new RectanglesOfDoom(0,0,SCREEN_WIDTH,SCREEN_HEIGHT*(3/4),"#8CFCFF")
    
  // Drawing function for Rectangles of Doom

  
const drawRectOfDoom = (rectangleOfDoom) => {
  contextRef.current.beginPath();
  contextRef.current.rect(rectangleOfDoom.x, rectangleOfDoom.y, rectangleOfDoom.w,rectangleOfDoom.h);
  contextRef.current.fillStyle = rectangleOfDoom.color
  contextRef.current.fill();
}




  return (
    <canvas
    tabIndex="0" 

    ref = {canvasRef}
    />
  );
}

export default BackgroundCanvas;