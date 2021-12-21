import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import AppPage from './AppPage';
import Home from './Home';

function App() {

  // Boss Plane


  //https://i.imgur.com/zZpPzjM.png 

  
  //Fly Home Cover

  //https://i.imgur.com/OF9NPa5.png


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
