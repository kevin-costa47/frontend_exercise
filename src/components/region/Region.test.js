import React from "react";
import { shallow, mount } from "enzyme";
import Region from "./Region";
import ForecastContext from "../../context/forecast/ForecastContext";

const renderWithContext = (children, value) => {
  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
};

describe("Region", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const regions = [
    {
      idAreaAviso: "AVR",
      globalIdLocal: "1010500",
    },
  ];

  const getForecast = jest.fn();

  const context = {
    regions,
    getForecast,
  };

  it("Should render the Region Component correctly", () => {
    let wrapped = mount(renderWithContext(<Region />, context));

    expect(wrapped).toMatchSnapshot();
  });

  it("Simulates getForecast Event", () => {
    const button = mount(renderWithContext(<Region />, context));

    button.find("button").simulate("click");
    expect(getForecast.mock.calls.length).toEqual(1);
  });
});
