import './App.css';
import { Switch, Route, useHistory, Router, NavLink } from "react-router-dom";
import Game from './Game';
import GameStore from './GameStore';

function AppPage({setUser, user}) {
  console.log(user)
  
  let history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
  }
 

  return (
    <>
      HELLO
      <Route exact path="/RedFish">
        <GameStore user = {user} /> 
      </Route>
      <NavLink to="/RedFish">
         RedFish
      </NavLink>
     <button onClick={handleLogout}>Log Out</button>
     </>
  );
}

export default AppPage;