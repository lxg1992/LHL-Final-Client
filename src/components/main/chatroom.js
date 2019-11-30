import React from "react";
import "./chatroom.scss";
import "./QuestionOutput";
import QuestionOutput from "./QuestionOutput";
export default function Chatroom () {
   console.log("This is inside chatroom", window.history.state.state.tags_created);
   let tagsCreated = window.history.state.state.tags_created;
   let roomHash = window.history.state.state.roomHash;

   return (
      <div className="chatroom">
         <h1>Room Hash: {roomHash}</h1>
         <div className="topic">
        { tagsCreated.map((tags, index) => { 
           return <p key = {index}>{tags}</p>;
        })}
         </div>
         <div className="chatroom-question">
            <h3>Chatroom</h3>
            <QuestionOutput/>
         </div>
      </div>
   )
}