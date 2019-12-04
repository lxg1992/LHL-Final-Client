import React from "react";
import Navi from "../login/Nav";
import "./main.scss";
import Chatroom from "./chatroom";
import QuestionOutput from "./QuestionOutput";


export default function Main() {
  return (
    <div className="mainPage">
      <Navi/>
      <Chatroom/>
    </div>
  );
}
