import React, { Component } from "react";
import TopicList from "./TopicList";
import axios from "axios";
import Cookies from "universal-cookie";

class TopicInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleDateSubmit = this.handleDateSubmit.bind(this);
    this.reset = this.reset.bind(this);
    this.resetWrapper = this.resetWrapper.bind(this);
    const cookie = new Cookies();
    // const time_start = new Date();
    // const time_end = new Date();
    // time_end.setMinutes(time_start.getMinutes() + 40);
    // this.state = {
    //   host_id: 1,
    //   topics: [],
    //   room_name: "Fundamentals of React",
    //   room_hash: "fgsfds",
    //   datetime_start: "",
    //   datetime_end: ""

    // }
    this.state = {
      host_id: cookie.get("user_id"),
      topics: [],
      room_name: props.name,
      room_hash: "fgsfds",
      datetime_start: props.datetimeStart,
      datetime_end: props.datetimeEnd

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const topic = e.target.elements.topic.value.trim();
    this.setState((prevState) => {
      return (
        {
          topics: [...prevState.topics, topic]
        }
      )
    });
    e.target.elements.topic.value = "";
    // axios.post("")
    // console.log(topic);
  }

  handleDelete(topicToRemove) {
    console.log(topicToRemove);

    let removeElement = this.state.topics.filter((topic) => topic !== topicToRemove);
    console.log(removeElement);
    // console.log(removeElement);
    this.setState(() => {
      return (
        {
          topics: removeElement
        }
      )
    })
  }
  handleDateSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements.date_start.value);
    let startDate = e.target.elements.date_start.value;
    let startTime = e.target.elements.time_start.value;
    let endTime = e.target.elements.time_end.value;

    let startingDate = new Date(startDate + "T" + startTime + ":00Z");
    let endingDate = new Date(startDate + "T" + endTime + ":00Z")
    // console.log(startingDate);
    // console.log(endingDate);
    this.setState(() => {
      return (
        {
          datetime_start: startingDate,
          datetime_end: endingDate,
        }
      )
    })
  }
  reset(){
    this.setState(() =>{
      return (
        {
          host_id: 1,
          topics: [],
          room_name: this.props.name,
          room_hash: "fgsfds",
          datetime_start: this.props.datetimeStart,
          datetime_end: this.props.datetimeEnd
    
        }
      )
    })
  }
  resetWrapper(){
    this.props.reset();
    this.reset();
  }
  handleCreateRoom() {
    // console.log("akgkdfnkgs");
    // window.location.reload()
    
    axios.post("rooms/", this.state)
      .then(res => {
        // console.log(res.data.room_hash);
        console.log(res.data[0].room_hash);
      })
      .then(() => this.props.handleCreateRoomComplete());
      //implement soft refresh
  }
  render() {
    return (
      <div>
        {console.log(this.state)}
        {console.log(this.state.datetime_end)}
        {
        // <h1>Create Room</h1>
        // <form onSubmit={this.handleDateSubmit}>
        //   <h4>When would you like to start?</h4>
        //   Starting on: <input type="date" name="date_start" />
        //   From: <input type="time" name="time_start" />
        //   To: <input type="time" name="time_end" />
        //   <button>Set times and dates</button>
        // </form>
        }
        <h1>Add Topics</h1>
        {this.state.topics.length > 0 && <TopicList topics={this.state.topics} handleDelete={this.handleDelete}  />}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="topic" />
          <button>Submit</button>
        </form>
        <button onClick ={this.resetWrapper}>Back</button>
        <button onClick={this.handleCreateRoom}>Complete</button>
      </div>
    );
  }

}

export default TopicInput;