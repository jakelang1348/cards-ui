import React from 'react';
import './Card.css';

function Card({ text, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {text}
    </div>
  );
}

export default Card;