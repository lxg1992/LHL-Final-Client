import React from "react";
import Button from "../Button";
import "./register-form.scss";

export default function RegisterForm () {
   return (
      <div>
         <div>Register</div>
         <form>
            <input placeholder="Username"></input>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <input placeholder="Confirm password"></input>
            <Button/>
         </form>
         <Button/>
      </div>
   )
}