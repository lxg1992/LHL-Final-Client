import React from "react";

function Topic(props) {
  return (
    <div>
      <li key = {props.topic} value = {props.value}>{props.topic}</li> <button onClick = {props.handleDelete}>Delete</button>
    </div>
  )

}

export default Topic;