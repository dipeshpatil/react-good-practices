import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Image } from "react-bootstrap";

import "./ProductBox.scss";

const isDark = JSON.parse(localStorage.isDark ?? null) || false;

const ProductBox = ({ product = {}, handleClick }) => {
  return (
    <div className="product" onClick={(product) => handleClick(product)}>
      <Image className="product__image" src={product.image} />
      <div
        className={clsx([
          "product__title",
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
};

export default ProductBox;
