import React from "react";
import "./Question.scss";
import Button from '@material-ui/core/Button';
function Question (props){
  return(
    <>
    { props.question.is_allowed && 
    <li>
      <div className="chatbox">
        <div className="userID-chatroom">User ID: {props.question.guest_hash}</div>
        <div className="chatbox--question">
          <p className="question">{props.question.query}</p>
          <div className="tag--relate">
            <h4>#{props.question.tags_selected.join(", ")}</h4>
            <p>{(props.question.created_at).substr(11,(props.question.created_at).indexOf("T"))}</p>
          </div>
        </div>
        <div className="ban">
          <h4><i className="fa fa-circle" aria-hidden="true"></i> <span>-</span> Allowed: {props.question.is_allowed.toString()}</h4>
          <Button onClick ={(e) => {props.banUser(props.question.room_id, props.question.guest_id)}} >X Ban user</Button>
        </div>
      </div>
    </li>
    }
  </>
    )
  
}

export default Question;