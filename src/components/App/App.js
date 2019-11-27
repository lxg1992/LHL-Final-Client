import React from "react";
import Userid from "../user-login/userid";
import Main from "../main/main";
import Login from "../login/login";
import Create from "../create/Create";
import Join from "../join/Join";
import Account from "../account/Account";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/account" component={Account} />
          <Route path="/userID" component={Userid} />
          <Route path="/create" component={Create} />
          <Route path="/join" component={Join} />
          <Route path="/main" component={Main} />
        </Switch>
    </Router>
  );
}




