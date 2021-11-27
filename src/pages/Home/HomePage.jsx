import React, { PureComponent } from "react";

// Components
import BasePage from "../../components/BasePage/BasePage";
import SimpleImageCarousel from "../../components/Carousels/SimpleImageCarousel";
import VerticalDock from "../../components/VerticalDock/VerticalDock";

// Data
import carouselData from "../../data/carousel_data.json";
import verticalDockData from "../../data/vertical_dock_data.json";

import "./HomePage.scss";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BasePage useContainer={false}>
        <SimpleImageCarousel data={carouselData} />
        <VerticalDock
          data={verticalDockData}
          dockOptions={{ useContainer: true, fluidContainer: false }}
        />
      </BasePage>
    );
  }
}

export default HomePage;
