import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemiesCanvas() {


  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const colorRef = useRef('grey')

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2; 
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
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


  const drawEnemyPlane = (enemyPlane) => {

    let plane = new Image();
    plane.src = enemyPlane.img
    plane.onload = function() {
    // contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);  
    contextRef.current.drawImage(plane,enemyPlane.x,enemyPlane.y,enemyPlane.w,enemyPlane.h);  
    contextRef.current.strokeRect(enemyPlane.x, enemyPlane.y, enemyPlane.w,enemyPlane.h);
  }
}

    
  const update = () => {
    drawEnemyPlane(planeOne)
    drawEnemyPlane(planeTwo)
    drawEnemyPlane(planeThree)
    requestAnimationFrame(update)
  }


  update()
  },[])

//   //SCREEN HEIGHT/WIDTH

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

//   //MOVEMENT FUNCTIONS


// // Boundaries //

// const boundariesLeft = (objectZ) => {
//   if(objectZ.x < -300){
//     objectZ.x = 1900
//   }
// }

// const boundariesRight = (objectZ) => {
//   if(objectZ.x > 1900){
//     objectZ.x = -300
//   } 
// }

// const boundariesUp = (objectZ) => {
//   if(objectZ.y < 0){
//     objectZ.y = 0
//   }}
  
// const boundariesDown = (objectZ) => {
//   if(objectZ.y > 835){
//     objectZ.y = 835
//   }}  

//   const boundariesUpBall = (objectZ) => {
//     if(objectZ.y < 0){
//       objectZ.y = 835
//     }}


// // Randomizer for Rectangles

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// Enemy Constructor

class EnemyCreator {
  constructor(img, x, y, width, height, dx, dy) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.dx = dx;
    this.dy = dy;

  }
}

const planeOne = new EnemyCreator('https://i.imgur.com/qZaFU1N.png',SCREEN_WIDTH*(1/8),200, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)
const planeTwo = new EnemyCreator('https://i.imgur.com/qZaFU1N.png',  SCREEN_WIDTH*(4/10), 200, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)
const planeThree = new EnemyCreator('https://i.imgur.com/qZaFU1N.png', SCREEN_WIDTH*(8/10),200, SCREEN_WIDTH*(1/8),SCREEN_HEIGHT/24,0,0)

// console.log(planeOne)


// // const circleC = {
// //   x:700,
// //   y:400,
// //   size:100,
// //   dx:4,
// //   dy:0,
// //   color: colorRef.current
// // }

// // const circleE = {
// //   x:900,
// //   y:400,
// //   size:10,
// //   dx:0,
// //   dy:0,
// //   color: "red"
// // }

// // const circleF = {
// //   x:900,
// //   y:500,
// //   size:10,
// //   dx:0,
// //   dy:0,
// //   color: "green"
// // }

// //HIT MARKERS


// function drawCircle(circleObject){
// contextRef.current.beginPath();
// contextRef.current.arc(circleObject.x,circleObject.y,circleObject.size, 0, Math.PI * 2);
// contextRef.current.fillStyle = colorRef.current
// contextRef.current.fill();
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

// const KeyUp = (e) => {
//   if(e.key === "l"){
//     imageRef.current = "https://i.imgur.com/iNJmBDq.png"
//     colorRef.current = "grey"
//   } else if(e.key === " "){
//     imageRef.current = "https://i.imgur.com/iNJmBDq.png"
//     console.log("stop boosting")
//   } else if (e.key === "k"){
//     console.log("stop super blasting")
//   } else {
//     secondsCounter(1)
//     colorRef.current = "grey"
//   }
// }



  return (
    <canvas
    tabIndex="0" 
    // onKeyUp = {KeyUp}
    ref = {canvasRef}
    />
  );
}

export default EnemiesCanvas;
