import React from "react";
import Nav from "../login/Nav";
import "./Create.scss";
import CreateRoom from "./CreateRoom";

export default function Create() {
  return (
    <div className="create--topic">
      <Nav/>
      <CreateRoom/>
    </div>
  );
}
