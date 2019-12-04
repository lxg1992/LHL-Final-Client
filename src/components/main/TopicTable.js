import React from "react";
import TopicTableItem from "./TopicTableItem";

function TopicTable(props) {

  return (
    <div>
      <table>
        <thead><tr><th>{props.topicTable.tag}</th></tr></thead>
        <tbody>
          <TopicTableItem questions = {props.topicTable.question}/>
        </tbody>
      </table>
    </div>
  )
}

export default TopicTable;