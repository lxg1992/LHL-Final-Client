import React from "react";
import Button from "@material-ui/core/Button";

function Rooms(props){
  return (
    <div className="room">
    <h3>{props.room_name}</h3>
    <p>{props.datetime_start} to {props.datetime_end}</p>
    {props.handleDelete && <Button type="submit" variant="contained" className ="deleteRoom" onClick = {(e) => {props.handleDelete(props.id, props.datetime_start)}}>Remove</Button>}
    </div>
  )
}
export default Rooms;