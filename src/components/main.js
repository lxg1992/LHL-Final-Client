import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function Main () {
   return (
    <div>
  
    <ul>
      <li>
      <Link to='/userid'>useriD</Link>
      </li>
      <li>
      <Link to='/create'>create</Link>
      </li>
      <li>
      <Link to='/join'>join</Link>
      </li>
      <li>
      <Link to='/main'>main</Link>
      </li>
      <li>
      <Link to="/dashboard">dashboard</Link>
      </li>
      <li>
      <Link to ="/login">Login</Link>
      </li>
    </ul>
  </div>
   );
 }