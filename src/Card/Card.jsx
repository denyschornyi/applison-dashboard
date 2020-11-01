import React from "react";
import "./Card.css";

function Card({ infoNumber, title, growth }) {
  return (
    <div className="card">
      <h2 className="card__infoNumber">
        {title === "Total Profit" ? "$" : ""} {infoNumber}
      </h2>
      <div>
        <span className="card__title">{title}</span>
        <span
          className={
            growth > 0
              ? "card__growth growth__positive"
              : "card__growth growth__negative"
          }
        >
          {growth}%
        </span>
      </div>
    </div>
  );
}

export default Card;
