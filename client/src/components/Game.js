import React, { useRef, useState } from 'react';

import './App.css';
import PlayerCanvas from './PlayerCanvas';
import RectangleCanvas from './RectangleCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import EnemiesCanvas from './EnemiesCanvas';
import LevelTwoPlayerCanvas from './LevelTwoPlayerCanvas';

function Game() {

  const [speed,setSpeed] = useState(1000);
  const enemyXRef = useRef(1);
  const enemyYRef = useRef(1);
  const enemyWRef = useRef(1);
  const enemyHRef = useRef(1);
  const colorRef = useRef('#08FF00')


  // const enemyXRefPlane = useRef(1);
  // const enemyYRefPlane = useRef(1);
  // const enemyWRefPlane = useRef(1);
  // const enemyHRefPlane = useRef(1);
  // const enemyImageRefPlane = useRef('https://i.imgur.com/qZaFU1N.png')





  return (
    <>
    <LevelTwoPlayerCanvas setSpeed = {setSpeed} speed ={speed} enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef = {enemyHRef} colorRef = {colorRef} />
    <EnemiesCanvas />
    <BackgroundCanvas />

    {/* level One */}
    {/* <PlayerCanvas setSpeed = {setSpeed} speed ={speed} enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef = {enemyHRef} colorRef = {colorRef}/> */}
     {/* <RectangleCanvas enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef={enemyHRef} colorRef = {colorRef}  speed = {speed} /> */}
    </>
  );
}

export default Game;
