/* eslint-disable react/prop-types */

export const NavBar = ({setCity, city}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCity = document.getElementById("city")
    setCity(newCity.value)
    console.log(city)
  }
  return(
    <nav>
      <h1>Climate App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Search a city</label>
        <div>
          <input type="text" name="city" id="city" />
          <input type="submit" value="Buscar" />         
        </div>
      </form>
    </nav>
  )
}