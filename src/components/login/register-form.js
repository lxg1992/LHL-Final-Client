import React from "react";
import "./register-form.scss";
import Button from "@material-ui/core/Button";

export default function RegisterForm() {
  return (
    <form className="login--Rform">
      <h2>REGISTER</h2>
      <p className = "tag">Username</p>
      <input placeholder=" Username"></input>
      <p className = "tag">Email</p>
      <input placeholder=" Email"></input>
      <p className = "tag">Password</p>
      <input placeholder=" Password"></input>
      <p className = "tag">Confirm password</p>
      <input placeholder=" Confirm password"></input>
      <div className="button--register">
        <Button variant="contained" color="primary">
          Register
        </Button>
      </div>
    </form>
  );
}
