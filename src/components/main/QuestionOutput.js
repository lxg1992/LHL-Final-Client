import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import QuestionList from "./QuestionList"
// class QuestionOutput extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       questions: [],
//       hash: "abces"
//     }
//   }

//   componentDidMount() {
//     axios.get(`http://172.46.2.148:3001/rooms/${this.state.hash}/questions`)
//         .then(res => {
//           // console.log(res.data);
//           // res.data.forEach((message) => { 
//           // console.log(message);
//           this.setState((prevState) => {
//             return (
//               {
//                 questions: res.data
//               }
//             )
//           })
//           // });
//         })
//         .catch(err => console.log(err))
//   }


//       // setInterval(() => {
//     //   return axios.get(`http://172.46.2.148:3001/rooms/${this.state.hash}/questions`)
//     //   .then(res => {
//     //     console.log(res.data);
//     //   })
//     // }, 3000);

//   componentDidUpdate(){
//     // setInterval(() => {
//     //   return axios.get(`http://172.46.2.148:3001/rooms/${this.state.hash}/questions`)
//     //   .then(res => {
//     //     console.log(res.data);
//     //   })
//     // }, 3000);

//   }
//   render(){
//     return (
//       <div>
//       {console.log(this.state.questions)}
//       <h1>Questions feed</h1>
//       <QuestionList questions={this.state.questions}></QuestionList>
//       </div>
//     )
//   }
// }


function QuestionOutput(props) {
  const [questions, setQuestions] = useState([]);
  const hash = window.history.state.state.roomHash;
  console.log("This is the props being passed in", window.history.state.state.roomHash);
  useEffect(() => {
    axios.get(`/rooms/${hash}/questions`)
      .then(res => {
        if (res.data !== questions)
          setQuestions(res.data);
      });
  }, []);


    useEffect(() => {
      const timer = setInterval(() => {
        console.log("5 seconds have passed");
      axios.get(`/rooms/${hash}/questions`)
        .then(res => {
          if(!res.data.error){
          console.log(res)
          if (res.data !== questions)
            setQuestions(res.data);
        }
        }).catch((err) => {console.log(err)});
      }, 5000);
      return () => {
        clearInterval(timer);
      }
    }, [questions]);
    
 // useEffect(() =>{
  //     axios.get(`http://172.46.2.148:3001/users`)
  //     .then(res =>{
  //       console.log(res);
  //     })
  // }, )

function banUser(room_id, guest_id){
  // let room_hash = hash;
  console.log("This is the room hash", room_id)
  console.log("This is the guest hash of user I want to ban", guest_id);
  axios.patch("guests/ban", {room_id, guest_id})
  .then(res => {
    console.log("This is the ban user response", res);
  })
}

  return (
    <div>
      {console.log(questions)}
 
      {questions.length > 0 && <QuestionList questions={questions} banUser = {banUser}></QuestionList>}
    </div>
  );


}
export default QuestionOutput;