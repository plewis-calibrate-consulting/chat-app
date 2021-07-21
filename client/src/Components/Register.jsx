import React, { useState } from 'react';

const Register = ({ signUp, setSignUp }) => {
  const [newUser, setNewUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { firstName, lastName, userName, email, password } = newUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    async function createUser() {
      console.log(newUser);
      const response = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const data = await response.json();
      console.log(data);
    }
    createUser();
  }

  const onChangeHandler = (e) => {
    console.log(e.target.name);
    return setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }


  return (
    <div className="form-container">
      <div className="change-component">
        <span>Register</span>
        <span onClick={() => setSignUp(!signUp)}>Login?</span>
      </div>
      <form className="register" onSubmit={handleSubmit}>
        <input type="text" value={firstName} name="firstName" onChange={(e) => onChangeHandler(e)} placeholder="First Name*" required />
        <input type="text" value={lastName} name="lastName" onChange={(e) => onChangeHandler(e)} placeholder="Last Name*" required />
        <input type="text" value={userName} name="userName" onChange={(e) => onChangeHandler(e)} placeholder="Username*" required />
        <input type="email" value={email} name="email" onChange={(e) => onChangeHandler(e)} placeholder="Email*" required />
        <input type="password" value={password} name="password" onChange={(e) => onChangeHandler(e)} placeholder="Password*" required />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default Register;