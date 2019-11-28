import React from "react";
import "./register-form.scss";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => (
  <Formik
    initialValues={{first_name: "", last_name: "", email: "", password: "", confirmPassword: ""}}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        console.log("register done", values)
        setSubmitting(false);
      }, 500)
    }}

    validationSchema = {Yup.object().shape({
      first_name:Yup.string()
      .required("Required"),
      last_name:Yup.string()
      .required("Required"),
      email:Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short - should be 5 chars minimum."),
        confirmPassword: Yup.string()
        .required('Password confirm is required')
        .oneOf([Yup.ref('password')])
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
      <label className = "tag">First name</label>
      <input 
      placeholder=" Enter your first name"
      name="first_name"
      type="text"
      value = { values.first_name }
      onChange = {handleChange}
      className={errors.first_name && touched.first_name && "error"}
      />
      {errors.first_name && touched.first_name && (
      <div className="input-feedback">{errors.first_name}</div>
      )}

      <label className = "tag">Last name</label>
      <input 
      placeholder=" Enter your last name"
      name="last_name"
      type="text"
      value = { values.last_name }
      onChange = {handleChange}
      className={errors.last_name && touched.last_name && "error"}
      />
      {errors.last_name && touched.last_name && (
      <div className="input-feedback">{errors.last_name}</div>
      )} 
      
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
      {errors.confirmPassword && touched.confirmPassword && (
      <div className="input-feedback">Please confirm your password</div>
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