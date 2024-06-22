import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarLinks = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">CSV To DATABASE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/csv-table-list">CSVTABLE</Nav.Link>
            <Nav.Link as={NavLink} to="/csv-chart">CHART</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLinks;