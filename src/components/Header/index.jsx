import React from 'react';
import './style.css';
import '../MainComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Nav, Navbar, Container } from 'react-bootstrap';
import { HeaderArea } from '../MainComponents';
import { Link } from 'react-router-dom';

const Header = () =>  {
  return (
    <HeaderArea>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav">
              <Link to="/home"><h5>Home</h5></Link>
              <Link to="/studies"><h5>Studies</h5></Link>
              <Link to="/projects"><h5>Projects</h5></Link>
            </Nav>
          </Navbar.Collapse>
          <div className="text-center d-flex">Status :&nbsp; Available <div className="available border"></div></div>
        </Container>
      </Navbar>
    </HeaderArea>
  );
} 

export default Header;