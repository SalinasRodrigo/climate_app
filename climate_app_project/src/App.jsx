import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

const CLIMATE_API_END_POINT =
  "http://api.weatherapi.com/v1/forecast.json?key=33451e9211a54eeeb5e143827230410&q=Asunci%C3%B3n&days=3&aqi=no&alerts=no";

function App() {
  const [forecast, setForecast] = useState([]);

  useState(() => {
    fetch(CLIMATE_API_END_POINT)
      .then((res) => res.json())
      .then((response) => {
        const { forecast } = response;
        setForecast(forecast.forecastday);
        console.log(forecast.forecastday);
      });
  }, []);
  return (
    <>
      <div className="card-container">
        {forecast.map((climate, index)=>{
          return(
            <Card key={index} climate={climate}/>
          )
        })}
      </div>
    </>
  );
}

export default App;
