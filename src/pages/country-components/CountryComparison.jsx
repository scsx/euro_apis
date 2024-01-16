import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

const CountryComparison = ({ code, name, selectedCountry, getVisibleName }) => {
  const selectedCountryVisibleName = getVisibleName(selectedCountry)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='comparison'>
      <Button variant='outline-primary' onClick={handleShow}>
        Compare{' '}
        <b>
          <small>{code}</small>
        </b>{' '}
        and{' '}
        <b>
          <small>{selectedCountry}</small>
        </b>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end' className='offcanvas__compare'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {name} vs {selectedCountryVisibleName}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table bordered hover variant="dark">
            <thead>
              <tr>
                <th></th>
                <th>PT</th>
                <th>NL</th>
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
