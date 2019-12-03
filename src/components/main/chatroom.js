import React, { useState } from "react";
import "./chatroom.scss";
import "./QuestionOutput";
import QuestionOutput from "./QuestionOutput";
import axios from "axios";
import Cookies from "universal-cookie";
import TopicTable from "./TopicTable";
import { getThemeProps } from "@material-ui/styles";
import TopicTableContainer from "./TopicTableContainer";

export default function Chatroom() {
   console.log("This is inside chatroom", window.history.state.state.tags_created);
   let tagsCreated = window.history.state.state.tags_created;
   let roomHash = window.history.state.state.roomHash;
   let roomId = window.history.state.state.room_id;
   console.log("This is the room id", roomId);
   let cookie = new Cookies();
   let [topicTable, setTopicTable] = useState([]);



   function handleCloseRoom() {
      // axios.patch("/rooms/")
      axios.patch("rooms/finish", { host_id: cookie.get("user_id"), room_id: roomId })
         .then(res => {
            console.log(res);
            window.location = "/create";
         })
   }
   function fetchTopicTableInfo(questions) {
      let topicTableArray = [];
      let tagCountObject = {};
      for (let question of questions) {
         for (let tag of question.tags_selected) {
            let tagUC = tag.toString().toUpperCase();
            if (tagCountObject[tagUC] === undefined) {
               tagCountObject[tagUC] = { question: [question.query], count: 1 };
               topicTableArray = [...topicTableArray, { tag: tagUC, question: [question.query], count: 1 }];
            }
            else {
               tagCountObject[tagUC] = { question: [...tagCountObject[tagUC].question, question.query], count: tagCountObject[tagUC]["count"] += 1 };
               topicTableArray = [...topicTableArray,  {tag: tagUC, ...tagCountObject[tagUC]}];
            }
         }
      }
      // console.log("This is tagCountObject);
      console.log(topicTableArray);
      // console.log(tagCountObject);
      topicTableArray.sort(function(a,b){
         return b.count - a.count;
      })
      setTopicTable(topicTableArray);
   }
   // for (const question in questions){
   //    setTopicTable([...topicTable, {questions: questions[question].query, tags: questions[question].tags_selected}]);
   // }



   return (
      <div className="chatroom">
         <h1>Room Hash: {roomHash}</h1>
       
      
         <div className="topic">
            {tagsCreated.map((tags, index) => {
               return <p key={index}>{tags}</p>;
            })}
         </div>
         <div className="chatroom-question">
            <h3>Chatroom</h3>
            <QuestionOutput fetchTopicTableInfo={fetchTopicTableInfo} />
         </div>
         <button onClick={handleCloseRoom}>Close room</button>
         <div></div>
         {topicTable.length > 0 && <TopicTableContainer topicTable = {topicTable}/>}
      </div>
   )
}