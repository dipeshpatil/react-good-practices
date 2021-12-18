import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";

import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import ProductModal from "../../components/Modals/ProductModal/ProductModal";

import productsData from "../../data/products_page_data.json";

import "./ProductsPage.scss";

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

  showProductModal = () => {
    this.setState({ productModalShow: true });
  };

  hideProductModal = () => {
    this.setState({ productModalShow: false });
  };

  setProductAndShowProductModal = (product = {}) => {
    if (product !== {}) {
      this.setState({ modalProduct: product }, () => this.showProductModal());
    }
  };

  render() {
    const { productModalShow, modalProduct } = this.state;

    const productCategory = this.props.match.params.cat;
    let products = {};
    let allProducts = [];

    if (productCategory === "all") {
      Object.keys(productCategoryMapping).map((category) => {
        return allProducts.push(
          ...productsData.products[productCategoryMapping[category]].items
        );
      });
      products.items = allProducts;
      products.category = "Products";
    } else {
      products = productsData.products[productCategoryMapping[productCategory]];
    }

    return (
      <BasePage pageOptions={productPageOptions}>
        <Header
          text={products.category}
          size={1}
          additionalClasses={[
            "text-center",
            "readex-pro",
            "readex-pro__medium",
            "mt-3",
            "text-danger",
          ]}
        />
        {products.items.length > 0 && (
          <Row className="products">
            {products.items.map((product, idx) => {
              return (
                <Col
                  className="text-center mt-3"
                  key={idx}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  xxl={2}
                >
                  <ProductBox
                    handleClick={() =>
                      this.setProductAndShowProductModal(product)
                    }
                    product={product}
                  />
                </Col>
              );
            })}
          </Row>
        )}
        <ProductModal
          product={modalProduct}
          show={productModalShow}
          handleClose={() => this.hideProductModal()}
        />
      </BasePage>
    );
  }
}

export default ProductsPage;
