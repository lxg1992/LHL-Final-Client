import React from "react";
import Rooms from "./Rooms";

function RoomList(props){
  // console.log("This is the RoomList props", props.rooms);
  
  return (
    
    Object.keys(props.rooms).map((room, index) => {
      // console.log("This is the room mapper from inside the map in RoomList", props.rooms);
      // console.log("This is the room parameter inside the map in RoomList", room);
      // console.log("This is from inside the map in RoomList", props.rooms[room]);
      return <Rooms handleDelete = {props.handleDelete} key= {props.rooms[room].id} id ={props.rooms[room].id} host_id = {props.rooms[room].host_id} room_name={props.rooms[room].room_name} datetime_start={props.rooms[room].datetime_start} datetime_end = {props.rooms[room].datetime_end} />
    })
  )
}
export default RoomList;