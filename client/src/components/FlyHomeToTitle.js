import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import { useState } from "react"


function FlyHomeToTitle() {


const shootToLink = () => {
  window.location.href = `/titleflyhome`
 
}

  return (
    <div onClick = {shootToLink} className='GameCard'>
    <img src = "https://i.imgur.com/w9cmPDl.png"></img>
    </div>
  );
}

export default FlyHomeToTitle;