import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
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
              <div className='value ms-auto'>
                {toLoc(countryData.population)}
              </div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Capital</div>
              <div className='value ms-auto'>{countryData.capital[0]}</div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Tld</div>
              <div className='value ms-auto'>{countryData.tld[0]}</div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Gini</div>
              <div className='value ms-auto'>{countryData.gini[2018]}</div>
            </Stack>
            {countryData.borders?.length > 0 && (
              <Stack direction='horizontal' gap={3}>
                <div className='key'>Borders</div>
                <div className='value ms-auto'>
                  {countryData.borders.length}
                </div>
              </Stack>
            )}
            <Stack direction='horizontal' gap={3}>
              <div className='key'>Currencies</div>
              <div className='value ms-auto'>
                {Object.keys(countryData.currencies).map((cur) => {
                  return (
                    <Badge key={cur} pill className='currency'>
                      {cur}
                    </Badge>
                  )
                })}
              </div>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CountryDetails
