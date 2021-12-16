import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function EnemiesCanvas() {

//   const canvasRef = useRef(null)
//   const contextRef = useRef(null)
//   const enemyXRef = useRef(1)
//   const enemyYRef = useRef(1)
//   const colorRef = useRef('grey')
//   const [speed,setSpeed] = useState(5)
//   const imageRef = useRef("https://i.imgur.com/iNJmBDq.png")
//   const [counter,secondsCounter] =useState(0)

//   useEffect(()=>{

//     const canvas = canvasRef.current;
//     canvas.width = window.innerWidth * 2; 
//     canvas.height = window.innerHeight * 2;
//     canvas.style.width = `${window.innerWidth}px`;
//     canvas.style.height = `${window.innerHeight}px`;
//     canvas.style.position = "absolute";
//     canvas.style.left = 0;
//     canvas.style.top = 0;
//     canvas.style['z-index'] = 1;
    
    
//     const context = canvas.getContext("2d");
//     context.scale(2,2);
//     context.lineCap = "round"
//     context.stokeStyle = "black"
//     context.lineWidth = 5
//     contextRef.current = context;

//     //Player Initial Position and Movement Speed
  
//     const tryTwo = () => {
//       let arrayZ = ["drawRectRight","drawRectRightRight","drawRectUpUp"]
//       let i = 0;
//       setInterval(function(){
//         for (i; i < arrayZ.length;){
//                console.log(arrayZ[i]);
//                 i++;
//                 if(i===arrayZ.length){
//                   i=0
//                 }
//                 break;
//                   }
//                      }, 3000)
//     };

//     tryTwo()

//     // let ObjectX = {}
//     // ObjectX.A = drawRectRight();
//     // ObjectX.B = drawRectUp();
//     // console.log(ObjectX)

//     // let arrayZ = ["dog","fish","bird"]
//     // let i = 0;
//     // setInterval(function(){
//     //   for (i; i < arrayZ.length;){
//     //           console.log(arrayZ[i]);
//     //           i++;
//     //           break;
//     //             }
//     //                }, 3000)
                  
  
//   const update = () => {
//     drawRectRight()
//     requestAnimationFrame(update)
//   }


//   update()
//   },[])


//   //

  



//   //SCREEN HEIGHT/WIDTH

//   const SCREEN_WIDTH = window.innerWidth;
//   const SCREEN_HEIGHT = window.innerHeight;

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


//   const boundariesDownBall = (objectZ) => {
//     if(objectZ.y > 835){
//       objectZ.y = 0
  
//     }}


// // Randomizer for Rectangles

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// //Rectangle Drawings

// const rectangleOne  = {
//   x:20,
//   y:20,
//   size:20, 
// }







// const drawRectRight = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(0, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT);
//   contextRef.current.fillStyle = "green"
//   contextRef.current.fill();
// }


// const drawRectRightRight = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(0, 0, SCREEN_WIDTH*(3/4), SCREEN_HEIGHT);
//   contextRef.current.fillStyle = "blue"
//   contextRef.current.fill();
// }

// const drawRectLeft = () => {
//   contextRef.current.beginPath();
//   contextRef.current.lineWidth = "4";
//   contextRef.current.rect(SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT);
//   contextRef.current.fillStyle = "blue"
//   contextRef.current.fill();
// }

// const drawRectLeftLeft = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(SCREEN_WIDTH/4, 0, SCREEN_WIDTH*(3/4), SCREEN_HEIGHT);
//   contextRef.current.fillStyle = "blue"
//   contextRef.current.fill();
// }

// const drawRectUp = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(0, SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT);
//   contextRef.current.fillStyle = "pink"
//   contextRef.current.fill();
// }

// const drawRectUpUp = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(0, SCREEN_HEIGHT/4, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4));
//   contextRef.current.fillStyle = "purple"
//   contextRef.current.fill();
// }

// const drawRectDown = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT/2);
//   contextRef.current.fillStyle = "pink"
//   contextRef.current.fill();
// }

// const drawRectDownDown = () => {
//   contextRef.current.beginPath();
//   contextRef.current.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4));
//   contextRef.current.fillStyle = "purple"
//   contextRef.current.fill();
// }

// //Draw Enemies

// const circleC = {
//   x:900,
//   y:450,
//   size:100,
//   dx:0,
//   dy:2,
//   color: colorRef.current
// }

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
    // ref = {canvasRef}
    />
  );
}

export default EnemiesCanvas;
