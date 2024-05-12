import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { NavLink } from "react-router-dom";

function Login() {
  const [LoginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setLoginInput((values) => ({ ...values, [name]: val }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, LoginInput.username, LoginInput.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("login suuccesugullt");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    console.log(LoginInput);
  };
  return (
    <div className="main">
      <div className="text-img">
        <img id="image1" src="" alt="" />
        <p className="text">Getting Started With VR Creation</p>
        {/* <img className='image2' src="./snimg.png" alt="" /> */}
        <div className="gif"></div>
      </div>

      <div className="right">
        <div className="button-options">
          <button className="icon">
            <img id="google" src="/google.png" alt="" /> Signup with Google
          </button>
          <button className="icon">
            <img id="facebook" src="/facebook.png" alt="" />
            Signup with Facebook
          </button>
        </div>
        <div className="or">
          <p id="or">- OR -</p>
        </div>
        <form className="inputtext" onSubmit={handleSubmit}>
          <input
            className="inputText"
            type="text"
            placeholder="Full Name"
            name="username"
            value={LoginInput.username}
            onChange={handleChange}
          />
          <input
            className="inputText"
            type="password"
            placeholder="Password"
            name="password"
            value={LoginInput.password}
            onChange={handleChange}
          />
          <div className="summitBtn">
            <button id="summitBtn">Login</button>
          </div>
        </form>
        <p className="haveAccount">
          Don't Have Account{" "}
          <span id="LogIn ">
            <NavLink to="/rigister">Rgister</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
