import React from "react";
import "./chatroom.scss";
export default function Chatroom () {
   return (
      <div className="chatroom">
         <div className="topic">
            <p>topic1</p>
            <p>topic2</p>
            <p>topic3</p>
         </div>
         <div className="chatroom-question">
            <h3>Chatroom</h3>
         </div>
      </div>
   )
}