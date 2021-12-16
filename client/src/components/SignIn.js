import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

function SignIn({setUser, onLogin}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) =>{
          setUser(user)
          history.push("/dashboard")
        });
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  };

  return (
    <div>
      <div className="formZ">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Username:{" "}
              <input
                type="text"
                className="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="input">
            <label>
              Password:{" "}
              <input
                type="password"
                className="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="button-submit">
            <button type="submit">{isLoading ? "Loading..." : "Log In"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;