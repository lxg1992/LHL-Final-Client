import React from "react";
import Topic from "./Topic";

function TopicList(props){
  return (
    <div>
      {props.topics.map((topic) =>{
        return <Topic key={topic} topic = {topic} value = {topic} handleDelete = {props.handleDelete} />
      })}
    </div>
  )
}

export default TopicList;