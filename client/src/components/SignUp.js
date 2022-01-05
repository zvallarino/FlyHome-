import React, { useState } from "react";


function SignUp({ setUser }) {
  const [profPicUrl, setProfPicUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

 
const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        prof_pic: profPicUrl
      }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  }
  

  return (
    <>
   
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

        <div className="input">
        <label>
          Check Ya Self:
          <input
            type="password"
            className="password-confirmation"
            autoComplete="current-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
        </label>
        </div>

        
        <div className="input">
        <label>
          Avatar:{" "}
          <input
            type="text"
            className="prof-pic"
            autoComplete="off"
            value={profPicUrl}
            onChange={(e) => setProfPicUrl(e.target.value)}
          ></input>
        </label>
        </div>


        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </form>
    </>
  );
}

export default SignUp;
