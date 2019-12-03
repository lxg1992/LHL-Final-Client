import React from "react";
import "./Question.scss";
import Button from '@material-ui/core/Button';
function Question (props){
  return(
    <ul className="list-chatroom">
    { props.question.is_allowed && 
    <li>
      <div className="chatbox-question">
        <div className="userID-chatroom">User ID: {props.question.guest_hash}</div>
        <p>Question: {props.question.query}</p>
        <h4>{props.question.tags_selected.join(", ")}</h4>
        <p>Asked at: {props.question.created_at}</p>
      </div>
      <div className="ban">
        <h4>is allowed: {props.question.is_allowed.toString()}</h4>
        <Button onClick ={(e) => {props.banUser(props.question.room_id, props.question.guest_id)}} >Ban user</Button>
      </div>
    </li>
    }
    </ul>
  )
}

export default Question;