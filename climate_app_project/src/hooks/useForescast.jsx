import { useEffect, useState } from "react";

const CLIMATE_API_END_POINT = import.meta.env.VITE_CLIMATE_API_END_POINT

export function useForecast ({city}) {
  const [forecast, setForecast] = useState([]);
  const [errorMessage, setError] = useState(null);

  useEffect(() => {
    fetch(`${CLIMATE_API_END_POINT}${city}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.error){
          setError(response.error.message)
          throw new Error(`HTTP error! status: ${response.error.message}`)
        }
        const { forecast } = response;
        setError(null)
        setForecast(forecast.forecastday);
      })
      .catch((error)=>console.log(error))
  }, [city]);

  return {forecast, errorMessage}
}