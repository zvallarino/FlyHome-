import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import { useState } from "react"


function GameCard({user, game }) {


const shootToLink = () => {
  window.location.href = `${game.link}`
}

  return (
    <div onClick = {shootToLink} className='GameCard'>
    <img src = {game.picture}></img>
  
    </div>
  );
}

export default GameCard;