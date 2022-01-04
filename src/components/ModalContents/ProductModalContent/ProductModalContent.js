import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Row, Col, Image } from "react-bootstrap";

import config from "../../../config/config";

import "./ProductModalContent.scss";

const { isDevice } = config;

const ProductModalContent = ({ product = {} }) => {
  const { description, image, tags, featured } = product;
  const productImage = isDark
    ? product.image.dark ?? product.image
    : product.image.light ?? product.image;

  return (
    <Container className={clsx(["p-2"])} fluid>
      <Row>
        <Col sm={4} md={4} lg={4}>
          <center>
            <Image className="featured-product-image" src={productImage} />
          </center>
        </Col>
        <Col
          className={clsx([
            isDevice && "mt-3",
            "text-justify",
            "readex-pro",
            "readex-pro__light",
          ])}
          sm={8}
          md={8}
          lg={8}
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
              className={clsx(["featured", "readex-pro", "readex-pro__light"])}
            >
              <span className="featured-tag">
                Featured Product <i className="bi bi-check-circle-fill" />
              </span>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

ProductModalContent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductModalContent;
