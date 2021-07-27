import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();

  const [login, setLogin] = useState({});

  const googleLogin = () => {
    // Craeting  google provider
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        window.sessionStorage.setItem("user", JSON.stringify(res.user));
        const user = res.user;
        const userData = {
          userID: user.uid,
          displayName: user.displayName,
          firstName: "",
          lastName: "",
          email: user.email,
          image: user.photoURL,
        };

        const uploadData = fetch("http://44.238.74.165:3000/createuser", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            window.sessionStorage.setItem("userdata", JSON.stringify(data));
            history.push({
              pathname: "/home",
            });
          })
          .catch((error) => {
            alert("User login failed");
            console.log(error);
          });
      })
      .catch((e) => console.log(e));
  };

  const handlesignin = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });

  };

  return (
    <div className="login">
      <h1 role="heading" aria-label="Log in heading">
        Log in
      </h1>
      <div className="login-inputs-cont">
        <div className="login-inputs-1">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handlesignin(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handlesignin(e)}
          />
          <Link to={{ pathname: "/forgot" }}>Forgot your password?</Link>
        </div>
        <div className="login-inputs-2">
          <button
            title="login"
            role="button"
            aria-label="login"
            className="login-inputs-login-btn"
            type="button"
            onClick={() => {
              googleLogin();
            }}
          >
            Log in
          </button>
          <button
            role="button"
            aria-label="Register"
            title="register"
            type="button"
            onClick={() => {
              history.push("/signup");
            }}
            className="login-inputs-register-btn"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
