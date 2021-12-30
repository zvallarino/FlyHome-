import React, { useEffect, useRef, useState } from 'react';

import './App.css';


import PlayerCanvasLvL2PreBoss from './PlayerCanvasLvL2PreBoss';


import EnemiesSeedsReturn from './EnemiesSeedsReturn';

import EnemiesBallsReturn from './EnemiesBallsReturn';
import EnemiesPlanesReturn from './EnemyPlanesReturn';
import RandomizerOfEnemies from './RandomizerOfEnemies';

import EnemiesSeed1Canvas from './EnemiesSeed1Canvas';
import EnemiesSeed2Canvas from './EnemiesSeed2Canvas';
import EnemiesSeed3Canvas from './EnemiesSeed3Canvas';

import EnemiesBall1Canvas from './EnemiesBall1Canvas';



function Level2() {

  

  const enemyPlane1Ref = useRef({});
  const enemyPlane2Ref = useRef({});
  const enemyPlane3Ref = useRef({});
  
  const enemySeed1Ref = useRef({});
  const enemySeed2Ref = useRef({});
  const enemySeed3Ref = useRef({});

  const enemySeed1ExplosionRef = useRef({}) 
  const enemySeed2ExplosionRef = useRef({}) 
  const enemySeed3ExplosionRef = useRef({}) 

  const enemyBall1Ref = useRef({});
  const enemyBall2Ref = useRef({});
  const enemyBall3Ref = useRef({});

  const [balls,setBalls] = useState(false)
  const [seeds,setSeeds] = useState(false)
  const [planes,setPlanes] = useState(false)
  const [RandomizerOfEnemies,setRandomizerOfEnemies] = useState(false)
  const [resetterOfEnemies, setReset] = useState(false)
  const ballOneStartRef = useRef(true)

  const ballsSetter = () =>{
    setBalls(foxs=>!foxs)
  }

  const seedsSetter = () =>{
    ballOneStartRef.current = false
  setSeeds(true)
  setBalls(foxs=>!foxs)
  }

  const planesSetter = () =>{
    ballOneStartRef.current = true
    setPlanes(true)
    setBalls(foxs=>!foxs)
    console.log('this fired')
  }


  const setterOfEnemies = () =>{
    ballOneStartRef.current = false
    setBalls(foxs=>!foxs)
  console.log(ballOneStartRef.current)
  }

  const oneMore = () =>{
    ballOneStartRef.current = true
    setBalls(foxs=>!foxs)
  }

  const canIChangeThis = () =>{
    ballOneStartRef.current = false
    setBalls(foxs=>!foxs)
  }

  const TwoMore = () =>{
    ballOneStartRef.current = true
    setBalls(foxs=>!foxs)
  }

  const canIChangeThis2 = () =>{
    ballOneStartRef.current = false
    setBalls(foxs=>!foxs)
  }

  const threeMore = () =>{
    ballOneStartRef.current = true
    setBalls(foxs=>!foxs)
  }

  const canIChangeThis3 = () =>{
    ballOneStartRef.current = false
    setBalls(foxs=>!foxs)
    console.log("no faith but lets go")
  }





  const timingOfLevel2 = () => {
    setTimeout(ballsSetter, 5000);
    setTimeout(seedsSetter, 7000);
    setTimeout(planesSetter, 10000);
    setTimeout(setterOfEnemies, 13000);
    setTimeout(oneMore,16000)
    setTimeout(canIChangeThis2,19000)
    setTimeout(threeMore,21000)
    setTimeout(canIChangeThis3,24000)
    setTimeout(() => {console.log("the end")},40000);
  }

useEffect(()=>{
  timingOfLevel2()
},[])






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

    enemySeed1ExplosionRef = {enemySeed1ExplosionRef}
    enemySeed2ExplosionRef = {enemySeed2ExplosionRef} 
    enemySeed3ExplosionRef = {enemySeed3ExplosionRef}

    enemySeed1Ref = {enemySeed1Ref}
    enemySeed2Ref = {enemySeed2Ref}
    enemySeed3Ref = {enemySeed3Ref}

    />
    <EnemiesBall1Canvas balls = {balls} ballOneStartRef = {ballOneStartRef} enemyBall1Ref = {enemyBall1Ref}/>
    {/* {seeds? <EnemiesSeed1Canvas enemySeed1Ref = {enemySeed1Ref} enemySeed1ExplosionRef = {enemySeed1ExplosionRef} />:null} */}
   
    {/* <EnemiesSeed1Canvas  enemySeed1Ref = {enemySeed1Ref} enemySeed1ExplosionRef = {enemySeed1ExplosionRef}/>
    <EnemiesSeed2Canvas  enemySeed2Ref = {enemySeed2Ref} enemySeed2ExplosionRef = {enemySeed2ExplosionRef} />
    <EnemiesSeed3Canvas  enemySeed3Ref = {enemySeed3Ref} enemySeed3ExplosionRef = {enemySeed3ExplosionRef}/> */}

    </>
  );
}

export default Level2;
