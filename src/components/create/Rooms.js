import React from "react";
function Rooms(props){
  return (
    <div>
    <h3>{props.room_name}</h3>
    <p>{new Date(props.datetime_start).toDateString()}, {new Date(props.datetime_start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} to {new Date(props.datetime_end).toDateString()}, {new Date(props.datetime_end).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
    {props.handleRoomActivation && <button onClick = {(e) => {props.handleRoomActivation(props.id)}}>Join</button>}
    {props.handleDelete && <button onClick = {(e) => {props.handleDelete(props.id, props.datetime_start)}}>Delete Room</button>}
    </div>
  )
}

export default Rooms;