import React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";

import NavBar from "../NavBar/NavBar";

import navBarLinks from "./../../config/navbar_links";

const BasePage = ({ fluidContainer, excludeNavbar, children }) => {
  return (
    <>
      {(excludeNavbar ?? true) && (
        <NavBar
          navBarOptions={{
            variant: "dark",
            background: "dark",
            title: "React App",
          }}
          links={navBarLinks}
        />
      )}
      <Container fluid={fluidContainer ?? true}>{children}</Container>
    </>
  );
};

BasePage.propTypes = {
  fluidContainer: PropTypes.bool,
  excludeNavbar: PropTypes.bool,
  children: PropTypes.any,
};

export default BasePage;
