import React, { useState } from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import Header from "../Header/Header";
import ProductBox from "../ProductBox/ProductBox";
import ProductModal from "../Modals/ProductModal/ProductModal";

import config from "../../config/config";
import clsx from "clsx";

const { isDevice, isDark } = config;

const AllProductsSectionWise = ({
  productsData = {},
  productCategoryMapping = {},
}) => {
  const productKeys = Object.keys(productCategoryMapping);

  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  const setProductAndShowModal = (product = {}) => {
    if (product !== {}) {
      setModalProduct(product);
      setShowModal(true);
    }
  };

  return (
    <div>
      {productKeys.map((productKey, idx) => {
        const productItems =
          productsData.products[productCategoryMapping[productKey]].items;
        const productCategory =
          productsData.products[productCategoryMapping[productKey]].category;

        return (
          <div key={idx}>
            <Header
              size={1}
              text={productCategory}
              additionalClasses={[
                "readex-pro",
                "readex-pro__medium",
                "mt-4",
                isDevice ? "text-center" : "text-start",
                "text-danger",
              ]}
            />
            <Row className="products">
              {productItems.map((productItem, iidx) => {
                return (
                  <Col
                    className={clsx([
                      isDevice ? "text-center" : "text-start",
                      "mt-3",
                    ])}
                    key={iidx}
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    xxl={2}
                  >
                    <ProductBox
                      handleClick={() => setProductAndShowModal(productItem)}
                      product={productItem}
                    />
                  </Col>
                );
              })}
              <div className="dropdown-divider mt-4" />
            </Row>
          </div>
        );
      })}
      <ProductModal
        product={modalProduct}
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
};

AllProductsSectionWise.propTypes = {
  title: PropTypes.string,
  products: PropTypes.object,
  productCategoryMapping: PropTypes.object,
};

export default AllProductsSectionWise;
