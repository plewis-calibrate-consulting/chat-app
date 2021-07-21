import React, { useState } from 'react';

const Form = ({ socket }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Emit events
    if (inputText) {
      socket.emit('message', inputText);
      return setInputText('');
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="chat-form">
      <input className="textbox" type="text" placeholder="New Message..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button className="send" type="submit" value="Send" >Send</button>
    </form>
  )
}

export default Form;