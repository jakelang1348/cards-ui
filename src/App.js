import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UsernameProvider } from './contexts/UsernameContext';
import Hand from './components/Hand';
import Login from './components/Login';
import PlayField from './components/PlayField';
import './App.css';



function App() {
  return (
    <Router>
      <UsernameProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<GamePage />} />
          </Routes>
        </div>
      </UsernameProvider>
    </Router>
  );
}

//main page when playing
function GamePage() {

  return (
    <div className="game">
      <GameHeader />  
      <PlayField />
      <h1>Your Hand</h1>
      <Hand />
    </div>
  );
}

//displays username somewhere
function GameHeader() {
  // Display the username in the header or any other part of the game UI
  return (
    <div className="header">
      <UsernameDisplay />
    </div>
  );
}

//!doesn't work yet
function UsernameDisplay() {
  // Display the username using the context
  const { username } = "jake" //useUsername();

  return (
    <div className="username-display">
      {username && <p>Welcome, {username}!</p>}
    </div>
  );
}

export default App;
