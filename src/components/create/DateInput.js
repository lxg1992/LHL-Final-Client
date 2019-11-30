import React, { useState } from "react";
import TopicInput from "./TopicInput";
import NameInput from "./NameInput";
function DateInput(props) {
  const [datetimeStart, setDatetimeStart] = useState();
  const [datetimeEnd, setDatetimeEnd] = useState();
  const [submitHandled, setSubmitHandled] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  function handleDateSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements.date_start.value);
    let startDate = e.target.elements.date_start.value;
    let startTime = e.target.elements.time_start.value;
    let endTime = e.target.elements.time_end.value;

    let startingDate = new Date(startDate + "T" + startTime + ":00");
    let endingDate = new Date(startDate + "T" + endTime + ":00")
    // console.log(startingDate);
    // console.log(endingDate);
    // this.setState(() => {
    //   return (
    //     {
    //       datetime_start: startingDate,
    //       datetime_end: endingDate,
    //     }
    //   )
    // })
    setDatetimeStart(startingDate);
    setDatetimeEnd(endingDate);
    setSubmitHandled(true);
  }

  function reset(){
    setDatetimeStart();
    setDatetimeEnd();
    setSubmitHandled(false);
    setBackButtonClicked(false);
  }
  return (
    <div>
    { backButtonClicked && <NameInput />}
    {console.log("Starting time", datetimeStart)}
    {console.log("Ending time", datetimeEnd)}
      {submitHandled ? <TopicInput datetimeStart = {datetimeStart} datetimeEnd = {datetimeEnd} name = {props.name} reset = {reset} reinitializeEverything = {props.reinitializeEverything} handleCreateRoomComplete={props.handleCreateRoomComplete}/> :
      <div>  
      <form onSubmit={handleDateSubmit}>
          <h4>When would you like to start?</h4>
          Starting on: <input type="date" name="date_start" />
          From: <input type="time" name="time_start" />
          To: <input type="time" name="time_end" />
          <button>Set times and dates</button>
        </form>
        <button onClick = {props.reset}>BACK</button>
        </div>
      }
      </div>
  )
}

export default DateInput;