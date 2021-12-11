import React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import navBarLinks from "./../../data/navbar_data";

const DEFAULT_OPTIONS = {
  fluidContainer: true,
  excludeNavbar: false,
  excludeFooter: false,
  useContainer: true,

  navBarOptions: {
    variant: "light",
    background: "light",
    title: "Navbar",
    orientation: "start",
  },
};

const BasePage = ({ children, pageOptions = DEFAULT_OPTIONS }) => {
  const {
    excludeNavbar,
    excludeFooter,
    fluidContainer,
    useContainer,
    navBarOptions,
  } = pageOptions;

  return (
    <>
      {!(excludeNavbar ?? DEFAULT_OPTIONS.excludeNavbar) && (
        <NavBar
          navBarOptions={navBarOptions ?? DEFAULT_OPTIONS.navBarOptions}
          links={navBarLinks}
        />
      )}
      {useContainer ?? DEFAULT_OPTIONS.useContainer ? (
        <Container fluid={fluidContainer ?? DEFAULT_OPTIONS.fluidContainer}>
          {children}
        </Container>
      ) : (
        <div>{children}</div>
      )}
      {!(excludeFooter ?? DEFAULT_OPTIONS.excludeFooter) && <Footer />}
    </>
  );
};

BasePage.propTypes = {
  children: PropTypes.any,
  pageOptions: PropTypes.object,
};

export default BasePage;
