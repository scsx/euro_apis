import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import getCountryName from '../api/getCountryName'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from '../hooks/Page'

const Country = () => {
  const { countryId } = useParams()
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const countryVisibleName = getCountryName(countryId)

  let countryToCompare = false
  if (selectedCountry !== 'None' && selectedCountry === countryId) {
    countryToCompare = true
  }

  return (
    <Page classes='country'>
      <h1>{countryVisibleName}</h1>
      <Row>
        <Col></Col>
      </Row>
    </Page>
  )
}

export default Country
