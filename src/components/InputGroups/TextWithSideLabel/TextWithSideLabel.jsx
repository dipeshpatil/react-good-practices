import React from "react";
import PropTypes from "prop-types";

import { InputGroup, FormControl } from "react-bootstrap";

const labelOrientationAcceptedValues = ["left", "right", "start", "end"];

const DecideOrientationComponent = ({
  orientation,
  placeholder,
  labelText,
  textRef,
}) => {
  const isValidOrientation =
    labelOrientationAcceptedValues.includes(orientation);

  const TextInputField = () => (
    <FormControl ref={textRef} placeholder={placeholder} />
  );
  const SideLabel = () => <InputGroup.Text>{labelText}</InputGroup.Text>;

  return isValidOrientation ? (
    ["start", "left"].includes(orientation) ? (
      <>
        <SideLabel />
        <TextInputField />
      </>
    ) : (
      <>
        <TextInputField />
        <SideLabel />
      </>
    )
  ) : (
    <TextInputField />
  );
};

const TextWithSideLabel = ({
  textPlaceHolder,
  textRef,
  labelText,
  labelOrientation,
}) => {
  return (
    <InputGroup>
      <DecideOrientationComponent
        orientation={labelOrientation}
        placeholder={textPlaceHolder}
        labelText={labelText}
        textRef={textRef}
      />
    </InputGroup>
  );
};

TextWithSideLabel.propTypes = {
  textPlaceHolder: PropTypes.string,
  textRef: PropTypes.any,
  labelText: PropTypes.string,
  labelOrientation: PropTypes.string,
};

export default TextWithSideLabel;
