import React, { useEffect, useRef, useState } from 'react';

import './App.css';


import PlayerCanvasLvL2PreBoss from './PlayerCanvasLvL2PreBoss';


import EnemiesSeedsReturn from './EnemiesSeedsReturn';

import EnemiesBallsReturn from './EnemiesBallsReturn';
import EnemiesPlanesReturn from './EnemyPlanesReturn';
import RandomizerOfEnemies from './RandomizerOfEnemies';



function Level2() {

  

  const enemyPlane1Ref = useRef({});
  const enemyPlane2Ref = useRef({});
  const enemyPlane3Ref = useRef({});
  
  const enemySeed1Ref = useRef({});
  const enemySeed2Ref = useRef({});
  const enemySeed3Ref = useRef({});

  const enemyBall1Ref = useRef({});
  const enemyBall2Ref = useRef({});
  const enemyBall3Ref = useRef({});

  const [balls,setBalls] = useState(false)
  const [seeds,setSeeds] = useState(false)
  const [planes,setPlanes] = useState(false)
  const [RandomizerOfEnemies,setRandomizerOfEnemies] = useState(false)
  const [resetterOfEnemies, setReset] = useState(false)

  const ballsSetter = () =>{
    setBalls(true)
  }

  const seedsSetter = () =>{
    setBalls(false)
    setSeeds(true)
  }

  const planesSetter = () =>{
    setBalls(false)
    setSeeds(false)
    setPlanes(true)
  }


  const setterOfEnemies = () =>{
    setBalls(false)
    setSeeds(false)
    setPlanes(false)

  }


  const timingOfLevel2 = () => {
    // setTimeout(ballsSetter, 5000);
    setTimeout(seedsSetter, 5000);
    // setTimeout(planesSetter, 25000);
    // setTimeout(setterOfEnemies, 30000);
    setTimeout(() => {console.log("the end")},40000);
  }

useEffect(()=>{
  timingOfLevel2()
},[])
  

const ifAttempt = () =>{
  if(balls){
    return  <>
    <EnemiesBallsReturn 
    enemyBall1Ref = {enemyBall1Ref}
    enemyBall2Ref = {enemyBall2Ref}
    enemyBall3Ref = {enemyBall3Ref} />
    </>
  } else if (seeds){
    return <>
     <EnemiesSeedsReturn 
    enemySeed1Ref = {enemySeed1Ref}
    enemySeed2Ref = {enemySeed2Ref}
    enemySeed3Ref = {enemySeed3Ref}/> 
    </>
  } else if (planes){
    return<>
    <EnemiesPlanesReturn
    enemyPlane1Ref = {enemyPlane1Ref}
    enemyPlane2Ref = {enemyPlane2Ref}
    enemyPlane3Ref = {enemyPlane3Ref}
    />
    </>
  }
}





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

    {ifAttempt()}
    
    {/* {seeds? <EnemiesSeedsReturn enemySeed1Ref = {enemySeed1Ref} enemySeed2Ref = {enemySeed2Ref}enemySeed3Ref = {enemySeed3Ref} />:null}
    {planes? <EnemiesPlanesReturn enemyPlane1Ref = {enemyPlane1Ref} enemyPlane2Ref = {enemyPlane2Ref}enemyPlane3Ref = {enemyPlane3Ref} />:null} */}
    {/* <EnemiesSeedsReturn 
      enemySeed1Ref = {enemySeed1Ref}
      enemySeed2Ref = {enemySeed2Ref}
      enemySeed3Ref = {enemySeed3Ref}
    /> 

    <EnemiesBallsReturn 
    enemyBall1Ref = {enemyBall1Ref}
    enemyBall2Ref = {enemyBall2Ref}
    enemyBall3Ref = {enemyBall3Ref}
    />


    <EnemiesPlanesReturn 
    enemyPlane1Ref = {enemyPlane1Ref}
    enemyPlane2Ref = {enemyPlane2Ref}
    enemyPlane3Ref = {enemyPlane3Ref}
    /> */}
    
    {/* <EnemyPlane1Canvas enemyPlane1Ref = {enemyPlane1Ref}/>
    <EnemyPlane2Canvas enemyPlane2Ref = {enemyPlane2Ref}/>
    <EnemyPlane3Canvas enemyPlane3Ref = {enemyPlane3Ref}/> */}
    </>
  );
}

export default Level2;
