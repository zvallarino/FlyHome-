import React, { useRef, useState } from 'react';

import './App.css';
import PlayerCanvas from './PlayerCanvas';
import RectangleCanvas from './RectangleCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import EnemiesCanvas from './EnemiesCanvas';
import LevelTwoPlayerCanvas from './LevelTwoPlayerCanvas';
import LightningBolts from './LightningBolts';
import BossCanvas from './BossCanvas';

function Game() {

  
  const enemyXRef = useRef(1);
  const enemyYRef = useRef(1);
  const enemyWRef = useRef(1);
  const enemyHRef = useRef(1);
  const colorRef = useRef('#08FF00')


  const bossXRef = useRef(-1);
  const bossYRef = useRef(-1);
  const bossWRef = useRef(0);
  const bossHRef = useRef(0);
  const bossImgRef = useRef("https://i.imgur.com/3PjKfOy.png")
  const bossHitCounter = useRef(0)

  const lightningBoltsXRef = useRef(-1)
  const ligtningBoltsYRef = useRef(-1)
  const lightningBoltsWRef = useRef(0)
  const lightningBoltsHRef = useRef(0);


  // const enemyXRefPlane = useRef(1);
  // const enemyYRefPlane = useRef(1);
  // const enemyWRefPlane = useRef(1);
  // const enemyHRefPlane = useRef(1);
  // const enemyImageRefPlane = useRef('https://i.imgur.com/qZaFU1N.png')





  return (
    <>

    {/* Boss Fight */}

    <LevelTwoPlayerCanvas bossHitCounter = {bossHitCounter} bossImgRef ={bossImgRef} bossXRef = {bossXRef} bossHRef = {bossHRef} bossYRef ={bossYRef} bossWRef ={bossWRef}
    lightningBoltsXRef = {lightningBoltsXRef} ligtningBoltsYRef = {ligtningBoltsYRef} lightningBoltsWRef = {lightningBoltsWRef} lightningBoltsHRef = {lightningBoltsHRef}
    />
    <LightningBolts lightningBoltsXRef = {lightningBoltsXRef} ligtningBoltsYRef ={ligtningBoltsYRef} lightningBoltsWRef = {lightningBoltsWRef} lightningBoltsHRef ={lightningBoltsHRef}/>
    <BossCanvas bossImgRef = {bossImgRef} bossXRef = {bossXRef} bossHRef = {bossHRef} bossYRef ={bossYRef} bossWRef ={bossWRef} />
    <BackgroundCanvas /> 
    {/* level 2 */}
    {/* <LevelTwoPlayerCanvas setSpeed = {setSpeed} speed ={speed} enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef = {enemyHRef} colorRef = {colorRef} />
    <EnemiesCanvas />
    <BackgroundCanvas /> */}

    {/* level One */}
    {/* <PlayerCanvas setSpeed = {setSpeed} speed ={speed} enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef = {enemyHRef} colorRef = {colorRef}/> */}
     {/* <RectangleCanvas enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef={enemyHRef} colorRef = {colorRef}  speed = {speed} /> */}
    </>
  );
}

export default Game;
