import React, { useReducer, useMemo, useEffect } from "react";
import ForecastContext from "./ForecastContext";
import ForecastReducer from "./forecastReducer";
import PropTypes from "prop-types";
import { GET_REGIONS, CLEAR_REGIONS, GET_FORECAST, SET_REGION } from "../types";

const ForecastProvider = ({ children }) => {
  const initialState = {
    forecasts: [],
    region: {},
    regions: [],
  };

  const [state, dispatch] = useReducer(ForecastReducer, initialState);

  //Search Regions
  const getRegions = async (text) => {
    await fetch(`http://api.ipma.pt/open-data/distrits-islands.json`)
      .then((res) => res.json())
      .then((result) => {
        let regions = result.data;
        if (text && text !== "") {
          regions = regions.filter((data) => {
            return data["idAreaAviso"]
              .toLowerCase()
              .includes(text.toLowerCase());
          });
        }

        dispatch({ type: GET_REGIONS, payload: regions });
      });
  };

  // Clear Regions
  const clearRegions = () => {
    dispatch({ type: CLEAR_REGIONS });
  };

  //Get Forecast
  const getForecast = async (region) => {
    const { globalIdLocal } = region;

    dispatch({ type: SET_REGION, payload: region });

    await fetch(
      `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type: GET_FORECAST, payload: result.data });
      });
  };

  useEffect(() => {
    getRegions();
  }, []);

  const { forecasts, region, regions } = state;

  const stateMemo = useMemo(() => {
    return {
      forecasts,
      region,
      regions,
      getRegions,
      clearRegions,
      getForecast,
    };
  }, [forecasts, region, regions]);

  return (
    <ForecastContext.Provider value={stateMemo}>
      {children}
    </ForecastContext.Provider>
  );
};

ForecastProvider.propTypes = {
  /**
   * Component to add the Provider
   */
  children: PropTypes.element.isRequired,
};

export default ForecastProvider;
