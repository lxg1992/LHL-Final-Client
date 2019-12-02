import React from "react";
import "./chatroom.scss";
import "./QuestionOutput";
import QuestionOutput from "./QuestionOutput";
import axios from "axios";
import Cookies from "universal-cookie";
import { conditionalExpression } from "@babel/types";
export default function Chatroom () {
   console.log("This is inside chatroom", window.history.state.state.tags_created);
   let tagsCreated = window.history.state.state.tags_created;
   let roomHash = window.history.state.state.roomHash;
   let roomId = window.history.state.state.room_id;
   console.log("This is the room id", roomId);
   let cookie = new Cookies();
   function handleCloseRoom(){
      // axios.patch("/rooms/")
      axios.patch("rooms/finish", {host_id: cookie.get("user_id"), room_id: roomId})
      .then( res => {
         console.log(res);
         window.location="/create";
      })
   }
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
         <button onClick = {handleCloseRoom}>Close room</button>
      </div>
   )
}