import React from "react";
import { Link } from "react-router-dom";
import Input from "../../composable-components/Input";
import { useHistory } from "react-router-dom";
import getFirebase from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import useFetch from "../../../custom_hooks/useFetch";

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
            const userData = {
              userID: user.uid,
              displayName: user.displayName,
              firstName: '',
              lastName: '',
              email: user.email,
              image: user.photoURL,
            };

            const uploadData = fetch("http://44.238.74.165:3000/createuser", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(userData),
            }).then(res=>res.json()).
            then(data=>{
              window.sessionStorage.setItem("userdata", JSON.stringify(data));
              history.push({
                pathname: "/home"
              });
            }).
            catch(error=>{
              alert("User login failed")
              console.log(error)
            })

       
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
