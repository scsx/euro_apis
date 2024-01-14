import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCountry } from '../redux/actions/chooseCountry'
import './CountrySelector.scss'

const CountrySelector = () => {
  const state = useSelector((state) => state)
  // Para ver o state actualmente:
  // console.log('Current State:', state)
  
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const dispatch = useDispatch()

  const countryList = state.allCountries.allCountries

  const handleCountryChange = (e) => {
    const newCountry = e.target.value
    dispatch(chooseCountry(newCountry))
  }

  return (
    <div className='selectcountry'>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value=''>None</option>
        {countryList.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && <p>Selected Country: {selectedCountry}</p>}
    </div>
  )
}

export default CountrySelector
