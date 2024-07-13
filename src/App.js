import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UsernameProvider } from './contexts/UsernameContext';
import Hand from './components/Hand';
import BlackCard from './components/BlackCard';
import Login from './components/Login';
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

function GamePage() {

  return (
    <header className="App-header">
      <GameHeader />
      <BlackCard text="Lorem ipsum dolor sit amet" />
      <h1>Your Hand</h1>
      <Hand />
    </header>
  );
}

function GameHeader() {
  // Display the username in the header or any other part of the game UI
  return (
    <div className="game-header">
      <UsernameDisplay />
    </div>
  );
}

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
