import React from "react";
import "./map.css";

import Card from "@material-ui/core/Card";
import GoogleMapReact from "google-map-react";
import numeral from "numeral";

export function Map({ countries, mapCenter, mapZoom }) {
  const CountryMarker = ({ country }) => (
    <Card
      className="info-container"
      style={{
        color: "red",
        backgroundColor: "#fff",
        height: "25px",
        width: "50px",
        textAlign: "center"
      }}
    >
      <img height="10px" src={country.countryInfo.flag} alt={country.country} />
      <p>{numeral(country.cases).format("0,0")}</p>
    </Card>
  );

  const countriesMarker = countries.map((country) => (
    <CountryMarker
      key={country.country}
      lat={country.countryInfo.lat}
      lng={country.countryInfo.long}
      country={country}
    />
  ));

  return (
    <div style={{ height: "500px", width: "100%" }} className="map">
      <h2 className="text-center map__title">Worldwide cases by country</h2>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEIVSOu4JZtqLCs6X1no1b0STscyIqpHs" }}
        defaultCenter={{ lat: 34.80746, lng: -40.4796 }}
        defaultZoom={3}
        center={mapCenter ? mapCenter : ""}
        zoom={mapZoom ? mapZoom : ""}
      >
        {countriesMarker}
      </GoogleMapReact>
    </div>
  );
}
