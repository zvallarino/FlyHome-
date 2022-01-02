import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import EnemiesBall1Canvas from './EnemiesBall1Canvas';
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';


function EnemiesBallsReturn ({enemyBall1Ref, enemyBall2Ref, enemyBall3Ref, balls}) {


    console.log("This fired")

   
    function getRandomInt(max) {
         return Math.floor(Math.random() * max);
    }

    let randomNumber = getRandomInt(3);
   
  if(balls === null){
    return
  }

  
  return (
    <>
    {/* level 2 */}
    {/* {ballsStack(randomNumber)} */}
    {balls?<EnemiesBall1Canvas  enemyBall1Ref = {enemyBall1Ref} balls = {balls}/>:null}
    </>
    );
}

export default EnemiesBallsReturn;