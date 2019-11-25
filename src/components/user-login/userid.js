import React from "react";
import "./userid.scss";
import Button from "@material-ui/core/Button";
import Nav from "../login/Nav";

export default function Userid() {
  return (
    <div className="userid--layout">
      <Nav/>
      <div className="joincreateForm">
        <h2>WHAT DO YOU WANT TO DO TODAY?</h2>
        <Button className="create--button" color="primary" variant="contained">CREATE</Button>
        <Button className="join--button" color="primary" variant="contained">JOIN</Button>
      </div>
    </div>
  );
}
