import React, { Component } from "react";
import TopicList from "./TopicList";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./Nameinput.scss";
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
    this.handleAnonPosting = this.handleAnonPosting.bind(this);
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
      room_hash: "",
      datetime_start: props.datetimeStart,
      datetime_end: props.datetimeEnd,
      allow_anonymous: false
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
          host_id: this.cookie.get("user_id"),
          topics: [],
          room_name: this.props.name,
          room_hash: "",
          datetime_start: this.props.datetimeStart,
          datetime_end: this.props.datetimeEnd,
          allow_anonymous: false
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
  handleAnonPosting(){
    this.setState((prevState) => {
      return (
        {
          allow_anonymous: !prevState.allow_anonymous
        }
      )
    })
  }
  render() {
    return (
      <div className="topic_input">
        {console.log("This is the entire state object", this.state)}
        {console.log("This is allow_anonymous", this.state.allow_anonymous)}
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
        <h2>Add Topics</h2>
        <form onSubmit={this.handleSubmit}>
          <input className="insert__name" type="text" name="topic" />
          <Button type="submit" className="add" variant="outlined">Add</Button>
        </form>
        <div>
          {this.state.topics.length > 0 && <TopicList topics={this.state.topics} handleDelete={this.handleDelete} />}
        </div>
        <div>
          <Button variant="contained" className="back" onClick ={this.resetWrapper}>Back</Button>
          <Button variant="contained" className="complete" type="submit" onClick={this.handleCreateRoom}>Complete</Button>
          <input type ="checkbox" id = "anon" name="allowAnonymous" onChange ={this.handleAnonPosting}/> <label htmlFor="anon">Allow anonymous posting?</label>
        </div>
      </div>
    );
  }

}

export default TopicInput;