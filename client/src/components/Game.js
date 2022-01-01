import React, { useRef, useState } from 'react';

import './App.css';
import PlayerTitleCanvas from './PlayerTitleCanvas';
import PlayerCanvas from './PlayerCanvas';
import RectangleOfDoom1Canvas from './RectangleOfDoom1Canvas';
import Testing from './Testing';

import CloudsStatic from './CloudsStatic';

import PlayerCanvasBoss from './PlayerCanvasBoss';
import LightningBolts from './LightningBolts';
import BossCanvas from './BossCanvas';
import EnemiesALevel2 from './EnemiesALevel2';


import PlayerCanvasLvL2PreBoss from './PlayerCanvasLvL2PreBoss';

import EnemyPlane1Canvas from './EnemyPlane1Canvas';
import EnemyPlane2Canvas from './EnemyPlane2Canvas';
import EnemyPlane3Canvas from './EnemyPlane3Canvas';

import EnemiesSeed1Canvas from './EnemiesSeed1Canvas';
import EnemiesSeed2Canvas from './EnemiesSeed2Canvas';
import EnemiesSeed3Canvas from './EnemiesSeed3Canvas';

import EnemiesBall1Canvas from './EnemiesBall1Canvas';
import EnemiesBall2Canvas from './EnemiesBall2Canvas';
import EnemiesBall3Canvas from './EnemiesBall3Canvas';


import BackgroundPreludeCanvas from './BackgroundPreludeCanvas';
import SpaceCanvas from './SpaceCanvas';
import SeaCanvas from './SeaCanvas';
import CloudsMoving from './CloudsMoving';

import BackgroundCanvas from './BackgroundCanvas';
import RectangleOfDoom2Canvas from './RectangleOfDoom2Canvas';
import TextTitle from './TextTitle';

import CommanderSketch from './CommanderSketch';


function Game() {

  const rectOfDoomRef = useRef({})
  const rectOfDoom2Ref = useRef({})

  const [doomOfRectState,setdoomOfRectState] = useState(false)

  const [speed, setSpeed] = useState(750)

  const [textState,setText] = useState(false)
  const textRef = useRef(false)

  const [levelOneState,setLevelOneState] = useState(false)
  const levelOneRef = useRef(false)

  const [prefixStopper, setPrefixStopper] = useState(true)
  const pleaseStopRef = useRef(true)

  const [startOfDoom, setStartofDoom] = useState(false)
  const doomStartRef = useRef(false)


  return (
    <>

    {/* <Testing /> */}

    {/* level 2 */}
    {/* <EnemiesALevel2 />
    <CloudsMoving />
    <CloudsStatic />
    <SeaCanvas />
    <BackgroundCanvas /> */}

    {/* level One */}
    <PlayerCanvas levelOneState = {levelOneState} levelOneRef = {levelOneRef} rectOfDoomRef = {rectOfDoomRef} rectOfDoom2Ref ={rectOfDoom2Ref}/> 
    <CommanderSketch doomStartRef = {doomStartRef} setStartofDoom = {setStartofDoom} levelOneState = {levelOneState} levelOneRef = {levelOneRef} levelOneRef = {levelOneRef} />
    {doomOfRectState? <RectangleOfDoom2Canvas rectOfDoom2Ref = {rectOfDoom2Ref}/>:<RectangleOfDoom1Canvas doomStartRef = {doomStartRef} startOfDoom = {startOfDoom} setdoomOfRectState ={setdoomOfRectState} rectOfDoomRef = {rectOfDoomRef} />}
    <SpaceCanvas levelOneState = {levelOneState} levelOneRef = {levelOneRef} levelOneRef ={levelOneRef}/>

    {/* Prelude */}
    <TextTitle textRef ={textRef} textState={textState} />
    <PlayerTitleCanvas setLevelOneState = {setLevelOneState} levelOneRef = {levelOneRef} pleaseStopRef = {pleaseStopRef} prefixStopper = {prefixStopper} setPrefixStopper ={setPrefixStopper} levelOneState = {levelOneState} textRef = {textRef} setText ={setText} />
    <BackgroundPreludeCanvas pleaseStopRef = {pleaseStopRef} prefixStopper = {prefixStopper} setPrefixStopper ={setPrefixStopper} />
    </>
  );
}

export default Game;
