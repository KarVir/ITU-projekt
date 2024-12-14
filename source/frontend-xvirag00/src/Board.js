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
import {getCoordinatesFromValue, home , home1, home2, home3 } from './coordinates.js';
import Ended from './Ended';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Board = ({  gameData, gameStarted, setGameStarted, gameEnded, setGameEnded, socket, handleReturnToMainScreen , handleNewGame}) => {
  let i = 0;
  // Size of the game board (11x11 grid)
  const gridSize = 11;
  // Center index of the board (5 for a gridSize of 11)
  const centerIndex = Math.floor(gridSize / 2);
  // Player list
  const [players, setPlayers] = useState(gameData.players || []);
  // Pieces on the board
  const [pieces, setPieces] = useState(gameData.board.pieces);
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

      const { updatedPiece, collision } = data;
    
      if (!updatedPiece) {
        console.error('No updatedPiece received from server!');
        return;
      }
      

      if(collision){
        const { piece} = collision;
        const { id, commonPosition, position, color, ownerId} = piece;
        setPieces(prevPieces => {
          const updatedPieces = [...prevPieces];
          const pieceIndex = pieces.findIndex(piece => piece.id === id);
          if (pieceIndex === -1) {
            console.error(`Piece with ID ${id} not found in state!`);
            return prevPieces;
          }
  
          updatedPieces[pieceIndex] = { 
            ...updatedPieces[pieceIndex], 
            commonPosition,
            position,
            color, 
            ownerId
          };
          return updatedPieces;
        });
      }

      const { id, commonPosition, position, color, ownerId} = updatedPiece;
    
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
          commonPosition,
          position,
          color, 
          ownerId
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
      // Pokud má figurka null commonPosition, přidělíme jí pozici
      if (piece.commonPosition === null) {
        if (piece.position === null) {
          piece.position = i;
          i++; // Inkrementace hodnoty i pro další pozici
        }

        if (piece.color === players[0].color) {
          const { row, col } = home(piece.position); // Funkce home pro první hráče
          map.set(`${row}-${col}`, piece); // Uložení figurky do mapy
        } else if (piece.color === players[1].color) {
          const { row, col } = home1(piece.position); // Funkce home1 pro druhého hráče
          map.set(`${row}-${col}`, piece);
        }else if (piece.color === players[2].color) {
          const { row, col } = home2(piece.position); // Funkce home1 pro druhého hráče
          map.set(`${row}-${col}`, piece);
        }else if (piece.color === players[3].color) {
          const { row, col } = home3(piece.position); // Funkce home1 pro druhého hráče
          map.set(`${row}-${col}`, piece);
        }
      } else {
        // Pokud figurka má commonPosition, převedeme ji na souřadnice
        const { row, col } = getCoordinatesFromValue(piece.commonPosition);
        map.set(`${row}-${col}`, piece); // Uložení figurky do mapy
      }
    });
  
    return map; // Vrácení mapy s figurkami
  }, [pieces, i]); // UseMemo závisí pouze na pieces
  

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
        if (p.position === null) {
            p.position = i;
            i++; // Inkrementace hodnoty i pro další pozici
        }
        if (p.color === players[0].color) {
          const coords = home(p.position); // Funkce home pro první hráče
          return coords.row === row && coords.col === col; // Porovnání s aktuálními souřadnicemi
        } else if (p.color === players[1].color) {
          const coords = home1(p.position); // Funkce home1 pro druhého hráče
          return coords.row === row && coords.col === col; // Porovnání s aktuálními souřadnicemi
        } else if (p.color === players[2].color) {
          const coords = home2(p.position); // Funkce home1 pro druhého hráče
          return coords.row === row && coords.col === col; // Porovnání s aktuálními souřadnicemi
        } else if (p.color === players[3].color) {
          const coords = home3(p.position); // Funkce home1 pro druhého hráče
          return coords.row === row && coords.col === col; // Porovnání s aktuálními souřadnicemi
        } 
      }else{
        const coords = getCoordinatesFromValue(p.commonPosition);
        return coords.row === row && coords.col === col;
      }
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
    
            {/* Name player*/}
            {players.map((player, index) => (
              <div
                key={index}
                className={`player-name player-${index + 1}`}
              >
                {player.name}
              </div>
            ))}

            {/* Arrow */}
            {players[0] && (
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '33%',
                  transform: 'translateX(-50%)',
                  fontSize: '30px',
                  color: players[0].color, // Barva hráče 1
                }}
              />
            )}
            {players[2] && (
              <FontAwesomeIcon
                icon={faArrowUp}
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '70%',
                  transform: 'translateX(-50%)',
                  fontSize: '30px',
                  color: players[2].color, // Barva hráče 2
                }}
              />
            )}
            {players[1] && (
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  position: 'absolute',
                  top: '75%',
                  left: '20px',
                  transform: 'translateY(-50%)',
                  fontSize: '30px',
                  color: players[1].color, // Barva hráče 3
                }}
              />
            )}
            {players[3] && (
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{
                  position: 'absolute',
                  top: '35%',
                  right: '20px',
                  transform: 'translateY(-50%)',
                  fontSize: '30px',
                  color: players[3].color,
                }}
              />
            )}
          </>
        )}
      </div>
    );
};

export default Board;