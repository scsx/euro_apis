import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import getCountryName from '../api/getCountryName'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from '../hooks/Page'
import Loading from '../components/Loading'
import { ErrorBoundary } from 'react-error-boundary'
import CountryDetails from './country-components/CountryDetails'
import ErrorBoundaryComponent from '../components/ErrorBoundaryComponent'
import CountryComparison from './country-components/CountryComparison'
import './Country.scss'

const Country = () => {
  const [countryData, setCountryData] = useState({})
  const { countryId } = useParams()
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const countryVisibleName = getCountryName(countryId)

  // Current Country Details
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data[0])
      })
      .catch((error) => console.error(error))
  }, [])

  // Selected country to compare (if exists in state)
  let countryToCompare = false
  if (selectedCountry != 'None' && selectedCountry != countryId) {
    countryToCompare = true
  }

  console.log(countryData)
  
  return (
    <Page classes='country'>
      <h1>{countryVisibleName}</h1>
      <Row>
        <Col xs={countryToCompare ? 8 : 12}>
          {Object.keys(countryData).length === 0 && <Loading />}
          {Object.keys(countryData).length > 0 && (
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryComponent}
              onReset={() => {
                // reset the state of your app here
              }}
              resetKeys={['someKey']}>
              <CountryDetails
                countryData={countryData}
              />
            </ErrorBoundary>
          )}
        </Col>

        {countryToCompare && (
          <Col xs={4}>
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryComponent}
              onReset={() => {
                // reset the state of your app here
              }}
              resetKeys={['someKey']}>
              <CountryComparison
                code={countryId}
                name={countryVisibleName}
                selectedCountry={selectedCountry}
                getVisibleName={getCountryName}
              />
            </ErrorBoundary>
          </Col>
        )}
      </Row>
    </Page>
  )
}

export default Country
