import React from "react";
import clsx from "clsx";
import { Row, Col, Container } from "react-bootstrap";

import Header from "../Header/Header";
import FooterLinksListGroup from "../ListGroups/FooterLinksListGroup/FooterLinksListGroup";

import footerData from "../../data/footer_data.json";

import config from "../../config/config";

import "./Footer.scss";

const { appName, isDark } = config;

const footerLinksSequence = [
  "products",
  "services",
  "about_us",
  "social_links",
];

const iconClass = {
  darkMode: ["bi-moon-stars-fill", "dark-mode"],
  lightMode: ["bi-lightbulb-fill", "light-mode"],
};

const toggleDarkMode = () => {
  localStorage.isDark = !isDark;
  window.location.reload();
};

const Footer = () => {
  return (
    <div className={clsx(["footer", isDark && "footer__dark"])}>
      <Container>
        <Row>
          {footerLinksSequence.map((sequence, idx) => {
            return (
              <Col key={idx} className="col-6" sm={3}>
                <Header
                  text={footerData[sequence].category}
                  size={4}
                  additionalClasses={[
                    "footer__menu-title",
                    "text-start",
                    "comfortaa",
                    "comfortaa__bold",
                    "text-danger",
                  ]}
                />
                <FooterLinksListGroup
                  listType="unordered"
                  listData={footerData[sequence].links}
                />
              </Col>
            );
          })}
        </Row>
        <div className="quick_links">
          {footerData["quick_links"].map((quickLinkItem, idx) => {
            const { show, link, title } = quickLinkItem;

            return (
              show && (
                <a
                  className={clsx(["quick_link", isDark && "quick_link__dark"])}
                  key={idx}
                  href={link}
                >
                  {title}
                </a>
              )
            );
          })}
        </div>
        <div className="theme-toggle" onClick={() => toggleDarkMode()}>
          <span
            className={clsx([
              isDark && "text-light",
              "readex-pro",
              "readex-pro__semi-bold",
            ])}
          >
            {`Theme: ${isDark ? "Dark" : "Light"}`}
            <i
              className={clsx([
                "bi",
                isDark ? iconClass.darkMode : iconClass.lightMode,
              ])}
            />
          </span>
        </div>
        <div className="copyright">
          <span className="logo-text">IMPRIMEX</span>
          <span
            className={clsx([
              "readex-pro",
              "readex-pro__light",
              "copyright__info",
              isDark ? "text-light" : "text-dark",
            ])}
          >
            {`Copyright ${new Date().getFullYear()} ${appName}. All Rights Reserved.`}
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
