import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Game from './Game';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppPage from './AppPage';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);


  if (user) {
    return <AppPage setUser={setUser} user={user} />;
  }

  return (
    <div>
      {/* <button onClick = {functionZ}> THIISISISI </button> */}

      <Switch>
        <Route exact path="/signin">
          <SignIn setUser = {setUser}/>
        </Route>
        <Route exact path="/signup">
        <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/App">
        <AppPage setUser={setUser} user={user} />
        </Route>
    </Switch>
    {/* <Game /> */}
    </div>
  );
}

export default App;
