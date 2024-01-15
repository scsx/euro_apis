import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { toLoc } from '../../utils/utils'

const CountryDetails = ({ countryData }) => {
  return (
    <div className='countrydetails'>
      <Row>
        <Col xs={3}>
          <div className='images'>
            <img src={countryData.flags.svg} />
            <img src={countryData.coatOfArms.svg} />
          </div>
        </Col>
        <Col xs={9}>
          <div className='maindetails'>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Area</div>
              <div className='value ms-auto'>
                {toLoc(countryData.area)}
                <small>km²</small>
              </div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Population</div>
              <div className='value ms-auto'>{toLoc(countryData.population)}</div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Capital</div>
              <div className='value ms-auto'>{countryData.capital[0]}</div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>tld</div>
              <div className='value ms-auto'>{countryData.tld[0]}</div>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CountryDetails
