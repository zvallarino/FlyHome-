import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import { useState } from "react"


function FlyHome() {


const shootToLink = () => {
  window.location.href = `/flyhome`
}

  return (
    <div onClick = {shootToLink} className='GameCard'>
    <img src = "https://i.imgur.com/w9cmPDl.png"></img>
    <h1>Fly Home</h1>
    </div>
  );
}

export default FlyHome;