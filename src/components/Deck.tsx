import React from "react";

interface Card {
  suit: string;
  value: string;
  image: string;
}

interface DeckProps {
  cards: Card[];
  moveCard: (fromDeckIndex: number, cardIndex: number) => void;
  deckIndex: number;
}

const Deck: React.FC<DeckProps> = ({ cards, moveCard, deckIndex }) => {
  return (
    <div className="deck">
      {cards.length > 0 ? (
        <div className="card" onClick={() => moveCard(deckIndex, 0)}>
          <img
            src={cards[0].image}
            alt={`${cards[0].value} of ${cards[0].suit}`}
          />
        </div>
      ) : (
        <div className="empty-deck"></div>
      )}
    </div>
  );
};

export default Deck;
