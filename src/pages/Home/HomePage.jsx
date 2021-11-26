import React, { PureComponent } from "react";

import BasePage from "../../components/BasePage/BasePage";

import Header from "../../components/Header/Header";
import SimpleImageCarousel from "../../components/Carousels/SimpleImageCarousel";

import carouselData from "../../data/carousel_data.json";

import "./HomePage.scss";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BasePage useContainer={false}>
        <SimpleImageCarousel data={carouselData}/>
        <Header text="Home Page" additionalClasses={["text-center"]} />
      </BasePage>
    );
  }
}

export default HomePage;
