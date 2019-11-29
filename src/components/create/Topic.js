import React from "react";
import "./Nameinput.scss";
import Button from "@material-ui/core/Button";

function Topic(props) {
  return (
    <ul className="topicitems">
      <li key = {props.topic} value = {props.value}>{props.topic}</li> <Button onClick = {(e) => {props.handleDelete(props.topic)}}>Remove</Button>
    </ul>
  )
}

export default Topic;