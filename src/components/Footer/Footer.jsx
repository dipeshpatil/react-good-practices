import React from "react";
import clsx from "clsx";
import { Row, Col, Container } from "react-bootstrap";

import Header from "../Header/Header";
import FooterLinksListGroup from "../ListGroups/FooterLinksListGroup/FooterLinksListGroup";

import footerData from "../../data/footer_data.json";

import "./Footer.scss";

const isDark = JSON.parse(localStorage.isDark ?? null) || false;

const footerLinksSequence = [
  "products",
  "services",
  "about_us",
  "social_links",
];

const Footer = () => {
  return (
    <div className={clsx(["footer", isDark && "footer__dark"])}>
      <Container>
        <Row>
          {footerLinksSequence.map((sequence, idx) => {
            return (
              <Col key={idx} className="col-6" sm={3}>
                <Header
                  size={4}
                  additionalClasses={[
                    "footer__menu-title",
                    "text-start",
                    "readex-pro",
                    "readex-pro__medium",
                    "text-danger",
                  ]}
                >
                  {footerData[sequence].category}
                </Header>
                <FooterLinksListGroup
                  listType="unordered"
                  listData={footerData[sequence].links}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
