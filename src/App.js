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
      <PlayField />
      <h1>Your Hand</h1>
      <Hand />
    </div>
  );
}

export default App;
