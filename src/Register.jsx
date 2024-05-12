import React from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase";
// import Login from "./Login"/;
import "./custom.css";

function Register() {
  console.log("hello");
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setInputs((values) => ({ ...values, [name]: val }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/link");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    alert(inputs);
    console.log(inputs);
  };
  return (
    <>
      <div className="main">
        <div className="text-img">
          <img id="image1" src="./Group 3.png" alt="" />
          <p className="text">Getting Started With VR Creation</p>
          {/* <img className='image2' src="./snimg.png" alt="" /> */}
          <div className="gif"></div>
        </div>

        <div className="right">
          <p className="CreateAccount">Create Account</p>
          <div className="button-options">
            <button className="icon">
              <img id="google" src="./google.png" alt="" /> Signup with Google
            </button>
            <button className="icon">
              <img id="facebook" src="./facebook.png" alt="" />
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
              value={inputs.username}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            <div className="summitBtn">
              <button id="summitBtn">Create Account</button>
            </div>
          </form>
          <p className="haveAccount">
            Already have an account?{" "}
            <span id="LogIn ">
              <NavLink to="/link">Log In</NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
