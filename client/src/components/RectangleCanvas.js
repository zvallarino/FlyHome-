import React, { useRef,useEffect,useState } from 'react';
import './App.css';

function RectangleCanvas() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const enemyXRef = useRef(1)
  const enemyYRef = useRef(1)
  const colorRef = useRef('grey')
  const [speed,setSpeed] = useState(5)
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



  const update = () => {

    // circleMove(circleA);
    // drawCircle(circleB);
    // circleMove(circleB);
    // drawCircle(circleC);
    // circleMove(circleC);
    requestAnimationFrame(update)
  }


  
  

  update()
  },[])




  
//     // let arrayZ = ["dog","fish","bird"]
//     // let i = 0;
//     // setInterval(function(){
//     //   for (i; i < arrayZ.length;){
//     //           console.log(arrayZ[i]);
//     //           i++;
//     //           break;
//     //             }
//     //                }, 3000)
                  
  

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

  const rectangleOne = new RectanglesOfDoom(0,0,SCREEN_WIDTH/2,SCREEN_HEIGHT,"green")
  const rectangleTwo = new RectanglesOfDoom(0,0,SCREEN_WIDTH*(3/4),SCREEN_HEIGHT,"blue")
  const rectangleThree = new RectanglesOfDoom(SCREEN_WIDTH/2,0,SCREEN_WIDTH/2,SCREEN_HEIGHT,"yellow")
  const rectangleFour = new RectanglesOfDoom(SCREEN_WIDTH/4,0, SCREEN_WIDTH*(3/4),SCREEN_HEIGHT,"red")
  const rectangleFive = new RectanglesOfDoom(0, SCREEN_HEIGHT/2, SCREEN_WIDTH,SCREEN_HEIGHT,"pink")
  const rectangleSix = new RectanglesOfDoom(0, SCREEN_HEIGHT/4, SCREEN_WIDTH, SCREEN_HEIGHT*(3/4),"purple")
  const rectangleSeven = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT/2,"orange")
  const rectangleEight = new RectanglesOfDoom(0, 0, SCREEN_WIDTH,  SCREEN_HEIGHT*(3/4),"grey")

  // Drawing function for Rectangles of Doom

  
const drawRectOfDoom = (rectangleOfDoom) => {
  contextRef.current.beginPath();
  contextRef.current.rect(rectangleOfDoom.x, rectangleOfDoom.y, rectangleOfDoom.w,rectangleOfDoom.h);
  contextRef.current.fillStyle = rectangleOfDoom.color
  contextRef.current.fill();
}

// Interval For Rectangles of Doom

// Interval For Small Rectangles

let innerArrayOne = ["red","fish","blue"]

let innerArrayTwo = ["green","fish","you"]

let innerArrayThree = ["gold","fish","foo"]
  
let arrayS = [innerArrayOne,innerArrayTwo,innerArrayThree]

// const doubleLoop = (arrayOfDoom) => {

    
//     for(let i = 0; i < arrayOfDoom.length; i++){
//       console.log("----")
//       console.log(arrayOfDoom[i])
//       console.log("----")
//       for(let j = 0; j < arrayOfDoom[i].length;j++)
//       console.log(arrayOfDoom[i][j])
//     }
// }



function loop(count, callback, done) {
  var counter = 0;
  
  var next = function () {setTimeout(iteration, 1000);};
  
  var iteration = function () {
      if (counter < count) { callback(counter, next);
      } else { done && done();}
      counter++; }
  iteration();
}

loop(1000, function (i, next) {next();})


loop(9, function (i, nextI) {loop(3, function (j, nextJ) {console.log(i+1 + '-' + j);nextJ();}, nextI);});

// setInterval(doubleLoop(arrayS),1000)


// setInterval(function(){
//   for (i; i < arrayS.length;){
//           console.log(arrayS[i]);
//           i++;
//           if(i === 8){
//             i = 0
//           }
//           break;
//             }
//               }, 3000)
              



// let i = 0;

// var a=0;
// setInterval(function() {if(a==0){one();a++;}}, 2500);

// setInterval(function() {two();a=0;}, 5000);

// function one() {
// console.log('1');
// }

// function two() {
//  console.log('2');
//  }
              

// Interval For Medium Rectanlges





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

// const hit = () => {
//   if(playerRef.current.y + playerRef.current.h < enemyYRef.current - circleC.size || playerRef.current.y > enemyYRef.current + circleC.size || playerRef.current.x > enemyXRef.current + circleC.size || playerRef.current.x + playerRef.current.w < enemyXRef.current - circleC.size){
//     console.log("miss")
//   } else {
//     console.log('hit')
//     colorRef.current = "red"
//   }
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
