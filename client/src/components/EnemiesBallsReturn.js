import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import EnemiesBall1Canvas from './EnemiesBall1Canvas';
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';


function EnemiesBallsReturn ({enemyBall1Ref, enemyBall2Ref, enemyBall3Ref}) {


    console.log("This fired")

   
    function getRandomInt(max) {
         return Math.floor(Math.random() * max);
    }

    let randomNumber = getRandomInt(3);
   
    
    // const ballsStack = () => {
    //        randomNumber = 0; 
    //     if(randomNumber === 2){
    //     return <>
    // <EnemiesBall1Canvas  enemyBall1Ref = {enemyBall1Ref}/>
    // <EnemiesBall2Canvas enemyBall2Ref = {enemyBall2Ref}/>
    // <EnemiesBall3Canvas enemyBall3Ref = {enemyBall3Ref}/>
    // </>
    // }
    // else if (randomNumber === 1){
    // return <>
    //     <EnemiesBall1Canvas enemyBall1Ref = {enemyBall1Ref}/>
    //     <EnemiesBall2Canvas enemyBall2Ref = {enemyBall2Ref}/>
    //     </>
    // } else {
    //     return <><EnemiesBall1Canvas  enemyBall1Ref = {enemyBall1Ref}/></>
    // }}

  
  return (
    <>
    {/* level 2 */}
    {/* {ballsStack(randomNumber)} */}
    <EnemiesBall1Canvas  enemyBall1Ref = {enemyBall1Ref}/>
    </>
    );
}

export default EnemiesBallsReturn;