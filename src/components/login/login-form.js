import React from "react";
import "./login-form.scss";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
// import EmailValidator from "email-validator";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(true);
      }, 500);
    }}
  
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short - should be 5 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
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
        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
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
