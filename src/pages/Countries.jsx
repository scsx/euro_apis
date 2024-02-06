import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getFlagcdnFlag } from '../utils/utils'
import ErrorBoundaryComponent from '../components/ErrorBoundaryComponent'
import Page from '../components/Page'
import Switch from '../components/Switch'
import './Countries.scss'

const Countries = () => {
  const [switchValue, setSwitchValue] = useState(true)
  const [showCode, setShowCode] = useState(true)
  const countryList = useSelector((state) => state.allCountries.allCountries)

  const handleSwitch = () => {
    setSwitchValue(!switchValue)
    setShowCode(!showCode)
  }

  return (
    <Page classes='countries'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='mb-5'>Countries</h1>
        </div>
        <div className='col-md-6 countrycodes'>
          <p className='countrycodes__help'>Show codes</p>
          <div className='countrycodes__switch'>
            <Switch
              isOn={switchValue}
              onColor='dodgerblue'
              handleToggle={handleSwitch}
            />
          </div>
        </div>
      </div>

      <ErrorBoundary
        FallbackComponent={ErrorBoundaryComponent}
        onReset={() => {}}
        resetKeys={['someKey']}>
        <div className='countrieslist'>
          {countryList.length > 0 &&
            countryList.map((country) => {
              return (
                <div className='countrieslist__item' key={country.code}>
                  <Link to={country.code} className='countrieslist__link'>
                    <div
                      className='countrieslist__flag'
                      style={{
                        backgroundImage: `url(${getFlagcdnFlag(
                          country.code,
                          'w160'
                        )})`
                      }}></div>
                    <div className='countrieslist__linktext'>
                      {country.name}
                      {showCode && <small>{country.code}</small>}
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
      </ErrorBoundary>
    </Page>
  )
}

export default Countries
