import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validations';
import "./ForgotPassword.css"


function ResPassword() {
  let users = [{ email: "ataguneser@hotmail.com" },
  { email: "deneme@hotmail.com" },
  { email: "deneme@hotmail.com" },
  { email: "deneme@hotmail.com" },
  { email: "deneme@hotmail.com" }
  ];
  
  const check = () => {
      for (let i of users){
       if(i.email === values.email) {
        return true};
    }
  };
  const son = () => {
    (check()  ? alert('**Password reset mail sent 📨**') : alert('**e-mail address is incorrect ❌**'))
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
  return (
    <div>
      <h2 className='reset-hypance'>Hypance</h2>
      <div className='reset-div'>
        <h1 className='reset-h1'>Reset password</h1>
        <form onSubmit={handleSubmit} >
          <label htmlFor="email"></label>
          <input className='reset-input' name="email" placeholder="  Enter your email address" onChange={handleChange} onBlur={handleBlur} value={values.email} />
          {errors.email && touched.email && <div className='error'>{errors.email}</div>} <br />
          <button className='reset-button' type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default ResPassword