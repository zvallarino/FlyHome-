import './App.css';
import React, { useState, useRef } from 'react';
import CloudsMoving from './CloudsMoving';
import CloudsStatic from './CloudsStatic';
import SeaCanvas from './SeaCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import CommanderSketchPlane from './CommanderSketchPlane';
import EnemiesALevel2 from './EnemiesALevel2';
import CommanderSketchLevel2 from './CommanderSketchLevel2';
import SpaceToEarth from './SpaceToEarth';
import PlayerCanvas from './PlayerCanvas';
import PlayerCanvasSpaceToEarth from './PlayerCanvasSpaceToEarth';
import PrivateImariLevel2Boss from './PrivateImariLevel2Boss';
import ProfessorGillian from './ProfessorGillian';
import EndOfGameHome from './EndOfGameHome';
import CommanderSketchFinal from './CommanderSketchFinal';
import CommanderSketchPlaneFinal from './CommanderSketchPlaneFinal';






function FlyHomeLevel2() {

  const [endOfCutScene,setterCutScene] = useState(true)
  const cutSceneRef = useRef(true)

  const [startFirstWave, setFirstWave] = useState(false)
  const firstWaveRef = useRef(false)

  const [levelTwoPreFixStopper, setLevelTwoPrefixStopper] = useState(true)
  const pleaseLevel2StopRef = useRef(true)


  return (
    <>
    {/* <PlayerCanvasSpaceToEarth setLevelTwoPrefixStopper = {setLevelTwoPrefixStopper} levelTwoPreFixStopper = {levelTwoPreFixStopper} pleaseLevel2StopRef = {pleaseLevel2StopRef}/>
    <SpaceToEarth setLevelTwoPrefixStopper = {setLevelTwoPrefixStopper} levelTwoPreFixStopper = {levelTwoPreFixStopper} pleaseLevel2StopRef = {pleaseLevel2StopRef}/> */}
    <EnemiesALevel2 startFirstWave = {startFirstWave}  firstWaveRef = {firstWaveRef}/>
    {/* <CommanderSketchLevel2 endOfCutScene = {endOfCutScene} cutSceneRef = {cutSceneRef}  />
    <CommanderSketchPlane setFirstWave = {setFirstWave} firstWaveRef = {firstWaveRef} endOfCutScene = {endOfCutScene} cutSceneRef = {cutSceneRef} setterCutScene = {setterCutScene}/> */}

    {/* <PrivateImariLevel2Boss />
    <ProfessorGillian /> */}

    <CommanderSketchFinal />
    <CommanderSketchPlaneFinal />

    <EndOfGameHome />
    
    <CloudsMoving />
    <CloudsStatic />
    <SeaCanvas />
    <BackgroundCanvas />
    </>
  );
}

export default FlyHomeLevel2;