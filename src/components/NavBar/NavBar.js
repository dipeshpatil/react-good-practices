import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";

import config from "../../config/config";

import "./NavBar.scss";

const { isDark } = config;

const DEFAULT = {
  variant: "light",
  title: "NavBar",
  background: "light",
  orientation: "start",
};

const ALLOWED_NAVBAR_DIRECTIONS = ["start", "left", "end", "right"];

const NavBar = ({ links = [], navBarOptions = DEFAULT }) => {
  const { variant, title, background, orientation } = navBarOptions;
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
      <Container fluid>
        <Navbar.Brand className="logo-text">
          <div className="navbar-brand__info">
            <span className="navbar-brand__info-title">
              {title ?? DEFAULT.title}
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`${navbarOrientation} readex-pro readex-pro__regular`}
          >
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
