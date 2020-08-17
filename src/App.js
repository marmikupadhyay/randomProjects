import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import AccountDetails from "./components/AccountDetails";
import Settings from "./components/Settings";
import Liked from "./components/Liked";

function App() {
  return (
    <React.Fragment>
      <Router basename="/">
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/liked">
          <Liked />
        </Route>
        <Route path="/account">
          <AccountDetails />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
