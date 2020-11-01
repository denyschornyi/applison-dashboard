import React from "react";
import "./App.css";

//import components
import Header from "./Header";
import Cards from "./Cards";
function App() {
  return (
    <div className="container">
      {/* Header row*/}
      <Header />
      {/* Stats Cards row*/}
      <Cards />
      {/* Production Chart and Map row*/}
      {/* Buttons row */}
    </div>
  );
}

export default App;
