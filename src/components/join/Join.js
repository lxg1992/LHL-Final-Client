import React from "react"
import QuestionInput from './QuestionInput';
import Nav from "../login/Nav";
import "./join.scss";

export default function Join() {
  let tagList = [{id: 1, name: "Ruby"}, {id: 2, name: "Javascript"}, {id: 3, name: "SQL"}, {id: 4, name: "Python"}, {id:5, name: "Coding"}]; 
  return (
    
    <div className ="create--question">
      <Nav/>
      <QuestionInput tagList = {tagList}/>
    </div>
  );
}