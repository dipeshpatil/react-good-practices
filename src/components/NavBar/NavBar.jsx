import React from "react";
import PropTypes from "prop-types";

import { Navbar, Container, Nav } from "react-bootstrap";

const DEFAULT = {
  variant: "light",
  title: "NavBar",
  background: "light",
};

const NavBar = ({ links = [], navBarOptions = DEFAULT }) => {
  const { variant, title, background } = navBarOptions;
  return (
    <Navbar
      variant={variant ?? DEFAULT.variant}
      bg={background ?? DEFAULT.background}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">{title ?? DEFAULT.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link key={link.id} href={link.path}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  links: PropTypes.array,
  navBarOptions: PropTypes.object,
};

export default NavBar;
