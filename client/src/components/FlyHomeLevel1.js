import React, { useRef, useState } from 'react';

import './App.css';
import PlayerTitleCanvas from './PlayerTitleCanvas';
import PlayerCanvas from './PlayerCanvas';
import RectangleOfDoom1Canvas from './RectangleOfDoom1Canvas';

import BackgroundPreludeCanvas from './BackgroundPreludeCanvas';
import SpaceCanvas from './SpaceCanvas';

import RectangleOfDoom2Canvas from './RectangleOfDoom2Canvas';
import TextTitle from './TextTitle';

import CommanderSketch from './CommanderSketch';
import PrivateImari from './PrivateImari';

import SpaceAnimation from './SpaceAnimation';

function FlyHomeLevel1() {

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

  const [spaceAnimation, setSpaceAnimation] = useState(false)
  const spaceAnimationRef = useRef(false)


  return (
    <>
    
    {/* level One */}
    <PlayerCanvas levelOneState = {levelOneState} levelOneRef = {levelOneRef} rectOfDoomRef = {rectOfDoomRef} rectOfDoom2Ref ={rectOfDoom2Ref}/> 
    <CommanderSketch doomStartRef = {doomStartRef} setStartofDoom = {setStartofDoom} levelOneState = {levelOneState} levelOneRef = {levelOneRef} levelOneRef = {levelOneRef} />
    <PrivateImari  spaceAnimationRef = {spaceAnimationRef} setSpaceAnimation = {setSpaceAnimation} doomStartRef = {doomStartRef} setStartofDoom = {setStartofDoom} levelOneState = {levelOneState} levelOneRef = {levelOneRef} levelOneRef = {levelOneRef}/>
    {doomOfRectState? <RectangleOfDoom2Canvas spaceAnimation = {spaceAnimation} spaceAnimationRef = {spaceAnimationRef} setSpaceAnimation = {setSpaceAnimation} rectOfDoom2Ref = {rectOfDoom2Ref}/>:<RectangleOfDoom1Canvas doomStartRef = {doomStartRef} startOfDoom = {startOfDoom} setdoomOfRectState ={setdoomOfRectState} rectOfDoomRef = {rectOfDoomRef} />}
    <SpaceCanvas levelOneState = {levelOneState} levelOneRef = {levelOneRef} levelOneRef ={levelOneRef}/>
    <SpaceAnimation  spaceAnimation = {spaceAnimation} spaceAnimationRef = {spaceAnimationRef} setSpaceAnimation = {setSpaceAnimation}/>

    {/* Prelude */}
    <TextTitle textRef ={textRef} textState={textState} />
    <PlayerTitleCanvas setLevelOneState = {setLevelOneState} levelOneRef = {levelOneRef} pleaseStopRef = {pleaseStopRef} prefixStopper = {prefixStopper} setPrefixStopper ={setPrefixStopper} levelOneState = {levelOneState} textRef = {textRef} setText ={setText} />
    <BackgroundPreludeCanvas pleaseStopRef = {pleaseStopRef} prefixStopper = {prefixStopper} setPrefixStopper ={setPrefixStopper} />
    </>
  );
}

export default FlyHomeLevel1;
