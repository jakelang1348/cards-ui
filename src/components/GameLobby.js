import React, { useState } from 'react';
import './GameLobby.css';

function GameLobby( {userName} ) {
  const [gameCode, setGameCode] = useState('');
  const [hostName, setHostName] = useState('');
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [openGames, setOpenGames] = useState([
    { id: 1, host: 'Player1', players: 2 },
    { id: 2, host: 'Player2', players: 3 },
    { id: 3, host: 'Player3', players: 1 },
    { id: 3, host: 'Player3', players: 1 },
    { id: 3, host: 'Player3', players: 1 },
    { id: 3, host: 'Player3', players: 1 }
  ]);

  const generateGameCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGameCode(code);
  };

  const copyGameCode = () => {
    navigator.clipboard.writeText(gameCode);
    alert('Game code copied to clipboard!');
  };

  const hostGame = () => {
    // Implement host game logic
    generateGameCode();
    setHostName(userName); // Replace with actual username
  };

  const startGame = () => {
    // Implement start game logic
    alert('Starting the game!');
  };

  return (
    <div className="game-lobby">
      <div className="open-games">
        <h2>Open Games</h2>
        <div className="games-grid">
          {openGames.map(game => (
            <div key={game.id} className="game-lobby card">
              <div className="card-content">
                <p>Host: {game.host}</p>
                <p>Players: {game.players}</p>
                <button className="join-button">Join</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <div className="host-sidebar">
        <h2>Host a Game</h2>
        <button onClick={hostGame}>Host Game</button>
        <div className="game-code">
          <input type="text" value={gameCode} readOnly />
          <button onClick={copyGameCode}>Copy</button>
        </div>
        <p>Host: {hostName}</p>
        <h3>Joined Users:</h3>
        <ul>
          {joinedUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <button onClick={startGame} className="start-game">Start Game</button>
      </div>
    </div>
  );
}

export default GameLobby;