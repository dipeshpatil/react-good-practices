import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import config from "../../../config/config";

import { Form } from "react-bootstrap";

import "../InputGroups.scss";

const { isDark } = config;

const DropdownInput = ({ labelText, dropDownValues = [], handleOnChange }) => {
  return (
    <Form.Group className="mb-3 readex-pro">
      <Form.Label className={clsx([isDark && "text-light", "readex-pro"])}>
        {labelText}
      </Form.Label>
      <Form.Control
        className={clsx([isDark && "form-control__dark"])}
        as="select"
        onChange={(e) => handleOnChange(e)}
        defaultValue="Select"
      >
        {dropDownValues.length > 0 && (
          <option key={0} disabled>
            Select
          </option>
        )}
        {dropDownValues.length > 0 &&
          dropDownValues.map((dropDownValue, idx) => {
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
  handleOnChange: PropTypes.func.isRequired,
};

export default DropdownInput;
