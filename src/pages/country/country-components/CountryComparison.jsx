import { useState, useEffect } from 'react'
import getCountryDetails from '../../../api/getCountryDetails'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import { toLoc } from '../../../utils/utils'
import { IoIosArrowRoundForward } from 'react-icons/io'
import CountryComparisonGini from './CountryComparisonGini'
import CountryComparisonFertility from './CountryComparisonFertility'
import CountryComparisonGDPperCapita from './CountryComparisonGDPperCapita'
import CountryComparisonOnePersonHouseholds from './CountryComparisonOnePersonHouseholds'

const CountryComparison = ({
  countryCode1,
  countryName1,
  cd1,
  countryCode2,
  countryName2,
  navigateToPath
}) => {
  const [cd2, setCd2] = useState({})
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

  // 2nd Country Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDetails = await getCountryDetails(countryCode2)
        setCd2(fetchedDetails)
      } catch (error) {
        console.error('Error fetching country details:', error)
      }
    }

    fetchData()
  }, [countryCode2])

  return (
    <div className='comparison'>
      <div className='text-right'>
        <Button variant='outline-primary' onClick={handleShow}>
          Compare{' '}
          <b>
            <small>{countryCode1}</small>
          </b>{' '}
          and{' '}
          <b>
            <small>{countryCode2}</small>
          </b>
        </Button>
      </div>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement='end'
        className='offcanvas__compare'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span>{countryName1}</span> vs{' '}
            <span>
              {countryName2}{' '}
              <button
                className='visitlink'
                type='button'
                onClick={() => {
                  navigateToPath(`/countries/${countryCode2}`)
                }}>
                view <IoIosArrowRoundForward />
              </button>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {Object.keys(cd1).length > 0 && Object.keys(cd2).length > 0 && (
            <Table bordered variant='dark' className='comparetable'>
              <thead>
                <tr>
                  <th className='empty'></th>
                  <th>{countryCode1}</th>
                  <th>{countryCode2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='name'>Population</td>
                  <td
                    className={cd1.population > cd2.population ? 'winner' : ''}>
                    {toLoc(cd1.population)}
                  </td>
                  <td
                    className={cd2.population > cd1.population ? 'winner' : ''}>
                    {toLoc(cd2.population)}
                  </td>
                </tr>
                <tr>
                  <td className='name'>Area</td>
                  <td className={cd1.area > cd2.area ? 'winner' : ''}>
                    {toLoc(cd1.area)} km²
                  </td>
                  <td className={cd2.area > cd1.area ? 'winner' : ''}>
                    {toLoc(cd2.area)} km²
                  </td>
                </tr>
                <tr>
                  <td className='name'>Bordering countries</td>
                  <td>{cd1.borders ? cd1.borders.length : '0'}</td>
                  <td>{cd2.borders ? cd2.borders.length : '0'}</td>
                </tr>

                <CountryComparisonGini
                  countryCode2={countryCode2}
                  cd1={cd1}
                  cd2={cd2}
                />

                <CountryComparisonFertility
                  cca3Country1={cd1.cca3}
                  cca3Country2={cd2.cca3}
                />

                <CountryComparisonGDPperCapita
                  cca3Country1={cd1.cca3}
                  cca3Country2={cd2.cca3}
                />

                <CountryComparisonOnePersonHouseholds
                  cca3Country1={cd1.cca3}
                  cca3Country2={cd2.cca3}
                />
              </tbody>
            </Table>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default CountryComparison
