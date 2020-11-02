import React, { useState, useEffect } from "react";
import "./App.css";

//import components
import Header from "./Header";
import Cards from "./Cards";
import Chart from "./Chart";
import Map from "./Map";

import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  //useStates
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  //useEffects

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso3
          }));
          setCountries(countries);
        });
    };
    getCountries();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  console.log(countryInfo);

  return (
    <div className="container">
      {/* Header row*/}
      <div className="row header">
        <div className="col-md-6">
          <h1 className="title">Enterprise Shiny Dashboard</h1>
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
      {/* Stats Cards row*/}
      <Cards countryInfo={countryInfo} />
      {/* Production Chart and Map row*/}
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Chart />
        </div>
        <div className="col-md-6 col-sm-12">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
