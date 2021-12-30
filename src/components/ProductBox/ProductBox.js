import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Image } from "react-bootstrap";

import config from "../../config/config";

import "./ProductBox.scss";

const { isDark } = config;

const ProductBox = ({
  product = {},
  handleClick,
  disableFeatureTint = false,
}) => {
  const isFeatured = product.featured;
  const isFeaturedAndTintNotDisabled = isFeatured && !disableFeatureTint;

  return (
    <div className="product" onClick={() => handleClick(product)}>
      <Image
        className={clsx([
          "product__image",
          isFeaturedAndTintNotDisabled
            ? "product__image__featured-tint"
            : disableFeatureTint
            ? null
            : "product__image__product-tint",
          isFeaturedAndTintNotDisabled
            ? "product__image__featured-shadowtint"
            : "product__image__normal-shadowtint",
        ])}
        src={product.image}
      />
      <div
        className={clsx([
          "product__title",
          isFeaturedAndTintNotDisabled
            ? "product__title__featured"
            : "product__title__normal",
          isDark && "product__title-dark",
          "readex-pro",
          "readex-pro__medium",
        ])}
      >
        {product.title}
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableFeatureTint: PropTypes.bool,
};

export default ProductBox;
