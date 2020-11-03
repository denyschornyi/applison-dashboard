import React, { useState, useEffect } from "react";
import "./chart.css";

import { Line } from "react-chartjs-2";
import { options } from "./options";
import { getData } from "../../services/getData";

export function Chart() {
  const [data, setData] = useState({});

  const casesType = "cases";

  const buildChartData = (data) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";
    getData(url).then((data) => {
      const chartData = buildChartData(data);
      setData(chartData);
    });
  }, []);

  return (
    <div className="chart">
      <h2 className="text-center chart__title">Worldwide daily cases</h2>
      {data && data.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, .2)",
                borderColor: "#cc1034",
                data: data
              }
            ]
          }}
        />
      )}
    </div>
  );
}
