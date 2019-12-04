import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./AnonJoin.scss";
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
const [errorState, setErrorState] = useState("");
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
  .catch(error =>{
    setErrorState(error.response.data.error);
    console.log(error.response.data.error);
  })
  // return <Redirect to='/target' />
}
return(
  <div>
    {console.log(guestId)}
    {console.log("This is the errorState", errorState)}
    {errorState && <div className="error"><p>{errorState}</p></div>}
    <form className ="joinAnonymous" onSubmit={handleSubmit}>
      <h2>Enter key number to join</h2>
      <div className="askAnon">
        <input type = "text" name ="roomHash"/>
        <Button ariant="contained" color="primary" type ="submit" variant="contained">Join</Button>
      </div>
    </form>
  </div>
)
}