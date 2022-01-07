import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

const GridLayout = ({ columns = [], components = [] }) => {
  const validProportions = columns.length === components.length;
  return (
    validProportions && (
      <Row>
        {columns.map((column, cIdx) => {
          const { sm } = column;
          return (
            <Col key={cIdx} sm={sm}>
              {components[cIdx]}
            </Col>
          );
        })}
      </Row>
    )
  );
};

GridLayout.propTypes = {
  columns: PropTypes.array,
  components: PropTypes.array,
};

export default GridLayout;
