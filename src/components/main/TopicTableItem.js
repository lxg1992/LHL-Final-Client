import React from "react";
function TopicTableItem(props){

  
  //  props.topicTableArray && props.topicTableArray.map((topic) =>{
  //     return <tr>{topic.question}</tr>
  //   })
  return (

  
    props.questions.map((question) =>{
      return <tr>{question}</tr>
    })
  
  )
}

export default TopicTableItem;