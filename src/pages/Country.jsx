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
import CountryCPI from './country-components/CountryCPI'
import CountryPopDensity from './country-components/CountryPopDensity'
import CountryTFR from './country-components/CountryTFR'
import './Country.scss'

const Country = () => {
  const { countryId } = useParams()
  const [countryData1, setCountryData1] = useState({})
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const countryVisibleName = getCountryName(countryId)

  // Current Country Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDetails = await getCountryDetails(countryId)
        setCountryData1(fetchedDetails)
      } catch (error) {
        console.error('Error fetching country details:', error)
      }
    }

    fetchData()
  }, [])

  // Selected country to compare (if exists in state)
  let countryToCompare = false
  if (selectedCountry != 'None' && selectedCountry != countryId) {
    countryToCompare = true
  }

  // Indicators scroll and back to top
  const refTop = useRef(null)
  const refIndicator1 = useRef(null)
  const refIndicator2 = useRef(null)
  const refIndicator3 = useRef(null)
  const scrollToEl = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Page classes='country' fullWidth={false}>
      <h1 ref={refTop}>{countryVisibleName}</h1>

      <Row>
        <Col xs={8}>
          {Object.keys(countryData1).length === 0 && <Loading />}
          {Object.keys(countryData1).length > 0 && (
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryComponent}
              onReset={() => {
                // reset the state of your app here
              }}
              resetKeys={['someKey']}>
              <CountryDetails countryData={countryData1} />
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
                cd1={countryData1}
                countryCode1={countryId}
                countryName1={countryVisibleName}
                countryCode2={selectedCountry}
                countryName2={getCountryName(selectedCountry)}
              />
            </ErrorBoundary>
          )}

          <ListGroup className='indicatorlist mt-3'>
            <ListGroup.Item
              onClick={() => {
                scrollToEl(refIndicator1)
              }}>
              Consumer price index
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                scrollToEl(refIndicator2)
              }}>
              Population density
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                scrollToEl(refIndicator3)
              }}>
              Total fertility rate
            </ListGroup.Item>
            <ListGroup.Item>GDP per capita</ListGroup.Item>
            <ListGroup.Item>Proportion of one person households</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <section className='cpi'>
        <h2 ref={refIndicator1}>Consumer price index</h2>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryComponent}
          onReset={() => {
            // reset the state of your app here
          }}
          resetKeys={['someKey']}>
          <CountryCPI cca3={countryData1.cca3} />
        </ErrorBoundary>
      </section>

      <section className='popdensity'>
        <h2 ref={refIndicator2}>
          Population density <small>per sq. km</small>
        </h2>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryComponent}
          onReset={() => {
            // reset the state of your app here
          }}
          resetKeys={['someKey']}>
          <CountryPopDensity cca3={countryData1.cca3} />
        </ErrorBoundary>
      </section>

      <section className='fertility'>
        <h2 ref={refIndicator3}>
          Total fertility rate
        </h2>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryComponent}
          onReset={() => {
            // reset the state of your app here
          }}
          resetKeys={['someKey']}>
          <CountryTFR cca3={countryData1.cca3} />
        </ErrorBoundary>
      </section>
    </Page>
  )
}

export default Country
