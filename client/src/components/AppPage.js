import './App.css';
import { Switch, Route, useHistory, Router, NavLink } from "react-router-dom";
import {useState,useRef} from "react"
import GameStore from './GameStore';
import FlyHomeLevel1 from './FlyHomeLevel1';
import FlyHomeTitleScreen from './FlyHomeTitleScreen';
import FlyHomeCardAppPage from './FlyHomeCardAppPage';
import FlyHomeMainMenu from './FlyHomeMainMenu';
import GameCardContainer from './GameCardContainer';
import FlyHomeLevel2 from './FlyHomeLevel2';
import HomeLogo from './HomeLogo';

function AppPage({setUser, user}) {


  const [disppearFlyHome, setDisappearFlyHome] = useState(false)
  const [dotState,setState] = useState(false)


  const reddotgreendot = ['https://i.imgur.com/A3q7L4F.png','https://i.imgur.com/mFcaShe.png']
  
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

  const dotClick = () => {
    setState(fox=>!fox)
  }


  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
 

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
        <FlyHomeLevel1 user ={user} />
      </Route>
      <Route exact path ="/flyhomelevel2">
        <FlyHomeLevel2 />
      </Route>
  
      </Switch>

      <div className = {disppearFlyHome? "disappearX" : ""}>
        <div className = "AppPage">
          <div className = "HeaderAppPage">
          </div>
          <div className = "MiddleAppPage">
            <div className = "TopOfMiddleAppPage">
            <div className = "ProfilePicUserName">
              <div className = "ProfilePicDiv">
                <img src = {user.prof_pic}></img>
              </div>
              <div className = "TextDiv">
                <div className = "onlineButton">
                <h1>{user.username}</h1>
                <img onClick = {dotClick} src = {dotState?"https://i.imgur.com/A3q7L4F.png":"https://i.imgur.com/mFcaShe.png"}></img>
                </div>
                <h2>{dotState?"Appearing Offline":"Online"}</h2>
              </div>
            </div>
            <div className = "MiddleBoxSpacing">
            </div>
            <div className = "EndBoxWithTimeAndFriends">
              <div className = "NumberOfFriends">
              <h2>{getRandomInt(5)+1}</h2>
              <img src ="https://i.imgur.com/aO0KgvF.png"></img>
              </div>
              <div>
              <h1>{today}</h1>
              </div>
            </div>
            </div>
              <div className = "GameCardContainer">
              <GameCardContainer user = {user}/>
              <FlyHomeCardAppPage setDisappearFlyHome ={setDisappearFlyHome} disppearFlyHome = {disppearFlyHome} />
              </div>
              <div className = "BottomOfMiddleAppPage">
                <img src = "https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"></img>
                <img src = "https://www.clipartmax.com/png/middle/141-1411108_logout-free-icon-3-standby-symbol.png" onClick ={handleLogout}></img>
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