import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import { useState } from "react"

function FlyHomeMainMenu({setDisappearFlyHome}) {
  setDisappearFlyHome(true)

    const shootToLink = () => {
      setDisappearFlyHome(true)
      window.location.href = "/flyhome"
    }
    
      return (
        <>
        <div className = "MainMenu">
        <div className = "MainMenuTop">
          <div className = "MMTopLeft"></div>
          <div className = "MMTopMiddle">FLY HOME</div>
          <div className = "MMTopRight"></div>
        </div>
        <div className = "MainMenuMiddle">
        <div className ="MainMenuMiddleSpacing"></div>
          <button onClick = {shootToLink}>CAMPAIGN</button>
          <div className = "smallbetweenCampaignandEndless"></div>
          <button onClick = {shootToLink}>ENDLESS</button>
        <div className ="BetweenButtonSpacing"></div>
          <button onClick = {shootToLink}>SETTINGS</button>
          <button onClick = {shootToLink}>CREDITS</button>
        <div className ="MainMenuMiddleSpacing"></div>
        </div>
        <div className = "MainMenuBottom"></div>
        </div>
        </>
      );
  }
  
  export default FlyHomeMainMenu;