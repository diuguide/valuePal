import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Main from "./components/Main";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
