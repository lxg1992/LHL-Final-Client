import React from "react";
import Button from "../Button";
import "./login-form.scss";

export default function LoginForm () {
   return (
      <div>
         <div>Login</div>
         <div>Welcome back! Login in to access</div>
         <form>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <div>
               <p>Don't have an account? <span>Register</span></p>
            </div>
            <Button/>
         </form>

      </div>
   )
}