import React, { useState } from "react"
import DateInput from "./DateInput";
import CreateRoom from "./CreateRoom"
import "./Nameinput.scss";
import Button from "@material-ui/core/Button";
function NameInput(props) {

  const [roomName, setRoomName] = useState();
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  const [errorState, setErrorState] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let nameInputted = e.target.elements.name.value;
    if(nameInputted){
    setErrorState("");
    setRoomName(nameInputted);
    setNameSubmitted(true);
    }
    else{
      setErrorState("Please enter a room name.");
      // console.log("This is nameSubmitted", nameSubmitted);
    }
  }

  function reset() {
    setRoomName();
    setNameSubmitted(false);
    setBackButtonClicked(false);
  }

  return (
    <div className="name__container">
    {console.lo}
    {errorState && <div className="error"><p>{errorState}</p></div>}
      {backButtonClicked && <CreateRoom />}

      {!backButtonClicked && nameSubmitted ? <DateInput name={roomName} reset={reset} reinitializeEverything={props.reinitializeEverything} handleCreateRoomComplete={props.handleCreateRoomComplete} /> :
        <div className="nameinput">
          <h4>What would you like to call your room?</h4>
          <form onSubmit={handleSubmit}>
            <input className="insert__name" type="text" name="name" />
            <div className="button--name">
              <Button variant="contained" onClick={props.reset}>Back</Button>
              <Button variant="contained" className="submit" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      }

    </div>
  )
}

export default NameInput;