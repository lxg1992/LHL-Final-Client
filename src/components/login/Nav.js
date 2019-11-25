import React from "react";
import "./Nav.scss";
import Button from '@material-ui/core/Button';

export default function Nav() {
   return (
      <div className = "login--Nav">
         <div className = "logo">
            LOGO
         </div>
         <div className="nav--right">
            <Button variant="outlined" color="primary" className="guest">Login as Guest?</Button>
            <div>Login as <span>@User</span></div>
            <Button variant="outlined" color="primary">logout</Button>
         </div>
      </div>
   )
}