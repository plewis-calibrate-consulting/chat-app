import React, { useState, useEffect } from 'react';
import Users from './Users';
import Messages from './Messages';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:5000');



function Home({ name }) {
  const [users, setUsers] = useState(null)
  const [userNumber, setUserNumber] = useState(null)
  const [userName, setUserName] = useState(name)
  const [connectedUser, setConnectedUser] = useState('')
  const [disconnectedUser, setDisconnectedUser] = useState('')
  const [messages, setMessages] = useState([
    {
      userId: 'Bot',
      userName: 'Bot',
      message: `${userName}, welcome to the chat!`
    }
  ]);
  // New messgae useEffect
  useEffect(() => {
    // New message
    socket.on('message', message => {
      // console.log('New message: ', message)
      setMessages(prevState => [...prevState, message]);
    })
  }, [])

  useEffect(() => {
    // Set new user name in state
    socket.on('new user connected', userName => setConnectedUser(userName));

    // Listen for new user object from server
    socket.on('new user', userArr => {
      // console.log(userArr)
      setUsers([...userArr])
    });

    if (userNumber) return

    // Send new user object to server
    const userId = Math.floor(Math.random() * 10000000);
    // Set new userId in state
    setUserNumber(userId);

    // Send new user event to server
    socket.emit('new user', { userId, userName })
  }, [userNumber, userName]);

  useEffect(() => {
    socket.on('user disconnect', userArr => {
      console.log(userArr)
      setUsers([...userArr])
    })
    socket.on('single user disconneted', userName => setDisconnectedUser(userName))
  }, [])

  return (
    <div className="home">
      {userNumber &&
        <>
          <Messages 
          messages={messages} 
          userNumber={userNumber} 
          userName={userName} 
          socket={socket}
          disconnectedUser={disconnectedUser}
          connectedUser={connectedUser}
          />
          <Users users={users} userNumber={userNumber} userName={userName} />
        </>
      }
    </div>
  );
}

export default Home;
