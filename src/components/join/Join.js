import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import { Redirect } from 'react-router-dom'

export default function Join(props){
const[roomHash, setRoomHash ] = useState();

function handleSubmit(e){
  e.preventDefault();
  console.log(e.target.elements.roomHash.value);
  let roomHash = e.target.elements.roomHash.value;
  setRoomHash(roomHash);
  // return <Redirect to='/target' />
}
return(
  <div>
  {roomHash ? <QuestionInput roomHash = {roomHash} /> :
  <form onSubmit={handleSubmit}>
  <h1>Please enter the room you'd like to join.</h1>
  <input type = "text" name ="roomHash"/>
  <button>Submit</button>
  </form>
  }
  </div>
)
}