import { createContext } from "react";

const forecastContext = createContext({
    forecasts: [],
    region: {},
    regions: [],
});

export default forecastContext;
