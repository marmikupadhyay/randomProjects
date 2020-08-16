import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import AccountDetails from "./components/AccountDetails";

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
        <Route path="/account">
          <AccountDetails />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
