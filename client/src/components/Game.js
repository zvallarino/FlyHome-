import React, { useRef,useEffect,useState } from 'react';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";

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
