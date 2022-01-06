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

  const [endOfCutScene,setterCutScene] = useState(false)
  const cutSceneRef = useRef(false)

  const [startFirstWave, setFirstWave] = useState(false)
  const firstWaveRef = useRef(false)

  const [levelTwoPreFixStopper, setLevelTwoPrefixStopper] = useState(true)
  const pleaseLevel2StopRef = useRef(true)

  const [playerAppear,setplayerAppear] = useState(false)
  const playerAppearRef = useRef(false)


  return (
    <>

    <EnemiesALevel2 
      setplayerAppear = {setplayerAppear}
      playerAppearRef ={playerAppearRef}
      playerAppear = {playerAppear}
      startFirstWave = {startFirstWave} 
      firstWaveRef = {firstWaveRef}/>

    <CommanderSketchLevel2
    endOfCutScene = {endOfCutScene}
    cutSceneRef = {cutSceneRef}  />

    <CommanderSketchPlane
      setFirstWave = {setFirstWave}
      firstWaveRef = {firstWaveRef}

      endOfCutScene = {endOfCutScene}
      cutSceneRef = {cutSceneRef}
      setterCutScene = {setterCutScene}/>

    <PlayerCanvasSpaceToEarth
    setterCutScene = {setterCutScene}
    cutSceneRef ={cutSceneRef}
    setLevelTwoPrefixStopper = {setLevelTwoPrefixStopper}
    levelTwoPreFixStopper = {levelTwoPreFixStopper}
    pleaseLevel2StopRef = {pleaseLevel2StopRef}
    setplayerAppear = {setplayerAppear}
    playerAppearRef ={playerAppearRef}
    playerAppear = {playerAppear}
    /> 
    
  <SpaceToEarth
  setLevelTwoPrefixStopper = {setLevelTwoPrefixStopper}
  levelTwoPreFixStopper = {levelTwoPreFixStopper}
  pleaseLevel2StopRef = {pleaseLevel2StopRef}/>

    
    <CloudsMoving />
    <CloudsStatic />
    <SeaCanvas />
    <BackgroundCanvas />
    </>
  );
}

export default FlyHomeLevel2;