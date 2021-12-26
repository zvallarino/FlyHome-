import React, { useRef,useEffect } from 'react';
import './App.css';

function Testing() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.backgroundColor = "#FCFFAA";
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

    let img = new Image();
    let heightImage = 500;
    let widthImage = 2000;
    const scale = .25;
    let scaledHeight = heightImage * scale;
    let scaledWidth = widthImage * scale; 
    img.src = 'https://i.imgur.com/dAvqr1d.png';
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

      const cycleLoop = [0, 1, 2];
      let currentLoopIndex = 0;
      let frameCount = 0;
      
      function step() {
        frameCount++;
        if (frameCount < 10) {
          window.requestAnimationFrame(step);
          return;
        }
        frameCount = 0;
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(cycleLoop[currentLoopIndex], currentLoopIndex, 0, 0);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
          currentLoopIndex = 0;
        }
        window.requestAnimationFrame(step);
      }

      function init() {
        window.requestAnimationFrame(step);
      }

    
      // function init() {
      //   contextRef.current.drawImage(img, 0, 0, WidthImage, HeightImage, 0, 200, scaledWidth, scaledHeight);
      //   contextRef.current.drawImage(img, 0, HeightImage, WidthImage, HeightImage, scaledWidth, 200, scaledWidth, scaledHeight);
      //   contextRef.current.drawImage(img, 0, HeightImage*2, WidthImage, HeightImage, scaledWidth * 2, 200, scaledWidth, scaledHeight);
      // }


  },[])


  //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Constructor for Rectangles



  return (
    <canvas
    tabIndex="0" 

    ref = {canvasRef}
    />
  );
}

export default Testing;