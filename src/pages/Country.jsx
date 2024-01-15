import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import getCountryName from '../api/getCountryName'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from '../hooks/Page'
import Loading from '../components/Loading'
import CountryComparison from './CountryComparison'
import './Country.scss'

const Country = () => {
  const { countryId } = useParams()
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const countryVisibleName = getCountryName(countryId)

  let countryToCompare = false
  if (selectedCountry != 'None' && selectedCountry != countryId) {
    countryToCompare = true
  }

  return (
    <Page classes='country'>
      <h1>{countryVisibleName}</h1>
      <Row>
        <Col xs={countryToCompare ? 8 : 12}>
          <Loading />
        </Col>

        {countryToCompare && (
          <Col xs={4}>
            <CountryComparison
              code={countryId}
              name={countryVisibleName}
              selectedCountry={selectedCountry}
              getVisibleName={getCountryName}
            />
          </Col>
        )}

      </Row>
    </Page>
  )
}

export default Country
