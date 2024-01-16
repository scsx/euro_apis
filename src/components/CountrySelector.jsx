import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCountry } from '../redux/actions/chooseCountry'
import { useLocation } from 'react-router-dom'

import './CountrySelector.scss'

const CountrySelector = () => {
  // State actualmente:
  // const state = useSelector((state) => state)

  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.allCountries.allCountries)
  // const countryList = state.allCountries.allCountries

  const handleCountryChange = (code) => {
    const newCountry = code
    dispatch(chooseCountry(newCountry))
  }

  const btnText = selectedCountry
    ? 'Selected Country: ' + selectedCountry
    : 'None'

  // Rudimentarily disabling the choice if we are at /countries/{selectedCountry}
  let location = useLocation()
  const [countryPage, setCountryPage] = useState('')

  useEffect(() => {    
    if (location.pathname.includes('countries')) {
      setCountryPage(location.pathname.split('/').pop())
    }
  }, [location])

  return (
    <div className='selectcountry'>
      <DropdownButton
        variant='info'
        id='countrySelectorList'
        drop='start'
        size='sm'
        title={btnText}>
        <Dropdown.Item as='button' onClick={() => handleCountryChange('None')}>
          None
        </Dropdown.Item>

        {countryList.map((country) => (
          <Dropdown.Item
            as='button'
            className={country.code === selectedCountry ? 'active' : ''}
            key={country.code}
            disabled={country.code === countryPage}
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
