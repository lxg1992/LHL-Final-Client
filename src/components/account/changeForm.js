import React from "react";
import Button from "@material-ui/core/Button";
import "./changeForm.scss";

export default function ChangeForm() {
  return (
    <form className="change--form">
      <h2>Account</h2>
      <p className="tag">Username</p>
      <input type="text" disabled placeholder="@Username"></input>
      <p className="tag">Email</p>
      <input type="text" disabled placeholder="@Email"></input>
      <p className="tag">New password</p>
      <input placeholder=" New password"></input>
      <p className="tag">Confirm your new password</p>
      <input placeholder=" Confirm password"></input>
      <div className = "confirmChangeForm">
        <Button variant="contained" color="primary" type="submit">
          Confirm
        </Button>
      </div>
    </form>
  );
}
