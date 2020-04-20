import React, { useContext } from "react";
import ForecastContext from "../../context/forecast/ForecastContext";
import "./Region.css";

const Region = () => {
  const forecastContext = useContext(ForecastContext);
  const { regions = [] } = forecastContext;

  return regions.map((region) => {
    const { globalIdLocal = "", idAreaAviso } = region;

    const idArea = `${idAreaAviso} ${globalIdLocal}`;

    return (
      <div className="card" key={globalIdLocal}>
        <div className="regions_data_grid">
          <h3 className="item-center">{idArea}</h3>
          <button
            className="btn_show_forecast"
            onClick={() => forecastContext.getForecast(region)}
          >
            Show
          </button>
        </div>
      </div>
    );
  });
};

Region.propTypes = {};

export default Region;
