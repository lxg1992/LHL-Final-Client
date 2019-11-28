import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export default function Login() {
  const cookies = new Cookies();
  // cookies.get("email");
  console.log(cookies.get("token"));
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements.email.value);
    console.log(e.target.elements.password.value);
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    axios.post(`users/login`, { email, password})
    .then(res => {
      console.log(res);
      console.log(res.data.token);
      cookies.set("user_id", res.data.user[0].id, {path: "/"});
      cookies.set("token", res.data.token, {path: '/'})

    })


  }



  return (
    <div>
      <form onSubmit = {handleSubmit}>
        email:<input type="text" name="email" />
        password:<input type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}