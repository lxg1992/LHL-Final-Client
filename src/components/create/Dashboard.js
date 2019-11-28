import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";
import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";
import { create } from "domain";
import Cookies from "universal-cookie";
function Dashboard(props) {
  const cookie = new Cookies();
  let [user, setUser] = useState(cookie.get("user_id"));
  const [pastRooms, setPastRooms] = useState([]);
  const [currentRooms, setCurrentRooms] = useState([]);
  const [futureRooms, setFutureRooms] = useState([]);
  // const [createButtonClicked, setCreateButtonClicked] = useState(false)
  const [unusedState, setUnusedState] = useState();
  const forceUpdate = useCallback(() => setUnusedState({}), []);
  // console.log(cookie.get("token"));
  // console.log(cookie.get("user_id"));
  // setUser(user = cookie.get("user_id"))

  // if(cookie){
  //   console.log(cookie);
  // }
  useEffect(() => {
    Promise.all(
    [
    Promise.resolve(axios.get(`users/${user}/rooms/current`)), 
    Promise.resolve(axios.get(`users/${user}/rooms/future`)), 
    Promise.resolve(axios.get(`users/${user}/rooms/past`))])
    .then( res => {
      // console.log(res[0].data)
      // console.log(res[1].data)

      setCurrentRooms(res[0].data);
      setFutureRooms(res[1].data);
      setPastRooms(res[2].data);
    });
  }, []);

  const handleDelete = (roomToDelete, timeStarted) => {
    console.log(roomToDelete);
    let timeNow = new Date();
    let timeComparator = new Date(timeStarted.replace(' ', 'T'));

    console.log(timeNow >= timeComparator);
    if(timeNow > timeComparator){
    let filteredCurrentRooms = currentRooms.filter((rooms) => {
      // console.log(rooms.id);
      // roomT
      return rooms.id !== roomToDelete
    });
    console.log(filteredCurrentRooms);
  }
  else{
    let filteredFutureRooms = futureRooms.filter((rooms) => {
      return rooms.id !== roomToDelete
    })
    console.log(filteredFutureRooms);
  }
   
  }
  return(
    <div>
    <CreateRoom forceUpdate = {forceUpdate}/>

    <h1>Current Rooms:</h1>
    {
      // console.log("This is future rooms from the dashboard", currentRooms)
    }
    
    <RoomList key = "currentRooms" rooms = {currentRooms} handleDelete ={handleDelete}/> 
    <h1>Future Rooms:</h1>
    <RoomList key = "futureRooms" rooms = {futureRooms} handleDelete ={handleDelete} />
    <h1>Archived:</h1>
    <RoomList key = "pastRooms" rooms = {pastRooms} />
    </div>
  )
}

export default Dashboard;