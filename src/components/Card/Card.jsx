import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import numeral from "numeral";

export function Card({ cases, title, total }) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <h2 className="card__infoNumber"> {numeral(cases).format("0,0")}</h2>
      <p>{numeral(total).format("0,0")} Total</p>
    </div>
  );
}

Card.propTypes = {
  cases: PropTypes.number,
  title: PropTypes.string,
  total: PropTypes.number
};
