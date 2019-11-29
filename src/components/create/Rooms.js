import React from "react";
function Rooms(props){
  return (
    <div>
    <h3>{props.room_name}</h3>
    <p>{new Date(props.datetime_start).toDateString()} to {new Date(props.datetime_end).toDateString()}</p>
    {props.handleDelete && <button onClick = {(e) => {props.handleDelete(props.id, props.datetime_start)}}>Delete Room</button>}
    
    </div>
  )
}

export default Rooms;