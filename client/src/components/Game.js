import React, { useRef, useState } from 'react';

import './App.css';
import PlayerTitleCanvas from './PlayerTitleCanvas';
import PlayerCanvas from './PlayerCanvas';
import RectangleOfDoom1Canvas from './RectangleOfDoom1Canvas';
import Testing from './Testing';


import PlayerCanvasBoss from './PlayerCanvasBoss';
import LightningBolts from './LightningBolts';
import BossCanvas from './BossCanvas';


import PlayerCanvasLvL2PreBoss from './PlayerCanvasLvL2PreBoss';

import EnemyPlane1Canvas from './EnemyPlane1Canvas';
import EnemyPlane2Canvas from './EnemyPlane2Canvas';
import EnemyPlane3Canvas from './EnemyPlane3Canvas';

import EnemiesBall1Canvas from './EnemiesBall1Canvas';
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';


import BackgroundPreludeCanvas from './BackgroundPreludeCanvas';
import SpaceCanvas from './SpaceCanvas';
import SeaCanvas from './SeaCanvas';
import SkyCanvas from './SkyCanvas';

import BackgroundCanvas from './BackgroundCanvas';
import RectangleOfDoom2Canvas from './RectangleOfDoom2Canvas';


function Game() {



  const rectOfDoomRef = useRef({})
  const rectOfDoom2Ref = useRef({})

  const [doomOfRectState,setdoomOfRectState] = useState(false)

  const [speed, setSpeed] = useState(750)



  const bossXRef = useRef(-1);
  const bossYRef = useRef(-1);
  const bossWRef = useRef(0);
  const bossHRef = useRef(0);
  const bossImgRef = useRef("https://i.imgur.com/3PjKfOy.png")
  const bossHitCounter = useRef(0)

  const lightningBoltsXRef = useRef(-1);
  const ligtningBoltsYRef = useRef(-1);
  const lightningBoltsWRef = useRef(0);
  const lightningBoltsHRef = useRef(0);


  

  const enemyPlane1Ref = useRef({})
  const enemyPlane2Ref = useRef({})
  const enemyPlane3Ref = useRef({})                                                                

  const enemyBall1Ref = useRef({})
    
  const enemyBall2Ref = useRef({});

  const enemyBall3Ref = useRef({});
 









  return (
    <>

    {/* <Testing /> */}

    {/* Boss Fight */}
    {/* <PlayerCanvasBoss bossHitCounter = {bossHitCounter} bossImgRef ={bossImgRef} bossXRef = {bossXRef} bossHRef = {bossHRef} bossYRef ={bossYRef} bossWRef ={bossWRef}
    lightningBoltsXRef = {lightningBoltsXRef} ligtningBoltsYRef = {ligtningBoltsYRef} lightningBoltsWRef = {lightningBoltsWRef} lightningBoltsHRef = {lightningBoltsHRef} 
    />
    <LightningBolts lightningBoltsXRef = {lightningBoltsXRef} ligtningBoltsYRef ={ligtningBoltsYRef} lightningBoltsWRef = {lightningBoltsWRef} lightningBoltsHRef ={lightningBoltsHRef}/>
    <BossCanvas bossImgRef = {bossImgRef} bossXRef = {bossXRef} bossHRef = {bossHRef} bossYRef ={bossYRef} bossWRef ={bossWRef} />
    <SkyCanvas />
    <SeaCanvas />
    <BackgroundCanvas /> */}

  
    {/* level 2 */}
    {/* <PlayerCanvasLvL2PreBoss
    enemyPlane1Ref = {enemyPlane1Ref}
    enemyPlane2Ref = {enemyPlane2Ref}
    enemyPlane3Ref = {enemyPlane3Ref}
    
    enemyBall1Ref = {enemyBall1Ref}
    enemyBall2Ref = {enemyBall2Ref}
    enemyBall3Ref = {enemyBall3Ref}
    />
    <EnemiesBall1Canvas enemyBall1Ref = {enemyBall1Ref}/>
    <EnemiesBall2Canvas enemyBall2Ref = {enemyBall2Ref} />
    <EnemiesBall3Canvas enemyBall3Ref = {enemyBall3Ref}/>
    <EnemyPlane1Canvas enemyPlane1Ref = {enemyPlane1Ref}/>
    <EnemyPlane2Canvas enemyPlane2Ref = {enemyPlane2Ref}/>
    <EnemyPlane3Canvas enemyPlane3Ref = {enemyPlane3Ref}/>

    <SkyCanvas />
    <SeaCanvas />
    <BackgroundCanvas /> */}

    {/* level One */}
    {/* <PlayerCanvas rectOfDoomRef = {rectOfDoomRef} rectOfDoom2Ref ={rectOfDoom2Ref}/> 

    {doomOfRectState? <RectangleOfDoom2Canvas rectOfDoom2Ref = {rectOfDoom2Ref}/>:<RectangleOfDoom1Canvas setdoomOfRectState ={setdoomOfRectState} rectOfDoomRef = {rectOfDoomRef} />}
    <SpaceCanvas /> */}

    {/* Prelude */}
    <PlayerTitleCanvas />
    <BackgroundPreludeCanvas />
    </>
  );
}

export default Game;
