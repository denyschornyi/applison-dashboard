import React from "react";
import "./Cards.css";

import Card from "../Card";

function Cards() {
  return (
    <div className="cards">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-6">
          <Card infoNumber={378} title="Total Profit" growth={4.5} />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card infoNumber={657} title="Active users" growth={8.5} />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card infoNumber={245} title="New Orders" growth={3.9} />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card infoNumber={12} title="Open complaints" growth={-5.3} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
