import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForecastProvider from "./context/forecast/ForecastProvider";
import Home from "./components/Home.js";
import './App.css';

const App = () => {
  return (
    <ForecastProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    </ForecastProvider>
  );
};

export default App;
