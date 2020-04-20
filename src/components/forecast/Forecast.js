import React, { useContext } from "react";
import ForecastContext from "../../context/forecast/ForecastContext";
import "./Forecast.css";

const Forecast = () => {
  const forecastContext = useContext(ForecastContext);
  const { forecasts, region } = forecastContext;

  if (forecasts.length === 0) {
    return null;
  }
  const { idAreaAviso } = region;

  return forecasts.map((forecast, index) => {
    const { forecastDate, tMax, tMin, precipitaProb } = forecast;
    const idArea = `${idAreaAviso} ${forecastDate}`;
    const tempMax = `${tMax}ºC`;
    const tempMin = `${tMin}ºC`;

    return (
      <div className="card" key={index}>
        <div className="forecast_grid">
          <h3 className="item-center">{idArea}</h3>
          <h3 className="item-center">
            <b>Max. Temperature:</b>
            {tempMax}
          </h3>
          <h3 className="item-center">
            <b>Min. Temperature:</b>
            {tempMin}
          </h3>
          <h3 className="item-center">
            <b>Precipitation Probability (%):</b>
            {precipitaProb}
          </h3>
        </div>
      </div>
    );
  });
};

Forecast.propTypes = {};

export default Forecast;
