import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import MapMarker from "google-map-react";
import numeral from "numeral";

function Map({ countries, mapCenter, mapZoom }) {
  const Countries = ({ countries }) => {
    return countries.map((country) => (
      <div
        key={country.country}
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
  };

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
        <Countries countries={countries} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
