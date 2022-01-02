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
          <h1>FLY HOME</h1>
        </div>
        <div className = "MainMenuMiddle">
        <button onClick = {shootToLink}>Campaign</button>
        </div>
        <div className = "MainMenuBottom"></div>
          {/* <img src ="https://i.imgur.com/FNpMme4.png"/> */}
        {/* <div>FLY HOME</div> */}

        {/* <button>Endless</button>
        <button>Settings</button>
        <button>Credits</button> */}
        </div>
        </>
      );
  }
  
  export default FlyHomeMainMenu;