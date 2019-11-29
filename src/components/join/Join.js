import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import { Redirect } from 'react-router-dom';
import Nav from "../login/Nav";
import Button from "@material-ui/core/Button";
import "./join.scss";

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
  <div className ="create--question">
    <Nav/>
    {roomHash ? <QuestionInput roomHash = {roomHash} /> :
    <form className="joinForm" onSubmit={handleSubmit}>
      <h1>Please enter the room you'd like to join.</h1>
      <div className="submitjoin">
        <input type = "text" name ="roomHash"/>
        <Button type="submit" variant="contained" >Join</Button>
      </div>
    </form>
    }
  </div>
)
}