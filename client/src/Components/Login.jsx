import React, { useState } from 'react';

const Login = ({ signUp, setSignUp }) => {
  const [loginUser, setLoginUser] = useState({
    userName: '',
    password: ''
  })

  const { userName, password } = loginUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
    async function login() {
      console.log(loginUser);
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const data = await response.json();
      console.log(data);
    }
    login();
  }

  const onChangeHandler = (e) => {
    console.log(e.target.name);
    return setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
  }


  return (
    <div className="form-container">
      <div className="change-component">
        <span>Login</span>
        <span onClick={() => setSignUp(!signUp)}>Create account?</span>
      </div>
      <form className="login" onSubmit={handleSubmit}>
        <input type="text" value={userName} name="userName" onChange={(e) => onChangeHandler(e)} placeholder="Username" required />
        <input type="password" value={password} name="password" onChange={(e) => onChangeHandler(e)} placeholder="Password" required />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
