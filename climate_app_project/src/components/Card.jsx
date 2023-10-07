/* eslint-disable react/prop-types */

export const Card = ({climate, index}) => {

  const handleClick = (index)=>{
    const button = document.getElementById(`${index}-button`)
    const others = document.getElementById(`${index}-others`)
    if (others.className=="others"){
      others.className = "others-hiden";
      button.textContent = "Show more"
      return
    }
    others.className = "others";
    button.textContent = "Show less"
    
  }

  return(
    <div className="card">
      <div className="info">
        <div className="general">
          <h2>{climate.date}</h2>
          <div className="condition">
            <img src={climate.day.condition.icon} alt={climate.day.condition.text} />
            <p>{climate.day.condition.text}</p>
          </div>
          <div className="temps">
            <p className="min">{climate.day.mintemp_c}ºC</p>
            <p className="max">{climate.day.maxtemp_c}ºC</p>
          </div>
        </div>
        <div className="others-hiden" id={`${index}-others`}>
          <p><span>Humidity:</span> {climate.day.avghumidity}%</p>
          <p><span>Average temperature:</span> {climate.day.avgtemp_c}ºC</p>
          <p><span>UV: </span> {climate.day.uv}</p>
          <p><span>Visibility:</span> {climate.day.avgvis_km}km</p>
          <p><span>Maximum wind speed:</span> {climate.day.maxwind_kph}kph</p>
        </div>
      </div>
      <div className="center">
        <button onClick={() => handleClick(index)} id={`${index}-button`}>Show more</button>  
      </div>
    </div>
  )

}