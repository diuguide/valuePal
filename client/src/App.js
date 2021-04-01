import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './components/Auth/SignIn';
import SignUp from "./components/Auth/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />}
      </Switch>
    </Router>
  );
}

export default App;
