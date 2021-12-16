import './App.css';
import { Switch, Route, useHistory, Router, NavLink } from "react-router-dom";
import {useState} from "react"
import GameStore from './GameStore';
import Game from './Game';
import GameTitleScreen from './GameTitleScreen';

function AppPage({setUser, user}) {

  console.log(user.username)

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
      <Route exact path ="/flyhome">
        <Game user ={user} />
      </Route>
      </Switch>


      <div className = "AppPage">
      <div className = "HeaderAppPage">
      {user.username}
      <button onClick={handleLogout}>Log Out</button>
      </div>
      <div className = "MiddleAppPage">
      <NavLink to="/flyhome">
         flyhome
      </NavLink>
      </div>
      <div className = "BottomAppPage"></div>
     </div>
     </>
  );
}

export default AppPage;