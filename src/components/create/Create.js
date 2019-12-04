import React from "react";
import Navi from "../login/Nav";
import "./Create.scss";
import Dashboard from "./Dashboard";

export default function Create() {

  return (
    <div className="create--topic">
      <Navi/>
      <Dashboard />
    </div>
  );
}
