/**
 * @file Board.js
 *
 * @description The `Board` component renders the game board for "Člověče, nezlob se!".
 *              It handles the real-time updates of the game, manages player and piece states, 
 *              processes tile clicks, and communicates with the server through socket events.
 * 
 * @author Karolína Virágová (xvirag00)
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.gameData - Initial game data including players and board pieces.
 * @param {Object} props.socket - Socket connection to the server for real-time communication.
 * @param {function} props.handleReturnToMainScreen - Callback function to return to the main screen after the game ends.
 * 
 * @state {Array} players - List of players in the game.
 * @state {Array} pieces - List of game pieces on the board.
 * @state {string} error - Error messages to display to the user.
 * @state {string} statusMessage - Status messages about the game's progress.
 * @state {number} diceRoll - Result of the most recent dice roll.
 * @state {boolean} gameEnded - Indicates whether the game has ended.
 * @state {Array} score - List of player scores at the end of the game.
 * @state {number} houseLength - Number of pieces successfully moved to the home area.
 * @state {Map} tileColorMap - Map associating board tiles with player colors.
 * @state {Map} pieceMap - Map associating board tiles with game pieces.
 * 
 * @functions {function} startNewGame - Function to reset the game state and start a new game.
 * @functions {function} getTileColor - Function to determine the background color of a board tile.
 * @functions {function} isCrossTile - Function to check whether a tile is part of the main cross pattern.
 * @functions {function} renderPiece - Function to render a game piece on the board.
 * @functions {function} handleTileClick - Function to process user clicks on board tiles.
 * @functions {function} useEffect - Hook to set up and tear down socket event listeners.
 * 
 */
import React, { useState, useMemo, useEffect } from 'react';
import './Board.css';
import {home, getCoordinatesFromValue } from './coordinates.js';
import Ended from './Ended';

