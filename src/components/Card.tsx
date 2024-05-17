import React from "react";

interface CardProps {
  suit: string;
  value: string;
  image: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ suit, value, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-corner top-left">
        <span>{value}</span>
        <img src={image} alt={`${value} of ${suit}`} className="card-symbol" />
      </div>
      <div className="card-corner bottom-right">
        <span>{value}</span>
        <img src={image} alt={`${value} of ${suit}`} className="card-symbol" />
      </div>
      <div className="card-center">
        <img src={image} alt={`${value} of ${suit}`} className="card-symbol" />
      </div>
    </div>
  );
};

export default Card;
