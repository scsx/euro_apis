import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

const CountryComparison = ({
  countryCode1,
  countryName1,
  countryCode2,
  getVisibleName
}) => {
  const countryName2 = getVisibleName(countryCode2)

  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

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
            {countryName1} vs {countryName2}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table bordered hover variant='dark' className='comparetable'>
            <thead>
              <tr>
                <th></th>
                <th>{countryCode1}</th>
                <th>{countryCode2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Area</td>
                <td>41 850km²</td>
                <td>71 850km²</td>
              </tr>
              <tr>
                <td>Population</td>
                <td>16 655 799</td>
                <td>1 655 799</td>
              </tr>
              <tr>
                <td>tld</td>
                <td>.nl</td>
                <td>.pt</td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default CountryComparison
