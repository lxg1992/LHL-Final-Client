import React from "react";
import "./questioninput.scss";

function Tag(props){
  return(
  <div className="tag--join">
  <input type ="checkbox" name={props.name} id={props} value={props.value} onChange={props.handleCheck}/> <label htmlFor={props.name}>{props.name}</label>
  </div>
  )
}

export default Tag;