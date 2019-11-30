import React, {useState} from "react";
import { Link } from 'react-router-dom';
import TopicInput from "./TopicInput";
import DateInput from "./DateInput";
import NameInput from "./NameInput";
import Button from "@material-ui/core/Button";

function CreateRoom(props){
  let [createButtonClicked, setCreateButtonClicked] = useState(false);

  function reset(){
    setCreateButtonClicked(false);
  }


  return(
    <div className ="create--room">
    {console.log(createButtonClicked)}
    { 
      // !props.backButtonClicked && <h1>Create a Room</h1>
    }
    {createButtonClicked ? <NameInput reset ={reset} reinitializeEverything = {props.reinitializeEverything} handleCreateRoomComplete={props.handleCreateRoomComplete} /> :  <Button className="create_button" onClick = {() => setCreateButtonClicked(!createButtonClicked)}>Create a new room</Button>}
    
    
    </div>
  )
}

export default CreateRoom;