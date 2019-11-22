import React, { Component } from "react";

class QuestionOutput extends Component {
  constructor(props){
    super(props);

    this.setState = {
      questions: []
    }
  }


  render(){
    return (
      <div>
      <h1>Questions feed</h1>
      </div>
    )
  }
}