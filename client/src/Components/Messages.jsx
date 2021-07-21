import React from 'react';
import Form from '../Components/Form';
import  Message from './Message';

const Messages = ({ messages, userNumber, disconnectedUser, socket, connectedUser }) => {

  const newUser = messages[messages.length - 1];

  return (
    <div className="message-container">
      <ul className="messages">
        {disconnectedUser && <span className="user-notification">{disconnectedUser} has left the chat</span>}
        {connectedUser && <span className="user-notification">{connectedUser} has joined the chat</span>}

        {messages.map(m => {
          return <Message key={m.userId} data={m} userNumber={userNumber} />
        })}
      </ul>
      <Form socket={socket} />
    </div>
  )
}

export default Messages;