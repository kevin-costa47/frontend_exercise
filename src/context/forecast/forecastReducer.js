import { GET_REGIONS, CLEAR_REGIONS, GET_FORECAST, SET_REGION } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return {
        ...state,
        regions: action.payload,
      };
    case CLEAR_REGIONS:
      return {
        ...state,
        forecasts: [],
      };
    case GET_FORECAST:
      return {
        ...state,
        forecasts: action.payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};
