import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="lg:d-flex justify-content-between"
        >
          <Nav className="mr-auto"></Nav>
          <Nav className="ml-auto">
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                Signin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Sign up
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
