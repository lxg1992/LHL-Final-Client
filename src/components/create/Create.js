import React from "react";
import Nav from "../login/Nav";
import "./Create.scss";
import Dashboard from "./Dashboard";

export default function Create() {
  return (
    <div className="create--topic">
      <Nav/>
      <Dashboard/>
    </div>
  );
}
