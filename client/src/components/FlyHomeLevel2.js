import './App.css';
import React, { useState, useRef } from 'react';
import CloudsMoving from './CloudsMoving';
import CloudsStatic from './CloudsStatic';
import SeaCanvas from './SeaCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import CommanderSketchPlane from './CommanderSketchPlane';
import EnemiesALevel2 from './EnemiesALevel2';
import CommanderSketchLevel2 from './CommanderSketchLevel2';



function FlyHomeLevel2() {

  const [endOfCutScene,setterCutScene] = useState(true)
  const cutSceneRef = useRef(true)

  const [startFirstWave, setFirstWave] = useState(false)
  const firstWaveRef = useRef(false)
  return (
    <>
    <EnemiesALevel2 startFirstWave = {startFirstWave}  firstWaveRef = {firstWaveRef}/>
    {/* <CommanderSketchLevel2 endOfCutScene = {endOfCutScene} cutSceneRef = {cutSceneRef}  />
    <CommanderSketchPlane setFirstWave = {setFirstWave} firstWaveRef = {firstWaveRef} endOfCutScene = {endOfCutScene} cutSceneRef = {cutSceneRef} setterCutScene = {setterCutScene}/> */}
    {/* <CloudsMoving /> */}
    <CloudsStatic />
    <SeaCanvas />
    <BackgroundCanvas />
    </>
  );
}

export default FlyHomeLevel2;