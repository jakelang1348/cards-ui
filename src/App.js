import React from 'react';
import './App.css';

const cards = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
  "Incididunt ut labore et dolore",
  "Magna aliqua. Ut enim ad minim",
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
  "Incididunt ut labore et dolore",
  "Magna aliqua. Ut enim ad minim"

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Hand</h1>
        <div className="hand">
          {cards.map((card, index) => (
            <div key={index} className="card">
              {card}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
