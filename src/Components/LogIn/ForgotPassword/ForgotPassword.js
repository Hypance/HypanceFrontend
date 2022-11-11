import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validations';
import "./ForgotPassword.css"
import * as BS from "react-bootstrap";
import avatar from "../../TopBar/avatar.jpg";


function ForgotPassword() {
  let users = [{ email: "ataguneser@hotmail.com" },
  { email: "deneme@hotmail.com" },
  { email: "deneme@hotmail.com" },
  { email: "deneme@hotmail.com" },
  { email: "deneme@hotmail.com" }
  ];

  const check = () => {
    for (let i of users) {
      if (i.email === values.email) {
        return true
      };
    }
  };
  const son = () => {
    (check() ? alert('**Password reset mail sent 📨**') : alert('**e-mail address is incorrect ❌**'))
  }
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      son();
    },
    validationSchema,
  })
  return (<div>
    <BS.Row>
      <BS.Col>
        <div className='SignInNav'>
          <p className='dnm'>Hypance</p>
          <p> Don't have an account?
            <a href='../SignUp'>Sign up!</a></p>
        </div>
        <div className='reset-div'>
          <h1 className='reset-h1'>Forgot your password?</h1>
          <p className='reset-text'>Don’t worry. We’ll send you an email to start resetting your password. </p>
          <form onSubmit={handleSubmit} >
            <label htmlFor="email"></label>
            <input className='reset-input' name="email" placeholder="  Email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {errors.email && touched.email && <div className='error'>{errors.email}</div>} <br />
            <button className='reset-button' type="submit">Reset Password</button>
          </form>
        </div>
      </BS.Col>
      <BS.Col md="6">
        <img src={avatar} alt="hypance">
        </img>
      </BS.Col>
    </BS.Row>
  </div>
  )
}

export default ForgotPassword