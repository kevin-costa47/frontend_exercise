import React from "react";
import Region from "./region/Region";
import Forecast from "./forecast/Forecast";
import Search from "./search/Search";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_layout">
      <div className="home_layout_region search">
        <h2>Regions</h2>
        <Search />
        <div className="region_layout">
          <Region />
        </div>
      </div>
      <div className="home_layout_forecast">
        <div>
          <h1 className="item-center forecastHeader">Forecast</h1>
        </div>
        <div className="forecast_layout">
          <Forecast />
        </div>
      </div>
    </div>
  );
};

export default Home;
