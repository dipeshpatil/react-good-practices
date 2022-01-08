import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Row, Col } from "react-bootstrap";

import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import VerticalModal from "../../components/Modals/VerticalModal/VerticalModal";
import ProductModalContent from "../../components/ModalContents/ProductModalContent/ProductModalContent";

import productsData from "../../data/products_page_data.json";

import config from "../../config/config";

import "./ProductsPage.scss";

const { isDevice } = config;

const productPageOptions = {
  fluidContainer: false,
  useContainer: true,
  additionalClasses: ["mt-2", "mb-4"],
};

const productCategoryMapping = {
  mfp: "multifunctional_printers",
  cp: "consumer_printers",
  dd: "digital_duplicators",
  vc: "visual_communications",
};

class ProductsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productModalShow: false,
      modalProduct: {},
    };
  }

  showProductModal() {
    this.setState({ productModalShow: true });
  }

  hideProductModal() {
    this.setState({ productModalShow: false });
  }

  setProductAndShowProductModal(product = {}) {
    if (product !== {}) {
      this.setState({ modalProduct: product }, () => this.showProductModal());
    }
  }

  render() {
    const { productModalShow, modalProduct } = this.state;
    const productCategory = this.props.match.params.cat;
    const __products = [];

    if (productCategory === "all") {
      Object.keys(productCategoryMapping).map((category) => {
        return __products.push(
          productsData.products[productCategoryMapping[category]]
        );
      });
    } else {
      __products.push(
        productsData.products[productCategoryMapping[productCategory]]
      );
    }

    return (
      <BasePage pageOptions={productPageOptions}>
        {__products.length > 0 &&
          __products.map((product, idx) => {
            return (
              <div key={idx}>
                <Header
                  text={product.category}
                  size={1}
                  additionalClasses={[
                    isDevice ? "text-center" : "text-start",
                    "readex-pro",
                    "readex-pro__medium",
                    "mt-3",
                    "text-brand-1",
                  ]}
                />
                <Row className="products">
                  {product.items.map((productItem, iidx) => {
                    return (
                      <Col
                        className={clsx(["text-center", "mt-3"])}
                        key={iidx}
                        xs={6}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                        xxl={2}
                      >
                        <ProductBox
                          handleClick={() =>
                            this.setProductAndShowProductModal(productItem)
                          }
                          product={productItem}
                        />
                      </Col>
                    );
                  })}
                  <div className="mt-4" />
                </Row>
              </div>
            );
          })}
        {__products.length > 0 && (
          <VerticalModal
            verticalModalOptions={{
              fullScreen: true,
              customHeader: false,
            }}
            modalTitle={modalProduct.title}
            modalBody={<ProductModalContent product={modalProduct} />}
            modalShow={productModalShow}
            handleClose={() => this.hideProductModal()}
          />
        )}
      </BasePage>
    );
  }
}

ProductsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cat: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsPage;
