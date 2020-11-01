import React from "react";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <h2 className="card__infoNumber">$ 278</h2>
            <div>
              <span className="card__title">Total Profit</span>
              <span className="card__growth growth__positive">+4.5%</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <h2 className="card__infoNumber">278</h2>
            <div>
              <span className="card__title">Total Profit</span>
              <span className="card__growth growth__positive">+4.5%</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <h2 className="card__infoNumber">278</h2>
            <div>
              <span className="card__title">Total Profit</span>
              <span className="card__growth growth__negative">+4.5%</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <h2 className="card__infoNumber">278</h2>
            <div>
              <span className="card__title">Total Profit</span>
              <span className="card__growth growth__positive">+4.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
