import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Modal } from "react-bootstrap";

import Header from "../../Header/Header";

import config from "../../../config/config";

import "./VerticalModal.scss";

const { isDevice, isDark } = config;

const defaultOptions = {
  fullScreen: false,
  customHeader: false,
  customHeaderOptions: {
    size: 1,
    additionalClasses: [],
  },
};

const VerticalModal = ({
  verticalModalOptions = defaultOptions,
  modalTitle,
  modalBody,
  modalShow,
  handleClose,
}) => {
  const { fullScreen, customHeader, customHeaderOptions } =
    verticalModalOptions;
  const size = customHeaderOptions?.size ?? 1;
  const additionalClasses = customHeaderOptions?.additionalClasses ?? [];

  return (
    <Modal
      className={clsx([isDark && "modal__dark"])}
      size="xl"
      fullscreen={isDevice && (fullScreen ?? defaultOptions.fullScreen)}
      show={modalShow ?? false}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title
          className={clsx(["readex-pro", "readex-pro__medium", "text-danger"])}
        >
          {customHeader ?? defaultOptions.customHeader ? (
            <Header
              additionalClasses={[
                ...defaultOptions.customHeaderOptions.additionalClasses,
                ...additionalClasses,
              ]}
              size={size ?? defaultOptions.customHeaderOptions.size}
            >
              {modalTitle}
            </Header>
          ) : (
            modalTitle
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
    </Modal>
  );
};

VerticalModal.propTypes = {
  verticalModalOptions: PropTypes.object,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.any.isRequired,
  modalShow: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

export default VerticalModal;
