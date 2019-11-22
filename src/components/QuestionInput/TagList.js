import React from "react";
import Tag from "./Tag";

function TagList(props){
  return (
  props.tagList.map((tag) => {
    return<Tag key = {tag.id} name = {tag.name} value = {tag.name} handleCheck = {props.handleCheck}/>
  })
  )
}

export default TagList;