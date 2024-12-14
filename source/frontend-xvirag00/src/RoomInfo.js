import React, { useState } from 'react';
import './RoomInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

function RoomInfo({ roomCode, players, ownerName, onUpdatePlayerName }) {
  const [statusMessage, setStatusMessage] = useState("");
  const [editingPlayerId, setEditingPlayerId] = useState(null); // Sleduje, který hráč se edituje
  const [tempName, setTempName] = useState(""); // Dočasné jméno, které uživatel zadá

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

  const handleNameChange = (id) => {
    onUpdatePlayerName(id, tempName); // Aktualizuje jméno hráče
    setEditingPlayerId(null); // Zavře vstupní pole po potvrzení
    setTempName(""); // Vymaže dočasné jméno
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
            {editingPlayerId === player.id ? (
              // Zobrazení vstupního pole a tlačítka pro potvrzení
              <>
                <input
                  type="text"
                  defaultValue={player.name}
                  onChange={(e) => setTempName(e.target.value)} // Uloží dočasné jméno do stavu
                  style={{ marginLeft: '10px' }}
                />
                <button
                  onClick={() => handleNameChange(player.id)} // Uloží změnu jména
                  style={{
                    marginLeft: '5px',
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    padding: '5px',
                    borderRadius: '5px',
                  }}
                >
                  <FontAwesomeIcon icon={faCheck} /> {/* Ikona tužky */}
                </button>
              </>
            ) : (
              // Tlačítko pro zobrazení vstupního pole
              <button
                onClick={() => {
                  setEditingPlayerId(player.id);
                  setTempName(player.name); // Předvyplní aktuální jméno
                }}
                style={{
                  marginLeft: '10px',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                <FontAwesomeIcon icon={faPen} /> {/* Ikona tužky */}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomInfo;