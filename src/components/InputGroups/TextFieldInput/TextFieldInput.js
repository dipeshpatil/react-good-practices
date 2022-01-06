import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Form } from "react-bootstrap";

import config from "../../../config/config";

import "../InputGroups.scss";

const { isDark } = config;

const TextFieldInput = ({
  type,
  textPlaceholder,
  labelText,
  subText,
  textRef,
  inputAs,
}) => {
  return (
    <Form.Group className="mb-3 readex-pro">
      <Form.Label className={clsx([isDark && "text-light", "readex-pro"])}>
        {labelText}
      </Form.Label>
      <Form.Control
        className={clsx([isDark && "form-control__dark"])}
        as={inputAs ?? "input"}
        ref={textRef}
        type={type ?? "text"}
        placeholder={textPlaceholder ?? `Enter ${labelText}`}
      />
      {(subText ?? false) && (
        <Form.Text className="text-muted">{subText}</Form.Text>
      )}
    </Form.Group>
  );
};

TextFieldInput.propTypes = {
  type: PropTypes.string,
  textPlaceholder: PropTypes.string,
  labelText: PropTypes.string,
  subText: PropTypes.string,
  textRef: PropTypes.any,
  inputAs: PropTypes.string,
};

export default TextFieldInput;
