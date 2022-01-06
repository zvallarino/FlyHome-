import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import PlayerCanvasLvL2Static from './PlayerCanvasLvl2Static';
import PlayerCanvasLvL2Gif from './PlayerCanvasLvL2Gif';


import EnemiesSeedsReturn from './EnemiesSeedsReturn';
import FlyHomeTheEnd from './FlyHomeTheEnd';

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

import ProfessorGillian from './ProfessorGillian';
import PrivateImariLevel2Boss from './PrivateImariLevel2Boss';

import LightningBolts from './LightningBolts';
import BossCanvas from './BossCanvas';

import CommanderSketchPlaneFinal from './CommanderSketchPlaneFinal';
import CommanderSketchFinal from './CommanderSketchFinal';
import EndOfGameHome from './EndOfGameHome';
import PlanesFlyHome from './PlanesFlyHome';






function EnemiesALevel2({firstWaveRef, startFirstWave, setplayerAppear, playerAppearRef, playerAppear}) {


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

  const lightningBoltsRef = useRef({});
  const bossRef = useRef({})



  //Ref and States for Reappearing and Disappearing. The ref is for 

  const [ball1,setBall1] = useState(false)
  const [ball2,setBall2] = useState(false)
  const [ball3,setBall3] = useState(false)

  const ball1StartRef = useRef(false)
  const ball2StartRef = useRef(false)
  const ball3StartRef = useRef(false)

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

  const [lightning,setLightning] =useState(false)

  const lightningStartRef = useRef(false)

  const [bossSet,setBoss] = useState(false)
  const bossStartRef = useRef(false)

  // cutscene starter 

  const [cutSceneStart, setCutSceneStart] = useState(false)
  const cutSceneRef = useRef(false)

  // Boss Counters

  const bossEndSceneRef = useRef(false)
  const [bossEndState, setBossEnd] = useState(false)

  // Commander Sketch Final 

  const [commanderSketchFinal,setCommanderSketchFinal] = useState(false);
  const commanderSketchRef = useRef(false)

  //Commander Sketch Plane Final

  const [commanderPlane, setCommanderPlaneFinal] = useState(false)
  const commanderPlaneFinalRef = useRef(false)

  //PlanesFlyAway 

  const [planesFlyAway, setPlanesFlyAway] = useState(false)
  const planesFlyAwayRef = useRef(false)

  const ballsSetter = () =>{
    ball1StartRef.current = true
    ball2StartRef.current = true
    ball3StartRef.current = true
    setBall1(foxs=>!foxs)
    setBall2(foxs=>!foxs)
    setBall3(foxs=>!foxs)
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

    console.log("did you fire")
  }


  const ballsStopper = () =>{
    ball1StartRef.current = false
    ball2StartRef.current = false
    ball3StartRef.current = false
    setBall1(foxs=>!foxs)
    setBall2(foxs=>!foxs)
    setBall3(foxs=>!foxs)

  }

  const seedsStopper = () =>{
    seed1StartRef.current = false
    seed2StartRef.current = false
    seed3StartRef.current = false
    setSeed1(foxs=>!foxs)
    setSeed2(foxs=>!foxs)
    setSeed3(foxs=>!foxs)
  }

  const planesStopper = () =>{
    plane1StartRef.current = false
    plane2StartRef.current = false
    plane3StartRef.current = false

    setPlane1(whales=>!whales)
    setPlane2(whales=>!whales)
    setPlane3(whales=>!whales)
  }

  const lightningSetter = () =>{
    lightningStartRef.current = true
    setLightning(hats=>!hats)
    console.log("yo I fired")
  }
  
  const lightningStopper = () =>{
    lightningStartRef.current = false
    setLightning(hats=>!hats)
  }

  const bossSetter = ()=>{
    bossStartRef.current = true
    console.log('this fired')
    setBoss(dogs=>!dogs)
  }

  const bossStopper = ()=>{
    bossStartRef.current = false
    commanderSketchRef.current = true
    commanderPlaneFinalRef.current = true
    setCommanderPlaneFinal(pigs=>!pigs)
    setCommanderSketchFinal(dragons=>!dragons)

    console.log('this fired')
    setBoss(dogs=>!dogs)
  }

  const cutSceneSetter = () =>{
    cutSceneRef.current = true
    setCutSceneStart(true)
    
  }

  const timingOfLevel2 = () => {
    setTimeout(planesSetter,3000);
    setTimeout(planesStopper,9000);

    setTimeout(seedsSetter, 9000);
    setTimeout(seedsStopper, 15000);

    setTimeout(ballsSetter, 15000);
    setTimeout(ballsStopper,20000);

    // setTimeout(bossSetter, 2000);
    // setTimeout(bossStopper, 2000);

    setTimeout(cutSceneSetter,22000);

    // setTimeout(lightningSetter,25000);
    // setTimeout(lightningStopper,30000);

    setTimeout(() => {console.log("the end")},40000);
  }

useEffect(()=>{
  if(firstWaveRef.current)
  {timingOfLevel2()}
  else{
    return
  }
},[startFirstWave])

bossRef.current.counter = 0;






  return (
    <>
    {/* level 2 */}

    <PlayerCanvasLvL2Static

    bossRef = {bossRef}
    bossStopper = {bossStopper}
    lightningStopper = {lightningStopper}

    lightningBoltsRef={lightningBoltsRef}
  
    setplayerAppear = {setplayerAppear}
    playerAppearRef ={playerAppearRef}
    playerAppear = {playerAppear}

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
{/*     
    <PlayerCanvasLvL2Gif
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

    /> */}

    <LightningBolts lightning = {lightning} lightningBoltsRef = {lightningBoltsRef} lightningStartRef ={lightningStartRef} />
    <BossCanvas bossSet = {bossSet} bossRef = {bossRef} bossStartRef = {bossStartRef} />

    
    <EnemiesBall1Canvas ball1 = {ball1} ball1StartRef = {ball1StartRef} enemyBall1Ref = {enemyBall1Ref}/>
    <EnemiesBall2Canvas ball2 = {ball2} ball2StartRef = {ball2StartRef} enemyBall2Ref = {enemyBall2Ref}/>
    <EnemiesBall3Canvas ball3 = {ball3} ball3StartRef = {ball3StartRef} enemyBall3Ref = {enemyBall3Ref}/>
   
    <EnemiesSeed1Canvas seed1 = {seed1} seed1StartRef = {seed1StartRef} enemySeed1Ref = {enemySeed1Ref} enemySeed1ExplosionRef = {enemySeed1ExplosionRef}/>
    <EnemiesSeed2Canvas seed2 = {seed2} seed2StartRef = {seed2StartRef} enemySeed2Ref = {enemySeed2Ref} enemySeed2ExplosionRef = {enemySeed2ExplosionRef} />
    <EnemiesSeed3Canvas seed3 = {seed3} seed3StartRef = {seed3StartRef} enemySeed3Ref = {enemySeed3Ref} enemySeed3ExplosionRef = {enemySeed3ExplosionRef}/> 
    
    <EnemyPlane1Canvas plane1 = {plane1} plane1StartRef = {plane1StartRef} enemyPlane1Ref ={enemyPlane1Ref}/>
    <EnemyPlane2Canvas plane2 = {plane2} plane2StartRef = {plane2StartRef} enemyPlane2Ref={enemyPlane2Ref}/>
    <EnemyPlane3Canvas plane3 = {plane3} plane3StartRef = {plane3StartRef} enemyPlane3Ref={enemyPlane3Ref}/>

    <PrivateImariLevel2Boss
    bossSetter = {bossSetter} 
    lightningSetter = {lightningSetter}
    cutSceneRef = {cutSceneRef}
    cutSceneStart ={cutSceneStart} />
    <ProfessorGillian cutSceneRef = {cutSceneRef} cutSceneStart ={cutSceneStart} />

    <CommanderSketchFinal 
    commanderSketchRef = {commanderSketchRef}
    commanderSketchFinal = {commanderSketchFinal}

    
    commanderPlaneFinalRef = {commanderPlaneFinalRef}
    commanderPlane = {commanderPlane}
    setCommanderPlaneFinal = {setCommanderPlaneFinal}


    playerAppearRef ={playerAppearRef}
    setplayerAppear = {setplayerAppear}
    
    planesFlyAway = {planesFlyAway}
    setPlanesFlyAway = {setPlanesFlyAway}
    planesFlyAwayRef = {planesFlyAwayRef}
    
    setBossEnd = {setBossEnd}
    bossEndSceneRef = {bossEndSceneRef}
    bossEndState = {bossEndState} />



    <CommanderSketchPlaneFinal 
    commanderSketchRef = {commanderSketchRef}
    commanderSketchFinal = {commanderSketchFinal}

    commanderPlaneFinalRef = {commanderPlaneFinalRef}
    commanderPlane = {commanderPlane}



    bossEndState = {bossEndState} />

    <FlyHomeTheEnd
        planesFlyAwayRef = {planesFlyAwayRef}
        planesFlyAway = {planesFlyAway}
    />

    <EndOfGameHome
    bossEndState = {bossEndState}
    bossEndSceneRef = {bossEndSceneRef} />
    <PlanesFlyHome 
    planesFlyAwayRef = {planesFlyAwayRef}
    planesFlyAway = {planesFlyAway} />


    



    </>
  );
}

export default EnemiesALevel2;
