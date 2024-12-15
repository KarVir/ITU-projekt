/**
 * @file Board.js
 *
 * @description The `Board` component renders the game board for "Člověče, nezlob se!".
 *              It handles the real-time updates of the game, manages player and piece states, 
 *              processes tile clicks, and communicates with the server through socket events.
 * 
 * @author Karolína Virágová (xvirag00)
 * 
 */
import React, { useState, useMemo, useEffect } from 'react';
import './Board.css';
import {getCoordinatesFromValue, home , home1, home2, home3 } from './coordinates.js';
import Ended from './Ended';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Board = ({  gameData, gameStarted, setGameStarted, gameEnded, setGameEnded, socket, handleReturnToMainScreen , handleNewGame}) => {
  // Size of the game board (11x11 grid)
  const gridSize = 11;
  // Center index of the board (5 for a gridSize of 11)
  const centerIndex = Math.floor(gridSize / 2);
  // Player list
  const [players] = useState(gameData.players || []);
  // Pieces on the board
  const [pieces, setPieces] = useState(gameData.board.pieces);
  // Error message state
  const [error, setError] = useState(null);
  // Game status message
  const [statusMessage, setStatusMessage] = useState("");
  // Scores of players
  const [score, setScore] = useState([]);
  // Result of the dice roll
   // const [diceRoll, setDiceRoll] = useState(null); 
  // Length of pieces in the home area
  const [houseLength, setHouseLength] = useState(0);
  // selected piece
  const [selectedPiece, setSelectedPiece] = useState(null);

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
      const { updatedPiece, collision } = data;
    
      if (!updatedPiece) {
        return;
      }

      if(collision){
        const { piece } = collision;
        const { id, commonPosition, position, color, ownerId} = piece;
        setPieces(prevPieces => {
          const updatedPieces = [...prevPieces];
          const pieceIndex = pieces.findIndex(piece => piece.id === id);
          if (pieceIndex === -1) {
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
    
      setPieces(prevPieces => {
        const updatedPieces = [...prevPieces];
        const pieceIndex = pieces.findIndex(piece => piece.id === id);
        if (pieceIndex === -1) {
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
      const { playerId, dice, canDeploy } = data;
      const player = players.find(p => p.id === playerId);

      const playerName = player ? player.name : 'Unknown Player';
        //setDiceRoll(dice);
      setStatusMessage(`Player ${playerName} rolled a ${dice}.`);
      setError(null);
      if (canDeploy) {
        setStatusMessage(`Player ${playerName} can deploy a new piece!`);
        socket.emit('game:deployPiece');
      }
    });

      socket.on('game:ended', (data) => {
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
  }, [socket,score, pieces, players, setGameEnded, setGameStarted]);

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

   
    const playerCounters = [0, 0, 0, 0];

    pieces.forEach(piece => {
        if (piece.commonPosition === null) {
           
            const playerIndex = players.findIndex(player => player.color === piece.color);

            if (piece.position === null) {
               piece.position = playerCounters[playerIndex];
                playerCounters[playerIndex]++;
            }

           // Determine position based on color and player
            if (playerIndex === 0) {
                const { row, col } = home(piece.position);
                map.set(`${row}-${col}`, piece);
            } else if (playerIndex === 1) {
                const { row, col } = home1(piece.position);
                map.set(`${row}-${col}`, piece);
            } else if (playerIndex === 2) {
                const { row, col } = home2(piece.position);
                map.set(`${row}-${col}`, piece);
            } else if (playerIndex === 3) {
                const { row, col } = home3(piece.position);
                map.set(`${row}-${col}`, piece);
            }
        } else {
            // Pokud je figurka na společné pozici, použijeme její commonPosition
            const { row, col } = getCoordinatesFromValue(piece.commonPosition);
            map.set(`${row}-${col}`, piece);
        }
    });

    return map;
}, [pieces,players]);


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

    const playerCounters = [0, 0, 0, 0];

     const piece = pieces.find(p => {
      
       if (p.commonPosition === null) {
        const playerIndex = players.findIndex(player => player.color === p.color);

          // Determine position based on color and player
        if (p.position === null) {
            p.position = playerCounters[playerIndex];
            playerCounters[playerIndex]++;
        }

        if (playerIndex === 0) {
          const coords = home(p.position); 
          return coords.row === row && coords.col === col;
        } else if (playerIndex === 1) {
          const coords = home1(p.position);
          return coords.row === row && coords.col === col;
        } else if (playerIndex === 2) {
          const coords = home2(p.position);
          return coords.row === row && coords.col === col;
        } else if (playerIndex === 3) {
          const coords = home3(p.position);
          return coords.row === row && coords.col === col;
        } 
      }else{
        const coords = getCoordinatesFromValue(p.commonPosition);
        return coords.row === row && coords.col === col;
      }
      return false;
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
    setError(null);
    if (selectedPiece) {

        const payload = {
          commonPosition: selectedPiece.commonPosition, 
        };
  
        socket.emit('game:movePiece', payload, (data) => {
          if (!data) {
            setError(null);
            setStatusMessage("The piece's movement was successfully.");
            setSelectedPiece(null);
          } else {
            setError("Failed to perform the piece movement.");
          }
        });
   
    } else {
      setError("First, choose a figure!");
    }
  };

  // Handle user clicks on pieces
  const handlePieceClick = (row, col) => {
    const clickedPiece = pieceMap.get(`${row}-${col}`);
    if (clickedPiece) {
      setSelectedPiece(clickedPiece);
      setError(null); 
      setStatusMessage(`Piece has been selected.`);
    } else {
      setError("When clicking on the target box, you need to click twice.");
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

            {/* Board */}
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
                        onClick={() => handlePieceClick(row, col)}  
                        onDoubleClick={() => handleTileClick(row, col)} 
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
                  color: players[0].color,
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
                  color: players[2].color, 
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
                  color: players[1].color, 
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