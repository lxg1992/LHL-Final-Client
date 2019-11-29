import React from "react";

function Question (props){
  return(
    <li>
    <h2>User ID: {props.question.guest_hash}</h2>
    <h4>is allowed: {props.question.is_allowed.toString()}</h4>
    <h3>{props.question.tags_selected.join(", ")}</h3>
    <p>{props.question.query}</p>
    <p>Asked at: {props.question.created_at}</p>
    </li>
  )
}

export default Question;