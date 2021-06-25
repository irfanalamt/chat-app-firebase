import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import env from "react-dotenv";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const api_key = env.API_KEY;

firebase.initializeApp({
  apiKey: api_key,
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
      <Route path="/" component={SignupComponent}></Route>
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
