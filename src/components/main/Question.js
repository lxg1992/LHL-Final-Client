import React from "react";
import "./Question.scss";
import Button from '@material-ui/core/Button';
function Question (props){
  return(
    <ul className="list-chatroom">
    { props.question.is_allowed && 
    <li>
      <div className="user-info">
        {/* <p>ID{props.question.user_id}</p> */}
        <p className="userID-chatroom">User ID: {props.question.guest_hash}</p>
        <Button onClick ={(e) => {props.banUser(props.question.room_id, props.question.guest_id)}} >Ban user</Button>
      </div>
      <div className="chatbox">
        <h4>is allowed: {props.question.is_allowed.toString()}</h4>
        <h4>{props.question.tags_selected.join(", ")}</h4>
        <p>{props.question.query}</p>
        <p>Asked at: {props.question.created_at}</p>
      </div>
    </li>
    }
    </ul>
  )
}

export default Question;