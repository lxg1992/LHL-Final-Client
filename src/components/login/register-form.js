import React , {useState} from "react";
import "./register-form.scss";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "universal-cookie";
import axios from "axios";

const RegisterForm = () => (

  
  <Formik
    initialValues={{first_name: "", last_name: "", email: "", password: "", confirmPassword: ""}}
    onSubmit={(values, {setSubmitting}) => {
      axios.post(`users/register`, {email: values.email, first_name: values.first_name, last_name: values.last_name, password: values.confirmPassword })
      .then(res => {
        const cookies = new Cookies();
        console.log(res);
        console.log(res.data.token);
        cookies.set("user_id", res.data.user[0].id, {path: "/"});
        cookies.set("token", res.data.token, {path: '/'})
        cookies.set("email", res.data.user[0].email, {path: "/"});
      })
      .then (res => {
        window.location = "/userid";
      })
      .catch(err => {
        // const [error, setError] = useState();
        // setError(err.response.data.error);
        console.error(err.response.data.error);

      });
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
        .min(0, "Password is too short - should be 5 chars minimum."),
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
      type="password"
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
      type="password"
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