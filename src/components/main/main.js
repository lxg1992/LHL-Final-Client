import React from "react";
import Nav from "../login/Nav";
import "./main.scss";
import Chatroom from "./chatroom";
import Table from "./table";

export default function Main() {
  return (
    <div className="mainPage">
      <Nav/>
      <Chatroom/>
      <Table/>
    </div>
  );
}
