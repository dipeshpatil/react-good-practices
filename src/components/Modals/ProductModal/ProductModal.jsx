import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Modal, Container, Row, Col, Image } from "react-bootstrap";

import config from "../../../config/config";

import "./ProductModal.scss";

const { isDark } = config;

const screen = {
  width: window.screen.width,
  height: window.screen.height,
};

const ProductModal = ({ product = {}, handleClose, show }) => {
  const { title, description, image, tags, featured } = product;

  return (
    <Modal
      className={clsx(["product-modal", isDark && "product-modal__dark"])}
      size="xl"
      show={show ?? false}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title
          className={clsx(["readex-pro", "readex-pro__medium", "text-danger"])}
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className={clsx(["p-2"])} fluid>
          <Row>
            <Col sm={4}>
              <center>
                <Image className="featured-product-image" src={image} />
              </center>
            </Col>
            <Col
              className={clsx([
                screen.width >= 320 && screen.width <= 450 && "mt-3",
                "text-justify",
                "readex-pro",
                "readex-pro__light",
              ])}
              sm={8}
            >
              {(tags ?? []).length > 0 && (
                <div className={clsx(["product-tags", "mb-3"])}>
                  {tags.map((tag, idx) => (
                    <span
                      className={clsx([
                        "product-tag",
                        "readex-pro",
                        "readex-pro__light",
                      ])}
                      key={idx}
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              )}
              {description}
              {featured && (
                <div
                  className={clsx([
                    "featured",
                    "readex-pro",
                    "readex-pro__light",
                  ])}
                >
                  <span className="featured-tag">
                    Featured Product <i class="bi bi-check-circle-fill" />
                  </span>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default ProductModal;
