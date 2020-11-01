import React from "react";
import "./App.css";

//import components
import Header from "./Header";
import Cards from "./Cards";
import Chart from "./Chart";
import Map from "./Map";

function App() {
  return (
    <div className="container">
      {/* Header row*/}
      <Header />
      {/* Stats Cards row*/}
      <Cards />
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
