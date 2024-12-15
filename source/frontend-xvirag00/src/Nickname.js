/**
 * @file Nickname.js
 * 
 * @description A component for entering a nickname. 
 *              It validates the input to ensure it is not empty and passes 
 *              the nickname to the parent component via the `onSubmit` callback function.
 * 
 * @author Karolína Virágová (xvirag00)
 * 
 */

import React, { useState } from 'react';

const Nickname = ({ onSubmit }) => {

  const [nickname, setNickname] = useState('');
  const [statusMessage, setStatusMessage] = useState(""); 
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    if (nickname.trim() !== '') {
      onSubmit(nickname);
    } else {
      setStatusMessage("Enter nicknames")
    }
  };

  return (
    <div className="nickname-container">
      <h2>Enter your nickname: </h2>
      <input 
        type="text" 
        placeholder="Karla" 
        value={nickname} 
        onChange={handleNicknameChange} 
      />
      <button onClick={handleSubmit}>Continue</button>
      {statusMessage && <div className="status-message2">{statusMessage}</div>}
    </div>
  );
};

export default Nickname;