import React from "react";
import TopicTable from "./TopicTable";

function TopicTableContainer(props){

  return (
    <div>
    {props.topicTable[0] ? 
    <TopicTable topicTable ={props.topicTable[0]}/>
    : null }
    {props.topicTable[1] ? 
      <TopicTable topicTable ={props.topicTable[1]}/>
      : null }
      {props.topicTable[2] ? <TopicTable topicTable={props.topicTable[2]} /> : null}
      {props.topicTable[3] ? <TopicTable topicTable={props.topicTable[3]} /> : null}
    </div>
  )
}
export default TopicTableContainer;