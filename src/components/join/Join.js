import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import { Redirect } from 'react-router-dom';
import Nav from "../login/Nav";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Join(props){
const [roomHash, setRoomHash ] = useState();
const [guestId, setGuestId] = useState();


const cookie = new Cookies();
function handleSubmit(e){
  e.preventDefault();
  console.log(e.target.elements.roomHash.value);
  let roomHash = e.target.elements.roomHash.value;
  setRoomHash(roomHash);

  axios.post(`rooms/join/`, {user_id: cookie.get("user_id"), room_hash: roomHash })
  .then(res => {
    console.log(res);
    // console.log(res.data[0]);
    // let guest = res.data[0].id;
    // console.log("This is guest inside the aixos call in Join", guest);
    setGuestId(res.data[0].id);
  })
  // return <Redirect to='/target' />
}
return(
  <div className ="create--question">
    <Nav/>
  {roomHash && guestId ? <QuestionInput roomHash = {roomHash} guestId = {guestId} /> :
  <form onSubmit={handleSubmit}>
  <h1>Please enter the room you'd like to join.</h1>
  <input type = "text" name ="roomHash"/>
  <button>Submit</button>
  </form>
  }
  </div>
)
}