import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DisplayName from './Components/DisplayName';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  const [signUp, setSignUp] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Router>
      <div className="App flex">
        {/* <div className="account">
          {signUp
          ?
          <Register 
          signUp={signUp}
          setSignUp={setSignUp}
          />
          :
          <Login 
          signUp={signUp}
          setSignUp={setSignUp}
          />
          }
        </div> */}

        < DisplayName
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        {loggedIn && <Home name={userName} />}
      </div>
    </Router>
  );
}

export default App;
