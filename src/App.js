import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UsernameProvider } from './contexts/UsernameContext';
import Hand from './components/Hand';
import Login from './components/Login';
import PlayField from './components/PlayField';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleCardSubmit = () => {
    // Handle card submission logic here
    console.log("Card submitted:", selectedCard);
    setSelectedCard(null);
  };

  return (
    <Router>
      <UsernameProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <GamePage 
                selectedCard={selectedCard} 
                onCardSelect={handleCardSelect}
                onCardSubmit={handleCardSubmit}
              />
            } />
          </Routes>
        </div>
      </UsernameProvider>
    </Router>
  );
}

function GamePage({ selectedCard, onCardSelect, onCardSubmit }) {
  return (
    <div className="game">
      <PlayField selectedCard={selectedCard} onCardSubmit={onCardSubmit} />
      <h1>Your Hand</h1>
      <Hand onCardSelect={onCardSelect} />
    </div>
  );
}

export default App;