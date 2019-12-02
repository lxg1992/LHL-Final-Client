import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "../join/join.scss";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";


export default function Join(props){
const [roomHash, setRoomHash ] = useState();
const [guestId, setGuestId] = useState();
let history = useHistory();

const cookie = new Cookies();
function handleSubmit(e){
  e.preventDefault();
  console.log(e.target.elements.roomHash.value);
  let roomHash = e.target.elements.roomHash.value;
  setRoomHash(roomHash);

  axios.post(`rooms/join/anonymous`, {room_hash: roomHash })
  .then(res => {
    console.log(res);
    // setGuestId(res.data[0].id);
    // console.log(res.data[0]);
    let guest_id = res.data[0].id;
    // return guestId;
    // console.log("This is guest inside the aixos call in Join", guest);
    history.push({ pathname: "/guestJoin", state:{ guest_id, roomHash }});
  })
  // return <Redirect to='/target' />
}
return(
  <div className ="create--question">
  {console.log(guestId)}
  <form className ="joinForm" onSubmit={handleSubmit}>
  <h1>Join a room as anonymous.</h1>
  <div className="submitjoin">
  <input type = "text" name ="roomHash"/>
  <Button type ="submit" variant="contained">Join</Button>
  </div>
  </form>
  </div>
)
}