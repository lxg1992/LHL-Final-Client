import React, {useState} from "react";
import { Link } from 'react-router-dom';
import TopicInput from "./TopicInput";
import DateInput from "./DateInput";
import NameInput from "./NameInput";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from "@material-ui/core/Button";

function CreateRoom(props){
  let [createButtonClicked, setCreateButtonClicked] = useState(false);

  function reset(){
    setCreateButtonClicked(false);
  }


  return(
    <div className="create--room">
    {console.log(createButtonClicked)}
    { !props.backButtonClicked}
    {createButtonClicked ? <NameInput reset ={reset} /> :  <button className="create_button" onClick = {() => setCreateButtonClicked(!createButtonClicked)}>Create new room</button>}
    </div>
  )
}

export default CreateRoom;