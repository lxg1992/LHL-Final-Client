import React from "react";
import Question from "./Question";
import "./Question.scss";
function QuestionList(props) {
  return (
    <ul className="list-chatroom">
    {
    props.questions.map((question, index) => {
      return <Question key={index} index={index} question = {question} banUser = {props.banUser}/>
    })
  }
    </ul>
  )
}

export default QuestionList;