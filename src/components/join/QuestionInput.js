import React, { Component } from "react";
import axios from "axios";

import TagList from "./TagList";
class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);


    this.state = {
      user_id: 3,
      messages: [],
      tags: [],
      hash: "m8dba"
    }
  }


  componentDidMount() {
    axios.get("/rooms/")
      .then(res => {
        // console.log(res.data[0].tags_created);
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
        user_id: this.state.user_id,
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
      <div>
        <h1>What are your questions?</h1>
        {console.log(this.state)}

        <form onSubmit={this.handleSubmit}>
          <TagList tagList={this.state.tags} handleCheck={this.handleCheck} />
          <input type="text" name="question" />
          <button>Submit</button>

        </form>

      </div>
    );
  }
}

export default QuestionInput;