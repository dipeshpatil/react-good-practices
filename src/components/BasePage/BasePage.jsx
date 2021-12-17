import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import navBarLinks from "./../../data/navbar_data";

import config from "../../config/config";

const { appName, isDark } = config;

const DEFAULT_OPTIONS = {
  fluidContainer: true,
  excludeNavbar: false,
  excludeFooter: false,
  useContainer: true,
  additionalClasses: [isDark && "dark-page"],

  navBarOptions: {
    variant: isDark ? "dark" : "light",
    background: isDark ? "dark" : "light",
    title: appName,
    orientation: "end",
  },
};

const BasePage = ({ children, pageOptions = DEFAULT_OPTIONS }) => {
  const {
    excludeNavbar,
    excludeFooter,
    fluidContainer,
    useContainer,
    navBarOptions,
    additionalClasses,
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
        <Container
          className={clsx([
            additionalClasses,
            ...DEFAULT_OPTIONS.additionalClasses,
          ])}
          fluid={fluidContainer ?? DEFAULT_OPTIONS.fluidContainer}
        >
          {children}
        </Container>
      ) : (
        <div
          className={clsx(
            additionalClasses ?? DEFAULT_OPTIONS.additionalClasses
          )}
        >
          {children}
        </div>
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
