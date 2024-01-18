import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import { HiOutlineBuildingLibrary } from 'react-icons/hi2'

import './Header.scss'
import CountrySelector from './CountrySelector'

const Header = () => {
  return (
    <Navbar
      expand='lg'
      className='header bg-body-tertiary justify-content-between'>
      <Container>
        <Navbar.Brand as='span'>
          <NavLink className='euro' to='/'>
            {' '}
            <HiOutlineBuildingLibrary />
          </NavLink>
          <NavLink className='nome' to='/'>
            euro_apis
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='maincollapse' />
        <Navbar.Collapse id='maincollapse'>
          <Nav className='me-auto'>
            <Nav.Link as='span'>
              <NavLink to='/countries'>Countries</NavLink>
            </Nav.Link>
            <NavDropdown title='Other'>
              <NavDropdown.Item as='span'>
                <NavLink to='/fullpage'>Fullpage</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/distritos-demografia'>
                Demografia
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
