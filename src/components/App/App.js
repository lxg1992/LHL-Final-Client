import React from "react";
import Userid from "../user-login/userid";
// import Main from "../main/main";
import Root from "../Root";
// import Main from "../components/Main";
import Login from "../login/login";
import Create from "../create/Create";
import Join from "../join/Join";
import Account from "../account/Account";
import Dashboard from "../create/Dashboard";
import Cookies from "universal-cookie";
import Main from "../main/main";
import QuestionInput from "../join/QuestionInput";
import Analysis from "../create/Analysis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// <Route exact path="/" component={Login} />
export default function App() {
  const cookie = new Cookies();
  cookie.get("token");
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/guestJoin" component = {QuestionInput} />
          {!cookie.get("token") && <Redirect to="/"/>}
          <Route path="/account" component={Account} />
          <Route path="/userID" component={Userid} />
          <Route path="/create" component={Create} />
          <Route path="/join" component={Join} />
          <Route path="/main" component={Main} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/analysis" component={Analysis} />
        </Switch>
    </Router>
  );
}




