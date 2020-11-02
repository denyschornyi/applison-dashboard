import React from "react";
import "./Cards.css";

import Card from "../Card";

function Cards({ countryInfo }) {
  console.log();
  return (
    <div className="cards">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-12">
          <Card
            cases={countryInfo.todayCases}
            title="Coronavirus cases"
            total={countryInfo.cases}
          />
        </div>
        <div className="col-md-4 col-sm-4 col-12">
          <Card
            cases={countryInfo.todayRecovered}
            title="Recovered"
            total={countryInfo.recovered}
          />
        </div>
        <div className="col-md-4 col-sm-4 col-12">
          <Card
            cases={countryInfo.todayDeaths}
            title="Death"
            total={countryInfo.deaths}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
