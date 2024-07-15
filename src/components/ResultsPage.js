import React from 'react';
import BlackCard from './BlackCard';
import Card from './Card';
import './ResultsPage.css';

function ResultsPage({ blackCard, whiteCards }) {
  return (
    <div className="results-page">
      <div className="black-card-container">
        <BlackCard text={blackCard} />
      </div>
      <div className="white-cards-container">
        {whiteCards.map((card, index) => (
          <Card key={index} text={card} />
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;