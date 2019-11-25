import React from "react";

function Tag(props){
  return(
  <div className="tag--join">
  <input type ="checkbox" name={props.name} id={props.id} value={props.name} onChange={props.handleCheck}/> <label htmlFor={props.id}>{props.name}</label>
  </div>
  )
}

export default Tag;