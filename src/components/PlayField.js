import React from 'react';
import BlackCard from './BlackCard'
import Card from './Card';
import './PlayField.css';

function PlayField({ selectedCard, onCardSubmit }) {
  return (
    <div className="play-field">
      <BlackCard text="Lorem ipsum dolor sit amet" />
      {selectedCard && (
        <>
          <div className="card">
            <Card text={selectedCard} />
          </div>
          <div className="submit">
            <button onClick={onCardSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default PlayField;