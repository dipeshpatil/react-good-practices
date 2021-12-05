import React, { PureComponent } from "react";

// Components
import BasePage from "../../components/BasePage/BasePage";
import SimpleImageCarousel from "../../components/Carousels/SimpleImageCarousel";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import VerticalDock from "../../components/VerticalDock/VerticalDock";

// Data
import carouselData from "../../data/carousel_data.json";
import verticalDockData from "../../data/vertical_dock_data.json";

import "./HomePage.scss";

const homePageOptions = {
  fluidContainer: true,
  useContainer: false,

  navBarOptions: {
    variant: "light",
    background: "light",
    title: "IMPRIMEX",
    orientation: "end",
  },
};

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BasePage pageOptions={homePageOptions}>
        <SimpleImageCarousel data={carouselData} />
        <VerticalDock
          data={verticalDockData}
          dockOptions={{ useContainer: false, fluidContainer: false }}
        />
        <FeaturedProducts />
      </BasePage>
    );
  }
}

export default HomePage;
