import React from "react";
import { Container, Nav, Navbar as BSNavbar, Button } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <BSNavbar.Brand href="#" className="fw-bold fs-3">
          <span style={{ fontFamily: "monospace" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#home"
              className="px-3 rounded-pill bg-white text-dark fw-semibold"
              style={{ padding: "6px 16px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="px-3 text-white">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="px-3 text-white">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3 text-white">
              Contact
            </Nav.Link>
          </Nav>

          <Button variant="outline-light" className="rounded-pill ms-auto">
            HIRE ME
          </Button>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
