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
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/userID">
            <Userid/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/join">
            <Join/>
          </Route>
          <Route path="/main">
            <Main/>
          </Route>
        </Switch>
    </Router>
  );
}




