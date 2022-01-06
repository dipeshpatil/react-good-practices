import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import config from "../../../config/config";

import { Form } from "react-bootstrap";

import "../InputGroups.scss";

const { isDark } = config;

const DropdownInput = ({ labelText, dropDownValues = [] }) => {
  return (
    <Form.Group className="mb-3 readex-pro">
      <Form.Label className={clsx([isDark && "text-light", "readex-pro"])}>
        {labelText}
      </Form.Label>
      <Form.Control
        className={clsx([isDark && "form-control__dark"])}
        as="select"
        defaultValue={dropDownValues[0]}
      >
        {dropDownValues.length > 0 && (
          <option key={0} value={dropDownValues[0]}>
            {dropDownValues[0]}
          </option>
        )}
        {dropDownValues.length > 0 &&
          dropDownValues.splice(1).map((dropDownValue, idx) => {
            return (
              <option key={idx + 1} value={dropDownValue}>
                {dropDownValue}
              </option>
            );
          })}
      </Form.Control>
    </Form.Group>
  );
};

DropdownInput.propTypes = {
  labelText: PropTypes.string,
  dropDownValues: PropTypes.array,
};

export default DropdownInput;
