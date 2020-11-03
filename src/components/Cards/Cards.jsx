import React from "react";
import "./cards.css";
import PropTypes from "prop-types";

import { Card } from "../Card/Card";

export function Cards({ countryInfo }) {
  const {
    todayCases,
    cases,
    todayRecovered,
    recovered,
    todayDeaths,
    deaths
  } = countryInfo;
  return (
    <div className="cards">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-12">
          <Card cases={todayCases} title="Coronavirus cases" total={cases} />
        </div>
        <div className="col-md-4 col-sm-4 col-12">
          <Card cases={todayRecovered} title="Recovered" total={recovered} />
        </div>
        <div className="col-md-4 col-sm-4 col-12">
          <Card cases={todayDeaths} title="Death" total={deaths} />
        </div>
      </div>
    </div>
  );
}

Cards.propType = {
  countryInfo: PropTypes.object
};
