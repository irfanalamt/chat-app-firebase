import React from "react";
import ReactDOM from "react-dom";
require("dotenv").config();
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "my-chat-app-1a6cb.firebaseapp.com",
  projectId: "my-chat-app-1a6cb",
  storageBucket: "my-chat-app-1a6cb.appspot.com",
  messagingSenderId: "256295602377",
  appId: "1:256295602377:web:2f0e050442eb6e9d20e518",
  measurementId: "G-VRK2BY8HDJ",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
