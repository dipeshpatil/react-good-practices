import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { ListGroup } from "react-bootstrap";

import "./SimpleListGroupWithIconButton.scss";

const acceptedIconButtonOrientationValues = ["start", "left", "end", "right"];

const SimpleListGroupWithIconButton = ({
  listData = [],
  handleIconClick,
  bootstrapIconClasses = [],
  iconButtonOrientation,
  iconButtonAdditionalClasses = [],
  ...props
}) => {
  const isValidOrientationValue = acceptedIconButtonOrientationValues.includes(
    iconButtonOrientation
  );
  const orientation = isValidOrientationValue
    ? acceptedIconButtonOrientationValues
        .slice(0, 2)
        .includes(iconButtonOrientation)
      ? "left"
      : "right"
    : "right";

  return (
    <ListGroup variant={props.variant}>
      {listData.map((listItem, listIdx) => (
        <ListGroup.Item key={listIdx}>
          {listItem}
          <span
            onClick={() => handleIconClick(listIdx)}
            className={`float-${orientation} icon-button px-1 ${clsx(
              iconButtonAdditionalClasses
            )}`}
          >
            <i className={`bi bi-${clsx(bootstrapIconClasses)}`} />
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

SimpleListGroupWithIconButton.propTypes = {
  listData: PropTypes.array,
  handleIconClick: PropTypes.func,
  bootstrapIconClasses: PropTypes.array,
  iconButtonOrientation: PropTypes.string,
  iconButtonAdditionalClasses: PropTypes.array,
  variant: PropTypes.string,
};

export default SimpleListGroupWithIconButton;
