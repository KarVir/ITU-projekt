/**
 * @file Ended.js
 * 
 * @description A component that displays the results of the game after it ends. 
 *              It shows the final scores of the players, the length of the game, 
 *              and provides options to start a new game or return to the main screen.
 * 
 * @author Karolína Virágová (xvirag00)
 * 
 * @props {Array} score - An array of objects representing the players' scores 
 *         (each object contains `playerId` and `value`).
 * @props {Array} players - An array of objects representing the players 
 *         (each object contains `id` and `name`).
 * @props {number} houseLength - The length of the game (the highest value players are competing for).
 * @props {function} onReturnToApp - A function that is called when returning to the main screen.
 * @props {function} onNewGame - A function that is called when starting a new game.
 */

import React from 'react';
import './Ended.css'; 

const Ended = ({ score, players, houseLength, onReturnToApp, onNewGame }) => {
  // Helper to get player name by ID
  const getPlayerName = (playerId) => {
    const player = players.find((p) => p.id === playerId);
    return player ? player.name : 'Unknown Player';
  };

  return (
    <div className="ended">
      <h2>Game Over!</h2>
      <div className="scoreboard">
        <h3>Final Scores:</h3>
        <ul>
          {score.map((playerScore, index) => (
            <li key={index}>
              {getPlayerName(playerScore.playerId)}: {playerScore.value}/{houseLength}
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <button onClick={onNewGame}>New Game</button> 
        <button onClick={onReturnToApp}>Return to Main Screen</button> 
      </div>
    </div>
  );
};

export default Ended;
