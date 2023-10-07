/* eslint-disable react/prop-types */

export const NavBar = ({setCity}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCity = document.getElementById("city")
    if (newCity.value == ""){
      return
    }
    setCity(newCity.value)
  }
  return(
    <nav>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Search a city</label>
        <div>
          <input type="text" name="city" id="city"/>
          <input type="submit" value="Buscar" className="btn"/>         
        </div>
      </form>
    </nav>
  )
}