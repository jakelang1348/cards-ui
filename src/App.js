import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { UsernameProvider } from './contexts/UsernameContext';
import Hand from './components/Hand';
import GameLobby from './components/GameLobby';
import Login from './components/Login';
import PlayField from './components/PlayField';
import ResultsPage from './components/ResultsPage';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [blackCard, setBlackCard] = useState("Lorem ipsum dolor sit amet");
  const [submittedCards, setSubmittedCards] = useState([]);
  const [userName, setUserName] = useState("");

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleCardSubmit = (navigate) => {
    if (selectedCard) {
      setSubmittedCards([...submittedCards, selectedCard]);
      setSelectedCard(null);
      navigate('/results');
    }
  };

  return (
    <Router>
      <UsernameProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login onNameEnter={setUserName} />} />
            <Route path='/lobby' element={<GameLobby userName={userName} />} />
            <Route path="/" element={
              <GamePage 
                selectedCard={selectedCard} 
                onCardSelect={handleCardSelect}
                onCardSubmit={handleCardSubmit}
                blackCard={blackCard}
                //I think here some more actual game elements would need to be added, like the game id and username
              />
            } />
            <Route path="/results" element={
              <ResultsPage 
                blackCard={blackCard}
                whiteCards={submittedCards}
              />
            } />
          </Routes>
        </div>
      </UsernameProvider>
    </Router>
  );
}

function GamePage({ selectedCard, onCardSelect, onCardSubmit, blackCard }) {
  const navigate = useNavigate();

  return (
    <div className="game">
      <PlayField 
        selectedCard={selectedCard} 
        onCardSubmit={() => onCardSubmit(navigate)}
        blackCard={blackCard}
      />
      <h1>Your Hand</h1>
      <Hand onCardSelect={onCardSelect} />
    </div>
  );
}

export default App;