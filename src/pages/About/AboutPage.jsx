import React, { PureComponent } from "react";

import BasePage from "../../components/BasePage/BasePage";

import "./AboutPage.scss";

class AboutPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <BasePage>About Page</BasePage>;
  }
}

export default AboutPage;
