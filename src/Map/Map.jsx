import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import numeral from "numeral";

function Map({ countries, mapCenter, mapZoom }) {
  console.log(countries);
  const countriesLocation = countries.map((country) => (
    <div
      className="info-container"
      lat={country.countryInfo.lat}
      lng={country.countryInfo.long}
      style={{
        color: "red",
        backgroundColor: "#fff",
        height: "25px",
        width: "50px",
        textAlign: "center"
      }}
    >
      <img height="10px" src={country.countryInfo.flag} />
      <p>{numeral(country.cases).format("0,0")}</p>
    </div>
  ));

  return (
    <div style={{ height: "500px", width: "100%" }} className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEIVSOu4JZtqLCs6X1no1b0STscyIqpHs" }}
        defaultCenter={mapCenter}
        defaultZoom={mapZoom}
        center={mapCenter}
        zoom={mapZoom}
      >
        {countriesLocation}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
