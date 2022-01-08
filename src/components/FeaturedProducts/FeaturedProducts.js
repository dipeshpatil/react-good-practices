import React, { useState } from "react";
import clsx from "clsx";
import { Container, Row, Col, Image } from "react-bootstrap";

import Header from "../Header/Header";
import ProductBox from "../ProductBox/ProductBox";

import productsData from "../../data/products_page_data.json";

import config from "../../config/config";

import "./FeaturedProducts.scss";

const { isDark, isDevice } = config;

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
    <Container className={clsx([isDark && "dark-page", "mt-3", "mb-4"])}>
      <Header
        text="Featured Products"
        size={1}
        additionalClasses={[
          "text-center",
          "readex-pro",
          "readex-pro__medium",
          "text-brand-1",
        ]}
      />
      <Row>
        <div className="scrollmenu">
          {featuredProducts.map((product, idx) => {
            return (
              <Col key={idx} className="col-4 h-scroll" sm={2}>
                <ProductBox
                  handleClick={() => setFeaturedProductInfo(product)}
                  product={product}
                  disableFeatureTint={true}
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
              src={
                isDark
                  ? featuredProductInfo.image.dark ?? featuredProductInfo.image
                  : featuredProductInfo.image.light ?? featuredProductInfo.image
              }
            />
          </center>
        </Col>
        <Col
          className={clsx([
            "readex-pro",
            "readex-pro__regular",
            "featured-product-info",
            "px-4",
          ])}
          sm={8}
        >
          <Header
            text={featuredProductInfo.title}
            size={2}
            additionalClasses={[
              "text-start",
              "readex-pro",
              "readex-pro__medium",
              "text-brand-1",
              isDevice && "mt-3",
            ]}
          />
          <div className={clsx([isDark && "text-light"])}>
            {featuredProductInfo.description}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
