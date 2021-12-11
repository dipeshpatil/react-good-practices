import clsx from "clsx";
import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";

// Components
import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";
import MapView from "../../components/MapView/MapView";

import aboutPageData from "../../data/about_page_data.json";

import "./AboutPage.scss";

const isDark = JSON.parse(localStorage.isDark);

const aboutPageOptions = {
  fluidContainer: false,
  useContainer: true,

  navBarOptions: {
    variant: isDark ? "dark" : "light",
    background: isDark ? "dark" : "light",
    title: "IMPRIMEX",
    orientation: "end",
  },
};

class AboutPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { content, address, mapView } = aboutPageData;
    return (
      <BasePage pageOptions={aboutPageOptions}>
        <div className="p-4">
          <Header
            size={1}
            additionalClasses={[
              "text-center",
              "readex-pro",
              "readex-pro__medium",
              isDark && "text-light",
            ]}
          >
            About&nbsp;
            <span className={clsx(["oswald", "oswald__semi-bold"])}>
              IMPRIMEX
            </span>
          </Header>
          <div className={clsx(["text-justify", isDark && "text-light"])}>
            {content}
          </div>
        </div>
        <div className="px-4">
          <Header
            size={3}
            additionalClasses={[
              "text-start",
              "readex-pro",
              "readex-pro__medium",
              isDark && "text-light",
            ]}
          >
            Office Address
          </Header>
          <Row>
            <Col sm={4}>
              <div>
                {address.split("_").map((line, idx) => (
                  <div className={isDark && "text-light"} key={idx}>
                    {line}
                  </div>
                ))}
              </div>
            </Col>
            <Col sm={8}>
              <MapView title="Org Map View" embedLink={mapView.embedLink} />
            </Col>
          </Row>
        </div>
      </BasePage>
    );
  }
}

export default AboutPage;
