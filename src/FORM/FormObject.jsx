// import React from 'react'
import "./Form.css"
import { useState } from "react";

export default function FormObject() {
  const [user, setUser] = useState({name: '', email: "", password: ""});
  const {name, email, password} = user;


  const handleChange = (e) => {
    // way 1:

    // const fieldName = e.target.name;
    // if (fieldName === "name") {
    //   setUser({name:e.target.value, email, password});
    // }
    // if (fieldName === "email") {
    //   setUser({email:e.target.value, name, password});
    // }
    // if (fieldName === "password") {
    //   setUser({password:e.target.value, email, name});
    // }
    
    // way 2:
    setUser({...user, [e.target.name]: e.target.value});
    
    

  }

  // submit
  const handleSubmit = (e) => {
    console.log("form is submitted");
    console.log(user);
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name' value={name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' id='email' value={email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name='password' id='password' value={password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <button type='submit'>Register</button>
        </div>
      </form>

    </div>
  )
}
