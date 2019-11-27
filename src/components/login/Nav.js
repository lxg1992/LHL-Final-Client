import React from "react";
import "./Nav.scss";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default function Nav(props) {

   const handleLogout = () => () => {
      console.log('you have been logged out');
   };

   return (
      <div className = "login--Nav">
         <div className = "logo">
            LOGO
         </div>
         <div className="nav--right">
            <Button variant="outlined" color="primary" className="guest">Login as Guest?</Button>
            <Link to="/Account">
               <div>Login as <span> {props.email} </span></div>
            </Link>
            <Button variant="outlined" color="primary" onClick={handleLogout()}>logout</Button>
            
         </div>
      </div>
   )
}