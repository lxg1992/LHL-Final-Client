import React, {Component} from "react";
import TopicList from "./TopicList";

class TopicInput extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
    this.state = {
      topics: []
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    const topic = e.target.elements.topic.value.trim();
    this.setState( (prevState) => {
      return (
        {
          topics: [...prevState.topics, topic]
        }
      )
    });
    // console.log(topic);
  }

  handleDelete(e){
    console.log(e.target.elements.topic.value);
    let targetElement = e.target.text;
    let removeElement = this.state.topics.filter((topic) => topic !== targetElement);
    console.log(removeElement);
    // this.setState(() => {
    //   return(
    //     {
    //       topics: removeElement
    //     }
    //   )
    // })
  }
  render(){
    return(
    <div>
    {console.log(this.state)}
      <form onSubmit = {this.handleSubmit}>
      <input type="text" name = "topic"/>
      <button>Submit</button>
      </form>
      {this.state.topics.length > 0 && <TopicList topics = {this.state.topics} handleDelete = {this.handleDelete} />}
    </div>
    );
  }

}

export default TopicInput;