// import React from 'react'
import { useState } from "react";
import "./Form.css"
export default function Form() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  // name
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  // email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  // password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  // submit
  const handleSubmit = (e) => {
    console.log("form is submitted");
    let userInfo ={
      name: name,
      email: email,
      password: password
    }
    console.log(userInfo);
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name' value={name} onChange={handleNameChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' id='email' value={email} onChange={handleEmailChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name='password' id='password' value={password} onChange={handlePasswordChange} required />
        </div>

        <div className="form-group">
          <button type='submit'>Register</button>
        </div>
      </form>

    </div>
  )
}
