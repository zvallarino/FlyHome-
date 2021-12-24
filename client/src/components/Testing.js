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
    img.src = 'https://i.imgur.com/dAvqr1d.png';
    img.onload = function() {
        init();
      };

      const scale = 40;
      function init() {
        contextRef.current.drawImage(img, 0, 0, 2000, 500, 200, 200, 16 * scale, 4 * scale);
      }


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