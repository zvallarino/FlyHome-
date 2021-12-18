import React, { useRef,useEffect,useState } from 'react';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import './App.css';
import EnemiesCanvas from './EnemiesCanvas';
import PlayerCanvas from './PlayerCanvas';
import RectangleCanvas from './RectangleCanvas';

function Game() {

  const [speed,setSpeed] = useState(1000);
  const enemyXRef = useRef(1);
  const enemyYRef = useRef(1);
  const enemyWRef = useRef(1);
  const enemyHRef = useRef(1);
  const colorRef = useRef('grey')




  return (
    <>
    <PlayerCanvas />
    <RectangleCanvas enemyXRef = {enemyXRef} enemyYRef = {enemyYRef} enemyWRef = {enemyWRef} enemyHRef={enemyHRef} colorRef = {colorRef} speed = {speed} />

    </>
  );
}

export default Game;