const Board = ({  gameData, gameStarted, setGameStarted, gameEnded, setGameEnded, socket, handleReturnToMainScreen , handleNewGame}) => {
  let i = 40;
  // Size of the game board (11x11 grid)
  const gridSize = 11;
  // Center index of the board (5 for a gridSize of 11)
  const centerIndex = Math.floor(gridSize / 2);
  // Player list
  const [players, setPlayers] = useState(gameData.players || []);
  // Pieces on the board
  const [pieces, setPieces] = useState(gameData.board.pieces || []);
  // Error message state
  const [error, setError] = useState(null);
  // Game status message
  const [statusMessage, setStatusMessage] = useState("");
  // Result of the dice roll
  const [diceRoll, setDiceRoll] = useState(null); 
  // Scores of players
  const [score, setScore] = useState([]);
  // Length of pieces in the home area
  const [houseLength, setHouseLength] = useState(0);

  // Socket event handling and cleanup
  useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      console.log('Socket connected: ', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server.');
    });

    socket.on('game:updated', (data) => {
      console.log('Game updated:', data);

      const { updatedPiece } = data;
    
      if (!updatedPiece) {
        console.error('No updatedPiece received from server!');
        return;
      }
    
      const { id, commonPosition} = updatedPiece;
    
      if (!id) {
        console.error('idpieces is undefined in updatedPiece:', updatedPiece);
        return;
      }
      console.log(pieces);
      setPieces(prevPieces => {
        const updatedPieces = [...prevPieces];
        const pieceIndex = pieces.findIndex(piece => piece.id === id);
        if (pieceIndex === -1) {
          console.error(`Piece with ID ${id} not found in state!`);
          return prevPieces;
        }

        updatedPieces[pieceIndex] = { 
          ...updatedPieces[pieceIndex], 
          commonPosition
        };
        socket.emit('game:play');
        return updatedPieces;
      });
    });
    
    socket.on('game:diceRolled', (data) => {
      console.log('Game diceRolled:', data);
      const { playerId, dice, canDeploy } = data;
      const player = players.find(p => p.id === playerId);

      const playerName = player ? player.name : 'Unknown Player';
      setDiceRoll(dice);
      setStatusMessage(`Player ${playerName} rolled a ${dice}.`);

      if (canDeploy) {
        setStatusMessage(`Player ${playerName} can deploy a new piece!`);
        socket.emit('game:deployPiece');
      }
    });

        socket.on('game:ended', (data) => {
      console.log('Game has ended:', data);
      setGameEnded(true);
      setGameStarted(false);
      setScore(data.score); 
      setHouseLength(data.houseLength);
    });

    // Cleanup socket event listeners
    return () => {
      socket.off('game:ended');
      socket.off('game:diceRolled');
      socket.off('game:updated');
    };
  }, [socket,score]);

  // Map to associate tiles with player colors
  const tileColorMap = useMemo(() => {
    const colorMap = new Map();
    setStatusMessage(`Game started`);
    players.forEach((player, index) => {
      let tiles = [];
      if (index === 0) {
        tiles = [
          [4, 0], [5, 1], [5, 2], [5, 3], [5, 4], [0, 0], [0, 1], [1, 0], [1, 1]
        ];
      } else if (index === 1) {
        tiles = [
          [0, 6], [1, 5], [2, 5], [3, 5], [4, 5], [0, 9], [0, 10], [1, 9], [1, 10]
        ];
      } else if (index === 2) {
        tiles = [
          [6, 10], [5, 6], [5, 7], [5, 8], [5, 9], [9, 9], [10, 9], [9, 10], [10, 10]
        ];
        
      } else if (index === 3) {
        tiles = [
          [10, 4], [6, 5], [7, 5], [8, 5], [9, 5], [9, 0], [9, 1], [10, 0], [10, 1]
        ];
      }

      tiles.forEach(([row, col]) => {
        colorMap.set(`${row}-${col}`, player.color);
      });
    });
    return colorMap;
  }, [players]);

  const pieceMap = useMemo(() => {
    const map = new Map();
    pieces.forEach(piece => {
      if (piece.commonPosition === null) {
        piece.commonPosition = i;
        i++;
      }
      const { row, col } = getCoordinatesFromValue(piece.commonPosition, piece.color, piece.positon);
      map.set(`${row}-${col}`, piece);
    });
    return map;
  }, [pieces,i]);

  // Check if a tile is part of the cross pattern
  const isCrossTile = (row, col) => {
    if (row === centerIndex && col === centerIndex) return false;
    return (
      (col >= centerIndex - 1 && col <= centerIndex + 1) ||
      (row >= centerIndex - 1 && row <= centerIndex + 1) ||
      (row <= 1 && col <= 1) ||
      (row >= 9 && col >= 9) ||
      (row <= 1 && col >= 9) ||
      (row >= 9 && col <= 1)
    );
  };

  // Determine the color of a tile
  const getTileColor = (row, col) => {
    if (!isCrossTile(row, col)) return 'white';
    return tileColorMap.get(`${row}-${col}`) || 'white';
  };

  // Render a game piece on the board
  const renderPiece = (row, col) => {
     const piece = pieces.find(p => {
       if (p.commonPosition === null) {
        p.commonPosition = i;
        i++;
      }
      const coords = getCoordinatesFromValue(p.commonPosition);
      return coords.row === row && coords.col === col;
    });

    if (piece) {
      return (
        <div
          className="piece"
          style={{
            backgroundColor: piece.color,
            border: '2px solid black',
            width: '70%',
            height: '70%'
          }}
        />
      );
    }

    return null;
  };

  // Handle user clicks on tiles
  const handleTileClick = (row, col) => {
    const clickedPiece = pieceMap.get(`${row}-${col}`);
    if (clickedPiece) {
      const payload = {
        commonPosition: clickedPiece.commonPosition,
      };

      console.log("Sending position:", payload);
      socket.emit('game:movePiece', payload, (data) => {
        if (!data) {
          setError(null);
          setStatusMessage("Position sent successfully.");
        } else {
          setError("Failed to send position.");
        }
      });
    } else {
      setError("No piece on this tile to select.");
    }
  };


    return (
      <div className="board-container">
        {gameEnded && !gameStarted && score[0].value > 0? (
          <Ended 
            score={score} 
            players={players}
            houseLength={houseLength}
            onReturnToApp={handleReturnToMainScreen}
            onNewGame={handleNewGame}
          />
        ) : (
          <>
            {statusMessage && !error && <div className="status-message">{statusMessage}</div>}
            {error && <div className="error">{error}</div>}
    
            <div className="board">
              {Array.from({ length: gridSize }).map((_, row) => (
                <div key={row} className="board-row">
                  {Array.from({ length: gridSize }).map((_, col) => (
                    <div
                      key={`${row}-${col}`}
                      className={`tile ${isCrossTile(row, col) ? '' : 'empty-tile'}`}
                      style={{
                        backgroundColor: getTileColor(row, col),
                      }}
                      onClick={() => handleTileClick(row, col)}
                    >
                      {renderPiece(row, col)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
    
            {/* Vykreslení jmen hráčů */}
            {players.map((player, index) => (
              <div
                key={index}
                className={`player-name player-${index + 1}`} // Dynamická třída pro umístění
              >
                {player.name}
              </div>
            ))}
          </>
        )}
      </div>
    );
};

export default Board;