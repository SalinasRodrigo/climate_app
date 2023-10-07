import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { useForecast } from "./hooks/useForescast";


function App() {
  const [city, setCity] = useState("Asunción");
  const {forecast, errorMessage} = useForecast({city})
  
  return (
    <>
      <NavBar setCity={setCity}/>
      {errorMessage ? <h2>{errorMessage}</h2> : 
        <>
          <h2>{city.toUpperCase()} WEATHER</h2>
          <div className="card-container">
            {forecast.map((climate, index) => {
              return <Card key={index} climate={climate} index={index} />;
            })}
          </div>
        </>
      }
    </>
  );
}

export default App;
