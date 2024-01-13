import { createContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.scss'
import CountrySelector from './CountrySelector'

const Header = () => {
  return (
    <Navbar
      expand='lg'
      className='header bg-body-tertiary justify-content-between'>
      <Container>
        <Navbar.Brand href='/'>
          <span className='euro'>
            Logo
          </span>
          <span className='nome'>geoapi.pt</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='maincollapse' />
        <Navbar.Collapse id='maincollapse'>
          <Nav className='me-auto'>
            <NavDropdown title='Distritos'>
              <NavDropdown.Item href='/distritos/Lisboa'>
                Lisboa
              </NavDropdown.Item>
              <NavDropdown.Item href='/distritos/Porto'>Porto</NavDropdown.Item>
              <NavDropdown.Item href='/distritos'>
                Todos os distritos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/distritos-demografia'>
                Demografia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as='span'>
              Municípios
            </Nav.Link>
            <NavDropdown title='Extra'>
              <NavDropdown.Item href='/extra/poder-de-compra'>
                Poder de compra
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <CountrySelector />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
