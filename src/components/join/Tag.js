import React from "react";

function Tag(props){
  return(
  <div>
  <input type ="checkbox" name={props.name} id={props} value={props.value} onChange={props.handleCheck}/> <label htmlFor={props.name}>{props.name}</label>
  </div>
  )
}

export default Tag;