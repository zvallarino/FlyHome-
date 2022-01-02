import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';

function Home({user, setUser}) {

  return (
    <div className = "home">
      <SignIn  setUser = {setUser}/>
      <SignUp  setUser = {setUser}/>
      
      <Route exact path = "/signup">
        <SignUp />
      </Route>
    </div>
  );
}

export default Home;