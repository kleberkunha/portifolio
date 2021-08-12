import React from 'react';
import './style.css';
import '../MainComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { HeaderArea } from '../MainComponents';



const Header = () =>  {
  return (
    <HeaderArea>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/studies">Studies</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project-1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project-1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project-1</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderArea>
  );
} 

export default Header;