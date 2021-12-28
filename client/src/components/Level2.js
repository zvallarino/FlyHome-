import React, { useEffect, useRef, useState } from 'react';

import './App.css';


import PlayerCanvasLvL2PreBoss from './PlayerCanvasLvL2PreBoss';

import EnemyPlane1Canvas from './EnemyPlane1Canvas';
import EnemyPlane2Canvas from './EnemyPlane2Canvas';
import EnemyPlane3Canvas from './EnemyPlane3Canvas';

import EnemiesBall1Canvas from './EnemiesBall1Canvas';
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';
import EnemiesSeedsReturn from './EnemiesSeedsReturn';



function Level2() {

  

  const enemyPlane1Ref = useRef({});
  const enemyPlane2Ref = useRef({});
  const enemyPlane3Ref = useRef({});
  
  const enemySeed1Ref = useRef({});
  const enemySeed2Ref = useRef({});
  const enemySeed3Ref = useRef({})

  const enemyBall1Ref = useRef({})
  const enemyBall2Ref = useRef({});
  const enemyBall3Ref = useRef({});

//   const timingOfLevel2 = () => {
//     setTimeout(() => {console.log("this is the first message")}, 5000);
//     setTimeout(() => {console.log("this is the second message")}, 3000);
//     setTimeout(() => {console.log("this is the third message")}, 1000);
//   }








  return (
    <>
    {/* level 2 */}
    
    <PlayerCanvasLvL2PreBoss
    enemyPlane1Ref = {enemyPlane1Ref}
    enemyPlane2Ref = {enemyPlane2Ref}
    enemyPlane3Ref = {enemyPlane3Ref}
    
    enemyBall1Ref = {enemyBall1Ref}
    enemyBall2Ref = {enemyBall2Ref}
    enemyBall3Ref = {enemyBall3Ref}

    enemySeed1Ref = {enemySeed1Ref}
    enemySeed2Ref = {enemySeed2Ref}
    enemySeed3Ref = {enemySeed3Ref}
    />


    <EnemiesSeedsReturn 
      enemySeed1Ref = {enemySeed1Ref}
      enemySeed2Ref = {enemySeed2Ref}
      enemySeed3Ref = {enemySeed3Ref}
    /> 


  
    {/* <EnemiesBall1Canvas enemyBall1Ref = {enemyBall1Ref}/>
    <EnemiesBall2Canvas enemyBall2Ref = {enemyBall2Ref} />
    <EnemiesBall3Canvas enemyBall3Ref = {enemyBall3Ref}/>
    
    <EnemyPlane1Canvas enemyPlane1Ref = {enemyPlane1Ref}/>
    <EnemyPlane2Canvas enemyPlane2Ref = {enemyPlane2Ref}/>
    <EnemyPlane3Canvas enemyPlane3Ref = {enemyPlane3Ref}/> */}
    </>
  );
}

export default Level2;
