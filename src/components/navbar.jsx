import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <iframe
            src="https://giphy.com/embed/V7GkMnENCpzH90yFKQ"
            width="120"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Offerings</Nav.Link>
            <NavDropdown title="Downloads" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Technical Roadmap
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lyre Intake Form - AzDO
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Orion Intake Form - App Onboarding
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Teammembers + Sponsors
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
