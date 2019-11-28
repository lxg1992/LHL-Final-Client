import React, { Component } from "react";
import TagList from "./TagList";
import Button from '@material-ui/core/Button';
import "./questioninput.scss";
import axios from "axios";
import Cookies from "universal-cookie";

class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    const cookie = new Cookies();
    this.state = {
      guest_id: cookie.get("user_id"),
      messages: [],
      tags: [],
      hash: props.roomHash
    }
    // this.state = {
    //   guest_id: cookie.get("user_id"),
    //   messages: [],
    //   tags: [],
    //   hash: "abces"
    // }
  }


  componentDidMount() {
    axios.get(`/rooms/${this.state.hash}/tags`)
      .then(res => {
        console.log(res.data[0].tags_created);
        let tagList = res.data[0].tags_created;
        let checkboxes = tagList.map(value => {
          return { [value]: false }
        });
        console.log(checkboxes)
        this.setState({ tags: checkboxes })

      }).catch(err => console.log(err));
  }

  handleCheck(e) {
    let checked = e.target.value;
    // console.log(e.target.value);
    this.setState((prevState) => {
      let toggler = prevState.tags.find(tag => tag[checked] === false || tag[checked] === true);
      return (
        toggler[checked] = !toggler[checked]
      )
    })
  }


  handleSubmit(e) {
    e.preventDefault();

    let message = e.target.elements.question.value;

    
    console.log(e.target.getAttribute("checkbox"));

    this.setState((prevState) => {
      let selectedTags = [];
      let queryTags = prevState.tags.filter(function (tag) {
        return Object.values(tag).includes(true);
      });


      // let selectorTags = queryTags.forEach(function(x){
      //   selectedTags.push(Object.keys(x))[0];
      // });
      queryTags.forEach(function (x) {
        selectedTags.push(Object.keys(x)[0]);
      });

      // console.log(selectedTags);
      return (
        {
          messages: [{ message: message, tags: selectedTags }]
        }
      )
    }, () => {
      let output = {
        guest_id: this.state.guest_id,
        message: this.state.messages[0].message,
        tags: this.state.messages[0].tags
      }

      console.log(output)
      
      console.log(axios)
      return axios.post(`/rooms/${this.state.hash}/questions`, output)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err))
    });


    // let output = {
    //   user_id: this.state.user_id,
    //   message: this.state.messages,
    //   tags: this.state.messages.tags
    // }

    // return axios.post(`rooms/${this.state.hash}/questions`, {output})
    // .then(res => {
    //   console.log(res);
    // })

  }

  // componentDidUpdate(){
  //   console.log("componenet did update")
  // }

  render() {
    return (
      <div className="question--input">
        <h1>What are your questions?</h1>
        {console.log(this.state)}

        <form onSubmit={this.handleSubmit}>
          <TagList tagList={this.state.tags} handleCheck={this.handleCheck} />
          <input className="input--question" type="text" name="question" wrap="hard" placeholder="please enter your quesition here" />
          <button>Submit</button>

        </form>

      </div>
    );
  }
}

export default QuestionInput;