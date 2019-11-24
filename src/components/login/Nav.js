import React from "react";
import "./Nav.scss";
import Button from '@material-ui/core/Button';

export default function Login() {
   return (
      <div className = "login--Nav">
         <div className = "logo">
            LOGO
         </div>
         <Button variant="outlined" color="primary" className="guest">Login as Guest?</Button>
      </div>
   )
}