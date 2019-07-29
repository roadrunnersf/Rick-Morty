import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Characters from "./Characters";
import Character from "./Character";
import Guess from "./Guess/index";

const Root = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/characters" />} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/guess" component={Guess} />
        <Route path="/characters/:id" component={Character} />
      </Switch>
    </Router>
  </div>
);

export default Root;
