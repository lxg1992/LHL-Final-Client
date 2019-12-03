import React from "react";
import "./chatroom.scss";
import "./QuestionOutput";
import QuestionOutput from "./QuestionOutput";
import axios from "axios";
export default function Chatroom () {
   console.log("This is inside chatroom", window.history.state.state.tags_created);
   let tagsCreated = window.history.state.state.tags_created;
   let roomHash = window.history.state.state.roomHash;
   function handleCloseRoom(){
      
   }
   return (
      <div className="chatroom">
         <h2>Room Hash: {roomHash}</h2>
         <div className="chatroom-question">
            <div className="topic">
               <h4 className="today-topic">Today topic: </h4>
            { tagsCreated.map((tags, index) => { 
               return <div className="tag-topic" key = {index}>{tags}</div>;
            })}
            </div>
            <QuestionOutput/>
         </div>
         <button onClick = {handleCloseRoom}>Close room</button>
      </div>
   )
}