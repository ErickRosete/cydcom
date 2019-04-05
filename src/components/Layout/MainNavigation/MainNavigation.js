import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import logo from "../../../Assets/Images/Logos/logo.png";

import "./MainNavigation.css";

const mainNavigation = props => {
  return (
    <header className="main-navigation">
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="md"
        variant="dark"
        style={{ backgroundColor: props.navbarColor }}
      >
        <Navbar.Brand as={NavLink} to="/inicio">
          <img src={logo} className="logo" alt="CYDCOM-Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/inicio">
              inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/renta">
              renta
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/venta">
              venta
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/nosotros">
              nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cotizacion">
              cotización
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default mainNavigation;
