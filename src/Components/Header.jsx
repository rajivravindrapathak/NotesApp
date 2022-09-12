import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';

function Header() {

  return (
    <div>
        {/* <h1>header</h1> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Notes</Nav.Link>
            <Nav.Link href="#pricing">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
