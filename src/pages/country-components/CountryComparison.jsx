import { useState, useEffect } from 'react'
import getCountryDetails from '../../api/getCountryDetails'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { toLoc } from '../../utils/utils'

const CountryComparison = ({
  countryCode1,
  countryName1,
  cd1,
  countryCode2,
  countryName2
}) => {
  const [cd2, setCd2] = useState({})
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [ginis, setGinis] = useState({})
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

  // Gini for both
  useEffect(() => {
    console.log('got here')
    console.log(cd1)
    if (Object.keys(cd1).length > 0 && Object.keys(cd2).length > 0) {
      let yearsAvailable = ['2020', '2019', '2018', '2017', '2016']
      for (let index = 0; index < yearsAvailable.length; index++) {
        if (cd1.gini) {
          if (cd1.gini[yearsAvailable[index]]) {
            setGinis((prevState) => ({
              ...prevState,
              cd1: {
                year: `(${yearsAvailable[index]})`,
                value: cd1.gini[yearsAvailable[index]]
              }
            }))
          }
        } else {
          setGinis((prevState) => ({
            ...prevState,
            cd1: {
              year: '',
              value: 'n/a'
            }
          }))
        }
        if (cd2.gini) {
          if (cd2.gini[yearsAvailable[index]]) {
            setGinis((prevState) => ({
              ...prevState,
              cd2: {
                year: `(${yearsAvailable[index]})`,
                value: cd2.gini[yearsAvailable[index]]
              }
            }))
          }
        } else {
          setGinis((prevState) => ({
            ...prevState,
            cd2: {
              year: '',
              value: 'n/a'
            }
          }))
        }
      }
    }
  }, [countryCode2, cd1, cd2])

  return (
    <div className='comparison'>
      <div className='text-right mb-4'>
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
            <span>{countryName1}</span> vs <span>{countryName2}</span>
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
                {ginis.cd1 && ginis.cd2 && (
                  <tr>
                    <td className='name'>Gini</td>
                    <td
                      className={
                        ginis.cd1.value < ginis.cd2.value ? 'winner' : ''
                      }>
                      {ginis.cd1.value} <small>{ginis.cd1.year}</small>
                    </td>
                    <td
                      className={
                        ginis.cd2.value < ginis.cd1.value ? 'winner' : ''
                      }>
                      {ginis.cd2.value} <small>{ginis.cd2.year}</small>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default CountryComparison
