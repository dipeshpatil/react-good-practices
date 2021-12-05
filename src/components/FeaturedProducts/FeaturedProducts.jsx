import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Header from "../Header/Header";

import featuredProductsData from "../../data/featured_products_data.json";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  const [featuredProductInfo, setFeaturedProductInfo] = useState(
    featuredProductsData[0]
  );

  return (
    <Container className="mt-3">
      <Header
        size={1}
        additionalClasses={["text-center", "readex-pro", "readex-pro__medium"]}
      >
        <i class="bi bi-arrow-left"></i>
        &nbsp; Featured Products &nbsp;
        <i class="bi bi-arrow-right"></i>
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
        <Col className="readex-pro featured-product-info px-4" sm={8}>
          <Header
            size={2}
            additionalClasses={[
              "text-start",
              "readex-pro",
              "readex-pro__medium",
              "mt-3"
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
