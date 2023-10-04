/* eslint-disable react/prop-types */

export const Card = ({climate}) => {

  return(
    <div className="card">
      <h2>{climate.date}</h2>
      <div className="temps">
        <p>{climate.day.mintemp_c} ºC</p>
        <p>{climate.day.maxtemp_c} ºC</p>
      </div>
    </div>
  )

}