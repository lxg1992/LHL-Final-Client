import React from "react";
import "./userid.scss";
import Button from "@material-ui/core/Button";
import Navi from "../login/Nav";
import { Link } from "react-router-dom";

export default function Userid() {
  return (
    <div className="userid--layout">
      <Navi/>
      <div className="joincreateForm">
        <h2>WHAT DO YOU WANT TO DO TODAY?</h2>
        <Link to="/create">
          <Button className="create--button"  variant="contained">GO TO DASHBOARD</Button>
        </Link>
        <Link to="/join">
          <Button className="join--button" variant="contained">JOIN</Button>
        </Link>
      </div>
    </div>
  );
}
