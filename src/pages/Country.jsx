import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from '../hooks/Page'

const Country = () => {
  const { countryId } = useParams()
  const selectedCountry = useSelector((state) => state.country.selectedCountry)

  let countryToCompare = false
  if (selectedCountry !== 'None' && selectedCountry === countryId) {
    countryToCompare = true
  }

  return (
    <Page classes='country'>
      <h1>{countryId}</h1>
      <Row>
        <Col></Col>
      </Row>
    </Page>
  )
}

export default Country
