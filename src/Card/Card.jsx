import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ cases, title, total }) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <h2 className="card__infoNumber">{cases}</h2>
      <p>{total} Total</p>
    </div>
  );
}

Card.propTypes = {
  cases: PropTypes.number,
  title: PropTypes.string,
  total: PropTypes.number
};

export default Card;
