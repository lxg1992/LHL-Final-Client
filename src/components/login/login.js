import React from "react";
import LoginForm from "./login-form.js";
import Nav from "./Nav";
import RegisterForm from "./register-form.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "./login.scss";

export default function Login() {
  return (
  <div className = "container">
    <Nav/>
    <LoginForm/>
    <RegisterForm/>
  </div>
  )
}
