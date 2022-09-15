import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container} from 'react-bootstrap';

function Header() {

  return (
    <div>
        {/* <h1>header</h1> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to='/'>
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='notes'>
              <Nav.Link >Notes</Nav.Link>
            </LinkContainer>
            <LinkContainer>
              <Nav.Link >Create</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
