import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';


const Message = ({ data , userNumber }) => {

  return (
    <li style={{ alignSelf: data.userId === userNumber ? 'flex-end' : '', width: 'fit-content' }} >
      <div className={data.userId === userNumber ? 'my-message message-list-item' : 'message-list-item'}>
        <p className="username">{data.userName}</p>
        <p className="message">{data.message}</p>
      </div>
      <div className="user-details">
        <Moment fromNow>{new Date()}</Moment>
      </div>
    </li>
  )
}

export default Message;