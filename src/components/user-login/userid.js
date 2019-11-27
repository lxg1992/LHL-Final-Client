import React from "react";
import "./userid.scss";
import Button from "@material-ui/core/Button";
import Nav from "../login/Nav";
import { Link } from "react-router-dom";

export default function Userid() {
  return (
    <div className="userid--layout">
      <Nav/>
      <div className="joincreateForm">
        <h2>WHAT DO YOU WANT TO DO TODAY?</h2>
        <Link to="/create">
          <Button className="create--button" color="primary" variant="contained">CREATE</Button>
        </Link>
        <Link to="/join">
          <Button className="join--button" color="primary" variant="contained" Link to="/Create">JOIN</Button>
        </Link>
      </div>
    </div>
  );
}
