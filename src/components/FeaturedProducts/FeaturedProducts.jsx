import React, { useState } from "react";
import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";

import Header from "../Header/Header";
import ProductBox from "../ProductBox/ProductBox";

import productsData from "../../data/products_page_data.json";

import "./FeaturedProducts.scss";

const isDark = JSON.parse(localStorage.isDark ?? null) || false;

const screen = {
  width: window.screen.width,
  height: window.screen.height,
};

const productCategoryMapping = {
  mfp: "multifunctional_printers",
  cp: "consumer_printers",
  dd: "digital_duplicators",
  vc: "visual_communications",
};

const FeaturedProducts = () => {
  const featuredProducts = [];

  Object.keys(productCategoryMapping).map((category) => {
    return featuredProducts.push(
      ...productsData.products[productCategoryMapping[category]].items.filter(
        (item) => item.featured
      )
    );
  });

  const [featuredProductInfo, setFeaturedProductInfo] = useState(
    featuredProducts[0]
  );

  return (
    <Container className={clsx([isDark && "bg-dark", "mt-4", "mb-4"])}>
      <Header
        size={1}
        additionalClasses={[
          "text-center",
          "readex-pro",
          "readex-pro__medium",
          isDark && "text-light",
        ]}
      >
        Featured Products
      </Header>
      <Row>
        <div className="scrollmenu">
          {featuredProducts.map((product, idx) => {
            return (
              <Col key={idx} className="col-4 h-scroll" sm={2}>
                <ProductBox
                  handleClick={() => setFeaturedProductInfo(product)}
                  product={product}
                />
              </Col>
            );
          })}
        </div>
      </Row>
      <Row className="mt-3">
        <Col sm={4}>
          <center>
            <Image
              className="featured-product-image"
              src={featuredProductInfo.image}
            />
          </center>
        </Col>
        <Col
          className={clsx([
            "readex-pro",
            "featured-product-info",
            "px-4",
            isDark && "text-light",
          ])}
          sm={8}
        >
          <Header
            size={2}
            additionalClasses={[
              "text-start",
              "readex-pro",
              "readex-pro__medium",
              screen.width >= 320 && screen.width <= 450 && "mt-3",
            ]}
          >
            {featuredProductInfo.title}
          </Header>
          {featuredProductInfo.description}
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
