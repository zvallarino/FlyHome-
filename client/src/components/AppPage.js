import './App.css';
import { Switch, Route, useHistory, Router, NavLink } from "react-router-dom";
import {useState} from "react"
import GameStore from './GameStore';
import Game from './Game';
import FlyHomeTitleScreen from './FlyHomeTitleScreen';
import FlyHomeCardAppPage from './FlyHomeCardAppPage';
import FlyHomeMainMenu from './FlyHomeMainMenu';
import GameCardContainer from './GameCardContainer';
import FlyHomeLevel2 from './FlyHomeLevel2';
import HomeLogo from './HomeLogo';

function AppPage({setUser, user}) {


  const [disppearFlyHome, setDisappearFlyHome] = useState(false)
  
  let history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
        window.location.href="http://localhost:4000/"
      }
    });
  }

  const setDisappearFLY = () => {
    setDisappearFlyHome(true)
  }
 

  return (
    <>  

      <Switch >
      <Route exact path="/RedFish">
        <GameStore user = {user} /> 
      </Route>
      <Route exact path = "/titleflyhome">
        <FlyHomeTitleScreen setDisappearFlyHome = {setDisappearFlyHome}/>
      </Route>
      <Route exact path = "/flyhomemainmenu">
      <FlyHomeMainMenu setDisappearFlyHome = {setDisappearFlyHome} />
      </Route>
      <Route exact path ="/flyhome">
        <Game user ={user} />
      </Route>
      <Route exact path ="/flyhomelevel2">
        <FlyHomeLevel2 />
      </Route>
  
      </Switch>

      <div className = {disppearFlyHome? "disappearX" : ""}>
      <div className = "AppPage">
      <div className = "HeaderAppPage">
      {user.username}
      <button onClick={handleLogout}>Log Out</button>
      </div>
      <div className = "MiddleAppPage">
         <div className = "GameCardContainer">
            <GameCardContainer user = {user}/>
  
          <FlyHomeCardAppPage setDisappearFlyHome ={setDisappearFlyHome} disppearFlyHome = {disppearFlyHome} />
          </div>
      </div>
      <div className = "BottomAppPage">
        <div className = "triangle-element"></div>
      </div>
     </div>
     </div>
     </>
  );
}

export default AppPage;