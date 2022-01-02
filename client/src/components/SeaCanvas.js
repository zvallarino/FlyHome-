import React, { useRef,useEffect } from 'react';
import './App.css';

function SeaCanvas() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.style.backgroundColor = "#E1FFE1";
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


    let img = new Image();
    let heightImage = 502;
    let widthImage = 2000;
    const scale = 1;
    let scaledHeight = heightImage * scale;
    let scaledWidth = widthImage * scale; 
    img.src = 'https://i.imgur.com/TfywBZ6.png';
    img.onload = function() {
        init();
      };

  function drawFrame(frameX, frameY, canvasX, canvasY) {
    contextRef.current.drawImage(img,
      0, frameY * heightImage, widthImage, heightImage
      ,canvasX, canvasY, scaledWidth, scaledHeight);
      }

      function init() {
        drawFrame(0, 0, 0, 0);
        drawFrame(1, 1, scaledWidth, 0);
        drawFrame(0, 2, scaledWidth * 2, 0);
      }

      const cycleLoop = [0, 1, 2,3,4,5];
      let currentLoopIndex = 0;
      let frameCount = 0;
      
      function step() {
        frameCount++;
        if (frameCount < 2) {
          window.requestAnimationFrame(step);
          return;
        }
        frameCount = 0;
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(cycleLoop[currentLoopIndex], currentLoopIndex, 0, 500);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
          currentLoopIndex = 0;
        }
        window.requestAnimationFrame(step);
      }

      function init() {
        window.requestAnimationFrame(step);
      }

// const update = () => {
//   drawRectOfDoom(rectangleSea)
//   drawRectOfDoom(rectangleSky)

//   requestAnimationFrame(update)
// }


  // update()


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


    ref = {canvasRef}
    />
  );
}

export default SeaCanvas;