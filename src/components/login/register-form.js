import React from "react";
import "./register-form.scss";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => (
  <Formik
    initialValues={{email: "", password: "", confirmPassword: ""}}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        console.log("register done", values)
        setSubmitting(false);
      }, 500)
    }}

    validationSchema = {Yup.object().shape({
      email:Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short - should be 5 chars minimum."),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null])
        .required('Password confirm is required')
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
    <form className="login--Rform" onSubmit={handleSubmit}>
      <h2>REGISTER</h2>
      <label className = "tag">Email</label>
      <input 
      placeholder=" Enter your email"
      name="email"
      type="text"
      value = { values.email }
      onChange = {handleChange}
      className={errors.email && touched.email && "error"}
      />
      {errors.email && touched.email && (
      <div className="input-feedback">{errors.email}</div>
      )}  

      <label className = "tag">Password</label>
      <input 
      placeholder=" Enter your password"
      name="password"
      type="text"
      value = { values.password }
      onChange = {handleChange}
      className={errors.password && touched.password && "error"}
      />
      {errors.password && touched.password && (
      <div className="input-feedback">{errors.password}</div>
      )}  

      <label className = "tag">Confirm password</label>
      <input 
      placeholder=" Confirm new password"
      name="confirmPassword"
      type="text"
      value = { values.confirmPassword }
      onChange = {handleChange}
      className={errors.confirmPassword && touched.confirmPassword && "error"}
      />
      {errors.email && touched.email && (
      <div className="input-feedback">{errors.email}</div>
      )}        

      <div className="button--register">
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          Register
        </Button>
      </div>
    </form>
    )
  }} 
  </Formik>
)

export default RegisterForm;