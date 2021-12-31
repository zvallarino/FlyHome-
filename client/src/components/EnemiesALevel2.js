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
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';

import EnemyPlane1Canvas from './EnemyPlane1Canvas';
import EnemyPlane2Canvas from './EnemyPlane2Canvas';
import EnemyPlane3Canvas from './EnemyPlane3Canvas';




function EnemiesALevel2() {

  

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


  const [seeds,setSeeds] = useState(false)
  const [planes,setPlanes] = useState(false)
  const [RandomizerOfEnemies,setRandomizerOfEnemies] = useState(false)
  const [resetterOfEnemies, setReset] = useState(false)

  const [balls1,setBalls1] = useState(false)
  const [ball2,setBall2] = useState(false)
  const [ball3,setBall3] = useState(false)

  const ballOneStartRef = useRef(false)
  const ballTwoStartRef = useRef(false)
  const ballThreeStartRef = useRef(true)

  const [seed1,setSeed1] = useState(false)
  const [seed2,setSeed2] = useState(false)
  const [seed3,setSeed3] = useState(false)

  const seed1StartRef = useRef(false)
  const seed2StartRef = useRef(false)
  const seed3StartRef = useRef(false)

  const [plane1,setPlane1] = useState(false)
  const [plane2,setPlane2] = useState(false)
  const [plane3,setPlane3] = useState(false)

  const plane1StartRef = useRef(false)
  const plane2StartRef = useRef(false)
  const plane3StartRef = useRef(false)

  const ballsSetter = () =>{
  }

  const seedsSetter = () =>{
    seed1StartRef.current = true
    seed2StartRef.current = true
    seed3StartRef.current = true
    setSeed1(foxs=>!foxs)
    setSeed2(foxs=>!foxs)
    setSeed3(foxs=>!foxs)
  }

  const planesSetter = () =>{
    plane1StartRef.current = true
    plane2StartRef.current = true
    plane3StartRef.current = true

    setPlane1(whales=>!whales)
    setPlane2(whales=>!whales)
    setPlane3(whales=>!whales)
  }


  const setterOfEnemies = () =>{
    seed1StartRef.current = false
    seed2StartRef.current = false
    seed3StartRef.current = false
    setSeed1(foxs=>!foxs)
    setSeed2(foxs=>!foxs)
    setSeed3(foxs=>!foxs)
  }

  const oneMore = () =>{
    plane1StartRef.current = false
    plane2StartRef.current = false
    plane3StartRef.current = false

    setPlane1(whales=>!whales)
    setPlane2(whales=>!whales)
    setPlane3(whales=>!whales)
  }

  const canIChangeThis2 = () =>{
    
    setSeed1(foxs=>!foxs)
    setSeed2(foxs=>!foxs)
 
  }

  const threeMore = () =>{

    setBalls1(foxs=>!foxs)
  }

  const canIChangeThis3 = () =>{

    setSeed1(foxs=>!foxs)
    setSeed2(foxs=>!foxs)
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
    {/* <EnemiesBall1Canvas balls1 = {balls1} ballOneStartRef = {ballOneStartRef} enemyBall1Ref = {enemyBall1Ref}/>
    <EnemiesBall2Canvas ball2 = {ball2} ballTwoStartRef = {ballTwoStartRef} enemyBall2Ref = {enemyBall2Ref}/>
    <EnemiesBall3Canvas ball3 = {ball3} ballThreeStartRef = {ballThreeStartRef} enemyBall3Ref = {enemyBall3Ref}/> */}
   
    {/* <EnemiesSeed1Canvas seed1 = {seed1} seed1StartRef = {seed1StartRef} enemySeed1Ref = {enemySeed1Ref} enemySeed1ExplosionRef = {enemySeed1ExplosionRef}/>
    <EnemiesSeed2Canvas seed2 = {seed2} seed2StartRef = {seed2StartRef} enemySeed2Ref = {enemySeed2Ref} enemySeed2ExplosionRef = {enemySeed2ExplosionRef} />
    <EnemiesSeed3Canvas seed3 = {seed3} seed3StartRef = {seed3StartRef} enemySeed3Ref = {enemySeed3Ref} enemySeed3ExplosionRef = {enemySeed3ExplosionRef}/> */}
    
    {/* <EnemyPlane1Canvas plane1 = {plane1} plane1StartRef = {plane1StartRef} enemyPlane1Ref ={enemyPlane1Ref}/>
    <EnemyPlane2Canvas plane2 = {plane2} plane2StartRef = {plane2StartRef} enemyPlane2Ref={enemyPlane2Ref}/>
    <EnemyPlane3Canvas plane3 = {plane3} plane3StartRef = {plane3StartRef} enemyPlane3Ref={enemyPlane3Ref}/> */}


    </>
  );
}

export default EnemiesALevel2;
