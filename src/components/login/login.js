import React from "react";
import LoginForm from "./login-form.js";
import Nav from "./Nav";
import RegisterForm from "./register-form.js";
import "./login.scss";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AnonJoin from "./AnonJoin";

export default function Login() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  
  return (
    <div className="container--login">
    
    <Nav/>
    
    <AppBar color="default" className="login--bar">
    <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
    variant="fullWidth"
    >
    <Tab label="LOGIN"/>
    <Tab label="REGISTER" />
    </Tabs>
    
    <SwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={value}
    onChangeIndex={handleChangeIndex}
    >
    <LoginForm value={value} index={0} dir={theme.direction}>
    </LoginForm>
    <RegisterForm value={value} index={1} dir={theme.direction}>
    </RegisterForm>
    </SwipeableViews>
    <AnonJoin/>
    
    </AppBar>
    </div>
  );
}