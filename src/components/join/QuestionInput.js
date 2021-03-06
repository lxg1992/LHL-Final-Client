import React, { Component } from "react";
import TagList from "./TagList";
import Button from '@material-ui/core/Button';
import "./questioninput.scss";
import axios from "axios";
import Cookies from "universal-cookie";
import nlp from "compromise";

class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.clearForm = this.clearForm.bind(this);

    const cookie = new Cookies();
    // this.buttonDisabled = false;
    // console.log(window.history.state.state.guest_id);
    this.state = {
      guest_id: props.guestId || window.history.state.state.guest_id,
      messages: [],
      tags: [],
      hash: props.roomHash || window.history.state.state.roomHash,
      buttonDisabled: false,
      postSuccessMessage: "",
      errorMessage: ""
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

      }).catch(err => console.log("THIS IS THE ERROR", err.response.data.error));
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
  clearForm() {
    // console.log(document.getElementsByName("question")[0].value());
    document.getElementById("question-form").reset();
  }

  handleSubmit(e) {
    e.preventDefault();

    let message = e.target.elements.question.value;


    // let symbolFilter = message.replace(/[?]/g,"");

    let doc1 = nlp(message);
    doc1.nouns().toSingular();
    
    let nouns = doc1.match('#Noun').not("#Pronoun")
    let nlpArray = nouns.map(d => {

      return d.text("reduced");
    })

    console.log(nlpArray);
    // let messageModifed = message.replace(/\?/g, "");
    // let messageChecker = nlp(message).nouns().toTitleCase().normalize({punctuation: true}).out('array');
    // let messageChecker = nlp(messageModifed).nouns().toTitleCase().normalize({punctuation: true}).splitBefore(",").out('array');

    // messageChecker.map(message =>{
    //   if (message[message.length - 1] === "?"){
    //     let thinger = message[message.length - 1].pop();
    //     console.log(thinger);
    //   }
    // });



    console.log("This is supposed to be NLP", nlpArray);

    // console.log(e.target.getAttribute("checkbox"));
    // message = "";
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
      if (nlpArray.length > 0) {
        selectedTags = [...selectedTags, ...nlpArray];
      }
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
          this.disableButton();
        })
        .catch(error => {
          console.log(error.response.data.error)
          this.setState(() => {
            return (
              {
                errorMessage: error.response.data.error
              }
            )
          })

        })

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
  // disableButton(){
  //   this.buttonEnabled = !this.buttonEnabled;
  //   setTimeout(() => {
  //     this.enableButton()
  //   })

  // }
  disableButton() {
    this.clearForm();
    this.setState((prevState) => {
      return (
        {
          buttonDisabled: !prevState.buttonDisabled,
          postSuccessMessage: "Post Successful",
          errorMessage: ""
        }
      )
    })
    setTimeout(() => {
      this.enableButton();
    }, 10000);
  }

  enableButton() {
    this.setState((prevState) => {
      return (
        {
          buttonDisabled: !prevState.buttonDisabled,
          postSuccessMessage: ""
        }
      )
    })

    // this.state.buttonDisabled = false;
  }

  render() {
    return (
      <div className="question--input">
        <form id="question-form" onSubmit={this.handleSubmit}>
          <h1>What are your questions?</h1>
          <div className="tagList">
            <TagList tagList={this.state.tags} handleCheck={this.handleCheck} />
          </div>
          {this.state.postSuccessMessage ? <div className="success">{this.state.postSuccessMessage}</div> : null}
          {this.state.errorMessage ? <div className="error">{this.state.errorMessage} </div> : null}
          <input className="input--question" type="text" name="question" wrap="hard" placeholder="please enter your quesition here" />
          <Button type="submit" variant="contained" disabled={this.state.buttonDisabled}>Submit</Button>

        </form>

      </div>
    );
  }
}

export default QuestionInput;