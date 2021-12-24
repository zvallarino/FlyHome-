import React, { useRef, useState } from 'react';

import './App.css';
import PlayerCanvas from './PlayerCanvas';
import RectangleCanvas from './RectangleCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import EnemiesCanvas from './EnemiesCanvas';
import LevelTwoPlayerCanvas from './LevelTwoPlayerCanvas';
import LightningBolts from './LightningBolts';
import BossCanvas from './BossCanvas';
import SpaceCanvas from './SpaceCanvas';
import PreBossLvL2PlayerCanvas from './PreBossLvL2PlayerCanvas';
import Testing from './Testing';
import EnemiesBall1Canvas from './EnemiesBall1Canvas';
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';


function Game() {

  
  const enemyXRef = useRef(1);
  const enemyYRef = useRef(1);
  const enemyWRef = useRef(1);
  const enemyHRef = useRef(1);
  const colorRef = useRef('#08FF00')

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


  const enemyPlaneXRef = useRef(-1);
  const enemyPlaneYRef = useRef(-1);
  const enemyPlaneWRef = useRef(0);
  const enemyPlaneHRef = useRef(0);
  const enemyPlaneImageRef = useRef('https://i.imgur.com/qZaFU1N.png')

  
  const enemyBallXRef = useRef(-1);
  const enemyBallYRef = useRef(-1);
  const enemyBallWRef = useRef(0);
  const enemyBallHRef = useRef(0);
  const enemyBallImageRef = useRef("https://i.imgur.com/IGLm67Z.png");

    
  const enemyBall2XRef = useRef(-1);
  const enemyBall2YRef = useRef(-1)
  const enemyBall2WRef = useRef(0)
  const enemyBall2HRef = useRef(0)
  const enemyBall2ImageRef = useRef("https://i.imgur.com/IGLm67Z.png")

  const enemyBall3XRef = useRef(-1);
  const enemyBall3YRef = useRef(-1);
  const enemyBall3WRef = useRef(0);
  const enemyBall3HRef = useRef(0);
  const enemyBall3ImageRef = useRef("https://i.imgur.com/IGLm67Z.png")









  return (
    <>

    {/* <Testing /> */}

    {/* Boss Fight */}
    {/* <LevelTwoPlayerCanvas bossHitCounter = {bossHitCounter} bossImgRef ={bossImgRef} bossXRef = {bossXRef} bossHRef = {bossHRef} bossYRef ={bossYRef} bossWRef ={bossWRef}
    lightningBoltsXRef = {lightningBoltsXRef} ligtningBoltsYRef = {ligtningBoltsYRef} lightningBoltsWRef = {lightningBoltsWRef} lightningBoltsHRef = {lightningBoltsHRef} 
    />
    <LightningBolts lightningBoltsXRef = {lightningBoltsXRef} ligtningBoltsYRef ={ligtningBoltsYRef} lightningBoltsWRef = {lightningBoltsWRef} lightningBoltsHRef ={lightningBoltsHRef}/>
    <BossCanvas bossImgRef = {bossImgRef} bossXRef = {bossXRef} bossHRef = {bossHRef} bossYRef ={bossYRef} bossWRef ={bossWRef} />
    <BackgroundCanvas /> */}

  
    {/* level 2 */}
    <PreBossLvL2PlayerCanvas
    enemyPlaneXRef ={enemyPlaneXRef} enemyPlaneYRef = {enemyPlaneYRef} enemyPlaneWRef={enemyPlaneWRef} enemyPlaneHRef={enemyPlaneHRef} enemyPlaneImageRef ={enemyPlaneImageRef}
    enemyBallXRef ={enemyBallXRef} enemyBallYRef ={enemyBallYRef} enemyBallWRef ={enemyBallWRef} enemyBallHRef ={enemyBallHRef} enemyBallImageRef={enemyBallImageRef}
    />
    <EnemiesBall1Canvas enemyBallXRef = {enemyBallXRef} enemyBallYRef ={enemyBallYRef} enemyBallWRef ={enemyBallWRef} enemyBallHRef ={enemyBallHRef} enemyBallImageRef={enemyBallImageRef}/>
    <EnemiesBall2Canvas enemyBall2ImageRef = {enemyBall2ImageRef} />
    <EnemiesBall3Canvas enemyBall3ImageRef = {enemyBall3ImageRef} />
    <EnemiesCanvas enemyPlaneXRef ={enemyPlaneXRef} enemyPlaneYRef = {enemyPlaneYRef} enemyPlaneWRef={enemyPlaneWRef} enemyPlaneHRef={enemyPlaneHRef} enemyPlaneImageRef ={enemyPlaneImageRef}/>
    <BackgroundCanvas />

    {/* level One */}
    {/* <PlayerCanvas setSpeed = {setSpeed} speed ={speed} enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef = {enemyHRef} colorRef = {colorRef}/> 
    <RectangleCanvas enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef={enemyHRef} colorRef = {colorRef}  speed = {speed} />
    <SpaceCanvas /> */}
    </>
  );
}

export default Game;
