import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CountryDetails = ({ countryData }) => {
  return (
    <div className='countrydetails'>
      <h3>Symbols</h3>
      <Row>
        <Col>
          <img src={countryData.flags.svg} />
        </Col>
        <Col>
          <h2>{countryData.name.official}</h2>
        </Col>
        <Col>
          <img src={countryData.coatOfArms.svg} />
        </Col>
      </Row>

      {JSON.stringify(countryData)}
    </div>
  )
}

export default CountryDetails
