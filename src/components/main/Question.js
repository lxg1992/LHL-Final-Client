import React from "react";

function Question (props){
  return(
    <>
    { props.question.is_allowed && 
    <li>
    <h2>{props.question.user_id}</h2>
    <h2>User ID: {props.question.guest_hash}</h2>
    <h4>is allowed: {props.question.is_allowed.toString()}</h4>
    <h3>{props.question.tags_selected.join(", ")}</h3>
    <p>{props.question.query}</p>
    <p>Asked at: {props.question.created_at}</p>
    <button onClick ={(e) => {props.banUser(props.question.room_id, props.question.guest_id)}} >Ban user</button>
    </li>
    }
    </>
  )
}

export default Question;