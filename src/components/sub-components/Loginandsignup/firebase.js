import firebase from "firebase/app";
import React from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectID,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderID,
  appId: process.env.REACT_APP_appID,
};

const app=firebase.initializeApp(firebaseConfig)
export const auth=app.auth()
