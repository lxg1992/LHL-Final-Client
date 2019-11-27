import React from "react";
function Rooms(props){
  return (
    <div>
    <h3>{props.room_name}</h3>
    <p>{props.datetime_start} to {props.datetime_end}</p>
    {props.handleDelete && <button onClick = {(e) => {props.handleDelete(props.id, props.datetime_start)}}>Delete Room</button>}
    </div>
  )
}

export default Rooms;