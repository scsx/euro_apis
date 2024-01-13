import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCountry } from '../redux/actions/chooseCountry'

const CountrySelector = () => {
  // Para ver o state actualmente:
  /*
  const state = useSelector((state) => state)
  console.log('Current State:', state)
  */

  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const dispatch = useDispatch()

  const countryList = ['PT', 'UK', 'US']

  const handleCountryChange = (e) => {
    const newCountry = e.target.value
    dispatch(chooseCountry(newCountry))
  }

  return (
    <div>
      <h2>Choose a Country:</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value=''>Select Country</option>
        {countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {selectedCountry && <p>Selected Country: {selectedCountry}</p>}
    </div>
  )
}

export default CountrySelector
