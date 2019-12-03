import React from "react";
import "./login-form.scss";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";

const LoginForm = () => (
  

  <Formik
  
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      axios.post(`users/login`, {email: values.email, password: values.password })
      .then(res => {
        const cookies = new Cookies();
        console.log(res);
        console.log(res.data.token);
        cookies.set("user_id", res.data.user[0].id, {path: "/"});
        cookies.set("token", res.data.token, {path: '/'})
        cookies.set("email", res.data.user[0].email, {path: "/"});
      })
      .then (res => {
        window.location = "/userid"
      })
    }}
    
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(0, "Password is too short - should be 5 chars minimum.")
    })}
  >
  
  {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
      } = props
      
    return ( 
      
      <form className="login--Lform" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <label className = "tag">Email</label>
        <input
          placeholder=" Enter your email"
          name = "email"
          type = "text"
          value = { values.email }
          onChange = {handleChange}
          className = {errors.email && touched.email && "error"}
          />
        {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}

        <label className = "tag">Password</label>
        <input 
          placeholder=" Enter your password"
          name = "password"
          type = "password"
          value={values.password}
          onChange={handleChange}
          className={errors.password && touched.password && "error"}
        />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}
        <Button className="loginButton" type="submit" variant="contained" color="primary" disabled={isSubmitting}>
          Login
        </Button>
        {/* <div className="orDiv">
          <hr></hr>
          <p className="or">or</p>
        </div>
        <Button><i>asassa</i>facebook</Button> */}
      </form> 
    )
  }}
  </Formik>
)

export default LoginForm;
