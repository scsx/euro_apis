import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCountry } from '../redux/actions/chooseCountry'
import './CountrySelector.scss'

const CountrySelector = () => {
  // Para ver o state actualmente:
  /*
  const state = useSelector((state) => state)
  console.log('Current State:', state)
  */

  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const dispatch = useDispatch()

  const countryList = ['UK', 'US', 'PT']

  const handleCountryChange = (e) => {
    const newCountry = e.target.value
    dispatch(chooseCountry(newCountry))
  }

  return (
    <div className='selectcountry'>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value=''>None</option>
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
