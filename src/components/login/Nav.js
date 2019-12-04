import React from "react";
import "./Nav.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Navbar, Nav } from "react-bootstrap";
export default function Navi(props) {
  const cookie = new Cookies();

  const handleLogout = () => {
    console.log("you have been logged out");
    cookie.remove("token");
    cookie.remove("email");
    cookie.remove("user_id");
    window.location = "/";
  };

  return (
    <div className="Navi">
      <Navbar bg="light" expand="lg" id="#navBar">
        <Navbar.Brand href="/">InQuire</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {cookie.get("email") && (
            <Nav.Link href="/account">
               <div className="account">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
               <p>
                  Welcome back,{" "}
                  <strong>{cookie.get("email").replace(/@[^ ]*/g, "")}</strong>
               </p>
               </div>
            </Nav.Link>
          )}
          <Nav.Link>
            {cookie.get("email") && (
              <ExitToAppIcon
                variant="outlined"
                color="primary"
                id="logout"
                onClick={handleLogout}
              ></ExitToAppIcon>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
