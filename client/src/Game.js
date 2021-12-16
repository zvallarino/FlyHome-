import React, { useRef,useEffect,useState } from 'react';
import './App.css';
import EnemiesCanvas from './EnemiesCanvas';
import PlayerCanvas from './PlayerCanvas';

function Game() {



  return (
    <>
    <PlayerCanvas />
    <EnemiesCanvas />
    </>
  );
}

export default Game;
