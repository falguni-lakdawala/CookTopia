import React from "react";
import { Link } from "react-router-dom";
import Input from "../../composable-components/Input";
import { useHistory } from "react-router-dom";
import getFirebase from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
  const firebaseInstance = getFirebase();
  const history = useHistory();

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    //2 - create the popup signIn
    await firebaseInstance
      .auth()
      .signInWithPopup(provider)
      .then(
        (result) => {
          //3 - pick the result and store the token
          const token = result.credential.accessToken;
          //4 - check if have token in the current user
          if (token) {
            const user = firebaseInstance.auth().currentUser;
            window.sessionStorage.setItem('user',JSON.stringify(user))
            history.push({
              pathname: "/home",
              state: {
                displayName: user.displayName,
                email: user.email,
                photo: user.photoURL,
                id: user.uid,
                token: token,
              },
            });
          }
        },
        function (error) {
          console.log(error);
        }
      );
  };

  return (
    <div className="login">
      <h1 role="heading" aria-label="Log in heading">
        Log in
      </h1>
      <div className="login-inputs-cont">
        <div className="login-inputs-1">
          <Input type={"email"} placeholder={"Email"} />
          <Input type={"password"} placeholder={"Password"} />
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
