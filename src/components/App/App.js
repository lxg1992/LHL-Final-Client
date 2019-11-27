import React from "react";
import Userid from "../userid";
import Main from "../main";
import Login from "../login";
import Create from "../create/Create";
import Join from "../join/Join";
import QuestionOutput from "../create/QuestionOutput"
import Dashboard from "../create/Dashboard";
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
            <QuestionOutput/>
          </Route>
          <Route path ="/dashboard">
          <Dashboard/>
          </Route>
        </Switch>
    </Router>
  );
}




