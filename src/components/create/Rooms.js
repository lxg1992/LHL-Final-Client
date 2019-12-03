import React from "react";
import Button from "@material-ui/core/Button";

function Rooms(props){
  return (
    <div className ="room">
    <h3>{props.room_name}</h3>
      <p>{new Date(props.datetime_start).toDateString()}, {new Date(props.datetime_start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} to {new Date(props.datetime_end).toDateString()}, {new Date(props.datetime_end).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
      <div className = "joinCurrentButton">{props.handleRoomActivation && <Button variant="contained" color="primary" onClick = {(e) => {props.handleRoomActivation(props.id)}}>Join</Button>}
      {props.handleDelete && <Button type="submit" variant="contained" className ="deleteRoom" onClick = {(e) => {props.handleDelete(props.id, props.datetime_start)}}>Delete Room</Button>}
      {props.handleAnalysis && <Button type="submit" variant="contained" onClick={(e) => {props.handleAnalysis(props.id)}}>Analysis</Button>}
      </div>
    </div>
  )
}
export default Rooms;