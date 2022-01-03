import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import React, {useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Home({user, setUser}) {

  const [login,setlogIn] = useState(false);
  const [signUp,setSignUp] = useState(false);

  const loginSetter = () => {
    setlogIn(true)
    setSignUp(false)
    
  }

  const signInSetter = () => {
    setlogIn(false)
    setSignUp(true)
  }
 
 

  return (
    <div className = "home">
      <div className = 'homeBox'>
      <div className = "homelogin">
      <button onClick ={loginSetter}>Login</button>
      </div>
      <div className = "SigninSignUpBox">
     {login? <SignIn  setUser = {setUser}/>:null}
      {signUp? <SignUp  setUser = {setUser}/>:null}
      </div>
      <div className = "homesignup">
      <button onClick ={signInSetter}>SignUp</button>
      </div>
      </div>
      <Route exact path = "/signup">
        <SignUp />
      </Route>
    </div>
  );
}

export default Home;