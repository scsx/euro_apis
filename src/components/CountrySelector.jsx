import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCountry } from '../redux/actions/chooseCountry'
import './CountrySelector.scss'

const CountrySelector = () => {
  // State actualmente:
  const state = useSelector((state) => state)
  // console.log('Current State:', state)

  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const dispatch = useDispatch()

  const countryList = state.allCountries.allCountries

  const handleCountryChange = (code) => {
    const newCountry = code
    dispatch(chooseCountry(newCountry))
  }

  const btnText = selectedCountry
    ? 'Selected Country: ' + selectedCountry
    : 'None'

  return (
    <div className='selectcountry'>
      <DropdownButton
        variant='info'
        id='countrySelectorList'
        drop='start'
        size='sm'
        title={btnText}>
        <Dropdown.Item as='button'>None</Dropdown.Item>

        {countryList.map((country) => (
          <Dropdown.Item
            as='button'
            className={country.code === selectedCountry ? 'active' : ''}
            key={country.code}
            onClick={() => handleCountryChange(country.code)}>
            {country.name}
          </Dropdown.Item>
        ))}
        {/* <Dropdown.Divider />
        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item> */}
      </DropdownButton>
    </div>
  )
}

export default CountrySelector
