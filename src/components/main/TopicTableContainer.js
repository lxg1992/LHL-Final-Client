import React from "react";
import TopicTable from "./TopicTable";

function TopicTableContainer(props){

  return (
    <div>
    <TopicTable topicTable={props.topicTable[0]} />
    <TopicTable topicTable={props.topicTable[1]} />
    <TopicTable topicTable={props.topicTable[2]} />
    <TopicTable topicTable={props.topicTable[3]} />
    </div>
  )
}
export default TopicTableContainer;