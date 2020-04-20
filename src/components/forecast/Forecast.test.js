import React from 'react';
import { shallow, mount } from 'enzyme';
import Forecast from './Forecast';
import ForecastContext from  '../../context/forecast/ForecastContext';

const renderWithContext = (children, value) => {
    return (
        <ForecastContext.Provider value={value}>
            { children }
        </ForecastContext.Provider>
    );
};

describe('Forecast', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const forecasts = [{
        tMax: '25',
        tMin: '20',
        precipitaProb: '30',
        forecastDate: 'Date'
    }];


    const region = {
        idAreaAviso: '23',
    };

    const context = {
        forecasts,
        region,
    };

    it('should render the Forecast Component correctly', () => {
        let wrapped = mount(renderWithContext(<Forecast/>, context));

        expect(wrapped).toMatchSnapshot();
    });

    it('should render null if has not forecasts', () => {
        const newContext = {
            ...context,
            forecasts: []
        };
        let wrapped = shallow(renderWithContext(<Forecast/>, newContext));

        expect(wrapped).toEqual({});
    });
});
