import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";

import "./NavBar.scss";

const DEFAULT = {
  variant: "light",
  title: "NavBar",
  background: "light",
  orientation: "start",
};

const ALLOWED_NAVBAR_DIRECTIONS = ["start", "left", "end", "right"];

const toggleDarkMode = () => {
  const isDark = JSON.parse(localStorage.isDark);
  localStorage.isDark = !isDark;
};

const NavBar = ({ links = [], navBarOptions = DEFAULT }) => {
  const { variant, title, background, orientation } = navBarOptions;
  console.log(navBarOptions);
  const navbarOrientation = ALLOWED_NAVBAR_DIRECTIONS.slice(0, 2).includes(
    orientation ?? DEFAULT.orientation
  )
    ? "me-auto"
    : "ms-auto";

  return (
    <Navbar
      variant={variant ?? DEFAULT.variant}
      bg={background ?? DEFAULT.background}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => toggleDarkMode()}
          className="logo-text"
        >
          {title ?? DEFAULT.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${navbarOrientation} readex-pro`}>
            {links.map((link) => (
              <NavLink
                className={`nav_link nav_link-${variant}`}
                key={link.id}
                to={link.path}
              >
                {link.name}
              </NavLink>
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
