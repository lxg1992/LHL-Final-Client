import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";
import "./Dashboard.scss";
import { create } from "domain";
import Cookies from "universal-cookie";
import "./Dashboard.scss";
import "./Rooms.scss";
import "../join/QuestionInput";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

function Dashboard(props) {
  const cookie = new Cookies();
  let [user, setUser] = useState(cookie.get("user_id"));
  const [pastRooms, setPastRooms] = useState([]);
  const [currentRooms, setCurrentRooms] = useState([]);
  const [futureRooms, setFutureRooms] = useState([]);
  // const [createButtonClicked, setCreateButtonClicked] = useState(false)
  // const [unusedState, setUnusedState] = useState();
  // const forceUpdate = useCallback(() => setUnusedState({}), []);
  // console.log(cookie.get("token"));
  // console.log(cookie.get("user_id"));
  // setUser(user = cookie.get("user_id"))

  // if(cookie){
  //   console.log(cookie);
  // }

  let [reinitialize, setReinitialize] = useState(1);
  let [roomRedirect, setRoomRedirect] = useState(false);
  let [roomHash, setRoomHash] = useState();
  let history = useHistory();

  useEffect(() => {
    Promise.all(
      [
        Promise.resolve(axios.get(`users/${user}/rooms/current`)),
        Promise.resolve(axios.get(`users/${user}/rooms/future`)),
        Promise.resolve(axios.get(`users/${user}/rooms/past`))])
      .then(res => {
        // console.log(res[0].data)
        // console.log(res[1].data)

        setCurrentRooms(res[0].data);
        setFutureRooms(res[1].data);
        setPastRooms(res[2].data);
      });
  }, []);

  const handleDelete = (roomToDelete, timeStarted) => {
    console.log(parseInt(user));
    console.log(429);
    console.log(parseInt("429"));
    console.log(roomToDelete);
    axios.delete(`rooms/delete`, { data: { host_id: user, room_id: roomToDelete } })
      .then(res => {
        console.log(res);
      }).then(() => {
        Promise.all(
          [
            Promise.resolve(axios.get(`users/${user}/rooms/current`)),
            Promise.resolve(axios.get(`users/${user}/rooms/future`)),
            Promise.resolve(axios.get(`users/${user}/rooms/past`))])
          .then(res => {
            // console.log(res[0].data)
            // console.log(res[1].data)

            setCurrentRooms(res[0].data);
            setFutureRooms(res[1].data);
            setPastRooms(res[2].data);
          })
      })
    // let timeNow = new Date();
    //   let timeComparator = new Date(timeStarted.replace(' ', 'T'));

    //   console.log(timeNow >= timeComparator);
    //   if(timeNow > timeComparator){
    //   let filteredCurrentRooms = currentRooms.filter((rooms) => {
    //     // console.log(rooms.id);
    //     // roomT
    //     return rooms.id == roomToDelete;
    //   });
    //   console.log(filteredCurrentRooms[0].id);
    // }
    // else{
    //   let filteredFutureRooms = futureRooms.filter((rooms) => {
    //     return rooms.id !== roomToDelete
    //   })
    //   console.log(filteredFutureRooms);

  }

  // const handleCreateRoomComplete = () => {
  //   Promise.all(
  //     [
  //       Promise.resolve(axios.get(`users/${user}/rooms/current`)),
  //       Promise.resolve(axios.get(`users/${user}/rooms/future`)),
  //       Promise.resolve(axios.get(`users/${user}/rooms/past`))])
  //     .then(res => {
  //       // console.log(res[0].data)
  //       // console.log(res[1].data)

  //       setCurrentRooms(res[0].data);
  //       setFutureRooms(res[1].data);
  //       setPastRooms(res[2].data);
  //     });
  // }

  function reinitializeEverything() {
    setReinitialize(reinitialize = reinitialize + 1);
    console.log("I got called, reintialize got set to", reinitialize);
  }

  const handleCreateRoomComplete = () => {
    Promise.all(
      [
        Promise.resolve(axios.get(`users/${user}/rooms/current`)),
        Promise.resolve(axios.get(`users/${user}/rooms/future`)),
        Promise.resolve(axios.get(`users/${user}/rooms/past`))])
      .then(res => {
        // console.log(res[0].data)
        // console.log(res[1].data)

        setCurrentRooms(res[0].data);
        setFutureRooms(res[1].data);
        setPastRooms(res[2].data);
      }).then(() => reinitializeEverything());
  }

  function handleRoomActivation(roomToActivate) {
    axios.patch(`rooms/activate`, { room_id: roomToActivate, host_id: user })
      .then(res => {
        console.log(res);
        setRoomHash(res.data[0].room_hash)
        // setRoomRedirect(true);
        history.push({ pathname: "/main", state: { roomHash: res.data[0].room_hash, room_id: res.data[0].id, tags_created: res.data[0].tags_created } })
      })
  }
  
  function handleAnalysis(roomToAnalyze){
    console.log(roomToAnalyze);
    axios.get(`/questions/${roomToAnalyze}/analysis`)
    .then(res =>{
      console.log(res);
      history.push({pathname: "/analysis", state: {getIndividualTagsCount: res.data.getIndividualTagsCount, getQuestionsInvolvingTags: res.data.getQuestionsInvolvingTags, getTotalGuestsCount: res.data.getTotalGuestsCount, getTotalQuestionsByGuestId: res.data.getTotalQuestionsByGuestId, getTotalQuestionsCount:res.data.getTotalQuestionsCount, getTotalTagsCount: res.data.getTotalTagsCount}})
    })
  }
  // }
  return (
    <div className="dashboard--container">
      {
        // roomRedirect && <Link to={{ pathname: '/main', state: { hash: roomHash }}} />
      }

      <CreateRoom key={reinitialize} reinitializeEverything={reinitializeEverything} handleCreateRoomComplete={handleCreateRoomComplete} />


      {
        // console.log("This is future rooms from the dashboard", currentRooms)
      }
      <div className="display--rooms">
        <div className="content--room">
          <div className="title title--current">Current Rooms</div>
          <RoomList key="currentRooms" rooms={currentRooms} handleDelete={handleDelete} handleRoomActivation={handleRoomActivation} />
        </div>

        <div className="content--room">
          <div className="title title--upcoming">Future Rooms</div>
          <RoomList key="futureRooms" rooms={futureRooms} handleDelete={handleDelete} />
        </div>

        <div className="content--room">
          <div className="title title--past">Archived</div>
          <RoomList className="room__past" key="pastRooms" rooms={pastRooms} handleAnalysis={handleAnalysis} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;