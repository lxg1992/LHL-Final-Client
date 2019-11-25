import React from "react";
import Nav from "../login/Nav";
import ChangeForm from "./changeForm";
import "./account.scss";

export default function Account() {
  return (
    <div className="change--Account">
      <Nav/>
      <ChangeForm/>
    </div>
  );
}
