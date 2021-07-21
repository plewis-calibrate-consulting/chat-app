import React, { useEffect } from 'react';
import 'animate.css/animate.css'


const DisplayName = ({ userName, setUserName, password, setPassword, setLoggedIn, loggedIn }) => {

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoggedIn(!loggedIn)
  }


  return (
    <div className={loggedIn && userName ? 'hide' : 'show display-name'}>
      <form onSubmit={onSubmit} className="display-name-form">
        <input type="text" placeholder="Display name..." value={userName} onChange={(e) => setUserName(e.target.value)} size="5" required />
        {/* <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} size="6" required /> */}
        <button type="submit">Join Chat</button>
      </form>
    </div>
  )
}

export default DisplayName;