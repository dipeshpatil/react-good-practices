import React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";

import NavBar from "../NavBar/NavBar";

import navBarLinks from "./../../data/navbar_data";

const BasePage = ({
  fluidContainer,
  excludeNavbar,
  children,
  useContainer,
}) => {
  return (
    <>
      {(excludeNavbar ?? true) && (
        <NavBar
          navBarOptions={{
            variant: "dark",
            background: "dark",
            title: "IMPRIMO",
            orientation: "end",
          }}
          links={navBarLinks}
        />
      )}
      {useContainer ?? true ? (
        <Container fluid={fluidContainer ?? true}>{children}</Container>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

BasePage.propTypes = {
  fluidContainer: PropTypes.bool,
  excludeNavbar: PropTypes.bool,
  children: PropTypes.any,
  useContainer: PropTypes.bool,
};

export default BasePage;
