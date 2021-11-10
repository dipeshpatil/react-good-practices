import React, { PureComponent } from "react";

import BasePage from "../../components/BasePage/BasePage";

import "./HomePage.scss";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <BasePage>Home Page</BasePage>;
  }
}

export default HomePage;
