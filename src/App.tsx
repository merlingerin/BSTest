import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import flightApi from "./api";
import { getCity, getFlightName, getPnlName } from "./reducers/upcomingFlights";
import SelectPnl from "./components/SelectPnl";
import SelectCity from "./components/SelectCity";

const App: React.FC = () => {
  useEffect(() => {
    flightApi.upcomingFlights.getAll().then(response => {
      setDepartureCity(getCity(response.data, "DepartureCity"));
      seArrivalCity(getCity(response.data, "ArrivalCity"));
      setFlightName(getFlightName(response.data));
      setPnlName(getPnlName(response.data));
    });
  }, []);

  const [pnlName, setPnlName] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [arrivalCity, seArrivalCity] = useState();
  const [flightName, setFlightName] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/"
          onClick={() =>
            flightApi.authorization.createToken().then(response => {
              console.log("RESPONSE", response);
            })
          }
        >
          Get token
        </a>

        <SelectPnl name="pnlName" id="pnlName-select" options={pnlName} />
        <SelectCity
          name="departureCity"
          id="departureCity-select"
          options={departureCity}
        />
        <SelectCity
          name="arrivalCity"
          id="arrivalCity-select"
          options={arrivalCity}
        />
      </header>
    </div>
  );
};

export default App;
