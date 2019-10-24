import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase/app";
import config from './firebase-config'

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG ? JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG) : config
console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));