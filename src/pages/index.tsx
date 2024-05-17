import React, { useState, useEffect } from "react";
import Deck from "../components/Deck";
import Footer from "../components/Footer";

interface Card {
  suit: string;
  value: string;
  image: string;
}

const initialDeck: Card[] = [
  { suit: "SPADE", value: "A", image: "/cards/SPADE-1.svg" },
  { suit: "SPADE", value: "2", image: "/cards/SPADE-2.svg" },
  { suit: "SPADE", value: "3", image: "/cards/SPADE-3.svg" },
  { suit: "SPADE", value: "4", image: "/cards/SPADE-4.svg" },
  { suit: "DIAMOND", value: "A", image: "/cards/DIAMOND-1.svg" },
  { suit: "DIAMOND", value: "2", image: "/cards/DIAMOND-2.svg" },
  { suit: "DIAMOND", value: "3", image: "/cards/DIAMOND-3.svg" },
  { suit: "DIAMOND", value: "4", image: "/cards/DIAMOND-4.svg" },
  { suit: "HEART", value: "A", image: "/cards/HEART-1.svg" },
  { suit: "HEART", value: "2", image: "/cards/HEART-2.svg" },
  { suit: "HEART", value: "3", image: "/cards/HEART-3.svg" },
  { suit: "HEART", value: "4", image: "/cards/HEART-4.svg" },
];

const getRandomValue = () => {
  const values = ["A", "2", "3", "4"];
  return values[Math.floor(Math.random() * values.length)];
};

const Home: React.FC = () => {
  const [decks, setDecks] = useState<Card[][]>([initialDeck, [], []]);
  const [targetValue, setTargetValue] = useState<string>(""); // Inicializa como una cadena vacía
  const [winMessage, setWinMessage] = useState<string | null>(null);

  // Utiliza useEffect para establecer el valor objetivo solo en el cliente
  useEffect(() => {
    setTargetValue(getRandomValue());
  }, []);

  const resetGame = () => {
    const randomInitialDeck = [...initialDeck].sort(() => Math.random() - 0.5);
    setDecks([randomInitialDeck, [], []]);
    setTargetValue(getRandomValue());
    setWinMessage(null);
  };

  const moveCard = (fromDeckIndex: number, cardIndex: number) => {
    const newDecks = [...decks];
    const [card] = newDecks[fromDeckIndex].splice(cardIndex, 1);
    if (fromDeckIndex === 2) {
      newDecks[0].unshift(card);
    } else if (fromDeckIndex < 2) {
      newDecks[fromDeckIndex + 1].unshift(card);
    }
    setDecks(newDecks);

    if (
      newDecks[0].length > 0 &&
      newDecks[1].length > 0 &&
      newDecks[2].length > 0 &&
      newDecks[0][0].value === targetValue &&
      newDecks[1][0].value === targetValue &&
      newDecks[2][0].value === targetValue
    ) {
      setWinMessage("¡Felicidades! Has ganado el juego.");
    }
  };

  return (
    <>
      <button className="reset-button" onClick={resetGame}>
        Reiniciar Juego
      </button>
      <div className="game-container">
        <div className="game-board">
          <p>Valor objetivo: {targetValue}</p>
          {winMessage && <p>{winMessage}</p>}
          {decks.map((deck, index) => (
            <Deck
              key={index}
              cards={deck}
              moveCard={moveCard}
              deckIndex={index}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
