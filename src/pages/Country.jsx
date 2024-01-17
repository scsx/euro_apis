import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import getCountryName from '../api/getCountryName'
import getCountryDetails from '../api/getCountryDetails'
import Page from '../hooks/Page'
import Loading from '../components/Loading'
import ErrorBoundaryComponent from '../components/ErrorBoundaryComponent'
import CountryDetails from './country-components/CountryDetails'
import CountryComparison from './country-components/CountryComparison'
import './Country.scss'

const Country = () => {
  const { countryId } = useParams()
  const [countryData, setCountryData] = useState({})
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const countryVisibleName = getCountryName(countryId)

  // Current Country Details
  useEffect(() => {
    let tempData
    const fetchData = async () => {
      const tempData = await getCountryDetails(countryId)
    }

    fetchData()
    console.log(tempData)
    //setCountryData(tempData)

    /* fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data[0])
      })
      .catch((error) => console.error(error)) */
  }, [])

  // Selected country to compare (if exists in state)
  let countryToCompare = false
  if (selectedCountry != 'None' && selectedCountry != countryId) {
    countryToCompare = true
  }

  // Indicators scroll and back to top
  const refTop = useRef(null)
  const refIndicator1 = useRef(null)
  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Page classes='country' fullWidth={false}>
      <h1 ref={refTop}>{countryVisibleName}</h1>

      <Row>
        <Col xs={8}>
          {Object.keys(countryData).length === 0 && <Loading />}
          {Object.keys(countryData).length > 0 && (
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryComponent}
              onReset={() => {
                // reset the state of your app here
              }}
              resetKeys={['someKey']}>
              <CountryDetails countryData={countryData} />
            </ErrorBoundary>
          )}
        </Col>

        <Col xs={4}>
          {countryToCompare && (
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryComponent}
              onReset={() => {
                // reset the state of your app here
              }}
              resetKeys={['someKey']}>
              <CountryComparison
                countryCode1={countryId}
                countryName1={countryVisibleName}
                countryDetails1={countryData}
                countryCode2={selectedCountry}
                getVisibleName={getCountryName}
              />
            </ErrorBoundary>
          )}

          <ListGroup className='indicatorlist mt-3'>
            <ListGroup.Item
              onClick={() => {
                scrollToElement(refIndicator1)
              }}>
              Life expectancy at birth
            </ListGroup.Item>
            <ListGroup.Item>Population density</ListGroup.Item>
            <ListGroup.Item>Total fertility rate</ListGroup.Item>
            <ListGroup.Item>Proportion of one person households</ListGroup.Item>
            <ListGroup.Item>Consumer price index</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <h2
        style={{
          marginTop: '15rem'
        }}>
        Life expectancy at birth
      </h2>
      <h2
        style={{
          marginTop: '15rem'
        }}>
        Life expectancy at birth
      </h2>
      <h2
        style={{
          marginTop: '15rem'
        }}>
        Life expectancy at birth
      </h2>
      <h2
        ref={refIndicator1}
        style={{
          marginTop: '15rem'
        }}>
        Life expectancy at birth
      </h2>
    </Page>
  )
}

export default Country
