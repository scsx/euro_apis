import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
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

  const handleCountryChange = (code) => {
    const newCountry = code
    dispatch(chooseCountry(newCountry))
  }

  return (
    <div className='selectcountry'>
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='countrySelectorList' size='sm'>
          {selectedCountry && <span>Selected Country: {selectedCountry}</span>}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as='button'>None</Dropdown.Item>
          {countryList.map((country) => (
            <Dropdown.Item
              as='button'
              key={country.code}
              onClick={() => handleCountryChange(country.code)}>
              {country.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default CountrySelector
