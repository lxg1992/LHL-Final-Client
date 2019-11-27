import React from "react";
import Tag from "./Tag";

function TagList(props){
  return (
  props.tagList.map((tag) => {
    let tagField = Object.keys(tag);
    return <Tag key = {tagField} name = {tagField} value = {tagField} id = {tagField} handleCheck = {props.handleCheck}/>
  })
  )
}

export default TagList;