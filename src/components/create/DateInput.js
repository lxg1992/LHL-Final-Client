import React, { useState } from "react";
import TopicInput from "./TopicInput";
import "./DateInput.scss";
import NameInput from "./NameInput";
import "./DateInput.scss";
import "./Nameinput.scss";
import Button from "@material-ui/core/Button";
function DateInput(props) {
  const [datetimeStart, setDatetimeStart] = useState();
  const [datetimeEnd, setDatetimeEnd] = useState();
  const [submitHandled, setSubmitHandled] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  const [errorState, setErrorState] = useState("");

  let startDateModifier= new Date();
  startDateModifier = startDateModifier.setDate(startDateModifier.getDate());
  let startDateNow = new Date(startDateModifier);

  let timeEndModifier = new Date();
  timeEndModifier= timeEndModifier.setHours(timeEndModifier.getHours() + 1);
  let timeEnd = new Date(timeEndModifier);

  function handleDateSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements.date_start.value);
    let startDate = e.target.elements.date_start.value;
    let startTime = e.target.elements.time_start.value;
    let endTime = e.target.elements.time_end.value;
    
    let startingDate = new Date(startDate + "T" + startTime + ":00");
    let endingDate = new Date(startDate + "T" + endTime + ":00")

    setDatetimeStart(startingDate);
    setDatetimeEnd(endingDate);
    setSubmitHandled(true);
  }

  function reset() {
    setDatetimeStart();
    setDatetimeEnd();
    setSubmitHandled(false);
    setBackButtonClicked(false);
  }
  
  return (
    <div>
      {console.log(startDateNow)}
      {console.log( new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}))}
      {backButtonClicked && <NameInput />}
      {console.log("Starting time", datetimeStart)}
      {console.log("Ending time", datetimeEnd)}
      {submitHandled ? <TopicInput datetimeStart={datetimeStart} datetimeEnd={datetimeEnd} name={props.name} reset={reset} reinitializeEverything={props.reinitializeEverything} handleCreateRoomComplete={props.handleCreateRoomComplete} /> :
        <div className="nameinput">
        <h4>When would you like to start?</h4>
          <form onSubmit={handleDateSubmit}>
            Starting on: <input className="input_date" type="date" name="date_start" min={startDateNow.toISOString().split("T")[0]} defaultValue ={startDateNow.toISOString().split("T")[0]}/>
            From: <input className="input_date" type="time" name="time_start" min ={new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})} max= "23:59" defaultValue={new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}/>
            To: <input className="input_date" type="time" name="time_end" min ={new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})} max="23:59" defaultValue={timeEnd.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})} />
            
            <div className="button--time">
              <Button variant="contained" onClick={props.reset}>BACK</Button>
              <Button variant="contained" className="submit" type="submit">Set times and dates</Button>
            </div>
          </form>
        </div>
      }
    </div>
  )
}

export default DateInput;