import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Userid from "./user-login/userid";
import Login from "./login/login";


function Root (props){
  const [cookiePresent, setCookiePresent] = useState(false);
  const cookie = new Cookies();
  console.log(cookie.get("token"))
  useEffect(() => {
    if(cookie.get("token")){
      setCookiePresent(true);
    }
  }, []);

  return (
    <div>
    {cookiePresent ? <Userid/> : <Login/> }
    </div>
  )
}

export default Root;