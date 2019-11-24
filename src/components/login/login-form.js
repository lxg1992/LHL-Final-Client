import React from "react";
import "./login-form.scss";
import Button from "@material-ui/core/Button";

export default function LoginForm() {
  return (
    <form className="login--Lform">
      <h2>LOGIN</h2>
      <p className = "tag">Username</p>
      <input placeholder=" Username"></input>
      <p className = "tag">Password</p>
      <input placeholder=" Password"></input>
      <Button variant="contained" color="primary">
        Login
      </Button>
      {/* <div className="orDiv">
         <hr></hr>
         <p className="or">or</p>
      </div>
      <Button><i>asassa</i>facebook</Button> */}
    </form>
  );
}
