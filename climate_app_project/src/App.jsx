import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";

const CLIMATE_API_END_POINT =
  "http://api.weatherapi.com/v1/forecast.json?key=33451e9211a54eeeb5e143827230410&days=3&aqi=no&alerts=no&q=";

  function useForecast ({city}) {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
      fetch(`${CLIMATE_API_END_POINT}${city}`)
        .then((res) => res.json())
        .then((response) => {
          const { forecast } = response;
          setForecast(forecast.forecastday);

        });
    }, [city]);

    return {forecast}
  }

function App() {
  const [city, setCity] = useState("London");
  const {forecast} = useForecast({city})
  
  return (
    <>
      <NavBar setCity={setCity} city={city}/>
      <h2>{city.toUpperCase()} CLIMATE</h2>
      <div className="card-container">
        {forecast.map((climate, index) => {
          return <Card key={index} climate={climate} index={index} />;
        })}
      </div>
    </>
  );
}

export default App;
