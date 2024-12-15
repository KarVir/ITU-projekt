/**
 * @file App.js
 * 
 * @description The main component of the "Člověče, nezlob se!" online game. 
 *              It allows creating rooms, joining rooms, entering nicknames, 
 *              displaying room information, starting the game, and showing the game results after it ends.
 * 
 * @author Karolína Virágová (xvirag00)
 *
 */
import './App.css';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Nickname from './Nickname';  
import RoomInfo from './RoomInfo';  
import Board from './Board'; 
import Ended from './Ended'; 

function App() {
  // State variables for storing game-related information
  // Socket for connecting to the server
  const [socket, setSocket] = useState(null);
  // Room code for joining
  const [roomCode, setRoomCode] = useState(""); 
  // Whether to show the nickname input form
  const [showNickname, setShowNickname] = useState(false);
  // The name of the room owner
  const [ownerName, setOwnerName] = useState(''); 
  // The player's nickname
  const [nickname, setNickname] = useState(''); 
  // Room data, including the list of players
  const [roomData, setRoomData] = useState(null); 
  // Determines if the user is creating a new room
  const [isCreateMode, setIsCreateMode] = useState(false); 
  // Determines whether to fill the room with bots
  const [fillWithBots, setFillWithBots] = useState(false); 

  // Message about the game status
  const [statusMessage, setStatusMessage] = useState(""); 
    // Game data (game state, scores, etc.)
  const [gameData, setGameData] = useState(null); 
    // Whether the game has started
  const [gameStarted, setGameStarted] = useState(false);
  // Whether the game has ended
  const [gameEnded, setGameEnded] = useState(false);

  // useEffect to handle socket connection and listen for server messages
  useEffect(() => {
    // Connect to the server via socket.io
    const socket = io('http://127.0.0.1:5000');
    // Set the socket connection in state
    setSocket(socket);

    // When successfully connected
    socket.on('connect', () => {
      console.log('Successfully connected, socket id is ', socket.id);
    });

    // When disconnected
    socket.on('disconnect', () => {
      console.log('You have been disconnected from the server.');
    });

    // When someone joins the room
    socket.on('session:joined', (response) => {
      if (response && response.id && response.name) {
        const newPlayer = {
          id: response.id,
          name: response.name,
          color: response.color || null,
        };
        setStatusMessage(`${response.name} joined`);

        setRoomData((prevRoomData) => {
          const updatedPlayers = prevRoomData ? [...prevRoomData.players, newPlayer] : [newPlayer];
          return {
            key: prevRoomData ? prevRoomData.key : '',
            players: updatedPlayers,
          };
        });
      }
    });

    // When a room is created
    socket.on('session:created', (response) => {
      if (response && response.key && Array.isArray(response.players) && response.owner) {
        setRoomData({
          key: response.key,
          players: response.players,
        });
        setOwnerName(response.owner.name);
      }
    });

    // When the game starts
    socket.on('game:started', (gameState) => {
      setStatusMessage(`Game started`);
      setGameData(gameState);
      setGameStarted(true);
      setGameEnded(false);

      socket.emit('game:play');
    });

    // When the game ends
    socket.on('game:ended', (gameState) => {
      setGameData(gameState);
      setGameStarted(false);
      setGameEnded(false);
    });

    // Cleanup function to disconnect 
    // the socket when the component is unmounted
    return () => {
      // Disconnect from the server
      socket.disconnect();
      // Clear the socket connection
      setSocket(null); 
    };
  }, [roomCode]);// This effect runs whenever the room code changes

  // Function to create a new room
  const createRoom = () => {
    if (socket) {
      setIsCreateMode(true);
      setShowNickname(true);
    }
  };

  // Function ro join an existing room
  const joinRoom = () => {
    if (socket && roomCode) {
      setIsCreateMode(false);
      setShowNickname(true);
    }
  };

  // Function to handle the nickname submission
  const handleNicknameSubmit = (nickname) => {
    setNickname(nickname);
    const roomData = {
      name: nickname,
      key: roomCode || undefined,
    };

    if (!isCreateMode && roomCode) {
      // Join an existiong roomm
      socket.emit('session:join', roomData, (response) => {
        if (response && response.key && Array.isArray(response.players)) {
          setRoomData({
            key: response.key,
            players: response.players,
          });
          setOwnerName(response.owner.name || '');
          setStatusMessage(`You have joined the room`);
        }
      });
    } else if (isCreateMode) {
      // Create a new room
      socket.emit('session:create', roomData, (response) => {
        if (response && response.key && Array.isArray(response.players) && response.owner) {
          setRoomData({
            key: response.key,
            players: response.players,
          });
          setOwnerName(response.owner.name || '');
          setStatusMessage(`You have created a room, press the Start Game button to start the game`);
        }
      });
    }
    // Hide the nickname input form after submission
    setShowNickname(false);
  };

  // Function to start the game if the player is the room owner
  const startGame = () => {
    if (socket && ownerName === nickname) {
      const payload = {
        fillWithBots: fillWithBots, 
      };

      socket.emit('game:start', payload, (response) => {
        if (response) {
          setGameData(response.gameState);
          setGameStarted(true);
        }
      });
    }
  };

  // Function to return to the main screen after the game ends
  const handleReturnToMainScreen = () => {
    socket.disconnect();
    socket.emit('game:leave');
    setSocket(null);
    setRoomCode('');
    setShowNickname(false);
    setGameData(null);
    setGameStarted(false);
    setGameEnded(false);
    setRoomData(null);
    setStatusMessage(``);
  };

    // Function to start a new game after the previous one ended
    const handleNewGame = () => {
      setGameEnded(false);
      setGameData([]);
      socket.emit('game:start', { fillWithBots: false }, (response) => {
        if (response) {
          setGameData(response.gameState);
          setGameStarted(true); 
        }
      });
    };
   
  return (
    <div className="App">
      <header className="App-header">
        {!gameStarted && !gameEnded && <h1>Člověče, nezlob se! online s přáteli</h1>}
      </header>

      <div className="button-container">
        {gameEnded && gameStarted ? (
          <Ended
            score={gameData?.scores || []}
            houseLength={gameData?.houseLength || 0}
            onNewGame={handleNewGame}
            onReturnToApp={handleReturnToMainScreen} // Předáme funkci pro návrat
          />
        ) : !gameStarted && !gameEnded ? (
          <>
            {!showNickname && !roomData ? (
              <>
                <input
                  type="text"
                  placeholder="Enter the room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                />
                <button onClick={joinRoom}>Join in</button>
                <button onClick={createRoom}>Create Room</button>
              </>
            ) : showNickname ? (
              <Nickname onSubmit={handleNicknameSubmit} />
            ) : roomData && roomData.players && roomData.players.length > 0 ? (
              <>
                <RoomInfo
                  roomCode={roomData.key}
                  players={roomData.players}
                  ownerName={ownerName}
                />
                {ownerName === nickname && (
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                   <label style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' , whiteSpace: 'nowrap'}}>
                     <input
                       type="checkbox"
                       checked={fillWithBots}
                       onChange={() => setFillWithBots(!fillWithBots)}
                     />
                     Fill with bots
                   </label>
                   <button onClick={startGame}>Start Game</button>
                 </div>
                )}
              </>
            ) : (
              <p>Probíhá připojování do místnosti...</p>
            )}
            {statusMessage && <div className="status-message-joined">{statusMessage}</div>}
          </>
        ) : (
          <Board socket={socket} gameData={gameData}  gameStarted={gameStarted} setGameStarted={setGameStarted}  gameEnded={gameEnded} setGameEnded={setGameEnded}  setGameData={setGameData} roomCode={roomCode}  handleReturnToMainScreen={handleReturnToMainScreen}   handleNewGame={handleNewGame}  // Předání funkce pro návrat na hlavní obrazovku
           />
        )}
      </div>

      <div className="circle-container">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
    </div>
  );
}

export default App;
