import React, { useContext } from "react";
import ForecastContext from "../../context/forecast/ForecastContext";
import "./Search.css";

const Search = () => {
  const forecastContext = useContext(ForecastContext);

  const onChange = (e) => {
    forecastContext.getRegions(e.target.value);
  };

  return (
    <div className="search_input">
      <input
        type="text"
        name="text"
        placeholder="Seach Regions..."
        onChange={onChange}
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
