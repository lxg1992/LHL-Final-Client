import React, { Component } from "react";

import TagList from "./TagList";
class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    let checkboxes = props.tagList.map(value => (

      { [value.name]: false }
    ));

    this.state = {
      user_id: 1,
      messages: [],
      tags: checkboxes
    }
  }

  handleCheck(e) {
    let checked = e.target.value;
    console.log(e.target.value);
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

    // console.log(e.target.getAttribute("checkbox"));


    this.setState((prevState) => {
      let selectedTags = [];
      let queryTags = prevState.tags.filter(function(tag){
       return Object.values(tag).includes(true);
      });


      // let selectorTags = queryTags.forEach(function(x){
      //   selectedTags.push(Object.keys(x))[0];
      // });
      queryTags.forEach(function(x){
        selectedTags.push(Object.keys(x)[0]);
      });

      console.log(selectedTags);
      return (
        {
          messages: [...prevState.messages, { message: message, tags: selectedTags }]
        }
      )

    })
  }

  render() {
    return (
      <div>
        <h1>What are your questions?</h1>
        {console.log(this.state)}

        <form onSubmit={this.handleSubmit}>
          <TagList tagList={this.props.tagList} handleCheck={this.handleCheck} />

          <input type="text" name="question" />
          <button>Submit</button>
        </form>

      </div>
    );
  }
}

export default QuestionInput;