import PropTypes from "prop-types";

import { Container, Row, Col, Image } from "react-bootstrap";

import dockData from "../../data/vertical_dock_data.json";
import "./VerticalDock.scss";

const DEFAULT_OPTIONS = {
  useContainer: true,
  fluidContainer: true,
  desktopColSpacing: 2,
  mobileColSpacing: 4,
};

const Dock = ({ data = [], options = DEFAULT_OPTIONS }) => {
  const { desktopColSpacing, mobileColSpacing } = options;
  return (
    <Row className="vertical__dock">
      {data.map((item) => {
        return (
          <Col
            key={item.id}
            className={`col-${
              mobileColSpacing ?? DEFAULT_OPTIONS.mobileColSpacing
            }`}
            sm={desktopColSpacing ?? DEFAULT_OPTIONS.desktopColSpacing}
          >
            <div className="vertical__dock-wrapper">
              <Image
                className="vertical__dock-wrapper-icon"
                src={item.iconURL}
              />
              <span className="vertical__dock-wrapper-title">
                {item.itemName}
              </span>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

const VerticalDock = ({ dockOptions = DEFAULT_OPTIONS }) => {
  const { useContainer, fluidContainer } = dockOptions;

  return useContainer ?? DEFAULT_OPTIONS.useContainer ? (
    <Container fluid={fluidContainer ?? DEFAULT_OPTIONS.fluidContainer}>
      <Dock data={dockData} options={dockOptions} />
    </Container>
  ) : (
    <Dock data={dockData} options={dockOptions} />
  );
};

Dock.propTypes = {
  data: PropTypes.array,
};

VerticalDock.propTypes = {
  dockOptions: PropTypes.object,
};

export default VerticalDock;
