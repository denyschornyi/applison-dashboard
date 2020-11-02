import React from "react";
import "./Card.css";

function Card({ cases, title, growth }) {
  return (
    <div className="card">
      <h2 className="card__infoNumber">{cases}</h2>

      <span className="card__title">{title}</span>
    </div>
  );
}

export default Card;
