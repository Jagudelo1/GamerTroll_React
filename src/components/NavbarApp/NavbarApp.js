import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarApp.css'

function NavbarApp() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark" className='NavbarColor'>
      <Container>
      <Navbar.Brand href="#home" className='me-auto'>GAMERTROLL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-auto'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" active>Inicio</Nav.Link>
            <Nav.Link href="#pricing">Juegos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sugerencias</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contactanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavbarApp



;