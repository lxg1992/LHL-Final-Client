import React from "react";
import Navi from "../login/Nav";
import ChangeForm from "./changeForm";
import "./account.scss";

export default function Account() {
  return (
    <div className="change--Account">
      <Navi/>
      <ChangeForm/>
    </div>
  );
}
