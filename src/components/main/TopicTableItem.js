import React from "react";
function TopicTableItem(props){

  
  //  props.topicTableArray && props.topicTableArray.map((topic) =>{
  //     return <tr>{topic.question}</tr>
  //   })
  return (

  
    props.questions.slice(0,4).map((question, index) =>{
      return <tr key={index}><td>{question}</td></tr>
    })
  
  )
}

export default TopicTableItem;