import React from "react";

function Tag(props){
  return(
  <div>
  <input type ="checkbox" name={props.name} id={props.id} value={props.name} onChange={props.handleCheck}/> <label htmlFor={props.id}>{props.name}</label>
  </div>
  )
}

export default Tag;