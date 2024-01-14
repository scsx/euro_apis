import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import getCountryName from '../api/getCountryName'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from '../hooks/Page'
import CountryComparison from './CountryComparison'

const Country = () => {
  const { countryId } = useParams()
  const selectedCountry = useSelector((state) => state.country.selectedCountry)
  const countryVisibleName = getCountryName(countryId)


  let countryToCompare = false
  if (selectedCountry != 'None' && selectedCountry != countryId) {
    countryToCompare = true
  }
  console.log(countryToCompare)

  return (
    <Page classes='country'>
      <h1>{countryVisibleName}</h1>
      <Row>
        <Col xs={countryToCompare ? 9 : 12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit est facilis aspernatur voluptatibus! Soluta doloremque velit et consequatur excepturi aliquam ab! Consequuntur delectus pariatur expedita fuga atque eos vitae voluptate.
        </Col>
        {countryToCompare && (
          <Col xs={3}>
          <CountryComparison code={countryId} name={countryVisibleName} />
        </Col>
        )}
      </Row>
    </Page>
  )
}

export default Country
