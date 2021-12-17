import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";

import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import ProductModal from "../../components/Modals/ProductModal/ProductModal";

import productsData from "../../data/products_page_data.json";

import "./ProductsPage.scss";

const isDark = JSON.parse(localStorage.isDark ?? null) || false;

const productPageOptions = {
  fluidContainer: false,
  useContainer: true,
  additionalClasses: ["mt-2", "mb-4"],

  navBarOptions: {
    variant: isDark ? "dark" : "light",
    background: isDark ? "dark" : "light",
    title: "IMPRIMEX",
    orientation: "end",
  },
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
      productOffcanvasShow: false,
      offcanvasProduct: {},
    };
  }

  showProductOffcanvas = () => {
    this.setState({ productOffcanvasShow: true });
  };

  hideProductOffcanvas = () => {
    this.setState({ productOffcanvasShow: false });
  };

  setProductAndShowProductOffcanvas = (product = {}) => {
    if (product !== {}) {
      this.setState({ offcanvasProduct: product }, () =>
        this.showProductOffcanvas()
      );
    }
  };

  render() {
    const { productOffcanvasShow, offcanvasProduct } = this.state;

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
          size={1}
          additionalClasses={[
            "text-center",
            "readex-pro",
            "readex-pro__medium",
            "mt-3",
            isDark && "text-danger",
          ]}
        >
          {products.category}
        </Header>
        {products.items.length > 0 && (
          <Row className="products">
            {products.items.map((product, idx) => {
              return (
                <Col className="col-6 text-center mt-3" sm={3} key={idx}>
                  <ProductBox
                    handleClick={() =>
                      this.setProductAndShowProductOffcanvas(product)
                    }
                    product={product}
                  />
                </Col>
              );
            })}
          </Row>
        )}
        <ProductModal
          product={offcanvasProduct}
          show={productOffcanvasShow}
          handleClose={() => this.hideProductOffcanvas()}
        />
      </BasePage>
    );
  }
}

export default ProductsPage;
