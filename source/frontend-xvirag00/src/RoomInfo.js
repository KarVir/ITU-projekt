/**
 * @file RoomInfo.js
 * 
 * @description A component for entering a room. 
 * 
 * @author Karolína Virágová (xvirag00)
 * 
 */
import React, { useState } from 'react';
import './RoomInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function RoomInfo({ roomCode, players, ownerName }) {
  const [statusMessage, setStatusMessage] = useState("");

  // Function for a copying code room
  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomCode)
      .then(() => {
        setStatusMessage("Room code copied");
      })
      .catch(err => {
        setStatusMessage("Failed to copy text");
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
          Room code: <span>{roomCode}</span>
        </h2>
        <button
          onClick={copyToClipboard}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            fontSize: '1.2rem',
            alignSelf: 'flex-end',
            marginTop: '10px',
          }}
        >
          <FontAwesomeIcon icon={faCopy} /> Copy
        </button>
        {statusMessage && <div className="status-message2">{statusMessage}</div>}
      </div>
      <h3>Room owner: {ownerName}</h3>
      <h3>Players:</h3>
      <ul>
        {players && players.map((player) => (
          <li key={player.id}>
            <span>{player.name} (ID: {player.id}, Color: {player.color || 'No color'})</span>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomInfo;