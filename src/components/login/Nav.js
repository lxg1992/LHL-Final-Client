import React from "react";
import "./Nav.scss";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Nav(props) {
   const cookie = new Cookies();
   
   const handleLogout = () => {
      console.log('you have been logged out');
      
   };

   return (
      <div className = "login--Nav">
         <div className = "logo">
            LOGO
         </div>
         <div className="nav--right">
            {!cookie.get("email") && <Button variant="outlined" color="primary" className="guest">Login</Button>}
            <Link to="/Account">
               {cookie.get("email") && <div className="logedin">Hi, <span> {cookie.get("email")} </span></div>}
            </Link>
            {cookie.get("email") && <Button variant="outlined" color="primary" onClick={handleLogout()}>logout</Button> }
            
         </div>
      </div>
   )
}