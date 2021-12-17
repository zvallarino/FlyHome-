import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import AppPage from './AppPage';
import Home from './Home';

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
        <Route exact path="/">
          <Home user = {user} setUser = {setUser}/>
        </Route>
    </div>
  );
}

export default App;
