import React from "react";
import Question from "./Question";

function QuestionList(props) {
  return (
    props.questions.map((question, index) => {
      return <Question key={index} question = {question} banUser = {props.banUser}/>
    })
  )
}

export default QuestionList;