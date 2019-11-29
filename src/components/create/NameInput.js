import React, { useState } from "react"
import DateInput from "./DateInput";
import CreateRoom from "./CreateRoom"
function NameInput(props) {
  
  const [roomName, setRoomName] = useState();
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let nameInputted = e.target.elements.name.value;
    setRoomName(nameInputted);
    setNameSubmitted(true);
  }

  function reset(){
    setRoomName();
    setNameSubmitted(false);
    setBackButtonClicked(false);
  }

  return (
    <div>
      { backButtonClicked && <CreateRoom />}
      
      { !backButtonClicked && nameSubmitted ? <DateInput name={roomName} reset = {reset} reinitializeEverything = {props.reinitializeEverything} handleCreateRoomComplete={props.handleCreateRoomComplete}/> :
        <div>
        <form onSubmit={handleSubmit}>
        <h4>What would you like to call your room?</h4>
          <input type="text" name="name" />
          <button>Submit</button>
        </form>
        <button onClick ={props.reset}>Back</button>
        </div>
      }
    
    </div>
  )
}

export default NameInput;