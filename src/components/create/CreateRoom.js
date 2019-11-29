import React, {useState} from "react";
import { Link } from 'react-router-dom';
import TopicInput from "./TopicInput";
import DateInput from "./DateInput";
import NameInput from "./NameInput";

function CreateRoom(props){
  let [createButtonClicked, setCreateButtonClicked] = useState(false);

  function reset(){
    setCreateButtonClicked(false);
  }


  return(
    <div>
    {console.log(createButtonClicked)}
    { !props.backButtonClicked && <h1>Create a Room</h1>}
    {createButtonClicked ? <NameInput reset ={reset} reinitializeEverything = {props.reinitializeEverything} handleCreateRoomComplete={props.handleCreateRoomComplete} /> :  <button onClick = {() => setCreateButtonClicked(!createButtonClicked)}>Create</button>}
    
    
    </div>
  )
}

export default CreateRoom;