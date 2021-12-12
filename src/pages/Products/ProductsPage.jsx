import clsx from "clsx";
import React, { PureComponent } from "react";
import { Row, Col, Image } from "react-bootstrap";

import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";

import productsData from "../../data/products_page_data.json";

import "./ProductsPage.scss";

const isDark = JSON.parse(localStorage.isDark ?? null) || false;

const productPageOptions = {
  fluidContainer: false,
  useContainer: true,
  additionalClasses: ["mt-2", "mb-4", "readex-pro", "readex-pro__medium"],

  navBarOptions: {
    variant: isDark ? "dark" : "light",
    background: isDark ? "dark" : "light",
    title: "IMPRIMEX",
    orientation: "end",
  },
};

class ProductsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { products } = productsData;

    return (
      <BasePage pageOptions={productPageOptions}>
        <Header
          size={1}
          additionalClasses={[
            "text-center",
            "readex-pro",
            "readex-pro__medium",
            isDark && "text-light",
          ]}
        >
          Products
        </Header>
        <Row className="products">
          {products["multifunctional_printers"].items.map((product, idx) => {
            return (
              <Col className="col-6 text-center mt-3" sm={3} key={idx}>
                <Image className="products__image" src={product.image} />
                <div className={clsx([
                  "products__title",
                  isDark && "products__title-dark"
                ])}>{product.title}</div>
              </Col>
            );
          })}
        </Row>
      </BasePage>
    );
  }
}

export default ProductsPage;
