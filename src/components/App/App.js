import React, { useState, useEffect } from "react";
import "./app.css";

import { Cards } from "../Cards/Cards";
import { Chart } from "../Chart/Chart";
import { Map } from "../Map/Map";
import { FormControl, Select, MenuItem } from "@material-ui/core";

import { getData } from "../../services/getData";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/all";
    getData(url).then((data) => setCountryInfo(data));
  }, []);

  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/countries";
    getData(url).then((data) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso3
      }));
      setCountries(countries);
      setMapCountries(data);
    });
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    getData(url).then((data) => {
      setCountry(countryCode);
      setCountryInfo(data);

      countryCode === "worldwide"
        ? setMapCenter([{ lat: 34.80746, lng: -40.4796 }])
        : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(5);
    });
  };

  return (
    <div className="container">
      <div className="row header">
        <div className="col-md-6">
          <h1 className="header__title">Enterprise Shiny Dashboard</h1>
        </div>

        <div className="col-md-6 text-md-right text-left">
          <FormControl className="header__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.name} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <Cards countryInfo={countryInfo} />
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <Map
            countries={mapCountries}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <Chart />
        </div>
      </div>
    </div>
  );
};
