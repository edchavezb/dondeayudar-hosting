import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase/app";

const config = null;

if (process.env.NODE_ENV === "development") {
    config = require('./firebase-config')
}

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG ? JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG) : config
console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));