import React, { useState } from "react";
import "./chatroom.scss";
import "./QuestionOutput";
import Button from '@material-ui/core/Button';
import QuestionOutput from "./QuestionOutput";
import axios from "axios";
import Cookies from "universal-cookie";
import TopicTable from "./TopicTable";
import { getThemeProps } from "@material-ui/styles";
import TopicTableContainer from "./TopicTableContainer";
import { pseudoRandomBytes } from "crypto";

export default function Chatroom() {
   console.log("This is inside chatroom", window.history.state.state.tags_created);
   let tagsCreated = window.history.state.state.tags_created;
   let roomHash = window.history.state.state.roomHash;
   let roomId = window.history.state.state.room_id;
   console.log("This is the room id", roomId);
   let cookie = new Cookies();
   let [topicTable, setTopicTable] = useState();



   function handleCloseRoom() {
      // axios.patch("/rooms/")
      axios.patch("rooms/finish", { host_id: cookie.get("user_id"), room_id: roomId })
         .then(res => {
            console.log(res);
            window.location = "/create";
         })
   }
   function fetchTopicTableInfo(questions) {
      // let topicTableArray = [];
      let tagCountObject = {};
      for (let question of questions) {
         for (let tag of question.tags_selected) {
            let tagUC = tag.toString().toUpperCase();
            if (tagCountObject[tagUC] === undefined) {
               tagCountObject[tagUC] = { question: [question.query], count: 1 };
               // topicTableArray = [...topicTableArray, tagCountObject[tagUC]];
            }
            else {
               tagCountObject[tagUC] = { question: [...tagCountObject[tagUC].question, question.query], count: tagCountObject[tagUC]["count"] += 1 };
               // topicTableArray = [...topicTableArray, tagCountObject[tagUC] ];
            }
         }
      }
      // console.log("This is tagCountObject);
      // topicTableArray = [...topicTableArray, tagCountObject];
      // console.log(topicTableArray);
      // console.log(tagCountObject);
      let topicTableArray = Object.keys(tagCountObject).map((tag) => {
         return {tag: tag, question: [... new Set(tagCountObject[tag].question)], count: tagCountObject[tag].count};
      });
      
      topicTableArray.sort(function(a,b){
         return b.count - a.count;
      })
  
      //  console.log("This is a filter test", filterTest);
      console.log("This is the topic table Array", topicTableArray);
      // tagCountObject = {};
      setTopicTable(topicTableArray);
   }
   // for (const question in questions){
   //    setTopicTable([...topicTable, {questions: questions[question].query, tags: questions[question].tags_selected}]);
   // }



   return (
      <div className="chatroom--container">
         <div className="chatroom">
            <h2>Room Hash: {roomHash}</h2>
            {topicTable && console.log("This is the topicTable state", topicTable)}
            {topicTable && console.log("This is the length of the topicTable", topicTable.length)}
            <div className="chatroom-question">
               <div className="topic">
                  <h4 className="today-topic">Today topic: </h4>
                  { tagsCreated.map((tags, index) => { 
                     return <div className="tag-topic" key = {index}>{tags}</div>;
                  })}
               </div>
               <QuestionOutput fetchTopicTableInfo={fetchTopicTableInfo}/>
            </div>
            <Button className="closeroom" onClick = {handleCloseRoom}>X Close</Button>
         </div>

         <div className="statistic--table">
            <h3>Frequency questions</h3>
            {topicTable && <TopicTableContainer topicTable = {topicTable}/>}
         </div>
      </div>
   )
}