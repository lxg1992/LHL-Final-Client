import React from "react";
import "./Nav.scss";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import 'font-awesome/css/font-awesome.min.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
 } from "react-router-dom";
export default function Nav(props) {
   const cookie = new Cookies();
   
   const handleLogout = () => {
      console.log('you have been logged out');
      cookie.remove("token");
      cookie.remove('email');
      cookie.remove("user_id");
      window.location ="/";
   };

   return (
      <div className = "login--Nav">
         <div className = "logo">
            LOGO
         </div>
         <div className="nav--right">
            {!cookie.get("email") && <Button variant="outlined" color="primary" className="guest">Login</Button>}
            
               {cookie.get("email") && <Link to="/account">
                  <div className="logedin">
                     <i className="fa fa-user-circle" aria-hidden="true"></i>
                     <p className="link-welcomeback">
                        Welcome back, <strong>{cookie.get("email").replace(/@[^ ]*/g, "")}
                        </strong></p>
                  </div>
               </Link>}
            
            {cookie.get("email") && <Button variant="outlined" color="primary" className="logout" onClick={handleLogout}>logout</Button> }
            
         </div>
      </div>
   )
}