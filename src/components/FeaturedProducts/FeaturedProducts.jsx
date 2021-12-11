import React, { useState } from "react";
import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";

import Header from "../Header/Header";

import featuredProductsData from "../../data/featured_products_data.json";
import "./FeaturedProducts.scss";

const isDark = JSON.parse(localStorage.isDark ?? null) || false;

const FeaturedProducts = () => {
  const [featuredProductInfo, setFeaturedProductInfo] = useState(
    featuredProductsData[0]
  );

  return (
    <Container className={clsx([isDark && "bg-dark", "mt-3", "mb-3"])}>
      <Header
        size={1}
        additionalClasses={[
          "text-center",
          "readex-pro",
          "readex-pro__medium",
          isDark && "text-light",
        ]}
      >
        <i className="bi bi-arrow-left"></i>
        &nbsp; Featured Products &nbsp;
        <i className="bi bi-arrow-right"></i>
      </Header>
      <Row className="mt-3">
        <div className="scrollmenu">
          {featuredProductsData.map((product) => {
            return (
              <Col key={product.id} className="col-4 h-scroll" sm={2}>
                <Image
                  onClick={() => setFeaturedProductInfo(product)}
                  className="featured-product"
                  src={product.imgUrl}
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
              src={featuredProductInfo.imgUrl}
            />
          </center>
        </Col>
        <Col
          className={clsx([
            "readex-pro",
            "featured-product-info",
            "px-4",
            "mt-3",
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
              "mt-3",
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
