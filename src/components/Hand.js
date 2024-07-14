import React from 'react';
import Card from './Card';
import './Hand.css';

const cards = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
  "Incididunt ut labore et dolore",
  "Magna aliqua. Ut enim ad minim",
  "Veniam, quis nostrud exercitation",
  "Ullamco laboris nisi ut aliquip",
  "Ex ea commodo consequat",
  "Duis aute irure dolor",
  "In reprehenderit in voluptate"
];

function Hand({ onCardSelect }) {
  return (
    <div className="hand">
      {cards.map((card, index) => (
        <Card key={index} text={card} onClick={() => onCardSelect(card)} />
      ))}
    </div>
  );
}

export default Hand;